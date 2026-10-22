import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { gsap } from 'gsap';
import FloatingLines from './reactbits/FloatingLines.jsx';

// Color stops are fed to the existing React Bits shader without changing its waves.
const darkGradient = ['#740005', '#1a1a1a', '#fbfcd3'];
const automaticPalettes = [
  { id: 'combination-1', name: '组合 1 · 紫与暖白', colors: ['#8877C7', '#BBA6C4', '#F0E7DB'] },
  { id: 'combination-2', name: '组合 2 · 玫瑰与深蓝灰', colors: ['#C88697', '#826F7B', '#31424D'] },
  { id: 'combination-3', name: '组合 3 · 蓝与杏粉', colors: ['#4A5F8C', '#97869C', '#E8B4A2'] }
];
const screenshotPalettes = [
  { id: 'cherry-haze', name: '车厘子夜雾', colors: ['#9F1D35', '#D8A0AA', '#5A3A34', '#F4ECE8'] },
  { id: 'grape-peach', name: '葡萄蜜桃', colors: ['#6C4CCF', '#F6B6A8', '#44235F', '#F7F2EC'] },
  { id: 'peacock-gold', name: '孔雀鎏金', colors: ['#0F6B68', '#C9933D', '#1D2C45', '#EEE6DA'] },
  { id: 'lime-sea', name: '青柠冰海', colors: ['#C9E64E', '#62C7D6', '#65727B', '#F5F8F7'] },
  { id: 'rose-ash', name: '玫瑰烟灰', colors: ['#D79BAA', '#8D99A6', '#6A3A4E', '#F4EFE8'] },
  { id: 'amber-voyage', name: '琥珀夜航', colors: ['#D58A3A', '#223A5E', '#E7D8C4', '#4A4E56'] },
  { id: 'plum-mint', name: '乌梅薄荷', colors: ['#50385E', '#A8D8CC', '#DCCFE6', '#F5EEE7'] }
];
const screenshotPaletteMap = new Map(screenshotPalettes.map(choice => [choice.id, choice]));
const paletteIdsByTheme = {
  dark: ['reference', 'combination-2'],
  light: ['combination-1', 'combination-2', 'combination-3']
};
const paletteStorageKey = 'dawn-line-palette';
const paletteDelayMs = () => 40000 + Math.random() * 20000;

// Three- and four-color palettes have breakpoints at halves and thirds. Seven
// equally spaced stops preserve both color ramps and keep transitions continuous.
function expandedGradient(colors) {
  const channels = colors.map(color => [1, 3, 5].map(index => parseInt(color.slice(index, index + 2), 16)));
  return Array.from({ length: 7 }, (_, index) => {
    const position = index * (channels.length - 1) / 6;
    const left = Math.min(Math.floor(position), channels.length - 2);
    const fraction = position - left;
    const mixed = channels[left].map((channel, component) =>
      Math.round(channel + (channels[left + 1][component] - channel) * fraction).toString(16).padStart(2, '0')
    );
    return `#${mixed.join('')}`;
  });
}

const paletteSources = new Map([
  ['reference', darkGradient],
  ...automaticPalettes.map(choice => [choice.id, choice.colors]),
  ...screenshotPalettes.map(choice => [choice.id, choice.colors])
]);
const paletteGradients = new Map([...paletteSources].map(([id, colors]) => [id, expandedGradient(colors)]));
function paletteGradient(id) {
  return paletteGradients.get(id) || paletteGradients.get('reference');
}
function nextRandomPalette(current, dark) {
  const choices = paletteIdsByTheme[dark ? 'dark' : 'light'].filter(id => id !== current);
  return choices[Math.floor(Math.random() * choices.length)];
}
function savedPaletteSelection() {
  try {
    const saved = localStorage.getItem(paletteStorageKey);
    if (screenshotPaletteMap.has(saved)) return saved;
  } catch (_) {}
  return 'default';
}

const titleColorKeys = ['--dawn-title-a', '--dawn-title-b', '--dawn-title-c', '--dawn-title-d'];
const titleSections = new Set(['about', 'publications', 'projects', 'data', 'teaching']);
function colorChannels(hex) {
  return [1, 3, 5].map(index => parseInt(hex.slice(index, index + 2), 16));
}
function mixColor(from, to, amount) {
  const start = colorChannels(from);
  const end = colorChannels(to);
  return `#${start.map((channel, index) =>
    Math.round(channel + (end[index] - channel) * amount).toString(16).padStart(2, '0')
  ).join('')}`;
}
function colorToHsl(hex) {
  const [red, green, blue] = colorChannels(hex).map(channel => channel / 255);
  const high = Math.max(red, green, blue);
  const low = Math.min(red, green, blue);
  const delta = high - low;
  const lightness = (high + low) / 2;
  let hue = 0;
  if (delta) {
    if (high === red) hue = ((green - blue) / delta) % 6;
    else if (high === green) hue = (blue - red) / delta + 2;
    else hue = (red - green) / delta + 4;
  }
  return {
    hue: (hue * 60 + 360) % 360,
    saturation: delta ? delta / (1 - Math.abs(2 * lightness - 1)) : 0,
    lightness
  };
}
function hslToColor({ hue, saturation, lightness }) {
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  return `#${[0, 8, 4].map(offset => {
    const sector = (offset + hue / 30) % 12;
    const channel = lightness - chroma / 2 * Math.max(-1, Math.min(sector - 3, 9 - sector, 1));
    return Math.round(Math.max(0, Math.min(1, channel)) * 255).toString(16).padStart(2, '0');
  }).join('')}`;
}
function mixTitleColor(from, to, amount) {
  const start = colorToHsl(from);
  const end = colorToHsl(to);
  const hueDistance = ((end.hue - start.hue + 540) % 360) - 180;
  return hslToColor({
    hue: (start.hue + hueDistance * amount + 360) % 360,
    saturation: start.saturation + (end.saturation - start.saturation) * amount,
    lightness: start.lightness + (end.lightness - start.lightness) * amount
  });
}
function luminance(hex) {
  const channels = colorChannels(hex).map(channel => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
function contrastRatio(first, second) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
function blendToContrast(color, target, background, threshold, atLeast) {
  let lower = 0;
  let upper = 1;
  for (let iteration = 0; iteration < 12; iteration += 1) {
    const amount = (lower + upper) / 2;
    const ratio = contrastRatio(mixColor(color, target, amount), background);
    if (atLeast ? ratio >= threshold : ratio <= threshold) upper = amount;
    else lower = amount;
  }
  return mixColor(color, target, upper);
}
function readableTitleColor(color, dark) {
  const background = dark ? '#02060d' : '#f5f5f7';
  if (dark) {
    // Keep the palette hue and saturation while lifting dark stops. Mixing them
    // with near-white made the Chinese titles look gray against the night sky.
    const minimumContrast = 7.5;
    const maximumContrast = 9.5;
    const original = colorToHsl(color);
    const vivid = { ...original, saturation: Math.max(0.55, Math.min(original.saturation, 0.8)) };
    const ratio = contrastRatio(hslToColor(vivid), background);
    if (ratio >= minimumContrast && ratio <= maximumContrast) return hslToColor(vivid);
    let lower = 0;
    let upper = 1;
    const target = ratio < minimumContrast ? minimumContrast : maximumContrast;
    for (let iteration = 0; iteration < 12; iteration += 1) {
      const middle = (lower + upper) / 2;
      if (contrastRatio(hslToColor({ ...vivid, lightness: middle }), background) < target) lower = middle;
      else upper = middle;
    }
    return hslToColor({ ...vivid, lightness: upper });
  }
  const ratio = contrastRatio(color, background);
  if (ratio < 4.5) {
    return blendToContrast(color, '#111827', background, 4.5, true);
  }
  return color;
}
function titleGradientProperties(id, dark) {
  let colors;
  if (dark && id === 'reference') {
    // The reference wave includes charcoal; its title keeps the original pink-to-cream identity.
    colors = ['#f06b96', '#f1a3b9', '#d79c9e', '#d5b29d'];
  } else {
    const source = paletteSources.get(id === 'reference' ? 'combination-1' : id) || darkGradient;
    // Amber's blue-gray wave stop is useful in the background; a warm cream
    // stop keeps the title itself in the amber family through the whole sweep.
    const featured = dark && id === 'amber-voyage'
      ? [source[0], source[2]]
      : source.map((color, index) => {
        const channels = colorChannels(color);
        return { color, index, chroma: Math.max(...channels) - Math.min(...channels) };
      }).sort((first, second) => second.chroma - first.chroma)
        .slice(0, 2)
        .sort((first, second) => first.index - second.index)
        .map(accent => accent.color);
    const accents = featured.map(color => readableTitleColor(color, dark));
    const blend = dark ? mixTitleColor : mixColor;
    colors = [accents[0], blend(accents[0], accents[1], 0.32), accents[1], blend(accents[1], accents[0], 0.36)];
  }
  return Object.fromEntries(titleColorKeys.map((key, index) => [key, colors[index]]));
}
const initialPaletteSelection = savedPaletteSelection();

function paletteOption(choice, selected) {
  const label = document.createElement('label');
  label.className = 'dawn-palette-option';
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'dawn-palette';
  input.value = choice.id;
  input.checked = choice.id === selected;

  const swatches = document.createElement('span');
  swatches.className = 'dawn-palette-option__swatches';
  const colors = choice.id === 'default'
    ? [darkGradient, ...automaticPalettes.map(palette => palette.colors)].map(stops => `linear-gradient(135deg, ${stops.join(', ')})`)
    : choice.colors;
  colors.forEach(color => {
    const swatch = document.createElement('span');
    swatch.className = 'dawn-palette-option__swatch';
    swatch.style.background = color;
    swatches.appendChild(swatch);
  });

  const name = document.createElement('span');
  name.className = 'dawn-palette-option__name';
  name.textContent = choice.name;
  label.append(input, swatches, name);
  if (choice.description) {
    const meta = document.createElement('span');
    meta.className = 'dawn-palette-option__meta';
    meta.textContent = choice.description;
    label.appendChild(meta);
  }
  return label;
}
const enabledWaves = ['middle', 'bottom', 'top'];
const middleWavePosition = { x: 5, y: -0.45, rotate: 0.2 };
const coursePaths = new Set(['/teachings/urban-analytics-ba-26/', '/teachings/urban-analytics-msc-26/']);
const sectionPaths = new Map([['/', 'home'], ['/about/', 'about'], ['/publications/', 'publications'], ['/projects/', 'projects'], ['/data/', 'data'], ['/teaching/', 'teaching'], ...[...coursePaths].map(path => [path, 'teaching'])]);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const forcedColors = window.matchMedia('(forced-colors: active)');

function FloatingLinesForDawn() {
  const [isDark, setIsDark] = useState(document.documentElement.dataset.theme === 'dark');
  const [selectedPalette, setSelectedPalette] = useState(initialPaletteSelection);
  const [paletteState, setPaletteState] = useState(() => ({
    id: selectedPalette === 'default'
      ? (document.documentElement.dataset.theme === 'dark' ? 'reference' : 'combination-1')
      : selectedPalette,
    duration: 0
  }));
  const [reduceMotion, setReduceMotion] = useState(reducedMotion.matches);
  const titlePaletteRef = useRef(null);

  useEffect(() => {
    const onThemeChange = () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      setIsDark(dark);
    };
    const onMotionChange = () => setReduceMotion(reducedMotion.matches);
    const themeObserver = new MutationObserver(onThemeChange);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    reducedMotion.addEventListener('change', onMotionChange);
    return () => {
      themeObserver.disconnect();
      reducedMotion.removeEventListener('change', onMotionChange);
    };
  }, []);

  useEffect(() => {
    setPaletteState(current => {
      const id = selectedPalette === 'default'
        ? (paletteIdsByTheme[isDark ? 'dark' : 'light'].includes(current.id)
          ? current.id
          : (isDark ? 'reference' : 'combination-1'))
        : selectedPalette;
      return current.id === id ? current : { id, duration: 1.2 };
    });
    document.body.dataset.dawnPaletteSelection = selectedPalette;
    try { localStorage.setItem(paletteStorageKey, selectedPalette); } catch (_) {}
  }, [selectedPalette, isDark]);

  useEffect(() => {
    document.body.dataset.dawnPalette = paletteState.id;
  }, [paletteState.id]);

  useEffect(() => {
    const previous = titlePaletteRef.current;
    const duration = reduceMotion || !previous ? 0
      : previous.id !== paletteState.id ? (paletteState.duration || 1.2) : 1.2;
    gsap.to(document.body, {
      ...titleGradientProperties(paletteState.id, isDark),
      duration,
      ease: 'sine.inOut',
      overwrite: 'auto'
    });
    titlePaletteRef.current = { id: paletteState.id, dark: isDark };
  }, [paletteState.id, paletteState.duration, isDark, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || selectedPalette !== 'default') return;
    let timer;
    const schedule = () => {
      if (document.hidden) return;
      timer = window.setTimeout(() => {
        setPaletteState(current => ({ id: nextRandomPalette(current.id, isDark), duration: 8 }));
        schedule();
      }, paletteDelayMs());
    };
    const onVisibilityChange = () => {
      window.clearTimeout(timer);
      schedule();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    schedule();
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [isDark, reduceMotion, selectedPalette]);

  useEffect(() => {
    const toggle = document.getElementById('dawn-palette-toggle');
    const panel = document.getElementById('dawn-palette-panel');
    const options = document.getElementById('dawn-palette-options');
    const closeButton = panel?.querySelector('.dawn-palette-panel__close');
    if (!toggle || !panel || !options || !closeButton) return;

    options.replaceChildren(
      paletteOption({ id: 'default', name: '默认 · 当前配色', description: '沿用原有深浅色自动轮换' }, selectedPalette),
      ...screenshotPalettes.map(choice => paletteOption(choice, selectedPalette))
    );
    const navItem = toggle.closest('.dawn-palette-nav');
    if (navItem) navItem.hidden = false;
    let returnFocus = toggle;

    const closePalette = restoreFocus => {
      if (panel.hidden) return;
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      if (restoreFocus) returnFocus.focus({ preventScroll: true });
    };
    const openPalette = () => {
      const statsPanel = document.getElementById('dawn-site-stats-panel');
      if (statsPanel && !statsPanel.hidden) statsPanel.querySelector('.dawn-site-stats__close')?.click();
      const mobileNav = document.getElementById('navbarNav');
      const mobileOpen = mobileNav?.classList.contains('show');
      returnFocus = mobileOpen ? (document.querySelector('#navbar .navbar-toggler') || toggle) : toggle;
      if (mobileOpen) closeMobileNav();
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      options.querySelector('input:checked')?.focus({ preventScroll: true });
    };
    const onToggle = () => panel.hidden ? openPalette() : closePalette(true);
    const onChoice = event => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement) || input.name !== 'dawn-palette') return;
      if (input.value !== 'default' && !screenshotPaletteMap.has(input.value)) return;
      setSelectedPalette(input.value);
    };
    const onPointerDown = event => {
      if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) closePalette(false);
    };
    const onKeyDown = event => {
      if (event.key === 'Escape' && !panel.hidden) closePalette(true);
    };
    const onSectionChange = () => closePalette(false);
    const onClose = () => closePalette(true);
    toggle.addEventListener('click', onToggle);
    closeButton.addEventListener('click', onClose);
    options.addEventListener('change', onChoice);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('dawn:sectionchange', onSectionChange);
    return () => {
      toggle.removeEventListener('click', onToggle);
      closeButton.removeEventListener('click', onClose);
      options.removeEventListener('change', onChoice);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('dawn:sectionchange', onSectionChange);
    };
  }, []);

  return (
    <FloatingLines
      linesGradient={paletteGradient(paletteState.id)}
      colorTransitionDuration={paletteState.duration}
      enabledWaves={enabledWaves}
      lineCount={8}
      lineDistance={8}
      middleWavePosition={middleWavePosition}
      animationSpeed={reduceMotion ? 0 : 1}
      interactive={!reduceMotion}
      bendRadius={8}
      bendStrength={isDark ? -0.65 : -2}
      mouseDamping={isDark ? 0.055 : 0.05}
      parallax={!reduceMotion}
      parallaxStrength={isDark ? 0.08 : 0.2}
      lightMode={!isDark}
      lightRenderMode={2}
      lineBrightness={isDark && screenshotPaletteMap.has(paletteState.id) ? 0.62 : 1}
      backgroundColor={isDark ? '#000000' : '#f5f5f7'}
      instantColorChange={reduceMotion}
    />
  );
}

function normalizedPath(pathname) {
  return pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
}

function sectionFor(url) {
  return sectionPaths.get(normalizedPath(url.pathname));
}

function sameRoute(a, b) {
  return normalizedPath(a.pathname) === normalizedPath(b.pathname);
}

function mainContent(root = document) {
  return root.querySelector('.dawn-home, .container[role="main"]');
}

function markContentSection(content, section) {
  content.classList.add('dawn-section-content');
  content.dataset.dawnSection = section;
}

function transitionDetail(root) {
  return root.querySelector('.dawn-hero-content, .post-header') || root;
}

function setActiveNav(section) {
  document.querySelectorAll('#navbar .nav-item > a.nav-link').forEach(link => {
    const selected = sectionFor(new URL(link.href, location.href)) === section;
    link.parentElement.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
    link.querySelector('.sr-only')?.remove();
    if (selected) {
      const current = document.createElement('span');
      current.className = 'sr-only';
      current.textContent = '(current)';
      link.appendChild(current);
    }
  });
}

function closeMobileNav() {
  const collapse = document.getElementById('navbarNav');
  const toggle = document.querySelector('#navbar .navbar-toggler');
  if (collapse?.classList.contains('show')) {
    if (window.jQuery?.fn?.collapse) window.jQuery(collapse).collapse('hide');
    else collapse.classList.remove('show');
  }
  toggle?.classList.add('collapsed');
  toggle?.setAttribute('aria-expanded', 'false');
}

function initAbout(root) {
  const checkbox = root.querySelector('#lang-checkbox');
  const wrapper = root.querySelector('#dawn-intro-wrapper');
  if (!checkbox || !wrapper || checkbox.dataset.dawnReady) return;
  checkbox.dataset.dawnReady = 'true';
  const setLanguage = language => {
    wrapper.classList.toggle('show-en', language === 'en');
    wrapper.classList.toggle('show-cn', language !== 'en');
    checkbox.checked = language === 'en';
    try { localStorage.setItem('dawn-pref-lang', language); } catch (_) {}
  };
  let storedLanguage = 'cn';
  try { storedLanguage = localStorage.getItem('dawn-pref-lang') === 'en' ? 'en' : 'cn'; } catch (_) {}
  setLanguage(storedLanguage);
  checkbox.addEventListener('change', () => setLanguage(checkbox.checked ? 'en' : 'cn'));
}

function initPublications(root, routed) {
  const input = root.querySelector('#bibsearch');
  const publication = root.querySelector('.publications');
  if (!input || !publication || input.dataset.dawnReady) return;
  input.dataset.dawnReady = 'true';
  const applySearch = () => {
    const query = input.value.trim().toLocaleLowerCase();
    publication.querySelectorAll('ol.bibliography').forEach(list => {
      let visible = 0;
      list.querySelectorAll(':scope > li').forEach(item => {
        const match = !query || item.textContent.toLocaleLowerCase().includes(query);
        item.classList.toggle('unloaded', !match);
        if (match) visible += 1;
      });
      list.classList.toggle('unloaded', visible === 0);
      if (list.previousElementSibling?.matches('h2.bibliography')) {
        list.previousElementSibling.classList.toggle('unloaded', visible === 0);
      }
    });
  };
  let searchTimer;
  input.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = window.setTimeout(applySearch, 120);
  });
  applySearch();

  // common.js binds these controls only on the first document load.
  if (routed) publication.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a.abstract, a.award, a.bibtex') : null;
    if (!link) return;
    event.preventDefault();
    const area = link.parentElement?.parentElement;
    if (!area) return;
    for (const name of ['abstract', 'award', 'bibtex']) {
      const panel = area.querySelector(`.${name}.hidden`);
      if (link.classList.contains(name)) panel?.classList.toggle('open');
      else panel?.classList.remove('open');
    }
  });
}

function initProjectMedia(root) {
  const jq = window.jQuery;
  if (jq?.fn?.masonry) {
    root.querySelectorAll('.grid').forEach(grid => {
      const items = jq(grid).masonry({ gutter: 10, horizontalOrder: true, itemSelector: '.grid-item' });
      if (jq.fn.imagesLoaded) items.imagesLoaded().progress(() => items.masonry('layout'));
    });
  }
  const zoomable = root.querySelectorAll('[data-zoomable]');
  if (zoomable.length) {
    if (window.medium_zoom?.attach) window.medium_zoom.attach(zoomable);
    else if (window.mediumZoom) {
      window.medium_zoom = window.mediumZoom(zoomable, {
        background: getComputedStyle(document.documentElement).getPropertyValue('--global-bg-color') + 'ee'
      });
    }
  }
}

function rerunClassicScript(source) {
  const script = document.createElement('script');
  script.src = source;
  script.addEventListener('load', () => script.remove(), { once: true });
  script.addEventListener('error', () => script.remove(), { once: true });
  document.body.appendChild(script);
}

function initDataGroups(root) {
  root.querySelectorAll('.dawn-data-group').forEach(group => {
    const button = group.querySelector('.dawn-data-group__toggle');
    const label = button?.querySelector('.dawn-data-group__toggle-label');
    const extraRows = [...group.querySelectorAll('tbody tr.dawn-data-extra')];
    const status = group.querySelector('.dawn-data-group__status');
    if (!button || !label || !extraRows.length) return;

    extraRows.forEach(row => { row.hidden = true; });
    button.hidden = false;
    button.addEventListener('click', () => {
      const expand = button.getAttribute('aria-expanded') !== 'true';
      if (!expand && extraRows.some(row => row.querySelector('a[aria-busy="true"]'))) {
        if (status) status.textContent = '请等待下载完成或取消下载后再收起。';
        return;
      }
      extraRows.forEach(row => { row.hidden = !expand; });
      button.setAttribute('aria-expanded', String(expand));
      label.textContent = expand ? '收起' : `展开其余 ${extraRows.length} 项`;
      if (status) status.textContent = '';
    });
  });
}

let titleSweepTween = null;
function initSectionTitleMotion(section, root) {
  titleSweepTween?.kill();
  titleSweepTween = null;
  if (!titleSections.has(section)) return;
  const title = root?.querySelector('.post-header > .post-title > .nav-cn');
  if (!title) return;
  gsap.set(title, { '--dawn-title-position': reducedMotion.matches || forcedColors.matches ? '50%' : '0%' });
  if (reducedMotion.matches || forcedColors.matches) return;
  // Match the classroom titles' slow, reversible 220%-wide gradient sweep.
  titleSweepTween = gsap.to(title, {
    '--dawn-title-position': '100%',
    duration: 14,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
}

function initPage(section, root, routed) {
  if (!root) return;
  if (section === 'about') initAbout(root);
  if (section === 'publications') initPublications(root, routed);
  if (routed && section === 'projects') initProjectMedia(root);
  // Both original scripts are IIFEs. Fresh script elements bind to fresh nodes.
  if (section === 'data') {
    initDataGroups(root);
    if (routed) rerunClassicScript('/assets/js/data-download.js');
  }
  if (routed && section === 'home') rerunClassicScript('/assets/js/dawn-home.js');
  initSectionTitleMotion(section, root);
}

// Keep the outgoing page painted until the incoming page has begun to appear.
// Pin its visible position while the new page takes over normal document flow.
function crossfadeContent(oldContent, newContent, activate) {
  if (reducedMotion.matches) {
    oldContent.replaceWith(newContent);
    activate();
    return Promise.resolve();
  }

  const rect = oldContent.getBoundingClientRect();
  oldContent.style.setProperty('margin', '0', 'important');
  gsap.set(oldContent, {
    position: 'fixed', top: rect.top, left: rect.left, width: rect.width,
    zIndex: 3, pointerEvents: 'none'
  });
  oldContent.inert = true;
  oldContent.setAttribute('aria-hidden', 'true');
  gsap.set(newContent, { autoAlpha: 0, y: 8 });
  const detail = transitionDetail(newContent);
  gsap.set(detail, { filter: 'blur(2px)' });
  oldContent.after(newContent);
  activate();

  return new Promise(resolve => {
    gsap.timeline({
      onComplete: () => {
        oldContent.remove();
        gsap.set(newContent, { clearProps: 'opacity,visibility,transform' });
        gsap.set(detail, { clearProps: 'filter' });
        resolve();
      }
    })
      .to(oldContent, { autoAlpha: 0, y: -4, filter: 'blur(4px)', duration: 0.30, ease: 'sine.inOut' }, 0)
      .to(newContent, { autoAlpha: 1, y: 0, duration: 0.30, ease: 'sine.inOut' }, 0.08)
      .to(detail, { filter: 'blur(0px)', duration: 0.30, ease: 'sine.out' }, 0.08);
  });
}

async function prepareProjectImages(content, pageUrl) {
  const images = [...content.querySelectorAll('.projects img')];
  if (!images.length) return;
  // decode() starts off-document image loads, so Masonry sees final dimensions.
  await Promise.race([
    Promise.allSettled(images.map(image => {
      const preload = new Image();
      preload.src = new URL(image.getAttribute('src'), pageUrl).href;
      return preload.decode();
    })),
    new Promise(resolve => window.setTimeout(resolve, 1800))
  ]);
}

const mount = document.getElementById('dawn-floating-lines-root');
if (mount) {
  const initialDark = document.documentElement.dataset.theme === 'dark';
  const initialPaletteId = initialPaletteSelection === 'default'
    ? (initialDark ? 'reference' : 'combination-1')
    : initialPaletteSelection;
  Object.entries(titleGradientProperties(initialPaletteId, initialDark)).forEach(([key, value]) => {
    document.body.style.setProperty(key, value);
  });
  createRoot(mount).render(<FloatingLinesForDawn />);
  const initialSection = document.body.dataset.dawnSection || 'home';
  const initialContent = mainContent();
  if (initialContent) markContentSection(initialContent, initialSection);
  initPage(initialSection, initialContent, false);
  const onTitleMotionPreferenceChange = () => initSectionTitleMotion(sectionFor(new URL(location.href)), mainContent());
  reducedMotion.addEventListener('change', onTitleMotionPreferenceChange);
  forcedColors.addEventListener('change', onTitleMotionPreferenceChange);

  let navigating = false;
  let activePath = normalizedPath(location.pathname);
  let pendingNavigation = null;
  const pageCache = new Map();
  function fetchPageMarkup(destination) {
    const key = destination.href;
    if (pageCache.has(key)) return pageCache.get(key);
    const request = fetch(key, { credentials: 'same-origin' })
      .then(response => {
        if (!response.ok || !(response.headers.get('content-type') || '').includes('text/html')) {
          throw new Error('Page could not be loaded');
        }
        return response.text();
      })
      .catch(error => {
        pageCache.delete(key);
        throw error;
      });
    pageCache.set(key, request);
    if (pageCache.size > 4) pageCache.delete(pageCache.keys().next().value);
    return request;
  }

  async function navigate(destination, pushHistory = true, focusHeading = true) {
    if (navigating) {
      pendingNavigation = { destination, pushHistory, focusHeading };
      return;
    }
    const targetSection = sectionFor(destination);
    const oldContent = mainContent();
    if (!targetSection || !oldContent) { location.assign(destination.href); return; }
    navigating = true;
    try {
      // Fetch and decode before fading; a slow response leaves the current view intact.
      const nextDocument = new DOMParser().parseFromString(await fetchPageMarkup(destination), 'text/html');
      const newContent = mainContent(nextDocument);
      if (!newContent || nextDocument.body.dataset.dawnSection !== targetSection) throw new Error('Unexpected page shell');
      // DOMParser is scripting-disabled and parses <noscript> children as live nodes.
      // Remove those fallbacks before insertion into this scripting-enabled document.
      // Otherwise the data page's no-script CSS overrides hidden table rows.
      newContent.querySelectorAll('noscript').forEach(fallback => fallback.remove());
      markContentSection(newContent, targetSection);
      if (!mount.isConnected) throw new Error('Persistent canvas is missing');
      if (targetSection === 'projects') await prepareProjectImages(newContent, destination.href);

      await crossfadeContent(oldContent, newContent, () => {
        if (pushHistory) history.pushState({ dawnRoute: true }, '', destination.href);
        activePath = normalizedPath(destination.pathname);
        document.body.dataset.dawnSection = targetSection;
        document.body.classList.toggle('dawn-home-page', targetSection === 'home');
        document.body.classList.toggle('dawn-section-page', targetSection !== 'home');
        document.title = nextDocument.title;
        setActiveNav(targetSection);
        closeMobileNav();
        window.scrollTo(0, 0);
        initPage(targetSection, newContent, true);
        document.dispatchEvent(new CustomEvent('dawn:sectionchange', { detail: { section: targetSection } }));
      });
      if (coursePaths.has(normalizedPath(destination.pathname))) {
        // The detail page's IIFE only runs on a full load; DOMParser does not execute it.
        rerunClassicScript('/assets/js/course-material-morphicons.min.js');
      }
      if (focusHeading) {
        const heading = newContent.querySelector('h1');
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus({ preventScroll: true });
        }
      }
    } catch (_) {
      location.assign(destination.href);
    } finally {
      navigating = false;
      if (pendingNavigation) {
        const next = pendingNavigation;
        pendingNavigation = null;
        if (normalizedPath(next.destination.pathname) !== activePath) {
          void navigate(next.destination, next.pushHistory, next.focusHeading);
        }
      }
    }
  }

  const nav = document.querySelector('#navbar');
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
    const destination = new URL(link.href, location.href);
    if (destination.origin !== location.origin || !sectionFor(destination)) return;
    if (sameRoute(destination, new URL(location.href))) {
      if (destination.hash && destination.hash !== location.hash) return;
      event.preventDefault();
      closeMobileNav();
      window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
      return;
    }
    event.preventDefault();
    // Pointer navigation should not leave Safari's focus outline on the new heading.
    // Keyboard and assistive-technology activation still move focus to the heading.
    void navigate(destination, true, event.detail === 0);
  });
  function prefetchNavLink(event) {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link || (!nav?.contains(link) && !link.closest('.courses')) || navigator.connection?.saveData) return;
    const destination = new URL(link.href, location.href);
    if (destination.origin !== location.origin || !sectionFor(destination) || sameRoute(destination, new URL(location.href))) return;
    void fetchPageMarkup(destination).catch(() => {});
  }
  document.addEventListener('pointerover', prefetchNavLink);
  document.addEventListener('focusin', prefetchNavLink);
  window.addEventListener('popstate', () => {
    const destination = new URL(location.href);
    if (sectionFor(destination) && normalizedPath(destination.pathname) !== activePath) {
      void navigate(destination, false, false);
    }
  });
  window.addEventListener('pageshow', event => {
    if (event.persisted) {
      gsap.set(mainContent(), { clearProps: 'opacity,visibility,transform,filter' });
      gsap.set(mount, { clearProps: 'opacity' });
      navigating = false;
    }
  });
}
