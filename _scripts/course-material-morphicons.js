import { BookOpen, BookOpenText, MonitorPlay, Presentation } from "lucide";
import { createMorph } from "morphicons/dom";

const SVG_NS = "http://www.w3.org/2000/svg";

const iconPairs = {
  tutorial: {
    rest: BookOpen,
    active: BookOpenText,
  },
  slides: {
    rest: Presentation,
    active: MonitorPlay,
  },
};

function createSvgIcon(slot, initialIcon) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  const path = document.createElementNS(SVG_NS, "path");
  svg.append(path);
  slot.replaceChildren(svg);

  return createMorph(path, initialIcon, { reducedMotion: "user" });
}

function mountMaterialIcon(slot) {
  const pair = iconPairs[slot.dataset.materialMorphicon];
  const link = slot.closest(".schedule-material-link");
  if (!pair || !link) return;

  const morph = createSvgIcon(slot, pair.rest);
  let hovered = false;
  let focused = false;

  const render = () => {
    morph.morphTo(hovered || focused ? pair.active : pair.rest, "smooth");
  };

  link.addEventListener("pointerenter", () => {
    hovered = true;
    render();
  });
  link.addEventListener("pointerleave", () => {
    hovered = false;
    render();
  });
  link.addEventListener("focus", () => {
    focused = true;
    render();
  });
  link.addEventListener("blur", () => {
    focused = false;
    render();
  });
}

function initMaterialIcons() {
  document.querySelectorAll("[data-material-morphicon]").forEach(mountMaterialIcon);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMaterialIcons, { once: true });
} else {
  initMaterialIcons();
}
