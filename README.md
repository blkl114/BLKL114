# blkl114.github.io

个人网站，使用纯 HTML / CSS / JavaScript 编写，无第三方依赖、无需构建工具，
托管在 **GitHub Pages**：<https://blkl114.github.io>

## 页面结构

| 文件 | 说明 |
| --- | --- |
| `index.html` | 首页：Hero 首屏、关于我、教育经历、技能、项目、作品集、文章、联系 |
| `resume.html` | 独立简历页，可一键「打印 / 保存为 PDF」 |
| `404.html` | 自定义 404 页面 |
| `assets/css/style.css` | 全站样式：CSS 变量、深浅色主题、时间线、卡片、简历与打印样式 |
| `assets/js/data.js` | **所有个人信息与文案（中英双语）——改内容只需动这一个文件** |
| `assets/js/render.js` | 把 `data.js` 渲染成页面结构（首页与简历页共用同一套数据） |
| `assets/js/main.js` | 主题切换、语言切换、移动端菜单、滚动动效等交互 |
| `.nojekyll` | 让 GitHub Pages 跳过 Jekyll，按纯静态文件服务 |

## 功能特性

- **完整个人信息页**：姓名与身份说明、个人简介、基本信息、教育经历时间线、技能、项目、作品集、文章与笔记、联系方式
- **中英文双语切换**：右上角「EN / 中」一键切换并记忆选择；也支持链接直接指定语言，如 `index.html?lang=en`
- **独立简历页 `/resume.html`**：与首页共用数据，已写好打印样式，可直接打印或另存为 PDF
- **深色 / 浅色主题**：默认跟随系统，可手动切换并记忆（首屏内联脚本避免颜色闪烁）
- **响应式设计**：桌面 / 平板 / 手机均可用，小屏自动折叠为汉堡菜单
- **动效细节**：滚动进度条、区块进场动画、导航高亮、返回顶部按钮
- **无障碍**：语义化标签、`skip-link`、`aria-*`、焦点样式，支持 `prefers-reduced-motion`

## 本地预览

```powershell
python -m http.server 8000     # 然后访问 http://localhost:8000
npx serve .                    # 或者用 Node.js 启动
```

## 如何修改内容（重要）

所有文字都在 **`assets/js/data.js`** 里，中英文各写一份，形如 `{ zh: '中文', en: 'English' }`：

```js
name: { zh: '张三', en: 'Zhang San' },
```

| 想改的东西 | 在 `data.js` 里的位置 |
| --- | --- |
| 姓名、身份说明、Logo 字母 | `profile.name` / `profile.headline` / `profile.initial` |
| 个人简介、基本信息 | `profile.intro` / `profile.bio` / `profile.facts` |
| 教育经历 | `profile.education`（数组，按时间倒序；`tags` 可放绩点、奖学金等） |
| 实习 / 工作经历 | `profile.experience`（默认注释掉，取消注释即会出现） |
| 联系方式（邮箱、微信、电话…） | `profile.contacts`（`icon` 支持 github / email / wechat / phone / site / bilibili / x / linkedin） |
| 技能 | `skills` |
| 项目 | `projects` |
| 作品集（可放截图） | `gallery`（填 `image: 'assets/img/xxx.png'` 即显示图片，留空则用渐变占位图） |
| 文章与笔记 | `posts` |
| 导航、区块标题、按钮等界面文字 | `ui.zh` / `ui.en` |
| 主题色 | `assets/css/style.css` 顶部的 `--brand` / `--brand-2` |

## 部署

推送到 `main` 分支即会自动发布（GitHub Pages 会在一两分钟内重新构建）：

```powershell
git add .
git commit -m "update site"
git push
```

## License

个人站点，页面内容版权归作者所有；代码部分可自由参考。

