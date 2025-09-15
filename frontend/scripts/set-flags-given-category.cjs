#!/usr/bin/env node
/*
  Adds given_category: "Flags" to all flag emoji JSON files under public/emoji_data.
  It matches folders whose names include 'flag'.

  Dry-run:
    node scripts/set-flags-given-category.cjs
  Apply:
    node scripts/set-flags-given-category.cjs --apply
*/

const fs = require('fs');
const path = require('path');

const APPLY = process.argv.includes('--apply');

function visitEmojiFolders(root, cb) {
  const entries = fs.readdirSync(root);
  for (const entry of entries) {
    const entryPath = path.join(root, entry);
    if (!fs.statSync(entryPath).isDirectory()) continue;

    // Case 1: folder is a slug folder
    const jsonPath = path.join(entryPath, `${entry}.json`);
    if (fs.existsSync(jsonPath)) {
      cb(entryPath, entry, jsonPath);
      continue;
    }

    // Case 2: folder is a category folder containing slug folders
    const subs = fs.readdirSync(entryPath);
    for (const sub of subs) {
      const subPath = path.join(entryPath, sub);
      if (!fs.statSync(subPath).isDirectory()) continue;
      const subJson = path.join(subPath, `${sub}.json`);
      if (fs.existsSync(subJson)) {
        cb(subPath, sub, subJson);
      }
    }
  }
}

function main() {
  const root = path.join(process.cwd(), 'public', 'emoji_data');
  if (!fs.existsSync(root)) {
    console.error('emoji_data not found at', root);
    process.exit(1);
  }

  const targets = [];
  visitEmojiFolders(root, (folderPath, folderName, jsonPath) => {
    if (folderName.toLowerCase().includes('flag')) {
      targets.push({ folderPath, folderName, jsonPath });
    }
  });

  if (targets.length === 0) {
    console.log('No flag emoji folders found.');
    return;
  }

  console.log(`Flag JSONs to update: ${targets.length}`);
  if (!APPLY) {
    console.log('Dry-run. Re-run with --apply to write changes.');
    return;
  }

  let updated = 0;
  for (const { jsonPath } of targets) {
    try {
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      if (data.given_category !== 'Flags') {
        data.given_category = 'Flags';
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2) + '\n');
        updated++;
      }
    } catch (e) {
      console.warn('Failed to update', jsonPath, e.message);
    }
  }

  console.log(`Updated ${updated}/${targets.length} files.`);
}

main();


