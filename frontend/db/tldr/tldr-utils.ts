import path from 'path';
import sqlite3 from 'sqlite3';
import type {
    Cluster,
    Overview,
    Page,
    RawClusterRow,
    RawPageRow,
} from './tldr-schema';

// Connection pool for parallel queries
const POOL_SIZE = 10; // Number of database connections in the pool
let dbPool: sqlite3.Database[] = [];
let poolInitPromise: Promise<sqlite3.Database[]> | null = null;
let poolIndex = 0; // Round-robin counter

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/all_dbs/tldr-db.db');
}

// Helper to run pragma statements
function runPragma(db: sqlite3.Database, pragma: string): Promise<void> {
  return new Promise((resolve, reject) => {
    db.run(`PRAGMA ${pragma}`, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Initialize a single database connection
function initDbConnection(): Promise<sqlite3.Database> {
  const dbPath = getDbPath();
  return new Promise((resolve, reject) => {
    // Open in READWRITE mode to enable WAL, then use for reads
    // WAL mode requires write access to create the WAL file
    const db = new sqlite3.Database(
      dbPath,
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) {
          reject(err);
          return;
        }

        // Enable WAL mode first (requires write access)
        // Then set other optimizations
        Promise.all([
          runPragma(db, 'journal_mode = WAL'), // Enable WAL for concurrent reads
          runPragma(db, 'cache_size = -64000'), // 64MB cache (negative = KB, so -64000 = 64MB)
          runPragma(db, 'mmap_size = 524288000'), // 500MB memory-mapped I/O
          runPragma(db, 'temp_store = MEMORY'), // Use memory for temp tables
          runPragma(db, 'read_uncommitted = ON'), // Skip locking for reads
          runPragma(db, 'page_size = 4096'), // Ensure optimal page size
        ])
          .then(() => {
            // Enable parallel execution mode (sticky - applies to all queries on this connection)
            db.parallelize();
            resolve(db);
          })
          .catch((pragmaErr) => {
            console.warn(`[TLDR_DB] Some pragmas failed, continuing anyway:`, pragmaErr);
            db.parallelize();
            resolve(db);
          });
      }
    );
  });
}

// Initialize the connection pool
async function initPool(): Promise<sqlite3.Database[]> {
  if (dbPool.length > 0) {
    return dbPool;
  }

  if (poolInitPromise) {
    return poolInitPromise;
  }

  const poolInitStartTime = Date.now();
  console.log(`[TLDR_DB] Initializing connection pool with ${POOL_SIZE} connections...`);

  poolInitPromise = Promise.all(
    Array.from({ length: POOL_SIZE }, () => initDbConnection())
  ).then((connections) => {
    dbPool = connections;
    const poolInitEndTime = Date.now();
    console.log(`[TLDR_DB] Connection pool initialized in ${poolInitEndTime - poolInitStartTime}ms`);
    poolInitPromise = null;
    return dbPool;
  }).catch((err) => {
    poolInitPromise = null;
    throw err;
  });

  return poolInitPromise;
}

// Get a database connection from the pool (round-robin)
export async function getDb(): Promise<sqlite3.Database> {
  const pool = await initPool();
  // Round-robin selection for load balancing
  const index = poolIndex % pool.length;
  poolIndex = (poolIndex + 1) % pool.length;
  return pool[index];
}

export async function getTotalPages(): Promise<number> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    db.get('SELECT total_count FROM overview WHERE id = 1', (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      const result = row as Overview | undefined;
      resolve(result?.total_count ?? 0);
    });
  });
}

export async function getTotalClusters(): Promise<number> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    db.get('SELECT COUNT(*) as count FROM cluster', (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      const result = row as { count: number } | undefined;
      resolve(result?.count ?? 0);
    });
  });
}

export async function getAllClusters(): Promise<Cluster[]> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT name, count, description FROM cluster ORDER BY name',
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const results = (rows || []) as RawClusterRow[];
        resolve(results as Cluster[]);
      }
    );
  });
}

export async function getPagesByCluster(cluster: string): Promise<Page[]> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT id, cluster, name, platform, title, description,
       more_info_url, keywords, features, examples, raw_content, path
       FROM page WHERE cluster = ? ORDER BY name`,
      [cluster],
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const results = (rows || []) as RawPageRow[];
        resolve(results.map((row) => ({
          ...row,
          keywords: JSON.parse(row.keywords || '[]'),
          features: JSON.parse(row.features || '[]'),
          examples: JSON.parse(row.examples || '[]'),
        })) as Page[]);
      }
    );
  });
}

export async function getClusterByName(name: string): Promise<Cluster | null> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT name, count, description FROM cluster WHERE name = ?`,
      [name],
      (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        const result = row as RawClusterRow | undefined;
        if (!result) {
          resolve(null);
          return;
        }
        resolve(result as Cluster);
      }
    );
  });
}

export async function getPageByClusterAndName(cluster: string, name: string): Promise<Page | null> {
  const db = await getDb();
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT id, cluster, name, platform, title, description,
       more_info_url, keywords, features, examples, raw_content, path
       FROM page WHERE cluster = ? AND name = ?`,
      [cluster, name],
      (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        const result = row as RawPageRow | undefined;
        if (!result) {
          resolve(null);
          return;
        }
        resolve({
          ...result,
          keywords: JSON.parse(result.keywords || '[]'),
          features: JSON.parse(result.features || '[]'),
          examples: JSON.parse(result.examples || '[]'),
        } as Page);
      }
    );
  });
}
