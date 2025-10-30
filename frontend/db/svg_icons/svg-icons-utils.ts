import Database from 'better-sqlite3';
import path from 'path';
import type {
  Cluster,
  Icon,
  Overview,
  RawClusterRow,
  RawIconRow,
} from './svg-icons-schema';

let dbInstance: Database.Database | null = null;

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/svg_icons/svg-icons-db.db');
}

export function getDb(): Database.Database {
  if (dbInstance) return dbInstance;
  const dbPath = getDbPath();
  dbInstance = new Database(dbPath, { readonly: true });
  // Improve read performance for build-time queries
  dbInstance.pragma('journal_mode = OFF');
  dbInstance.pragma('synchronous = OFF');
  return dbInstance;
}

export function getClusterIcons(cluster: string, limit = 10): Icon[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, cluster, name, base64, description, usecases, 
     json(synonyms) as synonyms, json(tags) as tags, 
     industry, emotional_cues, enhanced 
     FROM icon WHERE cluster = ? ORDER BY name LIMIT ?`
  );
  const results = stmt.all(cluster, limit) as RawIconRow[];
  return results.map((row) => ({
    ...row,
    synonyms: JSON.parse(row.synonyms || '[]') as string[],
    tags: JSON.parse(row.tags || '[]') as string[],
  })) as Icon[];
}

export function getClusters(): Cluster[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT name, count, source_folder, path, 
     json(keywords) as keywords, json(features) as features, 
     title, description 
     FROM cluster ORDER BY name`
  );
  const results = stmt.all() as RawClusterRow[];
  return results.map((row) => ({
    ...row,
    keywords: JSON.parse(row.keywords || '[]') as string[],
    features: JSON.parse(row.features || '[]') as string[],
  })) as Cluster[];
}

export function getTotalIcons(): number {
  const db = getDb();
  const row = db
    .prepare('SELECT total_count FROM overview WHERE id = 1')
    .get() as Overview | undefined;
  return row?.total_count ?? 0;
}

export function getIconsByCluster(cluster: string): Icon[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, cluster, name, base64, description, usecases, 
     json(synonyms) as synonyms, json(tags) as tags, 
     industry, emotional_cues, enhanced 
     FROM icon WHERE cluster = ? ORDER BY name`
  );
  const results = stmt.all(cluster) as RawIconRow[];
  return results.map((row) => ({
    ...row,
    synonyms: JSON.parse(row.synonyms || '[]') as string[],
    tags: JSON.parse(row.tags || '[]') as string[],
  })) as Icon[];
}

export function getClusterByName(name: string): Cluster | null {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT name, count, source_folder, path, 
     json(keywords) as keywords, json(features) as features, 
     title, description 
     FROM cluster WHERE name = ?`
  );
  const result = stmt.get(name) as RawClusterRow | undefined;
  if (!result) return null;
  return {
    ...result,
    keywords: JSON.parse(result.keywords || '[]') as string[],
    features: JSON.parse(result.features || '[]') as string[],
  } as Cluster;
}

// Get icon by category (cluster display name) and icon name (without .svg extension)
export function getIconByCategoryAndName(
  category: string,
  iconName: string
): Icon | null {
  const db = getDb();
  // First, get the cluster to find the source_folder (actual cluster key)
  const clusterData = getClusterByName(category);
  if (!clusterData) return null;

  // Build the filename with .svg extension
  const filename = iconName.includes('.svg') ? iconName : `${iconName}.svg`;

  // Query icon using source_folder (cluster key) and filename
  const stmt = db.prepare(
    `SELECT id, cluster, name, base64, description, usecases, 
     json(synonyms) as synonyms, json(tags) as tags, 
     industry, emotional_cues, enhanced 
     FROM icon WHERE cluster = ? AND name = ?`
  );
  const result = stmt.get(clusterData.source_folder || category, filename) as
    | RawIconRow
    | undefined;
  if (!result) return null;

  return {
    ...result,
    synonyms: JSON.parse(result.synonyms || '[]') as string[],
    tags: JSON.parse(result.tags || '[]') as string[],
  } as Icon;
}

// Example helper function to query icons by tag using json_each
export function getIconsByTag(tag: string): Icon[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT DISTINCT i.id, i.cluster, i.name, i.base64, i.description, i.usecases, 
     json(i.synonyms) as synonyms, json(i.tags) as tags, 
     i.industry, i.emotional_cues, i.enhanced 
     FROM icon i, json_each(i.tags) 
     WHERE json_each.value = ? 
     ORDER BY i.cluster, i.name`
  );
  const results = stmt.all(tag) as RawIconRow[];
  return results.map((row) => ({
    ...row,
    synonyms: JSON.parse(row.synonyms || '[]') as string[],
    tags: JSON.parse(row.tags || '[]') as string[],
  })) as Icon[];
}
