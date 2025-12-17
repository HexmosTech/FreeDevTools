export interface Cheatsheet {
  hash_id: bigint;
  category: string;
  slug: string;
  content: string;
  title: string | null;
  description: string;
  keywords: string[]; // JSON array stored as TEXT
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  keywords: string[]; // JSON array
  features: string[]; // JSON array
}

export interface Overview {
  id: number;
  total_count: number;
}

// Raw database row types (before JSON parsing)
export interface RawCheatsheetRow {
  id: number;
  category: string;
  slug: string;
  content: string;
  title: string | null;
  description: string;
  keywords: string; // JSON string
}

export interface RawCategoryRow {
  id: number;
  name: string;
  slug: string;
  description: string;
  keywords: string; // JSON string
  features: string; // JSON string
}