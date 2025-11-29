export interface ManPage {
  hash_id: bigint;
  main_category: string;
  sub_category: string;
  title: string;
  slug: string;
  filename: string;
  content: ManPageContent; // JSON object with dynamic sections
}

export interface ManPageContent {
  NAME?: string;
  SYNOPSIS?: string;
  DESCRIPTION?: string;
  OPTIONS?: string;
  EXAMPLES?: string;
  FILES?: string;
  ENVIRONMENT?: string;
  DIAGNOSTICS?: string;
  SEEALSO?: string;
  STANDARDS?: string;
  HISTORY?: string;
  AUTHORS?: string;
  BUGS?: string;
  SECURITY?: string;
  MIBVARIABLES?: string;
  NOTES?: string;
  CAVEATS?: string;
  [key: string]: string | undefined; // Allow any other section
}

export interface Category {
  name: string;
  count: number;
  description: string;
  keywords: string[]; // JSON array
  path: string;
}

export interface SubCategory {
  hash_id: bigint;
  main_category: string;
  name: string;
  count: number;
  description: string;
  keywords: string[]; // JSON array
  path: string;
}

export interface Overview {
  id: number;
  total_count: number;
}

// Raw database row types (before JSON parsing)
export interface RawManPageRow {
  hash_id: bigint;
  main_category: string;
  sub_category: string;
  title: string;
  slug: string;
  filename: string;
  content: string; // JSON string before parsing
}

export interface RawCategoryRow {
  name: string;
  count: number;
  description: string;
  keywords: string; // JSON string before parsing
  path: string;
}

export interface RawSubCategoryRow {
  hash_id: bigint;
  main_category: string;
  name: string;
  count: number;
  description: string;
  keywords: string; // JSON string before parsing
  path: string;
}

export interface RawOverviewRow {
  id: number;
  total_count: number;
}