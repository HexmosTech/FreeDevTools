import { getCollection } from 'astro:content';

/**
 * Efficiently generate static paths for MCP repositories
 * This function creates a map of category -> repository IDs for O(1) lookups
 */
export async function generateMcpStaticPaths() {
  const categoryEntries = await getCollection('mcpCategoryData');
  const paths = [];

  for (const entry of categoryEntries) {
    const categoryData = entry.data;
    const repositories = Object.keys(categoryData.repositories);

    for (const repositoryId of repositories) {
      paths.push({
        params: {
          category: categoryData.category,
          repositoryId: repositoryId,
        },
      });
    }
  }

  return paths;
}

/**
 * Generate static paths for MCP categories only
 */
export async function generateMcpCategoryPaths() {
  const categoryEntries = await getCollection('mcpCategoryData');

  return categoryEntries.map((entry) => ({
    params: { category: entry.data.category },
  }));
}

/**
 * Generate paginated paths for MCP categories
 */
export async function generateMcpCategoryPaginatedPaths({
  paginate,
}: {
  paginate: any;
}) {
  const categoryEntries = await getCollection('mcpCategoryData');
  const allPaths = [];

  for (const entry of categoryEntries) {
    const categoryData = entry.data;
    // Include repository ID in each server object
    const categoryServers = Object.entries(categoryData.repositories).map(
      ([repositoryId, server]) => ({
        ...server,
        repositoryId: repositoryId,
      })
    );

    // Generate paginated paths for this category
    const paginatedPaths = paginate(categoryServers, {
      params: { category: categoryData.category },
      pageSize: 30, // Default 20 items per page
    });

    allPaths.push(paginatedPaths);
  }

  return allPaths.flat();
}

/**
 * Generate paginated paths for MCP directory (all categories)
 */
export async function generateMcpDirectoryPaginatedPaths({
  paginate,
}: {
  paginate: any;
}) {
  const metadataEntries = await getCollection('mcpMetadata');
  const metadata = metadataEntries[0]?.data;

  if (!metadata) {
    throw new Error('MCP metadata not found');
  }

  // Get all categories from metadata
  const categories = Object.entries(metadata.categories).map(
    ([id, categoryData]) => ({
      id,
      name: categoryData.categoryDisplay,
      description: '',
      icon: id, // Use the category ID as the icon key for emoji matching
      serverCount: categoryData.totalRepositories,
      url: `/freedevtools/mcp/${id}/1/`,
    })
  );

  // Add descriptions from category data
  const categoryEntries = await getCollection('mcpCategoryData');
  categoryEntries.forEach((entry) => {
    const category = categories.find((c) => c.id === entry.data.category);
    if (category) {
      category.description = entry.data.description || '';
    }
  });

  // Generate paginated paths for all categories
  const paginatedPaths = paginate(categories, {
    params: {},
    pageSize: 30, // 30 categories per page
  });

  return paginatedPaths;
}

/**
 * Create a category-to-repository mapping for efficient lookups
 * This can be used to avoid multiple queries in getStaticPaths
 */
export async function createCategoryRepositoryMap() {
  const categoryEntries = await getCollection('mcpCategoryData');
  const categoryMap = new Map();

  for (const entry of categoryEntries) {
    const categoryData = entry.data;
    const repositories = Object.keys(categoryData.repositories);
    categoryMap.set(categoryData.category, repositories);
  }

  return categoryMap;
}

/**
 * SSR: Get all MCP categories (for directory pagination)
 */
export async function getAllMcpCategories() {
  const metadataEntries = await getCollection('mcpMetadata');
  const metadata = metadataEntries[0]?.data;

  if (!metadata) {
    throw new Error('MCP metadata not found');
  }

  // Get all categories from metadata
  const categories = Object.entries(metadata.categories).map(
    ([id, categoryData]) => ({
      id,
      name: categoryData.categoryDisplay,
      description: '',
      icon: id,
      serverCount: categoryData.totalRepositories,
      url: `/freedevtools/mcp/${id}/1/`,
    })
  );

  // Add descriptions from category data
  const categoryEntries = await getCollection('mcpCategoryData');
  categoryEntries.forEach((entry) => {
    const category = categories.find((c) => c.id === entry.data.category);
    if (category) {
      category.description = entry.data.description || '';
    }
  });

  return categories;
}

/**
 * SSR: Get all category IDs (for route validation)
 */
export async function getAllMcpCategoryIds(): Promise<string[]> {
  const categoryEntries = await getCollection('mcpCategoryData');
  return categoryEntries.map((entry) => entry.data.category);
}

/**
 * SSR: Get category data by ID
 */
export async function getMcpCategoryById(categoryId: string) {
  const categoryEntries = await getCollection('mcpCategoryData');
  const entry = categoryEntries.find(
    (e) => e.data.category === categoryId
  );

  if (!entry) {
    return null;
  }

  return {
    category: entry.data.category,
    categoryDisplay: entry.data.categoryDisplay,
    description: entry.data.description || '',
    repositories: entry.data.repositories,
  };
}

/**
 * SSR: Get repositories for a category (with pagination support)
 */
export async function getMcpCategoryRepositories(categoryId: string) {
  const category = await getMcpCategoryById(categoryId);
  if (!category) {
    return [];
  }

  // Include repository ID in each server object
  return Object.entries(category.repositories).map(([repositoryId, server]) => ({
    ...server,
    repositoryId: repositoryId,
  }));
}

/**
 * SSR: Get MCP metadata
 */
export async function getMcpMetadata() {
  const metadataEntries = await getCollection('mcpMetadata');
  return metadataEntries[0]?.data;
}
