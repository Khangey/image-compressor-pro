# 🌐 自定义域名配置指南

## 📋 自定义域名要求

GitHub Pages 的自定义域名配置需要以下步骤：

### 1. 域名准备
- 拥有一个域名（如：`yourdomain.com`）
- 域名 DNS 控制权

### 2. DNS 配置
需要添加以下 DNS 记录：

#### 对于根域名 (yourdomain.com)
```
类型: A
名称: @
值: 185.199.108.153
值: 185.199.109.153
值: 185.199.110.153
值: 185.199.111.153
```

#### 对于子域名 (www.yourdomain.com)
```
类型: CNAME
名称: www
值: khangey.github.io
```

### 3. GitHub 仓库配置

#### 方法 1: 通过 GitHub 界面
1. 访问 https://github.com/khangey/image-compressor-pro/settings/pages
2. 在 "Custom domain" 字段输入您的域名
3. 勾选 "Enforce HTTPS"
4. 点击 "Save"

#### 方法 2: 通过 CNAME 文件
在 `public` 文件夹中创建 `CNAME` 文件：
```
yourdomain.com
```

### 4. 验证配置
- DNS 传播可能需要 24-48 小时
- 使用 `dig` 或在线工具验证 DNS 记录
- 检查 HTTPS 证书是否生效

## 🔧 快速配置脚本

### 创建 CNAME 文件
```bash
# 在 public 文件夹中创建 CNAME 文件
echo "yourdomain.com" > public/CNAME
```

### 更新构建配置
确保 `vite.config.ts` 包含 CNAME 文件：
```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  publicDir: 'public' // 确保 public 文件夹被复制
})
```

## 🌍 常见域名配置示例

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

### 二级域名
```
yourdomain.com/image-compressor
```

## ⚠️ 注意事项

### DNS 配置
- 确保所有 A 记录都正确配置
- CNAME 记录不能与 A 记录冲突
- 等待 DNS 传播完成

### HTTPS 证书
- GitHub Pages 自动提供 SSL 证书
- 确保勾选 "Enforce HTTPS"
- 证书可能需要几分钟生效

### 缓存问题
- 浏览器可能缓存旧域名
- 清除浏览器缓存
- 使用无痕模式测试

## 🔍 故障排除

### 域名无法访问
1. 检查 DNS 记录是否正确
2. 等待 DNS 传播（最多 48 小时）
3. 验证 GitHub Pages 设置

### HTTPS 不工作
1. 确保勾选 "Enforce HTTPS"
2. 等待证书生成（几分钟到几小时）
3. 检查域名 DNS 配置

### 重定向问题
1. 检查 CNAME 文件内容
2. 验证 GitHub Pages 设置
3. 清除浏览器缓存

## 📞 技术支持

如遇到问题：
1. 检查 GitHub Pages 文档
2. 验证 DNS 配置
3. 查看 GitHub Actions 日志

---

🌐 **准备好配置自定义域名了吗？按照上述步骤操作即可！** 