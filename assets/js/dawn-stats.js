(() => {
  if (window.dawnMetrics) return;

  const panel = document.getElementById("dawn-site-stats-panel");
  const toggle = document.getElementById("dawn-stats-toggle");
  const closeButton = panel?.querySelector(".dawn-site-stats__close");
  const today = document.getElementById("dawn-today-visitors");
  const month = document.getElementById("dawn-month-visitors");
  const total = document.getElementById("dawn-total-visitors");
  const note = panel?.querySelector(".dawn-site-stats__note");
  if (!panel || !toggle || !closeButton || !today || !month || !total) return;

  function closeStats(returnFocus = false) {
    if (panel.hidden) return;
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    if (returnFocus) toggle.focus({ preventScroll: true });
  }

  function openStats() {
    const mobileMenu = document.getElementById("navbarNav");
    if (mobileMenu?.classList.contains("show") && window.jQuery?.fn?.collapse) {
      window.jQuery(mobileMenu).collapse("hide");
    }
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    closeButton.focus({ preventScroll: true });
  }

  toggle.addEventListener("click", () => (panel.hidden ? openStats() : closeStats(true)));
  closeButton.addEventListener("click", () => closeStats(true));
  document.addEventListener("pointerdown", (event) => {
    if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) closeStats();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) closeStats(true);
  });

  const apiBase = (document.body.dataset.dawnMetricsApi || "").trim().replace(/\/+$/, "");
  const enabled = Boolean(apiBase);
  const tokenKey = "dawn-visitor-token";
  const subscribers = new Set();
  const validToken = (value) => typeof value === "string" && /^[0-9a-f]{32}$/.test(value);
  const validCount = (value) => Number.isSafeInteger(value) && value >= 0;
  const format = (value) => value.toLocaleString("zh-CN");
  let visitorToken = null;
  let currentState = null;
  let refreshPromise = null;
  let writePromise = null;
  let lastRefreshAt = 0;

  try {
    const saved = localStorage.getItem(tokenKey);
    if (validToken(saved)) visitorToken = saved;
  } catch (_) {}

  function saveToken(value) {
    if (!validToken(value)) throw new Error("计数服务返回了无效访客标识");
    visitorToken = value;
    try {
      localStorage.setItem(tokenKey, value);
    } catch (_) {}
  }

  function clearToken() {
    visitorToken = null;
    try {
      localStorage.removeItem(tokenKey);
    } catch (_) {}
  }

  function publish(state) {
    if (
      !state ||
      !["todayVisitors", "last30DayVisitors", "totalVisitors", "totalLikes"].every((key) => validCount(state[key])) ||
      typeof state.liked !== "boolean"
    ) {
      throw new Error("计数服务返回了无效数据");
    }
    saveToken(state.visitorToken);
    currentState = state;
    today.textContent = format(state.todayVisitors);
    month.textContent = format(state.last30DayVisitors);
    total.textContent = format(state.totalVisitors);
    if (note) {
      note.textContent =
        validCount(state.legacyVisitorBaseline) && state.legacyVisitorBaseline > 0
          ? `累计含旧站基数 ${format(state.legacyVisitorBaseline)}；今日及近30日仅新系统，跨平台可能重复`
          : "匿名浏览器去重 · 近30日访客";
    }
    subscribers.forEach((listener) => listener(state));
    return state;
  }

  async function request(path, options = {}) {
    const headers = new Headers(options.headers);
    if (visitorToken) headers.set("X-Dawn-Visitor", visitorToken);
    const response = await fetch(apiBase + path, {
      ...options,
      headers,
      mode: "cors",
      credentials: "omit",
      cache: "no-store",
    });
    if (!response.ok) {
      const error = new Error("计数服务暂不可用");
      error.status = response.status;
      throw error;
    }
    return publish(await response.json());
  }

  function showFailure() {
    if (note) note.textContent = currentState ? "暂无法更新，显示上次读取的数据" : "计数服务暂不可用，请稍后重试";
  }

  function refresh() {
    if (!enabled) return Promise.reject(new Error("共享计数服务尚未启用"));
    if (writePromise) return writePromise;
    if (refreshPromise) return refreshPromise;
    lastRefreshAt = Date.now();
    refreshPromise = request("/api/site-state")
      .catch((error) => {
        showFailure();
        throw error;
      })
      .finally(() => {
        refreshPromise = null;
      });
    return refreshPromise;
  }

  async function setLiked(liked) {
    if (!enabled) throw new Error("共享计数服务尚未启用");
    if (writePromise) await writePromise;
    if (refreshPromise) await refreshPromise;
    if (!visitorToken) await refresh();
    const submit = () =>
      request("/api/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liked }),
      });
    writePromise = (async () => {
      try {
        return await submit();
      } catch (error) {
        if (error.status !== 401) throw error;
        clearToken();
        lastRefreshAt = Date.now();
        await request("/api/site-state");
        return submit();
      }
    })()
      .then((state) => {
        lastRefreshAt = Date.now();
        return state;
      })
      .catch((error) => {
        showFailure();
        throw error;
      })
      .finally(() => {
        writePromise = null;
      });
    return writePromise;
  }

  window.dawnMetrics = Object.freeze({
    enabled,
    refresh,
    setLiked,
    subscribe(listener) {
      subscribers.add(listener);
      if (currentState) listener(currentState);
      return () => subscribers.delete(listener);
    },
  });

  if (!enabled) {
    if (note) note.textContent = "共享计数服务尚未启用";
    return;
  }

  void refresh().catch(() => {});
  window.setInterval(() => {
    if (!document.hidden && Date.now() - lastRefreshAt >= 60_000) void refresh().catch(() => {});
  }, 60_000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && Date.now() - lastRefreshAt >= 60_000) void refresh().catch(() => {});
  });
})();
