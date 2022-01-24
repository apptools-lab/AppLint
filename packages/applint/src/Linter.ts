import type { RuleKey } from '@applint/spec';
import path from 'path';
import ignore from 'ignore';
import fse from 'fs-extra';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import type { FileInfo, LinterParams } from './types';

export default abstract class Linter {
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

  public getCustomConfig(configFileName: string, apiName: string) {
    // TODO: update TS types
    let config: any;
    const configFilePath = path.join(this.directory, configFileName);

    if (fse.existsSync(configFilePath)) {
      const source = fse.readFileSync(configFilePath, { encoding: 'utf-8' });
      const ast = parse(source, {
        sourceType: 'module',
        plugins: ['flow', 'exportDefaultFrom', 'exportNamespaceFrom'],
      });

      traverse(ast as any, {
        CallExpression(nodePath: any) {
          const { node } = nodePath;
          if (node.callee.name === apiName && node.arguments && node.arguments[1]) {
            const configNode = node.arguments[1];
            const configSource = source.substring(configNode.start, configNode.end);
            // eslint-disable-next-line no-eval
            config = eval(`(${configSource})`);
          }
        },
      });
    }

    return config || {};
  }

  // TODO: update types to Promise<Result>
  public abstract scan(): Promise<any>;

  public abstract fix(): Promise<any>;
}
