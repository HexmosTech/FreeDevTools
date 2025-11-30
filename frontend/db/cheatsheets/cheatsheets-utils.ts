import path from 'path';
import Database from 'bun:sqlite';
import crypto from 'crypto';
import type {
  Category,
  Cheatsheet,
  Overview,
  RawCategoryRow,
  RawCheatsheetRow,
} from './cheatsheets-schema';

// Simple database connection
let dbInstance: Database | null = null;

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/all_dbs/cheatsheets-db.db');
}

export function getDb() {
  if (dbInstance) return dbInstance;
  const dbPath = getDbPath();
  dbInstance = new Database(dbPath, { readonly: true });
  dbInstance.run('PRAGMA journal_mode = WAL');
  dbInstance.run('PRAGMA cache_size = -64000'); // 64MB cache per connection
  dbInstance.run('PRAGMA temp_store = MEMORY');
  dbInstance.run('PRAGMA mmap_size = 268435456'); // 256MB memory-mapped I/O
  dbInstance.run('PRAGMA query_only = ON'); // Read-only mode
  dbInstance.run('PRAGMA page_size = 4096'); // Optimal page size
  return dbInstance;
}

export function getTotalCheatsheets(): number {
  const db = getDb();
  const stmt = db.prepare('SELECT total_count FROM overview WHERE id = 1');
  const result = stmt.get() as Overview | undefined;
  return result?.total_count ?? 0;
}

export function getTotalCategories(): number {
  const db = getDb();
  const stmt = db.prepare('SELECT COUNT(*) as count FROM category');
  const result = stmt.get() as { count: number } | undefined;
  return result?.count ?? 0;
}

export interface CategoryWithPreviews extends Category {
  cheatsheetCount: number;
  previewCheatsheets: Array<{ slug: string }>;
}

export function getAllCategories(
  page: number = 1,
  itemsPerPage: number = 30
): CategoryWithPreviews[] {
  const db = getDb();
  const offset = (page - 1) * itemsPerPage;

  const stmt = db.prepare(`
    SELECT 
      c.id, c.name, c.slug, c.description, 
      (SELECT COUNT(*) FROM cheatsheet WHERE category = c.slug) as cheatsheetCount,
      (SELECT json_group_array(json_object('slug', slug)) 
       FROM (SELECT slug FROM cheatsheet WHERE category = c.slug ORDER BY slug LIMIT 3)
      ) as previewCheatsheets
    FROM category c
    ORDER BY c.name
    LIMIT ? OFFSET ?
  `);

  const rows = stmt.all(itemsPerPage, offset) as any[];

  return rows.map((row) => ({
    ...row,
    previewCheatsheets: JSON.parse(row.previewCheatsheets || '[]'),
  })) as CategoryWithPreviews[];
}

export function getCheatsheetsByCategory(categorySlug: string): Cheatsheet[] {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT hash_id, category, slug, content, title, description, 
           json(keywords) as keywords
    FROM cheatsheet 
    WHERE category = ? 
    ORDER BY slug
  `);

  const rows = stmt.all(categorySlug) as RawCheatsheetRow[];
  return rows.map((row) => ({
    ...row,
    keywords: JSON.parse(row.keywords || '[]'),
  })) as unknown as Cheatsheet[];
}

export function getCategoryBySlug(slug: string): Category | null {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, name, slug, description, 
           json(keywords) as keywords, json(features) as features
    FROM category 
    WHERE slug = ?
  `);

  const row = stmt.get(slug) as RawCategoryRow | undefined;
  if (!row) return null;

  return {
    ...row,
    keywords: JSON.parse(row.keywords || '[]'),
    features: JSON.parse(row.features || '[]'),
  } as Category;
}

function hashUrlToKey(category: string, slug: string): bigint {
  const combined = `${category}${slug}`;
  const hash = crypto.createHash('sha256').update(combined).digest();
  return hash.readBigInt64BE(0);
}

export function getCheatsheetByCategoryAndSlug(
  categorySlug: string,
  cheatsheetSlug: string
): Cheatsheet | null {
  const db = getDb();
  const hashId = hashUrlToKey(categorySlug, cheatsheetSlug);

  const stmt = db.prepare(`
    SELECT hash_id, category, slug, content, title, description, 
           json(keywords) as keywords
    FROM cheatsheet 
    WHERE hash_id = ?
  `);

  const row = stmt.get(hashId.toString()) as RawCheatsheetRow | undefined;
  if (!row) return null;

  return {
    ...row,
    keywords: JSON.parse(row.keywords || '[]'),
  } as unknown as Cheatsheet;
}
