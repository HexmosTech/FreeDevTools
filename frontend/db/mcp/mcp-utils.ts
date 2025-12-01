import { query } from './mcp-worker-pool';
import type { McpCategory, ParsedMcpPage } from './mcp-schema';

export async function getAllMcpCategories(): Promise<McpCategory[]> {
    return query.getAllMcpCategories();
}

export async function getMcpCategory(slug: string): Promise<McpCategory | undefined> {
    return query.getMcpCategory(slug);
}

export async function getMcpPagesByCategory(
    categorySlug: string,
    page: number = 1,
    limit: number = 30
): Promise<ParsedMcpPage[]> {
    return query.getMcpPagesByCategory(categorySlug, page, limit);
}

export async function getTotalMcpPagesByCategory(categorySlug: string): Promise<number> {
    return query.getTotalMcpPagesByCategory(categorySlug);
}

export async function getMcpPage(hashId: bigint): Promise<ParsedMcpPage | undefined> {
    return query.getMcpPage(hashId);
}

export async function getTotalMcpCount(): Promise<number> {
    return query.getTotalMcpCount();
}

export async function getTotalCategoryCount(): Promise<number> {
    return query.getTotalCategoryCount();
}

export async function hashUrlToKey(categorySlug: string, mcpKey: string): Promise<bigint> {
    return query.hashUrlToKey(categorySlug, mcpKey);
}
