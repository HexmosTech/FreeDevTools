// Utility functions for Manpages (main-category/subcategory/page)

export type ManpageItem = {
  name: string;
  url: string;
  description?: string;
  section?: string;
  mainCategory: string;
  subcategory: string;
};

export type ManpagesByMainCategory = Record<string, Record<string, Array<ManpageItem>>>;
export type ManpagesBySubcategory = Record<string, Array<ManpageItem>>;

export type ManpageMetatags = {
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

export type ManpageResult = {
  htmlContent: string;
  metatags: ManpageMetatags;
};

// Get all manpages grouped by main category and subcategory
export async function getAllManpages(): Promise<ManpagesByMainCategory> {
  const files = import.meta.glob(
    "/src/pages/html_pages/manpages/**/*.html",
    { eager: true }
  );

  const pagesByMainCategory: ManpagesByMainCategory = {};

  for (const [path, file] of Object.entries(files)) {
    const pathParts = path.split("/");
    // path structure: /src/pages/html_pages/manpages/main-category/subcategory/file.html
    if (pathParts.length < 7) continue; // Skip if not proper structure
    
    const mainCategory = pathParts[pathParts.length - 3];
    const subcategory = pathParts[pathParts.length - 2];
    const fileName = pathParts[pathParts.length - 1];
    const name = fileName.replace(".html", "");

    if (!pagesByMainCategory[mainCategory]) {
      pagesByMainCategory[mainCategory] = {};
    }
    if (!pagesByMainCategory[mainCategory][subcategory]) {
      pagesByMainCategory[mainCategory][subcategory] = [];
    }

    // Extract section from filename (e.g., "casueword.9freebsd" -> section "9")
    const sectionMatch = name.match(/\.(\d+)/);
    const section = sectionMatch ? sectionMatch[1] : undefined;

    // For HTML files, we'll use a default description
    const description = `Manual page for ${name}`;

    pagesByMainCategory[mainCategory][subcategory].push({
      name,
      url: `/m/${mainCategory}/${subcategory}/${name}/`,
      description,
      section,
      mainCategory,
      subcategory,
    });
  }

  // Sort everything
  Object.keys(pagesByMainCategory).forEach((mainCategory) => {
    Object.keys(pagesByMainCategory[mainCategory]).forEach((subcategory) => {
      pagesByMainCategory[mainCategory][subcategory].sort((a, b) => a.name.localeCompare(b.name));
    });
  });

  return pagesByMainCategory;
}

// Get all subcategories for a main category
export async function getSubcategoriesByMainCategory(
  mainCategory: string
): Promise<Record<string, Array<ManpageItem>>> {
  const all = await getAllManpages();
  return all[mainCategory] || {};
}

// Get all manpages for a specific subcategory
export async function getPagesBySubcategory(
  mainCategory: string,
  subcategory: string
): Promise<Array<ManpageItem>> {
  const all = await getAllManpages();
  return all[mainCategory]?.[subcategory] || [];
}

export async function getManpage(
  mainCategory: string,
  subcategory: string,
  name: string
): Promise<ManpageResult | null> {
  try {
    // Preload all manpage HTML files as raw strings at build-time
    const rawFiles = import.meta.glob(
      "/src/pages/html_pages/manpages/**/*.html",
      { eager: true, query: "?raw", import: "default" }
    ) as Record<string, string>;

    const filePath = `/src/pages/html_pages/manpages/${mainCategory}/${subcategory}/${name}.html`;
    const htmlContent = rawFiles[filePath];

    if (!htmlContent) {
      return null;
    }

    // Extract metatags from the head section
    const metatags: ManpageMetatags = {};

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
          case "description":
            metatags.description = content;
            break;
          case "keywords":
            metatags.keywords = content;
            break;
          case "robots":
            metatags.robots = content;
            break;
        }
      }

      if (property) {
        switch (property.toLowerCase()) {
          case "og:title":
            metatags.ogTitle = content;
            break;
          case "og:description":
            metatags.ogDescription = content;
            break;
          case "og:image":
            metatags.ogImage = content;
            break;
          case "og:url":
            metatags.ogUrl = content;
            break;
          case "og:type":
            metatags.ogType = content;
            break;
        }
      }
    }

    // Extract Twitter meta tags
    const twitterTags =
      htmlContent.match(/<meta[^>]*name=["']twitter:[^"']*["'][^>]*>/gi) || [];
    for (const twitterTag of twitterTags) {
      const nameMatch = twitterTag.match(/name=["']twitter:([^"']*)["']/i);
      const contentMatch = twitterTag.match(/content=["']([^"']*)["']/i);

      if (!nameMatch || !contentMatch) continue;

      const name = nameMatch[1].toLowerCase();
      const content = contentMatch[1];

      switch (name) {
        case "title":
          metatags.twitterTitle = content;
          break;
        case "description":
          metatags.twitterDescription = content;
          break;
        case "image":
          metatags.twitterImage = content;
          break;
        case "card":
          metatags.twitterCard = content;
          break;
      }
    }

    // Extract canonical URL
    const canonicalMatch = htmlContent.match(
      /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i
    );
    if (canonicalMatch) {
      metatags.canonical = canonicalMatch[1];
    }

    // Extract content from the body tag, removing the outer HTML structure
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = "";
    if (bodyMatch) {
      bodyContent = bodyMatch[1].trim();
    } else {
      // If no body tag found, return the content as is
      bodyContent = htmlContent;
    }

    return {
      htmlContent: bodyContent,
      metatags,
    };
  } catch (error) {
    return null;
  }
}

// Helper function to get friendly names for main categories
export function getMainCategoryDisplayName(category: string): string {
  const categoryNames: Record<string, string> = {
    'user-commands': 'User Commands',
    'system-calls': 'System Calls', 
    'library-functions': 'Library Functions',
    'device-files': 'Device Files',
    'file-formats': 'File Formats',
    'games': 'Games',
    'miscellaneous': 'Miscellaneous',
    'system-administration': 'System Administration',
    'kernel-routines': 'Kernel Routines',
  };
  
  return categoryNames[category] || category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
}