import type { RuleKey } from '@applint/spec';

export default interface LinterImpl {
  scan: () => Promise<any>;
  fix: () => Promise<any>;
}
