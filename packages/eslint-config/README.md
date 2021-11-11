# @applint/eslint-config

Alibaba Tao Technology shareable config for ESLint.

## Install

```bash
npx install-peerdeps --dev @applint/eslint-config

# or
npm install --save-dev @applint/eslint-config eslint @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-jsx-plus eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

Create `.eslintrc.js` and extend the @applint/eslint-config:

```js
// .eslintrc.js
module.exports = {
  extends: ['@applint/eslint-config'],
};
```
