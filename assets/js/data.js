/* =====================================================================
   assets/js/data.js —— 全站内容与文案（这是唯一需要修改的“内容文件”）
   ---------------------------------------------------------------------
   · 姓名、教育经历、个人简介、联系方式、项目、文章全部写在这里
   · 每个字段都是 { zh: '中文', en: 'English' } 的双语写法
   · 改完保存、刷新页面即可看到效果；git push 后线上同步更新
   · 以 /* TODO: ... *\/ 标注的地方是需要你替换成真实信息的位置
   ===================================================================== */
window.SITE_DATA = {

  /* =============== 1. 站点信息 =============== */
  site: {
    githubUser: 'blkl114',
    repoUrl: 'https://github.com/blkl114/blkl114.github.io',
    siteUrl: 'https://blkl114.github.io'
  },

  /* =============== 2. 界面文案（导航 / 标题 / 按钮） =============== */
  ui: {
    zh: {
      langButton: 'EN',                       // 按钮上显示「点击后切换到的语言」
      htmlLang: 'zh-CN',
      pageTitle: 'blkl114 · 个人网站',
      resumeTitle: '简历 · blkl114',
      skip: '跳到主要内容',
      nav: [
        { id: 'about',     label: '关于我' },
        { id: 'education', label: '教育经历' },
        { id: 'skills',    label: '技能' },
        { id: 'projects',  label: '项目' },
        { id: 'gallery',   label: '作品集' },
        { id: 'posts',     label: '文章' },
        { id: 'contact',   label: '联系我' }
      ],
      hero: {
        eyebrow: '你好，欢迎来到我的主页 👋',
        ctaPrimary: '看看我的项目',
        ctaResume: '我的简历'
      },
      sections: {
        about:     { eyebrow: 'About',     title: '关于我' },
        education: { eyebrow: 'Education', title: '教育经历', desc: '求学经历，以及在校期间的主要收获。' },
        skills:    { eyebrow: 'Skills',    title: '技能',     desc: '日常接触较多的技术与工具，仍在持续扩充。' },
        projects:  { eyebrow: 'Projects',  title: '项目',     desc: '一些作品与练习，更多内容都在 GitHub 上。' },
        gallery:   { eyebrow: 'Gallery',   title: '作品集',   desc: '界面与数据可视化成果的展示。' },
        posts:     { eyebrow: 'Posts',     title: '文章与笔记', desc: '记录踩过的坑与学到的东西。' },
        contact:   { eyebrow: 'Contact',   title: '联系我',   desc: '任何想法、建议或合作邀约，都欢迎找我聊聊。' }
      },
      labels: {
        location: '所在地', languages: '语言', status: '目前',
        factsTitle: '基本信息', contactTitle: '顺便说说',
        viewSource: '查看源码', readMore: '阅读全文', visit: '访问',
        resume: '查看简历', backHome: '回到首页', top: '回到顶部', source: '源码',
        hosted: '由 GitHub Pages 托管',
        noJs: '你的浏览器禁用或未支持 JavaScript，部分内容可能无法显示。'
      }
    },
    en: {
      langButton: '中',
      htmlLang: 'en',
      pageTitle: 'blkl114 · Personal Website',
      resumeTitle: 'Resume · blkl114',
      skip: 'Skip to content',
      nav: [
        { id: 'about',     label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'skills',    label: 'Skills' },
        { id: 'projects',  label: 'Projects' },
        { id: 'gallery',   label: 'Gallery' },
        { id: 'posts',     label: 'Writing' },
        { id: 'contact',   label: 'Contact' }
      ],
      hero: {
        eyebrow: 'Hi, welcome to my homepage 👋',
        ctaPrimary: 'See my projects',
        ctaResume: 'My resume'
      },
      sections: {
        about:     { eyebrow: 'About',     title: 'About me' },
        education: { eyebrow: 'Education', title: 'Education', desc: 'My academic background and what I gained from it.' },
        skills:    { eyebrow: 'Skills',    title: 'Toolbox',  desc: 'Technologies and tools I work with, and still growing.' },
        projects:  { eyebrow: 'Projects',  title: 'Projects', desc: 'Selected works and practices, more on GitHub.' },
        gallery:   { eyebrow: 'Gallery',   title: 'Gallery',  desc: 'A look at interfaces and data visualisations I built.' },
        posts:     { eyebrow: 'Posts',     title: 'Writing',  desc: 'Notes on problems solved and lessons learned.' },
        contact:   { eyebrow: 'Contact',   title: 'Get in touch', desc: 'Ideas, feedback or collaboration — always welcome.' }
      },
      labels: {
        location: 'Location', languages: 'Languages', status: 'Status',
        factsTitle: 'Basic info', contactTitle: 'Also here',
        viewSource: 'View source', readMore: 'Read more', visit: 'Visit',
        resume: 'View resume', backHome: 'Back home', top: 'Back to top', source: 'Source',
        hosted: 'Hosted on GitHub Pages',
        noJs: 'JavaScript is disabled, so some content may not be shown.'
      }
    }
  },

  /* =============== 3. 个人信息（★ 主要修改区） =============== */
  profile: {
    /* 页面左上角 logo 与浏览器标题里的名字  TODO: 换成你的真实姓名或昵称 */
    name: { zh: 'blkl114', en: 'blkl114' },
    initial: 'b',                              // logo 方块里显示的字母

    /* 一句话身份说明 */
    headline: { zh: '开发者 · 终身学习者', en: 'Developer · Lifelong Learner' },

    /* Hero 首屏的自我介绍 */
    intro: {
      zh: '一名热爱动手实践的开发者 —— 喜欢把想法变成能跑起来的代码，从脚本工具到网页应用，持续折腾、持续记录。',
      en: 'A hands-on developer who loves turning ideas into working code — from small scripts to web apps, always building, always learning.'
    },

    /* 关于我：可以写多段，用数组  TODO: 换成你的真实介绍 */
    bio: {
      zh: [
        '我是 blkl114，目前主要做网页前端与 Python 工具开发。我喜欢把重复的工作交给脚本，把有意思的想法做成小项目。',
        '课余时间会折腾一些工程计算与数据可视化，也会把踩过的坑记成笔记。如果你对下面的项目感兴趣，或者想一起做点什么，欢迎随时联系我。'
      ],
      en: [
        'I am blkl114. I mainly work on front-end pages and Python tooling — automating repetitive work and turning ideas into small projects.',
        'In my spare time I explore engineering computation and data visualisation, and I write down the problems I run into. Feel free to reach out if anything below interests you.'
      ]
    },

    /* 基本信息卡（labelKey 对应 ui.labels 里的文字） */
    facts: [
      { labelKey: 'location',  value: { zh: '中国', en: 'China' } },
      { labelKey: 'languages', value: { zh: '中文 · English', en: 'Chinese · English' } },
      { labelKey: 'status',    value: { zh: '开放合作与交流', en: 'Open to collaboration' } }
    ],

    /* 联系方式：icon 支持 github / email / wechat / phone / site / bilibili / x / linkedin
       不需要的条目整行删掉即可；下面 GitHub 之外的例子已注释，填好后取消注释就会显示 */
    contacts: [
      { icon: 'github', label: { zh: 'GitHub', en: 'GitHub' }, value: '@blkl114', href: 'https://github.com/blkl114' }
      /* TODO: 取消注释并改成你的真实账号
      ,{ icon: 'email',  label: { zh: '邮箱', en: 'Email' },   value: 'your@example.com',  href: 'mailto:your@example.com' }
      ,{ icon: 'wechat', label: { zh: '微信', en: 'WeChat' },  value: 'your-wechat-id',    href: '' }
      ,{ icon: 'phone',  label: { zh: '电话', en: 'Phone' },   value: '+86 138-0000-0000', href: 'tel:+8613800000000' }
      ,{ icon: 'site',   label: { zh: '个人网站', en: 'Website' }, value: 'blkl114.github.io', href: 'https://blkl114.github.io' }
      */
    ],

    /* 教育经历（建议按时间倒序） TODO: 换成你的真实学校、专业与时间 */
    education: [
      {
        period: '2021.09 – 2025.06',
        school: { zh: '某某大学', en: 'Your University' },
        degree: { zh: '工学学士', en: 'B.Eng.' },
        field:  { zh: '计算机科学与技术', en: 'Computer Science' },
        desc: {
          zh: '主修数据结构、计算机网络、数据库与操作系统；参与校园网站的开发与维护，并自学了前端工程化相关的内容。',
          en: 'Core courses: data structures, computer networks, databases and operating systems. Worked on the campus website and taught myself front-end engineering.'
        },
        tags: { zh: ['GPA 3.7 / 4.0', '校级奖学金', 'ACM 集训队'], en: ['GPA 3.7 / 4.0', 'Scholarship', 'ACM Club'] }
      },
      {
        period: '2018.09 – 2021.06',
        school: { zh: '某某中学', en: 'Your High School' },
        degree: { zh: '高中 · 理科', en: 'High School · Science' },
        field:  { zh: '', en: '' },
        desc: {
          zh: '在这里第一次接触编程，并开始自学网页开发与 Python。',
          en: 'Where I first met programming, and started learning web development and Python on my own.'
        },
        tags: { zh: [], en: [] }
      }
    ],

    /* 实习 / 工作经历：标题文字 + 条目。不需要就把 experience 留空数组 [] */
    experienceTitle: { zh: '实习与工作经历', en: 'Internships & Work' },
    experience: [
      /* TODO: 取消注释并填入你的经历
      {
        period: '2024.07 – 2024.09',
        company: { zh: '某某科技有限公司', en: 'Some Tech Co., Ltd.' },
        role:    { zh: '前端开发实习生', en: 'Frontend Intern' },
        desc:    { zh: '负责内部管理后台的页面开发与组件整理，独立完成了数据看板模块。',
                   en: 'Built pages and reusable components for an internal admin console, and delivered the dashboard module.' },
        tags:    { zh: ['Vue', 'ECharts'], en: ['Vue', 'ECharts'] }
      }
      */
    ]
  },

  /* =============== 4. 技能 =============== */
  skills: [
    {
      title: { zh: '网页开发', en: 'Web development' },
      desc: {
        zh: '语义化 HTML、现代 CSS 布局与原生 JavaScript，追求不依赖构建工具也能快速上线。',
        en: 'Semantic HTML, modern CSS layouts and vanilla JavaScript — shipping fast without a build step.'
      },
      tags: { zh: ['HTML5', 'CSS3', 'JavaScript', '响应式设计'], en: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'] }
    },
    {
      title: { zh: '脚本与数据', en: 'Scripting & data' },
      desc: {
        zh: '用 Python 处理数据、批量文件和自动化任务，也做一些数值计算与可视化。',
        en: 'Automating data, files and repetitive tasks with Python, plus some numerical computing and visualisation.'
      },
      tags: { zh: ['Python', 'NumPy', '数据处理', '可视化'], en: ['Python', 'NumPy', 'Data processing', 'Visualisation'] }
    },
    {
      title: { zh: '工具与协作', en: 'Tools & workflow' },
      desc: {
        zh: '版本管理、命令行与编辑器效率工具，让日常开发更顺手。',
        en: 'Version control, the command line and editor tooling that make everyday development smoother.'
      },
      tags: { zh: ['Git', 'GitHub', 'VS Code', 'PowerShell'], en: ['Git', 'GitHub', 'VS Code', 'PowerShell'] }
    }
  ],

  /* =============== 5. 项目 =============== */
  projects: [
    {
      badge: 'Website',
      year: '2026',
      title: { zh: 'blkl114.github.io 个人网站', en: 'blkl114.github.io — personal website' },
      desc: {
        zh: '本站：纯静态实现，中英双语、深浅色主题、响应式布局，托管于 GitHub Pages。',
        en: 'This site: fully static, bilingual, with dark mode and a responsive layout, hosted on GitHub Pages.'
      },
      tags: { zh: ['HTML', 'CSS', 'JavaScript'], en: ['HTML', 'CSS', 'JavaScript'] },
      link: 'https://github.com/blkl114/blkl114.github.io'
    },
    /* TODO: 下面两个是示例项目，替换成你自己的作品，不需要就整段删掉 */
    {
      badge: 'Tool',
      year: '2025',
      title: { zh: '批量文件处理脚本', en: 'Batch file processing script' },
      desc: {
        zh: '用 Python 把重复的整理、重命名与格式转换工作自动化，一条命令处理上千个文件。',
        en: 'A Python CLI that automates renaming, tidying and converting thousands of files in one command.'
      },
      tags: { zh: ['Python', '自动化'], en: ['Python', 'Automation'] },
      link: 'https://github.com/blkl114'
    },
    {
      badge: 'Demo',
      year: '2025',
      title: { zh: '数据可视化小工具', en: 'Data visualisation toy' },
      desc: {
        zh: '把导出的实验数据转成可交互图表，支持缩放与多曲线对比。',
        en: 'Turns exported measurement data into interactive charts with zooming and multi-series comparison.'
      },
      tags: { zh: ['JavaScript', '可视化'], en: ['JavaScript', 'Visualisation'] },
      link: 'https://github.com/blkl114'
    }
  ],

  /* =============== 6. 作品集 / 图集 ===============
     没有图片时用渐变占位块显示；想放真实截图，把 image 填成图片地址即可，
     例如 image: 'assets/img/board.png'（图片放到 assets/img/ 目录下） */
  gallery: [
    {
      title: { zh: '站点首页设计', en: 'Homepage design' },
      caption: { zh: '深色模式下的首屏与渐变背景。', en: 'Hero section with gradient background in dark mode.' },
      image: '',
      href: 'https://github.com/blkl114/blkl114.github.io',
      tags: { zh: ['UI', 'CSS'], en: ['UI', 'CSS'] }
    },
    {
      title: { zh: '响应式与移动端', en: 'Responsive & mobile' },
      caption: { zh: '从手机到桌面都保持可用，小屏折叠为汉堡菜单。', en: 'Usable from phone to desktop, with a collapsible menu on small screens.' },
      image: '',
      href: '',
      tags: { zh: ['响应式'], en: ['Responsive'] }
    },
    {
      title: { zh: '数据可视化', en: 'Data visualisation' },
      caption: { zh: '实验数据的多曲线对比图。', en: 'Multi-series comparison of measurement data.' },
      image: '',
      href: '',
      tags: { zh: ['Python', '可视化'], en: ['Python', 'Chart'] }
    }
  ],

  /* =============== 7. 文章与笔记 ===============
     href 可以填外部链接，也可以填站内页面（例如 'posts/hello.html'） */
  posts: [
    {
      date: '2026-01-20',
      title: { zh: '用 GitHub Pages 搭一个免费的个人网站', en: 'A free personal site with GitHub Pages' },
      summary: {
        zh: '从建仓库、配置自定义域名到自动发布，把整个过程整理成了一份可直接照做的笔记。',
        en: 'From creating the repo and wiring up Pages to publishing automatically — a step-by-step note.'
      },
      tags: { zh: ['GitHub Pages', '教程'], en: ['GitHub Pages', 'Tutorial'] },
      href: 'https://github.com/blkl114/blkl114.github.io'
    },
    {
      date: '2025-12-08',
      title: { zh: '一个网页同时支持中英文的简单做法', en: 'A simple way to make a page bilingual' },
      summary: {
        zh: '用一份数据文件 + data-i18n 渲染实现双语切换，避免维护两套 HTML。',
        en: 'One data file plus rendering keeps a single HTML in sync for both languages.'
      },
      tags: { zh: ['JavaScript', '国际化'], en: ['JavaScript', 'i18n'] },
      href: ''
    },
    /* TODO: 上面两条是示例文章，换成你自己的文章或直接删掉 */
    {
      date: '2025-10-02',
      title: { zh: '踩坑记录：Windows 上 git 提交中文乱码', en: 'Gotcha: garbled Chinese commit messages on Windows' },
      summary: {
        zh: 'PowerShell 把参数按 ANSI 编码传给 git 导致乱码，用 -F 指定 UTF-8 文件即可解决。',
        en: 'PowerShell passes arguments using the ANSI code page; committing with -F and a UTF-8 file fixes it.'
      },
      tags: { zh: ['Git', 'Windows'], en: ['Git', 'Windows'] },
      href: ''
    }
  ]
};
