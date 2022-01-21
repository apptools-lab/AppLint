# @applint/stylelint-config

遵循[阿里巴巴大淘宝前端 CSS 编码规范](/css-spec.md) 的 Stylelint 可共享配置。

## 安装

```bash
npm install stylelint stylelint-scss --save-dev
```

## 使用

创建一个 `.stylelintrc.js` 文件加入以下配置：

```js
// .stylelintrc.js
module.exports = {
  extends: ['@applint/stylelint-config'],
};
```
