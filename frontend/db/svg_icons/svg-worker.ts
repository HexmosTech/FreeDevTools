/**
 * Worker thread for SQLite queries using bun:sqlite
 * Handles all query types for the SVG icons database
 */

import { Database } from 'bun:sqlite';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { parentPort, workerData } from 'worker_threads';

const logColors = {
  reset: '\u001b[0m',
  timestamp: '\u001b[35m',
  dbLabel: '\u001b[34m',
} as const;

const highlight = (text: string, color: string) => `${color}${text}${logColors.reset}`;

const { dbPath, workerId } = workerData;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Open database connection with aggressive read optimizations
const db = new Database(dbPath, { readonly: true });

// Wrap all PRAGMAs in try-catch to avoid database locking issues with multiple processes
// Even readonly databases can have locking conflicts when multiple processes set PRAGMAs simultaneously
const setPragma = (pragma: string) => {
  try {
    db.run(pragma);
  } catch (e) {
    // Ignore PRAGMA errors - they're optimizations, not critical
  }
};

setPragma('PRAGMA cache_size = -64000'); // 64MB cache per connection
setPragma('PRAGMA temp_store = MEMORY');
setPragma('PRAGMA mmap_size = 268435456'); // 256MB memory-mapped I/O
setPragma('PRAGMA query_only = ON'); // Read-only mode
setPragma('PRAGMA page_size = 4096'); // Optimal page size

const statements = {
  totalIcons: db.prepare('SELECT total_count FROM overview WHERE id = 1'),
  totalClusters: db.prepare('SELECT total_count FROM overview WHERE id = 2'),
  iconsByCluster: db.prepare(
    `SELECT id, cluster, name, base64,
     COALESCE(description, 'Free ' || name || ' icon') as description,
     COALESCE(usecases, '') as usecases,
     json(COALESCE(synonyms, '[]')) as synonyms,
     json(COALESCE(tags, '[]')) as tags,
     COALESCE(industry, '') as industry,
     COALESCE(emotional_cues, '') as emotional_cues,
     enhanced,
     COALESCE(img_alt, '') as img_alt
     FROM icon WHERE cluster = ? ORDER BY url_hash`
  ),
  clustersWithPreviewIcons: db.prepare(
    `SELECT name, count, source_folder, preview_icons_json
     FROM cluster
     ORDER BY hash_name
     LIMIT ? OFFSET ?`
  ),
  clusterByName: db.prepare(
    `SELECT id, hash_name, name, count, source_folder, path, 
     keywords_json, tags_json, 
     title, description, practical_application, alternative_terms_json,
     about, why_choose_us_json
     FROM cluster WHERE hash_name = ?`
  ),
  clusters: db.prepare(
    `SELECT id, hash_name, name, count, source_folder, path,
      keywords_json, tags_json,
      title, description, practical_application, alternative_terms_json,
      about, why_choose_us_json
      FROM cluster ORDER BY name`
  ),
  iconByCategory: db.prepare(
    `SELECT id, cluster, name, base64,
     COALESCE(description, '') as description,
     COALESCE(usecases, '') as usecases,
     json(COALESCE(synonyms, '[]')) as synonyms,
     json(COALESCE(tags, '[]')) as tags,
     COALESCE(industry, '') as industry,
     COALESCE(emotional_cues, '') as emotional_cues,
     enhanced,
     COALESCE(img_alt, '') as img_alt
     FROM icon WHERE cluster = ? AND name = ?`
  ),
  iconByUrlHash: db.prepare(
    `SELECT id, cluster, name, base64,
     COALESCE(description, '') as description,
     COALESCE(usecases, '') as usecases,
     json(COALESCE(synonyms, '[]')) as synonyms,
     json(COALESCE(tags, '[]')) as tags,
     COALESCE(industry, '') as industry,
     COALESCE(emotional_cues, '') as emotional_cues,
     enhanced,
     COALESCE(img_alt, '') as img_alt
     FROM icon WHERE url_hash = ?`
  ),
  sitemapIcons: db.prepare(
    `SELECT i.cluster, i.name, c.name as category_name
     FROM icon i
     JOIN cluster c ON i.cluster = c.source_folder
     ORDER BY c.name, i.name`
  ),
};

// Signal ready
parentPort?.postMessage({ ready: true });

interface QueryMessage {
  id: string;
  type: string;
  params: any;
}

// Handle incoming queries
parentPort?.on('message', (message: QueryMessage) => {
  const { id, type, params } = message;
  const startTime = new Date();
  const timestampLabel = highlight(`[${startTime.toISOString()}]`, logColors.timestamp);
  const dbLabel = highlight('[SVG_ICONS_DB]', logColors.dbLabel);
  console.log(`${timestampLabel} ${dbLabel} Worker ${workerId} handling ${type}`);

  try {
    let result: any;

    switch (type) {
      case 'getTotalIcons': {
        const row = statements.totalIcons.get() as { total_count: number } | undefined;
        result = row?.total_count ?? 0;
        break;
      }

      case 'getTotalClusters': {
        const row = statements.totalClusters.get() as { total_count: number } | undefined;
        result = row?.total_count ?? 0;
        break;
      }

      case 'getIconsByCluster': {
        const { cluster, categoryName } = params;
        const rows = statements.iconsByCluster.all([cluster]) as Array<{
          id: number;
          cluster: string;
          name: string;
          base64: string;
          description: string;
          usecases: string;
          synonyms: string;
          tags: string;
          industry: string;
          emotional_cues: string;
          enhanced: number;
          img_alt: string;
        }>;

        if (categoryName) {
          result = rows.map((row) => ({
            id: row.id,
            cluster: row.cluster,
            name: row.name,
            base64: row.base64,
            description: row.description,
            usecases: row.usecases,
            synonyms: JSON.parse(row.synonyms || '[]') as string[],
            tags: JSON.parse(row.tags || '[]') as string[],
            industry: row.industry,
            emotional_cues: row.emotional_cues,
            enhanced: row.enhanced,
            img_alt: row.img_alt,
            category: categoryName,
            author: 'Free DevTools',
            license: 'MIT',
            url: `/freedevtools/svg_icons/${categoryName}/${row.name}/`,
          }));
        } else {
          result = rows.map((row) => ({
            id: row.id,
            cluster: row.cluster,
            name: row.name,
            base64: row.base64,
            description: row.description,
            usecases: row.usecases,
            synonyms: JSON.parse(row.synonyms || '[]') as string[],
            tags: JSON.parse(row.tags || '[]') as string[],
            industry: row.industry,
            emotional_cues: row.emotional_cues,
            enhanced: row.enhanced,
            img_alt: row.img_alt,
          }));
        }
        break;
      }

      case 'getClustersWithPreviewIcons': {
        const { page, itemsPerPage, transform } = params;
        const offset = (page - 1) * itemsPerPage;
        const rows = statements.clustersWithPreviewIcons.all([itemsPerPage, offset]) as Array<{
          name: string;
          count: number;
          source_folder: string;
          preview_icons_json: string;
        }>;

        if (transform) {
          result = rows.map((row) => {
            let previewIcons: Array<{
              id: number;
              name: string;
              base64: string;
              img_alt: string;
            }> = [];
            try {
              const parsed = JSON.parse(row.preview_icons_json || '[]');
              previewIcons = Array.isArray(parsed)
                ? parsed.filter((icon: any) => icon !== null)
                : [];
            } catch (e) {
              previewIcons = [];
            }

            return {
              id: row.source_folder || row.name,
              name: row.name,
              icon: `/freedevtools/svg_icons/${row.name}/`,
              iconCount: row.count,
              url: `/freedevtools/svg_icons/${row.name}/`,
              previewIcons,
            };
          });
        } else {
          result = rows.map((row) => {
            let previewIcons: Array<{
              id: number;
              name: string;
              base64: string;
              img_alt: string;
            }> = [];
            try {
              const parsed = JSON.parse(row.preview_icons_json || '[]');
              previewIcons = Array.isArray(parsed)
                ? parsed.filter((icon: any) => icon !== null)
                : [];
            } catch (e) {
              previewIcons = [];
            }

            return {
              id: row.source_folder || row.name,
              name: row.name,
              count: row.count,
              source_folder: row.source_folder,
              path: '',
              keywords: [] as string[],
              tags: [] as string[],
              title: '',
              description: '',
              practical_application: '',
              alternative_terms: [] as string[],
              about: '',
              why_choose_us: [] as string[],
              previewIcons,
            };
          });
        }
        break;
      }

      case 'getClusterByName': {
        const { name: hashName } = params; // hashName is the hash, not the name
        const row = statements.clusterByName.get([hashName]) as {
          id: number;
          hash_name: string;
          name: string;
          count: number;
          source_folder: string;
          path: string;
          keywords_json: string;
          tags_json: string;
          title: string;
          description: string;
          practical_application: string;
          alternative_terms_json: string;
          about: string;
          why_choose_us_json: string;
        } | undefined;

        if (!row) {
          result = null;
        } else {
          result = {
            id: row.id,
            hash_name: row.hash_name,
            name: row.name,
            count: row.count,
            source_folder: row.source_folder,
            path: row.path,
            keywords: JSON.parse(row.keywords_json || '[]') as string[],
            tags: JSON.parse(row.tags_json || '[]') as string[],
            title: row.title,
            description: row.description,
            practical_application: row.practical_application,
            alternative_terms: JSON.parse(row.alternative_terms_json || '[]') as string[],
            about: row.about,
            why_choose_us: JSON.parse(row.why_choose_us_json || '[]') as string[],
          };
        }
        break;
      }

      case 'getClusters': {
        const rows = statements.clusters.all() as Array<{
          id: number;
          hash_name: string;
          name: string;
          count: number;
          source_folder: string;
          path: string;
          keywords_json: string;
          tags_json: string;
          title: string;
          description: string;
          practical_application: string;
          alternative_terms_json: string;
          about: string;
          why_choose_us_json: string;
        }>;
        result = rows.map((row) => ({
          id: row.id,
          hash_name: row.hash_name,
          name: row.name,
          count: row.count,
          source_folder: row.source_folder,
          path: row.path,
          keywords: JSON.parse(row.keywords_json || '[]') as string[],
          tags: JSON.parse(row.tags_json || '[]') as string[],
          title: row.title,
          description: row.description,
          practical_application: row.practical_application,
          alternative_terms: JSON.parse(row.alternative_terms_json || '[]') as string[],
          about: row.about,
          why_choose_us: JSON.parse(row.why_choose_us_json || '[]') as string[],
        }));
        break;
      }

      case 'getIconByCategoryAndName': {
        const { category, iconName } = params;
        // Hash the category name to get hash_name for cluster lookup
        const hash = crypto.createHash('sha256').update(category).digest();
        const hashName = hash.readBigInt64BE(0).toString();
        // First get cluster by hash_name
        const clusterRow = statements.clusterByName.get([hashName]) as {
          source_folder: string;
        } | undefined;

        if (!clusterRow) {
          result = null;
          break;
        }

        // Then get icon
        const filename = iconName.replace('.svg', '');
        const iconRow = statements.iconByCategory.get([
          clusterRow.source_folder || category,
          filename,
        ]) as {
          id: number;
          cluster: string;
          name: string;
          base64: string;
          description: string;
          usecases: string;
          synonyms: string;
          tags: string;
          industry: string;
          emotional_cues: string;
          enhanced: number;
          img_alt: string;
        } | undefined;

        if (!iconRow) {
          result = null;
        } else {
          result = {
            id: iconRow.id,
            cluster: iconRow.cluster,
            name: iconRow.name,
            base64: iconRow.base64,
            description: iconRow.description,
            usecases: iconRow.usecases,
            synonyms: JSON.parse(iconRow.synonyms || '[]') as string[],
            tags: JSON.parse(iconRow.tags || '[]') as string[],
            industry: iconRow.industry,
            emotional_cues: iconRow.emotional_cues,
            enhanced: iconRow.enhanced,
            img_alt: iconRow.img_alt,
          };
        }
        break;
      }

      case 'getIconByUrlHash': {
        const { hash } = params;
        const iconRow = statements.iconByUrlHash.get([hash]) as {
          id: number;
          cluster: string;
          name: string;
          base64: string;
          description: string;
          usecases: string;
          synonyms: string;
          tags: string;
          industry: string;
          emotional_cues: string;
          enhanced: number;
          img_alt: string;
        } | undefined;

        if (!iconRow) {
          result = null;
        } else {
          result = {
            id: iconRow.id,
            cluster: iconRow.cluster,
            name: iconRow.name,
            base64: iconRow.base64,
            description: iconRow.description,
            usecases: iconRow.usecases,
            synonyms: JSON.parse(iconRow.synonyms || '[]') as string[],
            tags: JSON.parse(iconRow.tags || '[]') as string[],
            industry: iconRow.industry,
            emotional_cues: iconRow.emotional_cues,
            enhanced: iconRow.enhanced,
            img_alt: iconRow.img_alt,
          };
        }
        break;
      }

      case 'getSitemapIcons': {
        const rows = statements.sitemapIcons.all() as Array<{
          cluster: string;
          name: string;
          category_name: string;
        }>;
        result = rows.map((row) => ({
          cluster: row.cluster,
          name: row.name,
          category: row.category_name,
        }));
        break;
      }

      default:
        throw new Error(`Unknown query type: ${type}`);
    }

    parentPort?.postMessage({
      id,
      result,
    });
    const endTime = new Date();
    const endTimestamp = highlight(`[${endTime.toISOString()}]`, logColors.timestamp);
    const endDbLabel = highlight('[SVG_ICONS_DB]', logColors.dbLabel);
    console.log(
      `${endTimestamp} ${endDbLabel} Worker ${workerId} ${type} finished in ${
        endTime.getTime() - startTime.getTime()
      }ms`
    );
  } catch (error: any) {
    parentPort?.postMessage({
      id,
      error: error.message || String(error),
    });
  }
});

