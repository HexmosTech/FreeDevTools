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
  return path.resolve(process.cwd(), 'db/all_dbs/svg-icons-db.db');
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
  console.log(`[SVG_ICONS_DB] Initializing worker pool with ${WORKER_COUNT} workers...`);

  initPromise = new Promise((resolve, reject) => {
    // Resolve worker path - try multiple locations
    const projectRoot = process.cwd();
    const sourceWorkerPath = path.join(projectRoot, 'db', 'svg_icons', 'svg-worker');
    const distWorkerPath = path.join(projectRoot, 'dist', 'server', 'chunks', 'db', 'svg_icons', 'svg-worker');
    const relativeWorkerPath = path.join(__dirname, 'svg-worker');
    
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
        `Make sure the db/svg_icons/svg-worker.ts file exists and is copied during build.`
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

      worker.on('message', (msg) => {
        if (msg.ready) {
          initializedCount++;
          if (initializedCount === WORKER_COUNT) {
            workers = pendingWorkers;
            const initEndTime = Date.now();
            console.log(`[SVG_ICONS_DB] Worker pool initialized in ${initEndTime - initStartTime}ms`);
            initPromise = null;
            resolve();
          }
        }
      });

      worker.on('error', (err) => {
        console.error(`[SVG_ICONS_DB] Worker ${i} error:`, err);
        initPromise = null;
        reject(err);
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          console.error(`[SVG_ICONS_DB] Worker ${i} exited with code ${code}`);
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
  console.log(`[SVG_ICONS_DB][${startTime.toISOString()}] Dispatching ${type}`);
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
            `[SVG_ICONS_DB][${endTime.toISOString()}] ${type} completed in ${
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
  getTotalIcons: () => executeQuery('getTotalIcons', {}),
  getTotalClusters: () => executeQuery('getTotalClusters', {}),
  getIconsByCluster: (cluster: string, categoryName?: string) =>
    executeQuery('getIconsByCluster', { cluster, categoryName }),
  getClustersWithPreviewIcons: (
    page: number,
    itemsPerPage: number,
    previewIconsPerCluster: number,
    transform: boolean
  ) =>
    executeQuery('getClustersWithPreviewIcons', {
      page,
      itemsPerPage,
      previewIconsPerCluster,
      transform,
    }),
  getClusterByName: (name: string) => executeQuery('getClusterByName', { name }),
  getClusters: () => executeQuery('getClusters', {}),
  getIconByUrlHash: (hash: string) => executeQuery('getIconByUrlHash', { hash }),
  getIconByCategoryAndName: (category: string, iconName: string) =>
    executeQuery('getIconByCategoryAndName', { category, iconName }),
};

void initWorkers().catch((err) => {
  console.error('[SVG_ICONS_DB] Failed to warm worker pool:', err);
});

