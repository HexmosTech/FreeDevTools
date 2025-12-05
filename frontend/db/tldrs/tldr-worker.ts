/**
 * Worker thread for SQLite queries using bun:sqlite
 * Handles all query types for the TLDR database
 */

import { Database } from 'bun:sqlite';
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
    // Ignore PRAGMA errors
  }
};

setPragma('PRAGMA cache_size = -64000'); // 64MB cache per connection
setPragma('PRAGMA temp_store = MEMORY');
setPragma('PRAGMA mmap_size = 268435456'); // 256MB memory-mapped I/O
setPragma('PRAGMA query_only = ON'); // Read-only mode
setPragma('PRAGMA page_size = 4096'); // Optimal page size

const statements = {
  getOverview: db.prepare('SELECT total_count FROM overview WHERE id = 1'),
  
  getMainPage: db.prepare(
    `SELECT data, total_count FROM main_pages WHERE hash = ?`
  ),

  getPage: db.prepare(
    `SELECT html_content, metadata FROM pages WHERE url_hash = ?`
  ),
};

// clusterPreviews is taking 0.5 seconds need to improve db structure for this
// pageByClusterAndName is taking 1 ms 


// Signal ready
parentPort?.postMessage({ ready: true });

interface QueryMessage {
  id: string;
  type: string;
  params: any;
}

// Handle incoming queries
parentPort?.on('message', (message: QueryMessage) => {
  const { id, type, params } = message;
  const startTime = new Date();
  const timestampLabel = highlight(`[${startTime.toISOString()}]`, logColors.timestamp);
  const dbLabel = highlight('[TLDR_DB]', logColors.dbLabel);
  console.log(`${timestampLabel} ${dbLabel} Worker ${workerId} START ${type} params=${JSON.stringify(params)}`);

  try {
    let result: any;

    switch (type) {
      case 'getOverview': {
        const row = statements.getOverview.get() as { total_count: number } | undefined;
        result = row?.total_count ?? 0;
        break;
      }

      case 'getMainPage': {
        const { hash } = params;
        const row = statements.getMainPage.get(hash) as { data: string; total_count: number } | undefined;
        if (row) {
          result = {
            ...JSON.parse(row.data),
            total_count: row.total_count
          };
        } else {
          result = null;
        }
        break;
      }

      case 'getPage': {
        const { hash } = params;
        const row = statements.getPage.get(hash) as { html_content: string; metadata: string } | undefined;
        if (row) {
          result = {
            html_content: row.html_content,
            ...JSON.parse(row.metadata)
          };
        } else {
          result = null;
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
    const endDbLabel = highlight('[TLDR_DB]', logColors.dbLabel);
    console.log(
      `${endTimestamp} ${endDbLabel} Worker ${workerId} END ${type} finished in ${
        endTime.getTime() - startTime.getTime()
      }ms`
    );
  } catch (error: any) {
    parentPort?.postMessage({
      id,
      error: error.message || String(error),
    });
  }
});
