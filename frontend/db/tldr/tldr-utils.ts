import Database from 'bun:sqlite';
import crypto from 'crypto';
import path from 'path';
import type {
  Cluster,
  Overview,
  Page,
  RawClusterRow,
  RawPageRow,
} from './tldr-schema';

let dbInstance: Database | null = null;

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/all_dbs/tldr-db.db');
}

// Initialize the database connection
function getDb(): Database {
  if (dbInstance) {
    return dbInstance;
  }

  const dbPath = getDbPath();
  console.log(`[TLDR_DB] Opening database at ${dbPath}`);
  
  // Open database in read-write mode to allow WAL configuration if needed,
  // though for querying we mostly need read access.
  // bun:sqlite opens in read/write by default if file exists.
  dbInstance = new Database(dbPath);

  // Apply performance optimizations
  try {
    dbInstance.run('PRAGMA journal_mode = WAL');
    dbInstance.run('PRAGMA cache_size = -64000'); // 64MB
    dbInstance.run('PRAGMA mmap_size = 268435456'); // 256MB
    dbInstance.run('PRAGMA temp_store = MEMORY');
    dbInstance.run('PRAGMA read_uncommitted = ON');
    dbInstance.run('PRAGMA query_only = ON'); // Read-only mode for safety
  } catch (err) {
    console.warn(`[TLDR_DB] Failed to set some pragmas:`, err);
  }

  return dbInstance;
}

// Hashing functions
function createFullHash(category: string, lastPath: string): string {
  // Normalize input: remove leading/trailing slashes, lowercase
  const normCategory = category.trim().toLowerCase();
  const normLastPath = lastPath.trim().toLowerCase();
  
  // Create unique string
  const uniqueStr = `${normCategory}/${normLastPath}`;
  
  // Compute SHA-256 hash
  return crypto.createHash('sha256').update(uniqueStr).digest('hex');
}

function get8Bytes(fullHash: string): bigint {
  // Take first 16 hex chars (8 bytes)
  const hexPart = fullHash.substring(0, 16);
  // Convert to BigInt (signed 64-bit)
  const buffer = Buffer.from(hexPart, 'hex');
  return buffer.readBigInt64BE(0);
}

// Helper to wrap synchronous result in Promise for compatibility
async function asyncResult<T>(fn: () => T): Promise<T> {
  return fn();
}

export async function getTotalPages(): Promise<number> {
  return asyncResult(() => {
    const db = getDb();
    const row = db.query('SELECT total_count FROM overview WHERE id = 1').get() as Overview | null;
    return row?.total_count ?? 0;
  });
}

export async function getTotalClusters(): Promise<number> {
  return asyncResult(() => {
    const db = getDb();
    const row = db.query('SELECT COUNT(*) as count FROM cluster').get() as { count: number } | null;
    return row?.count ?? 0;
  });
}

export async function getAllClusters(): Promise<Cluster[]> {
  return asyncResult(() => {
    const db = getDb();
    const rows = db.query('SELECT name, count, description FROM cluster ORDER BY name').all() as RawClusterRow[];
    return rows as Cluster[];
  });
}

export async function getPagesByCluster(cluster: string): Promise<Page[]> {
  return asyncResult(() => {
    const db = getDb();
    const rows = db.query(
      `SELECT url_hash as id, cluster, name, platform, title, description,
       more_info_url, keywords, features, examples, raw_content, path
       FROM url_lookup WHERE cluster = ? ORDER BY name`
    ).all(cluster) as RawPageRow[];

    return rows.map((row) => ({
      ...row,
      keywords: JSON.parse(row.keywords || '[]'),
      features: JSON.parse(row.features || '[]'),
      examples: JSON.parse(row.examples || '[]'),
    })) as Page[];
  });
}

export async function getClusterByName(name: string): Promise<Cluster | null> {
  return asyncResult(() => {
    const db = getDb();
    const row = db.query(
      `SELECT name, count, description FROM cluster WHERE name = ?`
    ).get(name) as RawClusterRow | null;

    if (!row) return null;
    return row as Cluster;
  });
}

export async function getPageByClusterAndName(cluster: string, name: string): Promise<Page | null> {
  return asyncResult(() => {
    const db = getDb();
    
    // Calculate hash for direct lookup
    const fullHash = createFullHash(cluster, name);
    const urlHash = get8Bytes(fullHash);
    
    const row = db.query(
      `SELECT * FROM url_lookup WHERE url_hash = ?`
    ).get(urlHash.toString()) as RawPageRow | null;

    if (!row) return null;

    return {
      ...row,
      keywords: JSON.parse(row.keywords || '[]'),
      features: JSON.parse(row.features || '[]'),
      examples: JSON.parse(row.examples || '[]'),
    } as Page;
  });
}

export async function getClusterPreviews(clusters: Cluster[]): Promise<Map<string, Page[]>> {
  return asyncResult(() => {
    const db = getDb();
    // Efficiently fetch top 3 commands for all clusters using window function
    const rows = db.query(
      `SELECT * FROM (
         SELECT url_hash as id, cluster, name, platform, description,
         ROW_NUMBER() OVER (PARTITION BY cluster ORDER BY name) as rn 
         FROM url_lookup
       ) WHERE rn <= 3`
    ).all() as any[];
    
    const resultMap = new Map<string, Page[]>();
    
    // Group by cluster
    rows.forEach(row => {
      if (!resultMap.has(row.cluster)) {
        resultMap.set(row.cluster, []);
      }
      resultMap.get(row.cluster)?.push({
        ...row,
        keywords: [],
        features: [],
        examples: [],
        raw_content: '',
        path: '',
        title: '',
        more_info_url: ''
      } as Page);
    });
    
    return resultMap;
  });
}