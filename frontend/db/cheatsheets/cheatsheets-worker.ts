/**
 * Worker thread for SQLite queries using bun:sqlite
 * Handles all query types for the Cheatsheets database
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
  totalCheatsheets: db.prepare('SELECT total_count FROM overview WHERE id = 1'),
  totalCategories: db.prepare('SELECT COUNT(*) as count FROM category'),
  cheatsheetsByCategory: db.prepare(`
    SELECT hash_id, category, slug, content, title, description, 
           json(keywords) as keywords
    FROM cheatsheet 
    WHERE category = ? 
    ORDER BY slug
  `),
  allCategories: db.prepare(`
    SELECT 
      c.id, c.name, c.slug, c.description, 
      (SELECT COUNT(*) FROM cheatsheet WHERE category = c.slug) as cheatsheetCount,
      (SELECT json_group_array(json_object('slug', slug)) 
       FROM (SELECT slug FROM cheatsheet WHERE category = c.slug ORDER BY slug LIMIT 3)
      ) as previewCheatsheets
    FROM category c
    ORDER BY c.name
    LIMIT ? OFFSET ?
  `),
  categoryBySlug: db.prepare(`
    SELECT id, name, slug, description, 
           json(keywords) as keywords, json(features) as features
    FROM category 
    WHERE slug = ?
  `),
  cheatsheetByHashId: db.prepare(`
    SELECT hash_id, category, slug, content, title, description, 
           json(keywords) as keywords
    FROM cheatsheet 
    WHERE hash_id = ?
  `),
};

// Signal ready
parentPort?.postMessage({ ready: true });

interface QueryMessage {
  id: string;
  type: string;
  params: any;
}

// Helper to generate hash ID
function hashUrlToKey(category: string, slug: string): bigint {
  const combined = `${category}${slug}`;
  const hash = crypto.createHash('sha256').update(combined).digest();
  return hash.readBigInt64BE(0);
}

// Handle incoming queries
parentPort?.on('message', (message: QueryMessage) => {
  const { id, type, params } = message;
  const startTime = new Date();
  const timestampLabel = highlight(`[${startTime.toISOString()}]`, logColors.timestamp);
  const dbLabel = highlight('[CHEATSHEETS_DB]', logColors.dbLabel);
  // console.log(`${timestampLabel} ${dbLabel} Worker ${workerId} handling ${type}`);

  try {
    let result: any;

    switch (type) {
      case 'getTotalCheatsheets': {
        const row = statements.totalCheatsheets.get() as { total_count: number } | undefined;
        result = row?.total_count ?? 0;
        break;
      }

      case 'getTotalCategories': {
        const row = statements.totalCategories.get() as { count: number } | undefined;
        result = row?.count ?? 0;
        break;
      }

      case 'getCheatsheetsByCategory': {
        const { categorySlug } = params;
        const rows = statements.cheatsheetsByCategory.all(categorySlug) as Array<{
          hash_id: bigint;
          category: string;
          slug: string;
          content: string;
          title: string;
          description: string;
          keywords: string;
        }>;
        result = rows.map((row) => ({
          ...row,
          keywords: JSON.parse(row.keywords || '[]'),
        }));
        break;
      }

      case 'getAllCategories': {
        const { page, itemsPerPage } = params;
        const offset = (page - 1) * itemsPerPage;
        const rows = statements.allCategories.all(itemsPerPage, offset) as Array<{
          id: number;
          name: string;
          slug: string;
          description: string;
          cheatsheetCount: number;
          previewCheatsheets: string;
        }>;
        result = rows.map((row) => ({
          ...row,
          previewCheatsheets: JSON.parse(row.previewCheatsheets || '[]'),
        }));
        break;
      }

      case 'getCategoryBySlug': {
        const { slug } = params;
        const row = statements.categoryBySlug.get(slug) as {
          id: number;
          name: string;
          slug: string;
          description: string;
          keywords: string;
          features: string;
        } | undefined;

        if (!row) {
          result = null;
        } else {
          result = {
            ...row,
            keywords: JSON.parse(row.keywords || '[]'),
            features: JSON.parse(row.features || '[]'),
          };
        }
        break;
      }

      case 'getCheatsheetByCategoryAndSlug': {
        const { categorySlug, cheatsheetSlug } = params;
        const hashId = hashUrlToKey(categorySlug, cheatsheetSlug);
        const row = statements.cheatsheetByHashId.get(hashId.toString()) as {
          hash_id: bigint;
          category: string;
          slug: string;
          content: string;
          title: string;
          description: string;
          keywords: string;
        } | undefined;

        if (!row) {
          result = null;
        } else {
          result = {
            ...row,
            keywords: JSON.parse(row.keywords || '[]'),
          };
        }
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
    const endDbLabel = highlight('[CHEATSHEETS_DB]', logColors.dbLabel);
    // console.log(
    //   `${endTimestamp} ${endDbLabel} Worker ${workerId} ${type} finished in ${
    //     endTime.getTime() - startTime.getTime()
    //   }ms`
    // );
  } catch (error: any) {
    parentPort?.postMessage({
      id,
      error: error.message || String(error),
    });
  }
});
