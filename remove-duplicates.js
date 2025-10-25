#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, 'frontend/public/mcp/input');

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

// Find the best category for a repository
function findBestCategory(repo, categoriesWhereFound) {
  const scores = {};
  
  categoriesWhereFound.forEach(category => {
    const keywords = CATEGORY_KEYWORDS[category] || [];
    scores[category] = calculateCategoryScore(repo, category, keywords);
  });
  
  // Find category with highest score
  let bestCategory = categoriesWhereFound[0];
  let highestScore = scores[bestCategory];
  
  for (const [category, score] of Object.entries(scores)) {
    if (score > highestScore) {
      highestScore = score;
      bestCategory = category;
    }
  }
  
  // If all scores are 0, keep the first category
  return { bestCategory, scores };
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
  
  console.log(`Found ${allRepos.size} total repositories`);
  console.log(`Found ${duplicates.length} duplicates across multiple categories\n`);
  
  if (duplicates.length === 0) {
    console.log('No duplicates found!');
    return;
  }
  
  // Analyze duplicates and determine best category
  const removalPlan = [];
  
  duplicates.forEach(duplicate => {
    const { repoId, categories, data } = duplicate;
    const { bestCategory, scores } = findBestCategory(data, categories);
    
    console.log(`\n${data.name} (${data.owner})`);
    console.log(`   Found in: ${categories.join(', ')}`);
    console.log(`   Scores:`, scores);
    console.log(`   Best fit: ${bestCategory}`);
    
    // Mark for removal from other categories
    categories.forEach(cat => {
      if (cat !== bestCategory) {
        removalPlan.push({ repoId, category: cat, keepInCategory: bestCategory });
      }
    });
  });
  
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
  
  console.log(`\nDone! Removed ${removedCount} duplicate entries.`);
  console.log(`\nSummary:`);
  console.log(`   - Total repositories scanned: ${allRepos.size}`);
  console.log(`   - Duplicates found: ${duplicates.length}`);
  console.log(`   - Entries removed: ${removedCount}`);
  console.log(`   - Files modified: ${new Set(removalPlan.map(p => p.category)).size}`);
}

// Run the script
removeDuplicates().catch(console.error);

