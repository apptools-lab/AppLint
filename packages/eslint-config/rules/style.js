module.exports = {
  rules: {
    // 函数声明时，对于命名函数，参数的小括号前无空格；对于匿名函数和 async 箭头函数，参数的小括号前有空格
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],

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

    // 禁止用空行来填充块语句
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    // 禁止使用多个连续空行来填充代码
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],

    // 禁止在空格 () 中增加空格
    'space-in-parens': ['error', 'never'],

    // 不要在方括号 [] 中增加空格
    'array-bracket-spacing': ['error', 'never'],

    // 在多行情况下，使用末尾逗号的风格
    'comma-style': ['error', 'last'],

    // 用逗号分隔的多行结构，始终加上最后一个逗号（单行不用）
    'comma-dangle': ['error', 'always-multiline'],

    // 对象属性名优先不实用单引号，除非包含不合法的字符
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],

    // 使用字面量创建对象
    'no-new-object': 'warn',

    // 不要使用 new Array() 和 Array() 创建数组，除非为了构造某一长度的空数组。
    'no-array-constructor': 'warn',

    // 禁止使用链式(chain variable assignments)赋值
    'no-multi-assign': ['warn'],

    // 避免使用 = 时的赋值语句造成的换行
    'operator-linebreak': 'error',

    // 禁用行尾空格
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // 函数调用前后不需要空格
    'func-call-spacing': ['error', 'never'],

    // 保证对象中的键与值有空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],

    // 逗号的前面无空格，后面有空格
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // 保证块语句的 { 符号与其前面的字符以及 } 与其后面的字符保证有一个空格
    'block-spacing': ['error', 'always'],

    // 操作符两侧有空格
    'space-infix-ops': 'error',

    // 大括号内部两侧有空格
    'object-curly-spacing': ['error', 'always'],

    // 优先使用单引号
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    // 使用分号
    semi: ['error', 'always'],

    // 一行声明一个变量
    'one-var-declaration-per-line': ['error', 'always'],

    // 使用花括号包裹多行的块语句
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],

    // 大括号换行风格：one true brace style 风格，且单行代码块可不换行
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    // 避免不必要的三元表达式
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 禁用否定的表达式
    'no-negated-condition': 'warn',

    // 方括号内部两侧无空格-计算属性
    'computed-property-spacing': ['error', 'never'],

    // JSX 属性使用双引号，不要使用单引号
    'jsx-quotes': ['error', 'prefer-double'],

    // 禁止在调用构造函数时省略小括号
    'new-parens': 'error',

    // 禁止属性调用前有空格
    'no-whitespace-before-property': 'error',

    // 对象的属性需遵循一致的换行风格：即所有属性要么都换行，要么都写在一行
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // 分号的前面无空格，后面有空格
    'semi-spacing': ['error', { before: false, after: true }],

    // 分号必须写在行尾
    'semi-style': ['error', 'last'],

    // nonwords: 一元操作符两侧无空格，例如： -、+、--、++、!、!!
    // words: - 单词类一元操作符两侧有空格，例如：new、delete、typeof、void、yield
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // switch 的 case 和 default 子句冒号前面无空格，后面有空格
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // 模板字符串的 tag 后面无空格
    'template-tag-spacing': ['error', 'never'],

    // tab 和 space 不要混合使用，保持风格一致
    'no-mixed-spaces-and-tabs': 'warn',

    // 代码长度最大不超过 120 个字符
    'max-len': [
      'warn',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // 避免单个字符命名，保障命名能描述实际含义
    'id-length': 'warn',

    // 使用小驼峰命名风格
    camelcase: ['warn', { properties: 'never', ignoreDestructuring: false }],

    // 使用大驼峰 (PascalCase) 来命名构造器函数或类
    'new-cap': [
      'warn',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],
  },
};