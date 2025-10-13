const fs = require('fs');

// Load the JSON list of strings
const strings = JSON.parse(fs.readFileSync('lastSegments.json', 'utf8'));

// Convert to dictionary with value { generated: false }
const dict = {};
strings.forEach(str => {
  dict[str] = { generated: false };
});

// Save to a new JSON file
fs.writeFileSync('dict.json', JSON.stringify(dict, null, 2));

console.log(`Saved ${strings.length} keys to dict.json`);
