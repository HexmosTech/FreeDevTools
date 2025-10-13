const fs = require('fs');

// Load your JSON file
const data = JSON.parse(fs.readFileSync('sitemap_report_2025-10-12_19-10.json', 'utf8'));

// Filter items where Indexable is false
const filtered = data.filter(item => item.Indexable === false);

// Extract the last path segment of each URL
const lastSegments = filtered.map(item => {
  const url = new URL(item.URL);
  const segments = url.pathname.split('/').filter(Boolean); // remove empty strings
  return segments[segments.length - 1] || ''; // last segment
});

// Save to a new file or print
fs.writeFileSync('lastSegments.json', JSON.stringify(lastSegments, null, 2));

console.log(lastSegments);
