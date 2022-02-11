import { execSync } from 'child_process';
import { ESLint } from 'eslint';
import chalk from 'chalk';

const GIT_DIFF = 'git diff --cached --diff-filter=ACMR --name-only';

(async () => {
  const linter = new ESLint();

  // file level
  const fileList = execSync(GIT_DIFF).toString().split('\n');
  // ignore file which is not js/jsx/ts/tsx
  const lintFilesList = (
    await Promise.all(
      fileList.map(async (file) => {
        if (file && /\.(j|t)sx?$/g.test(file) && !(await linter.isPathIgnored(file))) {
          return file;
        }
        return '';
      }),
    )
  ).filter(Boolean);

  if (!lintFilesList.length) {
    console.log(chalk.green('no file should be lint.'));
    return;
  }

  console.log(chalk.green(lintFilesList.join('\n')));
  console.log();
  console.log(chalk.green('above file should be lint.'));

  const lintResults = await linter.lintFiles(lintFilesList);
  const Formatter = await linter.loadFormatter();
  console.log(Formatter.format(lintResults));

  const error = ESLint.getErrorResults(lintResults);
  if (error.length > 0) {
    process.exit(1);
  } else {
    console.log(chalk.green('lint successfully.'));
  }
})().catch((error) => {
  console.trace(error);
  process.exit(1);
});
