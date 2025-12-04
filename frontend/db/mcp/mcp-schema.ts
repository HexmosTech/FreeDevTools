export interface McpCategory {
    slug: string;
    name: string;
    description: string;
    count: number;
}

export interface McpPage {
    hash_id: bigint;
    category: string;
    key: string;
    name: string;
    description: string;
    owner: string;
    stars: number;
    forks: number;
    language: string;
    license: string;
    updated_at: string;
    readme_content: string;
    url?: string;
    image_url?: string;
    npm_url?: string;
    npm_downloads?: number;
    keywords?: string[];
}

export interface ParsedMcpPage extends Omit<McpPage, 'data'> {
    data: any; // Parsed JSON
}
