module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
    // Append 'ts' extensions to 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json'],
      },
    },
    // Append 'ts' extensions to 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.mjs'],
  },
  parserOptions: {
    project: './tsconfig.json', // default project config
    createDefaultProgram: true, // 兼容未在 tsconfig.json 中 provided 的文件
    extraFileExtensions: ['.vue'],
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    // 将重载的函数写在一起以增加代码可读性
    '@typescript-eslint/adjacent-overload-signatures': 'warn',

    // 禁止对没有 then 方法的对象使用 await
    '@typescript-eslint/await-thenable': 'off',

    // 使用 @ts-expect-error/@ts-ignore/@ts-nocheck/@ts-check 等指令时需跟随注释描述
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],

    // 禁止出现空的 interface
    '@typescript-eslint/no-empty-interface': 'warn',

    // 禁止使用 any
    '@typescript-eslint/no-explicit-any': 'off',

    // 禁止在接口中定义 constructor，或在类中定义 new
    '@typescript-eslint/no-misused-new': 'off',

    // 避免错误的使用 Promise
    '@typescript-eslint/no-misused-promises': 'off',

    // 禁止使用 namespace 来定义命名空间，但允许使用 declare namespace 定义外部命名空间
    '@typescript-eslint/no-namespace': [
      'warn',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],

    // 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',

    // 禁止把变量赋值给 this，解构赋值除外
    '@typescript-eslint/no-this-alias': [
      'warn',
      {
        allowDestructuring: true,
      },
    ],

    // 不允许使用 any 类型的值调用函数
    '@typescript-eslint/no-unsafe-argument': 'off',

    // 禁止将变量或属性的类型设置为 any
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // 禁止调用 any 类型的变量上的方法
    '@typescript-eslint/no-unsafe-call': 'off',

    //禁止获取 any 类型的变量中的属性     
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // 禁止函数的返回值的类型是 any
    '@typescript-eslint/no-unsafe-return': 'off',

    // 禁止使用 require 来引入模块，被 no-require-imports 规则包含
    '@typescript-eslint/no-var-requires': 'off',

    // 使用加号时，两者必须同为数字或同为字符串
    '@typescript-eslint/restrict-plus-operands': 'warn',

    '@typescript-eslint/restrict-template-expressions': 'warn',

    // 三斜杠导入语法已废弃，在非 dts 文件中禁止使用
    '@typescript-eslint/triple-slash-reference': 'warn',

    // 方法调用时需要绑定到正确的 this 上
    '@typescript-eslint/unbound-method': 'off',

    // 禁止出现空函数，普通函数（非 async/await/generator）、箭头函数、类上的方法除外
    '@typescript-eslint/no-empty-function': 'warn',

    // 禁止使用 eval
    '@typescript-eslint/no-implied-eval': 'warn',

    // 禁止出现丢失精度的数字
    '@typescript-eslint/no-loss-of-precision': 'off', 

    // 禁止出现未使用的变量
    '@typescript-eslint/no-unused-vars': 'warn',

    //  async 函数中必须存在 await 语句
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Disable `no-undef` rule within TypeScript files because it incorrectly errors when exporting default interfaces
        // https://github.com/iamturns/eslint-config-airbnb-typescript/issues/50
        // This will be caught by TypeScript compiler if `strictNullChecks` (or `strict`) is enabled
        'no-undef': 'off',

        /* Using TypeScript makes it safe enough to disable the checks below */

        // Disable ESLint-based module resolution check for improved monorepo support
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': 'off',
      },
    },
  ],
}