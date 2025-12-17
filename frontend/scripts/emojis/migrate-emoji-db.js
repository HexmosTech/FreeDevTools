#!/usr/bin/env node
/**
 * Migration script for emoji database
 * 
 * 1. Add emoji_slug_hash column to images table
 * 2. Create images_new table with emoji_slug_hash as PRIMARY KEY (WITHOUT ROWID)
 * 3. Create emojis_new table with slug_hash as PRIMARY KEY (WITHOUT ROWID)
 * 4. Create category table with preview_emojis JSON column
 */

import { Database } from 'bun:sqlite';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hash function matching hash-utils.ts
function hashSlugToKey(slug) {
  const hash = crypto.createHash('sha256').update(slug).digest();
  return hash.readBigInt64BE(0).toString();
}

// Hash emoji_slug + image_type for images table (composite key)
function hashImageKey(emojiSlug, imageType) {
  const combined = `${emojiSlug}|${imageType}`;
  const hash = crypto.createHash('sha256').update(combined).digest();
  return hash.readBigInt64BE(0).toString();
}

// Path to database
const dbPath = path.join(__dirname, 'emoji-db-v1.db');

console.log(`Opening database: ${dbPath}`);

// Check if database exists
if (!existsSync(dbPath)) {
  console.error(`❌ Error: Database file not found at ${dbPath}`);
  process.exit(1);
}

const db = new Database(dbPath);

// Enable WAL mode for better performance
db.run('PRAGMA journal_mode = WAL;');

// Wrap operations in transaction for safety
let transactionStarted = false;
try {
  db.run('BEGIN TRANSACTION;');
  transactionStarted = true;
  
  console.log('\n=== Step 1: Add emoji_slug_hash column to images table ===');
try {
  db.run('ALTER TABLE images ADD COLUMN emoji_slug_hash INTEGER;');
  console.log('✅ Added emoji_slug_hash column');
  
  // Populate emoji_slug_hash for all rows (hash of emoji_slug + image_type for uniqueness)
  console.log('Populating emoji_slug_hash values...');
  const images = db.prepare('SELECT emoji_slug, image_type FROM images').all();
  const updateStmt = db.prepare('UPDATE images SET emoji_slug_hash = ? WHERE emoji_slug = ? AND image_type = ?');
  
  let count = 0;
  for (const img of images) {
    const hash = hashImageKey(img.emoji_slug, img.image_type);
    updateStmt.run(hash, img.emoji_slug, img.image_type);
    count++;
    if (count % 1000 === 0) {
      console.log(`  Updated ${count} rows...`);
    }
  }
  console.log(`✅ Populated emoji_slug_hash for ${count} rows`);
} catch (error) {
  if (error.message.includes('duplicate column')) {
    console.log('⚠️  emoji_slug_hash column already exists, skipping...');
  } else {
    throw error;
  }
}

console.log('\n=== Step 2: Create images_new table ===');
db.run(`
  CREATE TABLE IF NOT EXISTS images_new (
    emoji_slug_hash INTEGER PRIMARY KEY,
    emoji_slug TEXT NOT NULL,
    filename TEXT NOT NULL,
    image_data BLOB NOT NULL,
    image_type TEXT NOT NULL
  ) WITHOUT ROWID
`);
console.log('✅ Created images_new table (emoji_slug_hash = hash of emoji_slug + image_type)');

console.log('\n=== Step 3: Migrate data from images to images_new ===');
console.log('Note: Multiple filenames per emoji_slug+image_type - selecting latest version...');
// For each emoji_slug + image_type, pick the latest filename (highest iOS version or latest Discord version)
// Use a subquery to rank and select the best one
const migrateImages = db.prepare(`
  INSERT INTO images_new (emoji_slug_hash, emoji_slug, filename, image_data, image_type)
  SELECT 
    emoji_slug_hash,
    emoji_slug,
    filename,
    image_data,
    image_type
  FROM (
    SELECT 
      emoji_slug_hash,
      emoji_slug,
      filename,
      image_data,
      image_type,
      ROW_NUMBER() OVER (
        PARTITION BY emoji_slug_hash 
        ORDER BY 
          CASE 
            WHEN filename LIKE '%iOS%' THEN 
              CAST(SUBSTR(filename, INSTR(filename, 'iOS') + 4, 10) AS REAL)
            WHEN image_type = 'twemoji-vendor' THEN 
              CAST(SUBSTR(filename, INSTR(filename, '_') + 1, 10) AS REAL)
            ELSE 0
          END DESC,
          filename DESC
      ) as rn
    FROM images
    WHERE emoji_slug_hash IS NOT NULL
  )
  WHERE rn = 1
`);

const result = migrateImages.run();
console.log(`✅ Migrated ${result.changes} rows to images_new`);

console.log('\n=== Step 4: Drop old images table ===');
db.run('DROP TABLE images');
console.log('✅ Dropped images table');

console.log('\n=== Step 5: Rename images_new to images ===');
db.run('ALTER TABLE images_new RENAME TO images');
console.log('✅ Renamed images_new to images');

console.log('\n=== Step 6: Create emojis_new table ===');
db.run(`
  CREATE TABLE IF NOT EXISTS emojis_new (
    slug_hash INTEGER PRIMARY KEY,
    id INTEGER NOT NULL,
    code TEXT NOT NULL,
    unicode TEXT NOT NULL,
    slug TEXT NOT NULL,
    title TEXT NOT NULL,
    category TEXT,
    description TEXT,
    apple_vendor_description TEXT,
    keywords TEXT,
    also_known_as TEXT,
    version TEXT,
    senses TEXT,
    shortcodes TEXT,
    discord_vendor_description TEXT,
    category_hash INTEGER
  ) WITHOUT ROWID
`);
console.log('✅ Created emojis_new table');

console.log('\n=== Step 7: Migrate data from emojis to emojis_new ===');
const migrateEmojis = db.prepare(`
  INSERT INTO emojis_new (
    slug_hash, id, code, unicode, slug, title, category,
    description, apple_vendor_description, keywords, also_known_as,
    version, senses, shortcodes, discord_vendor_description, category_hash
  )
  SELECT 
    slug_hash, id, code, unicode, slug, title, category,
    description, apple_vendor_description, keywords, also_known_as,
    version, senses, shortcodes, discord_vendor_description, category_hash
  FROM emojis
  WHERE slug_hash IS NOT NULL
`);

const emojiResult = migrateEmojis.run();
console.log(`✅ Migrated ${emojiResult.changes} rows to emojis_new`);

console.log('\n=== Step 8: Drop old emojis table ===');
db.run('DROP TABLE emojis');
console.log('✅ Dropped emojis table');

console.log('\n=== Step 9: Rename emojis_new to emojis ===');
db.run('ALTER TABLE emojis_new RENAME TO emojis');
console.log('✅ Renamed emojis_new to emojis');

console.log('\n=== Step 10: Create category table ===');
db.run(`
  CREATE TABLE IF NOT EXISTS category (
    category_hash INTEGER PRIMARY KEY,
    category TEXT NOT NULL,
    count INTEGER NOT NULL,
    preview_emojis_json TEXT NOT NULL DEFAULT '[]'
  ) WITHOUT ROWID
`);
console.log('✅ Created category table');

console.log('\n=== Step 11: Populate category table ===');
// Get all categories with counts
const categories = db.prepare(`
  SELECT 
    category_hash,
    category,
    COUNT(*) as count
  FROM emojis
  WHERE category IS NOT NULL AND category_hash IS NOT NULL
  GROUP BY category_hash, category
`).all();

console.log(`Found ${categories.length} categories`);

// For each category, get first 5 emojis for preview (all columns)
// Use category name instead of category_hash to ensure we get the right emojis
const getPreviewEmojis = db.prepare(`
  SELECT 
    id, code, unicode, slug, title, category,
    description, apple_vendor_description, keywords, also_known_as,
    version, senses, shortcodes, discord_vendor_description,
    slug_hash, category_hash
  FROM emojis
  WHERE category = ?
  ORDER BY 
    CASE WHEN slug LIKE '%-skin-tone%' OR slug LIKE '%skin-tone%' THEN 1 ELSE 0 END,
    COALESCE(title, slug) COLLATE NOCASE
  LIMIT 5
`);

const insertCategory = db.prepare(`
  INSERT INTO category (category_hash, category, count, preview_emojis_json)
  VALUES (?, ?, ?, ?)
`);

let categoryCount = 0;
for (const cat of categories) {
  const previewEmojis = getPreviewEmojis.all(cat.category);
  // Include all columns in the preview JSON
  const previewJson = JSON.stringify(previewEmojis);
  
  insertCategory.run(
    cat.category_hash,
    cat.category,
    cat.count,
    previewJson
  );
  
  categoryCount++;
  if (categoryCount % 10 === 0) {
    console.log(`  Processed ${categoryCount} categories...`);
  }
}

console.log(`✅ Populated category table with ${categoryCount} categories`);

console.log('\n=== Step 12: Create indexes ===');
// Create index on emojis.category_hash for faster category lookups
db.run('CREATE INDEX IF NOT EXISTS idx_emojis_category_hash ON emojis(category_hash)');
console.log('✅ Created index on emojis.category_hash');

// Create index on images.emoji_slug for backward compatibility (if needed)
db.run('CREATE INDEX IF NOT EXISTS idx_images_emoji_slug ON images(emoji_slug)');
console.log('✅ Created index on images.emoji_slug');

console.log('\n=== Migration Complete! ===');
console.log('\nSummary:');
console.log('  ✅ Added emoji_slug_hash to images table');
console.log('  ✅ Migrated images table to WITHOUT ROWID with emoji_slug_hash as PK');
console.log('  ✅ Migrated emojis table to WITHOUT ROWID with slug_hash as PK');
console.log('  ✅ Created category table with preview_emojis_json');
console.log('  ✅ Created indexes for performance');

// Verify counts
const emojiCount = db.prepare('SELECT COUNT(*) as count FROM emojis').get();
const imageCount = db.prepare('SELECT COUNT(*) as count FROM images').get();
const categoryCountFinal = db.prepare('SELECT COUNT(*) as count FROM category').get();

console.log('\nFinal counts:');
console.log(`  Emojis: ${emojiCount.count}`);
console.log(`  Images: ${imageCount.count}`);
console.log(`  Categories: ${categoryCountFinal.count}`);

  // Commit transaction
  db.run('COMMIT;');
  console.log('\n✅ Transaction committed');
  
  db.close();
  console.log('\n✅ Database migration completed successfully!');
  
} catch (error) {
  console.error('\n❌ Error during migration:', error.message);
  console.error(error.stack);
  if (transactionStarted) {
    console.log('Rolling back transaction...');
    try {
      db.run('ROLLBACK;');
      console.log('✅ Transaction rolled back');
    } catch (rollbackError) {
      console.error('❌ Failed to rollback:', rollbackError.message);
    }
  }
  db.close();
  process.exit(1);
}

