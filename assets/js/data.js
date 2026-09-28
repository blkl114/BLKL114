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
    /* 仓库名为 BLKL114，站点以「项目页」形式发布在 /BLKL114/ 子路径下 */
    repoUrl: 'https://github.com/blkl114/BLKL114',
    siteUrl: 'https://blkl114.github.io/BLKL114'
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
        { id: 'about',        label: '关于我' },
        { id: 'education',    label: '教育经历' },
        { id: 'competitions', label: '竞赛经历' },
        { id: 'awards',       label: '奖项荣誉' },
        { id: 'skills',       label: '技能' },
        { id: 'projects',     label: '项目' },
        { id: 'contact',      label: '联系我' }
      ],
      hero: {
        eyebrow: '你好，欢迎来到我的主页 👋',
        ctaPrimary: '看看我的项目',
        ctaResume: '我的简历'
      },
      sections: {
        about:        { eyebrow: 'About',        title: '关于我' },
        education:    { eyebrow: 'Education',    title: '教育经历', desc: '求学经历，以及在校期间的主要收获。' },
        competitions: { eyebrow: 'Competitions', title: '竞赛经历', desc: '参加过的学科竞赛与科创比赛。' },
        awards:       { eyebrow: 'Honors',       title: '奖项荣誉', desc: '获得过的奖学金与荣誉。' },
        skills:       { eyebrow: 'Skills',       title: '技能',     desc: '日常接触较多的知识与工具，仍在持续扩充。' },
        projects:     { eyebrow: 'Projects',     title: '项目',     desc: '一些作品与练习，更多内容都在 GitHub 上。' },
        gallery:      { eyebrow: 'Gallery',      title: '作品集',   desc: '界面与数据可视化成果的展示。' },
        posts:        { eyebrow: 'Posts',        title: '文章与笔记', desc: '记录踩过的坑与学到的东西。' },
        contact:      { eyebrow: 'Contact',      title: '联系我',   desc: '任何想法、建议或合作邀约，都欢迎找我聊聊。' }
      },
      labels: {
        location: '所在地', languages: '语言', status: '目前', research: '研究方向',
        factsTitle: '基本信息', contactTitle: '顺便说说',
        viewSource: '查看源码', readMore: '阅读全文', visit: '访问',
        resume: '查看简历', backHome: '回到首页', top: '回到顶部', source: '源码',
        hosted: '由 GitHub Pages 托管',
        revealEmail: '点击显示邮箱',
        noJs: '你的浏览器禁用或未支持 JavaScript，部分内容可能无法显示。'
      }
    },
    en: {
      langButton: '中',
      htmlLang: 'en',
      pageTitle: 'Zifan Liu · Personal Website',
      resumeTitle: 'Resume · Zifan Liu',
      skip: 'Skip to content',
      nav: [
        { id: 'about',        label: 'About' },
        { id: 'education',    label: 'Education' },
        { id: 'competitions', label: 'Competitions' },
        { id: 'awards',       label: 'Honors' },
        { id: 'skills',       label: 'Skills' },
        { id: 'projects',     label: 'Projects' },
        { id: 'contact',      label: 'Contact' }
      ],
      hero: {
        eyebrow: 'Hi, welcome to my homepage 👋',
        ctaPrimary: 'See my projects',
        ctaResume: 'My resume'
      },
      sections: {
        about:        { eyebrow: 'About',        title: 'About me' },
        education:    { eyebrow: 'Education',    title: 'Education', desc: 'My academic background and what I gained from it.' },
        competitions: { eyebrow: 'Competitions', title: 'Competitions', desc: 'Academic and science competitions I took part in.' },
        awards:       { eyebrow: 'Honors',       title: 'Honors & awards', desc: 'Scholarships and honours I have received.' },
        skills:       { eyebrow: 'Skills',       title: 'Toolbox',  desc: 'Knowledge and tools I work with, and still growing.' },
        projects:     { eyebrow: 'Projects',     title: 'Projects', desc: 'Selected works and practices, more on GitHub.' },
        gallery:      { eyebrow: 'Gallery',      title: 'Gallery',  desc: 'A look at interfaces and data visualisations I built.' },
        posts:        { eyebrow: 'Posts',        title: 'Writing',  desc: 'Notes on problems solved and lessons learned.' },
        contact:      { eyebrow: 'Contact',      title: 'Get in touch', desc: 'Ideas, feedback or collaboration — always welcome.' }
      },
      labels: {
        location: 'Location', languages: 'Languages', status: 'Status', research: 'Research',
        factsTitle: 'Basic info', contactTitle: 'Also here',
        viewSource: 'View source', readMore: 'Read more', visit: 'Visit',
        resume: 'View resume', backHome: 'Back home', top: 'Back to top', source: 'Source',
        hosted: 'Hosted on GitHub Pages',
        revealEmail: 'Click to show email',
        noJs: 'JavaScript is disabled, so some content may not be shown.'
      }
    }
  },

  /* =============== 3. 个人信息（★ 主要修改区） =============== */
  profile: {
    /* 页面左上角 logo 与浏览器标题里的名字 */
    name: { zh: '刘子凡', en: 'Zifan Liu' },
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
        'I am Zifan Liu, an undergraduate in the Electronic Information Science experimental class at Peking University. Physics is my main interest, and I like working through theory and numerics hand in hand.',
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

    /* 联系方式
       · 邮箱拆成 local + domain 两段存放：页面源码里不会出现完整的邮箱地址，
         访客点击卡片后才拼成 mailto 链接（逻辑在 render.js 与 main.js）
       · 换邮箱只改 local 与 domain 即可；想加微信 / 电话，照着 github 那行加一条
         （icon 支持 github / email / wechat / phone / site / bilibili / x / linkedin） */
    contacts: [
      { icon: 'github', label: { zh: 'GitHub', en: 'GitHub' }, value: '@blkl114', href: 'https://github.com/blkl114' },
      { icon: 'email', label: { zh: '邮箱（校内）', en: 'Email (PKU)' },
        local: '2500012820', domain: 'stu.pku.edu.cn' },
      { icon: 'email', label: { zh: '邮箱（Gmail）', en: 'Email (Gmail)' },
        local: 'lzfblkl', domain: 'gmail.com' },
      { icon: 'email', label: { zh: '邮箱（QQ）', en: 'Email (QQ)' },
        local: '3908357857', domain: 'qq.com' }
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
        tags: { zh: ['物理', '数值计算', 'MATLAB', 'Python'], en: ['Physics', 'Numerics', 'MATLAB', 'Python'] },
        /* 学校 / 学院官网链接，会显示在时间线卡片底部 */
        links: [
          { label: { zh: '北京大学官网', en: 'Peking University' }, href: 'https://www.pku.edu.cn/' },
          { label: { zh: '信息科学技术学院', en: 'School of EECS' }, href: 'https://eecs.pku.edu.cn/' }
        ]
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
        tags: { zh: [], en: [] },
        links: [
          { label: { zh: '长郡中学官网', en: 'Changjun High School' }, href: 'http://www.changjun.com.cn/' }
        ]
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
      title: { zh: '物理与数学基础', en: 'Physics & mathematics' },
      desc: {
        zh: '力学、电磁学、量子力学与数理方法，习惯从第一性原理出发把问题推一遍。',
        en: 'Mechanics, electromagnetism, quantum mechanics and mathematical methods — I like deriving problems from first principles.'
      },
      tags: {
        zh: ['力学', '电磁学', '量子力学', '数理方法'],
        en: ['Mechanics', 'Electromagnetism', 'Quantum', 'Math methods']
      }
    },
    {
      title: { zh: '数值计算与可视化', en: 'Numerical computation & visualisation' },
      desc: {
        zh: '用 MATLAB / Python 求解微分方程、有限元与本征值问题，并用图像验证结果是否合理。',
        en: 'Solving differential equations, finite-element and eigenvalue problems with MATLAB / Python, and checking the results visually.'
      },
      tags: {
        zh: ['MATLAB', 'Python', '差分 / 有限元', '本征值问题'],
        en: ['MATLAB', 'Python', 'FDM / FEM', 'Eigenvalue problems']
      }
    },
    {
      title: { zh: '光子晶体 CWT（进行中）', en: 'Photonic crystals & CWT (ongoing)' },
      desc: {
        zh: '当前研究方向：光子晶体中 CWT 的理论框架与数值实现，正在读文献、逐步搭建计算流程。',
        en: 'Current research direction: the CWT framework for photonic crystals and its numerical implementation — reading the literature and building the pipeline step by step.'
      },
      tags: {
        zh: ['光子晶体', 'CWT', '理论推导', '编程实现'],
        en: ['Photonic crystal', 'CWT', 'Theory', 'Coding']
      }
    }
  ],

  /* =============== 5. 奖项荣誉 ===============
     · stage = 阶段（本科 / 高中），level = 级别（奖学金 / 校级 / 国家级 / 省级）
     · 各字段都可写成 { zh: '...', en: '...' } 的双语形式；数组为空时区块自动隐藏 */
  awards: [
    {
      year: '2026',
      stage: { zh: '本科', en: 'Undergraduate' },
      level: { zh: '奖学金', en: 'Scholarship' },
      title: { zh: '华泰证券科技奖学金', en: 'Huatai Securities Science and Technology Scholarship' }
    },
    {
      year: '2026',
      stage: { zh: '本科', en: 'Undergraduate' },
      level: { zh: '校级', en: 'School level' },
      title: { zh: 'CUPT 北京大学校内赛 · 优胜奖', en: 'CUPT · Peking University campus round · Merit Award' }
    },
    {
      year: '2025',
      stage: { zh: '本科', en: 'Undergraduate' },
      level: { zh: '国家级', en: 'National level' },
      title: {
        zh: '第十七届全国大学生数学竞赛 · 非数学 A 类二等奖',
        en: '17th Chinese Mathematics Competitions · Second Prize (Non-Mathematics A)'
      }
    },
    {
      year: '2024',
      stage: { zh: '高中', en: 'High school' },
      level: { zh: '省级', en: 'Provincial level' },
      title: {
        zh: '第 41 届全国中学生物理竞赛 · 湖南赛区一等奖',
        en: '41st Chinese Physics Olympiad · First Prize, Hunan Region'
      }
    },
    {
      year: '2023',
      stage: { zh: '高中', en: 'High school' },
      level: { zh: '省级', en: 'Provincial level' },
      title: {
        zh: '第 40 届全国中学生物理竞赛 · 湖南赛区一等奖',
        en: '40th Chinese Physics Olympiad · First Prize, Hunan Region'
      }
    }
  ],

  /* =============== 6. 竞赛经历 ===============
     渲染成时间线（按时间倒序）；数组为空时区块自动隐藏 */
  competitions: [
    {
      period: '2026.05',
      name: { zh: 'CUPT 北京大学校内赛', en: 'CUPT · Peking University campus round' },
      result: { zh: '优胜奖', en: 'Merit Award' },
      tags: { zh: ['物理', '校内赛'], en: ['Physics', 'Campus round'] }
    },
    {
      period: '2025.10',
      name: { zh: '第十七届全国大学生数学竞赛', en: '17th Chinese Mathematics Competitions' },
      result: { zh: '非数学 A 类二等奖', en: 'Second Prize, Non-Mathematics A' },
      tags: { zh: ['数学', '国家级'], en: ['Mathematics', 'National'] }
    },
    {
      period: '2024.09',
      name: { zh: '第 41 届全国中学生物理竞赛复赛', en: '41st Chinese Physics Olympiad (semi-final)' },
      result: { zh: '湖南赛区一等奖', en: 'First Prize, Hunan Region' },
      tags: { zh: ['物理', '赛区复赛'], en: ['Physics', 'Provincial semi-final'] }
    },
    {
      period: '2023.09',
      name: { zh: '第 40 届全国中学生物理竞赛复赛', en: '40th Chinese Physics Olympiad (semi-final)' },
      result: { zh: '湖南赛区一等奖', en: 'First Prize, Hunan Region' },
      tags: { zh: ['物理', '赛区复赛'], en: ['Physics', 'Provincial semi-final'] }
    }
  ],

  /* =============== 5. 项目 =============== */
  projects: [
    {
      badge: 'Website',
      year: '2026',
      title: { zh: 'BLKL114 个人网站', en: 'BLKL114 — personal website' },
      desc: {
        zh: '本站：纯静态实现，中英双语、深浅色主题、响应式布局，托管于 GitHub Pages。',
        en: 'This site: fully static, bilingual, with dark mode and a responsive layout, hosted on GitHub Pages.'
      },
      tags: { zh: ['HTML', 'CSS', 'JavaScript'], en: ['HTML', 'CSS', 'JavaScript'] },
      link: 'https://github.com/blkl114/BLKL114'
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
      href: 'https://github.com/blkl114/BLKL114',
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
      href: 'https://github.com/blkl114/BLKL114'
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
