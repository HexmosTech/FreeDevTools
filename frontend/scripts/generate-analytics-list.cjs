const fs = require('fs');
const path = require('path');

// Read JSON files from the public analytics output directory
const analyticsDir = path.join(__dirname, '..', 'public', 'analytics', 'output');
const publicDir = path.join(__dirname, '..', 'public');

try {
  const files = fs.readdirSync(analyticsDir);

  const jsonFiles = files
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      filename: file,
      url: file
        .replace(/_desktop_\d{8}_\d{6}\.json$/, '')
        .replace(/_/g, '/')
        .replace('freedevtools', 'https://hexmos.com/freedevtools'),
      timestamp: file.match(/_(\d{8}_\d{6})\.json$/)?.[1] || 'unknown'
    }))
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp));

  // Write to public directory
  const outputPath = path.join(publicDir, 'analytics-files.json');
  fs.writeFileSync(outputPath, JSON.stringify(jsonFiles, null, 2));

  console.log(`✅ Generated analytics-files.json with ${jsonFiles.length} files`);
  console.log(`📁 Output: ${outputPath}`);
} catch (error) {
  console.error('❌ Error generating analytics list:', error.message);
  process.exit(1);
}