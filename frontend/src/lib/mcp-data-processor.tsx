// MCP Data Processor - Processes input.json into the expected format for the UI

export interface ProcessedServer {
  id: string;
  name: string;
  author: string;
  authorUrl: string;
  description: string;
  isOfficial: boolean;
  categories: string;
  imageUrl?: string;
  scores: {
    security: string;
    license: string;
    quality: string;
  };
  stats: {
    tools: number;
    weeklyDownloads: number;
    githubStars: number;
    lastUpdated: string;
  };
  license: string;
  url: string;
  githubUrl: string;
  npmUrl?: string;
  readmeContent?: string;
}

export interface ProcessedTool {
  id: string;
  name: string;
  serverId: string;
  serverName: string;
  description: string;
  license: string;
  url: string;
  category: string;
}

export interface ProcessedClient {
  id: string;
  name: string;
  description: string;
  logo: string;
  rating: number;
  ratingCount: number;
  price: string;
  platforms: string[];
  programmingLanguage: string;
  license: string;
  url: string;
}

export interface ProcessedCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  serverCount: number;
  url: string;
}

export interface ProcessedMetadata {
  totalServers: number;
  totalTools: number;
  totalClients: number;
  totalCategories: number;
  lastUpdated: string;
  version: string;
  pagination: {
    defaultPerPage: number;
    maxPerPage: number;
    availableSizes: number[];
  };
  search: {
    enabled: boolean;
    fields: string[];
    fuzzySearch: boolean;
  };
  sorting: {
    servers: string[];
    tools: string[];
    clients: string[];
  };
  api: {
    baseUrl: string;
    endpoints: {
      servers: string;
      tools: string;
      clients: string;
      categories: string;
    };
  };
}

export interface InputData {
  totalCategories: number;
  totalRepositories: number;
  processing_started: string;
  data: {
    [categoryKey: string]: {
      category: string;
      categoryDisplay: string;
      description: string;
      totalRepositories: number;
      repositories: {
        [repoKey: string]: {
          owner: string;
          name: string;
          url: string;
          imageUrl: string;
          description: string;
          enhanced: boolean;
          processed: boolean;
          got_data: boolean;
          processing_timestamp: string;
          collection_timestamp: string;
          stars: number;
          forks: number;
          license: string;
          language: string;
          created_at: string;
          updated_at: string;
          open_issues: number;
          readme_content: string;
          github_success: boolean;
          github_error: string | null;
          npm_url: string;
          npm_downloads: number;
          npm_package_name: string | null;
          npm_success: boolean;
          npm_error: string | null;
        };
      };
    };
  };
}

// Load and process the input data
export async function loadMcpData(): Promise<{
  servers: ProcessedServer[];
  tools: ProcessedTool[];
  clients: ProcessedClient[];
  categories: ProcessedCategory[];
  metadata: ProcessedMetadata;
}> {
  // Load input.json data
  // Use static import for Astro compatibility
  const inputData = await import('../pages/mcp/data/input.json') as { default: InputData };
  return processInputData(inputData.default);
}

// Process input.json data into the expected format
export function processInputData(inputData: InputData): {
  servers: ProcessedServer[];
  tools: ProcessedTool[];
  clients: ProcessedClient[];
  categories: ProcessedCategory[];
  metadata: ProcessedMetadata;
} {
  const servers: ProcessedServer[] = [];
  const tools: ProcessedTool[] = []; // Currently mock, will be populated from input.json if available
  const clients: ProcessedClient[] = []; // Currently mock, will be populated from input.json if available
  const categories: ProcessedCategory[] = [];

  // Process categories from input data
  Object.entries(inputData.data).forEach(([categoryKey, categoryData]) => {
    // Count processed repositories for this category
    let processedRepoCount = 0;
    Object.values(categoryData.repositories).forEach((repo) => {
      if (repo.processed && repo.got_data) {
        processedRepoCount++;
      }
    });

    const category: ProcessedCategory = {
      id: categoryData.category,
      name: categoryData.categoryDisplay,
      description: categoryData.description,
      icon: getCategoryIcon(categoryData.category),
      serverCount: processedRepoCount, // Use actual processed count
      url: `/freedevtools/mcp/${categoryData.category}`,
    };
    categories.push(category);

    // Process repositories as servers
    Object.entries(categoryData.repositories).forEach(([repoKey, repo]) => {
      // Only process repositories that have been successfully processed
      if (repo.processed && repo.got_data) {
        const server: ProcessedServer = {
          id: repoKey,
          name: repo.name,
          author: repo.owner,
          authorUrl: `https://github.com/${repo.owner}`,
          description: repo.description,
          isOfficial: categoryData.category === 'official-servers',
          categories: categoryData.category,
          imageUrl: repo.imageUrl || undefined,
          scores: {
            security: 'A', // Default score
            license: getLicenseScore(repo.license),
            quality: 'A', // Default score
          },
          stats: {
            tools: Math.floor(Math.random() * 50) + 1, // Mock tool count
            weeklyDownloads: repo.npm_downloads || 0,
            githubStars: repo.stars,
            lastUpdated: formatTimeAgo(repo.updated_at),
          },
          license: repo.license,
          url: `/freedevtools/mcp/servers/@${repo.owner}/${repo.name}`,
          githubUrl: repo.url,
          npmUrl: repo.npm_url || undefined,
          readmeContent: repo.readme_content || undefined,
        };
        servers.push(server);
      }
    });
  });

  // Generate mock tools and clients for now
  const mockTools: ProcessedTool[] = [
    {
      id: 'press_a',
      name: 'press_a',
      serverId: 'mcp-gameboy-server',
      serverName: 'MCP GameBoy Server',
      description:
        'Simulate pressing the A button on a GameBoy emulator with customizable duration frames, enabling precise control for testing or gameplay scenarios.',
      license: 'MIT License',
      url: '/freedevtools/mcp/servers/@mario-andreschak/mcp-gameboy/tools/press_a',
      category: 'gaming',
    },
    {
      id: 'get_a_joke',
      name: 'get_a_joke',
      serverId: 'mcpunk',
      serverName: 'MCPunk',
      description:
        "Generate a humorous joke based on a specified animal for entertainment or testing purposes, leveraging the MCPunk server's functionality.",
      license: 'MIT License',
      url: '/freedevtools/mcp/servers/@mcpunk/mcpunk/tools/get_a_joke',
      category: 'entertainment',
    },
    {
      id: 'delete_a_meeting',
      name: 'delete_a_meeting',
      serverId: 'zoom-mcp-server',
      serverName: 'Zoom MCP Server',
      description:
        'Deletes a specified Zoom meeting by its unique ID using the Zoom MCP Server. Input the meeting ID to remove it from the server.',
      license: 'MIT License',
      url: '/freedevtools/mcp/servers/@zoom/zoom-mcp-server/tools/delete_a_meeting',
      category: 'communication',
    },
  ];

  const mockClients: ProcessedClient[] = [
    {
      id: '5ire',
      name: '5ire',
      description:
        '5ire is a cross-platform desktop AI assistant, MCP client. It compatible with major service providers, supports local knowledge base and tools via model context protocol servers.',
      logo: 'data:image/png;base64,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',
      rating: 4.5,
      ratingCount: 2,
      price: 'Free',
      platforms: ['Desktop'],
      programmingLanguage: 'TypeScript',
      license: 'GPL 3.0',
      url: '/freedevtools/mcp/clients/5ire',
    },
  ];

  const metadata: ProcessedMetadata = {
    totalServers: servers.length,
    totalTools: mockTools.length,
    totalClients: mockClients.length,
    totalCategories: categories.length,
    lastUpdated: inputData.processing_started,
    version: '1.0.0',
    pagination: {
      defaultPerPage: 100,
      maxPerPage: 500,
      availableSizes: [25, 50, 100, 200, 500],
    },
    search: {
      enabled: true,
      fields: ['name', 'description', 'author', 'categories'],
      fuzzySearch: true,
    },
    sorting: {
      servers: [
        'name',
        'lastUpdated',
        'githubStars',
        'weeklyDownloads',
        'tools',
      ],
      tools: ['name', 'serverName', 'category'],
      clients: ['name', 'rating', 'platforms'],
    },
    api: {
      baseUrl: '/api/mcp',
      endpoints: {
        servers: '/servers',
        tools: '/tools',
        clients: '/clients',
        categories: '/categories',
      },
    },
  };

  return {
    servers,
    tools: mockTools,
    clients: mockClients,
    categories,
    metadata,
  };
}

// Helper functions
function getCategoryIcon(category: string): string {
  const iconMap: Record<string, string> = {
    'web-scraping': 'pickaxe',
    'code-execution': 'code',
    'knowledge-memory': 'brain',
    'remote-capable': 'cloud-upload',
    security: 'shield',
    blockchain: 'bitcoin',
    'browser-automation': 'browser',
    'cloud-platforms': 'cloud',
    communication: 'message-circle',
    'art-culture': 'palette',
    'rag-systems': 'database',
    'shell-access': 'terminal',
    'customer-data-platforms': 'users',
    'official-servers': 'star',
  };
  return iconMap[category] || 'tool';
}

function getLicenseScore(license: string): string {
  if (license.includes('MIT') || license.includes('Apache')) return 'A';
  if (license.includes('GPL') || license.includes('AGPL')) return 'B';
  if (license.includes('BSD')) return 'A';
  return 'C';
}

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}
