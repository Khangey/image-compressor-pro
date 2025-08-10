#!/bin/bash

# 🌐 域名验证脚本

echo "🌐 域名格式验证工具"
echo "===================="

# 域名验证函数
validate_domain() {
    local domain=$1
    
    # 检查是否为空
    if [ -z "$domain" ]; then
        echo "❌ 域名不能为空"
        return 1
    fi
    
    # 检查长度
    if [ ${#domain} -lt 3 ]; then
        echo "❌ 域名长度不能少于3个字符"
        return 1
    fi
    
    # 检查是否包含有效字符
    if ! echo "$domain" | grep -E '^[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)*$' > /dev/null; then
        echo "❌ 域名格式不正确"
        echo "   域名只能包含字母、数字、连字符(-)和点(.)"
        echo "   不能以连字符开头或结尾"
        return 1
    fi
    
    # 检查顶级域名
    if ! echo "$domain" | grep -E '\.[a-zA-Z]{2,}$' > /dev/null; then
        echo "❌ 域名必须包含有效的顶级域名（如 .com, .org, .net 等）"
        return 1
    fi
    
    echo "✅ 域名格式正确: $domain"
    return 0
}

# 获取用户输入
read -p "请输入您的域名 (例如: yourdomain.com): " user_domain

# 验证域名
if validate_domain "$user_domain"; then
    echo ""
    echo "🔧 创建 CNAME 文件..."
    echo "$user_domain" > public/CNAME
    
    if [ -f "public/CNAME" ]; then
        echo "✅ CNAME 文件创建成功"
        echo "📄 文件内容: $(cat public/CNAME)"
        
        echo ""
        echo "🌐 DNS 配置要求："
        echo "=================="
        echo "请在您的域名提供商处添加以下 DNS 记录："
        echo ""
        echo "对于根域名 ($user_domain):"
        echo "类型: A"
        echo "名称: @"
        echo "值: 185.199.108.153"
        echo "值: 185.199.109.153"
        echo "值: 185.199.110.153"
        echo "值: 185.199.111.153"
        echo ""
        echo "对于子域名 (www.$user_domain):"
        echo "类型: CNAME"
        echo "名称: www"
        echo "值: khangey.github.io"
        
        echo ""
        echo "🎯 GitHub Pages 设置："
        echo "====================="
        echo "1. 访问: https://github.com/khangey/image-compressor-pro/settings/pages"
        echo "2. 在 'Custom domain' 字段输入: $user_domain"
        echo "3. 勾选 'Enforce HTTPS'"
        echo "4. 点击 'Save'"
        
        # 询问是否要提交更改
        read -p "是否要提交这些更改到 Git? (y/n): " commit_changes
        
        if [[ $commit_changes =~ ^[Yy]$ ]]; then
            echo "📝 提交更改..."
            git add public/CNAME
            git commit -m "feat: 添加自定义域名配置 - $user_domain"
            
            read -p "是否要推送到 GitHub? (y/n): " push_changes
            
            if [[ $push_changes =~ ^[Yy]$ ]]; then
                echo "🚀 推送到 GitHub..."
                git push origin main
                echo "✅ 代码已推送"
            fi
        fi
        
    else
        echo "❌ CNAME 文件创建失败"
        exit 1
    fi
else
    echo ""
    echo "💡 正确的域名格式示例："
    echo "- yourdomain.com"
    echo "- www.yourdomain.com"
    echo "- app.yourdomain.org"
    echo "- image-compressor.net"
    echo ""
    echo "❌ 错误的域名格式："
    echo "- 2"
    echo "- test"
    echo "- .com"
    echo "- domain-.com"
    echo "- -domain.com"
fi 