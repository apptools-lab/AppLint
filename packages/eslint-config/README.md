# @applint/eslint-config

遵循 阿里巴巴大淘宝前端 JavaScript、TypeScript、React 编码规范的 ESLint 可共享配置。

## 快速开始

### 安装

```bash
# 方式一
npx install-peerdeps --dev @applint/eslint-config

# 方式二
npm install --save-dev @applint/eslint-config eslint @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-jsx-plus eslint-plugin-react eslint-plugin-react-hooks
```

### 使用

创建 `.eslintrc.js` 并加入以下配置：

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@applint/eslint-config'                      // JS 项目
    // '@applint/eslint-config/typescript'        // TS 项目
    // '@applint/eslint-config/react'             // React 项目
    // '@applint/eslint-config/typescript/react'  // React-TS 
    // '@applint/eslint-config/rax'               // Rax 项目
    // '@applint/eslint-config/typescript/rax'    // Rax-TS 项目
  ],
};
```

## 编码规范

- [JavaScript 编码规范](/packages/eslint-config/docs/JavaScript.md)
- [TypeScript 编码规范](/packages/eslint-config/docs/TypeScript.md)
- [React 编码规范](/packages/eslint-config/docs/React.md)
