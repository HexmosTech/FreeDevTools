import {
    getAllClusters,
    getClusterPreviews,
    getPagesByCluster,
} from '../../db/tldr/tldr-utils';

/**
 * Generate paginated paths for TLDR platforms
 */
export async function generateTldrStaticPaths() {
  const clusters = await getAllClusters();

  const platforms = clusters.map((cluster) => ({
    name: cluster.name,
    count: cluster.count,
    url: `/freedevtools/tldr/${cluster.name}/`,
  }));

  const itemsPerPage = 30;
  const totalPages = Math.ceil(platforms.length / itemsPerPage);
  const paths: any[] = [];

  // Generate pagination pages (2, 3, 4, etc. - page 1 is handled by index.astro)
  for (let i = 2; i <= totalPages; i++) {
    paths.push({
      params: { page: i.toString() },
      props: {
        type: 'pagination',
        page: i,
        itemsPerPage,
        totalPages,
        platforms,
      },
    });
  }

  return paths;
}

/**
 * Generate paginated paths for TLDR platform commands
 */
export async function generateTldrPlatformStaticPaths() {
  const clusters = await getAllClusters();
  const paths: any[] = [];

  // Fetch all pages for all clusters in parallel to speed up build
  const clusterPagesPromises = clusters.map(async (cluster) => {
    const pages = await getPagesByCluster(cluster.name);
    return { cluster: cluster.name, pages };
  });

  const allClusterPages = await Promise.all(clusterPagesPromises);

  for (const { cluster, pages } of allClusterPages) {
    const itemsPerPage = 30;
    const totalPages = Math.ceil(pages.length / itemsPerPage);

    // Generate pagination pages for this platform (2, 3, 4, etc. - page 1 is handled by [platform]/index.astro)
    for (let i = 2; i <= totalPages; i++) {
      paths.push({
        params: { platform: cluster, page: i.toString() },
        props: {
          type: 'pagination',
          page: i,
          itemsPerPage,
          totalPages,
          commands: pages.map((page) => ({
            name: page.name,
            url: page.path || `/freedevtools/tldr/${cluster}/${page.name}/`,
            description: page.description || `Documentation for ${page.name} command`,
            category: page.platform,
          })),
        },
      });
    }
  }

  return paths;
}

/**
 * Get all TLDR platforms with their data
 */
export async function getAllTldrPlatforms() {
  const clusters = await getAllClusters();

  return clusters.map((cluster) => ({
    name: cluster.name,
    count: cluster.count,
    url: `/freedevtools/tldr/${cluster.name}/`,
  }));
}

/**
 * Get commands for a specific platform
 */
export async function getTldrPlatformCommands(platform: string) {
  const pages = await getPagesByCluster(platform);

  return pages.map((page) => ({
    name: page.name,
    url: page.path || `/freedevtools/tldr/${platform}/${page.name}/`,
    description: page.description || `Documentation for ${page.name} command`,
    category: page.platform,
  }));
}

/**
 * Get previews for all platforms (top 3 commands each)
 */
export async function getTldrPlatformPreviews() {
  const clusters = await getAllClusters();
  const previewsMap = await getClusterPreviews(clusters);
  
  return clusters.map((cluster) => {
    const commands = previewsMap.get(cluster.name) || [];
    return {
      name: cluster.name,
      count: cluster.count,
      url: `/freedevtools/tldr/${cluster.name}/`,
      commands: commands.map(cmd => ({
        name: cmd.name,
        url: cmd.path || `/freedevtools/tldr/${cluster.name}/${cmd.name}/`,
        description: cmd.description,
        category: cmd.platform
      }))
    };
  });
}
