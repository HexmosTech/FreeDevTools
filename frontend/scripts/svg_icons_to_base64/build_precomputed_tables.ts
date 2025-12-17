#!/usr/bin/env node
/**
 * Build Precomputed Materialized Tables for SVG Icons Database
 * 
 * This script:
 * 1. Reads cluster and icon data from existing tables
 * 2. Precomputes preview icons for each cluster
 * 3. Creates optimized cluster_preview_precomputed table with precomputed preview_icons_json
 * 4. Inserts precomputed data
 * 5. Creates indexes for fast queries
 * 
 * Run this during icon ingestion to regenerate materialized tables.
 */

import path from 'path';
import sqlite3 from 'sqlite3';
import type { Cluster, Icon, RawClusterRow, RawIconRow } from '../../db/svg_icons/svg-icons-schema';

const DB_PATH = path.resolve(process.cwd(), 'db/all_dbs/svg-icons-db-v1.db');

interface PreviewIcon {
  id: number;
  name: string;
  base64: string;
  img_alt: string;
}

// Helper to promisify sqlite3 operations
function promisifyRun(db: sqlite3.Database, sql: string, params: any[] = []): Promise<void> {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function promisifyAll<T>(db: sqlite3.Database, sql: string, params: any[] = []): Promise<T[]> {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve((rows || []) as T[]);
    });
  });
}

function promisifyGet<T>(db: sqlite3.Database, sql: string, params: any[] = []): Promise<T | undefined> {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row as T | undefined);
    });
  });
}

// Open database connection
function openDb(): Promise<sqlite3.Database> {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(db);
    });
  });
}

// Step 1: Read cluster and icon data into memory
async function readAllData(db: sqlite3.Database): Promise<{
  clusters: Cluster[];
  icons: Icon[];
}> {
  console.log('[BUILD_PRECOMPUTED] Reading cluster and icon data from existing tables...');
  const startTime = Date.now();

  // Read clusters
  const clusterRows = await promisifyAll<RawClusterRow>(
    db,
    `SELECT id, name, count, source_folder, path, 
     json(keywords) as keywords, json(tags) as tags, 
     title, description, practical_application, json(alternative_terms) as alternative_terms,
     about, json(why_choose_us) as why_choose_us
     FROM cluster ORDER BY name`
  );

  const clusters: Cluster[] = clusterRows.map((row) => ({
    ...row,
    keywords: JSON.parse(row.keywords || '[]') as string[],
    tags: JSON.parse(row.tags || '[]') as string[],
    alternative_terms: JSON.parse(row.alternative_terms || '[]') as string[],
    why_choose_us: JSON.parse(row.why_choose_us || '[]') as string[],
  }));

  // Read icons (needed for precomputing preview icons)
  const iconRows = await promisifyAll<RawIconRow>(
    db,
    `SELECT id, cluster, name, base64, description, usecases, 
     json(synonyms) as synonyms, json(tags) as tags, 
     industry, emotional_cues, enhanced, img_alt
     FROM icon ORDER BY name`
  );

  const icons: Icon[] = iconRows.map((row) => ({
    ...row,
    title: null, // Not in database table, but in TypeScript schema
    synonyms: JSON.parse(row.synonyms || '[]') as string[],
    tags: JSON.parse(row.tags || '[]') as string[],
  }));

  const elapsed = Date.now() - startTime;
  console.log(`[BUILD_PRECOMPUTED] Read ${clusters.length} clusters, ${icons.length} icons in ${elapsed}ms`);

  return {
    clusters,
    icons,
  };
}

// Step 2: Precompute preview icons for each cluster
function precomputePreviewIcons(
  clusters: Cluster[],
  icons: Icon[],
  previewIconsPerCluster: number = 6
): Map<string, PreviewIcon[]> {
  console.log(`[BUILD_PRECOMPUTED] Precomputing preview icons (${previewIconsPerCluster} per cluster)...`);
  const startTime = Date.now();

  // Group icons by cluster
  const iconsByCluster = new Map<string, Icon[]>();
  for (const icon of icons) {
    if (!iconsByCluster.has(icon.cluster)) {
      iconsByCluster.set(icon.cluster, []);
    }
    iconsByCluster.get(icon.cluster)!.push(icon);
  }

  // Sort icons by name within each cluster
  for (const [cluster, clusterIcons] of iconsByCluster.entries()) {
    clusterIcons.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Build preview icons for each cluster
  const previewIconsMap = new Map<string, PreviewIcon[]>();

  for (const cluster of clusters) {
    // Try both source_folder and name as cluster keys
    const clusterKey = cluster.source_folder || cluster.name;
    const clusterIcons = iconsByCluster.get(clusterKey) || [];

    const previewIcons: PreviewIcon[] = clusterIcons
      .slice(0, previewIconsPerCluster)
      .map((icon) => ({
        id: icon.id,
        name: icon.name,
        base64: icon.base64,
        img_alt: icon.img_alt,
      }));

    previewIconsMap.set(cluster.name, previewIcons);
  }

  const elapsed = Date.now() - startTime;
  console.log(`[BUILD_PRECOMPUTED] Precomputed preview icons in ${elapsed}ms`);

  return previewIconsMap;
}

// Step 3: Create materialized table
async function createMaterializedTables(db: sqlite3.Database): Promise<void> {
  console.log('[BUILD_PRECOMPUTED] Creating materialized table...');

  // Drop existing table if it exists
  await promisifyRun(db, 'DROP TABLE IF EXISTS cluster_preview_precomputed;');

  // Create cluster_preview_precomputed table with precomputed preview_icons_json
  await promisifyRun(db, `
    CREATE TABLE cluster_preview_precomputed (
      id INTEGER PRIMARY KEY,
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
    );
  `);

  console.log('[BUILD_PRECOMPUTED] Materialized table created');
}

// Step 4: Insert precomputed data
async function insertPrecomputedData(
  db: sqlite3.Database,
  clusters: Cluster[],
  previewIconsMap: Map<string, PreviewIcon[]>
): Promise<void> {
  console.log('[BUILD_PRECOMPUTED] Inserting precomputed data...');
  const startTime = Date.now();

  const insertClusterSql = `
    INSERT INTO cluster_preview_precomputed (
      id, name, source_folder, path, count,
      keywords_json, tags_json, title, description,
      practical_application, alternative_terms_json,
      about, why_choose_us_json, preview_icons_json
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Insert clusters with precomputed preview icons
  for (const cluster of clusters) {
    const previewIcons = previewIconsMap.get(cluster.name) || [];
    const previewIconsJson = JSON.stringify(previewIcons);

    await promisifyRun(db, insertClusterSql, [
      cluster.id,
      cluster.name,
      cluster.source_folder,
      cluster.path,
      cluster.count,
      JSON.stringify(cluster.keywords),
      JSON.stringify(cluster.tags),
      cluster.title,
      cluster.description,
      cluster.practical_application,
      JSON.stringify(cluster.alternative_terms),
      cluster.about,
      JSON.stringify(cluster.why_choose_us),
      previewIconsJson,
    ]);
  }

  // Commit transaction
  await promisifyRun(db, 'COMMIT');

  const elapsed = Date.now() - startTime;
  console.log(`[BUILD_PRECOMPUTED] Inserted ${clusters.length} clusters in ${elapsed}ms`);
}

// Step 5: Create indexes
async function createIndexes(db: sqlite3.Database): Promise<void> {
  console.log('[BUILD_PRECOMPUTED] Creating indexes...');

  // Drop old indexes if they exist
  await promisifyRun(db, 'DROP INDEX IF EXISTS idx_cluster_preview_precomputed_name;');
  await promisifyRun(db, 'DROP INDEX IF EXISTS idx_cluster_name;');
  await promisifyRun(db, 'DROP INDEX IF EXISTS idx_icon_cluster_name;');
  
  // Create cluster index
  await promisifyRun(db, `
    CREATE INDEX IF NOT EXISTS idx_cluster_name
    ON cluster(name);
  `);

  // Create icon index
  await promisifyRun(db, `
    CREATE INDEX IF NOT EXISTS idx_icon_cluster_name
    ON icon(cluster, name);
  `);

  // Create cluster_preview_precomputed index
  await promisifyRun(db, `
    CREATE INDEX IF NOT EXISTS idx_cluster_preview_name
    ON cluster_preview_precomputed(name);
  `);

  console.log('[BUILD_PRECOMPUTED] Indexes created');
}

// Step 6: Verify the materialized table
async function verifyTables(db: sqlite3.Database): Promise<void> {
  console.log('[BUILD_PRECOMPUTED] Verifying materialized table...');

  const clusterCount = await promisifyGet<{ count: number }>(
    db,
    'SELECT COUNT(*) as count FROM cluster_preview_precomputed'
  );
  console.log(`[BUILD_PRECOMPUTED] cluster_preview_precomputed: ${clusterCount?.count || 0} rows`);

  // Sample preview icons
  const sampleCluster = await promisifyGet<{ name: string; preview_icons_json: string }>(
    db,
    'SELECT name, preview_icons_json FROM cluster_preview_precomputed LIMIT 1'
  );
  if (sampleCluster) {
    const previewIcons = JSON.parse(sampleCluster.preview_icons_json || '[]');
    console.log(`[BUILD_PRECOMPUTED] Sample cluster "${sampleCluster.name}" has ${previewIcons.length} preview icons`);
  }
}

// Main function
async function main(): Promise<void> {
  console.log(`[BUILD_PRECOMPUTED] Starting build of precomputed materialized tables...`);
  console.log(`[BUILD_PRECOMPUTED] Database: ${DB_PATH}`);

  const db = await openDb();

  try {
    // Begin transaction for better performance
    await promisifyRun(db, 'BEGIN TRANSACTION');

    // Step 1: Read cluster and icon data
    const { clusters, icons } = await readAllData(db);

    // Step 2: Precompute preview icons
    const previewIconsMap = precomputePreviewIcons(clusters, icons, 6);

    // Step 3: Create materialized table
    await createMaterializedTables(db);

    // Step 4: Insert precomputed data
    await insertPrecomputedData(db, clusters, previewIconsMap);

    // Step 5: Create indexes
    await createIndexes(db);

    // Step 6: Verify
    await verifyTables(db);

    console.log('[BUILD_PRECOMPUTED] ✅ Successfully built precomputed materialized tables!');
  } catch (error) {
    console.error('[BUILD_PRECOMPUTED] ❌ Error building precomputed tables:', error);
    await promisifyRun(db, 'ROLLBACK');
    throw error;
  } finally {
    db.close((err) => {
      if (err) {
        console.error('[BUILD_PRECOMPUTED] Error closing database:', err);
      }
    });
  }
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exit(1);
});

