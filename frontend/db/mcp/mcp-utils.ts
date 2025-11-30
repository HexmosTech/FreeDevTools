import crypto from 'crypto';
import Database from 'bun:sqlite';
import path from 'path';
import type { McpCategory, McpPage, ParsedMcpPage } from './mcp-schema';

let dbInstance: any = null;

function getDbPath(): string {
    return path.resolve(process.cwd(), 'db/all_dbs/mcp-db.db');
}

export function getDb() {
    if (!dbInstance) {
        dbInstance = new Database(getDbPath(), { readonly: true });
        dbInstance.run('PRAGMA journal_mode = WAL');
        dbInstance.run('PRAGMA cache_size = -64000'); // 64MB cache per connection
        dbInstance.run('PRAGMA temp_store = MEMORY');
        dbInstance.run('PRAGMA mmap_size = 268435456'); // 256MB memory-mapped I/O
        dbInstance.run('PRAGMA query_only = ON'); // Read-only mode
        dbInstance.run('PRAGMA page_size = 4096'); // Optimal page size
    }
    return dbInstance;
}

export function hashUrlToKey(categorySlug: string, mcpKey: string): bigint {
    const combined = `${categorySlug}${mcpKey}`;
    const hash = crypto.createHash('sha256').update(combined).digest();
    // Take first 8 bytes
    const buffer = hash.subarray(0, 8);
    // Read as BigInt64 (signed)
    return buffer.readBigInt64BE(0);
}

export function getAllMcpCategories(): McpCategory[] {
    const db = getDb();
    const stmt = db.prepare('SELECT * FROM category ORDER BY name');
    return stmt.all() as McpCategory[];
}

export function getMcpCategory(slug: string): McpCategory | undefined {
    const db = getDb();
    const stmt = db.prepare('SELECT * FROM category WHERE slug = ?');
    return stmt.get(slug) as McpCategory | undefined;
}

export function getMcpPagesByCategory(
    categorySlug: string,
    page: number = 1,
    limit: number = 30
): ParsedMcpPage[] {
    const db = getDb();
    const offset = (page - 1) * limit;
    const stmt = db.prepare(`
    SELECT * FROM mcp_pages 
    WHERE category = ? 
    ORDER BY stars DESC, name ASC 
    LIMIT ? OFFSET ?
  `);

    const rows = stmt.all(categorySlug, limit, offset) as McpPage[];
    return rows.map(parseMcpPage);
}

export function getTotalMcpPagesByCategory(categorySlug: string): number {
    const db = getDb();
    const stmt = db.prepare('SELECT COUNT(*) as count FROM mcp_pages WHERE category = ?');
    const result = stmt.get(categorySlug) as { count: number };
    return result.count;
}

export function getMcpPage(hashId: bigint): ParsedMcpPage | undefined {
    const db = getDb();
    const stmt = db.prepare('SELECT * FROM mcp_pages WHERE hash_id = ?');
    const row = stmt.get(hashId) as McpPage | undefined;

    if (!row) return undefined;
    return parseMcpPage(row);
}

export function getTotalMcpCount(): number {
    const db = getDb();
    const stmt = db.prepare('SELECT total_count FROM overview WHERE id = 1');
    const result = stmt.get() as { total_count: number } | undefined;
    return result?.total_count || 0;
}

export function getTotalCategoryCount(): number {
    const db = getDb();
    const stmt = db.prepare('SELECT COUNT(*) as count FROM category');
    const result = stmt.get() as { count: number };
    return result.count;
}

function parseMcpPage(row: McpPage): ParsedMcpPage {
    return {
        ...row,
        data: JSON.parse(row.data || '{}'),
    };
}
