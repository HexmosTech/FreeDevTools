import { hashNameToKey, hashUrlToKey } from '../../src/lib/hash-utils';
import type { Cluster, Page } from './tldr-schema';
import { query } from './tldr-worker-pool';

export async function getTotalPages(): Promise<number> {
  return query.getTotalPages();
}

export async function getTotalClusters(): Promise<number> {
  return query.getTotalClusters();
}

export async function getAllClusters(): Promise<Cluster[]> {
  return query.getClusters();
}

export async function getPagesByCluster(cluster: string): Promise<Page[]> {
  return query.getPagesByCluster(cluster);
}

export async function getClusterByName(name: string): Promise<Cluster | null> {
  const hashName = hashNameToKey(name);
  return query.getClusterByName(hashName);
}

export async function getPageByNameViaHash(cluster: string, name: string): Promise<Page | null> {
  // Use hash-based lookup for O(1) performance
  const url = `${cluster}/${name}`;
  const hash = hashUrlToKey(url);
  return query.getPageByUrlHash(hash);
}

export async function getClusterPreviews(clusters: Cluster[]): Promise<Map<string, Page[]>> {
  const resultObj = await query.getClusterPreviews();
  // Convert object back to Map
  const resultMap = new Map<string, Page[]>();
  Object.entries(resultObj).forEach(([key, value]) => {
    resultMap.set(key, value as Page[]);
  });
  return resultMap;
}