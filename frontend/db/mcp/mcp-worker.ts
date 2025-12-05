/**
 * Worker thread for SQLite queries using bun:sqlite
 * Handles all query types for the MCP database
 */

import { Database } from 'bun:sqlite';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { parentPort, workerData } from 'worker_threads';

const logColors = {
    reset: '\u001b[0m',
    timestamp: '\u001b[35m',
    dbLabel: '\u001b[34m',
} as const;

const highlight = (text: string, color: string) => `${color}${text}${logColors.reset}`;

const { dbPath, workerId } = workerData;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Open database connection with aggressive read optimizations
const db = new Database(dbPath, { readonly: true });

// Wrap all PRAGMAs in try-catch to avoid database locking issues with multiple processes
const setPragma = (pragma: string) => {
    try {
        db.run(pragma);
    } catch (e) {
        // Ignore PRAGMA errors - they're optimizations, not critical
    }
};

setPragma('PRAGMA cache_size = -64000'); // 64MB cache per connection
setPragma('PRAGMA temp_store = MEMORY');
setPragma('PRAGMA mmap_size = 268435456'); // 256MB memory-mapped I/O
setPragma('PRAGMA query_only = ON'); // Read-only mode
setPragma('PRAGMA page_size = 4096'); // Optimal page size

const statements = {
    allCategories: db.prepare('SELECT * FROM category ORDER BY name LIMIT ? OFFSET ?'),
    categoryBySlug: db.prepare('SELECT name, description, count FROM category WHERE slug = ?'),
    mcpPagesByCategory: db.prepare(`
    SELECT key, name, description, owner, stars, forks, license, updated_at, image_url, npm_downloads
    FROM mcp_pages 
    WHERE category = ? 
    ORDER BY stars DESC, name ASC 
    LIMIT ? OFFSET ?
  `),
    totalMcpPagesByCategory: db.prepare('SELECT COUNT(*) as count FROM mcp_pages WHERE category = ?'),
    mcpPageByHashId: db.prepare(`
        SELECT *
        FROM mcp_pages
        WHERE hash_id = ?
    `),
    getOverview: db.prepare('SELECT total_count, total_category_count FROM overview WHERE id = 1'),
};

// Signal ready
parentPort?.postMessage({ ready: true });

interface QueryMessage {
    id: string;
    type: string;
    params: any;
}

// Helper to generate hash ID
function hashUrlToKey(categorySlug: string, mcpKey: string): bigint {
    const combined = `${categorySlug}${mcpKey}`;
    const hash = crypto.createHash('sha256').update(combined).digest();
    // Take first 8 bytes
    const buffer = hash.subarray(0, 8);
    // Read as BigInt64 (signed)
    return buffer.readBigInt64BE(0);
}

// Handle incoming queries
parentPort?.on('message', (message: QueryMessage) => {
    const { id, type, params } = message;
    const startTime = new Date();
    const timestampLabel = highlight(`[${startTime.toISOString()}]`, logColors.timestamp);
    const dbLabel = highlight('[MCP_DB]', logColors.dbLabel);
    console.log(`${timestampLabel} ${dbLabel} Worker ${workerId} handling ${type}`);

    try {
        let result: any;

        switch (type) {
            case 'getAllMcpCategories': {
                const { page = 1, limit = 30 } = params;
                const offset = (page - 1) * limit;
                result = statements.allCategories.all(limit, offset);
                break;
            }

            case 'getMcpCategory': {
                const { slug } = params;
                result = statements.categoryBySlug.get(slug);
                break;
            }

            case 'getMcpPagesByCategory': {
                const { categorySlug, page, limit } = params;
                const offset = (page - 1) * limit;
                const rows = statements.mcpPagesByCategory.all(categorySlug, limit, offset) as Array<any>;
                result = rows.map((row) => ({
                    ...row,

                }));
                break;
            }

            case 'getTotalMcpPagesByCategory': {
                const { categorySlug } = params;
                const row = statements.totalMcpPagesByCategory.get(categorySlug) as { count: number } | undefined;
                result = row?.count || 0;
                break;
            }

            case 'getMcpPage': {
                const { hashId } = params;
                // Ensure hashId is treated as string for query if needed, or BigInt if bun supports it directly
                // bun:sqlite usually handles BigInt fine, but sometimes string conversion is safer for transport
                const row = statements.mcpPageByHashId.get(hashId.toString()) as any;

                if (!row) {
                    result = undefined;
                } else {
                    result = {
                        ...row,
                        keywords: (row.keywords && row.keywords !== '') ? JSON.parse(row.keywords) : [],
                    };
                }
                break;
            }

            case 'getOverview': {
                const row = statements.getOverview.get() as { total_count: number; total_category_count: number } | undefined;
                result = {
                    totalMcpCount: row?.total_count || 0,
                    totalCategoryCount: row?.total_category_count || 0
                };
                break;
            }

            case 'hashUrlToKey': {
                const { categorySlug, mcpKey } = params;
                result = hashUrlToKey(categorySlug, mcpKey);
                break;
            }

            default:
                throw new Error(`Unknown query type: ${type}`);
        }

        parentPort?.postMessage({
            id,
            result,
        });
        const endTime = new Date();
        const endTimestamp = highlight(`[${endTime.toISOString()}]`, logColors.timestamp);
        const endDbLabel = highlight('[MCP_DB]', logColors.dbLabel);
        console.log(
            `${endTimestamp} ${endDbLabel} Worker ${workerId} ${type} finished in ${endTime.getTime() - startTime.getTime()
            }ms`
        );
    } catch (error: any) {
        parentPort?.postMessage({
            id,
            error: error.message || String(error),
        });
    }
});
