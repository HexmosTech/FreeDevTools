import path from 'path';
import sqlite3 from 'sqlite3';
import crypto from 'crypto';
import type {
  Category,
  Cheatsheet,
  Overview,
  RawCategoryRow,
  RawCheatsheetRow,
} from './cheatsheets-schema';

// Simple database connection
let dbInstance: sqlite3.Database | null = null;

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/all_dbs/cheatsheets-db.db');
}

export async function getDb(): Promise<sqlite3.Database> {
  if (dbInstance) {
    return dbInstance;
  }

  const dbPath = getDbPath();
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(
      dbPath,
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        dbInstance = db;
        resolve(db);
      }
    );
  });
}

export async function getTotalCheatsheets(): Promise<number> {
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

export async function getTotalCategories(): Promise<number> {
  const db = await getDb();

  return new Promise((resolve, reject) => {
    db.get('SELECT COUNT(*) as count FROM category', (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      const result = row as { count: number } | undefined;
      resolve(result?.count ?? 0);
    });
  });
}

export interface CategoryWithPreviews extends Category {
  cheatsheetCount: number;
  previewCheatsheets: Array<{ slug: string }>;
}

export async function getAllCategories(
  page: number = 1,
  itemsPerPage: number = 30
): Promise<CategoryWithPreviews[]> {
  const db = await getDb();
  const offset = (page - 1) * itemsPerPage;

  return new Promise((resolve, reject) => {
    db.all(
      `SELECT 
         c.id, c.name, c.slug, c.description, 
         (SELECT COUNT(*) FROM cheatsheet WHERE category = c.slug) as cheatsheetCount,
         (SELECT json_group_array(json_object('slug', slug)) 
          FROM (SELECT slug FROM cheatsheet WHERE category = c.slug ORDER BY slug LIMIT 3)
         ) as previewCheatsheets
       FROM category c
       ORDER BY c.name
       LIMIT ? OFFSET ?`,
      [itemsPerPage, offset],
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const results = (rows || []) as any[];
        resolve(results.map((row) => ({
          ...row,
          previewCheatsheets: JSON.parse(row.previewCheatsheets || '[]'),
        })) as CategoryWithPreviews[]);
      }
    );
  });
}

export async function getCheatsheetsByCategory(categorySlug: string): Promise<Cheatsheet[]> {
  const db = await getDb();

  return new Promise((resolve, reject) => {
    db.all(
      `SELECT hash_id, category, slug, content, title, description, 
       json(keywords) as keywords
       FROM cheatsheet WHERE category = ? ORDER BY slug`,
      [categorySlug],
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const results = (rows || []) as RawCheatsheetRow[];
        resolve(results.map((row) => ({
          ...row,
          keywords: JSON.parse(row.keywords || '[]') as string[],
        })) as unknown as Cheatsheet[]);
      }
    );
  });
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const db = await getDb();

  return new Promise((resolve, reject) => {
    db.get(
      `SELECT id, name, slug, description, 
       json(keywords) as keywords, json(features) as features
       FROM category WHERE slug = ?`,
      [slug],
      (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        const result = row as RawCategoryRow | undefined;
        if (!result) {
          resolve(null);
          return;
        }
        resolve({
          ...result,
          keywords: JSON.parse(result.keywords || '[]') as string[],
          features: JSON.parse(result.features || '[]') as string[],
        } as Category);
      }
    );
  });
}



function hashUrlToKey(category: string, slug: string): bigint {
  const combined = `${category}${slug}`;
  const hash = crypto.createHash('sha256').update(combined).digest();
  return hash.readBigInt64BE(0);
}

export async function getCheatsheetByCategoryAndSlug(
  categorySlug: string,
  cheatsheetSlug: string
): Promise<Cheatsheet | null> {
  const db = await getDb();
  const hashId = hashUrlToKey(categorySlug, cheatsheetSlug);



  return new Promise((resolve, reject) => {
    db.get(
      `SELECT hash_id, category, slug, content, title, description, 
       json(keywords) as keywords
       FROM cheatsheet WHERE hash_id = ?`,
      [hashId.toString()],
      (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        const result = row as RawCheatsheetRow | undefined;
        if (!result) {
          resolve(null);
          return;
        }
        resolve({
          ...result,
          keywords: JSON.parse(result.keywords || '[]') as string[],
        } as unknown as Cheatsheet);
      }
    );
  });
}
