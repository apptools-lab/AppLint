const { runTransforms } = require('../dist')

const args = process.argv.slice(2);
const [cwd, transform, dry = 'true'] = args;

runTransforms({
  cwd,
  transforms: { [transform]: 'error' },
  dry: JSON.parse(dry)
})
.then((res) => console.log('res', res))
.catch((error) => console.log(error))