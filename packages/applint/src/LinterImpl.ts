export default interface LinterImpl {
  scan: () => Promise<any>;
  fix: () => Promise<any>;
}
