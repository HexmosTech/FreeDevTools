import { buildIconUrl, hashUrlToKey } from '../../src/lib/hash-utils';
import type { Cluster, ClusterWithPreviewIcons, Icon } from './svg-icons-schema';
import { query } from './svg-worker-pool';

export async function getTotalIcons(): Promise<number> {
  return query.getTotalIcons();
}

export async function getTotalClusters(): Promise<number> {
  return query.getTotalClusters();
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
  return query.getIconsByCluster(cluster, categoryName);
}

export async function getClustersWithPreviewIcons(
  page: number = 1,
  itemsPerPage: number = 30,
  previewIconsPerCluster: number = 6,
  transform: boolean = false
): Promise<ClusterWithPreviewIcons[] | ClusterTransformed[]> {
  return query.getClustersWithPreviewIcons(page, itemsPerPage, previewIconsPerCluster, transform);
}

export async function getClusterByName(name: string): Promise<Cluster | null> {
  return query.getClusterByName(name);
}

export async function getClusters(): Promise<Cluster[]> {
  return query.getClusters();
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
