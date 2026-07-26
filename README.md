# 陈陆莲月嫂简历多版本示例

这是一个零依赖静态站点，用来在微信里分享月嫂简历。

## 页面

- `index.html`：四个简历版本入口
- `private-a.html`：私单标准版，显示接单工资 13800
- `private-b.html`：私单图文版，显示接单工资 13800
- `company-a.html`：公司标准版，不显示价格
- `company-b.html`：公司图文版，不显示价格

## 内容

页面已加入：

- 宝宝护理照片
- 营养餐 / 月子餐照片
- 证书与健康资料照片
- 服务好评见证照片
- 底部按钮：拨打电话、添加微信、发表评价

## 本地运行

```bash
npm start
```

打开：

```text
http://localhost:5173
```

## 发布后链接

如果继续用 GitHub Pages，四个分享地址是：

```text
https://myheartlikefire.github.io/yuesao-resume/private-a.html
https://myheartlikefire.github.io/yuesao-resume/private-b.html
https://myheartlikefire.github.io/yuesao-resume/company-a.html
https://myheartlikefire.github.io/yuesao-resume/company-b.html
```

如果换成腾讯云、阿里云或自定义域名，需要把四个 HTML 里的 `og:url` 和 `og:image` 改成新的公网 HTTPS 地址。

## 修改信息

- 基本资料、电话、经历、护理内容在 `script.js`
- 每个版本是否显示价格在对应 HTML 的 `window.RESUME_VARIANT`
- 图片资源在 `assets/chen-lulian/`

证书和体检资料照片适合做简历展示，正式接单前建议面试时核验原件。
