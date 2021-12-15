const ProjectLint = require('../dist').default

const args = process.argv.slice(2);
const [cwd] = args;

const projectLint = new ProjectLint({ cwd, transforms: { snapshot: 1, picture: 1 } });

(async function () {
  const scanResult = await projectLint.scan();
  console.log('projectLint scan result: ', scanResult);

  const fixResult = await projectLint.fix();
  console.log('projectLint fix result: ', fixResult);
})()