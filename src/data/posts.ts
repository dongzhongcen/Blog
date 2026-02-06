import type { BlogPost, Author } from '@/types/blog';

export const author: Author = {
  name: 'dongzhongcen',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  bio: '技术博主 | 热爱开源与分享',
  social: {
    github: 'https://github.com/dongzhongcen',
    twitter: 'https://twitter.com',
    email: '1077282002@qq.com',
  },
};

export const posts: BlogPost[] = [
  {
    id: '1',
    title: '构建高性能 React 应用的最佳实践',
    excerpt: '探索 React 性能优化的核心技巧，从组件渲染到状态管理，全面提升应用性能。',
    content: `
## 引言

React 作为现代前端开发的主流框架，性能优化一直是开发者关注的重点。本文将深入探讨 React 应用性能优化的各个方面。

## 1. 组件优化

### 使用 React.memo

duplicate 不必要的重渲染是性能问题的常见来源。使用 React.memo 可以有效避免：

\`\`\`jsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

### useMemo 和 useCallback

合理使用 useMemo 和 useCallback 可以缓存计算结果和函数引用：

\`\`\`jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
\`\`\`

## 2. 状态管理

选择合适的状态管理方案对性能至关重要。对于小型应用，useState 和 useContext 已经足够；大型应用可以考虑 Redux 或 Zustand。

## 结语

性能优化是一个持续的过程，需要根据实际场景选择合适的优化策略。
    `,
    author: 'Alex Chen',
    date: '2024-01-15',
    readTime: '8 分钟',
    tags: ['React', '性能优化', '前端'],
  },
  {
    id: '2',
    title: 'TypeScript 高级类型技巧',
    excerpt: '掌握 TypeScript 的高级类型系统，提升代码的类型安全性和开发效率。',
    content: `
## 泛型的高级用法

泛型是 TypeScript 最强大的特性之一。让我们探索一些高级用法：

### 条件类型

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
\`\`\`

### 映射类型

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

## 类型推断

TypeScript 的类型推断系统非常强大，可以减少显式类型注解的需要。
    `,
    author: 'Alex Chen',
    date: '2024-01-10',
    readTime: '6 分钟',
    tags: ['TypeScript', 'JavaScript'],
  },
  {
    id: '3',
    title: '现代 CSS 布局技巧',
    excerpt: '从 Flexbox 到 Grid，掌握现代 CSS 布局技术，创建响应式网页设计。',
    content: `
## Flexbox 布局

Flexbox 是一维布局系统，非常适合组件级别的布局：

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

## Grid 布局

CSS Grid 是二维布局系统，适合页面整体布局：

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
\`\`\`
    `,
    author: 'Alex Chen',
    date: '2024-01-05',
    readTime: '5 分钟',
    tags: ['CSS', '前端', '设计'],
  },
  {
    id: '4',
    title: 'Node.js 微服务架构实践',
    excerpt: '使用 Node.js 构建可扩展的微服务架构，包括服务发现、负载均衡等核心概念。',
    content: `
## 微服务架构概述

微服务架构将大型应用拆分为小型、独立的服务，每个服务负责特定的业务功能。

## 服务通信

### REST API

传统的 HTTP REST API 是最常见的服务间通信方式。

### gRPC

gRPC 提供高性能的二进制通信协议，适合内部服务通信。

### 消息队列

使用 RabbitMQ 或 Kafka 实现异步消息传递。
    `,
    author: 'Alex Chen',
    date: '2023-12-28',
    readTime: '10 分钟',
    tags: ['Node.js', '微服务', '后端'],
  },
  {
    id: '5',
    title: 'Docker 容器化部署指南',
    excerpt: '学习如何使用 Docker 容器化你的应用，简化部署流程并提高环境一致性。',
    content: `
## Dockerfile 基础

Dockerfile 定义了如何构建 Docker 镜像：

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Docker Compose

使用 Docker Compose 管理多容器应用：

\`\`\`yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
\`\`\`
    `,
    author: 'Alex Chen',
    date: '2023-12-20',
    readTime: '7 分钟',
    tags: ['Docker', 'DevOps'],
  },
  {
    id: '6',
    title: 'Git 工作流最佳实践',
    excerpt: '掌握 Git 分支策略、提交规范和团队协作流程，提升开发效率。',
    content: `
## Git Flow 工作流

Git Flow 是一种经典的分支管理模型：

- main: 生产分支
- develop: 开发分支
- feature/*: 功能分支
- release/*: 发布分支
- hotfix/*: 热修复分支

## 提交规范

使用约定式提交规范：

\`\`\`
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 重构
\`\`\`
    `,
    author: 'Alex Chen',
    date: '2023-12-15',
    readTime: '5 分钟',
    tags: ['Git', '开发工具'],
  },
];

export const getPostById = (id: string): BlogPost | undefined => {
  return posts.find((post) => post.id === id);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return posts.filter((post) => post.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
};
