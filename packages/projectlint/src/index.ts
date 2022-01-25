import type { CodemodRule } from './codemod';
import Codemod from './codemod';
import type ProjectLinterImpl from './ProjectLinterImpl';

export * from './codemod';

export type ProjectLintResult = Record<string, any>;

interface ProjectLintOptions {
  cwd: string;
  transforms: Record<string, number>;
  customTransformRules?: Record<string, CodemodRule>;
}

type ProjectLinters = Record<string, any>;

interface ProjectLintImpl {
  scan: () => Promise<ProjectLintResult>;
  fix: () => Promise<ProjectLintResult>;
}

export default class ProjectLint implements ProjectLintImpl {
  private static projectLinters = {} as ProjectLinters;

  private options: ProjectLintOptions;

  public constructor(options: ProjectLintOptions) {
    this.options = options;
  }

  public async scan() {
    const projectLintResult = {} as ProjectLintResult;
    for (const key in ProjectLint.projectLinters) {
      const ProjectLinter = ProjectLint.projectLinters[key];
      const projectLinter: ProjectLinterImpl = new ProjectLinter(this.options);
      const result = await projectLinter.scan();
      projectLintResult[key] = result;
    }

    return projectLintResult;
  }

  public async fix() {
    const projectLintResult = {} as ProjectLintResult;
    for (const key in ProjectLint.projectLinters) {
      const ProjectLinter = ProjectLint.projectLinters[key];
      const projectLinter: ProjectLinterImpl = new ProjectLinter(this.options);
      if (projectLinter.fix) {
        const result = await projectLinter.fix();
        projectLintResult[key] = result;
      }
    }

    return projectLintResult;
  }

  public static registry(key: string, projectLinter: any) {
    this.projectLinters[key] = projectLinter;
  }
}

ProjectLint.registry('codemod', Codemod);
