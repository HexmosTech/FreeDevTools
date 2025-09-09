export interface CheatSheet {
  title: string;
  name: string;
  path: string;
  description: string;
  category: string;
  icon: string;
  themeColor: string;
  canonical: string;
  keywords: string[];
  features: string[];
  ogImage: string;
  twitterImage: string;
  variationOf?: string;
  datePublished?: string;
  softwareVersion?: string;
}

export const CHEATSHEETS_CONFIG: Record<string, CheatSheet> = {
  // Example cheatsheet entries. Update as needed.
  "git-cheatsheet": {
    title: "Git Cheatsheet | Online Free DevTools",
    name: "Git Cheatsheet",
    path: "/freedevtools/c/git-cheatsheet/",
    description:
      "Quick reference for common Git commands. Copy, learn, and boost your workflow.",
    category: "Developer Cheatsheets",
    icon: "📘",
    themeColor: "#0ea5e9",
    canonical: "https://hexmos.com/freedevtools/c/git-cheatsheet/",
    keywords: [
      "git cheatsheet",
      "git commands",
      "git reference",
      "developer cheatsheet",
      "version control"
    ],
    features: [
      "Common Git commands grouped by task",
      "Copy-friendly snippets",
      "Short explanations",
    ],
    ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png",
    twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png",
  },
  "docker-cheatsheet": {
    title: "Docker Cheatsheet | Online Free DevTools",
    name: "Docker Cheatsheet",
    path: "/freedevtools/c/docker-cheatsheet/",
    description:
      "Handy Docker command reference for containers, images, and volumes.",
    category: "Developer Cheatsheets",
    icon: "🐳",
    themeColor: "#2496ed",
    canonical: "https://hexmos.com/freedevtools/c/docker-cheatsheet/",
    keywords: [
      "docker cheatsheet",
      "docker commands",
      "container reference"
    ],
    features: [
      "Image, container, network, and volume commands",
      "Copy-friendly snippets",
    ],
    ogImage: "https://hexmos.com/freedevtools/t/tool-banners/dockerfile-linter-banner.png",
    twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/dockerfile-linter-banner.png",
  },
};

export function getCheatSheetByKey(key: string): CheatSheet | undefined {
  return CHEATSHEETS_CONFIG[key];
}

export function getAllCheatSheets(): CheatSheet[] {
  return Object.values(CHEATSHEETS_CONFIG);
}

export function getAllUniqueCheatSheets(): CheatSheet[] {
  return getAllCheatSheets().filter((item) => !item.variationOf);
}

export function getCheatSheetsByCategory(category: string): CheatSheet[] {
  return getAllCheatSheets().filter((item) => item.category === category);
}


