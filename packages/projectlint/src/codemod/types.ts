export type Rule = {
  title: string;
  title_en: string;
  message: string;
  message_en: string;
  severity: string;
  npm_deprecate: string;
  docs?: string;
  package?: string;
  transform?: string;
}

export type RunTransformParams = {
  cwd: string;
  /**
   * examples:
    config = {
      "plugin-rax-component-to-component": "error",
      "lint-config-to-iceworks-spec": "warn",
    };
   */
  transforms: Record<string, string>;
  dry?: boolean;
  jscodeshiftArgs?: string[];
}

export interface CodemodResult extends Rule {
  dry: boolean;

  output: string;
}

export interface Result {
  codemod: CodemodResult[];

  [rule: string]: any;
}