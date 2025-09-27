#!/usr/bin/env node

/*
Usage:
  node enhanceClusters.cjs input.json output.json [model]

Environment:
  GEMINI_API_KEY   Google Generative AI API key (single key)
  GEMINI_API_KEYS  Comma-separated list of API keys for load balancing
*/


const fs = require('fs');

const DEFAULT_MODEL = process.argv[4] || 'gemini-2.5-flash-lite';
const BATCH_SIZE = 1;               // how many clusters to send in one request
const FILE_BATCH_SIZE = 25;         // how many filenames per request
const RATE_LIMIT_DELAY = 5000;      // 1 request every 5s
const MAX_RETRIES = 3;

// Get API keys
let apiKeys = [];
if (process.env.GEMINI_API_KEYS) {
  apiKeys = process.env.GEMINI_API_KEYS.split(',').map(k => k.trim()).filter(Boolean);
} else if (process.env.GEMINI_API_KEY) {
  apiKeys = [process.env.GEMINI_API_KEY];
}

// Ensure all filenames are objects with at least { fileName, enhanced }
function normalizeFileNames(arr) {
  return arr.map(fn =>
    typeof fn === 'string'
      ? { fileName: fn, enhanced: false }
      : { ...fn, enhanced: !!fn.enhanced }
  );
}

async function main() {
  const inputFile = process.argv[2];
  const outputFile = process.argv[3];
  if (!inputFile || !outputFile) {
    console.error('Usage: node enhanceClusters.cjs input.json output.json [model]');
    process.exit(1);
  }

  // Load & normalize input JSON
  const raw = fs.readFileSync(inputFile, 'utf8');
  const data = JSON.parse(raw);
  const clusters = data.clusters;
  const clusterKeys = Object.keys(clusters);
  for (const k of clusterKeys) {
    clusters[k].fileNames = normalizeFileNames(clusters[k].fileNames);
  }

  // Load existing output if available & merge
  if (fs.existsSync(outputFile)) {
    try {
      const existingRaw = fs.readFileSync(outputFile, 'utf8');
      const existingData = JSON.parse(existingRaw);
      const existingClusters = existingData.clusters || {};
      for (const k of Object.keys(existingClusters)) {
        if (clusters[k]) {
          const existingByName = Object.fromEntries(
            normalizeFileNames(existingClusters[k].fileNames).map(f => [f.fileName, f])
          );
          clusters[k].fileNames = clusters[k].fileNames.map(f =>
            existingByName[f.fileName]
              ? { ...existingByName[f.fileName], enhanced: !!existingByName[f.fileName].enhanced }
              : f
          );
        }
      }
    } catch (err) {
      console.warn('⚠️ Failed to read existing output. Ignoring.');
    }
  }

  // Filter clusters to only those with unprocessed filenames
  const unprocessedKeys = clusterKeys.filter(k =>
    clusters[k].fileNames.some(f => !f.enhanced)
  );

  // Add tracking
  let completedCount = clusterKeys.length - unprocessedKeys.length;
  const totalClusters = clusterKeys.length;

  console.log(`📊 Total clusters: ${clusterKeys.length}`);
  console.log(`📊 Clusters to process: ${unprocessedKeys.length}`);
  console.log(`🔑 Using ${apiKeys.length} API key(s)`);
  console.log(`⚡ Model: ${DEFAULT_MODEL}`);
  console.log(`📦 Cluster batch size: ${BATCH_SIZE}, File batch size: ${FILE_BATCH_SIZE}`);

  for (let i = 0; i < unprocessedKeys.length; i += BATCH_SIZE) {
    const batchKeys = unprocessedKeys.slice(i, i + BATCH_SIZE);

    for (const key of batchKeys) {
      const cluster = clusters[key];
      // Always select only un-enhanced files
      const fileChunks = chunkArray(
        cluster.fileNames.filter(f => !f.enhanced),
        FILE_BATCH_SIZE
      );

      for (let idx = 0; idx < fileChunks.length; idx++) {
        console.log(`🚀 Processing cluster ${key} (${idx + 1}/${fileChunks.length} chunks)...`);
        const apiKey = apiKeys[(i + idx) % apiKeys.length];
        let transformed;
        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
          try {
            transformed = await enhanceBatch([{ key, ...cluster, fileNames: fileChunks[idx] }], apiKey);
            break;
          } catch (err) {
            console.error(`❌ Chunk failed (attempt ${attempt}):`, err.message);
            if (attempt < MAX_RETRIES) {
              console.log(`⏱ Retrying after delay...`);
              await new Promise(r => setTimeout(r, RATE_LIMIT_DELAY * attempt));
            } else {
              throw err;
            }
          }
        }

        // Carefully merge result objects by filename
        for (const c of transformed) {
          for (const f of c.fileNames) {
            const idx2 = cluster.fileNames.findIndex(x => x.fileName === f.fileName);
            if (idx2 !== -1) {
              cluster.fileNames[idx2] = { ...f, enhanced: true };
            }
          }
        }

        // Write progress after each chunk
        fs.writeFileSync(outputFile, JSON.stringify({ clusters }, null, 2));

        // Progress percentage
        const doneClusters = clusterKeys.filter(k =>
          clusters[k].fileNames.every(f => f.enhanced)
        ).length;
        const percent = ((doneClusters / clusterKeys.length) * 100).toFixed(2);

        console.log(`💾 Progress saved to ${outputFile} | ${doneClusters}/${clusterKeys.length} clusters complete (${percent}%)`);
        // Report completed clusters for this cluster
        if (cluster.fileNames.every(f => f.enhanced)) {
          completedCount++;
          const percent2 = ((completedCount / totalClusters) * 100).toFixed(2);
          console.log(`✅ Cluster ${key} done. Progress: ${completedCount}/${totalClusters} (${percent2}%)`);
        }

        if (idx + 1 < fileChunks.length) {
          await new Promise(r => setTimeout(r, RATE_LIMIT_DELAY));
        }
      }
    }
  }

  console.log('✅ All clusters processed!');
}

// Helper to chunk an array
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// Model batch enhancer
async function enhanceBatch(batchClusters, apiKey) {
  const prompt = [
    'You are a content generation assistant targeting SEO optimization. Transform each cluster’s fileNames array into objects with detailed metadata suitable for SEO.',
    'For each fileName, create the following fields:',
    '- fileName: the original file name',
    '- description: a concise but meaningful description (decent length, human-readable)',
    '- usecases: write 1–2 full sentences describing possible ways this file can be used',
    '- synonyms: alternative names or phrases it may be known as',
    '- tags: relevant keywords for SEO',
    '- industry: write 1–2 full sentences about the domains, industries, or contexts where this file is relevant',
    '- emotional_cues: write 1–2 full sentences describing semantic or emotional aspects that may appeal to users',
    '',
    'Return ONLY valid JSON, structured as an array of clusters with the same keys as input. Example output for one cluster:',
    '[',
    '  {',
    '    "key": "cluster1",',
    '    "fileNames": [',
    '      {',
    '        "fileName": "a.svg",',
    '        "description": "A sample description of a.svg",',
    '        "usecases": "This file can be used for website icons or app design.",',
    '        "synonyms": ["alt name1", "alt name2"],',
    '        "tags": ["tag1", "tag2"],',
    '        "industry": "Relevant in tech and design industries for UI/UX purposes.",',
    '        "emotional_cues": "Evokes a modern and playful feeling suitable for creative projects."',
    '      }',
    '    ]',
    '  }',
    ']',
    '',
    'Clusters to transform:',
    JSON.stringify(batchClusters, null, 2),
    '',
    'IMPORTANT: Output must be strict JSON only, no explanations, no commentary, no extra text, and follow the same cluster keys as input.'
  ].join('\n\n');

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(DEFAULT_MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const body = {
    contents: [
      {
        role: 'user',
        parts: [{ text: prompt }]
      }
    ],
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 8192
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' }
    ]
  };

  const fetchImpl = globalThis.fetch || (await import('node-fetch')).default;
  const res = await fetchImpl(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  const candidate = data?.candidates?.[0];
  let text = candidate?.content?.parts?.map(p => p.text || '').join('');

  // Clean formatting
  text = text
  .replace(/^```[a-zA-Z]*\s*/i, '')  // remove starting ``` and optional language
  .replace(/```$/i, '')               // remove ending ```
  .trim();                             // trim whitespace


  try {
    return JSON.parse(text);
  } catch (err) {
    console.error('❌ Failed to parse model output as JSON. Raw response (before cleaning):');
    console.error(candidate?.content?.parts?.map(p => p.text || '').join(''));
    console.error('❌ Cleaned response (attempting to parse):');
    console.error(text);
    throw err;
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
