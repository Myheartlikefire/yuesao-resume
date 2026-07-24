# 微信月嫂简历示例工程

这是一个零依赖静态示例，包含：

- 月嫂简历展示页
- Open Graph 分享卡片 meta 标签
- 底部固定按钮：拨打电话、添加微信、发表评价
- 本地评价演示，评价会保存到浏览器 `localStorage`

## 运行

```bash
npm start
```

打开：

```text
http://localhost:5173
```

## 换成真实信息

主要改这几个位置：

- `index.html`：姓名、简介、服务经历、证书、报价、OG 标题和描述
- `script.js`：`contact.phone` 和 `contact.wechat`
- `assets/nanny-cover.png`：换成真实封面图

微信分享卡片需要公网 HTTPS 地址。上线后，把 `index.html` 里的：

```html
https://example.com/yuesao-resume/
https://example.com/yuesao-resume/assets/nanny-cover.png
```

改成真实页面地址和真实图片地址。

如果要在微信内自定义转发给好友或朋友圈的标题、封面和链接，还需要接入微信 JS-SDK，并由后端接口生成签名。
