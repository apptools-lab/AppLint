const { program } = require('commander');
const fs = require('fs/promises');
const path = require('path');
const { ProjectLint } = require('../dist/index');

(async function () {
  const packageInfo = JSON.parse(await fs.readFile(path.join(__dirname, '../package.json'), 'utf-8'));
  const cwd = process.cwd();

  program
    .version(packageInfo.version)
    .usage('<command> [options]');

  program
    .command('codemod')
    .description('run codemod')
    .allowUnknownOption()
    .option('--transform <transform>', 'codemod transform name')
    .option('--rootDir <rootDir>', 'project root directory', cwd)
    .option('--fix', 'run codemod fix', true)
    .action(async ({ transform, rootDir, fix }) => {
      const projectLint = new ProjectLint({
        cwd: rootDir,
        transforms: { [transform]: 1 },
      });
      if (fix) {
        const fixResult = await projectLint.fix();
        console.log(fixResult);
      } else {
        const fixResult = await projectLint.scan();
        console.log(fixResult);
      }
    });

  program.parse(process.argv);

  const proc = program.runningCommand;

  if (proc) {
    proc.on('close', process.exit.bind(process));
    proc.on('error', () => {
      process.exit(1);
    });
  }

  const subCmd = program.args[0];
  if (!subCmd) {
    program.help();
  }
})();