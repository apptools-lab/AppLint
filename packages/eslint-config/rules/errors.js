module.exports = {
  rules: {
    // 不要直接使用对象的 Object.prototype 上的内置方法
    'no-prototype-builtins': 'warn',

    // 强制使用 isNaN() 而不是使用 NaN 来进行比较
    'use-isnan': 'warn',

    // 强制 typeof 的计算值为固定为合法的字符串字面量
    'valid-typeof': ['warn', { requireStringLiterals: true }],

    // 避免不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',

    // 禁止不必要的分号
    'no-extra-semi': 'error',

    // 禁止在正则表达式中出现多个连续空格
    'no-regex-spaces': 'error',

    // 保障线上代码不存在 debugger 语句，避免浏览器因触发调试而停止执行
    'no-debugger': 'warn',

    // 禁止将全局对象当作函数进行调用
    'no-obj-calls': 'warn',

    // 在对象中不要使用重复的属性名称
    'no-dupe-keys': 'warn',

    // 禁止在 in 语句中的使用 ! 取反左侧运算符，降低运算符优先级的错误率
    'no-negated-in-lhs': 'warn',
  },
};