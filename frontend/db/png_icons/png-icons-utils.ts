import { Database } from 'bun:sqlite';
import path from 'path';
import type {
    Cluster,
    Icon,
    Overview,
    RawClusterRow,
    RawIconRow,
} from './png-icons-schema';

// DB queries
let dbInstance: Database | null = null;

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/all_dbs/png-icons-db.db');
}

export function getDb(): Database {
  if (dbInstance) {
    console.log(`[PNG_ICONS_DB] Reusing existing DB connection`);
    return dbInstance;
  }
  const dbOpenStartTime = Date.now();
  const dbPath = getDbPath();
  console.log(`[PNG_ICONS_DB] Opening new DB connection to: ${dbPath}`);
  dbInstance = new Database(dbPath, { readonly: true });
  // Optimize for read-only performance
  dbInstance.run('PRAGMA journal_mode = OFF');
  dbInstance.run('PRAGMA synchronous = OFF');
  dbInstance.run('PRAGMA mmap_size = 1073741824');
  
  dbInstance.run('PRAGMA temp_store = MEMORY'); // Use memory for temp tables
  dbInstance.run('PRAGMA query_only = ON'); // Ensure read-only mode
  dbInstance.run('PRAGMA read_uncommitted = ON'); // Skip locking for reads
  const dbOpenEndTime = Date.now();
  console.log(`[PNG_ICONS_DB] DB connection opened in ${dbOpenEndTime - dbOpenStartTime}ms`);
  return dbInstance;
}

export function getClusterIcons(cluster: string, limit = 10): Icon[] {
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, cluster, name, base64, description, usecases, 
     json(synonyms) as synonyms, json(tags) as tags, 
     industry, emotional_cues, enhanced, img_alt
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
  const queryStartTime = Date.now();
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, name, count, source_folder, path, 
     json(keywords) as keywords, json(tags) as tags, 
     title, description, practical_application, json(alternative_terms) as alternative_terms,
     about, json(why_choose_us) as why_choose_us
     FROM cluster ORDER BY name`
  );
  const results = stmt.all() as RawClusterRow[];
  const queryEndTime = Date.now();
  console.log(`[PNG_ICONS_DB] getClusters() DB query took ${queryEndTime - queryStartTime}ms`);
  return results.map((row) => ({
    ...row,
    keywords: JSON.parse(row.keywords || '[]') as string[],
    tags: JSON.parse(row.tags || '[]') as string[],
    alternative_terms: JSON.parse(row.alternative_terms || '[]') as string[],
    why_choose_us: JSON.parse(row.why_choose_us || '[]') as string[],
  })) as Cluster[];
}

export function getTotalIcons(): number {
  const queryStartTime = Date.now();
  const db = getDb();
  const row = db
    .prepare('SELECT total_count FROM overview WHERE id = 1')
    .get() as Overview | undefined;
  const queryEndTime = Date.now();
  // console.log(`[PNG_ICONS_DB] getTotalIcons() DB query took ${queryEndTime - queryStartTime}ms`);
  return row?.total_count ?? 0;
}

export function getIconsByCluster(cluster: string): Icon[] {
  const queryStartTime = Date.now();
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, cluster, name, base64, description, usecases, 
     json(synonyms) as synonyms, json(tags) as tags, 
     industry, emotional_cues, enhanced, img_alt
     FROM icon WHERE cluster = ? ORDER BY name`
  );
  const results = stmt.all(cluster) as RawIconRow[];
  const queryEndTime = Date.now();
  // console.log(`[PNG_ICONS_DB] getIconsByCluster("${cluster}") DB query took ${queryEndTime - queryStartTime}ms`);
  return results.map((row) => ({
    ...row,
    synonyms: JSON.parse(row.synonyms || '[]') as string[],
    tags: JSON.parse(row.tags || '[]') as string[],
  })) as Icon[];
}

// Optimized function to get only a limited number of icons for preview
export function getIconsByClusterLimit(cluster: string, limit: number = 6): Icon[] {
  const queryStartTime = Date.now();
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, cluster, name, base64, description, usecases, 
     json(synonyms) as synonyms, json(tags) as tags, 
     industry, emotional_cues, enhanced, img_alt
     FROM icon WHERE cluster = ? ORDER BY name LIMIT ?`
  );
  const results = stmt.all(cluster, limit) as RawIconRow[];
  const queryEndTime = Date.now();
  console.log(`[PNG_ICONS_DB] getIconsByClusterLimit("${cluster}", ${limit}) DB query took ${queryEndTime - queryStartTime}ms`);
  return results.map((row) => ({
    ...row,
    synonyms: JSON.parse(row.synonyms || '[]') as string[],
    tags: JSON.parse(row.tags || '[]') as string[],
  })) as Icon[];
}

// Optimized function: Get paginated clusters with preview icons in ONE query
export interface ClusterWithPreviewIcons {
  id: number;
  name: string;
  count: number;
  source_folder: string;
  path: string;
  keywords: string[];
  tags: string[];
  title: string;
  description: string;
  practical_application: string;
  alternative_terms: string[];
  about: string;
  why_choose_us: string[];
  previewIcons: Array<{
    id: number;
    name: string;
    base64: string;
    img_alt: string;
  }>;
}

export function getClustersWithPreviewIcons(
  page: number = 1,
  itemsPerPage: number = 30,
  previewIconsPerCluster: number = 6
): ClusterWithPreviewIcons[] {
  const queryStartTime = Date.now();
  const db = getDb();
  const offset = (page - 1) * itemsPerPage;
  
  // Simple single query: get paginated clusters with first 6 icons each
  const stmt = db.prepare(`
    WITH paginated_clusters AS (
      SELECT id, name, count, source_folder, path,
             json(keywords) as keywords, json(tags) as tags,
             title, description, practical_application, 
             json(alternative_terms) as alternative_terms,
             about, json(why_choose_us) as why_choose_us
      FROM cluster
      ORDER BY name
      LIMIT ? OFFSET ?
    )
    SELECT 
      pc.id, pc.name, pc.count, pc.source_folder, pc.path,
      pc.keywords, pc.tags, pc.title, pc.description, pc.practical_application,
      pc.alternative_terms, pc.about, pc.why_choose_us,
      (
        SELECT json_group_array(
          json_object(
            'id', i.id,
            'name', i.name,
            'base64', i.base64,
            'img_alt', i.img_alt
          )
        )
        FROM (
          SELECT id, name, base64, img_alt
          FROM icon
          WHERE cluster = pc.source_folder OR cluster = pc.name
          ORDER BY name
          LIMIT ?
        ) i
      ) as preview_icons
    FROM paginated_clusters pc
    ORDER BY pc.name
  `);
  
  const results = stmt.all(itemsPerPage, offset, previewIconsPerCluster) as Array<{
    id: number;
    name: string;
    count: number;
    source_folder: string;
    path: string;
    keywords: string;
    tags: string;
    title: string;
    description: string;
    practical_application: string;
    alternative_terms: string;
    about: string;
    why_choose_us: string;
    preview_icons: string;
  }>;
  
  const queryEndTime = Date.now();
  console.log(`[PNG_ICONS_DB] getClustersWithPreviewIcons(page=${page}, itemsPerPage=${itemsPerPage}) DB query took ${queryEndTime - queryStartTime}ms`);
  
  return results.map((row) => {
    let previewIcons: Array<{ id: number; name: string; base64: string; img_alt: string }> = [];
    try {
      const parsed = JSON.parse(row.preview_icons || '[]');
      previewIcons = Array.isArray(parsed) ? parsed.filter((icon: any) => icon !== null) : [];
    } catch (e) {
      previewIcons = [];
    }
    
    return {
      id: row.id,
      name: row.name,
      count: row.count,
      source_folder: row.source_folder,
      path: row.path,
      keywords: JSON.parse(row.keywords || '[]') as string[],
      tags: JSON.parse(row.tags || '[]') as string[],
      title: row.title,
      description: row.description,
      practical_application: row.practical_application,
      alternative_terms: JSON.parse(row.alternative_terms || '[]') as string[],
      about: row.about,
      why_choose_us: JSON.parse(row.why_choose_us || '[]') as string[],
      previewIcons,
    };
  });
}

export function getClusterByName(name: string): Cluster | null {
  const queryStartTime = Date.now();
  const db = getDb();
  const stmt = db.prepare(
    `SELECT id, name, count, source_folder, path, 
     json(keywords) as keywords, json(tags) as tags, 
     title, description, practical_application, json(alternative_terms) as alternative_terms,
     about, json(why_choose_us) as why_choose_us
     FROM cluster WHERE name = ?`
  );
  const result = stmt.get(name) as RawClusterRow | undefined;
  const queryEndTime = Date.now();
  // console.log(`[PNG_ICONS_DB] getClusterByName("${name}") DB query took ${queryEndTime - queryStartTime}ms`);
  if (!result) return null;
  return {
    ...result,
    keywords: JSON.parse(result.keywords || '[]') as string[],
    tags: JSON.parse(result.tags || '[]') as string[],
    alternative_terms: JSON.parse(result.alternative_terms || '[]') as string[],
    why_choose_us: JSON.parse(result.why_choose_us || '[]') as string[],
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
     industry, emotional_cues, enhanced, img_alt
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
     i.industry, i.emotional_cues, i.enhanced, i.img_alt
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
