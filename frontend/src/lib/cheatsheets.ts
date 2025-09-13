// Utility functions for Cheatsheets (category/sheet)

export type CheatsheetItem = {
  name: string;
  url: string;
  description?: string;
};

export type CheatsheetsByCategory = Record<string, Array<CheatsheetItem>>;

export type CheatsheetMetatags = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: string;
  canonical?: string;
  robots?: string;
};

export type CheatsheetResult = {
  htmlContent: string;
  metatags: CheatsheetMetatags;
};

// Get all cheatsheets grouped by category
export async function getAllCheatsheets(): Promise<CheatsheetsByCategory> {
  const files = import.meta.glob(
    "/src/pages/html_pages/cheatsheets/**/*.html",
    { eager: true }
  );

  const sheetsByCategory: CheatsheetsByCategory = {};

  for (const [path, file] of Object.entries(files)) {
    const pathParts = path.split("/");
    const category = pathParts[pathParts.length - 2];
    const fileName = pathParts[pathParts.length - 1];
    const name = fileName.replace(".html", "");

    if (!sheetsByCategory[category]) {
      sheetsByCategory[category] = [];
    }

    // For HTML files, we'll use a default description since they don't have frontmatter
    const description = `Cheatsheet for ${name}`;

    sheetsByCategory[category].push({
      name,
      url: `/freedevtools/c/${category}/${name}`,
      description,
    });
  }

  Object.keys(sheetsByCategory).forEach((category) => {
    sheetsByCategory[category].sort((a, b) => a.name.localeCompare(b.name));
  });

  return sheetsByCategory;
}

export async function getSheetsByCategory(
  category: string
): Promise<Array<CheatsheetItem>> {
  const all = await getAllCheatsheets();
  return all[category] || [];
}

export async function getCheatsheet(category: string, name: string): Promise<CheatsheetResult | null> {
  try {
    // Preload all cheatsheet HTML files as raw strings at build-time
    const rawFiles = import.meta.glob(
      "/src/pages/html_pages/cheatsheets/**/*.html",
      { eager: true, as: "raw" }
    ) as Record<string, string>;

    const filePath = `/src/pages/html_pages/cheatsheets/${category}/${name}.html`;
    const htmlContent = rawFiles[filePath];
    
    if (!htmlContent) {
      return null;
    }

    // Extract metatags from the head section
    const metatags: CheatsheetMetatags = {};
    
    // Extract title
    const titleMatch = htmlContent.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleMatch) {
      metatags.title = titleMatch[1].trim();
    }

    // Extract meta tags
    const metaTags = htmlContent.match(/<meta[^>]*>/gi) || [];
    
    for (const metaTag of metaTags) {
      // Extract name attribute
      const nameMatch = metaTag.match(/name=["']([^"']*)["']/i);
      const propertyMatch = metaTag.match(/property=["']([^"']*)["']/i);
      const contentMatch = metaTag.match(/content=["']([^"']*)["']/i);
      
      if (!contentMatch) continue;
      
      const content = contentMatch[1];
      const name = nameMatch?.[1];
      const property = propertyMatch?.[1];
      
      if (name) {
        switch (name.toLowerCase()) {
          case 'description':
            metatags.description = content;
            break;
          case 'keywords':
            metatags.keywords = content;
            break;
          case 'robots':
            metatags.robots = content;
            break;
        }
      }
      
      if (property) {
        switch (property.toLowerCase()) {
          case 'og:title':
            metatags.ogTitle = content;
            break;
          case 'og:description':
            metatags.ogDescription = content;
            break;
          case 'og:image':
            metatags.ogImage = content;
            break;
          case 'og:url':
            metatags.ogUrl = content;
            break;
          case 'og:type':
            metatags.ogType = content;
            break;
        }
      }
    }

    // Extract Twitter meta tags
    const twitterTags = htmlContent.match(/<meta[^>]*name=["']twitter:[^"']*["'][^>]*>/gi) || [];
    for (const twitterTag of twitterTags) {
      const nameMatch = twitterTag.match(/name=["']twitter:([^"']*)["']/i);
      const contentMatch = twitterTag.match(/content=["']([^"']*)["']/i);
      
      if (!nameMatch || !contentMatch) continue;
      
      const name = nameMatch[1].toLowerCase();
      const content = contentMatch[1];
      
      switch (name) {
        case 'title':
          metatags.twitterTitle = content;
          break;
        case 'description':
          metatags.twitterDescription = content;
          break;
        case 'image':
          metatags.twitterImage = content;
          break;
        case 'card':
          metatags.twitterCard = content;
          break;
      }
    }

    // Extract canonical URL
    const canonicalMatch = htmlContent.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    if (canonicalMatch) {
      metatags.canonical = canonicalMatch[1];
    }

    // Extract content from the body tag, removing the outer HTML structure
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = '';
    if (bodyMatch) {
      bodyContent = bodyMatch[1].trim();
    } else {
      // If no body tag found, return the content as is
      bodyContent = htmlContent;
    }
    
    return {
      htmlContent: bodyContent,
      metatags
    };
  } catch (error) {
    return null;
  }
}


