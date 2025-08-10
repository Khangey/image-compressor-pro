# 🚀 GitHub Pages 部署指南

## 📋 前置条件
- 已安装 Git
- 拥有 GitHub 账户
- 项目代码已准备就绪

## 🔧 部署步骤

### 1. 初始化 Git 仓库
```bash
# 在项目根目录执行
git init
git add .
git commit -m "Initial commit: 图片压缩器项目"
```

### 2. 创建 GitHub 仓库
1. 访问 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 填写仓库信息：
   - **Repository name**: `image-compressor-pro`
   - **Description**: 基于 React + TypeScript + Vite 的图片压缩工具
   - **Visibility**: 选择 Public 或 Private
   - **不要**勾选 "Add a README file"（因为项目已有）
4. 点击 "Create repository"

### 3. 连接本地仓库到 GitHub
```bash
# 替换 YOUR_USERNAME 为您的 GitHub 用户名
git remote add origin https://github.com/YOUR_USERNAME/image-compressor-pro.git
git branch -M main
git push -u origin main
```

### 4. 启用 GitHub Pages
1. 在 GitHub 仓库页面，点击 "Settings" 标签
2. 左侧菜单找到 "Pages"
3. 在 "Source" 部分：
   - 选择 "GitHub Actions"
4. 点击 "Save"

### 5. 推送代码触发自动部署
```bash
# 推送最新代码
git add .
git commit -m "feat: 调整标题行间距为1.5倍"
git push origin main
```

## ⚡ 自动部署流程

推送代码到 `main` 分支后，GitHub Actions 将自动：

1. **构建阶段**:
   - 检出代码
   - 设置 Node.js 18 环境
   - 安装 pnpm 和依赖
   - 构建项目 (`pnpm build`)

2. **部署阶段**:
   - 配置 GitHub Pages
   - 上传构建产物 (`dist` 文件夹)
   - 自动部署到 GitHub Pages

## 🌐 访问您的网站

部署成功后，您的网站将在以下地址可用：
```
https://YOUR_USERNAME.github.io/image-compressor-pro/
```

## 📱 部署状态检查

1. **Actions 标签**: 查看构建和部署进度
2. **Settings → Pages**: 查看部署状态和网站地址
3. **仓库主页**: 显示网站链接（如果已配置）

## 🔍 常见问题解决

### 构建失败
- 检查 Node.js 版本兼容性
- 确认所有依赖已正确安装
- 查看 Actions 日志获取详细错误信息

### 部署失败
- 确认 GitHub Pages 已启用
- 检查仓库权限设置
- 验证 Actions 权限配置

### 网站无法访问
- 等待几分钟让部署生效
- 检查域名配置
- 清除浏览器缓存

## 🎯 下一步操作

1. **测试部署**: 访问您的 GitHub Pages 网站
2. **功能验证**: 测试图片上传、压缩、下载等功能
3. **性能优化**: 根据需要调整构建配置
4. **自定义域名**: 可选，配置自己的域名

## 📞 技术支持

如遇到问题，请检查：
- GitHub Actions 日志
- 仓库设置和权限
- 本地构建是否成功

---

🎉 **准备好部署了吗？按照上述步骤操作，您的图片压缩器项目就能在 GitHub Pages 上运行了！** 