export default interface ProjectLinterImpl {
  scan: () => Promise<any>;
  fix?: () => Promise<any>;
}
