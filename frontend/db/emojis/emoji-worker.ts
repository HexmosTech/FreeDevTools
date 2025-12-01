/**
 * Worker thread for SQLite queries using bun:sqlite
 * Handles all query types for the emoji database
 */

import { Database } from 'bun:sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
import { parentPort, workerData } from 'worker_threads';

const logColors = {
  reset: '\u001b[0m',
  timestamp: '\u001b[35m',
  dbLabel: '\u001b[36m', // Cyan for emoji
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
    // Ignore PRAGMA errors - they're optimizations, not critical
  }
};

setPragma('PRAGMA cache_size = -64000'); // 64MB cache per connection
setPragma('PRAGMA temp_store = MEMORY');
setPragma('PRAGMA mmap_size = 268435456'); // 256MB memory-mapped I/O
setPragma('PRAGMA query_only = ON'); // Read-only mode
setPragma('PRAGMA page_size = 4096'); // Optimal page size

// Helper function to parse JSON safely
function parseJSON<T>(value: string | null): T | undefined {
  if (!value) return undefined;
  try {
    return JSON.parse(value);
  } catch {
    return undefined;
  }
}

// Helper function to detect MIME type from buffer
function detectMime(buffer: Buffer): string {
  const ascii = buffer.toString('ascii', 0, 16);
  if (ascii.includes('<svg')) return 'image/svg+xml';
  if (ascii.startsWith('RIFF')) return 'image/webp';
  if (buffer[0] === 0x89 && ascii.includes('PNG')) return 'image/png';
  if (ascii.includes('JFIF') || ascii.includes('Exif')) return 'image/jpeg';
  return 'application/octet-stream';
}

// Helper to extract version numbers for sorting
function versionToNumbers(version: string): number[] {
  const matches = version.match(/\d+/g);
  return matches ? matches.map(Number) : [];
}

// Extract iOS version from filename
function extractIOSVersion(filename: string): string {
  const match = filename.match(/(?:iOS|iPhone[_\s]?OS)[_\s]?([0-9.]+)/i);
  return match ? `iOS ${match[1]}` : 'Unknown';
}

// Extract Discord version from filename
function extractDiscordVersion(filename: string): string {
  const match = filename.match(/[_-]([\d.]+)\.(png|jpg|jpeg|webp|svg)$/i);
  return match ? match[1] : '0';
}

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
  const dbLabel = highlight('[EMOJI_DB]', logColors.dbLabel);
  console.log(`${timestampLabel} ${dbLabel} Worker ${workerId} handling ${type}`);

  try {
    let result: any;

    switch (type) {
      case 'getEmojiBySlug': {
        const { slug } = params;
        const row = db.prepare('SELECT * FROM emojis WHERE slug = ?').get(slug) as any;
        if (!row) {
          result = null;
          break;
        }
        result = {
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
        break;
      }

      case 'getEmojiBySlugHash': {
        const { slugHash } = params;
        const row = db.prepare('SELECT * FROM emojis WHERE slug_hash = ?').get(slugHash) as any;
        if (!row) {
          result = null;
          break;
        }
        result = {
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
        break;
      }

      case 'getTotalEmojis': {
        const row = db.prepare('SELECT COUNT(*) as count FROM emojis').get() as { count: number } | undefined;
        result = row?.count ?? 0;
        break;
      }

      case 'getEmojiCategories': {
        const rows = db.prepare('SELECT DISTINCT category FROM emojis WHERE category IS NOT NULL').all() as Array<{ category: string }>;
        const validCategories = [
          'Smileys & Emotion',
          'People & Body',
          'Animals & Nature',
          'Food & Drink',
          'Travel & Places',
          'Activities',
          'Objects',
          'Symbols',
          'Flags',
        ];
        const normalized = rows.map((r) =>
          validCategories.includes(r.category) ? r.category : 'Other'
        );
        result = Array.from(new Set(normalized)).sort();
        break;
      }

      case 'getCategoriesWithPreviewEmojis': {
        const { previewEmojisPerCategory } = params;
        const validCategories = [
          'Smileys & Emotion',
          'People & Body',
          'Animals & Nature',
          'Food & Drink',
          'Travel & Places',
          'Activities',
          'Objects',
          'Symbols',
          'Flags',
        ];
        const validCategoriesPlaceholders = validCategories.map(() => '?').join(',');
        
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
        
        result = results.map((row) => {
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
        break;
      }

      case 'getAppleCategoriesWithPreviewEmojis': {
        const { previewEmojisPerCategory, excludedSlugs } = params;
        const validCategories = [
          'Smileys & Emotion',
          'People & Body',
          'Animals & Nature',
          'Food & Drink',
          'Travel & Places',
          'Activities',
          'Objects',
          'Symbols',
          'Flags',
        ];
        const validCategoriesPlaceholders = validCategories.map(() => '?').join(',');
        const excludedPlaceholders = excludedSlugs && excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
        
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
              ${excludedSlugs && excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
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
        
        const queryParams = excludedSlugs && excludedSlugs.length > 0 
          ? [...validCategories, ...excludedSlugs, previewEmojisPerCategory]
          : [...validCategories, previewEmojisPerCategory];
        
        const stmt = db.prepare(query);
        const results = stmt.all(...queryParams) as Array<{
          category: string;
          count: number;
          preview_emojis: string;
        }>;
        
        result = results.map((row) => {
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
        break;
      }

      case 'getDiscordCategoriesWithPreviewEmojis': {
        const { previewEmojisPerCategory, excludedSlugs } = params;
        const validCategories = [
          'Smileys & Emotion',
          'People & Body',
          'Animals & Nature',
          'Food & Drink',
          'Travel & Places',
          'Activities',
          'Objects',
          'Symbols',
          'Flags',
        ];
        const validCategoriesPlaceholders = validCategories.map(() => '?').join(',');
        const excludedPlaceholders = excludedSlugs && excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
        
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
              ${excludedSlugs && excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
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
        
        const queryParams = excludedSlugs && excludedSlugs.length > 0 
          ? [...validCategories, ...excludedSlugs, previewEmojisPerCategory]
          : [...validCategories, previewEmojisPerCategory];
        
        const stmt = db.prepare(query);
        const results = stmt.all(...queryParams) as Array<{
          category: string;
          count: number;
          preview_emojis: string;
        }>;
        
        result = results.map((row) => {
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
        break;
      }

      case 'getEmojisByCategoryPaginated': {
        const { category, page, itemsPerPage, vendor, excludedSlugs } = params;
        const offset = (page - 1) * itemsPerPage;
        const excludedPlaceholders = excludedSlugs && excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
        
        // Get total count
        const countQuery = `
          SELECT COUNT(*) as count
          FROM emojis
          WHERE lower(category) = lower(?)
            AND slug IS NOT NULL
            ${excludedSlugs && excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
        `;
        const countParams = excludedSlugs && excludedSlugs.length > 0 ? [category, ...excludedSlugs] : [category];
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
            ${excludedSlugs && excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
          ORDER BY 
            CASE WHEN slug LIKE '%-skin-tone%' OR slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
            COALESCE(title, slug) COLLATE NOCASE
          LIMIT ? OFFSET ?
        `;
        
        const emojisParams = excludedSlugs && excludedSlugs.length > 0 
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
        
        result = { emojis, total };
        break;
      }

      case 'getEmojisByCategoryWithDiscordImagesPaginated': {
        const { category, page, itemsPerPage, excludedSlugs } = params;
        const offset = (page - 1) * itemsPerPage;
        const excludedPlaceholders = excludedSlugs && excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
        
        // Get total count (only emojis that have Discord images)
        const countQuery = `
          SELECT COUNT(DISTINCT e.slug) as count
          FROM emojis e
          INNER JOIN images i ON e.slug = i.emoji_slug
          WHERE lower(e.category) = lower(?)
            AND e.slug IS NOT NULL
            AND i.image_type = 'twemoji-vendor'
            ${excludedSlugs && excludedSlugs.length > 0 ? `AND e.slug NOT IN (${excludedPlaceholders})` : ''}
        `;
        const countParams = excludedSlugs && excludedSlugs.length > 0 ? [category, ...excludedSlugs] : [category];
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
            ${excludedSlugs && excludedSlugs.length > 0 ? `AND e.slug NOT IN (${excludedPlaceholders})` : ''}
          ORDER BY 
            CASE WHEN e.slug LIKE '%-skin-tone%' OR e.slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
            COALESCE(e.title, e.slug) COLLATE NOCASE
          LIMIT ? OFFSET ?
        `;
        
        const emojisParams = excludedSlugs && excludedSlugs.length > 0 
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
        
        if (emojiRows.length === 0) {
          result = { emojis: [], total };
          break;
        }
        
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
            const mime = detectMime(buffer);
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
            version: parseJSON(row.version),
            senses: parseJSON(row.senses),
            shortcodes: parseJSON(row.shortcodes),
            latestDiscordImage,
          };
        });
        
        result = { emojis, total };
        break;
      }

      case 'getEmojisByCategoryWithAppleImagesPaginated': {
        const { category, page, itemsPerPage, excludedSlugs } = params;
        const offset = (page - 1) * itemsPerPage;
        const excludedPlaceholders = excludedSlugs && excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
        
        // Get total count (only emojis that have Apple images)
        const countQuery = `
          SELECT COUNT(DISTINCT e.slug) as count
          FROM emojis e
          INNER JOIN images i ON e.slug = i.emoji_slug
          WHERE lower(e.category) = lower(?)
            AND e.slug IS NOT NULL
            AND i.filename LIKE '%iOS%'
            ${excludedSlugs && excludedSlugs.length > 0 ? `AND e.slug NOT IN (${excludedPlaceholders})` : ''}
        `;
        const countParams = excludedSlugs && excludedSlugs.length > 0 ? [category, ...excludedSlugs] : [category];
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
            ${excludedSlugs && excludedSlugs.length > 0 ? `AND e.slug NOT IN (${excludedPlaceholders})` : ''}
          ORDER BY 
            CASE WHEN e.slug LIKE '%-skin-tone%' OR e.slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
            COALESCE(e.title, e.slug) COLLATE NOCASE
          LIMIT ? OFFSET ?
        `;
        
        const emojisParams = excludedSlugs && excludedSlugs.length > 0 
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
        
        if (emojiRows.length === 0) {
          result = { emojis: [], total };
          break;
        }
        
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
            const mime = detectMime(buffer);
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
            version: parseJSON(row.version),
            senses: parseJSON(row.senses),
            shortcodes: parseJSON(row.shortcodes),
            latestAppleImage,
          };
        });
        
        result = { emojis, total };
        break;
      }

      case 'getEmojiImages': {
        const { slug } = params;
        const rows = db.prepare('SELECT filename, image_data FROM images WHERE emoji_slug = ?').all(slug) as Array<{
          filename: string;
          image_data: Buffer;
        }>;
        
        const images: Record<string, string> = {};
        
        for (const row of rows) {
          const lower = row.filename.toLowerCase();
          
          const setImage = (variant: string) => {
            if (images[variant]) return;
            
            const buffer = Buffer.from(row.image_data);
            const mime = detectMime(buffer);
            const base64 = buffer.toString('base64');
            images[variant] = `data:${mime};base64,${base64}`;
          };
          
          if (/_3d|3d/i.test(lower)) setImage('3d');
          else if (/_color|color/i.test(lower)) setImage('color');
          else if (/_flat|flat/i.test(lower)) setImage('flat');
          else if (/_high_contrast|high_contrast|highcontrast/i.test(lower)) setImage('high_contrast');
        }
        
        result = images;
        break;
      }

      case 'getDiscordEmojiBySlug': {
        const { slug } = params;
        const emoji = db.prepare(`
          SELECT 
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
          WHERE slug = ?
        `).get(slug) as any;
        
        if (!emoji) {
          result = null;
          break;
        }
        
        // Get only Discord-vendor images
        const imageRows = db.prepare(`
          SELECT filename, image_data 
          FROM images 
          WHERE emoji_slug = ? AND image_type = 'twemoji-vendor'
        `).all(slug) as Array<{
          filename: string;
          image_data: Buffer;
        }>;
        
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
        
        if (discordImages.length === 0) {
          result = null;
          break;
        }
        
        const latestImage = discordImages[discordImages.length - 1];
        
        result = {
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
          discord_vendor_description: emoji.discord_vendor_description || emoji.description || "",
        };
        break;
      }

      case 'getAppleEmojiBySlug': {
        const { slug } = params;
        const emoji = db.prepare(`
          SELECT 
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
          WHERE slug = ?
        `).get(slug) as any;
        
        if (!emoji) {
          result = null;
          break;
        }
        
        // Fetch all images for this emoji only
        const imageRows = db.prepare('SELECT filename, image_data FROM images WHERE emoji_slug = ?').all(slug) as Array<{
          filename: string;
          image_data: Buffer;
        }>;
        
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
        
        result = {
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
          apple_vendor_description: emoji.apple_vendor_description || emoji.description || "",
        };
        break;
      }

      case 'fetchImageFromDB': {
        const { slug, filename } = params;
        const row = db.prepare('SELECT image_data FROM images WHERE emoji_slug = ? AND filename = ?').get(slug, filename) as {
          image_data: Buffer;
        } | undefined;
        
        if (!row || !row.image_data) {
          result = null;
          break;
        }
        
        const buffer = Buffer.from(row.image_data);
        const mime = detectMime(buffer);
        result = `data:${mime};base64,${buffer.toString('base64')}`;
        break;
      }

      case 'getSitemapEmojis': {
        const rows = db.prepare('SELECT slug, category FROM emojis WHERE slug IS NOT NULL').all() as Array<{
          slug: string;
          category: string;
        }>;
        result = rows.map(r => ({ slug: r.slug, category: r.category }));
        break;
      }

      case 'getSitemapAppleEmojis': {
        const { excludedSlugs } = params;
        const excludedPlaceholders = excludedSlugs && excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
        
        const query = `
          SELECT slug, category
          FROM emojis
          WHERE slug IS NOT NULL
            AND EXISTS (
              SELECT 1 FROM images 
              WHERE images.emoji_slug = emojis.slug 
              AND images.filename LIKE '%iOS%'
            )
            ${excludedSlugs && excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
        `;
        
        const queryParams = excludedSlugs && excludedSlugs.length > 0 ? excludedSlugs : [];
        const rows = db.prepare(query).all(...queryParams) as Array<{ slug: string; category: string }>;
        result = rows.map(r => ({ slug: r.slug, category: r.category }));
        break;
      }

      case 'getSitemapDiscordEmojis': {
        const { excludedSlugs } = params;
        const excludedPlaceholders = excludedSlugs && excludedSlugs.length > 0 ? excludedSlugs.map(() => '?').join(',') : '';
        
        const query = `
          SELECT slug, category
          FROM emojis
          WHERE slug IS NOT NULL
            AND EXISTS (
              SELECT 1 FROM images 
              WHERE images.emoji_slug = emojis.slug 
              AND images.image_type = 'twemoji-vendor'
            )
            ${excludedSlugs && excludedSlugs.length > 0 ? `AND slug NOT IN (${excludedPlaceholders})` : ''}
        `;
        
        const queryParams = excludedSlugs && excludedSlugs.length > 0 ? excludedSlugs : [];
        const rows = db.prepare(query).all(...queryParams) as Array<{ slug: string; category: string }>;
        result = rows.map(r => ({ slug: r.slug, category: r.category }));
        break;
      }

      default:
        throw new Error(`Unknown query type: ${type}`);
    }

    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    console.log(
      `${highlight(`[${endTime.toISOString()}]`, logColors.timestamp)} ${dbLabel} Worker ${workerId} completed ${type} in ${duration}ms`
    );

    parentPort?.postMessage({
      id,
      result,
    });
  } catch (error: any) {
    console.error(`[EMOJI_DB] Worker ${workerId} error in ${type}:`, error);
    parentPort?.postMessage({
      id,
      error: error.message || String(error),
    });
  }
});

