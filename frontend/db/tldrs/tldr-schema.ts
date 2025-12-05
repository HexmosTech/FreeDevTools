export interface Example {
  description: string;
  cmd: string;
}

export interface Page {
  id: number;
  cluster: string;
  name: string;
  platform: string;
  title: string;
  description: string;
  more_info_url?: string;
  keywords?: string[]; // JSON array
  features: string[]; // JSON array
  examples?: Example[]; // JSON array of {description, cmd}
  raw_content?: string;
  html_content?: string;
  path: string;
}

export interface Cluster {
  name: string;
  hash_name: string;
  count: number;
  description: string;
}

export interface Overview {
  id: number;
  total_count: number;
}

// Raw database row types (before JSON parsing)
export interface RawPageRow {
  url_hash: number;
  url: string;
  cluster: string;
  name: string;
  platform: string;
  title: string;
  description: string;
  more_info_url: string;
  keywords: string; // JSON string
  features: string; // JSON string
  examples: string; // JSON string
  raw_content: string;
  html_content: string;
  path: string;
}

export interface RawClusterRow {
  name: string;
  hash_name: string;
  count: number;
  description: string;
}