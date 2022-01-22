# @applint/prettier-config

阿里巴巴大淘宝前端 Prettier 可共享配置。

## 快速开始

### 安装

```shell
npm i @applint/prettier-config -D
```

### 使用

在项目根目录创建 `.prettier.js` 并加入以下配置：

```js
const { config } = require('@applint/prettier-config');

module.exports = config;  
```
