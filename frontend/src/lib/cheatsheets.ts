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
    "/src/pages/markdown_pages/cheatsheets/**/*.md",
    { eager: true }
  );

  const sheetsByCategory: CheatsheetsByCategory = {};

  for (const [path, file] of Object.entries(files)) {
    const pathParts = path.split("/");
    const category = pathParts[pathParts.length - 2];
    const fileName = pathParts[pathParts.length - 1];
    const name = fileName.replace(".md", "");

    if (!sheetsByCategory[category]) {
      sheetsByCategory[category] = [];
    }

    const description =
      (file as any).frontmatter?.description ||
      (file as any).frontmatter?.title ||
      `Cheatsheet for ${name}`;

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
      /* @vite-ignore */ `/src/pages/markdown_pages/cheatsheets/${category}/${name}.md`
    );
    return file as any;
  } catch (error) {
    return null;
  }
}


