#!/bin/bash

# 🌐 自定义域名配置脚本

echo "🌐 自定义域名配置工具"
echo "========================"

# 检查是否在项目根目录
if [ ! -f "package.json" ]; then
    echo "❌ 请在项目根目录运行此脚本"
    exit 1
fi

# 获取用户输入的域名
read -p "请输入您的自定义域名 (例如: yourdomain.com): " custom_domain

if [ -z "$custom_domain" ]; then
    echo "❌ 域名不能为空"
    exit 1
fi

echo ""
echo "🔧 正在配置域名: $custom_domain"

# 创建 CNAME 文件
echo "📝 创建 CNAME 文件..."
echo "$custom_domain" > public/CNAME

# 检查 CNAME 文件是否创建成功
if [ -f "public/CNAME" ]; then
    echo "✅ CNAME 文件创建成功"
    echo "📄 文件内容: $(cat public/CNAME)"
else
    echo "❌ CNAME 文件创建失败"
    exit 1
fi

# 检查 vite.config.ts 是否包含 publicDir 配置
if grep -q "publicDir" vite.config.ts; then
    echo "✅ vite.config.ts 已包含 publicDir 配置"
else
    echo "⚠️  建议在 vite.config.ts 中添加 publicDir: 'public'"
fi

echo ""
echo "🌐 DNS 配置要求"
echo "================"
echo "请在您的域名提供商处添加以下 DNS 记录："
echo ""
echo "对于根域名 ($custom_domain):"
echo "类型: A"
echo "名称: @"
echo "值: 185.199.108.153"
echo "值: 185.199.109.153"
echo "值: 185.199.110.153"
echo "值: 185.199.111.153"
echo ""
echo "对于子域名 (www.$custom_domain):"
echo "类型: CNAME"
echo "名称: www"
echo "值: khangey.github.io"
echo ""

# 询问是否要提交更改
read -p "是否要提交这些更改到 Git? (y/n): " commit_changes

if [[ $commit_changes =~ ^[Yy]$ ]]; then
    echo "📝 提交更改..."
    git add public/CNAME
    git commit -m "feat: 添加自定义域名配置 - $custom_domain"
    
    read -p "是否要推送到 GitHub? (y/n): " push_changes
    
    if [[ $push_changes =~ ^[Yy]$ ]]; then
        echo "🚀 推送到 GitHub..."
        git push origin main
        echo "✅ 代码已推送"
    fi
fi

echo ""
echo "🎯 下一步操作："
echo "1. 在域名提供商处配置 DNS 记录"
echo "2. 访问 https://github.com/khangey/image-compressor-pro/settings/pages"
echo "3. 在 'Custom domain' 字段输入: $custom_domain"
echo "4. 勾选 'Enforce HTTPS'"
echo "5. 点击 'Save'"
echo ""
echo "⏱️  DNS 传播可能需要 24-48 小时"
echo "🔍 验证地址: https://$custom_domain"
echo ""
echo "📞 如遇问题，请查看 CUSTOM_DOMAIN_SETUP.md" 