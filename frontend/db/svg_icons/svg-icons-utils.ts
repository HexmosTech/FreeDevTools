import { buildIconUrl, hashNameToKey, hashUrlToKey } from '../../src/lib/hash-utils';
import type { Cluster, ClusterWithPreviewIcons, Icon } from './svg-icons-schema';
import { query } from './svg-worker-pool';

// In-memory cache with TTL
interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

const cache = new Map<string, CacheEntry<any>>();

// Cache TTLs (in milliseconds)
const CACHE_TTL = {
  TOTAL_ICONS: 5 * 60 * 1000, // 5 minutes - rarely changes
  TOTAL_CLUSTERS: 5 * 60 * 1000, // 5 minutes - rarely changes
  CLUSTERS_WITH_PREVIEW: 2 * 60 * 1000, // 2 minutes - paginated results
  ICONS_BY_CLUSTER: 3 * 60 * 1000, // 3 minutes - category pages
  CLUSTER_BY_NAME: 10 * 60 * 1000, // 10 minutes - rarely changes
  CLUSTERS: 5 * 60 * 1000, // 5 minutes - rarely changes
};

function getCacheKey(type: string, params?: any): string {
  return params ? `${type}:${JSON.stringify(params)}` : type;
}

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }
  
  return entry.data as T;
}

function setCache<T>(key: string, data: T, ttl: number): void {
  cache.set(key, {
    data,
    expiresAt: Date.now() + ttl,
  });
}

// Clean up expired entries periodically (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of cache.entries()) {
    if (now > entry.expiresAt) {
      cache.delete(key);
    }
  }
}, 5 * 60 * 1000);

export async function getTotalIcons(): Promise<number> {
  const cacheKey = getCacheKey('getTotalIcons');
  const cached = getCached<number>(cacheKey);
  if (cached !== null) {
    return cached;
  }
  
  const result = await query.getTotalIcons();
  setCache(cacheKey, result, CACHE_TTL.TOTAL_ICONS);
  return result;
}

export async function getTotalClusters(): Promise<number> {
  const cacheKey = getCacheKey('getTotalClusters');
  const cached = getCached<number>(cacheKey);
  if (cached !== null) {
    return cached;
  }
  
  const result = await query.getTotalClusters();
  setCache(cacheKey, result, CACHE_TTL.TOTAL_CLUSTERS);
  return result;
}

export interface IconWithMetadata extends Icon {
  category?: string;
  author?: string;
  license?: string;
  url?: string;
}

export interface ClusterTransformed {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconCount: number;
  url: string;
  keywords: string[];
  features: string[];
  previewIcons: Array<{ id: number; name: string; base64: string; img_alt: string }>;
}

export async function getIconsByCluster(
  cluster: string,
  categoryName?: string
): Promise<IconWithMetadata[]> {
  const cacheKey = getCacheKey('getIconsByCluster', { cluster, categoryName });
  const cached = getCached<IconWithMetadata[]>(cacheKey);
  if (cached !== null) {
    return cached;
  }
  
  const result = await query.getIconsByCluster(cluster, categoryName);
  setCache(cacheKey, result, CACHE_TTL.ICONS_BY_CLUSTER);
  return result;
}

export async function getClustersWithPreviewIcons(
  page: number = 1,
  itemsPerPage: number = 30,
  previewIconsPerCluster: number = 6,
  transform: boolean = false
): Promise<ClusterWithPreviewIcons[] | ClusterTransformed[]> {
  const cacheKey = getCacheKey('getClustersWithPreviewIcons', {
    page,
    itemsPerPage,
    previewIconsPerCluster,
    transform,
  });
  const cached = getCached<ClusterWithPreviewIcons[] | ClusterTransformed[]>(cacheKey);
  if (cached !== null) {
    return cached;
  }
  
  const result = await query.getClustersWithPreviewIcons(
    page,
    itemsPerPage,
    previewIconsPerCluster,
    transform
  );
  setCache(cacheKey, result, CACHE_TTL.CLUSTERS_WITH_PREVIEW);
  return result;
}

export async function getClusterByName(name: string): Promise<Cluster | null> {
  const hashName = hashNameToKey(name);
  const cacheKey = getCacheKey('getClusterByName', { hashName });
  const cached = getCached<Cluster | null>(cacheKey);
  if (cached !== null) {
    return cached;
  }
  
  const result = await query.getClusterByName(hashName);
  setCache(cacheKey, result, CACHE_TTL.CLUSTER_BY_NAME);
  return result;
}

export async function getClusters(): Promise<Cluster[]> {
  const cacheKey = getCacheKey('getClusters');
  const cached = getCached<Cluster[]>(cacheKey);
  if (cached !== null) {
    return cached;
  }
  
  const result = await query.getClusters();
  setCache(cacheKey, result, CACHE_TTL.CLUSTERS);
  return result;
}

// Get icon by category (cluster display name) and icon name (without .svg extension)
export async function getIconByCategoryAndName(
  category: string,
  iconName: string
): Promise<Icon | null> {
  const clusterData = await getClusterByName(category);
  if (!clusterData) return null;

  const filename = iconName.replace('.svg', '');
  const url = buildIconUrl(clusterData.source_folder || category, filename);
  const hashKey = hashUrlToKey(url);
  return query.getIconByUrlHash(hashKey);
}
