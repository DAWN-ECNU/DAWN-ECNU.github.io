-- A browser keeps an opaque random token in localStorage. Only its SHA-256 hash
-- is stored here; no IP address, user agent, name, or page path is recorded.
CREATE TABLE IF NOT EXISTS visitors (
  token_hash TEXT PRIMARY KEY,
  first_seen TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS visits_by_day (
  visitor_hash TEXT NOT NULL REFERENCES visitors(token_hash),
  day TEXT NOT NULL,
  PRIMARY KEY (visitor_hash, day)
);

CREATE INDEX IF NOT EXISTS visits_by_day_day ON visits_by_day(day);

CREATE TABLE IF NOT EXISTS likes (
  visitor_hash TEXT PRIMARY KEY REFERENCES visitors(token_hash),
  liked_at TEXT NOT NULL
);
