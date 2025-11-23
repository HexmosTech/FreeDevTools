import path from 'path';
import sqlite3 from 'sqlite3';
import type {
  Cluster,
  Icon,
  Overview,
  RawClusterRow,
  RawIconRow,
} from './svg-icons-schema';

// Connection pool for parallel queries
const POOL_SIZE = 10; // Number of database connections in the pool
let dbPool: sqlite3.Database[] = [];
let poolInitPromise: Promise<sqlite3.Database[]> | null = null;
let poolIndex = 0; // Round-robin counter

function getDbPath(): string {
  return path.resolve(process.cwd(), 'db/all_dbs/svg-icons-db.db');
}

// Helper to run pragma statements
function runPragma(db: sqlite3.Database, pragma: string): Promise<void> {
  return new Promise((resolve, reject) => {
    db.run(`PRAGMA ${pragma}`, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Initialize a single database connection
function initDbConnection(): Promise<sqlite3.Database> {
  const dbPath = getDbPath();
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
      if (err) {
        reject(err);
        return;
      }

      // Optimize for read-only performance (only pragmas that work with read-only databases)
      Promise.all([
        runPragma(db, 'mmap_size = 1073741824'),
        runPragma(db, 'temp_store = MEMORY'),
        runPragma(db, 'read_uncommitted = ON'),
      ])
        .then(() => resolve(db))
        .catch((pragmaErr) => reject(pragmaErr));
    });
  });
}

// Initialize the connection pool
async function initPool(): Promise<sqlite3.Database[]> {
  if (dbPool.length > 0) {
    return dbPool;
  }

  if (poolInitPromise) {
    return poolInitPromise;
  }

  const poolInitStartTime = Date.now();
  console.log(`[SVG_ICONS_DB] Initializing connection pool with ${POOL_SIZE} connections...`);

  poolInitPromise = Promise.all(
    Array.from({ length: POOL_SIZE }, () => initDbConnection())
  ).then((connections) => {
    dbPool = connections;
    const poolInitEndTime = Date.now();
    console.log(`[SVG_ICONS_DB] Connection pool initialized in ${poolInitEndTime - poolInitStartTime}ms`);
    poolInitPromise = null;
    return dbPool;
  }).catch((err) => {
    poolInitPromise = null;
    throw err;
  });

  return poolInitPromise;
}

// Get a database connection from the pool (round-robin)
export async function getDb(): Promise<sqlite3.Database> {
  const pool = await initPool();
  // Round-robin selection for load balancing
  const index = poolIndex % pool.length;
  poolIndex = (poolIndex + 1) % pool.length;
  return pool[index];
}

export async function getClusters(): Promise<Cluster[]> {
  const queryStartTime = Date.now();
  const db = await getDb();
  
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT id, name, count, source_folder, path, 
       json(keywords) as keywords, json(tags) as tags, 
       title, description, practical_application, json(alternative_terms) as alternative_terms,
       about, json(why_choose_us) as why_choose_us
       FROM cluster ORDER BY name`,
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const queryEndTime = Date.now();
        console.log(`[SVG_ICONS_DB] getClusters() DB query took ${queryEndTime - queryStartTime}ms`);
        const results = (rows || []) as RawClusterRow[];
        resolve(results.map((row) => ({
          ...row,
          keywords: JSON.parse(row.keywords || '[]') as string[],
          tags: JSON.parse(row.tags || '[]') as string[],
          alternative_terms: JSON.parse(row.alternative_terms || '[]') as string[],
          why_choose_us: JSON.parse(row.why_choose_us || '[]') as string[],
        })) as Cluster[]);
      }
    );
  });
}

export async function getTotalIcons(): Promise<number> {
  const queryStartTime = Date.now();
  const db = await getDb();
  
  return new Promise((resolve, reject) => {
    db.get('SELECT total_count FROM overview WHERE id = 1', (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      const queryEndTime = Date.now();
      // console.log(`[SVG_ICONS_DB] getTotalIcons() DB query took ${queryEndTime - queryStartTime}ms`);
      const result = row as Overview | undefined;
      resolve(result?.total_count ?? 0);
    });
  });
}

export async function getIconsByCluster(cluster: string): Promise<Icon[]> {
  const queryStartTime = Date.now();
  const db = await getDb();
  
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT id, cluster, name, base64, description, usecases, 
       json(synonyms) as synonyms, json(tags) as tags, 
       industry, emotional_cues, enhanced, img_alt
       FROM icon WHERE cluster = ? ORDER BY name`,
      [cluster],
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const queryEndTime = Date.now();
        // console.log(`[SVG_ICONS_DB] getIconsByCluster("${cluster}") DB query took ${queryEndTime - queryStartTime}ms`);
        const results = (rows || []) as RawIconRow[];
        resolve(results.map((row) => ({
          ...row,
          synonyms: JSON.parse(row.synonyms || '[]') as string[],
          tags: JSON.parse(row.tags || '[]') as string[],
        })) as Icon[]);
      }
    );
  });
}

// Optimized function to get only a limited number of icons for preview
export async function getIconsByClusterLimit(cluster: string, limit: number = 6): Promise<Icon[]> {
  const queryStartTime = Date.now();
  const db = await getDb();
  
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT id, cluster, name, base64, description, usecases, 
       json(synonyms) as synonyms, json(tags) as tags, 
       industry, emotional_cues, enhanced, img_alt
       FROM icon WHERE cluster = ? ORDER BY name LIMIT ?`,
      [cluster, limit],
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const queryEndTime = Date.now();
        console.log(`[SVG_ICONS_DB] getIconsByClusterLimit("${cluster}", ${limit}) DB query took ${queryEndTime - queryStartTime}ms`);
        const results = (rows || []) as RawIconRow[];
        resolve(results.map((row) => ({
          ...row,
          synonyms: JSON.parse(row.synonyms || '[]') as string[],
          tags: JSON.parse(row.tags || '[]') as string[],
        })) as Icon[]);
      }
    );
  });
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

export async function getClustersWithPreviewIcons(
  page: number = 1,
  itemsPerPage: number = 30,
  previewIconsPerCluster: number = 6
): Promise<ClusterWithPreviewIcons[]> {
  const queryStartTime = Date.now();
  const db = await getDb();
  const offset = (page - 1) * itemsPerPage;
  
  return new Promise((resolve, reject) => {
    db.all(
      `WITH paginated_clusters AS (
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
      ORDER BY pc.name`,
      [itemsPerPage, offset, previewIconsPerCluster],
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const queryEndTime = Date.now();
        console.log(`[SVG_ICONS_DB] getClustersWithPreviewIcons(page=${page}, itemsPerPage=${itemsPerPage}) DB query took ${queryEndTime - queryStartTime}ms`);
        
        const results = (rows || []) as Array<{
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
        
        resolve(results.map((row) => {
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
        }));
      }
    );
  });
}

export async function getClusterByName(name: string): Promise<Cluster | null> {
  const queryStartTime = Date.now();
  const db = await getDb();
  
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT id, name, count, source_folder, path, 
       json(keywords) as keywords, json(tags) as tags, 
       title, description, practical_application, json(alternative_terms) as alternative_terms,
       about, json(why_choose_us) as why_choose_us
       FROM cluster WHERE name = ?`,
      [name],
      (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        const queryEndTime = Date.now();
        // console.log(`[SVG_ICONS_DB] getClusterByName("${name}") DB query took ${queryEndTime - queryStartTime}ms`);
        const result = row as RawClusterRow | undefined;
        if (!result) {
          resolve(null);
          return;
        }
        resolve({
          ...result,
          keywords: JSON.parse(result.keywords || '[]') as string[],
          tags: JSON.parse(result.tags || '[]') as string[],
          alternative_terms: JSON.parse(result.alternative_terms || '[]') as string[],
          why_choose_us: JSON.parse(result.why_choose_us || '[]') as string[],
        } as Cluster);
      }
    );
  });
}

// Get icon by category (cluster display name) and icon name (without .svg extension)
export async function getIconByCategoryAndName(
  category: string,
  iconName: string
): Promise<Icon | null> {
  const db = await getDb();
  // First, get the cluster to find the source_folder (actual cluster key)
  const clusterData = await getClusterByName(category);
  if (!clusterData) return null;

  // Build the filename with .svg extension
  const filename = iconName.includes('.svg') ? iconName : `${iconName}.svg`;

  return new Promise((resolve, reject) => {
    db.get(
      `SELECT id, cluster, name, base64, description, usecases, 
       json(synonyms) as synonyms, json(tags) as tags, 
       industry, emotional_cues, enhanced, img_alt
       FROM icon WHERE cluster = ? AND name = ?`,
      [clusterData.source_folder || category, filename],
      (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        const result = row as RawIconRow | undefined;
        if (!result) {
          resolve(null);
          return;
        }
        resolve({
          ...result,
          synonyms: JSON.parse(result.synonyms || '[]') as string[],
          tags: JSON.parse(result.tags || '[]') as string[],
        } as Icon);
      }
    );
  });
}



