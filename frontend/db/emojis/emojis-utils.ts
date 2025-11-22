import { apple_vendor_excluded_emojis, discord_vendor_excluded_emojis } from '@/lib/emojis-consts';
import Database from 'better-sqlite3';
import path from 'path';

// === Type definitions ===
export interface EmojiData {
  code: string;
  slug: string;
  title: string;
  description?: string;
  category?: string;
  apple_vendor_description?: string;
  discord_vendor_description?: string;
  keywords?: string[];
  alsoKnownAs?: string[];
  version?: {
    'unicode-version'?: string;
    'emoji-version'?: string;
  };
  senses?: {
    adjectives?: string[];
    verbs?: string[];
    nouns?: string[];
  };
  shortcodes?: {
    github?: string;
    slack?: string;
    discord?: string;
  };
  Unicode?: string[];
}

export interface EmojiImageVariants {
  '3d'?: string;
  color?: string;
  flat?: string;
  high_contrast?: string;
}

export const categoryIconMap: Record<string, string> = {
  'Smileys & Emotion': '😀',
  'People & Body': '👤',
  'Animals & Nature': '🐶',
  'Food & Drink': '🍎',
  'Travel & Places': '✈️',
  Activities: '⚽',
  Objects: '📱',
  Symbols: '❤️',
  Flags: '🏁',
  Other: '❓',
};

// === SQLite connection handling ===
let dbInstance: Database.Database | null = null;

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/all_dbs/emoji-db.db');
}

export function getDb(): Database.Database {
  if (dbInstance) return dbInstance;
  const dbPath = getDbPath();
  dbInstance = new Database(dbPath, { readonly: true });
  dbInstance.pragma('journal_mode = OFF');
  dbInstance.pragma('synchronous = OFF');
  dbInstance.pragma('mmap_size = 1073741824');
  return dbInstance;
}

// === Utility: Safe JSON parse ===
function parseJSON<T>(value: string | null): T | undefined {
  if (!value) return undefined;
  try {
    return JSON.parse(value);
  } catch {
    return undefined;
  }
}


// === Fetch single emoji ===
export function getEmojiBySlug(slug: string): EmojiData | null {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM emojis WHERE slug = ?`).get(slug);
  if (!row) return null;

  return {
    code: row.code,
    slug: row.slug,
    title: row.title,
    description: row.description,
    category: row.category,
    apple_vendor_description: row.apple_vendor_description,
    discord_vendor_description: row.discord_vendor_description,
    Unicode: parseJSON<string[]>(row.unicode) || [],
    keywords: parseJSON<string[]>(row.keywords) || [],
    alsoKnownAs: parseJSON<string[]>(row.also_known_as) || [],
    version: parseJSON(row.version),
    senses: parseJSON(row.senses),
    shortcodes: parseJSON(row.shortcodes),
  };
}

// === Get total emoji count ===
export function getTotalEmojis(): number {
  const db = getDb();
  const row = db.prepare('SELECT COUNT(*) as count FROM emojis').get() as { count: number } | undefined;
  return row?.count ?? 0;
}

// === Fetch categories ===
export function getEmojiCategories(): string[] {
  const db = getDb();
  const rows = db
    .prepare(`SELECT DISTINCT category FROM emojis WHERE category IS NOT NULL`)
    .all();

  const validCategories = Object.keys(categoryIconMap);
  const normalized = rows.map((r) =>
    validCategories.includes(r.category) ? r.category : 'Other'
  );

  return Array.from(new Set(normalized)).sort() as string[];
}

// === Optimized: Get categories with preview emojis in a single query ===
export interface CategoryWithPreviewEmojis {
  category: string;
  count: number;
  previewEmojis: Array<{
    code: string;
    slug: string;
    title: string;
  }>;
}

export function getCategoriesWithPreviewEmojis(
  previewEmojisPerCategory: number = 5
): CategoryWithPreviewEmojis[] {
  const db = getDb();
  const validCategories = Object.keys(categoryIconMap);
  const validCategoriesPlaceholders = validCategories.map(() => '?').join(',');
  
  // Build the query with proper parameter binding
  const query = `
    WITH normalized_emojis AS (
      SELECT 
        CASE 
          WHEN category IN (${validCategoriesPlaceholders}) THEN category
          ELSE 'Other'
        END as normalized_category,
        code,
        slug,
        title
      FROM emojis
      WHERE category IS NOT NULL
    ),
    normalized_categories AS (
      SELECT DISTINCT normalized_category
      FROM normalized_emojis
    ),
    category_counts AS (
      SELECT 
        normalized_category as category,
        COUNT(*) as count
      FROM normalized_emojis
      GROUP BY normalized_category
    ),
    category_emojis AS (
      SELECT 
        nc.normalized_category as category,
        cc.count,
        (
          SELECT json_group_array(
            json_object(
              'code', e.code,
              'slug', e.slug,
              'title', e.title
            )
          )
          FROM (
            SELECT code, slug, title
            FROM normalized_emojis
            WHERE normalized_category = nc.normalized_category
            ORDER BY 
              CASE WHEN slug LIKE '%-skin-tone%' OR slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
              COALESCE(title, slug) COLLATE NOCASE
            LIMIT ?
          ) e
        ) as preview_emojis
      FROM normalized_categories nc
      JOIN category_counts cc ON nc.normalized_category = cc.category
      ORDER BY nc.normalized_category
    )
    SELECT category, count, preview_emojis
    FROM category_emojis
    WHERE category != 'Other'
    ORDER BY category
  `;
  
  const stmt = db.prepare(query);
  const results = stmt.all(...validCategories, previewEmojisPerCategory) as Array<{
    category: string;
    count: number;
    preview_emojis: string;
  }>;
  
  return results.map((row) => {
    let previewEmojis: Array<{ code: string; slug: string; title: string }> = [];
    try {
      const parsed = JSON.parse(row.preview_emojis || '[]');
      previewEmojis = Array.isArray(parsed) ? parsed.filter((emoji: any) => emoji !== null) : [];
    } catch (e) {
      previewEmojis = [];
    }
    
    return {
      category: row.category,
      count: row.count,
      previewEmojis,
    };
  });
}

// === Optimized: Get categories with preview emojis for Apple vendor ===
export function getAppleCategoriesWithPreviewEmojis(
  previewEmojisPerCategory: number = 5
): CategoryWithPreviewEmojis[] {
  const db = getDb();
  const validCategories = Object.keys(categoryIconMap);
  const validCategoriesPlaceholders = validCategories.map(() => '?').join(',');
  const excludedSlugs = apple_vendor_excluded_emojis || [];
  const excludedPlaceholders = excludedSlugs.map(() => '?').join(',');
  
  // Build the query with vendor exclusion filtering
  const query = `
    WITH normalized_emojis AS (
      SELECT 
        CASE 
          WHEN category IN (${validCategoriesPlaceholders}) THEN category
          ELSE 'Other'
        END as normalized_category,
        code,
        slug,
        title
      FROM emojis
      WHERE category IS NOT NULL
        ${excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
    ),
    normalized_categories AS (
      SELECT DISTINCT normalized_category
      FROM normalized_emojis
    ),
    category_counts AS (
      SELECT 
        normalized_category as category,
        COUNT(*) as count
      FROM normalized_emojis
      GROUP BY normalized_category
    ),
    category_emojis AS (
      SELECT 
        nc.normalized_category as category,
        cc.count,
        (
          SELECT json_group_array(
            json_object(
              'code', e.code,
              'slug', e.slug,
              'title', e.title
            )
          )
          FROM (
            SELECT code, slug, title
            FROM normalized_emojis
            WHERE normalized_category = nc.normalized_category
            ORDER BY 
              CASE WHEN slug LIKE '%-skin-tone%' OR slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
              COALESCE(title, slug) COLLATE NOCASE
            LIMIT ?
          ) e
        ) as preview_emojis
      FROM normalized_categories nc
      JOIN category_counts cc ON nc.normalized_category = cc.category
      ORDER BY nc.normalized_category
    )
    SELECT category, count, preview_emojis
    FROM category_emojis
    WHERE category != 'Other'
    ORDER BY category
  `;
  
  const params = excludedSlugs.length > 0 
    ? [...validCategories, ...excludedSlugs, previewEmojisPerCategory]
    : [...validCategories, previewEmojisPerCategory];
  
  const stmt = db.prepare(query);
  const results = stmt.all(...params) as Array<{
    category: string;
    count: number;
    preview_emojis: string;
  }>;
  
  return results.map((row) => {
    let previewEmojis: Array<{ code: string; slug: string; title: string }> = [];
    try {
      const parsed = JSON.parse(row.preview_emojis || '[]');
      previewEmojis = Array.isArray(parsed) ? parsed.filter((emoji: any) => emoji !== null) : [];
    } catch (e) {
      previewEmojis = [];
    }
    
    return {
      category: row.category,
      count: row.count,
      previewEmojis,
    };
  });
}

// === Optimized: Get categories with preview emojis for Discord vendor ===
export function getDiscordCategoriesWithPreviewEmojis(
  previewEmojisPerCategory: number = 5
): CategoryWithPreviewEmojis[] {
  const db = getDb();
  const validCategories = Object.keys(categoryIconMap);
  const validCategoriesPlaceholders = validCategories.map(() => '?').join(',');
  const excludedSlugs = discord_vendor_excluded_emojis || [];
  const excludedPlaceholders = excludedSlugs.map(() => '?').join(',');
  
  // Build the query with vendor exclusion filtering
  const query = `
    WITH normalized_emojis AS (
      SELECT 
        CASE 
          WHEN category IN (${validCategoriesPlaceholders}) THEN category
          ELSE 'Other'
        END as normalized_category,
        code,
        slug,
        title
      FROM emojis
      WHERE category IS NOT NULL
        ${excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
    ),
    normalized_categories AS (
      SELECT DISTINCT normalized_category
      FROM normalized_emojis
    ),
    category_counts AS (
      SELECT 
        normalized_category as category,
        COUNT(*) as count
      FROM normalized_emojis
      GROUP BY normalized_category
    ),
    category_emojis AS (
      SELECT 
        nc.normalized_category as category,
        cc.count,
        (
          SELECT json_group_array(
            json_object(
              'code', e.code,
              'slug', e.slug,
              'title', e.title
            )
          )
          FROM (
            SELECT code, slug, title
            FROM normalized_emojis
            WHERE normalized_category = nc.normalized_category
            ORDER BY 
              CASE WHEN slug LIKE '%-skin-tone%' OR slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
              COALESCE(title, slug) COLLATE NOCASE
            LIMIT ?
          ) e
        ) as preview_emojis
      FROM normalized_categories nc
      JOIN category_counts cc ON nc.normalized_category = cc.category
      ORDER BY nc.normalized_category
    )
    SELECT category, count, preview_emojis
    FROM category_emojis
    WHERE category != 'Other'
    ORDER BY category
  `;
  
  const params = excludedSlugs.length > 0 
    ? [...validCategories, ...excludedSlugs, previewEmojisPerCategory]
    : [...validCategories, previewEmojisPerCategory];
  
  const stmt = db.prepare(query);
  const results = stmt.all(...params) as Array<{
    category: string;
    count: number;
    preview_emojis: string;
  }>;
  
  return results.map((row) => {
    let previewEmojis: Array<{ code: string; slug: string; title: string }> = [];
    try {
      const parsed = JSON.parse(row.preview_emojis || '[]');
      previewEmojis = Array.isArray(parsed) ? parsed.filter((emoji: any) => emoji !== null) : [];
    } catch (e) {
      previewEmojis = [];
    }
    
    return {
      category: row.category,
      count: row.count,
      previewEmojis,
    };
  });
}


// === Paginated: Get emojis by category with count ===
export interface PaginatedEmojisResult {
  emojis: EmojiData[];
  total: number;
}

export function getEmojisByCategoryPaginated(
  category: string,
  page: number = 1,
  itemsPerPage: number = 36,
  vendor?: string
): PaginatedEmojisResult {
  const db = getDb();
  const offset = (page - 1) * itemsPerPage;
  const excludedSlugs = vendor === "discord" 
    ? (discord_vendor_excluded_emojis || [])
    : vendor === "apple"
    ? (apple_vendor_excluded_emojis || [])
    : [];
  const excludedPlaceholders = excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
  
  // Get total count
  const countQuery = `
    SELECT COUNT(*) as count
    FROM emojis
    WHERE lower(category) = lower(?)
      AND slug IS NOT NULL
      ${excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
  `;
  const countParams = excludedSlugs.length > 0 ? [category, ...excludedSlugs] : [category];
  const countRow = db.prepare(countQuery).get(...countParams) as { count: number } | undefined;
  const total = countRow?.count ?? 0;
  
  // Get paginated emojis
  const emojisQuery = `
    SELECT 
      code,
      slug,
      title,
      description,
      category,
      apple_vendor_description,
      unicode,
      keywords,
      also_known_as,
      version,
      senses,
      shortcodes
    FROM emojis
    WHERE lower(category) = lower(?)
      AND slug IS NOT NULL
      ${excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
    ORDER BY 
      CASE WHEN slug LIKE '%-skin-tone%' OR slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
      COALESCE(title, slug) COLLATE NOCASE
    LIMIT ? OFFSET ?
  `;
  
  const emojisParams = excludedSlugs.length > 0 
    ? [category, ...excludedSlugs, itemsPerPage, offset]
    : [category, itemsPerPage, offset];
  
  const emojiRows = db.prepare(emojisQuery).all(...emojisParams) as Array<{
    code: string;
    slug: string;
    title: string;
    description: string;
    category: string;
    apple_vendor_description: string;
    unicode: string;
    keywords: string;
    also_known_as: string;
    version: string;
    senses: string;
    shortcodes: string;
  }>;
  
  const emojis = emojiRows.map((r) => ({
      code: r.code,
      slug: r.slug,
      title: r.title,
      description: r.description,
      category: r.category,
      apple_vendor_description: r.apple_vendor_description,
      Unicode: parseJSON<string[]>(r.unicode) || [],
      keywords: parseJSON<string[]>(r.keywords) || [],
      alsoKnownAs: parseJSON<string[]>(r.also_known_as) || [],
      version: parseJSON(r.version),
      senses: parseJSON(r.senses),
      shortcodes: parseJSON(r.shortcodes),
    }));
  
  return { emojis, total };
}

// === Optimized: Get emojis by category with latest Discord images ===
export interface EmojiWithDiscordImage extends EmojiData {
  latestDiscordImage: string | null;
}

// === Paginated: Get emojis by category with latest Discord images ===
export interface PaginatedEmojisWithDiscordImagesResult {
  emojis: EmojiWithDiscordImage[];
  total: number;
}

export function getEmojisByCategoryWithDiscordImagesPaginated(
  category: string,
  page: number = 1,
  itemsPerPage: number = 36
): PaginatedEmojisWithDiscordImagesResult {
  const db = getDb();
  const offset = (page - 1) * itemsPerPage;
  const excludedSlugs = discord_vendor_excluded_emojis || [];
  const excludedPlaceholders = excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
  
  // Get total count (only emojis that have Discord images)
  const countQuery = `
    SELECT COUNT(DISTINCT e.slug) as count
    FROM emojis e
    INNER JOIN images i ON e.slug = i.emoji_slug
    WHERE lower(e.category) = lower(?)
      AND e.slug IS NOT NULL
      AND i.image_type = 'twemoji-vendor'
      ${excludedSlugs.length > 0 ? `AND e.slug NOT IN (${excludedPlaceholders})` : ''}
  `;
  const countParams = excludedSlugs.length > 0 ? [category, ...excludedSlugs] : [category];
  const countRow = db.prepare(countQuery).get(...countParams) as { count: number } | undefined;
  const total = countRow?.count ?? 0;
  
  // Get paginated emojis
  const emojisQuery = `
    SELECT DISTINCT
      e.code,
      e.slug,
      e.title,
      e.description,
      e.category,
      e.apple_vendor_description,
      e.unicode,
      e.keywords,
      e.also_known_as,
      e.version,
      e.senses,
      e.shortcodes
    FROM emojis e
    INNER JOIN images i ON e.slug = i.emoji_slug
    WHERE lower(e.category) = lower(?)
      AND e.slug IS NOT NULL
      AND i.image_type = 'twemoji-vendor'
      ${excludedSlugs.length > 0 ? `AND e.slug NOT IN (${excludedPlaceholders})` : ''}
    ORDER BY 
      CASE WHEN e.slug LIKE '%-skin-tone%' OR e.slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
      COALESCE(e.title, e.slug) COLLATE NOCASE
    LIMIT ? OFFSET ?
  `;
  
  const emojisParams = excludedSlugs.length > 0 
    ? [category, ...excludedSlugs, itemsPerPage, offset]
    : [category, itemsPerPage, offset];
  
  const emojiRows = db.prepare(emojisQuery).all(...emojisParams) as Array<{
    code: string;
    slug: string;
    title: string;
    description: string;
    category: string;
    apple_vendor_description: string;
    unicode: string;
    keywords: string;
    also_known_as: string;
    version: string;
    senses: string;
    shortcodes: string;
  }>;
  
  if (emojiRows.length === 0) return { emojis: [], total };
  
  // Get all images for these emojis in a single query
  const slugs = emojiRows.map(e => e.slug);
  const imagePlaceholders = slugs.map(() => '?').join(',');
  const imagesQuery = `
    SELECT emoji_slug, filename, image_data
    FROM images
    WHERE emoji_slug IN (${imagePlaceholders})
      AND image_type = 'twemoji-vendor'
    ORDER BY emoji_slug, filename COLLATE NOCASE
  `;
  
  const imageRows = db.prepare(imagesQuery).all(...slugs) as Array<{
    emoji_slug: string;
    filename: string;
    image_data: Buffer;
  }>;
  
  // Group images by emoji slug and find latest for each
  const imagesBySlug = new Map<string, Array<{ filename: string; image_data: Buffer }>>();
  for (const img of imageRows) {
    if (!imagesBySlug.has(img.emoji_slug)) {
      imagesBySlug.set(img.emoji_slug, []);
    }
    imagesBySlug.get(img.emoji_slug)!.push({
      filename: img.filename,
      image_data: img.image_data,
    });
  }
  
  const parseVersion = (name: string): number => {
    const match = name.match(/[_-]([\d.]+)\.(png|jpg|jpeg|webp|svg)$/i);
    return match ? parseFloat(match[1]) : 0;
  };
  
  // Process emojis and attach latest images
  const emojis = emojiRows.map((row) => {
    const images = imagesBySlug.get(row.slug) || [];
    let latestDiscordImage: string | null = null;
    
    if (images.length > 0) {
      // Find image with highest version
      const latest = images.reduce((best, img) => {
        return parseVersion(img.filename) > parseVersion(best.filename) ? img : best;
      }, images[0]);
      
      // Convert to base64
      const buffer = Buffer.from(latest.image_data);
      const head = buffer.toString('ascii', 0, 20);
      
      let mime = 'application/octet-stream';
      if (head.includes('<svg')) mime = 'image/svg+xml';
      else if (head.startsWith('RIFF')) mime = 'image/webp';
      else if (buffer[0] === 0x89 && head.includes('PNG')) mime = 'image/png';
      else if (head.includes('JFIF') || head.includes('Exif')) mime = 'image/jpeg';
      
      latestDiscordImage = `data:${mime};base64,${buffer.toString('base64')}`;
    }
    
    return {
      code: row.code,
      slug: row.slug,
      title: row.title,
      description: row.description,
      category: row.category,
      apple_vendor_description: row.apple_vendor_description,
      Unicode: parseJSON<string[]>(row.unicode) || [],
      keywords: parseJSON<string[]>(row.keywords) || [],
      alsoKnownAs: parseJSON<string[]>(row.also_known_as) || [],
      version: parseJSON(row.version) as EmojiData['version'],
      senses: parseJSON(row.senses) as EmojiData['senses'],
      shortcodes: parseJSON(row.shortcodes) as EmojiData['shortcodes'],
      latestDiscordImage,
    };
  });
  
  return { emojis, total };
}

// === Optimized: Get emojis by category with latest Apple images ===
export interface EmojiWithAppleImage extends EmojiData {
  latestAppleImage: string | null;
}

// === Paginated: Get emojis by category with latest Apple images ===
export interface PaginatedEmojisWithAppleImagesResult {
  emojis: EmojiWithAppleImage[];
  total: number;
}

export function getEmojisByCategoryWithAppleImagesPaginated(
  category: string,
  page: number = 1,
  itemsPerPage: number = 36
): PaginatedEmojisWithAppleImagesResult {
  const db = getDb();
  const offset = (page - 1) * itemsPerPage;
  const excludedSlugs = apple_vendor_excluded_emojis || [];
  const excludedPlaceholders = excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
  
  // Get total count (only emojis that have Apple images)
  const countQuery = `
    SELECT COUNT(DISTINCT e.slug) as count
    FROM emojis e
    INNER JOIN images i ON e.slug = i.emoji_slug
    WHERE lower(e.category) = lower(?)
      AND e.slug IS NOT NULL
      AND i.filename LIKE '%iOS%'
      ${excludedSlugs.length > 0 ? `AND e.slug NOT IN (${excludedPlaceholders})` : ''}
  `;
  const countParams = excludedSlugs.length > 0 ? [category, ...excludedSlugs] : [category];
  const countRow = db.prepare(countQuery).get(...countParams) as { count: number } | undefined;
  const total = countRow?.count ?? 0;
  
  // Get paginated emojis
  const emojisQuery = `
    SELECT DISTINCT
      e.code,
      e.slug,
      e.title,
      e.description,
      e.category,
      e.apple_vendor_description,
      e.unicode,
      e.keywords,
      e.also_known_as,
      e.version,
      e.senses,
      e.shortcodes
    FROM emojis e
    INNER JOIN images i ON e.slug = i.emoji_slug
    WHERE lower(e.category) = lower(?)
      AND e.slug IS NOT NULL
      AND i.filename LIKE '%iOS%'
      ${excludedSlugs.length > 0 ? `AND e.slug NOT IN (${excludedPlaceholders})` : ''}
    ORDER BY 
      CASE WHEN e.slug LIKE '%-skin-tone%' OR e.slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
      COALESCE(e.title, e.slug) COLLATE NOCASE
    LIMIT ? OFFSET ?
  `;
  
  const emojisParams = excludedSlugs.length > 0 
    ? [category, ...excludedSlugs, itemsPerPage, offset]
    : [category, itemsPerPage, offset];
  
  const emojiRows = db.prepare(emojisQuery).all(...emojisParams) as Array<{
    code: string;
    slug: string;
    title: string;
    description: string;
    category: string;
    apple_vendor_description: string;
    unicode: string;
    keywords: string;
    also_known_as: string;
    version: string;
    senses: string;
    shortcodes: string;
  }>;
  
  if (emojiRows.length === 0) return { emojis: [], total };
  
  // Get all images for these emojis in a single query (Apple images have iOS in filename)
  const slugs = emojiRows.map(e => e.slug);
  const imagePlaceholders = slugs.map(() => '?').join(',');
  const imagesQuery = `
    SELECT emoji_slug, filename, image_data
    FROM images
    WHERE emoji_slug IN (${imagePlaceholders})
      AND filename LIKE '%iOS%'
    ORDER BY emoji_slug, filename COLLATE NOCASE
  `;
  
  const imageRows = db.prepare(imagesQuery).all(...slugs) as Array<{
    emoji_slug: string;
    filename: string;
    image_data: Buffer;
  }>;
  
  // Group images by emoji slug and find latest for each
  const imagesBySlug = new Map<string, Array<{ filename: string; image_data: Buffer }>>();
  for (const img of imageRows) {
    if (!imagesBySlug.has(img.emoji_slug)) {
      imagesBySlug.set(img.emoji_slug, []);
    }
    imagesBySlug.get(img.emoji_slug)!.push({
      filename: img.filename,
      image_data: img.image_data,
    });
  }
  
  const parseIOSVersion = (name: string): number => {
    const match = name.match(/iOS[_\s]?([\d.]+)/i);
    return match ? parseFloat(match[1]) : 0;
  };
  
  // Process emojis and attach latest images
  const emojis = emojiRows.map((row) => {
    const images = imagesBySlug.get(row.slug) || [];
    let latestAppleImage: string | null = null;
    
    if (images.length > 0) {
      // Find image with highest iOS version
      const latest = images.reduce((best, img) => {
        return parseIOSVersion(img.filename) > parseIOSVersion(best.filename) ? img : best;
      }, images[0]);
      
      // Convert to base64
      const buffer = Buffer.from(latest.image_data);
      const head = buffer.toString('ascii', 0, 20);
      
      let mime = 'application/octet-stream';
      if (head.includes('<svg')) mime = 'image/svg+xml';
      else if (head.startsWith('RIFF')) mime = 'image/webp';
      else if (buffer[0] === 0x89 && head.includes('PNG')) mime = 'image/png';
      else if (head.includes('JFIF') || head.includes('Exif')) mime = 'image/jpeg';
      
      latestAppleImage = `data:${mime};base64,${buffer.toString('base64')}`;
    }
    
    return {
      code: row.code,
      slug: row.slug,
      title: row.title,
      description: row.description,
      category: row.category,
      apple_vendor_description: row.apple_vendor_description,
      Unicode: parseJSON<string[]>(row.unicode) || [],
      keywords: parseJSON<string[]>(row.keywords) || [],
      alsoKnownAs: parseJSON<string[]>(row.also_known_as) || [],
      version: parseJSON(row.version) as EmojiData['version'],
      senses: parseJSON(row.senses) as EmojiData['senses'],
      shortcodes: parseJSON(row.shortcodes) as EmojiData['shortcodes'],
      latestAppleImage,
    };
  });
  
  return { emojis, total };
}


export function getEmojiImages(slug) {
  const db = getDb();
  const rows = db
    .prepare(`SELECT filename, image_data FROM images WHERE emoji_slug = ?`)
    .all(slug);

  const images = {};

  for (const row of rows) {
    const lower = row.filename.toLowerCase();

    const setImage = (variant) => {
      if (images[variant]) return;

      const buffer = Buffer.from(row.image_data);
      let mime = 'application/octet-stream';

      // --- Detect type from header instead of extension ---
      const head = buffer.slice(0, 20).toString('utf8');

      if (head.startsWith('<svg') || head.includes('<svg')) {
        mime = 'image/svg+xml';
      } else if (buffer.slice(0, 4).toString('ascii') === 'RIFF') {
        mime = 'image/webp';
      } else if (
        buffer[0] === 0x89 &&
        buffer.toString('ascii', 1, 4) === 'PNG'
      ) {
        mime = 'image/png';
      } else if (buffer.toString('ascii', 6, 10) === 'JFIF') {
        mime = 'image/jpeg';
      }

      const base64 = buffer.toString('base64');
      images[variant] = `data:${mime};base64,${base64}`;
    };

    if (/_3d|3d/i.test(lower)) setImage('3d');
    else if (/_color|color/i.test(lower)) setImage('color');
    else if (/_flat|flat/i.test(lower)) setImage('flat');
    else if (/_high_contrast|high_contrast|highcontrast/i.test(lower))
      setImage('high_contrast');
  }

  return images;
}

// ============ Apple Version =====================

// Helper to extract version numbers numerically for sorting
function versionToNumbers(version: string): number[] {
  const matches = version.match(/\d+/g);
  return matches ? matches.map(Number) : [];
}

// Extracts iOS version name from filename (e.g., iOS_17.0 → iOS 17.0)
function extractIOSVersion(filename: string): string {
  const match = filename.match(/(?:iOS|iPhone[_\s]?OS)[_\s]?([0-9.]+)/i);
  return match ? `iOS ${match[1]}` : 'Unknown';
}

// Detect MIME type
function detectMime(buffer: Buffer): string {
  const ascii = buffer.toString('ascii', 0, 16);
  if (ascii.includes('<svg')) return 'image/svg+xml';
  if (ascii.startsWith('RIFF')) return 'image/webp';
  if (buffer[0] === 0x89 && ascii.includes('PNG')) return 'image/png';
  if (ascii.includes('JFIF') || ascii.includes('Exif')) return 'image/jpeg';
  return 'application/octet-stream';
}


export function extractDiscordVersion(filename) {
  // Matches _7.0.png or -14.1.webp etc.
  const match = filename.match(/[_-]([\d.]+)\.(png|jpg|jpeg|webp|svg)$/i);
  return match ? match[1] : '0';
}


export function getDiscordEmojiBySlug(slug: string) {
  const db = getDb();

  const emoji = db
    .prepare(
      `SELECT 
        code,
        unicode,
        slug,
        title,
        category,
        description,
        apple_vendor_description,
        discord_vendor_description,
        keywords,
        also_known_as,
        version,
        senses,
        shortcodes
      FROM emojis
      WHERE slug = ?`
    )
    .get(slug);

  if (!emoji) return null;

  // Get only Discord-vendor images
  const imageRows = db
    .prepare(
      `SELECT filename, image_data 
       FROM images 
       WHERE emoji_slug = ? AND image_type = 'twemoji-vendor'`
    )
    .all(slug);

  const discordImages = imageRows
    .map((row) => {
      const buffer = Buffer.from(row.image_data);
      const mime = detectMime(buffer);
      const base64 = buffer.toString("base64");

      return {
        file: row.filename,
        url: `data:${mime};base64,${base64}`,
        version: extractDiscordVersion(row.filename),
      };
    })
    .sort((a, b) => {
      const va = versionToNumbers(a.version);
      const vb = versionToNumbers(b.version);
      const len = Math.max(va.length, vb.length);
      for (let i = 0; i < len; i++) {
        const diff = (va[i] || 0) - (vb[i] || 0);
        if (diff !== 0) return diff;
      }
      return 0;
    });

  if (discordImages.length === 0) return null;

  const latestImage = discordImages[discordImages.length - 1];

  return {
    ...emoji,
    Unicode: parseJSON<string[]>(emoji.unicode) || [],
    keywords: parseJSON<string[]>(emoji.keywords) || [],
    alsoKnownAs: parseJSON<string[]>(emoji.also_known_as) || [],
    version: parseJSON(emoji.version),
    senses: parseJSON(emoji.senses),
    shortcodes: parseJSON(emoji.shortcodes),
    slug,
    discordEvolutionImages: discordImages,
    latestDiscordImage: latestImage.url,
    discord_vendor_description:
      emoji.discord_vendor_description || emoji.description || "",
  };
}


export function getAppleEmojiBySlug(slug: string) {
  const db = getDb();

  // fetch base row
  const emoji = db
    .prepare(
      `SELECT 
          code,
          unicode,
          slug,
          title,
          category,
          description,
          apple_vendor_description,
          discord_vendor_description,
          keywords,
          also_known_as,
          version,
          senses,
          shortcodes
       FROM emojis
       WHERE slug = ?`
    )
    .get(slug);

  if (!emoji) return null;

  // fetch all images for this emoji only
  const imageRows = db
    .prepare(`SELECT filename, image_data FROM images WHERE emoji_slug = ?`)
    .all(slug);

  const appleImages = imageRows
    .filter((row) => /iOS[_\s]?\d+/i.test(row.filename))
    .map((row) => {
      const buffer = Buffer.from(row.image_data);
      const mime = detectMime(buffer);
      return {
        file: row.filename,
        url: `data:${mime};base64,${buffer.toString("base64")}`,
        version: extractIOSVersion(row.filename),
      };
    })
    .sort((a, b) => {
      const va = versionToNumbers(a.version);
      const vb = versionToNumbers(b.version);
      const len = Math.max(va.length, vb.length);
      for (let i = 0; i < len; i++) {
        const diff = (va[i] || 0) - (vb[i] || 0);
        if (diff !== 0) return diff;
      }
      return 0;
    });

  const latestImage = appleImages[appleImages.length - 1] || null;

  return {
    ...emoji,
    Unicode: parseJSON<string[]>(emoji.unicode) || [],
    keywords: parseJSON<string[]>(emoji.keywords) || [],
    alsoKnownAs: parseJSON<string[]>(emoji.also_known_as) || [],
    version: parseJSON(emoji.version),
    senses: parseJSON(emoji.senses),
    shortcodes: parseJSON(emoji.shortcodes),
    slug,

    appleEvolutionImages: appleImages,
    latestAppleImage: latestImage?.url,
    apple_vendor_description:
      emoji.apple_vendor_description || emoji.description || "",
  };
}



export function fetchImageFromDB(
  slug: string,
  filename: string
): string | null {
  const db = getDb();
  const row = db
    .prepare(
      `SELECT image_data FROM images WHERE emoji_slug = ? AND filename = ?`
    )
    .get(slug, filename);

  if (!row || !row.image_data) return null;

  const buffer = Buffer.from(row.image_data);
  const head = buffer.toString('ascii', 0, 20);
  let mime = 'application/octet-stream';
  if (head.includes('<svg')) mime = 'image/svg+xml';
  else if (head.startsWith('RIFF')) mime = 'image/webp';
  else if (buffer[0] === 0x89 && head.includes('PNG')) mime = 'image/png';
  else if (head.includes('JFIF') || head.includes('Exif')) mime = 'image/jpeg';

  return `data:${mime};base64,${buffer.toString('base64')}`;
}


// === Lightweight functions for sitemaps (only slug and category) ===
export interface SitemapEmoji {
  slug: string;
  category: string;
}

export function getSitemapEmojis(): SitemapEmoji[] {
  const db = getDb();
  const rows = db
    .prepare(`SELECT slug, category FROM emojis WHERE slug IS NOT NULL`)
    .all() as Array<{ slug: string; category: string }>;
  return rows.map(r => ({ slug: r.slug, category: r.category }));
}

export function getSitemapAppleEmojis(): SitemapEmoji[] {
  const db = getDb();
  const excludedSlugs = apple_vendor_excluded_emojis || [];
  const excludedPlaceholders = excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
  
  const query = `
    SELECT slug, category
    FROM emojis
    WHERE slug IS NOT NULL
      AND EXISTS (
        SELECT 1 FROM images 
        WHERE images.emoji_slug = emojis.slug 
        AND images.filename LIKE '%iOS%'
      )
      ${excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
  `;
  
  const params = excludedSlugs.length > 0 ? excludedSlugs : [];
  const rows = db.prepare(query).all(...params) as Array<{ slug: string; category: string }>;
  return rows.map(r => ({ slug: r.slug, category: r.category }));
}

export function getSitemapDiscordEmojis(): SitemapEmoji[] {
  const db = getDb();
  const excludedSlugs = discord_vendor_excluded_emojis || [];
  const excludedPlaceholders = excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
  
  const query = `
    SELECT slug, category
    FROM emojis
    WHERE slug IS NOT NULL
      AND EXISTS (
        SELECT 1 FROM images 
        WHERE images.emoji_slug = emojis.slug 
        AND images.image_type = 'twemoji-vendor'
      )
      ${excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
  `;
  
  const params = excludedSlugs.length > 0 ? excludedSlugs : [];
  const rows = db.prepare(query).all(...params) as Array<{ slug: string; category: string }>;
  return rows.map(r => ({ slug: r.slug, category: r.category }));
}
