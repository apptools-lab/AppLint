import { ESLint } from 'eslint';
import fse from 'fs-extra';
import getCustomESLintConfig from './getCustomESLintConfig';
import deepmerge from 'deepmerge';
import path from 'path';
import ignore from 'ignore';
const { getESLintConfig } = require('@applint/spec');

interface FileInfo {
  path: string;
  source: string;
  // lines of code
  LoC: number;
}

interface Params {
  directory: string;
  ruleKey: string;
  fixError: boolean;
  files: FileInfo[];
}

const SUPPORT_FILE_REG = /(\.js|\.jsx|\.ts|\.tsx|\.vue|package\.json)$/;

export async function runESLint({ directory, ruleKey, fixError, files }: Params) {
  const customConfig: any = getCustomESLintConfig(directory, ruleKey) || {};

  const eslint = new ESLint({
    cache: false,
    // If user add extends or plugins, should find plugin form target directory
    resolvePluginsRelativeTo: customConfig.extends || customConfig.plugins ? directory : path.dirname(require.resolve('@applint/spec')),
    baseConfig: deepmerge(getESLintConfig(ruleKey), customConfig),
    cwd: directory,
    fix: fixError,
    useEslintrc: false
  })

  const targetFiles = getTargetFiles(files, directory);
  const data = await eslint.lintFiles(targetFiles);

  if (fixError) {
    ESLint.outputFixes(data);
  }

  return {
    data,
    customConfig,
  }
}

function getTargetFiles(files: FileInfo[], directory: string) {
  const ig = getIg(directory);

  const targetFiles: string[] = files.filter((file: FileInfo) => {
    return SUPPORT_FILE_REG.test(file.path) && !ig.ignores(file.path.replace(path.join(directory, '/'), ''));
  }).map((file: FileInfo) => {
    // Use absolute path
    return file.path.startsWith('.') ? path.join(process.cwd(), file.path) : file.path;
  });

  return targetFiles;
}

function getIg(directory: string) {
  const ig = ignore();
  const ignoreConfigFilePath = path.join(directory, '.eslintignore');
  if (fse.existsSync(ignoreConfigFilePath)) {
    ig.add(fse.readFileSync(ignoreConfigFilePath).toString());
  }

  return ig;
}