export interface Icon {
  id: number;
  cluster: string;
  name: string;
  base64: string;
  title: string;
  description: string;
  usecases: string;
  synonyms: string[]; // JSON array stored as TEXT
  tags: string[]; // JSON array stored as TEXT
  industry: string;
  emotional_cues: string;
  enhanced: number; // 0 or 1 → convert to boolean if needed
  img_alt: string;
}

export interface Cluster {
  id: number;
  name: string;
  count: number;
  source_folder: string;
  path: string;
  keywords: string[]; // JSON array
  tags: string[]; // JSON array (renamed from features)
  title: string;
  description: string;
  practical_application: string; // stored as TEXT
  alternative_terms: string[]; // JSON array
  about: string;
  why_choose_us: string[]; // JSON array
}

export interface Overview {
  id: number;
  total_count: number;
  name?: string;
}

// Raw database row types (before JSON parsing)
export interface RawIconRow {
  id: number;
  cluster: string;
  name: string;
  base64: string;
  description: string;
  usecases: string;
  synonyms: string; // JSON string
  tags: string; // JSON string
  industry: string;
  emotional_cues: string;
  enhanced: number;
  img_alt: string;
}

export interface RawClusterRow {
  id: number;
  name: string;
  count: number;
  source_folder: string;
  path: string;
  keywords: string; // JSON string
  tags: string; // JSON string (renamed from features)
  title: string;
  description: string;
  practical_application: string; // plain TEXT
  alternative_terms: string; // JSON string
  about: string;
  why_choose_us: string; // JSON string
}
