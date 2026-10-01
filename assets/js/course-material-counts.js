(() => {
  const apiBase = (document.body.dataset.dawnMetricsApi || "").trim().replace(/\/+$/, "");
  if (!apiBase) return;

  const totals = new Map();
  const validCount = (value) => Number.isSafeInteger(value) && value >= 0;
  const keyFor = (courseId, week) => `${courseId}:${week}`;

  function activeTable() {
    const tables = document.querySelectorAll("table[data-material-counts]");
    for (let index = tables.length - 1; index >= 0; index -= 1) {
      if (!tables[index].closest('[inert], [aria-hidden="true"]')) return tables[index];
    }
    return null;
  }

  function displayCount(courseId, week, count) {
    const key = keyFor(courseId, week);
    const total = Math.max(totals.get(key) ?? 0, count);
    totals.set(key, total);
    const table = activeTable();
    if (table?.dataset.courseId !== courseId) return;
    const output = [...table.querySelectorAll("[data-material-count-week]")].find((item) => item.dataset.materialCountWeek === String(week));
    if (output) output.textContent = total.toLocaleString("zh-CN");
  }

  async function loadCounts() {
    const table = activeTable();
    if (!table) return;
    const courseId = table.dataset.courseId;
    const outputs = table.querySelectorAll("[data-material-count-week]");
    if (!courseId || !outputs.length) return;
    outputs.forEach((output) => (output.textContent = "—"));

    try {
      const url = new URL(`${apiBase}/api/material-counts`);
      url.searchParams.set("courseId", courseId);
      const response = await fetch(url, { mode: "cors", credentials: "omit", cache: "no-store" });
      if (!response.ok) return;
      const data = await response.json();
      if (activeTable() !== table || data.courseId !== courseId || !data.counts || typeof data.counts !== "object") return;
      outputs.forEach((output) => {
        const week = output.dataset.materialCountWeek;
        const count = data.counts[week];
        if (validCount(count)) displayCount(courseId, week, count);
      });
    } catch (_) {
      // A failed counter request must not affect the course links.
    }
  }

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || !(event.target instanceof Element)) return;
    const link = event.target.closest("a[data-material-click]");
    const table = link?.closest("table[data-material-counts]");
    if (!table || table !== activeTable()) return;
    const { courseId, week: weekText, materialKind, action } = link.dataset;
    if (courseId !== table.dataset.courseId || !/^\d+$/.test(weekText || "") || !materialKind || !["view", "download"].includes(action)) return;
    if (!globalThis.crypto?.getRandomValues) return;

    const week = Number(weekText);
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    const eventId = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    void fetch(`${apiBase}/api/material-click`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId, courseId, week, materialKind, action }),
      mode: "cors",
      credentials: "omit",
      cache: "no-store",
      keepalive: true,
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data?.courseId === courseId && String(data.week) === weekText && validCount(data.total)) {
          displayCount(courseId, week, data.total);
        }
      })
      .catch(() => {});
  });

  document.addEventListener("dawn:sectionchange", () => void loadCounts());
  void loadCounts();
})();
