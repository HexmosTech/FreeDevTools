export interface Banner {
  id: number;
  language: string;
  name: string;
  size: string;
  campaign_name: string;
  product_name: string;
  html_link: string;
  js_links: string;
  click_url: string;
  link_type: string;
}

// Raw database row types (before any processing)
export interface RawBannerRow {
  id: number;
  language: string;
  name: string;
  size: string;
  campaign_name: string;
  product_name: string;
  html_link: string;
  js_links: string;
  click_url: string;
  link_type: string;
}
