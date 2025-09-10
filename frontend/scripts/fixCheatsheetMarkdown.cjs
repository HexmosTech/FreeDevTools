#!/usr/bin/env node
/*
Usage:
  node frontend/scripts/fixCheatsheetMarkdown.cjs <inputDir> <outputDir> [model]

Environment:
  GEMINI_API_KEY   Google Generative AI API key

Notes:
  - Preserves directory structure under outputDir
  - Processes only .md files recursively
  - Instructs Gemini to return ONLY the fixed Markdown content
*/

const fs = require('fs');
const path = require('path');

const DEFAULT_MODEL = process.argv[4] || 'gemini-1.5-flash';

async function main() {
  const inputDir = process.argv[2];
  const outputDir = process.argv[3];
  const apiKey = process.env.GEMINI_API_KEY;

  if (!inputDir || !outputDir) {
    console.error('Usage: node frontend/scripts/fixCheatsheetMarkdown.cjs <inputDir> <outputDir> [model]');
    process.exit(1);
  }
  if (!apiKey) {
    console.error('Error: GEMINI_API_KEY is not set');
    process.exit(1);
  }

  const absInput = path.resolve(inputDir);
  const absOutput = path.resolve(outputDir);

  // Load SEO guidelines to embed in the prompt
  const seoPath = path.resolve(__dirname, '..', '..', 'seo.md');
  let seoGuidelines = '';
  try {
    seoGuidelines = fs.readFileSync(seoPath, 'utf8');
  } catch (e) {
    console.warn(`Warning: Could not read seo.md at ${seoPath}. Continuing without it.`);
  }

  // Collect markdown files
  console.log(`🔍 Scanning for markdown files in: ${absInput}`);
  const files = await collectMarkdownFiles(absInput);
  if (files.length === 0) {
    console.log('No .md files found.');
    return;
  }
  console.log(`📁 Found ${files.length} markdown files to process`);
  console.log(`📤 Output directory: ${absOutput}`);
  console.log(`🤖 Using model: ${DEFAULT_MODEL}`);

  await ensureDir(absOutput);

  // Simple concurrency control
  const concurrency = 4;
  let index = 0;
  let processedCount = 0;
  let errorCount = 0;
  const startTime = Date.now();
  console.log(`🚀 Starting processing with ${concurrency} concurrent workers...`);
  
  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\n✅ Processing complete!`);
  console.log(`📊 Summary: ${processedCount} files processed, ${errorCount} errors, ${duration}s total`);

  async function worker() {
    while (true) {
      const i = index++;
      if (i >= files.length) break;
      const file = files[i];
      const rel = path.relative(absInput, file);
      const outPath = path.join(absOutput, rel);
      await ensureDir(path.dirname(outPath));

      try {
        const original = fs.readFileSync(file, 'utf8');
        const fixed = await fixMarkdownWithGemini({
          apiKey,
          model: DEFAULT_MODEL,
          original,
          filePath: rel,
          seoGuidelines,
        });

        // If model returns empty, fallback to original to avoid data loss
        const output = (fixed && fixed.trim().length > 0) ? fixed : original;
        fs.writeFileSync(outPath, output, 'utf8');
        console.log(`✓ Wrote: ${outPath}`);
      } catch (err) {
        console.error(`✗ Failed: ${rel} -> ${err.message}`);
      }
    }
  }
}

async function collectMarkdownFiles(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const results = await Promise.all(entries.map(async (ent) => {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) return collectMarkdownFiles(full);
    if (ent.isFile() && ent.name.toLowerCase().endsWith('.md')) return [full];
    return [];
  }));
  return results.flat();
}

async function ensureDir(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true });
}

async function fixMarkdownWithGemini({ apiKey, model, original, filePath, seoGuidelines }) {
  const systemRules = [
    'Your task: Fix the provided Markdown file. Do all of the following precisely:',
    '- Repair broken/overlapping code blocks: ensure every opening fence ``` has a matching closing fence, preserve languages, and do not add surrounding commentary.',
    '- Preserve content meaning. Do not remove content unless it is clearly duplicated by a fence error.',
    '- Keep the file strictly in Markdown. Do not wrap the whole output in a single code fence.',
    '- FRONTMATTER IS REQUIRED at the top of every file:',
    '    - If the file already has frontmatter (YAML between --- lines), update it to include an SEO-friendly title, description, and tags based on content.',
    '    - If the file has no frontmatter, create one with fields: title, description, and tags.',
    '- Apply SEO guidelines from seo.md naturally: optimize titles, headings, descriptions, and keyword usage. Do not add HTML meta tags; only use frontmatter and Markdown structures.',
    '- IMPORTANT: Use fenced code blocks **only for actual commands, code snippets, or queries**. Do NOT wrap entire sections or the entire document in a single code block.',
    '    - Headings, section labels, and prose must remain as plain Markdown (not inside a fence).',
    '    - Comments like "# *****" should become proper Markdown headings or separators instead of fenced text.',
    '    - Use the correct language identifier (`bash`, `javascript`, etc.) only for relevant snippets.',
    '- Maintain existing relative links and formatting; do not reflow spacing unnecessarily.',
    '- Keep the output deterministic and concise: RETURN ONLY the fixed Markdown content. No explanations, no headers like "Fixed:", no extra lines before/after.',
  ].join('\n');
  
  

  const prompt = [
    `File: ${filePath}`,
    '',
    'SEO Guidelines (excerpt):',
    '---',
    seoGuidelines,
    '---',
    '',
    'Markdown to fix:',
    '---',
    original,
    '---',
    '',
    'Return ONLY the corrected Markdown file content. Do not include any commentary.'
  ].join('\n');

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const body = {
    contents: [
      {
        role: 'user',
        parts: [
          { text: systemRules },
          { text: prompt },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.2,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 32768,
      stopSequences: [],
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
    ],
  };

  const fetchImpl = (globalThis.fetch) ? globalThis.fetch : (await import('node-fetch')).default;
  const res = await fetchImpl(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${text}`);
  }
  const data = await res.json();
  const candidate = data?.candidates?.[0];
  const parts = candidate?.content?.parts;
  const text = Array.isArray(parts) ? parts.map(p => p.text || '').join('') : '';
  return sanitizeModelOutput(text);
}

function sanitizeModelOutput(text) {
  if (!text) return '';
  // Remove potential leading/trailing code fences the model might erroneously add around the whole doc
  const trimmed = text.trim();
  // If the entire output is wrapped in a single triple-backtick fence, unwrap it
  if (/^```[a-zA-Z0-9_-]*[\r\n][\s\S]*```$/.test(trimmed)) {
    return trimmed.replace(/^```[a-zA-Z0-9_-]*[\r\n]/, '').replace(/```$/, '').trimStart();
  }
  return text;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


