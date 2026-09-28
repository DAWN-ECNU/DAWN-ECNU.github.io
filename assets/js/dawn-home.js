(() => {
  const button = document.querySelector(".dawn-like");
  const count = document.getElementById("dawn-like-count");
  if (!button || !count || button.dataset.dawnMetricsBound) return;
  button.dataset.dawnMetricsBound = "true";

  const metrics = window.dawnMetrics;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let liked = false;
  let ready = false;
  let pending = false;
  button.disabled = true;

  if (!metrics?.enabled) {
    button.title = "共享点赞服务尚未启用";
    return;
  }

  const unsubscribe = metrics.subscribe((state) => {
    ready = true;
    liked = state.liked;
    button.setAttribute("aria-pressed", String(liked));
    button.title = liked ? "取消点赞" : "点赞";
    button.disabled = pending;
    count.textContent = state.totalLikes.toLocaleString("zh-CN");
  });
  const onSectionChange = (event) => {
    if (event.detail?.section === "home") return;
    unsubscribe();
    document.removeEventListener("dawn:sectionchange", onSectionChange);
  };
  document.addEventListener("dawn:sectionchange", onSectionChange);

  button.addEventListener("click", async () => {
    if (!ready || pending) return;
    pending = true;
    button.disabled = true;
    if (!reducedMotion.matches) button.classList.add("is-pulsing");
    try {
      await metrics.setLiked(!liked);
    } catch (_) {
      button.title = "计数服务暂不可用，请稍后重试";
    } finally {
      pending = false;
      button.disabled = !ready;
      window.setTimeout(() => button.classList.remove("is-pulsing"), 560);
    }
  });
})();
