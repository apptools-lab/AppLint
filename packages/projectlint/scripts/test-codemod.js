const ProjectLint = require('../dist').default

const args = process.argv.slice(2);
const [cwd, transforms] = args;

const projectLint = new ProjectLint({ cwd, transforms: { 'snapshot': 1, picture: 1 } });

(async function () {
  const result = await projectLint.scan();
  console.log('projectLint scan result: ', result);
})()