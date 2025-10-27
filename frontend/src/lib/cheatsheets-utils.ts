export interface CheatsheetCategory {
  id: string;
  name: string;
  description: string;
  cheatsheetCount: number;
  url: string;
  keywords: string[];
  features: string[];
  cheatsheets: CheatsheetItem[];
}

export interface CheatsheetItem {
  name: string;
  url: string;
  description?: string;
}

// Get all cheatsheet categories with their data
export async function getAllCheatsheetCategories(): Promise<
  CheatsheetCategory[]
> {
  // Use the existing cheatsheet system that loads from data/cheatsheets
  const files = import.meta.glob('/data/cheatsheets/**/*.html', {
    eager: true,
  });

  const categoriesMap = new Map<string, CheatsheetCategory>();

  for (const [path, file] of Object.entries(files)) {
    const pathParts = path.split('/');
    const category = pathParts[pathParts.length - 2];
    const fileName = pathParts[pathParts.length - 1];
    const name = fileName.replace('.html', '');

    if (!categoriesMap.has(category)) {
      categoriesMap.set(category, {
        id: category
          .toLowerCase()
          .replace(/[^a-z0-9_]+/g, '-')
          .replace(/_/g, '_'),
        name: category,
        description: `Comprehensive cheatsheets for ${category}`,
        cheatsheetCount: 0,
        url: `/freedevtools/c/${category
          .toLowerCase()
          .replace(/[^a-z0-9_]+/g, '-')
          .replace(/_/g, '_')}/`,
        keywords: [
          category.toLowerCase(),
          'cheatsheets',
          'reference',
          'commands',
        ],
        features: [
          'Quick reference',
          'Command syntax',
          'Easy to scan',
          'Fast learning',
        ],
        cheatsheets: [],
      });
    }

    const categoryData = categoriesMap.get(category)!;
    categoryData.cheatsheetCount++;
    categoryData.cheatsheets.push({
      name: name,
      url: `/freedevtools/c/${category
        .toLowerCase()
        .replace(/[^a-z0-9_]+/g, '-')
        .replace(/_/g, '_')}/${name}/`,
      description: `Cheatsheet for ${name}`,
    });
  }

  // Sort categories and cheatsheets within categories
  const categories = Array.from(categoriesMap.values());
  categories.sort((a, b) => a.name.localeCompare(b.name));

  categories.forEach((category) => {
    category.cheatsheets.sort((a, b) => a.name.localeCompare(b.name));
  });

  return categories;
}

// Generate static paths for cheatsheet pagination
export async function generateCheatsheetStaticPaths() {
  const categories = await getAllCheatsheetCategories();
  const itemsPerPage = 30;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const paths = [];
  for (let page = 1; page <= totalPages; page++) {
    paths.push({
      params: { page: page.toString() },
    });
  }

  return paths;
}

// Generate static paths for cheatsheet category pagination
export async function generateCheatsheetCategoryStaticPaths() {
  const categories = await getAllCheatsheetCategories();
  const paths = [];

  for (const category of categories) {
    const itemsPerPage = 30;
    const totalPages = Math.ceil(category.cheatsheetCount / itemsPerPage);

    for (let page = 1; page <= totalPages; page++) {
      paths.push({
        params: {
          category: category.id,
          page: page.toString(),
        },
        props: { category: category.name },
      });
    }
  }

  return paths;
}

// Get cheatsheets for a specific category
export async function getCheatsheetsByCategory(
  categoryName: string
): Promise<CheatsheetItem[]> {
  const files = import.meta.glob('/data/cheatsheets/**/*.html', {
    eager: true,
  });

  const cheatsheets: CheatsheetItem[] = [];

  for (const [path, file] of Object.entries(files)) {
    const pathParts = path.split('/');
    const category = pathParts[pathParts.length - 2];
    const fileName = pathParts[pathParts.length - 1];
    const name = fileName.replace('.html', '');

    if (category === categoryName) {
      cheatsheets.push({
        name: name,
        url: `/freedevtools/c/${categoryName
          .toLowerCase()
          .replace(/[^a-z0-9_]+/g, '-')
          .replace(/_/g, '_')}/${name}/`,
        description: `Cheatsheet for ${name}`,
      });
    }
  }

  return cheatsheets.sort((a, b) => a.name.localeCompare(b.name));
}

// Get a specific cheatsheet
export async function getCheatsheet(
  categoryName: string,
  cheatsheetName: string
) {
  try {
    // Use the existing cheatsheet system
    const files = import.meta.glob('/data/cheatsheets/**/*.html', {
      eager: true,
      query: '?raw',
      import: 'default',
    }) as Record<string, string>;

    const filePath = `/data/cheatsheets/${categoryName}/${cheatsheetName}.html`;
    const htmlContent = files[filePath];

    if (!htmlContent) {
      return null;
    }

    // Extract metatags from the head section
    const metatags: any = {};

    // Extract title
    const titleMatch = htmlContent.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleMatch) {
      metatags.title = titleMatch[1].trim();
    }

    // Extract meta description
    const descMatch = htmlContent.match(
      /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i
    );
    if (descMatch) {
      metatags.description = descMatch[1];
    }

    const metaKeywordsMatch = htmlContent.match(
      /<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']*)["']/i
    );
    if (metaKeywordsMatch) {
      metatags.keywords = metaKeywordsMatch[1]
        .split(',')
        .map((kw) => kw.trim());
    }

    // Extract content from the body tag
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = '';
    if (bodyMatch) {
      bodyContent = bodyMatch[1].trim();
    } else {
      bodyContent = htmlContent;
    }

    return {
      content: bodyContent,
      metatags,
    };
  } catch (error) {
    return null;
  }
}
