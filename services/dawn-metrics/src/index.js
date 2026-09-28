const TOKEN_PATTERN = /^[0-9a-f]{32}$/;
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

function randomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hashToken(token) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(token));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function readLikeBody(request) {
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
      if (size > 64) throw new Error("JSON body too large");
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
  let payload;
  try {
    payload = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch (_) {
    throw new Error("Invalid JSON body");
  }
  if (!payload || Array.isArray(payload) || typeof payload !== "object" || typeof payload.liked !== "boolean") {
    throw new Error("liked must be a boolean");
  }
  return payload.liked;
}

const totalsQuery = `
  SELECT
    (SELECT COUNT(*) FROM visits_by_day WHERE day = ?) AS todayVisitors,
    (SELECT COUNT(DISTINCT visitor_hash) FROM visits_by_day WHERE day >= ?) AS last30DayVisitors,
    (SELECT COUNT(*) FROM visitors) AS totalVisitors,
    (SELECT COUNT(*) FROM likes) AS totalLikes,
    EXISTS(SELECT 1 FROM likes WHERE visitor_hash = ?) AS liked
`;

function stateFromBatch(batch, today, token) {
  const row = batch.at(-1)?.results?.[0];
  if (!row) throw new Error("Missing D1 count result");
  return {
    todayVisitors: row.todayVisitors,
    last30DayVisitors: row.last30DayVisitors,
    totalVisitors: row.totalVisitors,
    totalLikes: row.totalLikes,
    liked: row.liked === 1,
    asOf: today,
    visitorToken: token,
  };
}

async function getState(request, env, now, origin) {
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
  return response(200, stateFromBatch(await env.DB.batch(statements), today, token), origin);
}

async function setLike(request, env, now, origin) {
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
  return response(200, stateFromBatch(batch, today, token), origin);
}

export async function handleRequest(request, env, now = new Date()) {
  const origin = request.headers.get("Origin");
  if (!env.ALLOWED_ORIGIN || origin !== env.ALLOWED_ORIGIN) {
    return response(403, { error: "Origin denied" });
  }

  const path = new URL(request.url).pathname;
  if (path !== "/api/site-state" && path !== "/api/like") {
    return response(404, { error: "Unknown API path" }, origin);
  }
  if (request.method === "OPTIONS") {
    const requestedMethod = request.headers.get("Access-Control-Request-Method");
    if ((path === "/api/site-state" && requestedMethod !== "GET") || (path === "/api/like" && requestedMethod !== "POST")) {
      return response(405, { error: "Method not allowed" }, origin);
    }
    const headers = new Headers(JSON_HEADERS);
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", requestedMethod);
    headers.set("Access-Control-Allow-Headers", "Content-Type, X-Dawn-Visitor");
    headers.set("Access-Control-Max-Age", "600");
    return new Response(null, { status: 204, headers });
  }
  if ((path === "/api/site-state" && request.method !== "GET") || (path === "/api/like" && request.method !== "POST")) {
    return response(405, { error: "Method not allowed" }, origin);
  }
  if (!env.DB) return response(503, { error: "Counter temporarily unavailable" }, origin);

  try {
    return path === "/api/site-state" ? await getState(request, env, now, origin) : await setLike(request, env, now, origin);
  } catch (_) {
    return response(503, { error: "Counter temporarily unavailable" }, origin);
  }
}

export default {
  fetch(request, env) {
    return handleRequest(request, env);
  },
};
