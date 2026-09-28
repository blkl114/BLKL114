/* =====================================================================
   blkl114.github.io —— 交互脚本（原生 JS，无第三方依赖）
   包含：主题切换 / 移动端菜单 / 滚动进度条 / 滚动进场动画 /
         导航高亮 / 返回顶部 / 页脚年份
   ===================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------
     1. 深浅色主题切换
     · 首次加载时 index.html 里的内联脚本已决定初始主题
     · 手动切换后写入 localStorage；用户没手动选过就跟随系统
     --------------------------------------------------------------- */
  var THEME_COLORS = { light: '#2563eb', dark: '#0b1120' };
  var themeToggle = document.getElementById('theme-toggle');
  var themeColorMeta = document.querySelector('meta[name="theme-color"]');

  function readSavedTheme() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', THEME_COLORS[theme] || THEME_COLORS.light);
    }
    if (persist) {
      try { localStorage.setItem('theme', theme); } catch (e) { /* 隐私模式下忽略 */ }
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next, true);
    });
  }

  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  function onSystemThemeChange(event) {
    if (!readSavedTheme()) applyTheme(event.matches ? 'dark' : 'light', false);
  }
  if (systemTheme.addEventListener) systemTheme.addEventListener('change', onSystemThemeChange);
  else if (systemTheme.addListener) systemTheme.addListener(onSystemThemeChange);

  /* ---------------------------------------------------------------
     2. 移动端菜单
     --------------------------------------------------------------- */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('nav-toggle');

  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', '打开菜单');
  }

  function openNav() {
    if (!nav || !navToggle) return;
    nav.classList.add('is-open');
    navToggle.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', '关闭菜单');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) closeNav();
      else openNav();
    });

    // 点击导航链接后收起菜单
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeNav();
    });

    // 点击页面其它区域 / 按 Esc 收起
    document.addEventListener('click', function (event) {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      closeNav();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });

    // 回到大屏时重置状态
    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) closeNav();
    });
  }

  /* ---------------------------------------------------------------
     3. 顶部导航阴影 + 阅读进度条 + 返回顶部按钮
     --------------------------------------------------------------- */
  var header = document.getElementById('site-header');
  var progress = document.getElementById('scroll-progress');
  var toTop = document.getElementById('to-top');
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;

    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (toTop) toTop.classList.toggle('is-visible', y > 420);

    if (progress) {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(y / max, 1) : 0;
      progress.style.width = (ratio * 100).toFixed(2) + '%';
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

  /* ---------------------------------------------------------------
     4. 滚动进场动画（IntersectionObserver）
     --------------------------------------------------------------- */
  var revealItems = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    revealItems.forEach(function (el, index) {
      el.style.transitionDelay = Math.min(index % 4, 3) * 70 + 'ms';
      revealObserver.observe(el);
    });
  }

  /* ---------------------------------------------------------------
     5. 导航链接高亮当前区块
     --------------------------------------------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-list a[href^="#"]'));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
    });
  }

  if (sections.length) {
    if ('IntersectionObserver' in window) {
      var spyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

      sections.forEach(function (section) { spyObserver.observe(section); });
    } else {
      window.addEventListener('scroll', function () {
        var y = window.pageYOffset + 140;
        var current = sections[0];
        sections.forEach(function (section) { if (section.offsetTop <= y) current = section; });
        setActiveLink(current.id);
      }, { passive: true });
    }
  }

  /* ---------------------------------------------------------------
     6. 页脚年份 + 初始化
     --------------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  onScroll();
})();
