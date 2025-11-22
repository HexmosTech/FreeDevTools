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

// === Fetch all emojis ===
export function getAllEmojis(): EmojiData[] {
  const db = getDb();
  const rows = db
    .prepare(
      `
      SELECT 
        code,
        unicode,
        slug,
        title,
        category,
        description,
        apple_vendor_description,
        keywords,
        also_known_as,
        version,
        senses,
        shortcodes
      FROM emojis
    `
    )
    .all();

  const emojis: EmojiData[] = rows.map((r) => ({
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

  // Sort: base first, then tone variants
  const toneRegex = /(light|medium|dark)?-?skin-tone/;
  emojis.sort((a, b) => {
    const aTone = toneRegex.test(a.slug);
    const bTone = toneRegex.test(b.slug);
    if (aTone && !bTone) return 1;
    if (!aTone && bTone) return -1;
    return (a.title || a.slug).localeCompare(b.title || b.slug);
  });

  return emojis;
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

// === Fetch by category ===
export function getEmojisByCategory(category: string, vendor?: string): EmojiData[] {
  const db = getDb();

  const rows = db
    .prepare(`SELECT * FROM emojis WHERE lower(category) = lower(?)`)
    .all(category);

  return rows
    .filter(r => {
      if (!r.slug) return false;
      if (vendor === "discord") {
        return !discord_vendor_excluded_emojis?.includes(r.slug);
      }
      if (vendor === "apple") {
        return !apple_vendor_excluded_emojis?.includes(r.slug);
      }
      return true;
    })
    .map((r) => ({
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

/**
 * Fetch all Apple emojis with their versioned Apple image evolution.
 */
export function getAllAppleEmojis() {
  const db = getDb();

  const emojiRows = db
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
        FROM emojis`
    )
    .all();

  const allEmojis = [];

  for (const emoji of emojiRows) {
    const slug = emoji.slug;

    const imageRows = db
      .prepare(`SELECT filename, image_data FROM images WHERE emoji_slug = ?`)
      .all(slug);

    const appleImages = imageRows
      .filter((row) => /iOS[_\s]?\d+/i.test(row.filename)) // only Apple evolution ones
      .map((row) => {
        const buffer = Buffer.from(row.image_data);
        const mime = detectMime(buffer);
        const base64 = buffer.toString('base64');

        return {
          file: row.filename,
          url: `data:${mime};base64,${base64}`,
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

    if (appleImages.length === 0) continue;

    const latestImage = appleImages[appleImages.length - 1];

    allEmojis.push({
      ...emoji,
      Unicode: parseJSON<string[]>(emoji.unicode) || [],
      keywords: parseJSON<string[]>(emoji.keywords) || [],
      alsoKnownAs: parseJSON<string[]>(emoji.also_known_as) || [],
      version: parseJSON(emoji.version),
      senses: parseJSON(emoji.senses),
      shortcodes: parseJSON(emoji.shortcodes),
      slug,
      appleEvolutionImages: appleImages,
      latestAppleImage: latestImage.url,
      apple_vendor_description:
        emoji.apple_vendor_description || emoji.description || '',
    });
  }

  return allEmojis;
}


export function getAllDiscordEmojis() {
  const db = getDb();

  const emojiRows = db
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
        FROM emojis`
    )
    .all();

  const allEmojis = [];

  for (const emoji of emojiRows) {
    const slug = emoji.slug;

    // Get only Discord vendor images
    const imageRows = db
      .prepare(
        `SELECT filename, image_data 
         FROM images 
         WHERE emoji_slug = ? AND image_type = 'twemoji-vendor'`
      )
      .all(slug);

    // Filter and normalize Discord evolution images
    const discordImages = imageRows
      .map((row) => {
        const buffer = Buffer.from(row.image_data);
        const mime = detectMime(buffer);
        const base64 = buffer.toString('base64');

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

    if (discordImages.length === 0) continue;

    const latestImage = discordImages[discordImages.length - 1];

    allEmojis.push({
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
        emoji.discord_vendor_description || emoji.description || '',
    });
  }

  return allEmojis;
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

export function fetchLatestAppleImage(slug) {
  const db = getDb();

  // Fetch all Apple emoji image filenames for this slug
  const rows = db
    .prepare(
      `SELECT filename, image_data
        FROM images
        WHERE emoji_slug = ? AND filename LIKE '%iOS%'
        ORDER BY filename COLLATE NOCASE`
    )
    .all(slug);

  if (!rows.length) return null;

  // Parse version numbers like iOS_14.2 → 14.2
  const parseVersion = (name) => {
    const match = name.match(/iOS[_\s]?([\d.]+)/i);
    return match ? parseFloat(match[1]) : 0;
  };

  // Pick the image with the highest iOS version number
  const latest = rows.reduce((best, row) => {
    return parseVersion(row.filename) > parseVersion(best.filename)
      ? row
      : best;
  }, rows[0]);

  // Convert to Base64 with proper MIME detection
  const buffer = Buffer.from(latest.image_data);
  const head = buffer.toString('ascii', 0, 20);
  let mime = 'application/octet-stream';
  if (head.includes('<svg')) mime = 'image/svg+xml';
  else if (head.startsWith('RIFF')) mime = 'image/webp';
  else if (buffer[0] === 0x89 && head.includes('PNG')) mime = 'image/png';
  else if (head.includes('JFIF') || head.includes('Exif')) mime = 'image/jpeg';

  return `data:${mime};base64,${buffer.toString('base64')}`;
}

export function fetchLatestDiscordImage(slug) {
  const db = getDb();

  // Fetch Discord (Twemoji vendor) images for this slug
  const rows = db
    .prepare(
      `SELECT filename, image_data
       FROM images
       WHERE emoji_slug = ? AND image_type = 'twemoji-vendor'
       ORDER BY filename COLLATE NOCASE`
    )
    .all(slug);

  if (!rows.length) return null;

  // Extract versions from filenames like ..._7.0.png or ..._14.1.webp
  const parseVersion = (name) => {
    const match = name.match(/[_-]([\d.]+)\.(png|jpg|jpeg|webp|svg)$/i);
    return match ? parseFloat(match[1]) : 0;
  };

  // Pick file with highest vendor version
  const latest = rows.reduce((best, row) => {
    return parseVersion(row.filename) > parseVersion(best.filename)
      ? row
      : best;
  }, rows[0]);

  // Convert BLOB to Base64 with MIME detection
  const buffer = Buffer.from(latest.image_data);
  const head = buffer.toString('ascii', 0, 20);

  let mime = 'application/octet-stream';
  if (head.includes('<svg')) mime = 'image/svg+xml';
  else if (head.startsWith('RIFF')) mime = 'image/webp';
  else if (buffer[0] === 0x89 && head.includes('PNG')) mime = 'image/png';
  else if (head.includes('JFIF') || head.includes('Exif')) mime = 'image/jpeg';

  return `data:${mime};base64,${buffer.toString('base64')}`;
}
