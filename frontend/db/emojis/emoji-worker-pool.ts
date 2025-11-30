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

// Find project root by looking for package.json or node_modules
function findProjectRoot(): string {
  let current = __dirname;
  while (current !== path.dirname(current)) {
    if (existsSync(path.join(current, 'package.json')) || existsSync(path.join(current, 'node_modules'))) {
      return current;
    }
    current = path.dirname(current);
  }
  // Fallback to process.cwd() if we can't find project root
  return process.cwd();
}

const WORKER_COUNT = 2;
let workers: Worker[] = [];
let workerIndex = 0;
let initPromise: Promise<void> | null = null;

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
  const projectRoot = findProjectRoot();
  return path.resolve(projectRoot, 'db/all_dbs/emoji-db.db');
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
  console.log(`[EMOJI_DB] Initializing worker pool with ${WORKER_COUNT} workers...`);

  initPromise = new Promise((resolve, reject) => {
    // Resolve worker path - try multiple locations
    const projectRoot = findProjectRoot();
    const sourceWorkerPath = path.join(projectRoot, 'db', 'emojis', 'emoji-worker');
    const distWorkerPath = path.join(projectRoot, 'dist', 'server', 'chunks', 'db', 'emojis', 'emoji-worker');
    const relativeWorkerPath = path.join(__dirname, 'emoji-worker');
    
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
        `Make sure the db/emojis/emoji-worker.ts file exists and is copied during build.`
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
            console.log(`[EMOJI_DB] Worker pool initialized in ${initEndTime - initStartTime}ms`);
            initPromise = null;
            resolve();
          }
        }
      });

      worker.on('error', (err) => {
        console.error(`[EMOJI_DB] Worker ${i} error:`, err);
        initPromise = null;
        reject(err);
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          console.error(`[EMOJI_DB] Worker ${i} exited with code ${code}`);
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
  console.log(`[EMOJI_DB][${startTime.toISOString()}] Dispatching ${type}`);
  return new Promise((resolve, reject) => {
    const queryId = `${Date.now()}-${Math.random()}`;
    const timeout = setTimeout(() => {
      reject(new Error(`Query timeout: ${type}`));
    }, 30000); // 30 second timeout

    const messageHandler = (response: QueryResponse) => {
      if (response.id === queryId) {
        clearTimeout(timeout);
        worker.off('message', messageHandler);
        if (response.error) {
          reject(new Error(response.error));
        } else {
          const endTime = new Date();
          console.log(
            `[EMOJI_DB][${endTime.toISOString()}] ${type} completed in ${
              endTime.getTime() - startTime.getTime()
            }ms`
          );
          resolve(response.result);
        }
      }
    };

    worker.on('message', messageHandler);

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
  getEmojiBySlug: (slug: string) => executeQuery('getEmojiBySlug', { slug }),
  getEmojiBySlugHash: (slugHash: string) => executeQuery('getEmojiBySlugHash', { slugHash }),
  getTotalEmojis: () => executeQuery('getTotalEmojis', {}),
  getEmojiCategories: () => executeQuery('getEmojiCategories', {}),
  getCategoriesWithPreviewEmojis: (previewEmojisPerCategory: number) =>
    executeQuery('getCategoriesWithPreviewEmojis', { previewEmojisPerCategory }),
  getAppleCategoriesWithPreviewEmojis: (previewEmojisPerCategory: number, excludedSlugs: string[]) =>
    executeQuery('getAppleCategoriesWithPreviewEmojis', { previewEmojisPerCategory, excludedSlugs }),
  getDiscordCategoriesWithPreviewEmojis: (previewEmojisPerCategory: number, excludedSlugs: string[]) =>
    executeQuery('getDiscordCategoriesWithPreviewEmojis', { previewEmojisPerCategory, excludedSlugs }),
  getEmojisByCategoryPaginated: (category: string, page: number, itemsPerPage: number, vendor?: string, excludedSlugs?: string[]) =>
    executeQuery('getEmojisByCategoryPaginated', { category, page, itemsPerPage, vendor, excludedSlugs }),
  getEmojisByCategoryWithDiscordImagesPaginated: (category: string, page: number, itemsPerPage: number, excludedSlugs?: string[]) =>
    executeQuery('getEmojisByCategoryWithDiscordImagesPaginated', { category, page, itemsPerPage, excludedSlugs }),
  getEmojisByCategoryWithAppleImagesPaginated: (category: string, page: number, itemsPerPage: number, excludedSlugs?: string[]) =>
    executeQuery('getEmojisByCategoryWithAppleImagesPaginated', { category, page, itemsPerPage, excludedSlugs }),
  getEmojiImages: (slug: string) => executeQuery('getEmojiImages', { slug }),
  getDiscordEmojiBySlug: (slug: string) => executeQuery('getDiscordEmojiBySlug', { slug }),
  getAppleEmojiBySlug: (slug: string) => executeQuery('getAppleEmojiBySlug', { slug }),
  fetchImageFromDB: (slug: string, filename: string) => executeQuery('fetchImageFromDB', { slug, filename }),
  getSitemapEmojis: () => executeQuery('getSitemapEmojis', {}),
  getSitemapAppleEmojis: (excludedSlugs: string[]) => executeQuery('getSitemapAppleEmojis', { excludedSlugs }),
  getSitemapDiscordEmojis: (excludedSlugs: string[]) => executeQuery('getSitemapDiscordEmojis', { excludedSlugs }),
};

void initWorkers().catch((err) => {
  console.error('[EMOJI_DB] Failed to warm worker pool:', err);
});

