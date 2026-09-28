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
    const localKey = "dawn-site-liked";
    const label = count.parentElement?.querySelector(".dawn-like-count__label");
    let localLiked = false;
    try {
      localLiked = localStorage.getItem(localKey) === "true";
    } catch (_) {}
    count.parentElement?.classList.add("dawn-like-count--local");
    if (label) label.textContent = "本机 ";

    const showLocalLike = () => {
      button.disabled = false;
      button.setAttribute("aria-pressed", String(localLiked));
      button.setAttribute("aria-label", localLiked ? "取消本机点赞" : "本机点赞");
      button.title = localLiked ? "取消本机点赞（不计入全站累计）" : "本机点赞（共享计数尚未启用）";
      count.textContent = localLiked ? "1" : "0";
    };
    showLocalLike();
    button.addEventListener("click", () => {
      localLiked = !localLiked;
      showLocalLike();
      try {
        localStorage.setItem(localKey, String(localLiked));
      } catch (_) {}
      if (!reducedMotion.matches) {
        button.classList.add("is-pulsing");
        window.setTimeout(() => button.classList.remove("is-pulsing"), 560);
      }
    });
    return;
  }

  button.disabled = false;
  button.title = "正在读取累计点赞，点击可重试";

  const unsubscribe = metrics.subscribe((state) => {
    ready = true;
    liked = state.liked;
    button.setAttribute("aria-pressed", String(liked));
    button.setAttribute("aria-label", liked ? "取消点赞" : "喜欢 DAWN");
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
    if (pending) return;
    pending = true;
    button.disabled = true;
    try {
      if (!ready) await metrics.refresh();
      if (!ready) throw new Error("点赞服务尚未返回数据");
      if (!reducedMotion.matches) button.classList.add("is-pulsing");
      await metrics.setLiked(!liked);
    } catch (_) {
      button.title = "计数服务暂不可用，点击重试";
      button.setAttribute("aria-label", "点赞服务暂不可用，点击重试");
    } finally {
      pending = false;
      button.disabled = false;
      window.setTimeout(() => button.classList.remove("is-pulsing"), 560);
    }
  });
})();
