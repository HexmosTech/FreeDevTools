#!/usr/bin/env node

import Database from 'better-sqlite3';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get database path from command line argument or use default
const dbArg = process.argv[2];
const config = {
  dbPath: dbArg 
    ? path.resolve(process.cwd(), dbArg)
    : path.join(__dirname, 'emoji-db.db'),
};

function hashToKey(value) {
  const hash = crypto.createHash('sha256').update(value || '').digest();
  return hash.readBigInt64BE(0);
}

function openDatabase() {
  return new Database(config.dbPath, { fileMustExist: true });
}

function ensureHashColumns(db) {
  console.log('🔄 Checking and adding hash columns...');
  
  // Check if columns exist
  const tableInfo = db.prepare("PRAGMA table_info(emojis)").all();
  const columnNames = tableInfo.map(col => col.name);
  
  const hasSlugHash = columnNames.includes('slug_hash');
  const hasCategoryHash = columnNames.includes('category_hash');
  
  if (!hasSlugHash) {
    console.log('   Adding slug_hash column...');
    db.exec('ALTER TABLE emojis ADD COLUMN slug_hash INTEGER');
  } else {
    console.log('   slug_hash column already exists');
  }
  
  if (!hasCategoryHash) {
    console.log('   Adding category_hash column...');
    db.exec('ALTER TABLE emojis ADD COLUMN category_hash INTEGER');
  } else {
    console.log('   category_hash column already exists');
  }
  
  return { hasSlugHash, hasCategoryHash };
}

function populateHashColumns(db) {
  console.log('🔄 Populating hash columns...');
  
  // Read all emoji data
  const rows = db.prepare(`
    SELECT id, slug, category
    FROM emojis
  `).all();
  
  console.log(`   Processing ${rows.length.toLocaleString()} emoji rows...`);
  
  // Generate hashes for all rows
  const updates = rows.map((row) => ({
    id: row.id,
    slug_hash: hashToKey(row.slug || ''),
    category_hash: hashToKey(row.category || ''),
  }));
  
  // Update rows with hashes
  const updateStmt = db.prepare(`
    UPDATE emojis 
    SET slug_hash = ?, category_hash = ?
    WHERE id = ?
  `);
  
  const updateBatch = db.transaction((entries) => {
    for (const entry of entries) {
      updateStmt.run(entry.slug_hash, entry.category_hash, entry.id);
    }
  });
  
  updateBatch(updates);
  
  console.log(`✅ Updated ${updates.length.toLocaleString()} rows with hash values`);
}

function verifyHashes(db) {
  console.log('🔄 Verifying hash columns...');
  
  const rowsWithHashes = db.prepare(`
    SELECT COUNT(*) as count 
    FROM emojis 
    WHERE slug_hash IS NOT NULL AND category_hash IS NOT NULL
  `).get();
  
  const totalRows = db.prepare('SELECT COUNT(*) as count FROM emojis').get();
  
  console.log(`   ${rowsWithHashes.count.toLocaleString()} / ${totalRows.count.toLocaleString()} rows have hash values`);
  
  if (rowsWithHashes.count === totalRows.count) {
    console.log('✅ All rows have hash values');
  } else {
    console.warn(`⚠️  ${totalRows.count - rowsWithHashes.count} rows missing hash values`);
  }
}

async function main() {
  const db = openDatabase();
  
  console.log('🚀 Starting emoji hash columns migration...\n');
  console.log(`📁 Database: ${config.dbPath}\n`);
  
  try {
    // Begin transaction
    db.exec('BEGIN TRANSACTION');
    
    // Step 1: Ensure columns exist
    const { hasSlugHash, hasCategoryHash } = ensureHashColumns(db);
    
    // Step 2: Populate hash columns (only if they were just added or need updating)
    if (!hasSlugHash || !hasCategoryHash) {
      populateHashColumns(db);
    } else {
      // Check if columns are populated
      const rowsWithHashes = db.prepare(`
        SELECT COUNT(*) as count 
        FROM emojis 
        WHERE slug_hash IS NOT NULL AND category_hash IS NOT NULL
      `).get();
      
      if (rowsWithHashes.count === 0) {
        console.log('   Columns exist but are empty, populating...');
        populateHashColumns(db);
      } else {
        console.log('   Hash columns already populated');
      }
    }
    
    // Commit transaction
    db.exec('COMMIT');
    
    // Step 3: Verify
    verifyHashes(db);
    
    console.log('\n✅ Migration complete!');
  } catch (error) {
    console.error('❌ Error adding hash columns:', error);
    db.exec('ROLLBACK');
    throw error;
  } finally {
    db.close();
  }
}

main().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});

