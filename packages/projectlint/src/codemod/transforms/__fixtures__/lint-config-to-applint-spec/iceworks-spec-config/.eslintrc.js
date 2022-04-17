const { getESLintConfig } = require('@iceworks/spec');
const config = getESLintConfig('react-ts');

module.exports = {
  ...config,
  overrides: [
    {
      files: ['**/src/apis/**'],
      rules: {
        'react-hooks/rules-of-hooks': 0,
      },
    },
  ],
};
