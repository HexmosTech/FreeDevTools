const esbuild = require('esbuild');
const path = require('path');

// Ensure node_modules exists
const fs = require('fs');
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
    console.error('Error: node_modules not found. Please run "npm install" first.');
    process.exit(1);
}

// Build with code splitting enabled
// NOTE: React will be split into chunks, loaded on-demand to reduce initial JS parsing time
// This keeps bundle sizes reasonable (prevents 13MB single file)
esbuild.build({
    entryPoints: ['frontend/index.ts'],
    bundle: true,
    outdir: 'assets/js',
    format: 'esm',
    minify: true,
    platform: 'browser',
    target: 'es2022',
    splitting: true,  // Enable splitting to keep file sizes reasonable
    treeShaking: true,  // Enable tree shaking to remove unused code
    alias: {
        '@': path.resolve(__dirname, 'frontend'),
    },
    loader: {
        '.tsx': 'tsx',
        '.ts': 'ts',
        '.js': 'jsx',
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    packages: 'bundle',
    chunkNames: 'chunks/[name]-[hash]',
    // Optimize for smaller bundle sizes
    legalComments: 'none',  // Remove comments to reduce size
    sourcemap: false,  // Disable sourcemaps in production for smaller bundles
}).catch((error) => {
    console.error('Build failed:', error);
    process.exit(1);
});
