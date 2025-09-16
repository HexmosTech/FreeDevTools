import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { existsSync } from 'fs';

export interface EmojiData {
  alsoKnownAs?: string[];
  appleName?: string;
  code: string;
  codepointsHex?: string[];
  components?: any[];
  currentCldrName?: string;
  description?: string;
  emojiVersion?: {
    date: number;
    name: string;
    slug: string;
    status: number;
  };
  id: string;
  shortcodes?: Array<{
    code: string;
    vendor: {
      slug: string;
      title: string;
    };
    source?: string;
  }>;
  slug: string;
  title: string;
  type: string;
  version?: {
    date: number;
    description?: string;
    name: string;
    slug: string;
    status: number;
  };
  emoji_net_data?: {
    category?: string;
    keywords?: string[];
    definition?: string;
    name?: string;
    unicode?: string;
    shortcode?: string;
    senses?: any;
  };
  fluentui_metadata?: {
    cldr?: string;
    fromVersion?: string;
    glyph?: string;
    glyphAsUtfInEmoticons?: string[];
    group?: string;
    keywords?: string[];
    mappedToEmoticons?: string[];
    tts?: string;
    unicode?: string;
  };
  fluentui_folder?: string;
  // Relative folder path under public/emoji_data, e.g., "smileys/grinning-face"
  folderPath?: string;
}

export interface EmojiImageVariants {
  '3d'?: string;
  'color'?: string;
  'flat'?: string;
  'high_contrast'?: string;
}

let emojiCache: EmojiData[] | null = null;
let slugToFolderPath: Record<string, string> | null = null;

export function getAllEmojis(): EmojiData[] {
  if (emojiCache) {
    return emojiCache;
  }

  const emojiDataPath = join(process.cwd(), 'public/emoji_data');
  const emojis: EmojiData[] = [];
  const slugMap: Record<string, string> = {};
  
  try {
    if (!existsSync(emojiDataPath)) {
      console.warn('Emoji data directory does not exist:', emojiDataPath);
      return [];
    }

    const topLevelEntries = readdirSync(emojiDataPath);

    for (const entry of topLevelEntries) {
      const entryPath = join(emojiDataPath, entry);
      const entryStat = statSync(entryPath);

      if (!entryStat.isDirectory()) continue;

      // Case 1: Flat structure - entry is a slug folder
      const flatJsonFile = join(entryPath, `${entry}.json`);
      if (existsSync(flatJsonFile)) {
        try {
          const jsonContent = readFileSync(flatJsonFile, 'utf-8');
          const emojiData: EmojiData = JSON.parse(jsonContent);
          if (emojiData && emojiData.slug && emojiData.slug.trim() !== '') {
            emojiData.folderPath = entry;
            // No category folder in flat structure
            emojis.push(emojiData);
            slugMap[emojiData.slug] = entry;
          } else {
            console.warn(`Skipping emoji with invalid slug: ${entry}`);
          }
          continue;
        } catch (error) {
          console.warn(`Failed to read emoji data for ${entry}:`, error);
          continue;
        }
      }

      // Case 2: Nested structure - entry is a category folder containing slug folders
      try {
        const maybeSlugFolders = readdirSync(entryPath);
        for (const slugFolder of maybeSlugFolders) {
          const slugFolderPath = join(entryPath, slugFolder);
          const slugStat = statSync(slugFolderPath);
          if (!slugStat.isDirectory()) continue;

          const nestedJsonFile = join(slugFolderPath, `${slugFolder}.json`);
          if (!existsSync(nestedJsonFile)) continue;

          try {
            const jsonContent = readFileSync(nestedJsonFile, 'utf-8');
            const emojiData: EmojiData = JSON.parse(jsonContent);
            if (emojiData && emojiData.slug && emojiData.slug.trim() !== '') {
              emojiData.folderPath = `${entry}/${slugFolder}`;
              emojis.push(emojiData);
              slugMap[emojiData.slug] = `${entry}/${slugFolder}`;
            } else {
              console.warn(`Skipping emoji with invalid slug: ${slugFolder} in category ${entry}`);
            }
          } catch (error) {
            console.warn(`Failed to read emoji data for ${slugFolder} in ${entry}:`, error);
          }
        }
      } catch (error) {
        console.warn(`Failed to read category directory ${entry}:`, error);
      }
    }
  } catch (error) {
    console.error('Failed to read emoji data directory:', error);
  }
  
  // Sort emojis: base emojis first, then skin tone variants
  emojis.sort((a, b) => {
    const aIsSkinTone = a.slug.includes('-skin-tone') || a.slug.includes('light-skin-tone') || a.slug.includes('medium-skin-tone') || a.slug.includes('dark-skin-tone');
    const bIsSkinTone = b.slug.includes('-skin-tone') || b.slug.includes('light-skin-tone') || b.slug.includes('medium-skin-tone') || b.slug.includes('dark-skin-tone');
    
    if (aIsSkinTone && !bIsSkinTone) return 1;
    if (!aIsSkinTone && bIsSkinTone) return -1;
    
    // Within same type, sort by title
    const titleA = a.title || a.fluentui_metadata?.cldr || a.slug || '';
    const titleB = b.title || b.fluentui_metadata?.cldr || b.slug || '';
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

export function getEmojisByCategory(categoryName: string): EmojiData[] {
  const allEmojis = getAllEmojis();
  const normalized = categoryName.toLowerCase();
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const targetSlug = slugify(categoryName);
  return allEmojis.filter((emoji) => {
    const group = (
      emoji.fluentui_metadata?.group ||
      emoji.emoji_net_data?.category ||
      (emoji as any).given_category ||
      'Other'
    ).toLowerCase();
    return group === normalized || slugify(group) === targetSlug;
  });
}

export function getEmojiCategories(): string[] {
  const allEmojis = getAllEmojis();
  const categories = new Set<string>();
  for (const emoji of allEmojis) {
    const category =
      emoji.fluentui_metadata?.group ||
      emoji.emoji_net_data?.category ||
      (emoji as any).given_category ||
      'Other';
    if (category && category.trim() !== '') categories.add(category);
  }
  return Array.from(categories).sort();
}
