export interface ManPage {
  hash_id: bigint;
  main_category: string;
  sub_category: string;
  title: string;
  slug: string;
  filename: string;
  content: ManPageContent; // JSON object with dynamic sections
}

export interface ManPageCategory {
  name: string;
  count: number;
  description: string;
  path: string;
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

export interface Overview {
  id: number;
  total_count: number;
}