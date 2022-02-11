import type { RuleKey } from '@applint/spec';

export interface FileInfo {
  path: string;
  source: string;
  // lines of code
  LoC: number;
}
export interface LinterParams {
  directory: string;
  ruleKey: RuleKey;
  files: FileInfo[];
}
