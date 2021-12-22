module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    // generator 函数的 * 号前面无空格，后面有一个空格
    'generator-star-spacing': ['error', {
      before: false, after: true,
    }],

    // 禁止修改 const 声明的变量
    'no-const-assign': 'warn',

    // 使用 const 或 let 声明变量，不要使用 var
    'no-var': 'error',

    // 使用 const 来进行变量引用的声明，如果要重新赋值变量，使用 let 而不是使用 var
    'prefer-const': [
      'off',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // 避免不必要的 constructor
    'no-useless-constructor': 'warn',

    // 从同一个位置引用同一个路径的内容
    'no-duplicate-imports': 'warn',

    // 字符串拼接优先使用模板字符串
    'prefer-template': 'error',
    'template-curly-spacing': 'error',

    // 禁止使用 arguments 对象，使用语法剩余参数操作符 ... 代替
    'prefer-rest-params': 'warn',

    // 避免重复的类成员命名
    'no-dupe-class-members': 'warn',

    // 子类的 constructor 中必须使用 super，非子类的 constructor 中不能使用 super
    'constructor-super': 'warn',

    // 禁止在 super 调用前使用 this
    'no-this-before-super': 'warn',

    // 回调函数使用箭头函数而不是匿名函数
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // 箭头函数的箭头前后各留一个空格
    'arrow-spacing': ['error', { before: true, after: true }],

    // 避免箭头函数与比较操作符产生混淆
    'no-confusing-arrow': 'error',

    // 对象的属性名不要使用无必要的计算属性
    'no-useless-computed-key': 'error',

    // 禁止在解构/import/export时进行无用的重命名
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // 使用对象和数组的解构
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // 剩余和扩展操作符与操作对象间不应有空格
    'rest-spread-spacing': ['error', 'never'],
  },
};