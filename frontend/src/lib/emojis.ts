import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { existsSync } from 'fs';
import { getAllAppleEmojis, getAppleEmojiBySlug } from './appleEmojis';

export interface EmojiData {
  // Basic info
  code: string;                       // The emoji character itself
  slug: string;                       // Unique slug
  title: string;                      // Human-readable title
  description?: string;               // General description
  category?: string;                  // Top-level category, e.g., "People & Body"
  alsoKnownAs?: string[];             // Aliases

  // Shortcodes mapped by vendor
  shortcodes?: {
    [vendor: string]: string;         // e.g., github, slack, discord
  };

  // Keywords
  keywords?: string[];

  // Senses for adjectives, verbs, nouns
  senses?: {
    adjectives?: string[];
    verbs?: string[];
    nouns?: string[];
  };

  // Version information
  version?: {
    'unicode-version'?: string;
    'emoji-version'?: string;
  };

  // Apple vendor-specific description
  apple_vendor_description?: string;

  // Unicode points (hex strings)
  Unicode?: string[];

  // Relative folder path under public/emoji_data
  folderPath?: string;
}


export interface EmojiImageVariants {
  '3d'?: string;
  'color'?: string;
  'flat'?: string;
  'high_contrast'?: string;
}

export const categoryIconMap: Record<string, string> = {
  "Smileys & Emotion": "😀",
  "People & Body": "👤",
  "Animals & Nature": "🐶",
  "Food & Drink": "🍎",
  "Travel & Places": "✈️",
  "Activities": "⚽",
  "Objects": "📱",
  "Symbols": "❤️",
  "Flags": "🏁",
  "Other": "❓"
};

let emojiCache: EmojiData[] | null = null;
let slugToFolderPath: Record<string, string> | null = null;

export function getAllEmojis(): EmojiData[] {
  if (emojiCache) return emojiCache;

  const emojiDataPath = join(process.cwd(), 'public/emoji_data');
  const emojis: EmojiData[] = [];
  const slugMap: Record<string, string> = {};

  if (!existsSync(emojiDataPath)) {
    console.warn('Emoji data directory does not exist:', emojiDataPath);
    return [];
  }

  const topLevelEntries = readdirSync(emojiDataPath);

  for (const entry of topLevelEntries) {
    const entryPath = join(emojiDataPath, entry);
    const entryStat = statSync(entryPath);
    if (!entryStat.isDirectory()) continue;

    // Flat structure: each folder is a slug folder
    const flatJsonFile = join(entryPath, `${entry}.json`);
    if (existsSync(flatJsonFile)) {
      try {
        const jsonContent = readFileSync(flatJsonFile, 'utf-8');
        const emojiData: EmojiData = JSON.parse(jsonContent);
        if (emojiData?.slug) {
          emojiData.folderPath = entry;
          emojis.push(emojiData);
          slugMap[emojiData.slug] = entry;
        }
      } catch (err) {
        console.warn(`Failed to parse emoji JSON for ${entry}:`, err);
      }
      continue;
    }

    // Nested structure: category folder containing slug folders
    try {
      const slugFolders = readdirSync(entryPath);
      for (const slugFolder of slugFolders) {
        const slugFolderPath = join(entryPath, slugFolder);
        const slugStat = statSync(slugFolderPath);
        if (!slugStat.isDirectory()) continue;

        const nestedJsonFile = join(slugFolderPath, `${slugFolder}.json`);
        if (!existsSync(nestedJsonFile)) continue;

        try {
          const jsonContent = readFileSync(nestedJsonFile, 'utf-8');
          const emojiData: EmojiData = JSON.parse(jsonContent);
          if (emojiData?.slug) {
            emojiData.folderPath = `${entry}/${slugFolder}`;
            emojis.push(emojiData);
            slugMap[emojiData.slug] = `${entry}/${slugFolder}`;
          }
        } catch (err) {
          console.warn(`Failed to parse emoji JSON for ${slugFolder} in ${entry}:`, err);
        }
      }
    } catch (err) {
      console.warn(`Failed to read category directory ${entry}:`, err);
    }
  }

  // Sort: base emojis first, then skin-tone variants
  emojis.sort((a, b) => {
    const skinToneRegex = /(light|medium|dark)?-?skin-tone/;
    const aIsSkinTone = skinToneRegex.test(a.slug);
    const bIsSkinTone = skinToneRegex.test(b.slug);

    if (aIsSkinTone && !bIsSkinTone) return 1;
    if (!aIsSkinTone && bIsSkinTone) return -1;

    const titleA = a.title || a.slug || '';
    const titleB = b.title || b.slug || '';
    return titleA.localeCompare(titleB);
  });

  emojiCache = emojis;
  slugToFolderPath = slugMap;
  return emojis;
}
export function getEmojiBySlug(slug: string): EmojiData | null {
  const all = getAllEmojis();
  const found = all.find(e => e.slug === slug);
  if (found) return found;

  // Fallback to filesystem direct (legacy flat layout)
  const emojiDataPath = join(process.cwd(), 'public/emoji_data');
  const jsonFile = join(emojiDataPath, slug, `${slug}.json`);
  if (existsSync(jsonFile)) {
    try {
      const jsonContent = readFileSync(jsonFile, 'utf-8');
      return JSON.parse(jsonContent);
    } catch (error) {
      console.warn(`Failed to read emoji data for ${slug}:`, error);
    }
  }
  return null;
}

export function getEmojiImages(slug: string): EmojiImageVariants {
  const all = getAllEmojis();
  const match = all.find(e => e.slug === slug);
  const baseRelativePath = match?.folderPath || slug;
  const emojiDataPath = join(process.cwd(), 'public/emoji_data');
  const folderPath = join(emojiDataPath, baseRelativePath);
  const images: EmojiImageVariants = {};
  
  if (!existsSync(folderPath)) {
    return images;
  }
  
  try {
    const files = readdirSync(folderPath);
    
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.svg')) {
        const baseName = file.replace(/\.(png|svg)$/, '');
        const lower = baseName.toLowerCase();

        const setImage = (variant: keyof EmojiImageVariants) => {
          if (!images[variant]) {
            images[variant] = match?.folderPath
              ? `/freedevtools/emoji_data/${match.folderPath}/${file}`
              : `/freedevtools/emoji_data/${slug}/${file}`;
          }
        };

        // Flexible variant detection: allow extra suffixes like _dark, -medium-dark, etc.
        const has3d = /(^|[\-_])3d([\-_]|$)/.test(lower);
        const hasColor = /(^|[\-_])color([\-_]|$)/.test(lower);
        const hasFlat = /(^|[\-_])flat([\-_]|$)/.test(lower);
        const hasHighContrast = /high[\-_]?contrast/.test(lower);

        if (has3d) setImage('3d');
        if (hasColor) setImage('color');
        if (hasFlat) setImage('flat');
        if (hasHighContrast) setImage('high_contrast');
      }
    }
  } catch (error) {
    console.warn(`Failed to read emoji images for ${slug}:`, error);
  }
  
  return images;
}

export function getEmojisByCategory1(categoryName: string, vendor?: 'apple'): EmojiData[] {
  const allEmojis = getAllEmojis(); // Base metadata only
  const normalized = categoryName.toLowerCase();
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const targetSlug = slugify(categoryName);

  return allEmojis
    .filter((emoji) => {
      const group = (
        emoji.fluentui_metadata?.group ||
        emoji.emoji_net_data?.category ||
        (emoji as any).given_category ||
        'Other'
      ).toLowerCase();
      return group === normalized || slugify(group) === targetSlug;
    })
    .map((emoji) => {
      if (vendor === 'apple') {
        // Load the latestAppleImage from Apple evolution data
        const appleEmoji = getAppleEmojiBySlug(emoji.slug);
        return {
          ...emoji,
          latestAppleImage: appleEmoji?.latestAppleImage || null
        };
      }
      return emoji;
    });
}

export function getEmojisByCategory(
  categoryName: string,
  vendor?: 'apple'
): EmojiData[] {
  const allEmojis = getAllEmojis(); // Assume cached globally
  const normalizedCategory = categoryName.toLowerCase();
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const targetSlug = slugify(categoryName);

  // If Apple vendor is requested, pre-load Apple emoji info
  let appleEmojiMap: Record<string, { latestAppleImage?: string }> = {};
  if (vendor === 'apple') {
    const allAppleEmojis = getAllAppleEmojis(); // Implement bulk fetch once
    appleEmojiMap = allAppleEmojis.reduce((map, emoji) => {
      map[emoji.slug] = emoji;
      return map;
    }, {} as Record<string, { latestAppleImage?: string }>);
  }

  // Filter emojis by category field
  let filtered = allEmojis.filter((emoji) => {
    if (!emoji.category) return false;
    const catLower = emoji.category.toLowerCase();
    return catLower === normalizedCategory || slugify(catLower) === targetSlug;
  });

  // Exclude Apple-specific emojis if vendor is 'apple'
  if (vendor === 'apple') {
    filtered = filtered.filter(
      (emoji) => !apple_vendor_excluded_emojis.includes(emoji.slug)
    );

    // Enrich with Apple images
    return filtered.map((emoji) => ({
      ...emoji,
      latestAppleImage: appleEmojiMap[emoji.slug]?.latestAppleImage || null,
    }));
  }

  return filtered;
}




export function getEmojiCategories(): string[] {
  const allEmojis = getAllEmojis();
  const validCategories = Object.keys(categoryIconMap);
  const categories = new Set<string>();

  for (const emoji of allEmojis) {
    const rawCategory = emoji.category?.trim();
    const category = validCategories.includes(rawCategory)
      ? rawCategory
      : "Other";
    categories.add(category);
  }

  return Array.from(categories).sort();
}


export const apple_vendor_excluded_emojis = [
  "person-with-beard",
  "woman-in-motorized-wheelchair-facing-right",

  "person-in-bed-medium-skin-tone",
  "person-in-bed-light-skin-tone",
  "person-in-bed-dark-skin-tone",
  "person-in-bed-medium-light-skin-tone",
  "person-in-bed-medium-dark-skin-tone",

  "snowboarder-medium-light-skin-tone",
  "snowboarder-dark-skin-tone",
  "snowboarder-medium-dark-skin-tone",
  "snowboarder-light-skin-tone",
  "snowboarder-medium-skin-tone",

  "medical-symbol",
  "male-sign",
  "female-sign",
  "woman-with-headscarf"
];
