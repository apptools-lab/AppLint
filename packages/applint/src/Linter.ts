import path from 'path';
import ignore from 'ignore';
import fse from 'fs-extra';
import type { FileInfo, LinterParams } from './types';
import type { RuleKey } from '@applint/spec';

export default abstract class Linter<Result> {
  public files: FileInfo[];
  public ruleKey: RuleKey;
  public directory: string;

  public constructor({ directory, ruleKey, files }: LinterParams) {
    this.files = files;
    this.ruleKey = ruleKey;
    this.directory = directory;
  }

  public getTargetFiles(ignoreFileName: string, supportiveFileRegExp: RegExp) {
    const ig = this.getIg(ignoreFileName);

    const targetFiles: string[] = this.files
      .filter((file: FileInfo) => {
        return (
          supportiveFileRegExp.test(file.path) &&
          !ig.ignores(file.path.replace(path.join(this.directory, '/'), ''))
        );
      })
      .map((file: FileInfo) => {
        // Use absolute path
        return file.path.startsWith('.') ? path.join(process.cwd(), file.path) : file.path;
      });

    return targetFiles;
  }

  private getIg(ignoreFileName: string) {
    const ig = ignore();
    const ignoreConfigFilePath = path.join(this.directory, ignoreFileName);
    if (fse.existsSync(ignoreConfigFilePath)) {
      ig.add(fse.readFileSync(ignoreConfigFilePath).toString());
    }

    return ig;
  }

  public getRuleKeyInConfigFile(configFilename: string, apiName: string) {
    const configFilePath = path.join(this.directory, configFilename);
    if (!fse.pathExistsSync(configFilePath)) {
      return '';
    }
    const configCode = fse.readFileSync(configFilePath, 'utf-8');
    // for example: match react-ts' str from getESLintConfig('react-ts')
    const regexp = new RegExp(`${apiName}[\\s\\S]*\\(['"]([\\w-]+)['"]`);
    const matchResult = configCode.match(regexp);
    if (!matchResult) {
      return '';
    }
    const [, ruleKey] = matchResult;
    return ruleKey;
  }

  public abstract scan(): Promise<{ data: Result }>;

  public abstract fix(): Promise<{ data: Result }>;
}
