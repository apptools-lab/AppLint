const { runTransforms } = require('../dist');

runTransforms({ 
  cwd: '/Users/luhc228/workspace/test/rax-demo-2',
  transforms: {
    'lint-config-to-applint-spec': 'warn',
  }
})