module.exports = {
  rules: {
    // 使用 2 个空格缩进
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'TemplateLiteral', // FIXME https://github.com/babel/babel-eslint/issues/799#issuecomment-568195009
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],
    // 优先使用单引号
    quotes: ['error', 'single', { avoidEscape: true }],
    // 禁止使用 eval
    'no-eval': 'error',
    // 函数声明时，对于命名函数，参数的小括号前无空格；对于匿名函数和 async 箭头函数，参数的小括号前有空格
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'error',
    // generator 函数的 * 号前面无空格，后面有一个空格
    'generator-star-spacing': ['error', { before: false, after: true }],
    // 在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
          balanced: true,
        },
      },
    ],
    // 块的左大括号前有一个空格
    'space-before-blocks': 'error',
    // 关键字前后各一个空格
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    // 操作符两侧有空格
    'space-infix-ops': 'error',
    // 大括号内部两侧有空格
    'object-curly-spacing': ['error', 'always'],
    // 保证块语句的 { 符号与其前面的字符以及 } 与其后面的字符保证有一个空格
    'block-spacing': ['error', 'always'],
    // 逗号的前面无空格，后面有空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 保证对象中的键与值有空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 禁止用空行来填充块语句
    'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
    // 禁止使用多个连续空行来填充代码
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    // 禁止在空格 () 中增加空格
    'space-in-parens': ['error', 'never'],
    // 不要在方括号 [] 中增加空格
    'array-bracket-spacing': ['error', 'never'],
    // 函数调用前后不需要空格
    'func-call-spacing': ['error', 'never'],
    // 禁用行尾空格
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    // 在多行情况下，使用末尾逗号的风格
    'comma-style': ['error', 'last'],
    // 用逗号分隔的多行结构，始终加上最后一个逗号（单行不用）
    'comma-dangle': ['error', 'always-multiline'],
    // 使用分号
    semi: ['error', 'always'],
  },
};