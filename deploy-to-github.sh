#!/bin/bash

# 🚀 GitHub 快速部署脚本

echo "🚀 开始部署图片压缩器项目到 GitHub Pages..."

# 检查是否已配置远程仓库
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ 未配置远程仓库，请先执行以下步骤："
    echo ""
    echo "1. 在 GitHub 上创建新仓库："
    echo "   - 仓库名：image-compressor-pro"
    echo "   - 描述：基于 React + TypeScript + Vite 的图片压缩工具"
    echo ""
    echo "2. 连接本地仓库到 GitHub："
    echo "   git remote add origin https://github.com/YOUR_USERNAME/image-compressor-pro.git"
    echo ""
    echo "3. 重新运行此脚本"
    exit 1
fi

# 显示当前远程仓库信息
echo "📡 当前远程仓库："
git remote -v
echo ""

# 检查是否有未提交的更改
if [[ -n $(git status --porcelain) ]]; then
    echo "📝 发现未提交的更改，正在提交..."
    git add .
    git commit -m "feat: 更新项目配置和样式"
fi

# 推送到 GitHub
echo "🚀 推送到 GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码推送成功！"
    echo ""
    echo "🌐 接下来需要："
    echo "1. 在 GitHub 仓库页面点击 'Settings'"
    echo "2. 左侧菜单找到 'Pages'"
    echo "3. Source 选择 'GitHub Actions'"
    echo "4. 点击 'Save'"
    echo ""
    echo "📱 部署完成后，您的网站将在以下地址可用："
    echo "   https://YOUR_USERNAME.github.io/image-compressor-pro/"
    echo ""
    echo "⏱️  部署通常需要 2-5 分钟，可以在 'Actions' 标签查看进度"
else
    echo "❌ 推送失败，请检查网络连接和仓库权限"
    exit 1
fi 