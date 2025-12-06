export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  features: string[];
}

export interface Page {
  html_content: string;
  metadata: PageMetadata;
}

export interface CommandSummary {
  name: string;
  url: string;
  description: string;
  category: string;
  features: string[];
}

export interface PlatformSummary {
  name: string;
  count: number;
  url: string;
}

export interface MainPageData {
  commands?: CommandSummary[];
  platforms?: PlatformSummary[];
  total: number;
  page: number;
  total_pages: number;
}

export interface MainPage {
  hash: string;
  data: MainPageData;
  total_count: number;
}

export interface RawClusterRow {
  name: string;
  hash_name: string;
  count: number;
  description: string;
}