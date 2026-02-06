const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Load .env manually to inject variables
const envPath = path.resolve(__dirname, '.env');
let envVars = {};
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            envVars[`process.env.${key.trim()}`] = JSON.stringify(value.trim().replace(/"/g, ''));
        }
    });
}

const watch = process.argv.includes('--watch');
const production = process.argv.includes('--production');

async function main() {
    const ctx = await esbuild.context({
        entryPoints: ['src/extension.ts'],
        bundle: true,
        format: 'cjs',
        minify: production,
        sourcemap: !production,
        sourcesContent: false,
        platform: 'node',
        outfile: 'out/extension.js',
        external: ['vscode'],
        logLevel: 'silent',
        define: envVars, // Inject .env variables
        plugins: [
            /* add any plugins if needed */
        ],
    });

    if (watch) {
        await ctx.watch();
    } else {
        await ctx.rebuild();
        await ctx.dispose();
    }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
