import { getCollection } from 'astro:content';

/**
 * Generate paginated paths for PNG icons categories
 */
export async function generatePngIconsStaticPaths() {
  const pngIconsEntries = await getCollection('pngIconsMetadata');
  const iconsData = pngIconsEntries[0]?.data;

  if (!iconsData) {
    throw new Error('PNG icons metadata not found');
  }

  // Get all categories with their data
  const categories = Object.entries(iconsData.clusters).map(
    ([key, clusterData]) => ({
      id: key,
      name: clusterData.name,
      description: clusterData.description,
      icon: `/freedevtools/png_icons/${clusterData.name}/`,
      iconCount: clusterData.fileNames.length,
      url: `/freedevtools/png_icons/${clusterData.name}/`,
      keywords: clusterData.keywords,
      features: clusterData.features,
      fileNames: clusterData.fileNames, // Include fileNames for icon previews
    })
  );

  const itemsPerPage = 30;
  const totalPages = Math.ceil(categories.length / itemsPerPage);
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
        categories,
      },
    });
  }

  return paths;
}

/**
 * Create a category-to-icons mapping for efficient lookups
 */
export async function createCategoryIconsMap() {
  const pngIconsEntries = await getCollection('pngIconsMetadata');
  const iconsData = pngIconsEntries[0]?.data;

  if (!iconsData) {
    throw new Error('PNG icons metadata not found');
  }

  const categoryMap = new Map();

  for (const [key, clusterData] of Object.entries(iconsData.clusters)) {
    const icons = clusterData.fileNames.map((fileObj: any) => {
      const iconName =
        typeof fileObj === 'string'
          ? fileObj.replace('.svg', '')
          : fileObj.fileName.replace('.svg', '');

      return {
        name: iconName,
        url: `/freedevtools/png_icons/${clusterData.name}/${iconName}/`,
        description:
          typeof fileObj === 'object' ? fileObj.description || '' : '',
        category: clusterData.name,
      };
    });

    categoryMap.set(clusterData.name, icons);
  }

  return categoryMap;
}
