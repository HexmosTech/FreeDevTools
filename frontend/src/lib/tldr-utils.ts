import { getCollection } from 'astro:content';

/**
 * Generate paginated paths for TLDR platforms
 */
export async function generateTldrStaticPaths() {
  const tldrEntries = await getCollection('tldr');

  const platformsByCount: Record<string, number> = {};

  for (const entry of tldrEntries) {
    const pathParts = entry.id.split('/');
    const platform = pathParts[pathParts.length - 2];
    platformsByCount[platform] = (platformsByCount[platform] || 0) + 1;
  }

  const platforms = Object.entries(platformsByCount).map(([name, count]) => ({
    name,
    count,
    url: `/freedevtools/tldr/${name}/`,
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
  const tldrEntries = await getCollection('tldr');

  const platforms = new Set<string>();
  for (const entry of tldrEntries) {
    const pathParts = entry.id.split('/');
    const platform = pathParts[pathParts.length - 2];
    platforms.add(platform);
  }

  const paths: any[] = [];

  for (const platform of platforms) {
    const platformCommands = tldrEntries.filter((entry) => {
      const pathParts = entry.id.split('/');
      const entryPlatform = pathParts[pathParts.length - 2];
      return entryPlatform === platform;
    });

    const itemsPerPage = 30;
    const totalPages = Math.ceil(platformCommands.length / itemsPerPage);

    // Generate pagination pages for this platform (2, 3, 4, etc. - page 1 is handled by [platform]/index.astro)
    for (let i = 2; i <= totalPages; i++) {
      paths.push({
        params: { platform, page: i.toString() },
        props: {
          type: 'pagination',
          page: i,
          itemsPerPage,
          totalPages,
          commands: platformCommands.map((entry) => {
            const pathParts = entry.id.split('/');
            const fileName = pathParts[pathParts.length - 1];
            const commandName = fileName.replace('.md', '');

            return {
              name: entry.data.name || commandName,
              url:
                entry.data.path ||
                `/freedevtools/tldr/${platform}/${commandName}/`,
              description:
                entry.data.description ||
                `Documentation for ${commandName} command`,
              category: entry.data.category,
            };
          }),
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
  const tldrEntries = await getCollection('tldr');

  const platformsByCount: Record<string, number> = {};

  for (const entry of tldrEntries) {
    const pathParts = entry.id.split('/');
    const platform = pathParts[pathParts.length - 2];
    platformsByCount[platform] = (platformsByCount[platform] || 0) + 1;
  }

  return Object.entries(platformsByCount).map(([name, count]) => ({
    name,
    count,
    url: `/freedevtools/tldr/${name}/`,
  }));
}

/**
 * Get commands for a specific platform
 */
export async function getTldrPlatformCommands(platform: string) {
  const tldrEntries = await getCollection('tldr');

  return tldrEntries
    .filter((entry) => {
      const pathParts = entry.id.split('/');
      const entryPlatform = pathParts[pathParts.length - 2];
      return entryPlatform === platform;
    })
    .map((entry) => {
      const pathParts = entry.id.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const commandName = fileName.replace('.md', '');

      return {
        name: entry.data.name || commandName,
        url:
          entry.data.path || `/freedevtools/tldr/${platform}/${commandName}/`,
        description:
          entry.data.description || `Documentation for ${commandName} command`,
        category: entry.data.category,
      };
    });
}
