# blkl114.github.io

个人网站，使用纯 HTML / CSS / JavaScript 编写，无第三方依赖、无需构建工具，
托管在 **GitHub Pages**：<https://blkl114.github.io>

## 目录结构

```
.
├─ index.html            # 首页（Hero / 关于我 / 技能 / 项目 / 联系）
├─ 404.html              # 自定义 404 页面
├─ assets/
│  ├─ css/style.css      # 全站样式：CSS 变量、深浅色主题、响应式布局
│  └─ js/main.js         # 交互脚本：主题切换、移动端菜单、滚动动画等
├─ .nojekyll             # 让 GitHub Pages 跳过 Jekyll，按纯静态文件服务
└─ README.md
```

## 功能特性

- 单页布局，包含首屏、关于我、技能、项目、联系五个区块
- 深色 / 浅色主题一键切换，默认跟随系统设置，选择会保存在浏览器中
- 响应式设计，桌面 / 平板 / 手机均可用，小屏自动折叠为汉堡菜单
- 滚动进度条、区块进场动画、导航高亮、返回顶部按钮
- 语义化标签 + 键盘可达（含「跳到主要内容」链接），支持 `prefers-reduced-motion`

## 本地预览

```powershell
# 任选一种方式
python -m http.server 8000        # 然后访问 http://localhost:8000
npx serve .                       # 需要 Node.js
```

也可以直接用浏览器打开 `index.html`。

## 如何修改内容

| 想改的东西 | 修改位置 |
| --- | --- |
| 名字、自我介绍、所在城市 | `index.html` 中 `#about` 区块（已用 `TODO` 注释标出） |
| 技能关键词 | `index.html` 中 `#skills` 区块的卡片与 `tags` |
| 项目列表 | `index.html` 中 `#projects` 区块，复制一张 `.project-card` 即可 |
| 联系方式（邮箱等） | `index.html` 中 `#contact` 区块，取消注释并填上你的邮箱 |
| 主题色 | `assets/css/style.css` 顶部的 `--brand` / `--brand-2` 变量 |

## 部署

推送到 `main` 分支即会自动发布（GitHub Pages 会在一两分钟内重新构建）：

```powershell
git add .
git commit -m "update site"
git push
```

## License

个人站点，页面内容版权归作者所有；代码部分可自由参考。

