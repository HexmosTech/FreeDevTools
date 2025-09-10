// Utility functions for Cheatsheets (category/sheet)

export type CheatsheetItem = {
  name: string;
  url: string;
  description?: string;
};

export type CheatsheetsByCategory = Record<string, Array<CheatsheetItem>>;

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

export async function getCheatsheet(category: string, name: string) {
  try {
    const file = await import(
      /* @vite-ignore */ `/src/pages/html_pages/cheatsheets/${category}/${name}.html?raw`
    );
    const htmlContent = file.default as string;
    
    // Extract content from the body tag, removing the outer HTML structure
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      return bodyMatch[1].trim();
    }
    
    // If no body tag found, return the content as is
    return htmlContent;
  } catch (error) {
    return null;
  }
}


