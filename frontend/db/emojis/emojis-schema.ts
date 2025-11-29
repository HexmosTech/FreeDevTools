export interface Emoji {
  id: number;
  code: string;
  unicode: string[]; // Array of Unicode values
  slug: string;
  title: string;
  category?: string;
  description?: string;
  apple_vendor_description?: string;
  discord_vendor_description?: string;
  keywords?: string[]; // JSON array
  also_known_as?: string[]; // JSON array
  version?: {
    'unicode-version'?: string;
    'emoji-version'?: string;
  }; // JSON object (emoji/unicode versions)
  senses?: {
    adjectives?: string[];
    verbs?: string[];
    nouns?: string[];
  }; // JSON object (adjectives/verbs/nouns)
  shortcodes?: {
    github?: string;
    slack?: string;
    discord?: string;
  }; // JSON object (github/slack/discord)
}

export interface EmojiImage {
  emoji_slug: string;
  filename: string;
  image_data: Buffer; // BLOB
  image_type: string;
}

// Raw database row types (before JSON parsing)
export interface RawEmojiRow {
  id: number;
  code: string;
  unicode: string; // JSON string before parsing
  slug: string;
  title: string;
  category: string | null;
  description: string | null;
  apple_vendor_description: string | null;
  discord_vendor_description: string | null;
  keywords: string | null; // JSON string before parsing
  also_known_as: string | null; // JSON string before parsing
  version: string | null; // JSON string before parsing
  senses: string | null; // JSON string before parsing
  shortcodes: string | null; // JSON string before parsing
}

export interface RawEmojiImageRow {
  emoji_slug: string;
  filename: string;
  image_data: Buffer; // BLOB
  image_type: string;
}

