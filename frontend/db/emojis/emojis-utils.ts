import { apple_vendor_excluded_emojis, discord_vendor_excluded_emojis } from '@/lib/emojis-consts';
import { query } from './emoji-worker-pool';

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

// === Fetch single emoji ===
export async function getEmojiBySlug(slug: string): Promise<EmojiData | null> {
  return query.getEmojiBySlug(slug);
}

// === Get total emoji count ===
export async function getTotalEmojis(): Promise<number> {
  return query.getTotalEmojis();
}

// === Fetch categories ===
export async function getEmojiCategories(): Promise<string[]> {
  return query.getEmojiCategories();
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

export async function getCategoriesWithPreviewEmojis(
  previewEmojisPerCategory: number = 5
): Promise<CategoryWithPreviewEmojis[]> {
  return query.getCategoriesWithPreviewEmojis(previewEmojisPerCategory);
}

// === Optimized: Get categories with preview emojis for Apple vendor ===
export async function getAppleCategoriesWithPreviewEmojis(
  previewEmojisPerCategory: number = 5
): Promise<CategoryWithPreviewEmojis[]> {
  const excludedSlugs = apple_vendor_excluded_emojis || [];
  return query.getAppleCategoriesWithPreviewEmojis(previewEmojisPerCategory, excludedSlugs);
}

// === Optimized: Get categories with preview emojis for Discord vendor ===
export async function getDiscordCategoriesWithPreviewEmojis(
  previewEmojisPerCategory: number = 5
): Promise<CategoryWithPreviewEmojis[]> {
  const excludedSlugs = discord_vendor_excluded_emojis || [];
  return query.getDiscordCategoriesWithPreviewEmojis(previewEmojisPerCategory, excludedSlugs);
}


// === Paginated: Get emojis by category with count ===
export interface PaginatedEmojisResult {
  emojis: EmojiData[];
  total: number;
}

export async function getEmojisByCategoryPaginated(
  category: string,
  page: number = 1,
  itemsPerPage: number = 36,
  vendor?: string
): Promise<PaginatedEmojisResult> {
  const excludedSlugs = vendor === "discord" 
    ? (discord_vendor_excluded_emojis || [])
    : vendor === "apple"
    ? (apple_vendor_excluded_emojis || [])
    : [];
  return query.getEmojisByCategoryPaginated(category, page, itemsPerPage, vendor, excludedSlugs);
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

export async function getEmojisByCategoryWithDiscordImagesPaginated(
  category: string,
  page: number = 1,
  itemsPerPage: number = 36
): Promise<PaginatedEmojisWithDiscordImagesResult> {
  const excludedSlugs = discord_vendor_excluded_emojis || [];
  return query.getEmojisByCategoryWithDiscordImagesPaginated(category, page, itemsPerPage, excludedSlugs);
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

export async function getEmojisByCategoryWithAppleImagesPaginated(
  category: string,
  page: number = 1,
  itemsPerPage: number = 36
): Promise<PaginatedEmojisWithAppleImagesResult> {
  const excludedSlugs = apple_vendor_excluded_emojis || [];
  return query.getEmojisByCategoryWithAppleImagesPaginated(category, page, itemsPerPage, excludedSlugs);
}


export async function getEmojiImages(slug: string): Promise<EmojiImageVariants> {
  return query.getEmojiImages(slug);
}

export function extractDiscordVersion(filename: string): string {
  // Matches _7.0.png or -14.1.webp etc.
  const match = filename.match(/[_-]([\d.]+)\.(png|jpg|jpeg|webp|svg)$/i);
  return match ? match[1] : '0';
}

export async function getDiscordEmojiBySlug(slug: string) {
  return query.getDiscordEmojiBySlug(slug);
}

export async function getAppleEmojiBySlug(slug: string) {
  return query.getAppleEmojiBySlug(slug);
}

export async function fetchImageFromDB(
  slug: string,
  filename: string
): Promise<string | null> {
  return query.fetchImageFromDB(slug, filename);
}


// === Lightweight functions for sitemaps (only slug and category) ===
export interface SitemapEmoji {
  slug: string;
  category: string;
}

export async function getSitemapEmojis(): Promise<SitemapEmoji[]> {
  return query.getSitemapEmojis();
}

export async function getSitemapAppleEmojis(): Promise<SitemapEmoji[]> {
  const excludedSlugs = apple_vendor_excluded_emojis || [];
  return query.getSitemapAppleEmojis(excludedSlugs);
}

export async function getSitemapDiscordEmojis(): Promise<SitemapEmoji[]> {
  const excludedSlugs = discord_vendor_excluded_emojis || [];
  return query.getSitemapDiscordEmojis(excludedSlugs);
}
