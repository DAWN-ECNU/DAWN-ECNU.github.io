import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";
import test from "node:test";
import { handleRequest } from "../src/index.js";

const ORIGIN = "https://dawn-ecnu.github.io";
const BASE = "https://metrics.example/api";
const migration = readFileSync(new URL("../migrations/0001_initial.sql", import.meta.url), "utf8");

function database() {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec("PRAGMA foreign_keys=ON");
  sqlite.exec(migration);
  sqlite.exec(migration); // The initial migration is safe to rerun.

  function prepared(sql, values = []) {
    return {
      sql,
      values,
      bind(...next) {
        return prepared(sql, next);
      },
      async first() {
        return sqlite.prepare(sql).get(...values) || null;
      },
    };
  }

  return {
    prepare(sql) {
      return prepared(sql);
    },
    async batch(statements) {
      sqlite.exec("BEGIN IMMEDIATE");
      try {
        const result = statements.map(({ sql, values }) => {
          const statement = sqlite.prepare(sql);
          return /^\s*SELECT\b/i.test(sql) ? { results: statement.all(...values) } : { results: [], meta: statement.run(...values) };
        });
        sqlite.exec("COMMIT");
        return result;
      } catch (error) {
        sqlite.exec("ROLLBACK");
        throw error;
      }
    },
    raw: sqlite,
  };
}

function setup() {
  return { DB: database(), ALLOWED_ORIGIN: ORIGIN };
}

async function call(env, path, { method = "GET", token, liked, origin = ORIGIN, body, now = "2026-09-28T02:00:00Z" } = {}) {
  const headers = { Origin: origin };
  if (token) headers["X-Dawn-Visitor"] = token;
  if (liked !== undefined || body !== undefined) headers["Content-Type"] = "application/json";
  const request = new Request(`${BASE}${path}`, {
    method,
    headers,
    body: body === undefined ? (liked === undefined ? undefined : JSON.stringify({ liked })) : body,
  });
  const response = await handleRequest(request, env, new Date(now));
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  return { status: response.status, headers: response.headers, data: await response.json() };
}

test("one browser is counted once per Beijing day and gets a reusable token", async () => {
  const env = setup();
  const first = await call(env, "/site-state");
  assert.equal(first.status, 200);
  assert.match(first.data.visitorToken, /^[0-9a-f]{32}$/);
  assert.deepEqual(
    [first.data.todayVisitors, first.data.last30DayVisitors, first.data.totalVisitors, first.data.totalLikes, first.data.liked],
    [1, 1, 1, 0, false]
  );
  const second = await call(env, "/site-state", { token: first.data.visitorToken });
  assert.equal(second.data.visitorToken, first.data.visitorToken);
  assert.equal(second.data.todayVisitors, 1);
  assert.equal(second.data.totalVisitors, 1);
  assert.equal(env.DB.raw.prepare("SELECT COUNT(*) AS n FROM visits_by_day").get().n, 1);
  assert.equal(env.DB.raw.prepare("SELECT COUNT(*) AS n FROM visitors").get().n, 1);
  assert.notEqual(env.DB.raw.prepare("SELECT token_hash FROM visitors").get().token_hash, first.data.visitorToken);
});

test("likes are shared, idempotent, and reversible", async () => {
  const env = setup();
  const a = (await call(env, "/site-state")).data.visitorToken;
  const b = (await call(env, "/site-state")).data.visitorToken;
  assert.equal((await call(env, "/like", { method: "POST", token: a, liked: true })).data.totalLikes, 1);
  assert.equal((await call(env, "/like", { method: "POST", token: a, liked: true })).data.totalLikes, 1);
  assert.equal((await call(env, "/like", { method: "POST", token: b, liked: true })).data.totalLikes, 2);
  const aAgain = await call(env, "/site-state", { token: a });
  assert.equal(aAgain.data.totalLikes, 2);
  assert.equal(aAgain.data.liked, true);
  assert.equal((await call(env, "/like", { method: "POST", token: a, liked: false })).data.totalLikes, 1);
  assert.equal((await call(env, "/like", { method: "POST", token: a, liked: false })).data.totalLikes, 1);
  assert.equal((await call(env, "/site-state", { token: b })).data.liked, true);
});

test("invalid writes and forbidden origins do not change counts", async () => {
  const env = setup();
  const token = (await call(env, "/site-state")).data.visitorToken;
  assert.equal((await call(env, "/like", { method: "POST", liked: true })).status, 401);
  assert.equal((await call(env, "/like", { method: "POST", token: "a".repeat(32), liked: true })).status, 401);
  assert.equal((await call(env, "/like", { method: "POST", token, liked: "yes" })).status, 400);
  assert.equal((await call(env, "/like", { method: "POST", token, body: JSON.stringify({ liked: true, padding: "x".repeat(100) }) })).status, 400);
  const denied = await call(env, "/site-state", { origin: "https://other.example" });
  assert.equal(denied.status, 403);
  assert.equal(denied.headers.get("Access-Control-Allow-Origin"), null);
  assert.equal((await call(env, "/site-state", { origin: "null" })).status, 403);
  const state = await call(env, "/site-state", { token });
  assert.equal(state.data.totalVisitors, 1);
  assert.equal(state.data.totalLikes, 0);
});

test("Beijing midnight and inclusive rolling 30 days", async () => {
  const env = setup();
  const first = await call(env, "/site-state", { now: "2026-09-27T15:59:59Z" });
  const token = first.data.visitorToken;
  assert.equal(first.data.asOf, "2026-09-27");
  const next = await call(env, "/site-state", { token, now: "2026-09-27T16:00:00Z" });
  assert.equal(next.data.asOf, "2026-09-28");
  assert.equal(next.data.todayVisitors, 1);
  assert.equal(env.DB.raw.prepare("SELECT COUNT(*) AS n FROM visits_by_day").get().n, 2);
  const edge = await call(env, "/site-state", { token, now: "2026-10-26T16:00:00Z" });
  assert.equal(edge.data.last30DayVisitors, 1);
});

test("a browser leaves the rolling window after 30 inactive days", async () => {
  const env = setup();
  const token = (await call(env, "/site-state", { now: "2026-09-27T16:00:00Z" })).data.visitorToken;
  const expired = await call(env, "/site-state", { now: "2026-10-27T16:00:00Z" });
  assert.equal(expired.data.todayVisitors, 1);
  assert.equal(expired.data.last30DayVisitors, 1);
  assert.equal(expired.data.totalVisitors, 2);
  const returned = await call(env, "/site-state", { token, now: "2026-10-27T16:00:00Z" });
  assert.equal(returned.data.last30DayVisitors, 2);
});

test("CORS preflight accepts the site and rejects other origins", async () => {
  const env = setup();
  const allowed = await handleRequest(
    new Request(`${BASE}/like`, {
      method: "OPTIONS",
      headers: {
        Origin: ORIGIN,
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "content-type,x-dawn-visitor",
      },
    }),
    env
  );
  assert.equal(allowed.status, 204);
  assert.equal(allowed.headers.get("Access-Control-Allow-Origin"), ORIGIN);
  assert.equal(allowed.headers.get("Access-Control-Allow-Methods"), "POST");
  assert.match(allowed.headers.get("Access-Control-Allow-Headers"), /X-Dawn-Visitor/);
  assert.equal(allowed.headers.get("Cache-Control"), "no-store");
  const wrongMethod = await handleRequest(
    new Request(`${BASE}/like`, { method: "OPTIONS", headers: { Origin: ORIGIN, "Access-Control-Request-Method": "GET" } }),
    env
  );
  assert.equal(wrongMethod.status, 405);
  const denied = await handleRequest(
    new Request(`${BASE}/site-state`, { method: "OPTIONS", headers: { Origin: "https://other.example", "Access-Control-Request-Method": "GET" } }),
    env
  );
  assert.equal(denied.status, 403);
  assert.equal(denied.headers.get("Access-Control-Allow-Origin"), null);
  const noOrigin = await handleRequest(new Request(`${BASE}/site-state`), env);
  assert.equal(noOrigin.status, 403);
  assert.equal(env.DB.raw.prepare("SELECT COUNT(*) AS n FROM visitors").get().n, 0);
});
