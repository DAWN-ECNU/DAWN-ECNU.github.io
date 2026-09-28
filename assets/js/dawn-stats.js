(() => {
  const panel = document.getElementById("dawn-site-stats-panel");
  const toggle = document.getElementById("dawn-stats-toggle");
  const closeButton = panel?.querySelector(".dawn-site-stats__close");
  const source = document.getElementById("busuanzi_value_site_pv");
  const output = document.getElementById("dawn-total-visits");
  const note = document.querySelector(".dawn-site-stats__note");
  if (!panel || !toggle || !closeButton || !source || !output) return;

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

  const update = () => {
    const raw = source.textContent.trim().replace(/,/g, "");
    if (!/^\d+$/.test(raw)) return;
    output.textContent = Number(raw).toLocaleString("zh-CN");
    if (note) note.textContent = "累计访问来自第三方统计；今日与月活待接入";
  };

  new MutationObserver(update).observe(source, { childList: true, characterData: true, subtree: true });
  update();
  window.setTimeout(() => {
    if (output.textContent === "—" && note) note.textContent = "累计访问暂不可用；今日与月活待接入";
  }, 6000);
})();
