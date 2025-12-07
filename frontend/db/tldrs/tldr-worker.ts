/**
 * Worker thread for SQLite queries using bun:sqlite
 * Handles all query types for the TLDR database
 */

import { Database } from 'bun:sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
import { parentPort, workerData } from 'worker_threads';
import { hashNameToKey } from '../../src/lib/hash-utils';

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
    `SELECT name, count, preview_commands_json FROM cluster WHERE hash = ?`
  ),

  getPage: db.prepare(
    `SELECT html_content, metadata FROM pages WHERE url_hash = ?`
  ),

  // New query for paginated commands in a cluster
  getCommandsByClusterPaginated: db.prepare(
    `SELECT url, metadata FROM pages 
     WHERE cluster_hash = ? 
     ORDER BY url 
     LIMIT ? OFFSET ?`
  ),

  // New query for all clusters (for index)
  getAllClusters: db.prepare(
    `SELECT name, count, preview_commands_json FROM cluster ORDER BY name`
  ),

  // Sitemap query: Union of all URLs
  getSitemapUrls: db.prepare(
    `SELECT url FROM (
       SELECT '/freedevtools/tldr/' as url
       UNION ALL
       SELECT '/freedevtools/tldr/' || name || '/' as url FROM cluster
       UNION ALL
       SELECT url FROM pages
     ) ORDER BY url LIMIT ? OFFSET ?`
  ),
  
  // Count total URLs for sitemap index
  getSitemapCount: db.prepare(
    `SELECT COUNT(*) as count FROM (
       SELECT '/freedevtools/tldr/' as url
       UNION ALL
       SELECT name FROM cluster
       UNION ALL
       SELECT url FROM pages
     )`
  ),
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
        const { platform } = params;
        // Hash of cluster name
        const hash = hashNameToKey(platform);
        const row = statements.getMainPage.get(hash) as { name: string; count: number; preview_commands_json: string } | undefined;
        if (row) {
          result = {
            name: row.name,
            count: row.count,
            preview_commands: JSON.parse(row.preview_commands_json)
          };
        } else {
          result = null;
        }
        break;
      }

      case 'getPage': {
        const { platform, slug } = params;
        const hashKey = `${platform}/${slug}`;
        const hash = hashNameToKey(hashKey);
        const row = statements.getPage.get(hash) as { html_content: string; metadata: string } | undefined;
        if (row) {
          result = {
            html_content: row.html_content,
            metadata: JSON.parse(row.metadata)
          };
        } else {
          result = null;
        }
        break;
      }

      case 'getCommandsByClusterPaginated': {
        const { cluster, limit, offset } = params;
        const clusterHash = hashNameToKey(cluster);
        const rows = statements.getCommandsByClusterPaginated.all(
          clusterHash,
          limit,
          offset
        ) as { url: string; metadata: string }[];
        
        result = rows.map(row => {
          const meta = JSON.parse(row.metadata);
          // Extract name from URL or metadata
          const name = row.url.split('/').filter(Boolean).pop() || '';
          return {
            name,
            url: row.url,
            description: meta.description,
            features: meta.features
          };
        });
        break;
      }

      case 'getAllClusters': {
        const rows = statements.getAllClusters.all() as { name: string; count: number; preview_commands_json: string }[];
        result = rows.map(row => ({
          name: row.name,
          count: row.count,
          preview_commands: JSON.parse(row.preview_commands_json)
        }));
        break;
      }

      case 'getSitemapUrls': {
        const { limit, offset } = params;
        const rows = statements.getSitemapUrls.all(limit, offset) as { url: string }[];
        result = rows.map(row => row.url);
        break;
      }

      case 'getSitemapCount': {
        const row = statements.getSitemapCount.get() as { count: number };
        result = row.count;
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
      `${endTimestamp} ${endDbLabel} Worker ${workerId} END ${type} finished in ${endTime.getTime() - startTime.getTime()
      }ms`
    );
  } catch (error: any) {
    parentPort?.postMessage({
      id,
      error: error.message || String(error),
    });
  }
});
