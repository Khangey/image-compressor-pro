# ⚡ 快速部署到 GitHub Pages

## 🎯 一键部署（推荐）

运行部署脚本：
```bash
./deploy-to-github.sh
```

## 📋 手动部署步骤

### 1. 创建 GitHub 仓库
- 访问 [GitHub](https://github.com)
- 点击 "+" → "New repository"
- 仓库名：`image-compressor-pro`
- 描述：基于 React + TypeScript + Vite 的图片压缩工具
- 选择 Public 或 Private
- **不要**勾选 "Add a README file"
- 点击 "Create repository"

### 2. 连接本地仓库
```bash
# 替换 YOUR_USERNAME 为您的 GitHub 用户名
git remote add origin https://github.com/YOUR_USERNAME/image-compressor-pro.git
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages
- 在仓库页面点击 "Settings"
- 左侧菜单找到 "Pages"
- Source 选择 "GitHub Actions"
- 点击 "Save"

### 4. 自动部署
推送代码后，GitHub Actions 将自动构建和部署您的项目！

## 🌐 访问您的网站

部署成功后访问：
```
https://YOUR_USERNAME.github.io/image-compressor-pro/
```

## ⏱️ 部署时间
- 首次部署：约 3-5 分钟
- 后续更新：约 2-3 分钟

## 🔍 查看部署状态
- **Actions 标签**：查看构建进度
- **Settings → Pages**：查看部署状态

---

🚀 **准备好部署了吗？选择一键部署或手动部署都可以！** 