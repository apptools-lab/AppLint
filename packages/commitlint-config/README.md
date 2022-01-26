# @applint/commitlint-config

阿里巴巴大淘宝前端 Commitlint 可共享配置。参考 [commitlint-config-ali](https://www.npmjs.com/package/commitlint-config-ali)。

## 安装

```bash
npm install @applint/commitlint-config @commitlint/cli --save-dev
```

## 使用

创建 `commitlint.config.js` 并加入以下配置：

```js
// commitlint.config.js
module.exports = {
  extends: ['@applint/commitlint-config'],
};
```

## Git Hooks

安装 `husky`：

```shell
npm install husky --save-dev
```

查看 [husky 文档](https://typicode.github.io/husky/#/?id=usage) 以快速使用 Git Hooks。
