#!/usr/bin/env node
/*
  Categorize emoji folders under public/emoji_data by folder name heuristics.
  It does not depend on JSON metadata, only names.

  Usage:
    node scripts/categorize-by-name.cjs          # dry-run
    node scripts/categorize-by-name.cjs --apply  # perform moves
*/

const fs = require('fs');
const path = require('path');

const APPLY = process.argv.includes('--apply');

const CATEGORY_SLUGS = {
  SMILEYS: 'smileys-emotion',
  PEOPLE: 'people-body',
  ANIMALS: 'animals-nature',
  FOOD: 'food-drink',
  TRAVEL: 'travel-places',
  ACTIVITIES: 'activities',
  OBJECTS: 'objects',
  SYMBOLS: 'symbols',
  FLAGS: 'flags',
  OTHER: 'other'
};

function detectCategory(folder) {
  const name = folder.toLowerCase();

  // Flags
  if (name.includes('flag')) return CATEGORY_SLUGS.FLAGS;

  // People & Body
  if (name.startsWith('man') || name.startsWith('men-') || name.startsWith('woman') || name.startsWith('women-') || name.startsWith('person') || name.includes('skin-tone') || name.includes('hand') || name.includes('face') || name.includes('people')) {
    return CATEGORY_SLUGS.PEOPLE;
  }

  // Smileys & Emotion
  if (name.includes('smile') || name.includes('laugh') || name.includes('grin') || name.includes('cry') || name.includes('sob') || name.includes('angry') || name.includes('sad') || name.includes('yawning') || name.includes('worried') || name.includes('mouth') || name.includes('kiss') || name.includes('heart-eyes')) {
    return CATEGORY_SLUGS.SMILEYS;
  }

  // Animals & Nature
  if (name.includes('cat') || name.includes('dog') || name.includes('zebra') || name.includes('worm') || name.includes('zombie') || name.includes('vampire') || name.includes('plant') || name.includes('tree') || name.includes('flower') || name.includes('nature') || name.includes('bug')) {
    return CATEGORY_SLUGS.ANIMALS;
  }

  // Food & Drink
  if (name.includes('food') || name.includes('drink') || name.includes('cake') || name.includes('apple') || name.includes('pizza') || name.includes('beer') || name.includes('tea') || name.includes('coffee')) {
    return CATEGORY_SLUGS.FOOD;
  }

  // Travel & Places
  if (name.includes('car') || name.includes('bus') || name.includes('train') || name.includes('plane') || name.includes('travel') || name.includes('map') || name.includes('world-map') || name.includes('building') || name.includes('house')) {
    return CATEGORY_SLUGS.TRAVEL;
  }

  // Activities
  if (name.includes('swimming') || name.includes('surfing') || name.includes('wrestling') || name.includes('sports') || name.includes('game') || name.includes('ball')) {
    return CATEGORY_SLUGS.ACTIVITIES;
  }

  // Symbols
  if (name.includes('heart') || name.includes('symbol') || name.includes('yin-yang') || name.includes('x-ray')) {
    return CATEGORY_SLUGS.SYMBOLS;
  }

  // Objects
  if (name.includes('wrench') || name.includes('present') || name.includes('gift') || name.includes('yo-yo') || name.includes('wood') || name.includes('sandal') || name.includes('hat') || name.includes('clothes')) {
    return CATEGORY_SLUGS.OBJECTS;
  }

  return CATEGORY_SLUGS.OTHER;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function main() {
  const root = path.join(process.cwd(), 'public', 'emoji_data');
  if (!fs.existsSync(root)) {
    console.error('emoji_data directory not found at', root);
    process.exit(1);
  }

  const entries = fs.readdirSync(root);
  const moves = [];
  for (const entry of entries) {
    const src = path.join(root, entry);
    if (!fs.existsSync(src) || !fs.statSync(src).isDirectory()) continue;

    // Skip if already categorized (category/slug/json exists)
    const parent = path.dirname(src);
    const parentName = path.basename(parent);
    if (parentName !== 'emoji_data') {
      continue; // already under a category like people-body/<slug>
    }

    // Only consider as emoji folder if it contains a JSON matching folder name
    if (!fs.existsSync(path.join(src, `${entry}.json`))) continue;

    const category = detectCategory(entry);
    const dest = path.join(root, category, entry);
    if (path.dirname(src) === path.dirname(dest)) continue;
    moves.push({ from: src, to: dest, category });
  }

  if (moves.length === 0) {
    console.log('No folders to move.');
    return;
  }

  console.log(`Planned moves: ${moves.length}`);
  const summary = moves.reduce((acc, m) => { acc[m.category] = (acc[m.category] || 0) + 1; return acc; }, {});
  Object.keys(summary).sort().forEach(k => console.log(`  ${k}: ${summary[k]}`));

  if (!APPLY) {
    console.log('\nDry-run. Re-run with --apply to move.');
    return;
  }

  let moved = 0;
  for (const { from, to } of moves) {
    ensureDir(path.dirname(to));
    if (fs.existsSync(to)) {
      console.warn('Destination exists, skipping:', to);
      continue;
    }
    try {
      fs.renameSync(from, to);
      moved++;
    } catch (e) {
      console.warn('Failed to move', from, '->', to, e.message);
    }
  }
  console.log(`\nMoved ${moved}/${moves.length} folders.`);
}

main();


