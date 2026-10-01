-- Anonymous click events for the course schedule's view and download links.
-- An event ID makes retries idempotent without storing a visitor identifier.
CREATE TABLE IF NOT EXISTS course_material_clicks (
  event_id TEXT PRIMARY KEY CHECK (length(event_id) = 32 AND event_id NOT GLOB '*[^0-9a-f]*'),
  course_id TEXT NOT NULL CHECK (course_id IN ('SOCI235.01', '202621742')),
  week INTEGER NOT NULL CHECK (week BETWEEN 0 AND 9),
  material_kind TEXT NOT NULL CHECK (material_kind IN ('tutorial', 'slides')),
  action TEXT NOT NULL CHECK (action IN ('view', 'download')),
  clicked_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS course_material_clicks_course_week
  ON course_material_clicks (course_id, week);
