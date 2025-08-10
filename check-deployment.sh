#!/bin/bash

# 🔍 GitHub Pages 部署状态检查脚本

echo "🔍 检查 GitHub Pages 部署状态..."

# 检查远程仓库连接
echo "📡 远程仓库状态："
git remote -v
echo ""

# 检查本地分支状态
echo "🌿 本地分支状态："
git branch -vv
echo ""

# 检查是否有未推送的提交
echo "📝 提交状态："
git log --oneline origin/main..HEAD 2>/dev/null | head -5
if [ $? -eq 0 ] && [ -n "$(git log --oneline origin/main..HEAD 2>/dev/null)" ]; then
    echo "⚠️  发现未推送的提交"
else
    echo "✅ 所有提交已推送"
fi
echo ""

# 显示部署信息
echo "🌐 部署信息："
echo "仓库地址: https://github.com/khangey/image-compressor-pro"
echo "网站地址: https://khangey.github.io/image-compressor-pro/"
echo "Actions: https://github.com/khangey/image-compressor-pro/actions"
echo ""

echo "📋 下一步操作："
echo "1. 访问 https://github.com/khangey/image-compressor-pro"
echo "2. 点击 'Settings' 标签"
echo "3. 左侧菜单找到 'Pages'"
echo "4. Source 选择 'GitHub Actions'"
echo "5. 点击 'Save'"
echo ""

echo "⏱️  部署时间：约 3-5 分钟"
echo "🔍 查看进度：https://github.com/khangey/image-compressor-pro/actions" 