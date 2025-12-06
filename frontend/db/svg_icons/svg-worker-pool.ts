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
    if (
      existsSync(path.join(current, 'package.json')) ||
      existsSync(path.join(current, 'node_modules'))
    ) {
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
// Map to track pending queries per worker (worker index -> Map<queryId, PendingQuery>)
const pendingQueries = new Map<number, Map<string, PendingQuery>>();

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

interface PendingQuery {
  resolve: (value: any) => void;
  reject: (error: Error) => void;
  timeout: NodeJS.Timeout;
  type: string;
  startTime: Date;
}

function getDbPath(): string {
  const projectRoot = findProjectRoot();
  return path.resolve(projectRoot, 'db/all_dbs/svg-icons-db-v1.db');
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
  console.log(
    `[SVG_ICONS_DB] Initializing worker pool with ${WORKER_COUNT} workers...`
  );

  initPromise = new Promise((resolve, reject) => {
    // Resolve worker path - try multiple locations
    const projectRoot = findProjectRoot();
    const sourceWorkerPath = path.join(
      projectRoot,
      'db',
      'svg_icons',
      'svg-worker'
    );
    const distWorkerPath = path.join(
      projectRoot,
      'dist',
      'server',
      'chunks',
      'db',
      'svg_icons',
      'svg-worker'
    );
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

      // Initialize pending queries map for this worker
      pendingQueries.set(i, new Map<string, PendingQuery>());

      // Single message handler for all queries on this worker
      worker.on('message', (msg: QueryResponse | { ready: boolean }) => {
        // Handle worker initialization
        if ('ready' in msg && msg.ready) {
          initializedCount++;
          if (initializedCount === WORKER_COUNT) {
            workers = pendingWorkers;
            const initEndTime = Date.now();
            console.log(
              `[SVG_ICONS_DB] Worker pool initialized in ${initEndTime - initStartTime}ms`
            );
            initPromise = null;
            resolve();
          }
          return;
        }

        // Handle query responses
        const response = msg as QueryResponse;
        const workerPendingQueries = pendingQueries.get(i);
        if (!workerPendingQueries) {
          console.error(`[SVG_ICONS_DB] No pending queries map found for worker ${i}`);
          return;
        }

        const pendingQuery = workerPendingQueries.get(response.id);
        if (!pendingQuery) {
          // Response for a query that was already handled or timed out
          return;
        }

        // Remove from pending map
        workerPendingQueries.delete(response.id);
        clearTimeout(pendingQuery.timeout);

        if (response.error) {
          pendingQuery.reject(new Error(response.error));
        } else {
          const endTime = new Date();
          console.log(
            `[SVG_ICONS_DB][${endTime.toISOString()}] ${pendingQuery.type} completed in ${
              endTime.getTime() - pendingQuery.startTime.getTime()
            }ms`
          );
          pendingQuery.resolve(response.result);
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
  const selectedWorkerIndex = workerIndex % workers.length;
  workerIndex = (workerIndex + 1) % workers.length;
  const worker = workers[selectedWorkerIndex];

  const startTime = new Date();
  console.log(`[SVG_ICONS_DB][${startTime.toISOString()}] Dispatching ${type}`);
  return new Promise((resolve, reject) => {
    const queryId = `${Date.now()}-${Math.random()}`;
    const timeout = setTimeout(() => {
      const workerPendingQueries = pendingQueries.get(selectedWorkerIndex);
      if (workerPendingQueries) {
        workerPendingQueries.delete(queryId);
      }
      reject(new Error(`Query timeout: ${type}`));
    }, 30000); // 30 second timeout

    // Register query in pending map
    const workerPendingQueries = pendingQueries.get(selectedWorkerIndex);
    if (!workerPendingQueries) {
      clearTimeout(timeout);
      reject(new Error(`Worker ${selectedWorkerIndex} not initialized`));
      return;
    }

    workerPendingQueries.set(queryId, {
      resolve,
      reject,
      timeout,
      type,
      startTime,
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
  // Clear all pending queries and reject them
  for (const [workerIdx, workerPendingQueries] of pendingQueries.entries()) {
    for (const [queryId, pendingQuery] of workerPendingQueries.entries()) {
      clearTimeout(pendingQuery.timeout);
      pendingQuery.reject(new Error('Worker pool shutting down'));
    }
    workerPendingQueries.clear();
  }
  pendingQueries.clear();

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
  getClusterByName: (name: string) =>
    executeQuery('getClusterByName', { name }),
  getClusters: () => executeQuery('getClusters', {}),
  getIconByUrlHash: (hash: string) =>
    executeQuery('getIconByUrlHash', { hash }),
  getIconByCategoryAndName: (category: string, iconName: string) =>
    executeQuery('getIconByCategoryAndName', { category, iconName }),
  getSitemapIcons: () => executeQuery('getSitemapIcons', {}),
};

void initWorkers().catch((err) => {
  console.error('[SVG_ICONS_DB] Failed to warm worker pool:', err);
});
