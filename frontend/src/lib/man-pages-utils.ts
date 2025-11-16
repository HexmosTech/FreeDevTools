import Database from 'better-sqlite3';
import path from 'path';
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
let dbInstance: any = null;

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/all_dbs/man-pages-db.db');
}

export function getDb() {
  if (dbInstance) return dbInstance;
  const dbPath = getDbPath();
  dbInstance = new Database(dbPath, { readonly: true });
  // Improve read performance for build-time queries
  dbInstance.pragma('journal_mode = OFF');
  dbInstance.pragma('synchronous = OFF');
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
    SELECT name, count, description, 
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
    SELECT 
      sub_category as name,
      COUNT(*) as count,
      'Subcategory for ' || sub_category as description,
      json_array(sub_category) as keywords,
      '/' || sub_category as path
    FROM man_pages 
    WHERE main_category = ?
    GROUP BY sub_category
    ORDER BY sub_category
  `);

  const results = stmt.all(mainCategory) as Array<{
    name: string;
    count: number;
    description: string;
    keywords: string;
    path: string;
  }>;

  return results.map((row) => ({
    name: row.name,
    count: row.count,
    description: row.description,
    keywords: JSON.parse(row.keywords || '[]'),
    path: row.path,
  })) as SubCategory[];
}

// Get man pages by category
export function getManPagesByCategory(category: string): ManPage[] {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, main_category, sub_category, title, slug, filename, 
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
    SELECT id, main_category, sub_category, title, slug, filename, 
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

// Get single man page by ID
export function getManPageById(id: string | number): ManPage | null {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, main_category, sub_category, title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE id = ?
  `);

  const result = stmt.get(id) as RawManPageRow | undefined;
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
    SELECT id, main_category, sub_category 
    FROM man_pages
  `);

  const rows = stmt.all() as Array<{
    id: number;
    main_category: string;
    sub_category: string;
  }>;

  return rows.map((row) => ({
    params: {
      category: row.main_category,
      subcategory: row.sub_category,
      page: row.id.toString(),
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
    SELECT DISTINCT mp.main_category, mp.sub_category 
    FROM man_pages mp
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
  const db = getDb();
  const stmt = db.prepare(`
    SELECT id, main_category, sub_category, title, filename, 
           json(content) as content
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ? AND (filename = ? OR id = ?)
  `);

  const result = stmt.get(
    category,
    subcategory,
    filename,
    parseInt(filename) || 0
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
  const stmt = db.prepare(`
    SELECT id, main_category, sub_category, title, slug, filename, 
           json(content) as content
    FROM man_pages 
    WHERE main_category = ? AND sub_category = ? AND slug = ?
  `);

  const result = stmt.get(category, subcategory, commandName) as
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
    SELECT COUNT(DISTINCT sub_category) as count
    FROM man_pages 
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
    SELECT 
      sub_category as name,
      COUNT(*) as count,
      'Subcategory for ' || sub_category as description,
      json_array(sub_category) as keywords,
      '/' || sub_category as path
    FROM man_pages 
    WHERE main_category = ?
    GROUP BY sub_category
    ORDER BY sub_category
    LIMIT ? OFFSET ?
  `);

  return stmt.all(mainCategory, limitInt, offsetInt) as SubCategory[];
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
    SELECT id, main_category, sub_category, title, slug, filename, content
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
    id: number;
    main_category: string;
    sub_category: string;
    title: string;
    slug: string;
    filename: string;
    content: string;
  }>;

  return rows.map((row) => ({
    id: row.id,
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
