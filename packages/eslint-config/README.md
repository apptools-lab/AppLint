# @applint/eslint-config

阿里巴巴淘系前端 ESLint 可共享配置。

## 安装

```bash
npx install-peerdeps --dev @applint/eslint-config

# or
npm install --save-dev @applint/eslint-config eslint @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-jsx-plus eslint-plugin-react eslint-plugin-react-hooks
```

## 使用

创建 `.eslintrc.js` 并加入以下配置：

```js
// .eslintrc.js
module.exports = {
  extends: ['@applint/eslint-config'],
};
```
