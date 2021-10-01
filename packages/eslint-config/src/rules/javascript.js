module.exports = {
  rules: {
    // 缩进
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

    // 引号
    // 优先使用单引号
    quotes: ['error', 'single', {
      avoidEscape: true,
    }],

    // eval
    // 禁止使用 eval
    'no-eval': 'error',

    // 缩进、空格与空行
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
    'generator-star-spacing': ['error', {
      before: false, after: true,
    }],
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
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
          case: {
            after: true,
          },
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
    'comma-spacing': ['error', {
      before: false, after: true,
    }],
    // 保证对象中的键与值有空格
    'key-spacing': ['error', {
      beforeColon: false, afterColon: true,
    }],
    // 禁止用空行来填充块语句
    'padded-blocks': ['error', {
      blocks: 'never', classes: 'never', switches: 'never',
    }],
    // 禁止使用多个连续空行来填充代码
    'no-multiple-empty-lines': ['error', {
      max: 2, maxEOF: 1,
    }],
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

    // 逗号
    // 在多行情况下，使用末尾逗号的风格
    'comma-style': ['error', 'last'],
    // 用逗号分隔的多行结构，始终加上最后一个逗号（单行不用）
    'comma-dangle': ['error', 'always-multiline'],

    // 分号
    // 使用分号
    semi: ['error', 'always'],

    // 变量声明
    // 使用 const 来进行变量引用的声明，如果要重新赋值变量，使用 let 而不是使用 var
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    // 禁止修改 const 声明的变量
    'no-const-assign': 'error',
    // 使用 const 或 let 声明变量，不要使用 var
    'no-var': 'error',
    // 禁止使用未声明的变量
    'no-undef': 'error',
    // 一条声明语句声明一个变量
    'one-var': ['error', 'never'],
    // 一行声明一个变量
    'one-var-declaration-per-line': ['error', 'always'],
    // 使用字面量创建对象
    'no-new-object': 'error',
    // 不要使用 new Array() 和 Array() 创建数组，除非为了构造某一长度的空数组。
    'no-array-constructor': 'error',
    // 不要使用 Function 构造函数创建函数
    'no-new-func': 'error',
    // 对象属性名优先不实用单引号，除非包含不合法的字符
    'quote-props': ['error', 'as-needed', {
      keywords: false, unnecessary: true, numbers: false,
    }],
    // 禁止使用链式(chain variable assignments)赋值
    'no-multi-assign': ['error'],
    // 避免使用 = 时的赋值语句造成的换行
    'operator-linebreak': 'error',
    // 禁止定义没有使用的变量
    'no-unused-vars': ['error', {
      vars: 'all', args: 'after-used', ignoreRestSiblings: true,
    }],

    // 对象
    // 不要直接使用对象的 Object.prototype 上的内置方法
    'no-prototype-builtins': 'error',
    // 优先使用 . 访问对象的属性
    'dot-notation': ['error', {
      allowKeywords: true,
    }],

    // 数组
    // 在数组方法中必须在回调函数 callback 中包含 return 语句，保证任何情况下都有返回
    'array-callback-return': ['error', {
      allowImplicit: true,
    }],

    // 字符串

    // 类
    // 避免不必要的 constructor
    'no-useless-constructor': 'error',
    // 模块
    // 从同一个位置引用同一个路径的内容
    'no-duplicate-imports': 'error',
    // import 语句需要放到模块的最上方
    'import/first': 'error',
    // 多个 import 的内容应该用多行以及缩进来表示
    'object-curly-newline': ['error', {
      ObjectExpression: 'always',
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true, minProperties: 3,
      },
    }],

    // 块语句 Block
    // 使用花括号包裹多行的块语句
    'nonblock-statement-body-position': ['error', 'beside', {
      overrides: {
      },
    }],
    // 大括号换行风格：one true brace style 风格，且单行代码块可不换行
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],

    // 类型转换
    // 不要使用 new Number/String/Boolean
    'no-new-wrappers': 'error',
    // 使用 parseInt() 方法时总是带上基数
    radix: 'warn',

    // 标准库
    // 禁用使用特定的全局变量
    'no-restricted-globals': ['error', 'isNaN', 'isFinite'],
  },
};