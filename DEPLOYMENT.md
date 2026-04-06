# GitHub Pages 部署指南

这个个人主页已经配置好，可以快速部署到 GitHub Pages。

## 部署步骤

### 1. 创建 GitHub 仓库

在 GitHub 上创建一个新仓库，仓库名可以是：
- `username.github.io` (如果你想用作主要的 GitHub Pages 网站)
- 任意名称 (例如 `portfolio`, `my-website` 等)

### 2. 推送代码到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入仓库的 **Settings** 页面
2. 在左侧菜单找到 **Pages**
3. 在 **Build and deployment** 部分：
   - Source: 选择 **GitHub Actions**

### 4. 更新 base 路径（如有必要）

如果你的仓库名**不是** `username.github.io`，需要更新 `vite.config.ts`：

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',  // 改为你的仓库名
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

然后重新提交并推送：

```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages"
git push
```

### 5. 等待部署完成

- GitHub Actions 会自动构建并部署你的网站
- 在仓库的 **Actions** 标签页可以查看部署进度
- 部署完成后，你的网站将在以下地址访问：
  - 如果仓库名是 `username.github.io`: `https://username.github.io`
  - 其他仓库名: `https://username.github.io/repository-name`

## 自定义内容

在部署之前，请自定义以下内容：

### Hero 部分 (`src/components/Hero.tsx`)
- 修改 "Your Name" 为你的名字
- 更新职位描述和简介
- 替换社交媒体链接（GitHub, LinkedIn, Email）

### About 部分 (`src/components/About.tsx`)
- 更新自我介绍文字

### Skills 部分 (`src/components/Skills.tsx`)
- 修改技能列表和熟练度

### Projects 部分 (`src/components/Projects.tsx`)
- 替换项目信息、描述和链接
- 更新技术栈标签

### Contact 部分 (`src/components/Contact.tsx`)
- 更新联系方式（邮箱、电话、地址）
- 修改底部版权信息

## 本地开发

```bash
npm install
npm run dev
```

## 本地构建测试

```bash
npm run build
npm run preview
```

## 更新网站

每次推送到 `main` 分支，GitHub Actions 都会自动重新部署网站：

```bash
git add .
git commit -m "Update content"
git push
```

## 故障排查

如果部署失败：
1. 检查 Actions 标签页的错误日志
2. 确保 base 路径配置正确
3. 确认 GitHub Pages 设置为 GitHub Actions 模式
4. 检查仓库是否有 Pages 权限

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons
