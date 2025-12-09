#!/usr/bin/env node

import Database from 'better-sqlite3';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  dbPath: path.join(__dirname, 'svg-icons-db-v1.db'),
  jsonPath: path.join(__dirname, 'svg_urls.json'),
};

// Removed force and dryRun flags - always migrate

function buildIconUrl(cluster, name) {
  const segments = [cluster, name]
    .filter((segment) => typeof segment === 'string' && segment.length > 0)
    .map((segment) => encodeURIComponent(segment));
  return '/' + segments.join('/');
}

function hashUrlToKey(url) {
  const hash = crypto.createHash('sha256').update(url).digest();
  return hash.readBigInt64BE(0);
}

function hashNameToKey(name) {
  const hash = crypto.createHash('sha256').update(name).digest();
  return hash.readBigInt64BE(0);
}

function openDatabase() {
  return new Database(config.dbPath, { fileMustExist: true });
}

function migrateIconTable(db) {
  console.log('🔄 Migrating icon table...');

  // Read all data from old table
  const rows = db
    .prepare(
      `
    SELECT id, cluster, name, base64, description, usecases, synonyms, tags,
           industry, emotional_cues, enhanced, img_alt, ai_image_alt_generated
    FROM icon
  `
    )
    .all();

  console.log(`   Processing ${rows.length.toLocaleString()} icon rows...`);

  // Generate hashes and URLs for all rows
  const rowsWithHash = rows.map((row) => {
    const url = buildIconUrl(row.cluster, row.name);
    const hash = hashUrlToKey(url);
    return {
      ...row,
      url,
      url_hash: hash,
    };
  });

  // Create new table
  db.exec(`
    PRAGMA foreign_keys = OFF;
    
    BEGIN TRANSACTION;
    
    CREATE TABLE icon_new (
      id INTEGER,
      url_hash INTEGER PRIMARY KEY,
      cluster TEXT NOT NULL,
      name TEXT NOT NULL,
      base64 TEXT NOT NULL,
      description TEXT DEFAULT '',
      usecases TEXT DEFAULT '[]',
      synonyms TEXT DEFAULT '[]',
      tags TEXT DEFAULT '[]',
      industry TEXT DEFAULT '',
      emotional_cues TEXT DEFAULT '',
      enhanced INTEGER DEFAULT 0,
      img_alt TEXT DEFAULT '',
      ai_image_alt_generated INTEGER DEFAULT 0,
      url TEXT NOT NULL
    ) WITHOUT ROWID;
    
    COMMIT;
    
    PRAGMA foreign_keys = ON;
  `);

  // Insert data with hashes
  const insertStmt = db.prepare(`
    INSERT INTO icon_new (
      id, url_hash, cluster, name, base64, description, usecases, synonyms, tags,
      industry, emotional_cues, enhanced, img_alt, ai_image_alt_generated, url
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertBatch = db.transaction((entries) => {
    for (const entry of entries) {
      insertStmt.run(
        entry.id,
        entry.url_hash,
        entry.cluster,
        entry.name,
        entry.base64,
        entry.description,
        entry.usecases,
        entry.synonyms,
        entry.tags,
        entry.industry,
        entry.emotional_cues,
        entry.enhanced,
        entry.img_alt,
        entry.ai_image_alt_generated,
        entry.url
      );
    }
  });

  insertBatch(rowsWithHash);

  // Drop old table and rename new one
  db.exec(`
    PRAGMA foreign_keys = OFF;
    
    BEGIN TRANSACTION;
    
    DROP TABLE icon;
    
    ALTER TABLE icon_new RENAME TO icon;
    
    COMMIT;
    
    PRAGMA foreign_keys = ON;
  `);

  console.log('✅ Icon table migrated successfully.');
}

function migrateClusterPreviewTable(db) {
  console.log('🔄 Migrating cluster_preview_precomputed table...');

  // Read all data from old table
  const rows = db
    .prepare(
      `
    SELECT id, name, source_folder, path, count, keywords_json, tags_json,
           title, description, practical_application, alternative_terms_json,
           about, why_choose_us_json, preview_icons_json
    FROM cluster_preview_precomputed
  `
    )
    .all();

  console.log(`   Processing ${rows.length.toLocaleString()} cluster rows...`);

  // Generate hashes for all rows
  const rowsWithHash = rows.map((row) => ({
    ...row,
    hash_name: hashNameToKey(row.name),
  }));

  // Create new table
  db.exec(`
    PRAGMA foreign_keys = OFF;
    
    BEGIN TRANSACTION;
    
    CREATE TABLE cluster_preview_precomputed_new (
      id INTEGER,
      hash_name INTEGER PRIMARY KEY,
      name TEXT,
      source_folder TEXT,
      path TEXT,
      count INTEGER,
      keywords_json TEXT,
      tags_json TEXT,
      title TEXT,
      description TEXT,
      practical_application TEXT,
      alternative_terms_json TEXT,
      about TEXT,
      why_choose_us_json TEXT,
      preview_icons_json TEXT
    ) WITHOUT ROWID;
    
    COMMIT;
    
    PRAGMA foreign_keys = ON;
  `);

  // Insert data with hashes
  const insertStmt = db.prepare(`
    INSERT INTO cluster_preview_precomputed_new (
      id, hash_name, name, source_folder, path, count, keywords_json, tags_json,
      title, description, practical_application, alternative_terms_json,
      about, why_choose_us_json, preview_icons_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertBatch = db.transaction((entries) => {
    for (const entry of entries) {
      insertStmt.run(
        entry.id,
        entry.hash_name,
        entry.name,
        entry.source_folder,
        entry.path,
        entry.count,
        entry.keywords_json,
        entry.tags_json,
        entry.title,
        entry.description,
        entry.practical_application,
        entry.alternative_terms_json,
        entry.about,
        entry.why_choose_us_json,
        entry.preview_icons_json
      );
    }
  });

  insertBatch(rowsWithHash);

  // Drop old table and rename new one
  db.exec(`
    PRAGMA foreign_keys = OFF;
    
    BEGIN TRANSACTION;
    
    DROP TABLE cluster_preview_precomputed;
    
    ALTER TABLE cluster_preview_precomputed_new RENAME TO cluster_preview_precomputed;
    
    COMMIT;
    
    PRAGMA foreign_keys = ON;
  `);

  console.log('✅ Cluster preview table migrated successfully.');
}

async function main() {
  const db = openDatabase();

  console.log('🚀 Starting migration...\n');

  // Always migrate icon table
  migrateIconTable(db);

  // Always migrate cluster_preview_precomputed table
  migrateClusterPreviewTable(db);

  // Drop old cluster table and rename cluster_preview_precomputed to cluster
  console.log('🔄 Replacing cluster table...');
  db.exec(`
    PRAGMA foreign_keys = OFF;
    
    BEGIN TRANSACTION;
    
    DROP TABLE IF EXISTS cluster;
    
    ALTER TABLE cluster_preview_precomputed RENAME TO cluster;
    
    COMMIT;
    
    PRAGMA foreign_keys = ON;
  `);
  console.log('✅ Cluster table replaced successfully.\n');

  // Generate JSON file
  const payload = db
    .prepare(
      "SELECT url, url_hash FROM icon WHERE url <> '' AND url_hash IS NOT NULL"
    )
    .all()
    .map((row) => ({
      url: row.url,
      hash: row.url_hash.toString(),
    }));

  fs.writeFileSync(config.jsonPath, JSON.stringify(payload));
  console.log(
    `\n✅ Wrote ${payload.length.toLocaleString()} url entries to ${path.basename(config.jsonPath)}`
  );

  db.close();
  console.log('\n✅ Migration complete!');
}

main().catch((err) => {
  console.error('❌ Error generating icon hashes:', err);
  process.exit(1);
});
