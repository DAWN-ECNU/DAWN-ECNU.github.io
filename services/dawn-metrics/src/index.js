const TOKEN_PATTERN = /^[0-9a-f]{32}$/;
const COURSE_IDS = new Set(["SOCI235.01", "202621742"]);
const MATERIAL_KINDS = new Set(["tutorial", "slides"]);
const CLICK_ACTIONS = new Set(["view", "download"]);
const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
  Vary: "Origin",
};

function response(status, payload, origin) {
  const headers = new Headers(JSON_HEADERS);
  if (origin) headers.set("Access-Control-Allow-Origin", origin);
  return new Response(JSON.stringify(payload), { status, headers });
}

function chinaDay(now) {
  return new Date(now.getTime() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

function thirtyDayStart(today) {
  const start = new Date(`${today}T00:00:00.000Z`);
  start.setUTCDate(start.getUTCDate() - 29);
  return start.toISOString().slice(0, 10);
}

function legacyVisitorBaseline(env) {
  const configured = env.LEGACY_VISITOR_BASELINE ?? "0";
  if (!/^(0|[1-9]\d*)$/.test(String(configured))) throw new Error("Invalid legacy visitor baseline");
  const baseline = Number(configured);
  if (!Number.isSafeInteger(baseline)) throw new Error("Invalid legacy visitor baseline");
  return baseline;
}

function randomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hashToken(token) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(token));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function readJsonBody(request, maxBytes) {
  if (!/^application\/json(?:\s*;|\s*$)/i.test(request.headers.get("Content-Type") || "")) {
    throw new Error("JSON body required");
  }
  const reader = request.body?.getReader();
  if (!reader) throw new Error("JSON body required");
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) throw new Error("JSON body too large");
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch (_) {
    throw new Error("Invalid JSON body");
  }
}

async function readLikeBody(request) {
  const payload = await readJsonBody(request, 64);
  if (!payload || Array.isArray(payload) || typeof payload !== "object" || typeof payload.liked !== "boolean") {
    throw new Error("liked must be a boolean");
  }
  return payload.liked;
}

async function readMaterialClickBody(request) {
  const payload = await readJsonBody(request, 512);
  if (!payload || Array.isArray(payload) || typeof payload !== "object") throw new Error("Invalid material click");
  if (!TOKEN_PATTERN.test(payload.eventId)) throw new Error("Invalid eventId");
  if (!COURSE_IDS.has(payload.courseId)) throw new Error("Invalid courseId");
  if (!Number.isInteger(payload.week) || payload.week < 0 || payload.week > 9) throw new Error("Invalid week");
  if (!MATERIAL_KINDS.has(payload.materialKind)) throw new Error("Invalid materialKind");
  if (!CLICK_ACTIONS.has(payload.action)) throw new Error("Invalid action");
  return payload;
}

const totalsQuery = `
  SELECT
    (SELECT COUNT(*) FROM visits_by_day WHERE day = ?) AS todayVisitors,
    (SELECT COUNT(DISTINCT visitor_hash) FROM visits_by_day WHERE day >= ?) AS last30DayVisitors,
    (SELECT COUNT(*) FROM visitors) AS totalVisitors,
    (SELECT COUNT(*) FROM likes) AS totalLikes,
    EXISTS(SELECT 1 FROM likes WHERE visitor_hash = ?) AS liked
`;

function stateFromBatch(batch, today, token, baseline) {
  const row = batch.at(-1)?.results?.[0];
  if (!row) throw new Error("Missing D1 count result");
  const totalVisitors = row.totalVisitors + baseline;
  if (!Number.isSafeInteger(totalVisitors)) throw new Error("Invalid total visitor count");
  return {
    todayVisitors: row.todayVisitors,
    last30DayVisitors: row.last30DayVisitors,
    totalVisitors,
    legacyVisitorBaseline: baseline,
    totalLikes: row.totalLikes,
    liked: row.liked === 1,
    asOf: today,
    visitorToken: token,
  };
}

async function getState(request, env, now, origin, baseline) {
  const today = chinaDay(now);
  const supplied = request.headers.get("X-Dawn-Visitor") || "";
  let token = supplied;
  let visitorHash = TOKEN_PATTERN.test(token) ? await hashToken(token) : "";
  const exists = visitorHash ? await env.DB.prepare("SELECT 1 AS found FROM visitors WHERE token_hash = ?").bind(visitorHash).first() : null;
  const isNew = !exists;
  if (isNew) {
    token = randomToken();
    visitorHash = await hashToken(token);
  }

  const statements = [];
  if (isNew) {
    statements.push(env.DB.prepare("INSERT INTO visitors (token_hash, first_seen) VALUES (?, ?)").bind(visitorHash, now.toISOString()));
  }
  statements.push(
    env.DB.prepare("INSERT OR IGNORE INTO visits_by_day (visitor_hash, day) VALUES (?, ?)").bind(visitorHash, today),
    env.DB.prepare(totalsQuery).bind(today, thirtyDayStart(today), visitorHash)
  );
  return response(200, stateFromBatch(await env.DB.batch(statements), today, token, baseline), origin);
}

async function setLike(request, env, now, origin, baseline) {
  const token = request.headers.get("X-Dawn-Visitor") || "";
  if (!TOKEN_PATTERN.test(token)) return response(401, { error: "Unknown visitor" }, origin);
  const visitorHash = await hashToken(token);
  const exists = await env.DB.prepare("SELECT 1 AS found FROM visitors WHERE token_hash = ?").bind(visitorHash).first();
  if (!exists) return response(401, { error: "Unknown visitor" }, origin);

  let liked;
  try {
    liked = await readLikeBody(request);
  } catch (error) {
    return response(400, { error: error.message }, origin);
  }
  const today = chinaDay(now);
  const update = liked
    ? env.DB.prepare("INSERT OR IGNORE INTO likes (visitor_hash, liked_at) VALUES (?, ?)").bind(visitorHash, now.toISOString())
    : env.DB.prepare("DELETE FROM likes WHERE visitor_hash = ?").bind(visitorHash);
  const batch = await env.DB.batch([update, env.DB.prepare(totalsQuery).bind(today, thirtyDayStart(today), visitorHash)]);
  return response(200, stateFromBatch(batch, today, token, baseline), origin);
}

async function getMaterialCounts(request, env, origin) {
  const courseIds = new URL(request.url).searchParams.getAll("courseId");
  if (courseIds.length !== 1 || !COURSE_IDS.has(courseIds[0])) {
    return response(400, { error: "Invalid courseId" }, origin);
  }
  const courseId = courseIds[0];
  const counts = Object.fromEntries(Array.from({ length: 10 }, (_, week) => [String(week), 0]));
  const { results } = await env.DB.prepare("SELECT week, COUNT(*) AS total FROM course_material_clicks WHERE course_id = ? GROUP BY week")
    .bind(courseId)
    .all();
  for (const row of results) counts[row.week] = row.total;
  return response(200, { courseId, counts }, origin);
}

async function setMaterialClick(request, env, now, origin) {
  let click;
  try {
    click = await readMaterialClickBody(request);
  } catch (error) {
    return response(400, { error: error.message }, origin);
  }
  const { eventId, courseId, week, materialKind, action } = click;
  const batch = await env.DB.batch([
    env.DB.prepare(
      "INSERT OR IGNORE INTO course_material_clicks (event_id, course_id, week, material_kind, action, clicked_at) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(eventId, courseId, week, materialKind, action, now.toISOString()),
    env.DB.prepare("SELECT COUNT(*) AS total FROM course_material_clicks WHERE course_id = ? AND week = ?").bind(courseId, week),
  ]);
  const total = batch[1]?.results?.[0]?.total;
  if (!Number.isSafeInteger(total)) throw new Error("Missing D1 material count result");
  return response(200, { courseId, week, total, recorded: batch[0]?.meta?.changes === 1 }, origin);
}

export async function handleRequest(request, env, now = new Date()) {
  const origin = request.headers.get("Origin");
  if (!env.ALLOWED_ORIGIN || origin !== env.ALLOWED_ORIGIN) {
    return response(403, { error: "Origin denied" });
  }

  const path = new URL(request.url).pathname;
  const methods = {
    "/api/site-state": "GET",
    "/api/like": "POST",
    "/api/material-counts": "GET",
    "/api/material-click": "POST",
  };
  const allowedMethod = methods[path];
  if (!allowedMethod) {
    return response(404, { error: "Unknown API path" }, origin);
  }
  if (request.method === "OPTIONS") {
    const requestedMethod = request.headers.get("Access-Control-Request-Method");
    if (requestedMethod !== allowedMethod) {
      return response(405, { error: "Method not allowed" }, origin);
    }
    const headers = new Headers(JSON_HEADERS);
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", requestedMethod);
    headers.set("Access-Control-Allow-Headers", "Content-Type, X-Dawn-Visitor");
    headers.set("Access-Control-Max-Age", "600");
    return new Response(null, { status: 204, headers });
  }
  if (request.method !== allowedMethod) {
    return response(405, { error: "Method not allowed" }, origin);
  }
  if (!env.DB) return response(503, { error: "Counter temporarily unavailable" }, origin);

  try {
    if (path === "/api/site-state" || path === "/api/like") {
      const baseline = legacyVisitorBaseline(env);
      return path === "/api/site-state" ? await getState(request, env, now, origin, baseline) : await setLike(request, env, now, origin, baseline);
    }
    if (path === "/api/material-counts") return await getMaterialCounts(request, env, origin);
    return await setMaterialClick(request, env, now, origin);
  } catch (_) {
    return response(503, { error: "Counter temporarily unavailable" }, origin);
  }
}

export default {
  fetch(request, env) {
    return handleRequest(request, env);
  },
};
