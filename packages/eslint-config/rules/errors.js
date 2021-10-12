module.exports = {
  rules: {
    // 不要直接使用对象的 Object.prototype 上的内置方法
    'no-prototype-builtins': 'warn',

    // 强制使用 isNaN() 而不是使用 NaN 来进行比较
    'use-isnan': 'warn',
  
    // 强制 typeof 的计算值为固定为合法的字符串字面量
    'valid-typeof': ['warn', { requireStringLiterals: true }],
  }
}