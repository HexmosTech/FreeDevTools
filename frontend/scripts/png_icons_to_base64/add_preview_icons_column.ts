#!/usr/bin/env node
/**
 * Add preview_icons_json column to PNG cluster table
 * 
 * This script:
 * 1. Reads cluster and icon data from existing tables
 * 2. Precomputes preview icons for each cluster
 * 3. Adds preview_icons_json column to cluster table if it doesn't exist
 * 4. Populates the column with precomputed JSON data
 * 
 * Run this after icon ingestion to add preview icons to clusters.
 */

import Database from 'better-sqlite3';
import path from 'path';

type DatabaseInstance = InstanceType<typeof Database>;

const DB_PATH = path.resolve(process.cwd(), 'db/bench/png/png-icons-db.db');

interface PreviewIcon {
  id: number;
  name: string;
  base64: string;
  img_alt: string;
}

interface ClusterRow {
  id: number;
  name: string;
  source_folder: string;
  path: string;
  count: number;
  keywords: string;
  tags: string;
  title: string;
  description: string;
  practical_application: string;
  alternative_terms: string;
  about: string;
  why_choose_us: string;
}

interface IconRow {
  id: number;
  cluster: string;
  name: string;
  base64: string;
  img_alt: string;
}

// Open database connection
function openDb(): DatabaseInstance {
  return new Database(DB_PATH);
}

// Step 1: Check if column exists, add if not
function ensurePreviewIconsColumn(db: DatabaseInstance): void {
  console.log('[ADD_PREVIEW_ICONS] Checking if preview_icons_json column exists...');
  
  // Check if column exists
  const tableInfo = db.prepare("PRAGMA table_info(cluster)").all() as Array<{ name: string }>;
  
  const hasColumn = tableInfo.some(col => col.name === 'preview_icons_json');
  
  if (!hasColumn) {
    console.log('[ADD_PREVIEW_ICONS] Adding preview_icons_json column...');
    db.exec('ALTER TABLE cluster ADD COLUMN preview_icons_json TEXT DEFAULT \'[]\'');
    console.log('[ADD_PREVIEW_ICONS] Column added successfully');
  } else {
    console.log('[ADD_PREVIEW_ICONS] Column already exists');
  }
}

// Step 2: Read cluster and icon data into memory
function readAllData(db: DatabaseInstance): {
  clusters: ClusterRow[];
  icons: IconRow[];
} {
  console.log('[ADD_PREVIEW_ICONS] Reading cluster and icon data from existing tables...');
  const startTime = Date.now();

  // Read clusters
  const clusters = db.prepare(`
    SELECT id, name, source_folder, path, count, keywords, tags,
     title, description, practical_application, alternative_terms,
     about, why_choose_us
     FROM cluster ORDER BY name
  `).all() as ClusterRow[];

  // Read icons (needed for precomputing preview icons)
  const icons = db.prepare(`
    SELECT id, cluster, name, base64, img_alt
     FROM icon ORDER BY name
  `).all() as IconRow[];

  const elapsed = Date.now() - startTime;
  console.log(`[ADD_PREVIEW_ICONS] Read ${clusters.length} clusters, ${icons.length} icons in ${elapsed}ms`);

  return {
    clusters,
    icons,
  };
}

// Step 3: Precompute preview icons for each cluster
function precomputePreviewIcons(
  clusters: ClusterRow[],
  icons: IconRow[],
  previewIconsPerCluster: number = 6
): Map<string, PreviewIcon[]> {
  console.log(`[ADD_PREVIEW_ICONS] Precomputing preview icons (${previewIconsPerCluster} per cluster)...`);
  const startTime = Date.now();

  // Group icons by cluster
  const iconsByCluster = new Map<string, IconRow[]>();
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
  console.log(`[ADD_PREVIEW_ICONS] Precomputed preview icons in ${elapsed}ms`);

  return previewIconsMap;
}

// Step 4: Update cluster table with preview icons
function updatePreviewIcons(
  db: DatabaseInstance,
  clusters: ClusterRow[],
  previewIconsMap: Map<string, PreviewIcon[]>
): void {
  console.log('[ADD_PREVIEW_ICONS] Updating cluster table with preview icons...');
  const startTime = Date.now();

  const updateStmt = db.prepare('UPDATE cluster SET preview_icons_json = ? WHERE name = ?');
  
  const updateBatch = db.transaction((entries: Array<{ json: string; name: string }>) => {
    for (const entry of entries) {
      updateStmt.run(entry.json, entry.name);
    }
  });

  const updates = clusters.map(cluster => ({
    json: JSON.stringify(previewIconsMap.get(cluster.name) || []),
    name: cluster.name,
  }));

  updateBatch(updates);

  const elapsed = Date.now() - startTime;
  console.log(`[ADD_PREVIEW_ICONS] Updated ${clusters.length} clusters in ${elapsed}ms`);
}

// Step 5: Verify the updates
function verifyUpdates(db: DatabaseInstance): void {
  console.log('[ADD_PREVIEW_ICONS] Verifying updates...');

  const clusterCount = db.prepare(
    'SELECT COUNT(*) as count FROM cluster WHERE preview_icons_json IS NOT NULL AND preview_icons_json != \'[]\''
  ).get() as { count: number } | undefined;
  console.log(`[ADD_PREVIEW_ICONS] ${clusterCount?.count || 0} clusters have preview icons`);

  // Sample preview icons
  const sampleCluster = db.prepare(
    'SELECT name, preview_icons_json FROM cluster WHERE preview_icons_json IS NOT NULL AND preview_icons_json != \'[]\' LIMIT 1'
  ).get() as { name: string; preview_icons_json: string } | undefined;
  if (sampleCluster) {
    const previewIcons = JSON.parse(sampleCluster.preview_icons_json || '[]');
    console.log(`[ADD_PREVIEW_ICONS] Sample cluster "${sampleCluster.name}" has ${previewIcons.length} preview icons`);
  }
}

// Main function
function main(): void {
  console.log(`[ADD_PREVIEW_ICONS] Starting to add preview_icons_json column...`);
  console.log(`[ADD_PREVIEW_ICONS] Database: ${DB_PATH}`);

  const db = openDb();

  try {
    // Begin transaction for better performance
    db.exec('BEGIN TRANSACTION');

    // Step 1: Ensure column exists
    ensurePreviewIconsColumn(db);

    // Step 2: Read cluster and icon data
    const { clusters, icons } = readAllData(db);

    // Step 3: Precompute preview icons
    const previewIconsMap = precomputePreviewIcons(clusters, icons, 6);

    // Step 4: Update cluster table
    updatePreviewIcons(db, clusters, previewIconsMap);

    // Commit transaction
    db.exec('COMMIT');

    // Step 5: Verify
    verifyUpdates(db);

    console.log('[ADD_PREVIEW_ICONS] ✅ Successfully added preview_icons_json column and populated data!');
  } catch (error) {
    console.error('[ADD_PREVIEW_ICONS] ❌ Error adding preview icons column:', error);
    db.exec('ROLLBACK');
    throw error;
  } finally {
    db.close();
  }
}

// Run the script
try {
  main();
} catch (error) {
  console.error(error);
  process.exit(1);
}

