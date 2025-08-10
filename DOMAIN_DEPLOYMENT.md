# 🌐 自定义域名部署完整指南

## 🎯 快速开始

### 方法 1: 使用配置脚本（推荐）
```bash
./setup-custom-domain.sh
```

### 方法 2: 手动配置
1. 创建 CNAME 文件
2. 配置 DNS 记录
3. 设置 GitHub Pages

## 📋 详细步骤

### 1. 准备域名
确保您拥有一个域名，例如：
- `yourdomain.com`
- `image-compressor.com`
- `app.yourdomain.com`

### 2. 创建 CNAME 文件
```bash
# 在 public 文件夹中创建 CNAME 文件
echo "yourdomain.com" > public/CNAME
```

### 3. DNS 配置
在您的域名提供商处添加以下记录：

#### 根域名配置
```
类型: A
名称: @
值: 185.199.108.153
值: 185.199.109.153
值: 185.199.110.153
值: 185.199.111.153
```

#### WWW 子域名配置
```
类型: CNAME
名称: www
值: khangey.github.io
```

### 4. GitHub Pages 设置
1. 访问 https://github.com/khangey/image-compressor-pro/settings/pages
2. 在 "Custom domain" 字段输入您的域名
3. 勾选 "Enforce HTTPS"
4. 点击 "Save"

### 5. 部署和验证
```bash
# 提交更改
git add public/CNAME
git commit -m "feat: 添加自定义域名配置"
git push origin main

# 等待部署完成（3-5分钟）
# 验证访问: https://yourdomain.com
```

## 🔧 常见域名配置

### 根域名
```
yourdomain.com
```

### 子域名
```
www.yourdomain.com
app.yourdomain.com
image.yourdomain.com
```

### 二级路径
```
yourdomain.com/image-compressor
```

## ⚠️ 重要注意事项

### DNS 传播时间
- 通常需要 24-48 小时
- 某些情况下可能更快（几小时）
- 使用在线工具验证 DNS 传播

### HTTPS 证书
- GitHub Pages 自动提供 SSL 证书
- 证书生成可能需要几分钟到几小时
- 确保勾选 "Enforce HTTPS"

### 缓存问题
- 浏览器可能缓存旧域名
- 清除浏览器缓存
- 使用无痕模式测试

## 🔍 故障排除

### 域名无法访问
1. 检查 DNS 记录是否正确
2. 等待 DNS 传播完成
3. 验证 GitHub Pages 设置
4. 检查 CNAME 文件内容

### HTTPS 不工作
1. 确保勾选 "Enforce HTTPS"
2. 等待证书生成
3. 检查域名 DNS 配置
4. 清除浏览器缓存

### 重定向问题
1. 检查 CNAME 文件
2. 验证 GitHub Pages 设置
3. 确认 DNS 记录正确

## 📊 验证工具

### DNS 检查
```bash
# 检查 A 记录
dig yourdomain.com A

# 检查 CNAME 记录
dig www.yourdomain.com CNAME
```

### 在线验证工具
- https://dnschecker.org/
- https://www.whatsmydns.net/
- https://mxtoolbox.com/

## 🚀 部署检查清单

- [ ] CNAME 文件已创建
- [ ] DNS 记录已配置
- [ ] GitHub Pages 设置完成
- [ ] 代码已推送到 GitHub
- [ ] 等待 DNS 传播
- [ ] 验证 HTTPS 证书
- [ ] 测试网站访问

## 📞 技术支持

如遇到问题：
1. 查看 GitHub Pages 文档
2. 检查 DNS 配置
3. 查看 GitHub Actions 日志
4. 参考 CUSTOM_DOMAIN_SETUP.md

---

🌐 **准备好配置自定义域名了吗？按照上述步骤操作即可！** 