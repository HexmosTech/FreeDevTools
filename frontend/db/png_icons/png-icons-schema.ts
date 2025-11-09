export interface Icon {
  id: number;
  cluster: string;
  name: string;
  base64: string;
  description: string;
  usecases: string;
  synonyms: string[]; // JSON array stored as TEXT
  tags: string[]; // JSON array stored as TEXT
  industry: string;
  emotional_cues: string;
  enhanced: number; // 0 or 1 → convert to boolean if needed
  img_alt: string;
  ai_image_alt_generated: number; // 0 or 1
}

export interface Cluster {
  name: string;
  count: number;
  source_folder: string;
  path: string;
  keywords: string[]; // JSON array
  tags: string[]; // JSON array (renamed from features)
  title: string;
  description: string;
  ai_title_generated: number;
  ai_desc_generated: number;
  ai_alt_terms_generated: number;
  ai_tags_generated: number;
  ai_practical_application_generated: number;
  practical_application: string; // stored as TEXT
  alternative_terms: string[]; // JSON array
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
  synonyms: string; // JSON string
  tags: string; // JSON string
  industry: string;
  emotional_cues: string;
  enhanced: number;
  img_alt: string;
  ai_image_alt_generated: number;
}

export interface RawClusterRow {
  name: string;
  count: number;
  source_folder: string;
  path: string;
  keywords: string; // JSON string
  tags: string; // JSON string (renamed from features)
  title: string;
  description: string;
  ai_title_generated: number;
  ai_desc_generated: number;
  ai_alt_terms_generated: number;
  ai_tags_generated: number;
  ai_practical_application_generated: number;
  practical_application: string; // plain TEXT
  alternative_terms: string; // JSON string
}
