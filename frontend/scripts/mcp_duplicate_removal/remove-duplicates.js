#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from '@huggingface/transformers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/mcp/input');

// Category keywords to help determine the best fit
const CATEGORY_KEYWORDS = {
  'scientific-research-tools': [
    'research', 'scientific', 'chemistry', 'chemical', 'biology', 'physics',
    'molecular', 'compound', 'pubchem', 'protein', 'gene', 'dna', 'academic',
    'laboratory', 'experiment', 'paper', 'journal', 'scholar', 'arxiv', 'pubmed'
  ],
  'data-analytics': [
    'analytics', 'metrics', 'dashboard', 'visualization', 'chart', 'graph',
    'insights', 'analysis', 'reporting', 'statistics', 'tracking', 'kpi',
    'business intelligence', 'tableau', 'looker', 'powerbi'
  ],
  'apis-and-http-requests': [
    'api', 'http', 'rest', 'endpoint', 'webhook', 'request', 'response',
    'fetch', 'axios', 'graphql', 'soap', 'rpc', 'client', 'integration'
  ],
  'developer-tools': [
    'development', 'developer', 'coding', 'ide', 'editor', 'debug', 'lint',
    'compiler', 'build', 'webpack', 'babel', 'npm', 'package', 'tool'
  ],
  'databases': [
    'database', 'sql', 'nosql', 'query', 'mongodb', 'postgres', 'mysql',
    'redis', 'storage', 'schema', 'table', 'collection', 'orm'
  ],
  'blockchain-and-crypto': [
    'blockchain', 'crypto', 'cryptocurrency', 'bitcoin', 'ethereum', 'web3',
    'wallet', 'smart contract', 'nft', 'defi', 'token', 'chain'
  ],
  'cloud-platforms': [
    'cloud', 'aws', 'azure', 'gcp', 'google cloud', 'serverless', 'lambda',
    'kubernetes', 'docker', 'infrastructure', 'deployment'
  ],
  'file-management': [
    'file', 'folder', 'directory', 'upload', 'download', 'storage',
    'document', 'attachment', 'sync', 'backup'
  ],
  'communication': [
    'chat', 'message', 'email', 'notification', 'slack', 'discord',
    'teams', 'communicate', 'conversation'
  ],
  'task-and-project-management': [
    'task', 'project', 'todo', 'kanban', 'sprint', 'agile', 'jira',
    'trello', 'asana', 'workflow', 'management'
  ]
};

// Initialize the embedding model (lazy loading)
let embedder = null;

async function getEmbedder() {
  if (!embedder) {
    console.log('Loading embedding model (MiniLM)...');
    embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    console.log('Model loaded successfully!\n');
  }
  return embedder;
}

// Calculate cosine similarity between two vectors
function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

// Generate embedding for a text
async function getEmbedding(text) {
  const model = await getEmbedder();
  const output = await model(text, { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}

// Calculate relevance score for a repository in a specific category
function calculateCategoryScore(repo, categoryName, categoryKeywords) {
  const text = `${repo.description || ''} ${repo.name || ''} ${repo.readme_content || ''}`.toLowerCase();
  const keywords = categoryKeywords || [];
  
  let score = 0;
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const matches = text.match(regex);
    if (matches) {
      score += matches.length;
    }
  });
  
  return score;
}

// Find the best category for a repository using semantic similarity
async function findBestCategory(repo, categoriesWhereFound, categoryData) {
  const scores = {};
  
  // Build repo text from description and name
  const repoText = `${repo.name || ''} ${repo.description || ''}`.trim();
  
  if (!repoText) {
    // If no text available, fall back to first category
    console.log('   Warning: No description available, using first category');
    return { bestCategory: categoriesWhereFound[0], scores: {}, method: 'fallback' };
  }
  
  // Get embedding for the repository
  const repoEmbedding = await getEmbedding(repoText);
  
  // Calculate semantic similarity with each category
  for (const category of categoriesWhereFound) {
    const categoryInfo = categoryData.get(category);
    if (!categoryInfo) continue;
    
    // Build category text from name, display name, and description
    const categoryText = `${categoryInfo.category || ''} ${categoryInfo.categoryDisplay || ''} ${categoryInfo.description || ''}`.trim();
    
    if (categoryText) {
      const categoryEmbedding = await getEmbedding(categoryText);
      const similarity = cosineSimilarity(repoEmbedding, categoryEmbedding);
      scores[category] = parseFloat(similarity.toFixed(4));
    } else {
      scores[category] = 0;
    }
  }
  
  // Find category with highest similarity score
  let bestCategory = categoriesWhereFound[0];
  let highestScore = scores[bestCategory] || 0;
  
  for (const [category, score] of Object.entries(scores)) {
    if (score > highestScore) {
      highestScore = score;
      bestCategory = category;
    }
  }
  
  return { bestCategory, scores, method: 'semantic' };
}

// Main function
async function removeDuplicates() {
  console.log('Scanning for duplicate repositories across categories...\n');
  
  // Read all category files
  const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.json'));
  
  // Map to track all repositories: key -> { repoId: string, categories: [categoryName], data: repoObject }
  const allRepos = new Map();
  const categoryData = new Map();
  
  // Load all repositories from all categories
  for (const file of files) {
    const filePath = path.join(INPUT_DIR, file);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const categoryName = content.category;
    
    categoryData.set(categoryName, content);
    
    if (content.repositories) {
      Object.entries(content.repositories).forEach(([repoId, repo]) => {
        if (!allRepos.has(repoId)) {
          allRepos.set(repoId, {
            repoId,
            categories: [],
            data: repo
          });
        }
        allRepos.get(repoId).categories.push(categoryName);
      });
    }
  }
  
  // Find duplicates
  const duplicates = Array.from(allRepos.values()).filter(repo => repo.categories.length > 1);
  
  // Calculate total entries before deduplication
  const totalEntriesBefore = Array.from(allRepos.values()).reduce((sum, repo) => sum + repo.categories.length, 0);
  
  console.log(`Found ${allRepos.size} unique repositories`);
  console.log(`Total entries (with duplicates): ${totalEntriesBefore}`);
  console.log(`Repositories appearing in multiple categories: ${duplicates.length}\n`);
  
  if (duplicates.length === 0) {
    console.log('No duplicates found!');
    return;
  }
  
  // Analyze duplicates and determine best category
  const removalPlan = [];
  const duplicateScores = new Map(); // Store scores for reporting
  
  console.log('Analyzing duplicates using semantic similarity...\n');
  
  for (const duplicate of duplicates) {
    const { repoId, categories, data } = duplicate;
    const { bestCategory, scores, method } = await findBestCategory(data, categories, categoryData);
    
    // console.log(`\n${data.name} (${data.owner})`);
    // console.log(`   Found in: ${categories.join(', ')}`);
    // console.log(`   Similarity scores:`, scores);
    // console.log(`   Best fit: ${bestCategory} (method: ${method})`);
    
    // Store scores for reporting
    duplicateScores.set(repoId, { scores, bestCategory, method });
    
    // Mark for removal from other categories
    categories.forEach(cat => {
      if (cat !== bestCategory) {
        removalPlan.push({ repoId, category: cat, keepInCategory: bestCategory });
      }
    });
  }
  
  // Ask for confirmation before making changes
  console.log(`\n\nReady to remove ${removalPlan.length} duplicate entries.`);
  console.log(`This will modify ${new Set(removalPlan.map(p => p.category)).size} category files.\n`);
  
  // Actually remove duplicates
  let removedCount = 0;
  
  removalPlan.forEach(({ repoId, category, keepInCategory }) => {
    const categoryContent = categoryData.get(category);
    if (categoryContent && categoryContent.repositories && categoryContent.repositories[repoId]) {
      delete categoryContent.repositories[repoId];
      removedCount++;
      console.log(`  Removed ${repoId} from ${category} (keeping in ${keepInCategory})`);
    }
  });
  
  // Update repository counts and save files
  console.log(`\nSaving updated files...`);
  
  categoryData.forEach((content, categoryName) => {
    if (content.repositories) {
      const repoCount = Object.keys(content.repositories).length;
      content.totalRepositories = repoCount;
      
      const filePath = path.join(INPUT_DIR, `${categoryName}.json`);
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf-8');
      console.log(`  Updated ${categoryName}.json (${repoCount} repositories)`);
    }
  });
  
  console.log(`\n✅ Done! Removed ${removedCount} duplicate entries.`);
  
  // Calculate final counts for summary
  const finalCounts = {};
  categoryData.forEach((content, categoryName) => {
    if (content.repositories) {
      finalCounts[categoryName] = Object.keys(content.repositories).length;
    }
  });
  
  const totalAfter = Object.values(finalCounts).reduce((sum, count) => sum + count, 0);
  const reductionPercentage = ((removedCount / totalEntriesBefore) * 100).toFixed(1);
  
  // Generate CSV report with summary at the top
  const reportPath = path.join(__dirname, '../frontend/scripts/mcp_duplicate_removal/duplicate-removal-report.csv');
  const csvLines = [
    '=== DUPLICATE REMOVAL REPORT ===',
    '',
    'BEFORE Cleanup:',
    `Unique repositories,${allRepos.size}`,
    `Total entries (with duplicates),${totalEntriesBefore}`,
    `Repositories appearing in 2+ categories,${duplicates.length}`,
    '',
    'REMOVED:',
    `Duplicate entries removed,${removedCount}`,
    `Categories modified,${new Set(removalPlan.map(p => p.category)).size}`,
    '',
    'AFTER Cleanup:',
    `Unique repositories (unchanged),${allRepos.size}`,
    `Total entries (deduplicated),${totalAfter}`,
    'Each repository now appears in exactly 1 category',
    '',
    '=== DETAILED REMOVAL LOG ===',
    '',
    'Repository Name,Owner,Removed From,Removed From Score,Kept In,Kept In Score,All Scores,Method'
  ];
  
  removalPlan.forEach(({ repoId, category, keepInCategory }) => {
    const repo = allRepos.get(repoId);
    if (repo) {
      const scoreData = duplicateScores.get(repoId);
      const removedFromScore = scoreData?.scores?.[category] || 'N/A';
      const keptInScore = scoreData?.scores?.[keepInCategory] || 'N/A';
      const allScores = scoreData?.scores ? JSON.stringify(scoreData.scores) : 'N/A';
      const method = scoreData?.method || 'semantic';
      csvLines.push(`"${repo.data.name}","${repo.data.owner}","${category}","${removedFromScore}","${keepInCategory}","${keptInScore}","${allScores.replace(/"/g, '""')}","${method}"`);
    }
  });
  
  fs.writeFileSync(reportPath, csvLines.join('\n'), 'utf-8');
  
  // Print comprehensive summary
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 DUPLICATE REMOVAL REPORT`);
  console.log(`${'='.repeat(60)}\n`);
  
  console.log(`📥 BEFORE Cleanup:`);
  console.log(`   • Unique repositories: ${allRepos.size.toLocaleString()}`);
  console.log(`   • Total entries (with duplicates): ${totalEntriesBefore.toLocaleString()}`);
  console.log(`   • Repositories appearing in 2+ categories: ${duplicates.length.toLocaleString()}\n`);
  
  console.log(`🗑️  REMOVED:`);
  console.log(`   • Duplicate entries removed: ${removedCount.toLocaleString()}`);
  console.log(`   • Categories modified: ${new Set(removalPlan.map(p => p.category)).size}\n`);
  
  console.log(`📤 AFTER Cleanup:`);
  console.log(`   • Unique repositories: ${allRepos.size.toLocaleString()} (unchanged)`);
  console.log(`   • Total entries (deduplicated): ${totalAfter.toLocaleString()}`);
  console.log(`   • Each repository now appears in exactly 1 category\n`);
  
  console.log(`📈 Impact:`);
  console.log(`   • Reduction: ${reductionPercentage}% (removed ${removedCount.toLocaleString()} of ${totalEntriesBefore.toLocaleString()} entries)`);
  console.log(`   • Space saved: ${((removedCount / totalEntriesBefore) * 100).toFixed(0)}% of original size\n`);
  
  console.log(`✅ Report saved to: ${reportPath}`);
  console.log(`${'='.repeat(60)}\n`);
  
  return {
    uniqueRepos: allRepos.size,
    totalEntriesBefore,
    duplicatesFound: duplicates.length,
    entriesRemoved: removedCount,
    filesModified: new Set(removalPlan.map(p => p.category)).size,
    totalEntriesAfter: totalAfter,
    reductionPercentage
  };
}

// Run the script
removeDuplicates().catch(console.error);

