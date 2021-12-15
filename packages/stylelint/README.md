# @applint/stylelint-config

阿里巴巴淘系前端 Stylelint 可共享配置。参考 [stylelint-config-ali](https://www.npmjs.com/package/stylelint-config-ali)。

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
