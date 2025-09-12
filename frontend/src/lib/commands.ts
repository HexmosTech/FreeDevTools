// Utility function to get all command markdown files
export async function getAllCommands() {
  const commandFiles = import.meta.glob(
    "/src/pages/markdown_pages/tldr/**/*.md",
    {
      eager: true,
    }
  );

  const commandsByPlatform: Record<
    string,
    Array<{ name: string; url: string; description?: string }>
  > = {};

  for (const [path, file] of Object.entries(commandFiles)) {
    // Extract platform and command name from path
    const pathParts = path.split("/");
    const platform = pathParts[pathParts.length - 2]; // e.g., 'android'
    const fileName = pathParts[pathParts.length - 1]; // e.g., 'am.md'
    const commandName = fileName.replace(".md", ""); // e.g., 'am'

    if (!commandsByPlatform[platform]) {
      commandsByPlatform[platform] = [];
    }

    // Get description from frontmatter if available
    const description =
      (file as any).frontmatter?.description ||
      (file as any).frontmatter?.title ||
      `Documentation for ${commandName} command`;

    // Get additional frontmatter data
    const frontmatter = (file as any).frontmatter || {};

    const commandName_final = frontmatter.name || commandName;

    // Debug logging
    if (!frontmatter.name) {
      console.log(
        `❌ Missing name field: ${path} -> using fallback: ${commandName}`
      );
    }
    if (frontmatter.name === "") {
      console.log(`❌ Empty name field: ${path}`);
    }

    commandsByPlatform[platform].push({
      name: commandName_final,
      url: frontmatter.path || `/freedevtools/tldr/${platform}/${commandName}`,
      description,
      category: frontmatter.category,
    });
  }

  // Sort commands within each platform - COMMENTED OUT FOR NOW
  // Object.keys(commandsByPlatform).forEach((platform) => {
  //   commandsByPlatform[platform].sort((a, b) => {
  //     const nameA = a.name || "";
  //     const nameB = b.name || "";

  //     // Debug logging for sorting issues
  //     if (!a.name) {
  //       console.log(`❌ Sorting issue - undefined name in object:`, a);
  //     }
  //     if (!b.name) {
  //       console.log(`❌ Sorting issue - undefined name in object:`, b);
  //     }

  //     return nameA.localeCompare(nameB);
  //   });
  // });

  return commandsByPlatform;
}

export async function getCommandsByPlatform(platform: string) {
  const allCommands = await getAllCommands();
  return allCommands[platform] || [];
}

export async function getCommand(platform: string, commandName: string) {
  try {
    const commandFiles = import.meta.glob("/src/pages/markdown_pages/**/*.md", {
      eager: true,
    });

    const filePath = `/src/pages/markdown_pages/tldr/${platform}/${commandName}.md`;
    const commandFile = commandFiles[filePath];

    if (!commandFile) {
      return null;
    }

    return commandFile;
  } catch (error) {
    return null;
  }
}
