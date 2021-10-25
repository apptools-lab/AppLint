# @applint/spec

Easy to use eslint(support TypeScript) / stylelint / prettier / commitlint in rax, ice and react project. And spec means specification.

## Install

```bash
npm i --save-dev @iceworks/spec eslint stylelint prettier @commitlint/cli husky
```

> PS: You don't need to install other eslint plugins and parsers.

## Usage

### ESLint

#### 1. Create configuration file

First create a `.eslintrc.js` file in your project root directory.

#### 2. Update config

```js
const { getESLintConfig } = require('@applint/spec');

// getESLintConfig(rule: 'common' | 'rax' | 'rax-ts' | 'react' | 'react-ts', customConfig?);
module.exports = getESLintConfig('react');
```

ESLint rules base on [@applint/eslint-config](https://github.com/apptools-lab/AppLint/tree/main/packages/eslint-config).

### Stylelint

#### 1. Create configuration file

First create a `.stylelintrc.js` file in your project root directory.

#### 2. Update config

```js
// .stylelintrc.js
const { getStylelintConfig } = require('@applint/spec');

// getStylelintConfig(rule: 'common' | 'rax' | 'react',  customConfig?);
module.exports = getStylelintConfig('react');
```

Stylelint rules base on [@applint/stylelint-config](https://github.com/apptools-lab/AppLint/tree/main/packages/stylelint-config).

### Prettier

#### 1. Create configuration file

First create a `.prettierrc.js` file in your project root directory.

#### 2. Update config

```js
// .prettierrc.js
const { getPrettierConfig } = require('@applint/spec');

// getPrettierConfig(rule: 'common' |'rax' | 'react', customConfig?);
module.exports = getPrettierConfig('react');
```

Prettier rules base on [rules](https://github.com/apptools-lab/AppLint/tree/main/packages/spec/src/prettier).

### Commitlint

#### 1. Create configuration file

First create a `.commitlintrc.js` file in your project root directory.

#### 2. Update config

```js
// .commitlintrc.js
const { getCommitlintConfig } = require('@applint/spec');

// getCommitlintConfig(rule: 'common' | 'rax' | 'react', customConfig?);
module.exports = getCommitlintConfig('react');
```

Commitlint rules base on [@applint/commitlint-config](https://github.com/apptools-lab/AppLint/tree/main/packages/commitlint-config).

#### Git hooks

To lint commits before they are created you can use Husky's Git hook.

Install in your project `npm install husky --save-dev` or `yarn add -D husky`.

After that, we recommend you to see [husky docs](https://www.npmjs.com/package/husky), then create "`commit-msg`" and "`pre-commit`" config.
