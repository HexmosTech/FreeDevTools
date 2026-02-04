const esbuild = require('esbuild');
const path = require('path');
const { execSync } = require('child_process');

// Ensure node_modules exists
const fs = require('fs');
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
    console.error('Error: node_modules not found. Please run "npm install" first.');
    process.exit(1);
}

// Generate config.ts from fdt-dev.toml before building
try {
    execSync('node scripts/generate-config.ts.js', { stdio: 'inherit', cwd: __dirname });
} catch (error) {
    console.warn('Warning: Failed to generate config.ts, continuing with existing file');
}

// Watch mode for development
esbuild.context({
    entryPoints: ['frontend/index.ts'],
    bundle: true,
    outdir: 'assets/js',
    format: 'esm',
    minify: false,  // Don't minify in dev for faster builds
    platform: 'browser',
    target: 'es2022',
    splitting: true,
    treeShaking: true,
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
    sourcemap: true,  // Enable sourcemaps in dev
}).then(ctx => {
    console.log('👀 Watching frontend files for changes...');
    return ctx.watch();
}).catch((error) => {
    console.error('Watch failed:', error);
    process.exit(1);
});

