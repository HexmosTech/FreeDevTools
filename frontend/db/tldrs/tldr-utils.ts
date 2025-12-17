import type { Cluster, Command, Page } from './tldr-schema';
import { query } from './tldr-worker-pool';

export async function getTldrCluster(cluster: string): Promise<Cluster | null> {
  return await query.getMainPage(cluster);
}

export async function getTldrCommandsByClusterPaginated(
  cluster: string,
  page: number = 1,
  limit: number = 30
): Promise<Command[]> {
  const offset = (page - 1) * limit;
  return await query.getCommandsByClusterPaginated(cluster, limit, offset);
}

export async function getAllTldrClusters(): Promise<Cluster[]> {
  return await query.getAllClusters();
}

export async function getTldrPage(platform: string, slug: string): Promise<Page | null> {
  const page = await query.getPage(platform, slug);

  if (!page) return null;

  return page;
}

export async function getTldrOverview(): Promise<number> {
  return await query.getOverview();
}

export async function getTldrSitemapUrls(limit: number, offset: number): Promise<string[]> {
  return await query.getSitemapUrls(limit, offset);
}

export async function getTldrSitemapCount(): Promise<number> {
  return await query.getSitemapCount();
}