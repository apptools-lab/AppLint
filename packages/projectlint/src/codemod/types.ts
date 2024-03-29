/* eslint-disable camelcase */
export enum CodemodSeverity {
  off = 0,
  warn = 1,
  error = 2,
}

export interface CodemodRule {
  title: string;
  title_en: string;
  message: string;
  message_en: string;
  severity: number;
  tags?: string[];
  npm_deprecate?: string;
  docs?: string;
  package?: string;
  transform?: string;
}

export interface CodemodTransformParams {
  cwd: string;
  transforms: Record<string, number>;
  jscodeshiftArgs?: string[];
  customTransformRules?: Record<string, CodemodRule>;
}

export interface CodemodTransformResult extends CodemodRule {
  dry: boolean;
  output: string;
}
