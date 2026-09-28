/* =====================================================================
   assets/js/render.js —— 把 data.js 里的内容渲染成页面结构
   首页（index.html）与简历页（resume.html）共用这里的渲染函数：
   页面上不存在的容器会被自动跳过，所以同一套渲染可以服务多个页面。
   ===================================================================== */
window.SiteRender = (function () {
  'use strict';

  var DATA = window.SITE_DATA || {};
  var profile = DATA.profile || {};
  var currentLang = 'zh';

  /* ---------- 小工具 ---------- */

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* 取 { zh, en } 中对应语言的值；字符串 / 数组原样返回 */
  function pick(value, lang) {
    if (value == null) return '';
    if (typeof value === 'string' || Array.isArray(value)) return value;
    if (value[lang] != null) return value[lang];
    if (value.zh != null) return value.zh;
    if (value.en != null) return value.en;
    return '';
  }

  function tagsOf(value, lang) {
    var t = pick(value, lang);
    return Array.isArray(t) ? t : (t ? [t] : []);
  }

  /* 读取 ui.labels 里的界面文案 */
  function t(key) {
    var labels = ((DATA.ui || {})[currentLang] || {}).labels || {};
    return labels[key] || key;
  }

  function byId(id) { return document.getElementById(id); }

  function fill(id, html) {
    var node = byId(id);
    if (node) node.innerHTML = html;
    return !!node;
  }

  function tags(list, lang) {
    var items = tagsOf(list, lang).filter(Boolean);
    if (!items.length) return '';
    return '<ul class="tags">' + items.map(function (x) {
      return '<li>' + esc(x) + '</li>';
    }).join('') + '</ul>';
  }

  /* ---------- 图标 ---------- */
  var ICONS = {
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7.5 8.5 6 8.5-6"/>',
    wechat: '<path d="M9.5 4C5.9 4 3 6.4 3 9.4c0 1.7.9 3.2 2.4 4.2l-.6 2 2.3-1.2c.7.2 1.5.3 2.4.3h.6a5.6 5.6 0 0 1-.2-1.5c0-3 3-5.4 6.6-5.4h.7C16.4 5.6 13.4 4 9.5 4z"/><path d="M21 14.1c0-2.4-2.4-4.4-5.4-4.4s-5.4 2-5.4 4.4 2.4 4.4 5.4 4.4c.7 0 1.3-.1 1.9-.3l1.9 1-.5-1.6c1.3-.8 2.1-2.1 2.1-3.5z"/>',
    phone: '<path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A14.5 14.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z"/>',
    site: '<circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M3.5 15h17M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',
    bilibili: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="m8 3 2 3M16 3l-2 3M8 12v2M16 12v2"/>',
    x: '<path d="M4 4l16 16M20 4 4 20"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4"/>',
    link: '<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',
    doc: '<path d="M14 3v6h6"/><path d="M19 9v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8z"/>'
  };

  function icon(name, cls) {
    var body = ICONS[name] || ICONS.link;
    return '<svg class="' + (cls || 'icon') + '" viewBox="0 0 24 24" aria-hidden="true">' + body + '</svg>';
  }

  function isResumePage() {
    return document.body.getAttribute('data-page') === 'resume';
  }

  function homeHref(anchor) {
    return isResumePage() ? 'index.html' + (anchor || '') : (anchor || 'index.html');
  }

  /* ---------- 1. 顶部导航与品牌 ---------- */
  function renderHeader(lang) {
    var ui = DATA.ui[lang] || {};

    fill('brand-mark', esc(profile.initial || ''));
    fill('brand-text', esc(pick(profile.name, lang)));

    var brand = document.querySelector('.brand');
    if (brand) brand.setAttribute('href', isResumePage() ? 'index.html' : '#top');

    fill('nav-list', (ui.nav || []).map(function (item) {
      return '<li><a href="' + homeHref('#' + item.id) + '">' + esc(item.label) + '</a></li>';
    }).join(''));

    var skip = document.querySelector('.skip-link');
    if (skip) skip.textContent = ui.skip || '';

    fill('lang-label', ui.langButton || '');
    fill('nav-resume-label', ui.labels ? ui.labels.resume : '');
  }

  /* ---------- 2. 各区块标题（eyebrow / title / desc） ---------- */
  function renderSectionHeadings(lang) {
    var sections = (DATA.ui[lang] || {}).sections || {};
    Array.prototype.forEach.call(document.querySelectorAll('[data-section]'), function (wrapper) {
      var conf = sections[wrapper.getAttribute('data-section')];
      if (!conf) return;
      var eyebrow = wrapper.querySelector('.section-eyebrow');
      var title = wrapper.querySelector('.section-title');
      var desc = wrapper.querySelector('.section-desc');
      if (eyebrow) eyebrow.textContent = conf.eyebrow || '';
      if (title) title.textContent = conf.title || '';
      if (desc) {
        desc.textContent = conf.desc || '';
        desc.hidden = !conf.desc;
      }
    });
  }

  /* ---------- 3. Hero 首屏 ---------- */
  function renderHero(lang) {
    var ui = DATA.ui[lang] || {};
    var hero = ui.hero || {};

    fill('hero-eyebrow', esc(hero.eyebrow || ''));
    fill('hero-name', esc(pick(profile.name, lang)));
    fill('hero-headline', esc(pick(profile.headline, lang)));
    fill('hero-intro', esc(pick(profile.intro, lang)));

    fill('hero-actions',
      '<a class="btn btn-primary" href="' + homeHref('#projects') + '">' + esc(hero.ctaPrimary || '') + '</a>' +
      '<a class="btn btn-ghost" href="' + homeHref('resume.html') + '">' + icon('doc') +
        '<span>' + esc(hero.ctaResume || '') + '</span></a>'
    );

    fill('hero-stats', (profile.facts || []).map(function (fact) {
      return '<div class="stat"><dt>' + esc(t(fact.labelKey)) + '</dt><dd>' +
        esc(pick(fact.value, lang)) + '</dd></div>';
    }).join(''));
  }

  /* ---------- 4. 关于我 ---------- */
  function renderAbout(lang) {
    var bio = pick(profile.bio, lang);
    fill('about-bio', (Array.isArray(bio) ? bio : [bio]).filter(Boolean).map(function (p) {
      return '<p>' + esc(p) + '</p>';
    }).join(''));

    var nav = (DATA.ui[lang] || {}).nav || [];
    var contactLabel = nav.length ? nav[nav.length - 1].label : '';
    var github = DATA.site && DATA.site.githubUser ? 'https://github.com/' + DATA.site.githubUser : '#';

    fill('about-card',
      '<div class="avatar" aria-hidden="true">' + esc(profile.initial || '') + '</div>' +
      '<h3 class="about-card-title">' + esc(pick(profile.name, lang)) + '</h3>' +
      '<p class="about-card-sub">' + esc(pick(profile.headline, lang)) + '</p>' +
      '<ul class="about-links">' +
        '<li><a href="' + esc(github) + '" target="_blank" rel="noopener">GitHub</a></li>' +
        '<li><a href="' + homeHref('resume.html') + '">' + esc(t('resume')) + '</a></li>' +
        '<li><a href="' + homeHref('#contact') + '">' + esc(contactLabel) + '</a></li>' +
      '</ul>'
    );
  }

  /* ---------- 5. 教育经历 / 实习经历（时间线） ---------- */
  function timelineItem(entry, lang, kind) {
    var isExp = kind === 'exp';
    var title = isExp ? pick(entry.company, lang) : pick(entry.school, lang);
    var second = isExp ? pick(entry.role, lang) : pick(entry.degree, lang);
    var sub = isExp ? '' : pick(entry.field, lang);
    var desc = pick(entry.desc, lang);

    return '<li class="timeline-item reveal">' +
      '<span class="timeline-dot" aria-hidden="true"></span>' +
      '<div class="timeline-body">' +
        (entry.period ? '<p class="timeline-period">' + esc(entry.period) + '</p>' : '') +
        '<h3 class="timeline-title">' + esc(title) + (second ? ' · ' + esc(second) : '') + '</h3>' +
        (sub ? '<p class="timeline-sub">' + esc(sub) + '</p>' : '') +
        (desc ? '<p class="timeline-desc">' + esc(desc) + '</p>' : '') +
        tags(entry.tags, lang) +
      '</div>' +
    '</li>';
  }

  function renderEducation(lang) {
    fill('education-timeline', (profile.education || []).map(function (entry) {
      return timelineItem(entry, lang, 'edu');
    }).join(''));

    var experience = profile.experience || [];
    var block = byId('experience-block');
    if (block) {
      block.innerHTML = experience.length
        ? '<h3 class="subsection-title">' + esc(pick(profile.experienceTitle, lang)) + '</h3>' +
          '<ol class="timeline">' + experience.map(function (entry) {
            return timelineItem(entry, lang, 'exp');
          }).join('') + '</ol>'
        : '';
    }
  }

  /* ---------- 6. 技能 ---------- */
  function renderSkills(lang) {
    fill('skills-cards', (DATA.skills || []).map(function (skill) {
      return '<article class="card reveal">' +
        '<h3>' + esc(pick(skill.title, lang)) + '</h3>' +
        '<p>' + esc(pick(skill.desc, lang)) + '</p>' +
        tags(skill.tags, lang) +
      '</article>';
    }).join(''));
  }

  /* ---------- 7. 项目 ---------- */
  function renderProjects(lang) {
    fill('projects-cards', (DATA.projects || []).map(function (project) {
      return '<article class="card project-card reveal">' +
        '<div class="project-top">' +
          (project.badge ? '<span class="project-badge">' + esc(project.badge) + '</span>' : '<span></span>') +
          (project.year ? '<span class="project-year">' + esc(project.year) + '</span>' : '') +
        '</div>' +
        '<h3>' + esc(pick(project.title, lang)) + '</h3>' +
        '<p>' + esc(pick(project.desc, lang)) + '</p>' +
        tags(project.tags, lang) +
        (project.link
          ? '<div class="project-links"><a href="' + esc(project.link) + '" target="_blank" rel="noopener">' +
            esc(t('viewSource')) + ' →</a></div>'
          : '') +
      '</article>';
    }).join(''));
  }

  /* 站外链接才新开窗口 */
  function linkAttrs(href) {
    return /^https?:/i.test(href) ? ' target="_blank" rel="noopener"' : '';
  }

  /* ---------- 8. 作品集 ---------- */
  function renderGallery(lang) {
    fill('gallery-grid', (DATA.gallery || []).map(function (item) {
      var media = item.image
        ? '<img class="gallery-media" src="' + esc(item.image) + '" alt="' +
          esc(pick(item.title, lang)) + '" loading="lazy" />'
        : '<span class="gallery-media gallery-media-empty" aria-hidden="true">' +
          icon('link', 'icon gallery-icon') + '</span>';

      var inner = media +
        '<span class="gallery-body">' +
          '<h3 class="gallery-title">' + esc(pick(item.title, lang)) + '</h3>' +
          '<p class="gallery-caption">' + esc(pick(item.caption, lang)) + '</p>' +
          tags(item.tags, lang) +
        '</span>';

      return item.href
        ? '<a class="gallery-item reveal" href="' + esc(item.href) + '"' + linkAttrs(item.href) + '>' + inner + '</a>'
        : '<div class="gallery-item reveal">' + inner + '</div>';
    }).join(''));
  }

  /* ---------- 9. 文章与笔记 ---------- */
  function renderPosts(lang) {
    fill('posts-list', (DATA.posts || []).map(function (post) {
      var inner =
        '<span class="post-date">' + esc(post.date || '') + '</span>' +
        '<h3 class="post-title">' + esc(pick(post.title, lang)) + '</h3>' +
        '<p class="post-summary">' + esc(pick(post.summary, lang)) + '</p>' +
        tags(post.tags, lang) +
        (post.href ? '<span class="post-more">' + esc(t('readMore')) + ' →</span>' : '');

      return post.href
        ? '<a class="post-item reveal" href="' + esc(post.href) + '"' + linkAttrs(post.href) + '>' + inner + '</a>'
        : '<div class="post-item reveal">' + inner + '</div>';
    }).join(''));
  }

  /* ---------- 10. 联系方式 ---------- */
  function renderContact(lang) {
    fill('contact-cards', (profile.contacts || []).map(function (c) {
      var iconHtml = '<span class="contact-icon" aria-hidden="true">' + icon(c.icon) + '</span>';
      var labelHtml = '<span class="contact-label">' + esc(pick(c.label, lang)) + '</span>';

      /* 邮箱：源码里只存用户名与域名两部分，点击卡片后才拼成完整地址，
         这样简单的爬虫抓不到完整邮箱 */
      if (c.local && c.domain) {
        return '<a class="card contact-card reveal contact-reveal" href="#"' +
          ' data-local="' + esc(c.local) + '" data-domain="' + esc(c.domain) + '"' +
          ' title="' + esc(t('revealEmail')) + '">' +
          iconHtml + labelHtml +
          '<span class="contact-value">' + esc(t('revealEmail')) + '</span>' +
        '</a>';
      }

      var valueHtml = '<span class="contact-value">' + esc(c.value || '') + '</span>';
      return c.href
        ? '<a class="card contact-card reveal" href="' + esc(c.href) + '"' + linkAttrs(c.href) + '>' +
            iconHtml + labelHtml + valueHtml + '</a>'
        : '<div class="card contact-card reveal">' + iconHtml + labelHtml + valueHtml + '</div>';
    }).join(''));
  }

  /* ---------- 11. 奖项荣誉 ---------- */
  function renderAwards(lang) {
    var items = DATA.awards || [];
    var section = byId('awards');
    if (section) section.hidden = items.length === 0;

    fill('awards-cards', items.map(function (award) {
      return '<article class="card reveal">' +
        '<div class="project-top">' +
          (award.level ? '<span class="project-badge">' + esc(pick(award.level, lang)) + '</span>' : '<span></span>') +
          (award.year ? '<span class="project-year">' + esc(award.year) + '</span>' : '') +
        '</div>' +
        '<h3>' + esc(pick(award.title, lang)) + '</h3>' +
        (pick(award.desc, lang) ? '<p>' + esc(pick(award.desc, lang)) + '</p>' : '') +
      '</article>';
    }).join(''));
  }

  /* ---------- 12. 竞赛经历（时间线） ---------- */
  function renderCompetitions(lang) {
    var items = DATA.competitions || [];
    var section = byId('competitions');
    if (section) section.hidden = items.length === 0;

    fill('competitions-timeline', items.map(function (entry) {
      var result = pick(entry.result, lang);
      var desc = pick(entry.desc, lang);
      return '<li class="timeline-item reveal">' +
        '<span class="timeline-dot" aria-hidden="true"></span>' +
        '<div class="timeline-body">' +
          (entry.period ? '<p class="timeline-period">' + esc(entry.period) + '</p>' : '') +
          '<h3 class="timeline-title">' + esc(pick(entry.name, lang)) +
            (result ? ' · ' + esc(result) : '') + '</h3>' +
          (desc ? '<p class="timeline-desc">' + esc(desc) + '</p>' : '') +
          tags(entry.tags, lang) +
        '</div>' +
      '</li>';
    }).join(''));
  }

  /* ---------- 11. 页脚 ---------- */
  function renderFooter(lang) {
    var labels = ((DATA.ui[lang] || {}).labels) || {};
    fill('footer-note', '© <span id="year"></span> ' + esc(pick(profile.name, lang)) + ' · ' + esc(labels.hosted || ''));
    fill('footer-links',
      '<a href="' + esc((DATA.site || {}).repoUrl || '#') + '" target="_blank" rel="noopener">' +
        esc(labels.source || '') + '</a>' +
      '<a href="' + homeHref('resume.html') + '">' + esc(labels.resume || '') + '</a>' +
      '<a href="#top">' + esc(labels.top || '') + '</a>'
    );
  }

  /* ---------- 12. 简历页（resume.html） ---------- */
  function renderResume(lang) {
    var root = byId('resume-root');
    if (!root) return;

    var ui = DATA.ui[lang] || {};
    var sections = ui.sections || {};
    var experience = profile.experience || [];
    var bio = pick(profile.bio, lang);

    var head =
      '<header class="resume-head">' +
        '<div class="resume-identity">' +
          '<h1 class="resume-name">' + esc(pick(profile.name, lang)) + '</h1>' +
          '<p class="resume-headline">' + esc(pick(profile.headline, lang)) + '</p>' +
        '</div>' +
        '<ul class="resume-contacts">' +
          (profile.contacts || []).map(function (c) {
            /* 简历页为了便于打印，邮箱直接显示；首页的联系区块则是点击后才显示 */
            if (c.local && c.domain) {
              var mail = c.local + '@' + c.domain;
              return '<li>' + icon(c.icon) +
                '<a href="mailto:' + esc(mail) + '">' + esc(mail) + '</a></li>';
            }
            var text = esc(c.value || '');
            return '<li>' + icon(c.icon) +
              (c.href ? '<a href="' + esc(c.href) + '">' + text + '</a>' : '<span>' + text + '</span>') + '</li>';
          }).join('') +
        '</ul>' +
      '</header>';

    var summary = '<section class="resume-block">' +
      '<h2 class="resume-h2">' + esc((sections.about || {}).title || '') + '</h2>' +
      (Array.isArray(bio) ? bio : [bio]).filter(Boolean).map(function (p) {
        return '<p>' + esc(p) + '</p>';
      }).join('') +
      '<ul class="resume-facts">' + (profile.facts || []).map(function (f) {
        return '<li><strong>' + esc(t(f.labelKey)) + '</strong><span>' + esc(pick(f.value, lang)) + '</span></li>';
      }).join('') + '</ul>' +
    '</section>';

    var education = '<section class="resume-block">' +
      '<h2 class="resume-h2">' + esc((sections.education || {}).title || '') + '</h2>' +
      '<ol class="timeline resume-timeline">' + (profile.education || []).map(function (entry) {
        return timelineItem(entry, lang, 'edu');
      }).join('') + '</ol>' +
    '</section>';

    var work = experience.length
      ? '<section class="resume-block">' +
          '<h2 class="resume-h2">' + esc(pick(profile.experienceTitle, lang)) + '</h2>' +
          '<ol class="timeline resume-timeline">' + experience.map(function (entry) {
            return timelineItem(entry, lang, 'exp');
          }).join('') + '</ol>' +
        '</section>'
      : '';

    var competitions = (DATA.competitions || []).length
      ? '<section class="resume-block">' +
          '<h2 class="resume-h2">' + esc((sections.competitions || {}).title || '') + '</h2>' +
          '<ul class="resume-competitions">' + DATA.competitions.map(function (entry) {
            var result = pick(entry.result, lang);
            return '<li>' +
              '<div class="resume-item-head">' +
                '<strong>' + esc(pick(entry.name, lang)) + '</strong>' +
                (entry.period ? '<span class="resume-period">' + esc(entry.period) + '</span>' : '') +
              '</div>' +
              (result ? '<p class="resume-tags">' + esc(result) + '</p>' : '') +
              (pick(entry.desc, lang) ? '<p>' + esc(pick(entry.desc, lang)) + '</p>' : '') +
            '</li>';
          }).join('') + '</ul>' +
        '</section>'
      : '';

    var awards = (DATA.awards || []).length
      ? '<section class="resume-block">' +
          '<h2 class="resume-h2">' + esc((sections.awards || {}).title || '') + '</h2>' +
          '<ul class="resume-awards">' + DATA.awards.map(function (award) {
            var level = pick(award.level, lang);
            return '<li><span class="resume-year">' + esc(award.year || '') + '</span>' +
              '<span>' + esc(pick(award.title, lang)) + (level ? ' · ' + esc(level) : '') + '</span></li>';
          }).join('') + '</ul>' +
        '</section>'
      : '';

    var skills = '<section class="resume-block">' +
      '<h2 class="resume-h2">' + esc((sections.skills || {}).title || '') + '</h2>' +
      '<ul class="resume-skills">' + (DATA.skills || []).map(function (skill) {
        return '<li><strong>' + esc(pick(skill.title, lang)) + '</strong>' +
          '<span>' + esc(tagsOf(skill.tags, lang).join(' · ')) + '</span></li>';
      }).join('') + '</ul>' +
    '</section>';

    var projects = '<section class="resume-block">' +
      '<h2 class="resume-h2">' + esc((sections.projects || {}).title || '') + '</h2>' +
      '<ul class="resume-projects">' + (DATA.projects || []).map(function (project) {
        var tagLine = tagsOf(project.tags, lang);
        return '<li>' +
          '<div class="resume-item-head"><strong>' + esc(pick(project.title, lang)) + '</strong>' +
            (project.year ? '<span class="resume-period">' + esc(project.year) + '</span>' : '') +
          '</div>' +
          '<p>' + esc(pick(project.desc, lang)) + '</p>' +
          (tagLine.length ? '<p class="resume-tags">' + esc(tagLine.join(' · ')) + '</p>' : '') +
        '</li>';
      }).join('') + '</ul>' +
    '</section>';

    root.innerHTML = head + summary + education + competitions + work + awards + skills + projects;
  }

  /* ---------- 对外接口 ---------- */
  function all(lang) {
    currentLang = lang;
    renderHeader(lang);
    renderSectionHeadings(lang);
    renderHero(lang);
    renderAbout(lang);
    renderEducation(lang);
    renderCompetitions(lang);
    renderAwards(lang);
    renderSkills(lang);
    renderProjects(lang);
    renderGallery(lang);
    renderPosts(lang);
    renderContact(lang);
    renderFooter(lang);
    renderResume(lang);
  }

  return {
    all: all,
    homeHref: homeHref,
    isResumePage: isResumePage
  };
})();
