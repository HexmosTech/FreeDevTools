/**
 * Worker thread for SQLite queries using bun:sqlite
 * Handles all query types for the Man Pages database
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
    manPageCategories: db.prepare(`
    SELECT name, count, description
    FROM category 
    ORDER BY name
  `),
    categories: db.prepare(`
    SELECT name, count, description, 
           json(keywords) as keywords, path
    FROM category 
    ORDER BY name
  `),
    subCategories: db.prepare(`
    SELECT hash_id, main_category, name, count, description, 
           json(keywords) as keywords, path
    FROM sub_category 
    ORDER BY name
  `),
    overview: db.prepare(`
    SELECT id, total_count
    FROM overview 
    WHERE id = 1
  `),
    subCategoriesByMain: db.prepare(`
    SELECT hash_id, main_category, name, count, description, 
           json(keywords) as keywords, path
    FROM sub_category 
    WHERE main_category = ?
    ORDER BY name
  `),
    manPagesByCategory: db.prepare(`
    SELECT hash_id, main_category, sub_category, title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE main_category = ?
    ORDER BY title
  `),
    manPagesBySubcategory: db.prepare(`
    SELECT hash_id, main_category, sub_category, title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ?
    ORDER BY title
  `),
    manPageByHashId: db.prepare(`
    SELECT hash_id, main_category, sub_category, title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE hash_id = ?
  `),
    manPageStaticPaths: db.prepare(`
    SELECT hash_id, main_category, sub_category 
    FROM man_pages
  `),
    categoryStaticPaths: db.prepare(`
    SELECT name 
    FROM category
  `),
    subcategoryStaticPaths: db.prepare(`
    SELECT main_category, name as sub_category 
    FROM sub_category
  `),
    manPageByPath: db.prepare(`
    SELECT hash_id, main_category, sub_category, title, filename, 
           json(content) as content
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ? AND filename = ?
  `),
    commandStaticPaths: db.prepare(`
    SELECT main_category, sub_category, slug
    FROM man_pages
    ORDER BY main_category, sub_category, slug
  `),
    subCategoriesCountByMain: db.prepare(`
    SELECT COUNT(*) as count
    FROM sub_category 
    WHERE main_category = ?
  `),
    subCategoriesByMainPaginated: db.prepare(`
    SELECT hash_id, main_category, name, count, description, 
           json(keywords) as keywords, path
    FROM sub_category 
    WHERE main_category = ?
    ORDER BY name
    LIMIT ? OFFSET ?
  `),
    totalManPagesCountByMain: db.prepare(`
    SELECT COUNT(*) as count
    FROM man_pages 
    WHERE main_category = ?
  `),
    manPagesBySubcategoryPaginated: db.prepare(`
    SELECT hash_id, main_category, sub_category, title, slug, filename, content
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ?
    ORDER BY title
    LIMIT ? OFFSET ?
  `),
    manPagesCountBySubcategory: db.prepare(`
    SELECT COUNT(*) as count
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ?
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
function hashUrlToKey(mainCategory: string, subCategory: string, slug: string): bigint {
    const combined = `${mainCategory}${subCategory}${slug}`;
    const hash = crypto.createHash('sha256').update(combined).digest();
    return hash.readBigInt64BE(0);
}

// Handle incoming queries
parentPort?.on('message', (message: QueryMessage) => {
    const { id, type, params } = message;
    const startTime = new Date();
    const timestampLabel = highlight(`[${startTime.toISOString()}]`, logColors.timestamp);
    const dbLabel = highlight('[MAN_PAGES_DB]', logColors.dbLabel);
    // console.log(`${timestampLabel} ${dbLabel} Worker ${workerId} handling ${type}`);

    try {
        let result: any;

        switch (type) {
            case 'getManPageCategories': {
                const rows = statements.manPageCategories.all() as Array<{
                    name: string;
                    count: number;
                    description: string;
                }>;
                result = rows.map((row) => ({
                    category: row.name,
                    count: row.count,
                    description: row.description,
                }));
                break;
            }

            case 'getCategories': {
                const rows = statements.categories.all() as Array<{
                    name: string;
                    count: number;
                    description: string;
                    keywords: string;
                    path: string;
                }>;
                result = rows.map((row) => ({
                    ...row,
                    keywords: JSON.parse(row.keywords || '[]'),
                }));
                break;
            }

            case 'getSubCategories': {
                const rows = statements.subCategories.all() as Array<{
                    hash_id: bigint;
                    main_category: string;
                    name: string;
                    count: number;
                    description: string;
                    keywords: string;
                    path: string;
                }>;
                result = rows.map((row) => ({
                    ...row,
                    keywords: JSON.parse(row.keywords || '[]'),
                }));
                break;
            }

            case 'getOverview': {
                const row = statements.overview.get() as { id: number; total_count: number } | undefined;
                if (!row) {
                    result = null;
                } else {
                    result = {
                        id: row.id,
                        total_count: row.total_count,
                    };
                }
                break;
            }

            case 'getSubCategoriesByMainCategory': {
                const { mainCategory } = params;
                const rows = statements.subCategoriesByMain.all(mainCategory) as Array<{
                    hash_id: bigint;
                    main_category: string;
                    name: string;
                    count: number;
                    description: string;
                    keywords: string;
                    path: string;
                }>;
                result = rows.map((row) => ({
                    name: row.name,
                    count: row.count,
                    description: row.description,
                    keywords: JSON.parse(row.keywords || '[]'),
                    path: row.path,
                }));
                break;
            }

            case 'getManPagesByCategory': {
                const { category } = params;
                const rows = statements.manPagesByCategory.all(category) as Array<{
                    hash_id: bigint;
                    main_category: string;
                    sub_category: string;
                    title: string;
                    slug: string;
                    filename: string;
                    content: string;
                }>;
                result = rows.map((row) => ({
                    ...row,
                    content: JSON.parse(row.content || '{}'),
                }));
                break;
            }

            case 'getManPagesBySubcategory': {
                const { category, subcategory } = params;
                const rows = statements.manPagesBySubcategory.all(category, subcategory) as Array<{
                    hash_id: bigint;
                    main_category: string;
                    sub_category: string;
                    title: string;
                    slug: string;
                    filename: string;
                    content: string;
                }>;
                result = rows.map((row) => ({
                    ...row,
                    content: JSON.parse(row.content || '{}'),
                }));
                break;
            }

            case 'getManPageByHashId': {
                const { hashId } = params;
                const row = statements.manPageByHashId.get(hashId.toString()) as {
                    hash_id: bigint;
                    main_category: string;
                    sub_category: string;
                    title: string;
                    slug: string;
                    filename: string;
                    content: string;
                } | undefined;

                if (!row) {
                    result = null;
                } else {
                    result = {
                        ...row,
                        content: JSON.parse(row.content || '{}'),
                    };
                }
                break;
            }

            case 'generateManPageStaticPaths': {
                const rows = statements.manPageStaticPaths.all() as Array<{
                    hash_id: bigint;
                    main_category: string;
                    sub_category: string;
                }>;
                result = rows.map((row) => ({
                    params: {
                        category: row.main_category,
                        subcategory: row.sub_category,
                        page: row.hash_id.toString(),
                    },
                }));
                break;
            }

            case 'generateCategoryStaticPaths': {
                const rows = statements.categoryStaticPaths.all() as Array<{ name: string }>;
                result = rows.map((row) => ({
                    params: {
                        category: row.name,
                    },
                }));
                break;
            }

            case 'generateSubcategoryStaticPaths': {
                const rows = statements.subcategoryStaticPaths.all() as Array<{
                    main_category: string;
                    sub_category: string;
                }>;
                result = rows.map((row) => ({
                    params: {
                        category: row.main_category,
                        subcategory: row.sub_category,
                    },
                }));
                break;
            }

            case 'getManPageByPath': {
                const { category, subcategory, filename } = params;
                const row = statements.manPageByPath.get(category, subcategory, filename) as {
                    hash_id: bigint;
                    main_category: string;
                    sub_category: string;
                    title: string;
                    filename: string;
                    content: string;
                } | undefined;

                if (!row) {
                    result = null;
                } else {
                    result = {
                        ...row,
                        content: JSON.parse(row.content || '{}'),
                    };
                }
                break;
            }

            case 'getManPageByCommandName': {
                const { category, subcategory, commandName } = params;
                const hashId = hashUrlToKey(category, subcategory, commandName);
                const row = statements.manPageByHashId.get(hashId.toString()) as {
                    hash_id: bigint;
                    main_category: string;
                    sub_category: string;
                    title: string;
                    slug: string;
                    filename: string;
                    content: string;
                } | undefined;

                if (!row) {
                    result = null;
                } else {
                    result = {
                        ...row,
                        content: JSON.parse(row.content || '{}'),
                    };
                }
                break;
            }

            case 'generateCommandStaticPaths': {
                const rows = statements.commandStaticPaths.all() as Array<{
                    main_category: string;
                    sub_category: string;
                    slug: string;
                }>;
                console.log(`📊 Found ${rows.length} total man pages in database`);
                result = rows.map((manPage) => ({
                    params: {
                        category: manPage.main_category,
                        subcategory: manPage.sub_category,
                        slug: manPage.slug,
                    },
                }));
                if (result.length > 0) {
                    console.log('🔍 Sample generated paths:', result.slice(0, 5));
                }
                break;
            }

            case 'getSubCategoriesCountByMainCategory': {
                const { mainCategory } = params;
                const row = statements.subCategoriesCountByMain.get(mainCategory) as { count: number } | undefined;
                result = row?.count || 0;
                break;
            }

            case 'getSubCategoriesByMainCategoryPaginated': {
                const { mainCategory, limit, offset } = params;
                const limitInt = Math.floor(limit);
                const offsetInt = Math.floor(offset);
                const rows = statements.subCategoriesByMainPaginated.all(mainCategory, limitInt, offsetInt) as Array<{
                    hash_id: bigint;
                    main_category: string;
                    name: string;
                    count: number;
                    description: string;
                    keywords: string;
                    path: string;
                }>;
                result = rows.map((row) => ({
                    ...row,
                    keywords: JSON.parse(row.keywords || '[]'),
                }));
                break;
            }

            case 'getTotalManPagesCountByMainCategory': {
                const { mainCategory } = params;
                const row = statements.totalManPagesCountByMain.get(mainCategory) as { count: number } | undefined;
                result = row?.count || 0;
                break;
            }

            case 'getManPagesBySubcategoryPaginated': {
                const { mainCategory, subCategory, limit, offset } = params;
                const limitInt = Math.floor(limit);
                const offsetInt = Math.floor(offset);
                const rows = statements.manPagesBySubcategoryPaginated.all(mainCategory, subCategory, limitInt, offsetInt) as Array<{
                    hash_id: bigint;
                    main_category: string;
                    sub_category: string;
                    title: string;
                    slug: string;
                    filename: string;
                    content: string;
                }>;
                result = rows.map((row) => ({
                    hash_id: row.hash_id,
                    main_category: row.main_category,
                    sub_category: row.sub_category,
                    title: row.title,
                    slug: row.slug,
                    filename: row.filename,
                    content: JSON.parse(row.content),
                }));
                break;
            }

            case 'getManPagesCountBySubcategory': {
                const { mainCategory, subCategory } = params;
                const row = statements.manPagesCountBySubcategory.get(mainCategory, subCategory) as { count: number } | undefined;
                result = row?.count || 0;
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
        const endDbLabel = highlight('[MAN_PAGES_DB]', logColors.dbLabel);
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
