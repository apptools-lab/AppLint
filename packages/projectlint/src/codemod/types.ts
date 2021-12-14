export enum CodemodSeverity {
  off,
  warn,
  error,
}

export type CodemodRule = {
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

export type CodemodTransformParams = {
  cwd: string;
  /**
   * examples:
    config = {
      "plugin-rax-component-to-component": "error",
      "lint-config-to-iceworks-spec": "warn",
    };
   */
  transforms: Record<string, number>;
  jscodeshiftArgs?: string[];
}

export interface CodemodTransformResult extends CodemodRule {
  dry: boolean;
  output: string;
}
