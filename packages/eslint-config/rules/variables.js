module.exports = {
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    jest: true,
    jquery: true,
    mocha: true,
    node: true,
  },
  rules: {
    // 禁止使用未声明的变量
    'no-undef': 'error',

    // 禁止定义没有使用的变量
    'no-unused-vars': ['error', {
      vars: 'all', args: 'after-used', ignoreRestSiblings: true,
    }],

    // 禁用使用特定的全局变量
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
    ],

    // 禁止删除变量
    'no-delete-var': 'error',
  }
};