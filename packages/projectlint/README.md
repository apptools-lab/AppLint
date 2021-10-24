# @applint/projectlint


Lint tool on project level for [rax](https://rax.js.org/), [ice](https://ice.work/) and react project.

## Install

```bash
$ npm i @applint/projectlint --save-dev
```

## Usage

### runTransform()

You can use the `runTransform` method to run codemod.

Options:

- cwd: string, the target directory path
- config: object, the project-lint configuration.
- mode: 'check' | '', pre-check or fix the target source code. default: false.

Return:

- result: IResult (see interface), run project-lint result.

Example:

```javascript
import { runTransforms } from '@applint/projectlint';

const cwd = '/xxx/xx';

const transforms = {
  'plugin-rax-component-to-component': 'error',
  'lint-config-to-iceworks-spec': 'warn',
};

runTransforms(cwd, transforms, true);
```

#### Interface

IResult:

```typescript
interface ICodemodResult {
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
   * 0: advice 1: warning 2: error
   */
  severity: 0 | 1 | 2;
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

interface IResult {
  /**
   * codemod result.
   */
  codemod: ICodemodResult[];
  [rule: string]: any;
}
```

## Included Transforms

### 1. `plugin-rax-component-to-component`

Update `plugin-rax-component` to `plugin-component`. [docs](./transforms/docs/plugin-rax-component-to-component.md)

### 2. `lint-config-to-spec`

Follow Alibaba FED lint rules, and use `@applint/spec` best practices. [docs](./transforms/docs/lint-config-to-spec.md)
