# @applint/commitlint-config

Shareable commitlint config enforcing conventional commits. Fork from [commitlint-config-ali](https://www.npmjs.com/package/commitlint-config-ali).

## Install

```bash
npm install @applint/commitlint-config @commitlint/cli --save-dev
```

## Usage

Create a `commitlint.config.js` and extend the @applint/commitlint-config:

```js
// commitlint.config.js
module.exports = {
  extends: ['@applint/commitlint-config'],
};
```

## Git Hook

Install husky:

```shell
npm install husky --save-dev
```

Check the [husky documentation](https://typicode.github.io/husky/#/?id=usage) on how you can automatically have Git hooks enabled.
