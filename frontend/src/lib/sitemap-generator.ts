import { getAllCommands } from "./commands";

export async function generateTldrSitemapEntries() {
  const commands = await getAllCommands();
  const entries: Array<{
    url: string;
    lastmod: Date;
    changefreq:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    priority: number;
  }> = [];

  // Add main TLDR page
  entries.push({
    url: "/freedevtools/tldr/",
    lastmod: new Date(),
    changefreq: "daily",
    priority: 1.0,
  });

  // Add platform index pages
  Object.keys(commands).forEach((platform) => {
    entries.push({
      url: `/freedevtools/tldr/${platform}/`,
      lastmod: new Date(),
      changefreq: "daily",
      priority: 0.9,
    });

    // Add individual command pages
    commands[platform].forEach((command) => {
      entries.push({
        url: command.url,
        lastmod: new Date(),
        changefreq: "daily",
        priority: 0.8,
      });
    });
  });

  return entries;
}

export async function generateCheatsheetSitemapEntries() {
  // This would be similar for cheatsheets if you want to include them
  // For now, returning empty array
  return [];
}
