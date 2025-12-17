export interface PageMetadata {
  keywords: string[];
  features: string[];
}

export interface Page {
  title: string;
  description: string;
  html_content: string;
  metadata: PageMetadata;
}

export interface PreviewCommand {
  name: string;
  url: string;
}

export interface Command extends PreviewCommand {
  description: string;
  features: string[];
}

export interface Cluster {
  name: string;
  count: number;
  preview_commands: PreviewCommand[];
}

export interface RawClusterRow {
  hash: number;
  name: string;
  count: number;
  preview_commands_json: string;
}

export interface RawPageRow {
  url_hash: number;
  url: string;
  title: string;
  description: string;
  html_content: string;
  metadata: string;
}