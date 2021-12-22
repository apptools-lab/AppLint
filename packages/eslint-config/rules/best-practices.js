module.exports = {
  rules: {
    // 禁止使用 eval
    'no-eval': 'warn',
    'no-implied-eval': 'warn',

    // 禁止使用 Function 构造函数创建函数
    'no-new-func': 'warn',

    // 优先使用 . 访问对象的属性
    'dot-notation': ['off', {
      allowKeywords: true,
    }],

    // 对象中不使用重复的 key
    'no-dupe-keys': 'warn',

    // 在数组方法中必须在回调函数 callback 中包含 return 语句，保证任何情况下都有返回
    'array-callback-return': ['warn', {
      allowImplicit: true,
    }],

    // 禁止使用不必要的转义字符
    'no-useless-escape': 'warn',

    // 禁止使用重复的参数名称
    'no-dupe-args': 'warn',

    // case 或 default 字句出现词法声明时，必须用块包裹
    'no-case-declarations': 'warn',

    // 禁止使用 arguments.caller 和 arguments.callee
    'no-caller': 'warn',

    // 禁止使用 new Number/String/Boolean
    'no-new-wrappers': 'warn',

    // 使用 parseInt() 方法时总是带上基数
    radix: 'warn',

    // 禁止不必要的 label
    'no-extra-label': 'error',

    // 不要省略小数点前或小数点后的 0
    'no-floating-decimal': 'error',

    // 禁止出现多个连续空格
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // 禁止未使用的标签
    'no-unused-labels': 'error',

    // 将立即执行函数表达式（IIFE）用小括号包裹
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: false }],

    // 不推荐使用 label 语句
    'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],

    // 使用严格相等运算符
    eqeqeq: ['off', 'always', { null: 'ignore' }],
  },
};