import { Database } from 'bun:sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import type { Banner, RawBannerRow } from './banner-schema';

// DB queries
let dbInstance: Database | null = null;

function findProjectRoot(): string {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
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

function getDbPath(): string {
  const projectRoot = findProjectRoot();
  return path.resolve(projectRoot, 'db/all_dbs/banner-db.db');
}

export function getDb(): Database {
  if (dbInstance) return dbInstance;
  const dbPath = getDbPath();
  
  // Check if database file exists before trying to open it
  if (!existsSync(dbPath)) {
    throw new Error(`Banner database not found at: ${dbPath}`);
  }
  
  dbInstance = new Database(dbPath, { readonly: true });
  
  // Wrap PRAGMAs in try-catch to avoid locking issues with multiple processes
  const setPragma = (pragma: string) => {
    try {
      dbInstance!.run(pragma);
    } catch (e) {
      // Ignore PRAGMA errors - they're optimizations, not critical
    }
  };
  
  // Optimize for read-only performance
  setPragma('PRAGMA journal_mode = OFF');
  setPragma('PRAGMA synchronous = OFF');
  setPragma('PRAGMA mmap_size = 1073741824');
  setPragma('PRAGMA temp_store = MEMORY'); // Use memory for temp tables
  setPragma('PRAGMA query_only = ON'); // Ensure read-only mode
  setPragma('PRAGMA read_uncommitted = ON'); // Skip locking for reads
  
  return dbInstance;
}

export function getAllBanners(limit?: number): Banner[] {
  const db = getDb();
  const query = limit
    ? 'SELECT * FROM banner ORDER BY product_name, language LIMIT ?'
    : 'SELECT * FROM banner ORDER BY product_name, language';
  const stmt = limit ? db.prepare(query) : db.prepare(query);
  const results = (limit ? stmt.all(limit) : stmt.all()) as RawBannerRow[];
  return results as Banner[];
}

export function getBannersByLanguage(language: string, limit = 10): Banner[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT * FROM banner WHERE language = ? ORDER BY product_name LIMIT ?`
  );
  const results = stmt.all(language, limit) as RawBannerRow[];
  return results as Banner[];
}

export function getBannersByProduct(productName: string, limit = 10): Banner[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT * FROM banner WHERE product_name = ? ORDER BY language LIMIT ?`
  );
  const results = stmt.all(productName, limit) as RawBannerRow[];
  return results as Banner[];
}

export function getBannersByCampaign(
  campaignName: string,
  limit = 10
): Banner[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT * FROM banner WHERE campaign_name = ? ORDER BY product_name, language LIMIT ?`
  );
  const results = stmt.all(campaignName, limit) as RawBannerRow[];
  return results as Banner[];
}

export function getBannersBySize(size: string, limit = 10): Banner[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT * FROM banner WHERE size = ? ORDER BY product_name, language LIMIT ?`
  );
  const results = stmt.all(size, limit) as RawBannerRow[];
  return results as Banner[];
}

export function getBannerById(id: number): Banner | null {
  const db = getDb();
  const stmt = db.prepare('SELECT * FROM banner WHERE id = ?');
  const result = stmt.get(id) as RawBannerRow | undefined;
  if (!result) return null;
  return result as Banner;
}

export function getTotalBanners(): number {
  const db = getDb();
  const row = db.prepare('SELECT COUNT(*) as count FROM banner').get() as
    | { count: number }
    | undefined;
  return row?.count ?? 0;
}

export function getLanguages(): string[] {
  const db = getDb();
  const stmt = db.prepare(
    'SELECT DISTINCT language FROM banner WHERE language != "" ORDER BY language'
  );
  const results = stmt.all() as { language: string }[];
  return results.map((row) => row.language);
}

export function getProducts(): string[] {
  const db = getDb();
  const stmt = db.prepare(
    'SELECT DISTINCT product_name FROM banner ORDER BY product_name'
  );
  const results = stmt.all() as { product_name: string }[];
  return results.map((row) => row.product_name);
}

export function getCampaigns(): string[] {
  const db = getDb();
  const stmt = db.prepare(
    'SELECT DISTINCT campaign_name FROM banner WHERE campaign_name != "" ORDER BY campaign_name'
  );
  const results = stmt.all() as { campaign_name: string }[];
  return results.map((row) => row.campaign_name);
}

export function getSizes(): string[] {
  const db = getDb();
  const stmt = db.prepare(
    'SELECT DISTINCT size FROM banner WHERE size != "" ORDER BY size'
  );
  const results = stmt.all() as { size: string }[];
  return results.map((row) => row.size);
}

export function getRandomBanner(): Banner | null {
  const db = getDb();
  const total = getTotalBanners();
  if (total === 0) return null;

  // Get random ID between 1 and total
  const randomId = Math.floor(Math.random() * total) + 1;

  // Fetch banner by random offset
  const stmt = db.prepare('SELECT * FROM banner ORDER BY id LIMIT 1 OFFSET ?');
  const offset = Math.floor(Math.random() * total);
  const result = stmt.get(offset) as RawBannerRow | undefined;

  if (!result) return null;
  return result as Banner;
}

export function getRandomBannerByType(linkType: string): Banner | null {
  const db = getDb();
  const stmt = db.prepare(
    'SELECT COUNT(*) as count FROM banner WHERE link_type = ?'
  );
  const countResult = stmt.get(linkType) as { count: number } | undefined;
  const total = countResult?.count ?? 0;

  if (total === 0) return null;

  // Fetch banner by random offset filtered by link_type
  const selectStmt = db.prepare(
    'SELECT * FROM banner WHERE link_type = ? ORDER BY id LIMIT 1 OFFSET ?'
  );
  const offset = Math.floor(Math.random() * total);
  const result = selectStmt.get(linkType, offset) as RawBannerRow | undefined;

  if (!result) return null;
  return result as Banner;
}
