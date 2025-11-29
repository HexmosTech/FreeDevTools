#!/usr/bin/env node

import Database from 'better-sqlite3';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  dbPath: path.join(__dirname, 'svg-icons-db.db'),
  jsonPath: path.join(__dirname, 'svg_urls.json')
};

const args = process.argv.slice(2);
const force = args.includes('--force');
const dryRun = args.includes('--dry-run');

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

function openDatabase() {
  return new Database(config.dbPath, { fileMustExist: true });
}

function getColumnNames(db) {
  return db.prepare('PRAGMA table_info(icon)').all().map((row) => row.name);
}

function ensureColumn(db, column, definition) {
  const columns = getColumnNames(db);
  if (!columns.includes(column)) {
    db.exec(`ALTER TABLE icon ADD COLUMN ${column} ${definition}`);
    console.log(`✨ Added ${column} column to icon table.`);
  }
}

function needsColumn(column, availableColumns) {
  return !availableColumns.includes(column);
}

function needsMigration(db) {
  // Check if table uses WITHOUT ROWID (which indicates url_hash is PRIMARY KEY)
  const tableInfo = db.prepare(`
    SELECT sql FROM sqlite_master 
    WHERE type='table' AND name='icon'
  `).get();
  
  if (!tableInfo) {
    return false;
  }
  
  const sql = tableInfo.sql || '';
  // If table doesn't have WITHOUT ROWID, it likely still uses id as PRIMARY KEY
  return !sql.includes('WITHOUT ROWID');
}

function migrateTableSchema(db) {
  console.log('🔄 Migrating icon table schema to use url_hash as PRIMARY KEY...');
  
  db.exec(`
    PRAGMA foreign_keys = OFF;
    
    BEGIN TRANSACTION;
    
    -- Create new table
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
    
    -- Copy data from old table
    INSERT INTO icon_new (
      id, url_hash, cluster, name, base64, description, usecases, synonyms, tags,
      industry, emotional_cues, enhanced, img_alt, ai_image_alt_generated, url
    )
    SELECT
      id, url_hash, cluster, name, base64, description, usecases, synonyms, tags,
      industry, emotional_cues, enhanced, img_alt, ai_image_alt_generated, url
    FROM icon;
    
    DROP TABLE icon;
    
    ALTER TABLE icon_new RENAME TO icon;
    
    COMMIT;
    
    PRAGMA foreign_keys = ON;
  `);
  
  console.log('✅ Table schema migrated successfully.');
}

async function main() {
  const db = openDatabase();
  const columns = getColumnNames(db);
  const urlColMissing = needsColumn('url', columns);
  const hashColMissing = needsColumn('url_hash', columns);

  if ((urlColMissing || hashColMissing) && dryRun) {
    console.log('⚠️  Dry run: table schema missing required columns.');
    if (urlColMissing) {
      console.log('   → Missing column: url');
    }
    if (hashColMissing) {
      console.log('   → Missing column: url_hash');
    }
    console.log('Run without --dry-run to add them before generating hashes.');
    db.close();
    return;
  }

  if (!dryRun) {
    if (urlColMissing) ensureColumn(db, 'url', "TEXT NOT NULL DEFAULT ''");
    if (hashColMissing) ensureColumn(db, 'url_hash', 'INTEGER');
    // Note: url_hash is PRIMARY KEY, so no need to create an index
  }

  const icons = db
    .prepare('SELECT id, url_hash, cluster, name, url FROM icon')
    .all();

  if (icons.length === 0) {
    console.log('⚠️  No icon rows found to hash.');
    db.close();
    return;
  }

  const needsHashing = force
    ? icons
    : icons.filter((row) => !row.url || row.url_hash === null);

  const jsonExists = fs.existsSync(config.jsonPath);

  if (!force && needsHashing.length === 0 && jsonExists && !dryRun) {
    console.log(
      `✔ Icon table already has url/hash populated and ${path.basename(
        config.jsonPath
      )} exists. Use --force to rebuild.`
    );
    db.close();
    return;
  }

  console.log(
    `ℹ️  Hashing ${needsHashing.length.toLocaleString()} ${needsHashing.length === icons.length ? 'icons' : 'pending icons'
    }...`
  );

  const collisions = [];
  const seenHashes = new Set();
  const updates = [];

  for (const row of needsHashing) {
    const url = buildIconUrl(row.cluster, row.name);
    const hash = hashUrlToKey(url);
    const hashKey = hash.toString();

    if (seenHashes.has(hashKey)) {
      collisions.push({ url, hash: hashKey });
      continue;
    }

    seenHashes.add(hashKey);
    // Use id to identify row since url_hash might be NULL initially
    updates.push({ id: row.id, url, hash });
  }

  console.log(`⚙️  Prepared ${updates.length.toLocaleString()} rows (${collisions.length} collisions skipped).`);

  if (!dryRun && updates.length > 0) {
    // Use id for WHERE clause since url_hash might be NULL initially
    // Once url_hash is set, it becomes the PRIMARY KEY
    const updateStmt = db.prepare(
      'UPDATE icon SET url = ?, url_hash = ? WHERE id = ?'
    );
    const updateBatch = db.transaction((entries) => {
      for (const entry of entries) {
        updateStmt.run(entry.url, entry.hash, entry.id);
      }
    });
    updateBatch(updates);
  }

  // After populating url_hash, migrate schema if needed
  if (!dryRun && needsMigration(db)) {
    // Ensure all rows have url_hash before migration (PRIMARY KEY cannot be NULL in WITHOUT ROWID)
    const rowsWithoutHash = db.prepare('SELECT COUNT(*) as count FROM icon WHERE url_hash IS NULL').get();
    if (rowsWithoutHash.count > 0) {
      console.log(`⚠️  ${rowsWithoutHash.count} rows still missing url_hash. Cannot migrate until all rows have url_hash.`);
      console.log('   Run the script again to populate remaining hashes.');
    } else {
      migrateTableSchema(db);
    }
  }

  if (collisions.length > 0) {
    console.warn(`⚠️  ${collisions.length} collisions detected (skipped).`);
  }

  if (!dryRun) {
    const payload = db
      .prepare("SELECT url, url_hash FROM icon WHERE url <> '' AND url_hash IS NOT NULL")
      .all()
      .map((row) => ({
        url: row.url,
        hash: row.url_hash.toString()
      }));

    fs.writeFileSync(config.jsonPath, JSON.stringify(payload));
    console.log(
      `✅ Wrote ${payload.length.toLocaleString()} url entries to ${path.basename(config.jsonPath)}`
    );
  } else {
    console.log('ℹ️  Dry run: skipping commits and json write.');
  }

  db.close();
}

main().catch((err) => {
  console.error('❌ Error generating icon hashes:', err);
  process.exit(1);
});

