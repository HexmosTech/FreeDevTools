import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'public', 'emoji_data');

/**
 * Reads all Apple emoji folders and builds data for the Apple Emoji Evolution section.
 */
export function getAllAppleEmojis() {
  const emojiDirs = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory());

  const allEmojis = [];

  for (const dirent of emojiDirs) {
    const slug = dirent.name;
    const emojiFolder = path.join(baseDir, slug);
    const appleDir = path.join(emojiFolder, 'apple-emojis');
    const jsonFile = path.join(emojiFolder, `${slug}.json`);

    if (!fs.existsSync(appleDir) || !fs.existsSync(jsonFile)) continue;

    // Load base emoji JSON
    let emojiData = {};
    try {
      emojiData = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
    } catch {
      console.warn(`⚠️ Failed to parse JSON for ${slug}`);
      continue;
    }

    // Collect Apple images
    const appleImages = fs.readdirSync(appleDir)
      .filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f))
      .map(f => ({
        file: f,
        url: `/freedevtools/emoji_data/${slug}/apple-emojis/${f}`,
        version: extractIOSVersion(f)
      }))
      .sort((a, b) => parseFloat(a.version) - parseFloat(b.version)); // Sort oldest → latest

    if (appleImages.length === 0) continue;

    // Add data to emoji object
    const latestImage = appleImages[appleImages.length - 1];

    allEmojis.push({
      ...emojiData,
      slug,
      appleEvolutionImages: appleImages,
      latestAppleImage: latestImage.url,
      apple_vendor_description: emojiData.apple_vendor_description || emojiData.description || ''
    });
  }

  return allEmojis;
}

/**
 * Get a single Apple emoji by slug.
 */
export function getAppleEmojiBySlug(slug: string) {
  const all = getAllAppleEmojis();
  return all.find(e => e.slug === slug);
}

/**
 * Extracts iOS version from filenames like:
 *  - "grinning-face_1f600_iOS_16.4.png"
 *  - "1st-place-medal_iOS_17.0.png"
 */
function extractIOSVersion(filename: string): string {
  const match = filename.match(/iOS[_\s]?([0-9.]+)/i);
  return match ? `iOS ${match[1]}` : 'Unknown';
}
