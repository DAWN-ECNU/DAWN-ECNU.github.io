import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { gsap } from 'gsap';
import FloatingLines from './reactbits/FloatingLines.jsx';

// Color stops are fed to the existing React Bits shader without changing its waves.
const darkGradient = ['#740005', '#1a1a1a', '#fbfcd3'];
const paletteChoices = [
  { id: 'combination-1', name: '组合 1 · 紫与暖白', colors: ['#8877C7', '#BBA6C4', '#F0E7DB'] },
  { id: 'combination-2', name: '组合 2 · 玫瑰与深蓝灰', colors: ['#C88697', '#826F7B', '#31424D'] },
  { id: 'combination-3', name: '组合 3 · 蓝与杏粉', colors: ['#4A5F8C', '#97869C', '#E8B4A2'] }
];
const paletteMap = new Map(paletteChoices.map(choice => [choice.id, choice]));
const paletteIdsByTheme = {
  dark: ['reference', 'combination-2'],
  light: ['combination-1', 'combination-2', 'combination-3']
};
const paletteDelayMs = () => 40000 + Math.random() * 20000;
function paletteGradient(id) {
  return id === 'reference' ? darkGradient : paletteMap.get(id).colors;
}
function nextRandomPalette(current, dark) {
  const choices = paletteIdsByTheme[dark ? 'dark' : 'light'].filter(id => id !== current);
  return choices[Math.floor(Math.random() * choices.length)];
}
const enabledWaves = ['middle', 'bottom', 'top'];
const middleWavePosition = { x: 5, y: -0.45, rotate: 0.2 };
const coursePaths = new Set(['/teachings/urban-analytics-ba-26/', '/teachings/urban-analytics-msc-26/']);
const sectionPaths = new Map([['/', 'home'], ['/about/', 'about'], ['/publications/', 'publications'], ['/projects/', 'projects'], ['/data/', 'data'], ['/teaching/', 'teaching'], ...[...coursePaths].map(path => [path, 'teaching'])]);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function FloatingLinesForDawn() {
  const [isDark, setIsDark] = useState(document.documentElement.dataset.theme === 'dark');
  const [paletteState, setPaletteState] = useState(() => ({
    id: document.documentElement.dataset.theme === 'dark' ? 'reference' : 'combination-1',
    duration: 0
  }));
  const [reduceMotion, setReduceMotion] = useState(reducedMotion.matches);

  useEffect(() => {
    const onThemeChange = () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      setIsDark(dark);
      setPaletteState(current => ({
        id: paletteIdsByTheme[dark ? 'dark' : 'light'].includes(current.id)
          ? current.id
          : (dark ? 'reference' : 'combination-1'),
        duration: 1.2
      }));
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
    document.body.dataset.dawnPalette = paletteState.id;
  }, [paletteState.id]);

  useEffect(() => {
    if (reduceMotion) return;
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
  }, [isDark, reduceMotion]);

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
  createRoot(mount).render(<FloatingLinesForDawn />);
  const initialSection = document.body.dataset.dawnSection || 'home';
  const initialContent = mainContent();
  if (initialContent) markContentSection(initialContent, initialSection);
  initPage(initialSection, initialContent, false);

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
    void navigate(destination);
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
