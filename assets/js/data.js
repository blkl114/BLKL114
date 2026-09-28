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
      pageTitle: '刘子凡 · 个人网站',
      resumeTitle: '简历 · 刘子凡',
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
        location: '所在地', languages: '语言', status: '目前', research: '研究方向',
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
      pageTitle: 'Liu Zifan · Personal Website',
      resumeTitle: 'Resume · Liu Zifan',
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
        location: 'Location', languages: 'Languages', status: 'Status', research: 'Research',
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
    /* 页面左上角 logo 与浏览器标题里的名字 */
    name: { zh: '刘子凡', en: 'Liu Zifan' },
    initial: '刘',                             // logo 方块里显示的字

    /* 一句话身份说明 */
    headline: {
      zh: '北京大学 · 电子信息科学类实验班',
      en: 'Peking University · Electronic Information Science (Experimental Class)'
    },

    /* Hero 首屏的自我介绍 */
    intro: {
      zh: '物理学爱好者，目前正在研究光子晶体 CWT 理论与数值计算。',
      en: 'Physics enthusiast, currently working on CWT theory and numerical computation for photonic crystals.'
    },

    /* 关于我：可以写多段，用数组 */
    bio: {
      zh: [
        '我是刘子凡，北京大学电子信息科学类实验班在读本科生，主要兴趣在物理学，喜欢把理论推导和数值计算放在一起琢磨。',
        '目前正在研究光子晶体 CWT 理论与数值计算：一边读文献梳理理论框架，一边用 MATLAB / Python 做数值模拟与可视化，希望把公式变成能跑、能看的图。',
        '这个网站用来记录我的学习与研究进展。如果你想交流物理、数值方法，或者只是想认识一下，都欢迎随时联系我。'
      ],
      en: [
        'I am Liu Zifan, an undergraduate in the Electronic Information Science experimental class at Peking University. Physics is my main interest, and I like working through theory and numerics hand in hand.',
        'I am currently studying CWT theory and numerical computation for photonic crystals: reading papers to understand the framework, and using MATLAB / Python for simulation and visualisation.',
        'This site keeps a record of my study and research. Feel free to get in touch if you would like to talk about physics, numerical methods, or anything else.'
      ]
    },

    /* 基本信息卡（labelKey 对应 ui.labels 里的文字） */
    facts: [
      { labelKey: 'location',  value: { zh: '中国 · 北京', en: 'Beijing, China' } },
      { labelKey: 'research',  value: { zh: '光子晶体 CWT 理论与数值计算', en: 'CWT theory & numerics for photonic crystals' } },
      { labelKey: 'status',    value: { zh: '本科在读（2025 级）', en: 'Undergraduate, class of 2025' } },
      { labelKey: 'languages', value: { zh: '中文 · English', en: 'Chinese · English' } }
    ],

    /* 联系方式：icon 支持 github / email / wechat / phone / site / bilibili / x / linkedin
       不需要的条目整行删掉即可；例子（微信、电话）已注释，需要时取消注释并填入 */
    contacts: [
      { icon: 'github', label: { zh: 'GitHub', en: 'GitHub' }, value: '@blkl114', href: 'https://github.com/blkl114' },
      { icon: 'email',  label: { zh: '邮箱（校内）', en: 'Email (PKU)' },
        value: '2500012820@stu.pku.edu.cn', href: 'mailto:2500012820@stu.pku.edu.cn' },
      { icon: 'email',  label: { zh: '邮箱（Gmail）', en: 'Email (Gmail)' },
        value: 'lzfblkl@gmail.com', href: 'mailto:lzfblkl@gmail.com' },
      { icon: 'email',  label: { zh: '邮箱（QQ）', en: 'Email (QQ)' },
        value: '3908357857@qq.com', href: 'mailto:3908357857@qq.com' }
      /* 需要显示微信 / 电话时，照着上面的格式加一行即可
      ,{ icon: 'wechat', label: { zh: '微信', en: 'WeChat' }, value: 'your-wechat-id',   href: '' }
      ,{ icon: 'phone',  label: { zh: '电话', en: 'Phone' },  value: '+86 138-0000-0000', href: 'tel:+8613800000000' }
      */
    ],

    /* 教育经历（按时间倒序） */
    education: [
      {
        period: '2025.09 – 至今',
        school: { zh: '北京大学', en: 'Peking University' },
        degree: { zh: '本科在读', en: 'Undergraduate' },
        field: {
          zh: '信息科学技术学院 · 电子信息科学类实验班',
          en: 'School of Electronics Engineering and Computer Science · Electronic Information Science (Experimental Class)'
        },
        desc: {
          zh: '现就读于信息科学技术学院电子信息科学类实验班，主要兴趣方向为物理学，正在开展光子晶体 CWT 理论与数值计算相关的学习与研究。',
          en: 'Studying in the Electronic Information Science experimental class at the School of EECS. Physics is my main interest — I am currently working on CWT theory and numerical computation for photonic crystals.'
        },
        tags: { zh: ['物理', '数值计算', 'MATLAB', 'Python'], en: ['Physics', 'Numerics', 'MATLAB', 'Python'] }
      },
      {
        period: '2022.09 – 2025.06',
        school: { zh: '长郡中学', en: 'Changjun High School' },
        degree: { zh: '高中 · 理科', en: 'High School · Science' },
        field: { zh: '', en: '' },
        desc: {
          zh: '高中理科方向，在这里打下了物理与数学的基础。',
          en: 'Science track, where I built the foundations of physics and mathematics.'
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
    /* 下面两个示例项目已按需隐藏；想恢复就把这段注释去掉 */
    /*
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
    */
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
