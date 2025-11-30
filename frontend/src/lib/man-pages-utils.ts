import { Database } from 'bun:sqlite';
import path from 'path';
import crypto from 'crypto';
import type {
  Category,
  ManPage,
  Overview,
  RawCategoryRow,
  RawManPageRow,
  RawOverviewRow,
  RawSubCategoryRow,
  SubCategory,
} from '../../db/man_pages/man-pages-schema';

// DB queries
let dbInstance: Database | null = null;

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/all_dbs/man-pages-new-db-1.db');
}

export function getDb() {
  if (dbInstance) return dbInstance;
  const dbPath = getDbPath();
  dbInstance = new Database(dbPath, { readonly: true });
  // Improve read performance for build-time queries
  dbInstance.run('PRAGMA journal_mode = OFF');
  dbInstance.run('PRAGMA synchronous = OFF');
  return dbInstance;
}

export interface ManPageCategory {
  category: string;
  count: number;
  description: string;
}

// Get all man page categories with their descriptions
export function getManPageCategories(): ManPageCategory[] {
  const db = getDb();

  const stmt = db.prepare(`
    SELECT name, count, description
    FROM category 
    ORDER BY name
  `);

  const results = stmt.all() as Array<{
    name: string;
    count: number;
    description: string;
  }>;

  return results.map((row) => ({
    category: row.name,
    count: row.count,
    description: row.description,
  }));
}

// Get categories from the category table
export function getCategories(): Category[] {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT name, count, description, 
           json(keywords) as keywords, path
    FROM category 
    ORDER BY name
  `);

  const results = stmt.all() as RawCategoryRow[];
  return results.map((row) => ({
    ...row,
    keywords: JSON.parse(row.keywords || '[]'),
  })) as Category[];
}

// Get subcategories from the sub_category table
export function getSubCategories(): SubCategory[] {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT hash_id, main_category, name, count, description, 
           json(keywords) as keywords, path
    FROM sub_category 
    ORDER BY name
  `);

  const results = stmt.all() as RawSubCategoryRow[];
  return results.map((row) => ({
    ...row,
    keywords: JSON.parse(row.keywords || '[]'),
  })) as SubCategory[];
}

// Get overview data from the overview table
export function getOverview(): Overview | null {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, total_count
    FROM overview 
    WHERE id = 1
  `);

  const result = stmt.get() as RawOverviewRow | undefined;
  if (!result) return null;

  return {
    id: result.id,
    total_count: result.total_count,
  } as Overview;
}
export function getSubCategoriesByMainCategory(
  mainCategory: string
): SubCategory[] {
  const db = getDb();
  // Query directly from man_pages table to get all subcategories for this main category
  // This ensures we get all subcategories that exist in man_pages, even if they're not in sub_category table
  const stmt = db.prepare(`
    SELECT hash_id, main_category, name, count, description, 
           json(keywords) as keywords, path
    FROM sub_category 
    WHERE main_category = ?
    ORDER BY name
  `);

  const results = stmt.all(mainCategory) as RawSubCategoryRow[];
  return results.map((row) => ({
    name: row.name,
    count: row.count,
    description: row.description,
    keywords: JSON.parse(row.keywords || '[]'),
    path: row.path,
  })) as SubCategory[];
}



// Helper to generate hash ID
function hashUrlToKey(mainCategory: string, subCategory: string, slug: string): bigint {
  const combined = `${mainCategory}${subCategory}${slug}`;
  const hash = crypto.createHash('sha256').update(combined).digest();
  return hash.readBigInt64BE(0);
}

// Get man pages by category
export function getManPagesByCategory(category: string): ManPage[] {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT hash_id, main_category, sub_category, title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE main_category = ?
    ORDER BY title
  `);

  const results = stmt.all(category) as RawManPageRow[];
  return results.map((row) => ({
    ...row,
    content: JSON.parse(row.content || '{}'),
  })) as ManPage[];
}

// Get man pages by category and subcategory
export function getManPagesBySubcategory(
  category: string,
  subcategory: string
): ManPage[] {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT hash_id, main_category, sub_category, title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ?
    ORDER BY title
  `);

  const results = stmt.all(category, subcategory) as RawManPageRow[];
  return results.map((row) => ({
    ...row,
    content: JSON.parse(row.content || '{}'),
  })) as ManPage[];
}

// Get single man page by Hash ID
export function getManPageByHashId(hashId: bigint | string): ManPage | null {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT hash_id, main_category, sub_category, title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE hash_id = ?
  `);

  const result = stmt.get(hashId.toString()) as RawManPageRow | undefined;
  if (!result) return null;

  return {
    ...result,
    content: JSON.parse(result.content || '{}'),
  } as ManPage;
}

// Generate static paths for all man pages
export function generateManPageStaticPaths() {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT hash_id, main_category, sub_category 
    FROM man_pages
  `);

  const rows = stmt.all() as Array<{
    hash_id: bigint;
    main_category: string;
    sub_category: string;
  }>;

  return rows.map((row) => ({
    params: {
      category: row.main_category,
      subcategory: row.sub_category,
      page: row.hash_id.toString(),
    },
  }));
}

// Generate static paths for categories
export function generateCategoryStaticPaths() {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT name 
    FROM category
  `);

  const rows = stmt.all() as Array<{ name: string }>;

  return rows.map((row) => ({
    params: {
      category: row.name,
    },
  }));
}

// Generate static paths for subcategories
export function generateSubcategoryStaticPaths() {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT main_category, name as sub_category 
    FROM sub_category
  `);

  const rows = stmt.all() as Array<{
    main_category: string;
    sub_category: string;
  }>;

  return rows.map((row) => ({
    params: {
      category: row.main_category,
      subcategory: row.sub_category,
    },
  }));
}

// Get man page by category, subcategory and filename
export function getManPageByPath(
  category: string,
  subcategory: string,
  filename: string
): ManPage | null {
  // Try to find by filename first
  const db = getDb();
  const stmt = db.prepare(`
    SELECT hash_id, main_category, sub_category, title, filename, 
           json(content) as content
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ? AND filename = ?
  `);

  const result = stmt.get(
    category,
    subcategory,
    filename
  ) as RawManPageRow | undefined;

  if (!result) return null;

  return {
    ...result,
    content: JSON.parse(result.content || '{}'),
  } as ManPage;
}

// Get man page by command name (first part of title)
export function getManPageByCommandName(
  category: string,
  subcategory: string,
  commandName: string
): ManPage | null {
  const db = getDb();

  // Use hash lookup for O(1) performance
  const hashId = hashUrlToKey(category, subcategory, commandName);

  const stmt = db.prepare(`
    SELECT hash_id, main_category, sub_category, title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE hash_id = ?
  `);

  const result = stmt.get(hashId.toString()) as
    | RawManPageRow
    | undefined;
  if (!result) return null;

  return {
    ...result,
    content: JSON.parse(result.content || '{}'),
  } as ManPage;
}

// Alias for better naming - get man page by slug
export function getManPageBySlug(
  category: string,
  subcategory: string,
  slug: string
): ManPage | null {
  return getManPageByCommandName(category, subcategory, slug);
}

// Generate static paths for individual man pages using command parameter
export function generateCommandStaticPaths(): Array<{
  params: { category: string; subcategory: string; slug: string };
}> {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT main_category, sub_category, slug
    FROM man_pages
    ORDER BY main_category, sub_category, slug
  `);

  const manPages = stmt.all() as Array<{
    main_category: string;
    sub_category: string;
    slug: string;
  }>;

  console.log(`📊 Found ${manPages.length} total man pages in database`);

  const paths = manPages.map((manPage) => ({
    params: {
      category: manPage.main_category,
      subcategory: manPage.sub_category,
      slug: manPage.slug,
    },
  }));

  // Log some examples
  if (paths.length > 0) {
    console.log('🔍 Sample generated paths:', paths.slice(0, 5));
  }

  return paths;
}



// Efficient paginated queries for better performance

export function getSubCategoriesCountByMainCategory(
  mainCategory: string
): number {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT COUNT(*) as count
    FROM sub_category 
    WHERE main_category = ?
  `);

  const result = stmt.get(mainCategory) as { count: number } | undefined;
  return result?.count || 0;
}

export function getSubCategoriesByMainCategoryPaginated(
  mainCategory: string,
  limit: number,
  offset: number
): SubCategory[] {
  const db = getDb();
  // Ensure limit and offset are integers
  const limitInt = Math.floor(limit);
  const offsetInt = Math.floor(offset);

  const stmt = db.prepare(`
    SELECT hash_id, main_category, name, count, description, 
           json(keywords) as keywords, path
    FROM sub_category 
    WHERE main_category = ?
    ORDER BY name
    LIMIT ? OFFSET ?
  `);

  const results = stmt.all(mainCategory, limitInt, offsetInt) as RawSubCategoryRow[];
  return results.map((row) => ({
    ...row,
    keywords: JSON.parse(row.keywords || '[]'),
  })) as SubCategory[];
}

export function getTotalManPagesCountByMainCategory(
  mainCategory: string
): number {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT COUNT(*) as count
    FROM man_pages 
    WHERE main_category = ?
  `);

  const result = stmt.get(mainCategory) as { count: number } | undefined;
  return result?.count || 0;
}

export function getManPagesBySubcategoryPaginated(
  mainCategory: string,
  subCategory: string,
  limit: number,
  offset: number
): ManPage[] {
  const db = getDb();
  // Ensure limit and offset are integers
  const limitInt = Math.floor(limit);
  const offsetInt = Math.floor(offset);

  const stmt = db.prepare(`
    SELECT hash_id, main_category, sub_category, title, slug, filename, content
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ?
    ORDER BY title
    LIMIT ? OFFSET ?
  `);

  const rows = stmt.all(
    mainCategory,
    subCategory,
    limitInt,
    offsetInt
  ) as Array<{
    hash_id: bigint;
    main_category: string;
    sub_category: string;
    title: string;
    slug: string;
    filename: string;
    content: string;
  }>;

  return rows.map((row) => ({
    hash_id: row.hash_id,
    main_category: row.main_category,
    sub_category: row.sub_category,
    title: row.title,
    slug: row.slug,
    filename: row.filename,
    content: JSON.parse(row.content),
  }));
}

export function getManPagesCountBySubcategory(
  mainCategory: string,
  subCategory: string
): number {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT COUNT(*) as count
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ?
  `);

  const result = stmt.get(mainCategory, subCategory) as
    | { count: number }
    | undefined;
  return result?.count || 0;
}

// Re-export types for convenience
export type {
  Category,
  ManPage,
  SubCategory,
} from '../../db/man_pages/man-pages-schema';
