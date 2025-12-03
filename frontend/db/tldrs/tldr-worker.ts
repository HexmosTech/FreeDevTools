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
  totalPages: db.prepare('SELECT total_count FROM overview WHERE id = 1'),
  totalClusters: db.prepare('SELECT COUNT(*) as count FROM cluster'),
  clusters: db.prepare(
    `SELECT name, hash_name, count, description 
     FROM cluster ORDER BY name`
  ),
  clusterByName: db.prepare(
    `SELECT name, hash_name, count, description 
     FROM cluster WHERE hash_name = ?`
  ),
  pagesByCluster: db.prepare(
    `SELECT url_hash, url, cluster, name, platform, title, description,
     more_info_url, keywords, features, examples, raw_content, path
     FROM pages WHERE cluster = ? ORDER BY name`
  ),
  pageByUrlHash: db.prepare(
    `SELECT url_hash, url, cluster, name, platform, title, description,
     more_info_url, keywords, features, examples, raw_content, path
     FROM pages WHERE url_hash = ?`
  ),
  pageByClusterAndName: db.prepare(
    `SELECT url_hash, url, cluster, name, platform, title, description,
     more_info_url, keywords, features, examples, raw_content, path
     FROM pages WHERE cluster = ? AND name = ?`
  ),
  clusterPreviews: db.prepare(
    `SELECT * FROM (
       SELECT url_hash, url, cluster, name, platform, description,
       ROW_NUMBER() OVER (PARTITION BY cluster ORDER BY name) as rn 
       FROM pages
     ) WHERE rn <= 3`
  )
};

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
  console.log(`${timestampLabel} ${dbLabel} Worker ${workerId} handling ${type}`);

  try {
    let result: any;

    switch (type) {
      case 'getTotalPages': {
        const row = statements.totalPages.get() as { total_count: number } | undefined;
        result = row?.total_count ?? 0;
        break;
      }

      case 'getTotalClusters': {
        const row = statements.totalClusters.get() as { count: number } | undefined;
        result = row?.count ?? 0;
        break;
      }

      case 'getClusters': {
        result = statements.clusters.all();
        break;
      }

      case 'getClusterByName': {
        const { hashName } = params;
        result = statements.clusterByName.get(hashName);
        break;
      }

      case 'getPagesByCluster': {
        const { cluster } = params;
        const rows = statements.pagesByCluster.all(cluster) as any[];
        result = rows.map((row) => ({
          ...row,
          keywords: JSON.parse(row.keywords || '[]'),
          features: JSON.parse(row.features || '[]'),
          examples: JSON.parse(row.examples || '[]'),
        }));
        break;
      }

      case 'getPageByClusterAndName': {
        const { cluster, name } = params;
        const row = statements.pageByClusterAndName.get(cluster, name) as any;
        if (!row) {
          result = null;
        } else {
          result = {
            ...row,
            keywords: JSON.parse(row.keywords || '[]'),
            features: JSON.parse(row.features || '[]'),
            examples: JSON.parse(row.examples || '[]'),
          };
        }
        break;
      }
      
      case 'getPageByUrlHash': {
        const { hash } = params;
        const row = statements.pageByUrlHash.get(hash) as any;
        if (!row) {
          result = null;
        } else {
          result = {
            ...row,
            keywords: JSON.parse(row.keywords || '[]'),
            features: JSON.parse(row.features || '[]'),
            examples: JSON.parse(row.examples || '[]'),
          };
        }
        break;
      }

      case 'getClusterPreviews': {
        const rows = statements.clusterPreviews.all() as any[];
        // Group by cluster
        const resultMap: Record<string, any[]> = {};
        rows.forEach(row => {
          if (!resultMap[row.cluster]) {
            resultMap[row.cluster] = [];
          }
          resultMap[row.cluster].push({
            ...row,
            keywords: [],
            features: [],
            examples: [],
            raw_content: '',
            path: '',
            title: '',
            more_info_url: ''
          });
        });
        result = resultMap;
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
      `${endTimestamp} ${endDbLabel} Worker ${workerId} ${type} finished in ${
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
