export interface SearchResult {
    id?: string;
    title?: string;
    name?: string;
    description?: string;
    category?: string;
    url?: string;
    path?: string;
    slug?: string;
    code?: string;
    image?: string;
    [key: string]: unknown;
}

export interface SearchResponse {
    hits: SearchResult[];
    estimatedTotalHits?: number;
    totalHits?: number;
}
