export interface Icon {
  id: number;
  cluster: string;
  name: string;
  base64: string;
  description: string;
  usecases: string;
  synonyms: string[]; // JSON array stored as TEXT, SQLite can query with json_each()
  tags: string[]; // JSON array stored as TEXT, SQLite can query with json_each()
  industry: string;
  emotional_cues: string;
  enhanced: number; // 0 or 1, convert to boolean
}

export interface Cluster {
  name: string;
  count: number;
  source_folder: string;
  path: string;
  keywords: string[]; // JSON array stored as TEXT, SQLite can query with json_each()
  features: string[]; // JSON array stored as TEXT, SQLite can query with json_each()
  title: string;
  description: string;
}

export interface Overview {
  id: number;
  total_count: number;
}

// Raw database row types (before JSON parsing)
export interface RawIconRow {
  id: number;
  cluster: string;
  name: string;
  base64: string;
  description: string;
  usecases: string;
  synonyms: string; // JSON string before parsing
  tags: string; // JSON string before parsing
  industry: string;
  emotional_cues: string;
  enhanced: number;
}

export interface RawClusterRow {
  name: string;
  count: number;
  source_folder: string;
  path: string;
  keywords: string; // JSON string before parsing
  features: string; // JSON string before parsing
  title: string;
  description: string;
}
