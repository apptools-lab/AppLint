import type { Options } from 'prettier';

const prettierConfig: Options = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  parser: 'babel',
};

export default prettierConfig;
