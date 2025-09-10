/// <reference types="vite/client" />

declare module "@/config/tools" {
  export interface Tool {
    title: string;
    name: string;
    path: string;
    description: string;
    category: string;
    icon: string;
    themeColor: string;
    canonical: string;
    keywords: string[];
    features: string[];
    ogImage: string;
    twitterImage: string;
    variationOf?: string;
    datePublished?: string;
    softwareVersion?: string;
  }

  export const TOOLS_CONFIG: Record<string, Tool>;
  export function getToolByKey(key: string): Tool | undefined;
  export function getAllTools(): Tool[];
  export function getAllUniqueTools(): Tool[];
  export function getToolsByCategory(category: string): Tool[];
}

declare module "@/layouts/BaseLayout.astro" {
  interface BaseLayoutProps {
    name: string;
    title?: string;
    path?: string;
    description?: string;
    canonical?: string;
    themeColor?: string;
    keywords?: string[];
    ogImage?: string;
    twitterImage?: string;
    datePublished?: string;
    softwareVersion?: string;
    features?: string[];
    showSidebar?: boolean;
    showHeader?: boolean;
    children?: any;
  }

  const BaseLayout: (props: BaseLayoutProps) => any;
  export default BaseLayout;
}

declare module "@/components/*" {
  const component: any;
  export default component;
}
