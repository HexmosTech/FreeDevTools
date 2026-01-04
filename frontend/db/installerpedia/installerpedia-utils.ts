import Database from 'better-sqlite3';
import path from 'path';
import type { RepoData, RawRepoRow } from './installerpedia-schema'; // Define schema types similar to man-pages

// Path to the SQLite DB file

function getDbPath(): string {
    return path.resolve(process.cwd(), 'db/all_dbs/ipm-db.db');
  }
const dbPath = getDbPath()
export const db = new Database(dbPath, { readonly: true });

import type {
    InstallationGuide,
    Prerequisite,
    InstallMethod,
    InstallInstruction,
    Resource,
    RawInstallationGuideRow,
  } from './installerpedia-schema';
  
  /**
   * Parse a raw DB row into typed InstallationGuide object
   */
  export function parseInstallationGuideRow(row: RawInstallationGuideRow): InstallationGuide {
    return {
      id: row.id,
      repo: row.repo,
      repo_type: row.repo_type,
      has_installation: row.has_installation,
      prerequisites: JSON.parse(row.prerequisites || '[]') as Prerequisite[],
      installation_methods: JSON.parse(row.installation_methods || '[]') as InstallMethod[],
      post_installation: JSON.parse(row.post_installation || '[]') as string[],
      resources_of_interest: JSON.parse(row.resources_of_interest || '[]') as Resource[],
      description: row.description,
      stars: row.stars,
      note: row.note,
      keywords: JSON.parse(row.keywords || '[]'),   // ✅ ADDED
    };
  }
  
  
  /**
   * Convert InstallationGuide to DB-ready format
   */
  export function serializeInstallationGuideForDb(
    guide: Omit<InstallationGuide, 'id'>
  ): Omit<RawInstallationGuideRow, 'id'> {
    return {
      repo: guide.repo,
      repo_type: guide.repo_type,
      has_installation: guide.has_installation,
      prerequisites: JSON.stringify(guide.prerequisites),
      installation_methods: JSON.stringify(guide.installation_methods),
      post_installation: JSON.stringify(guide.post_installation),
      resources_of_interest: JSON.stringify(guide.resources_of_interest),
      description: guide.description,
      stars: guide.stars,
      note: guide.note,
      keywords: JSON.stringify(guide.keywords || []),   // ✅ ADDED
    };
  }
  
  
  /**
   * Extract specific section from an InstallationGuide
   */
  export function getPrerequisites(guide: InstallationGuide): Prerequisite[] {
    return guide.prerequisites;
  }
  
  export function getInstallMethods(guide: InstallationGuide): InstallMethod[] {
    return guide.installation_methods;
  }
  
  export function getPostInstallationSteps(guide: InstallationGuide): string[] {
    return guide.post_installation;
  }
  
  export function getResources(guide: InstallationGuide): Resource[] {
    return guide.resources_of_interest;
  }
  
  /**
   * Search in description, notes, and resources
   */
  export function searchGuide(guide: InstallationGuide, query: string): boolean {
    const q = query.toLowerCase();
  
    if (guide.description.toLowerCase().includes(q)) return true;
    if (guide.note && guide.note.toLowerCase().includes(q)) return true;
    for (const r of guide.resources_of_interest) {
      if (r.title.toLowerCase().includes(q) || r.reason.toLowerCase().includes(q) || r.url_or_path.toLowerCase().includes(q)) {
        return true;
      }
    }
  
    return false;
  }
  



export interface RepoCategory {
  name: string;
  count: number;
  description?: string;
}

// Fetch categories based on repo_type
export function getRepoCategories(): RepoCategory[] {
  const stmt = db.prepare(`
    SELECT 
      repo_type AS name, 
      COUNT(*) AS count
    FROM ipm_data
    GROUP BY repo_type
    ORDER BY count DESC
  `);

  const rows = stmt.all();
  return rows.map((row: any) => ({
    name: row.name,
    count: row.count,
    description: '', // optional, can be filled manually if needed
  }));
}

// Get overview stats
export interface Overview {
  total_count: number;
}

export function getOverview(): Overview {
  const stmt = db.prepare(`SELECT COUNT(*) AS total_count FROM ipm_data`);
  const row = stmt.get();
  return { total_count: row.total_count };
}

export function getReposByTypePaginated(category: string, limit: number, offset: number): RepoData[] {
    const stmt = db.prepare(`
      SELECT * FROM ipm_data
      WHERE repo_type = ?
      ORDER BY stars DESC
      LIMIT ? OFFSET ?
    `);
    const rows: RawRepoRow[] = stmt.all(category, limit, offset);
    return rows.map(parseRepoRow);
  }
  
  /**
   * Get total count of repos for a given type
   */
  export function getReposCountByType(category: string): number {
    const stmt = db.prepare(`
      SELECT COUNT(*) as count FROM ipm_data
      WHERE repo_type = ?
    `);
    const row = stmt.get(category);
    return row.count;
  }
  
  /**
   * Get total number of repos in the database
   */
  export function getTotalReposCount(): number {
    const stmt = db.prepare(`
      SELECT COUNT(*) as count FROM ipm_data
    `);
    const row = stmt.get();
    return row.count;
  }
  
  /**
   * Generate static paths for all repo types (categories)
   */
  export function generateRepoTypeStaticPaths() {
    const stmt = db.prepare(`
      SELECT DISTINCT repo_type FROM ipm_data
    `);
    const rows: { repo_type: string }[] = stmt.all();
    return rows.map(r => ({ params: { category: r.repo_type } }));
  }



 
  export function parseRepoRow(row: RawRepoRow): RepoData {
    return {
      id: row.id,
      repo: row.repo,
      repo_type: row.repo_type,
      has_installation: Boolean(row.has_installation),
      prerequisites: JSON.parse(row.prerequisites || '[]'),
      installation_methods: JSON.parse(row.installation_methods || '[]'),
      post_installation: JSON.parse(row.post_installation || '[]'),
      resources_of_interest: JSON.parse(row.resources_of_interest || '[]'),
      description: row.description,
      stars: row.stars,
      note: row.note,
      keywords: JSON.parse(row.keywords || '[]'),   // ✅ ADDED
    };
  }
  
  
  
  /**
   * Get a repository by its slug (repo name)
   */
  export function getRepoBySlug(slug: string): RepoData | null {
    const stmt = db.prepare('SELECT * FROM ipm_data WHERE repo_slug = ?');
    const row = stmt.get(slug) as RawRepoRow | undefined;
  
    if (!row) return null;
  
    return parseRepoRow(row);
  }
  
  /**
   * Optional: Get all repos (for static paths)
   */
  export function getAllRepos(): RepoData[] {
    const stmt = db.prepare('SELECT * FROM ipm_data');
    const rows = stmt.all() as RawRepoRow[];
    return rows.map(parseRepoRow);
  }