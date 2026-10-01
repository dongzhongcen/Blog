# 个人博客（Blog）

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-19.x-61dafb">
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-5.x-blue">
  <img alt="Vite" src="https://img.shields.io/badge/vite-7.x-646cff">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/tailwindcss-3.x-38bdf8">
  <img alt="shadcn/ui" src="https://img.shields.io/badge/ui-shadcn%2Fui-black">
</p>

这是 dongzhongcen 的个人博客前端项目，基于 React 19 + TypeScript + Vite，使用 Tailwind CSS 和 shadcn/ui 组件。文章数据以静态形式写在 `src/data/posts.ts` 中，无需后端。项目目前实现了首页、文章列表（搜索和标签筛选）、文章详情和关于页面。

## 功能特性

- **首页**：Hero 区块加文章列表。
- **文章列表**：按标题、摘要、标签搜索，并可按标签筛选。
- **文章详情**：展示文章正文（简单解析类 Markdown 内容）、作者、日期、阅读时长和标签，支持返回列表和浏览器后退。
- **关于页面**：展示作者信息和社交链接。
- **静态数据**：作者信息和 6 篇示例文章定义在 `src/data/posts.ts` 中。

## 项目结构

```text
src/
├── App.tsx              # 页面切换：首页 / 文章 / 关于 / 文章详情
├── data/posts.ts        # 作者信息和文章数据
├── types/blog.ts        # BlogPost、Author 类型
├── sections/            # Header、Hero、PostList、PostCard、PostDetail、About、Footer
├── components/ui/       # shadcn/ui 组件
├── hooks/
└── lib/
```

## 快速开始

### 环境要求

- Node.js 20.19+ 或 22.12+（Vite 7 的要求）
- npm

### 本地开发

```bash
npm install
npm run dev
```

### 构建与预览

```bash
npm run build     # tsc -b && vite build，输出到 dist/
npm run preview
```

### 代码检查

```bash
npm run lint
```

### 添加文章

在 `src/data/posts.ts` 的 `posts` 数组中按 `BlogPost` 类型（`id`、`title`、`excerpt`、`content`、`author`、`date`、`readTime`、`tags`、`coverImage`）添加一项即可。

## 当前状态

项目是一个纯前端的静态博客，文章需要手动写入代码。后续可继续完善：

- 支持从 Markdown 文件或后端接口加载文章
- 使用路由库管理页面，让文章详情拥有独立 URL
- 增加 `.gitignore`，并从仓库中移除已提交的 `dist/`
- 移除未使用的 shadcn/ui 组件和依赖，以及 `kimi-plugin-inspect-react` 等脚手架遗留插件
