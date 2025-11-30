/**
 * Worker pool manager for SQLite queries using bun:sqlite
 * Manages 2 worker threads with round-robin query distribution
 */

import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKER_COUNT = 2;
let workers: Worker[] = [];
let workerIndex = 0;
let initPromise: Promise<void> | null = null;
const pendingQueries = new Map<string, { resolve: (value: any) => void; reject: (reason?: any) => void }>();

const logColors = {
    reset: '\u001b[0m',
    timestamp: '\u001b[35m',
    dbLabel: '\u001b[34m',
} as const;

const highlight = (text: string, color: string) => `${color}${text}${logColors.reset}`;
const DB_LABEL = highlight('[MAN_PAGES_DB]', logColors.dbLabel);

interface QueryMessage {
    id: string;
    type: string;
    params: any;
}

interface QueryResponse {
    id: string;
    result?: any;
    error?: string;
}

function getDbPath(): string {
    return path.resolve(process.cwd(), 'db/all_dbs/man-pages-new-db-1.db');
}

/**
 * Initialize the worker pool
 */
async function initWorkers(): Promise<void> {
    if (workers.length > 0) {
        return;
    }

    if (initPromise) {
        return initPromise;
    }

    const initStartTime = Date.now();
    console.log(`[MAN_PAGES_DB] Initializing worker pool with ${WORKER_COUNT} workers...`);

    initPromise = new Promise((resolve, reject) => {
        // Resolve worker path - try multiple locations
        const projectRoot = process.cwd();
        const sourceWorkerPath = path.join(projectRoot, 'db', 'man_pages', 'man-pages-worker');
        const distWorkerPath = path.join(projectRoot, 'dist', 'server', 'chunks', 'db', 'man_pages', 'man-pages-worker');
        const relativeWorkerPath = path.join(__dirname, 'man-pages-worker');

        // Try .js first (for compiled output), then .ts (for development/TypeScript)
        // Priority: dist (built) > source (dev) > relative (fallback)
        let workerPath: string | null = null;

        // Check dist directory first (production build)
        if (existsSync(`${distWorkerPath}.js`)) {
            workerPath = `${distWorkerPath}.js`;
        } else if (existsSync(`${distWorkerPath}.ts`)) {
            workerPath = `${distWorkerPath}.ts`;
        }
        // Check source directory (development)
        else if (existsSync(`${sourceWorkerPath}.js`)) {
            workerPath = `${sourceWorkerPath}.js`;
        } else if (existsSync(`${sourceWorkerPath}.ts`)) {
            workerPath = `${sourceWorkerPath}.ts`;
        }
        // Fallback: try relative to current file location
        else if (existsSync(`${relativeWorkerPath}.js`)) {
            workerPath = `${relativeWorkerPath}.js`;
        } else if (existsSync(`${relativeWorkerPath}.ts`)) {
            workerPath = `${relativeWorkerPath}.ts`;
        }

        if (!workerPath) {
            const error = new Error(
                `Worker file not found. Checked:\n` +
                `  - ${distWorkerPath}.js (production)\n` +
                `  - ${sourceWorkerPath}.ts (development)\n` +
                `  - ${relativeWorkerPath}.ts (fallback)\n` +
                `Make sure the db/man_pages/man-pages-worker.ts file exists and is copied during build.`
            );
            reject(error);
            return;
        }

        const dbPath = getDbPath();

        const pendingWorkers: Worker[] = [];
        let initializedCount = 0;

        for (let i = 0; i < WORKER_COUNT; i++) {
            const worker = new Worker(workerPath, {
                workerData: {
                    dbPath,
                    workerId: i,
                },
            });

            // Increase max listeners to prevent memory leak warnings with concurrent queries
            worker.setMaxListeners(100);

            worker.on('message', (msg) => {
                if (msg.ready) {
                    initializedCount++;
                    if (initializedCount === WORKER_COUNT) {
                        workers = pendingWorkers;
                        const initEndTime = Date.now();
                        console.log(`[MAN_PAGES_DB] Worker pool initialized in ${initEndTime - initStartTime}ms`);
                        initPromise = null;
                        resolve();
                    }
                } else if (msg.id) {
                    const { resolve, reject } = pendingQueries.get(msg.id) || {};
                    if (resolve && reject) {
                        if (msg.error) {
                            reject(new Error(msg.error));
                        } else {
                            resolve(msg.result);
                        }
                        pendingQueries.delete(msg.id);
                    }
                }
            });

            worker.on('error', (err) => {
                console.error(`[MAN_PAGES_DB] Worker ${i} error:`, err);
                initPromise = null;
                reject(err);
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    console.error(`[MAN_PAGES_DB] Worker ${i} exited with code ${code}`);
                }
            });

            pendingWorkers.push(worker);
        }
    });

    return initPromise;
}

/**
 * Execute a query using the worker pool
 */
async function executeQuery(type: string, params: any): Promise<any> {
    await initWorkers();

    // Round-robin worker selection
    const worker = workers[workerIndex % workers.length];
    workerIndex = (workerIndex + 1) % workers.length;

    const startTime = new Date();
    // console.log(`[MAN_PAGES_DB][${startTime.toISOString()}] Dispatching ${type}`);
    return new Promise((resolve, reject) => {
        const queryId = `${Date.now()}-${Math.random()}`;
        const timeout = setTimeout(() => {
            pendingQueries.delete(queryId);
            reject(new Error(`Query timeout: ${type}`));
        }, 30000); // 30 second timeout

        pendingQueries.set(queryId, {
            resolve: (val) => {
                clearTimeout(timeout);
                resolve(val);
            },
            reject: (err) => {
                clearTimeout(timeout);
                reject(err);
            }
        });

        const message: QueryMessage = {
            id: queryId,
            type,
            params,
        };

        worker.postMessage(message);
    });
}

/**
 * Cleanup workers (for graceful shutdown)
 */
export function cleanupWorkers(): Promise<void> {
    return Promise.all(
        workers.map(
            (worker) =>
                new Promise<void>((resolve) => {
                    worker.terminate().then(() => resolve());
                })
        )
    ).then(() => {
        workers = [];
        workerIndex = 0;
        initPromise = null;
    });
}

// Export query functions
export const query = {
    getManPageCategories: () => executeQuery('getManPageCategories', {}),
    getCategories: () => executeQuery('getCategories', {}),
    getSubCategories: () => executeQuery('getSubCategories', {}),
    getOverview: () => executeQuery('getOverview', {}),
    getSubCategoriesByMainCategory: (mainCategory: string) =>
        executeQuery('getSubCategoriesByMainCategory', { mainCategory }),
    getManPagesByCategory: (category: string) =>
        executeQuery('getManPagesByCategory', { category }),
    getManPagesBySubcategory: (category: string, subcategory: string) =>
        executeQuery('getManPagesBySubcategory', { category, subcategory }),
    getManPageByHashId: (hashId: bigint | string) =>
        executeQuery('getManPageByHashId', { hashId }),
    generateManPageStaticPaths: () => executeQuery('generateManPageStaticPaths', {}),
    generateCategoryStaticPaths: () => executeQuery('generateCategoryStaticPaths', {}),
    generateSubcategoryStaticPaths: () => executeQuery('generateSubcategoryStaticPaths', {}),
    getManPageByPath: (category: string, subcategory: string, filename: string) =>
        executeQuery('getManPageByPath', { category, subcategory, filename }),
    getManPageByCommandName: (category: string, subcategory: string, commandName: string) =>
        executeQuery('getManPageByCommandName', { category, subcategory, commandName }),
    generateCommandStaticPaths: () => executeQuery('generateCommandStaticPaths', {}),
    getSubCategoriesCountByMainCategory: (mainCategory: string) =>
        executeQuery('getSubCategoriesCountByMainCategory', { mainCategory }),
    getSubCategoriesByMainCategoryPaginated: (mainCategory: string, limit: number, offset: number) =>
        executeQuery('getSubCategoriesByMainCategoryPaginated', { mainCategory, limit, offset }),
    getTotalManPagesCountByMainCategory: (mainCategory: string) =>
        executeQuery('getTotalManPagesCountByMainCategory', { mainCategory }),
    getManPagesBySubcategoryPaginated: (mainCategory: string, subCategory: string, limit: number, offset: number) =>
        executeQuery('getManPagesBySubcategoryPaginated', { mainCategory, subCategory, limit, offset }),
    getManPagesCountBySubcategory: (mainCategory: string, subCategory: string) =>
        executeQuery('getManPagesCountBySubcategory', { mainCategory, subCategory }),
};

void initWorkers().catch((err) => {
    console.error('[MAN_PAGES_DB] Failed to warm worker pool:', err);
});
