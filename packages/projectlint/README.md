# @applint/projectlint

Lint tool on project level for [Rax](https://rax.js.org/), [ICE](https://ice.work/) and React projects.

## Install

```bash
npm i @applint/projectlint --save-dev
```

## API

### runTransforms()

You can use the `runTransforms` method to run codemod.

Options:

- cwd: `string`, the target directory path
- config: `object`, the project-lint configuration
- dry: `boolean`, whether or not dry-run codemod. default: `true`
- jscodeshiftArgs: `string[]`, default is `[]`

Return:

- result: `TransformResult[]` (see interface)

Example:

```js
import { runTransforms } from '@applint/projectlint';

const cwd = '/workspace/demo';

const transforms = {
  'plugin-rax-component-to-component': 'error',
  'lint-config-to-iceworks-spec': 'warn',
};

const result = runTransforms(cwd, transforms, false);
console.log('run transforms result', result);
```

#### Interface

```typescript
interface TransformResult {
  /**
   * transform key, see `Included Transforms`
   */
  transform: string;
  /**
   * transform description title
   */
  title: string;
  /**
   * transform description English title
   */
  title_en: string;
  /**
   * transform description message
   */
  message: string;
  /**
   * transform description English message
   */
  message_en: string;
  /**
   * 0: off 1: warn 2: error
   */
  severity: number;
  /**
   * codemod type
   */
  type: 'normal' | 'performance';
  /**
   * whether dry run codemod or not
   */
  dry: boolean;
  /**
   * docs url
   */
  docs: string;
  /**
   * jscodeshift CLI output
   */
  output: string;
  /**
   * same as https://docs.npmjs.com/cli/v7/commands/npm-deprecate/ 
   */
  npm_deprecate?: string;
}
```

## Included Transforms

### 1. `plugin-rax-component-to-component`

Update `plugin-rax-component` to `plugin-component`. [docs](./transforms/docs/plugin-rax-component-to-component.md)

### 2. `lint-config-to-iceworks-spec`

Follow Alibaba FED lint rules and use `@iceworks/spec` best practices. [docs](./transforms/docs/lint-config-to-iceworks-spec.md)

### 3. `lint-config-to-applint-spec`

Follow Alibaba Tao Technology lint rules and use `@applint/spec` best practices. [docs](./transforms/docs/lint-config-to-applint-spec.md)
