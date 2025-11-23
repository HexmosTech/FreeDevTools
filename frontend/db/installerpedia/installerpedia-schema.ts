export interface InstallationGuide {
    id: number;
    repo: string;
    repo_type: string; // category
    has_installation: boolean;
    prerequisites: Prerequisite[];
    installation_methods: InstallMethod[];
    post_installation: string[];
    resources_of_interest: Resource[];
    description: string;
    stars: number;
    note?: string;
  }
  
  export interface Prerequisite {
    type: string;
    name: string;
    version?: string | null;
    description: string;
    optional: boolean;
    applies_to: string[];
  }
  
  export interface InstallMethod {
    title: string;
    instructions: InstallInstruction[];
  }
  
  export interface InstallInstruction {
    command: string;
    meaning: string;
  }
  
  export interface Resource {
    type: string;
    title: string;
    url_or_path: string;
    reason: string;
  }
  
  // Raw DB row types
  export interface RawInstallationGuideRow {
    id: number;
    repo: string;
    repo_type: string;
    has_installation: boolean;
    prerequisites: string; // JSON string
    installation_methods: string; // JSON string
    post_installation: string; // JSON string
    resources_of_interest: string; // JSON string
    description: string;
    stars: number;
    note?: string;
  }
  

  export interface RepoData {
    id: number;
    repo: string;
    repo_type: string;
    has_installation: boolean;
    prerequisites: any[];
    installation_methods: any[];
    post_installation: string[];
    resources_of_interest: any[];
    description: string;
    stars: number;
    note: string;
  }
  
  export type RawRepoRow = RepoData; // same, since parsed in `parseRepoRow`
  