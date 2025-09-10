/**
 * Parse tools configuration from TypeScript file content
 * @param {string} tsContent - Content of the tools.ts file
 * @returns {Array<{key: string, name: string}>} Array of tool objects with key and name
 */
function parseToolsConfig(tsContent) {
  const tools = [];

  const objectMatch = tsContent.match(
    /export const TOOLS_CONFIG:[\s\S]*?=\s*\{([\s\S]*?)\}\s*;/
  );
  if (!objectMatch) return tools;

  const body = objectMatch[1];

  // "json-prettifier": { ... name: "JSON Prettifier", ... }
  const entryRegex = /"([^"]+)"\s*:\s*\{([\s\S]*?)\}/g;
  let match;
  while ((match = entryRegex.exec(body)) !== null) {
    const key = match[1];
    const block = match[2];

    // Prefer explicit name field (handle quoted or unquoted keys)
    let nameMatch = block.match(/(?:\bname|\"name\")\s*:\s*"([^"]+)"/);
    // Fallback to title if name not present (handle quoted or unquoted keys)
    if (!nameMatch) {
      nameMatch = block.match(/(?:\btitle|\"title\")\s*:\s*"([^"]+)"/);
    }
    const name = nameMatch ? nameMatch[1] : key;

    tools.push({ key, name });
  }
  return tools;
}

/**
 * Get all tool keys from the tools.ts file
 * @param {string} tsContent - Content of the tools.ts file
 * @returns {Array<string>} Array of tool keys
 */
function getToolKeys(tsContent) {
  return parseToolsConfig(tsContent).map((tool) => tool.key);
}

module.exports = {
  parseToolsConfig,
  getToolKeys,
};
