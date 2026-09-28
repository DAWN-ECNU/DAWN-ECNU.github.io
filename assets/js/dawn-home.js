(() => {
  const button = document.querySelector(".dawn-like");
  const count = document.getElementById("dawn-like-count");
  if (!button) return;

  const key = "dawn-site-liked";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let liked = false;
  try {
    liked = localStorage.getItem(key) === "true";
  } catch (_) {}

  function setLiked(value) {
    liked = value;
    button.setAttribute("aria-pressed", String(value));
    button.title = value ? "取消点赞" : "点赞";
    if (count) count.textContent = value ? "1" : "0";
    try {
      localStorage.setItem(key, String(value));
    } catch (_) {}
  }

  setLiked(liked);
  button.addEventListener("click", () => {
    if (button.classList.contains("is-pulsing")) return;
    const next = !liked;
    if (reducedMotion.matches) {
      setLiked(next);
      return;
    }
    button.classList.add("is-pulsing");
    window.setTimeout(() => setLiked(next), 220);
    window.setTimeout(() => button.classList.remove("is-pulsing"), 560);
  });
})();
