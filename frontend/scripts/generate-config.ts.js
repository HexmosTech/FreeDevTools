#!/usr/bin/env node
/**
 * Generate frontend/config.ts from fdt-dev.toml
 * This script reads the Meilisearch search key from the TOML config
 * and generates the TypeScript config file.
 */

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'fdt-dev.toml');
const outputPath = path.join(__dirname, '..', 'frontend', 'config.ts');

if (!fs.existsSync(configPath)) {
  console.error(`Error: Config file not found at ${configPath}`);
  process.exit(1);
}

const configContent = fs.readFileSync(configPath, 'utf8');

// Extract meili_search_key from TOML
const searchKeyMatch = configContent.match(/meili_search_key\s*=\s*"([^"]+)"/);
const searchKey = searchKeyMatch ? searchKeyMatch[1] : '1038cd79387c4c2923df4e90e8f7ac3e760ab842fed759fb9f68ae8f7a95d0f8';

const configTsContent = `// Auto-generated from fdt-dev.toml - DO NOT EDIT MANUALLY
// Run: node scripts/generate-config.ts.js to regenerate

export const MEILI_SEARCH_API_KEY = '${searchKey}';
`;

fs.writeFileSync(outputPath, configTsContent, 'utf8');
console.log(`✅ Generated ${outputPath} from ${configPath}`);

