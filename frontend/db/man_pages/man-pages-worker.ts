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
    // get all categories under man page
    // url: /man-pages/
    manPageCategories: db.prepare(`
    SELECT name, count, description, path
    FROM category 
    ORDER BY name
  `),
    // get total manpage count
    // url: /man-pages/
    overview: db.prepare(`
    SELECT id, total_count
    FROM overview 
    WHERE id = 1
    `),
    // get man page by hash id
    // url: /man-pages/[category]/[subcategory]/[command]
    manPageByHashId: db.prepare(`
    SELECT title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE hash_id = ?
  `),
    //   for fetching sub categories
    //   for page man-pages/[category]/2
    subCategoriesByMainPaginated: db.prepare(`
    SELECT name, description, count
    FROM sub_category 
    WHERE main_category_hash = ?
    ORDER BY name
    LIMIT ? OFFSET ?
  `),
    //   for fetching total man pages, sub categories count
    //   for page man-pages/[category]/[subcategory]/
    totalSubCategoriesManPagesCount: db.prepare(`
    SELECT count,sub_category_count
    FROM category 
    WHERE hash_id = ?
  `),

    // for fetching man pages by subcategory
    //   used in page: [category]/[subcategory]/index.astro
    manPagesBySubcategoryPaginated: db.prepare(`
    SELECT  title, slug
    FROM man_pages 
    WHERE category_hash = ?
    LIMIT ? OFFSET ?
  `),
    // for fetching total man pages count by subcategory
    //   used in page: [category]/[subcategory]/index.astro
    manPagesCountBySubcategory: db.prepare(`
    SELECT count from sub_category 
    WHERE hash_id = ?
  `),
    // for fetching all man pages paginated
    // used in sitemap generation
    getAllManPagesPaginated: db.prepare(`
    SELECT main_category, sub_category, slug
    FROM man_pages
    ORDER BY hash_id
    LIMIT ? OFFSET ?
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
                    path: string;
                }>;
                result = rows;
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

            case 'getSubCategoriesByMainCategoryPaginated': {
                const { mainCategory, limit, offset } = params;
                const categoryHashId = hashUrlToKey(mainCategory, '', '');
                const limitInt = Math.floor(limit);
                const offsetInt = Math.floor(offset);
                const rows = statements.subCategoriesByMainPaginated.all(categoryHashId, limitInt, offsetInt) as Array<{
                    name: string;
                    description: string;
                    count: number;
                }>;
                result = rows;
                break;
            }

            case 'getTotalSubCategoriesManPagesCount': {
                const { mainCategory } = params;
                const categoryHashId = hashUrlToKey(mainCategory, '', '');
                const row = statements.totalSubCategoriesManPagesCount.get(categoryHashId) as { count: number, sub_category_count: number } | undefined;
                result = { man_pages_count: row?.count || 0, sub_category_count: row?.sub_category_count || 0 };
                break;
            }

            case 'getManPagesList': {
                const { mainCategory, subCategory, limit, offset } = params;
                const categoryHashId = hashUrlToKey(mainCategory, subCategory, '');
                const limitInt = Math.floor(limit);
                const offsetInt = Math.floor(offset);
                const rows = statements.manPagesBySubcategoryPaginated.all(categoryHashId, limitInt, offsetInt) as Array<{
                    title: string;
                    slug: string;
                }>;
                result = rows.map((row) => ({
                    title: row.title,
                    slug: row.slug,
                }));
                break;
            }

            case 'getManPagesCountInSubCategory': {
                const { mainCategory, subCategory } = params;
                const categoryHashId = hashUrlToKey(mainCategory, subCategory, '');
                const row = statements.manPagesCountBySubcategory.get(categoryHashId) as { count: number } | undefined;
                result = row?.count || 0;
                break;
            }

            case 'getAllManPagesPaginated': {
                const { limit, offset } = params;
                const limitInt = Math.floor(limit);
                const offsetInt = Math.floor(offset);
                const rows = statements.getAllManPagesPaginated.all(limitInt, offsetInt) as Array<{
                    main_category: string;
                    sub_category: string;
                    slug: string;
                }>;
                result = rows;
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
