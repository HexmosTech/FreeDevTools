#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

function log(message, color = 'white') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, message) {
  log(`\n🔧 ${step}`, 'cyan');
  log(message, 'white');
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

// Get the project root directory (frontend folder)
const projectRoot = path.resolve(__dirname, '../..');
const pagesDir = path.join(projectRoot, 'src', 'pages');

function excludeUnchangedSections() {
  logStep('Excluding unchanged sections from build', 'Building only MCP section...');

  const changedSections = ['mcp']; // Only build MCP
  logInfo(`Building strategy: ${changedSections.join(' ')}`);

  logInfo('🎯 Selective build mode - MCP only');

  // Get all directories in pages folder
  const dirs = fs.readdirSync(pagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const dir of dirs) {
    const dirPath = path.join(pagesDir, dir);
    const dirName = dir;

    // Only include MCP, exclude everything else (including already excluded directories)
    if (changedSections.includes(dirName)) {
      logSuccess(`Including: ${dirName}`);
    } else {
      const excludedDirName = `_${dirName}`;
      const excludedDirPath = path.join(pagesDir, excludedDirName);

      try {
        fs.renameSync(dirPath, excludedDirPath);
        logWarning(`Excluding: ${dirName} -> ${excludedDirName}`);
      } catch (error) {
        logError(`Failed to exclude ${dirName}: ${error.message}`);
      }
    }
  }
}

function restoreOriginalStructure() {
  logStep('Restoring original folder structure', 'Moving excluded directories back...');

  const dirs = fs.readdirSync(pagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('_'))
    .map(dirent => dirent.name);

  for (const dir of dirs) {
    const originalName = dir.substring(1); // Remove the underscore
    const currentPath = path.join(pagesDir, dir);
    const originalPath = path.join(pagesDir, originalName);

    try {
      fs.renameSync(currentPath, originalPath);
      logSuccess(`Restored ${dir} to ${originalName}`);
    } catch (error) {
      logError(`Failed to restore ${dir}: ${error.message}`);
    }
  }
}

function installDependencies() {
  logStep('Installing dependencies', 'Running npm install...');

  try {
    execSync('npm install', {
      cwd: projectRoot,
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_OPTIONS: '--max-old-space-size=16384', // 14GB for 16GB system
        UV_THREADPOOL_SIZE: '64' // 4x cores for I/O operations
      }
    });
    logSuccess('Dependencies installed successfully');
  } catch (error) {
    logError(`Failed to install dependencies: ${error.message}`);
    throw error;
  }
}

function buildProject() {
  logStep('Building project', 'Running Astro build for MCP section only...');

  try {
    execSync('npx astro build', {
      cwd: projectRoot,
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_OPTIONS: '--max-old-space-size=16384', // 14GB for 16GB system
        UV_THREADPOOL_SIZE: '64', // 4x cores for I/O operations
        NODE_OPTIONS_EXTRA: '--experimental-loader' // Enable experimental features for better performance
      }
    });
    logSuccess('Build completed successfully');
  } catch (error) {
    logError(`Build failed: ${error.message}`);
    throw error;
  }
}

function showBuildInfo() {
  log('\n📦 MCP Build Script', 'magenta');
  log('==================', 'magenta');
  log('This script will build only the MCP section by excluding all other page directories.', 'white');
  log('The excluded directories will be temporarily renamed with an underscore prefix.', 'white');
  log('After the build, the original structure will be restored.\n', 'white');
}

async function main() {
  try {
    showBuildInfo();

    // Check if we're in the right directory
    if (!fs.existsSync(pagesDir)) {
      logError(`Pages directory not found: ${pagesDir}`);
      process.exit(1);
    }

    // Step 1: Exclude unchanged sections
    excludeUnchangedSections();


    // Step 3: Build project
    buildProject();

    logSuccess('\n🎉 MCP build completed successfully!');
    logInfo('The build output is in the dist/ directory');

  } catch (error) {
    logError(`\n💥 Build failed: ${error.message}`);
    process.exit(1);
  } finally {
    // Always restore the original structure, even if build fails
    try {
      restoreOriginalStructure();
    } catch (restoreError) {
      logError(`Failed to restore original structure: ${restoreError.message}`);
    }
  }
}

// Handle cleanup on process termination
process.on('SIGINT', () => {
  logWarning('\n⚠️  Build interrupted. Restoring original structure...');
  try {
    restoreOriginalStructure();
  } catch (error) {
    logError(`Failed to restore: ${error.message}`);
  }
  process.exit(1);
});

process.on('SIGTERM', () => {
  logWarning('\n⚠️  Build terminated. Restoring original structure...');
  try {
    restoreOriginalStructure();
  } catch (error) {
    logError(`Failed to restore: ${error.message}`);
  }
  process.exit(1);
});

main();
