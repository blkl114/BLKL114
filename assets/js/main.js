/* =====================================================================
   assets/js/main.js —— 站点交互
   包含：深浅色主题 / 中英文切换 / 移动端菜单 / 滚动进度条 /
         滚动进场动画 / 导航高亮 / 返回顶部 / 页脚年份
   依赖：data.js（内容）与 render.js（渲染）
   ===================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'theme';
  var LANG_KEY = 'lang';
  var THEME_COLORS = { light: '#2563eb', dark: '#0b1120' };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var lang = 'zh';
  var revealObserver = null;
  var spyObserver = null;
  var ticking = false;

  function byId(id) { return document.getElementById(id); }

  function readStore(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function writeStore(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* 隐私模式下忽略 */ }
  }

  /* ===============================================================
     1. 深浅色主题
     =============================================================== */
  var themeColorMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (themeColorMeta) themeColorMeta.setAttribute('content', THEME_COLORS[theme] || THEME_COLORS.light);
    if (persist) writeStore(THEME_KEY, theme);
  }

  var themeToggle = byId('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  }

  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  function onSystemThemeChange(event) {
    if (!readStore(THEME_KEY)) applyTheme(event.matches ? 'dark' : 'light', false);
  }
  if (systemTheme.addEventListener) systemTheme.addEventListener('change', onSystemThemeChange);
  else if (systemTheme.addListener) systemTheme.addListener(onSystemThemeChange);

  /* ===============================================================
     2. 中英文切换
     =============================================================== */
  function detectLang() {
    /* 支持用 URL 参数临时指定语言，例如 index.html?lang=en */
    var match = /[?&]lang=(zh|en)\b/i.exec(window.location.search);
    if (match) return match[1].toLowerCase();

    var saved = readStore(LANG_KEY);
    if (saved === 'zh' || saved === 'en') return saved;
    return (navigator.language || 'zh').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function applyPageText(next) {
    var ui = ((window.SITE_DATA || {}).ui || {})[next] || {};
    root.setAttribute('lang', ui.htmlLang || (next === 'zh' ? 'zh-CN' : 'en'));
    var render = window.SiteRender;
    var title = render && render.isResumePage() ? ui.resumeTitle : ui.pageTitle;
    if (title) document.title = title;
  }

  function setLang(next, persist) {
    lang = next;
    if (persist) writeStore(LANG_KEY, next);
    applyPageText(next);
    if (window.SiteRender) window.SiteRender.all(next);
    bindObservers();
    updateYear();
  }

  var langToggle = byId('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLang(lang === 'zh' ? 'en' : 'zh', true);
    });
  }

  /* ===============================================================
     3. 移动端菜单
     =============================================================== */
  var nav = byId('nav');
  var navToggle = byId('nav-toggle');

  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', '打开菜单 / Open menu');
  }

  function openNav() {
    if (!nav || !navToggle) return;
    nav.classList.add('is-open');
    navToggle.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', '关闭菜单 / Close menu');
  }

  if (nav && navToggle) {
    navToggle.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) closeNav();
      else openNav();
    });

    /* 事件委托：菜单里的链接是动态渲染的，点击后自动收起 */
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeNav();
    });

    document.addEventListener('click', function (event) {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      closeNav();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) closeNav();
    });
  }

  /* ===============================================================
     4. 顶部导航阴影 + 阅读进度条 + 返回顶部
     =============================================================== */
  var header = byId('site-header');
  var progress = byId('scroll-progress');
  var toTop = byId('to-top');

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;

    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (toTop) toTop.classList.toggle('is-visible', y > 420);

    if (progress) {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      progress.style.width = ((max > 0 ? Math.min(y / max, 1) : 0) * 100).toFixed(2) + '%';
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(onScroll);
  }, { passive: true });

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ===============================================================
     5. 滚动进场动画 + 导航高亮
     （语言切换会重绘内容，所以这里封装成可重复调用的函数）
     =============================================================== */
  function bindObservers() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

    if (revealObserver) revealObserver.disconnect();
    if (spyObserver) spyObserver.disconnect();

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    items.forEach(function (el, index) {
      el.style.transitionDelay = Math.min(index % 4, 3) * 70 + 'ms';
      revealObserver.observe(el);
    });

    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-list a[href^="#"]'));
    var sections = links.map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    }).filter(Boolean);

    if (!sections.length) return;

    spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { spyObserver.observe(section); });
  }

  /* ===============================================================
     6. 页脚年份（每次重绘后都要重新写入）
     =============================================================== */
  function updateYear() {
    var yearEl = byId('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  /* ===============================================================
     7. 初始化
     =============================================================== */
  function init() {
    lang = detectLang();
    applyPageText(lang);
    if (window.SiteRender) window.SiteRender.all(lang);
    updateYear();
    bindObservers();
    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
