module.exports = {
  plugins: [
    'import',
  ],
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    // import 语句需要放到模块的最上方
    'import/first': 'error',
  },
};