
type TransformMode = 'check' | 'fix';

type Rule = {
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

type Params = {
  cwd: string;
  /**
   * examples:
    config = {
      "plugin-rax-component-to-component": "error",
      "lint-config-to-spec": "warn",
    };
   */
  rules: Record<string, string>;
  mode: TransformMode;
  jscodeshiftArgs?: string[];
}