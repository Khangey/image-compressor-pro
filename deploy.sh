#!/bin/bash

# 图片压缩器项目部署脚本

echo "🚀 开始部署图片压缩器项目..."

# 检查是否已构建
if [ ! -d "dist" ]; then
    echo "📦 构建项目..."
    pnpm build
fi

# 检查构建是否成功
if [ ! -f "dist/index.html" ]; then
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

echo "✅ 项目构建成功！"

# 显示构建文件信息
echo "📁 构建文件列表："
ls -la dist/
echo "📁 资源文件："
ls -la dist/assets/

echo ""
echo "🎯 部署选项："
echo "1. 本地预览 (pnpm preview)"
echo "2. 上传到 GitHub Pages"
echo "3. 上传到 Netlify"
echo "4. 上传到 Vercel"
echo "5. 上传到其他静态文件服务器"
echo ""

echo "💡 提示："
echo "- 本地预览：运行 'pnpm preview'"
echo "- GitHub Pages：推送代码到 main/master 分支"
echo "- Netlify：拖拽 dist 文件夹到 Netlify 部署页面"
echo "- Vercel：连接 GitHub 仓库自动部署"
echo ""

echo "🎉 部署配置完成！" 