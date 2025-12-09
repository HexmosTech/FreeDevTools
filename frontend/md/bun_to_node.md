# Migrate from Bun to Node.js

## Overview

Replace Bun runtime with Node.js by:

1. Replacing `bun:sqlite` with `better-sqlite3` in database code
2. Updating all package.json scripts to use `node`/`npm` instead of `bun`
3. Cleaning build artifacts and reinstalling dependencies

## Files to Modify

### Database Code Changes

**`db/svg_icons/svg-worker.ts`**

- Replace `import { Database } from 'bun:sqlite'` with `import Database from 'better-sqlite3'`
- Update database initialization: `new Database(dbPath)` (note: `{ readonly: true }` option is NOT supported in better-sqlite3)
- Use `db.exec('PRAGMA ...')` instead of `db.pragma()` for setting PRAGMA values
- Update comment on line 2 to reflect better-sqlite3
- Add error handling around database initialization

**`db/banner/banner-utils.ts`**

- Replace `import { Database } from 'bun:sqlite'` with `import Database from 'better-sqlite3'`
- Update database initialization: `new Database(dbPath)` (note: `{ readonly: true }` option is NOT supported)
- Change PRAGMA calls from `db.run('PRAGMA ...')` to `db.exec('PRAGMA ...')`
- The `db.run()` method works the same way for regular SQL statements

**`db/svg_icons/svg-worker-pool.ts`**

- Update comment on line 2 to reflect better-sqlite3 instead of bun:sqlite

### Package Configuration

**`package.json`**

- Add `better-sqlite3` to dependencies
- Add `@types/better-sqlite3` to devDependencies
- Update scripts:
- `dev`: Change from `bun --max-old-space-size=16384` to `node --max-old-space-size=16384`
- `dev:light`: Change from `bun --max-old-space-size=4096` to `node --max-old-space-size=4096`
- `build`: Change from `bun run` to `node`
- `build:mcp`, `build:tldr`, `build:icons`, `build:emojis`, `build:man-pages`, `build:index`: Change from `bun` to `node`
- `serve-ssr`: Change from `bun run` to `node`
- `banner:generate`, `pagespeed*`: Change from `bun run` to `node`
- Remove `@types/bun` from devDependencies (if present)

### No Changes Needed

- `integrations/copy-worker.mjs` - No bun-specific code
- `integrations/critical-css-inlining.mjs` - No bun-specific code
- `integrations/wrap-astro.mjs` - No bun-specific code
- `src/middleware.ts` - No bun-specific code
- `astro.config.mjs` - No bun-specific code

## Execution Steps

1. Remove build artifacts: `node_modules`, `dist`, `.astro`
2. Update all files listed above
3. Run `npm install` to install dependencies including better-sqlite3
   - Note: If you encounter CUDA-related errors with `onnxruntime-node`, use: `ONNXRUNTIME_NODE_INSTALL_CUDA=skip npm install`
4. **Compile worker files for development** (required for Node.js):
   ```bash
   npx esbuild db/svg_icons/svg-worker.ts --outfile=db/svg_icons/svg-worker.js --format=esm --target=node18 --bundle=false --platform=node
   ```

   - This creates a `.js` file that the worker pool can load in development mode
   - The worker pool looks for `.js` files first, then falls back to `.ts` files
5. Start server: `npm run dev`
6. Wait 30 seconds, then test: `curl localhost:4321/freedevtools/svg_icons/`
7. If test fails, check console logs and fix issues iteratively

## Important Differences from bun:sqlite

### Database Initialization

- **bun:sqlite**: `new Database(dbPath, { readonly: true })` - supports readonly option
- **better-sqlite3**: `new Database(dbPath)` - readonly option NOT supported, use `PRAGMA query_only = ON` instead

### PRAGMA Usage

- **bun:sqlite**: Can use `db.run('PRAGMA ...')` or `db.pragma('key', 'value')`
- **better-sqlite3**: Must use `db.exec('PRAGMA key = value')` - the `pragma()` method is for reading values, not setting them

### API Compatibility

- `stmt.get()`, `stmt.all()`, and `db.run()` methods are compatible
- `db.prepare()` works the same way
- `better-sqlite3` API is synchronous and compatible with the current code structure

## Worker File Compilation

### Current State

- Worker files (`.ts`) must be compiled to JavaScript (`.js`) for Node.js to execute them
- The `copy-worker.mjs` integration only compiles workers during build (`astro:build:done` hook)
- In development, you must manually compile worker files before starting the dev server

### Manual Compilation

```bash
npx esbuild db/svg_icons/svg-worker.ts --outfile=db/svg_icons/svg-worker.js --format=esm --target=node18 --bundle=false --platform=node
```

### Future Automation (Recommended)

The `copy-worker.mjs` integration could be enhanced to also compile workers in development mode by adding an `astro:server:setup` or `astro:config:setup` hook. This would:

- Automatically compile worker files when the dev server starts
- Watch for changes and recompile on file modifications
- Eliminate the need for manual compilation

Example enhancement to `copy-worker.mjs`:

```javascript
hooks: {
  'astro:server:setup': async ({ server }) => {
    // Compile workers for development
    await compileWorkers();
  },
  'astro:build:done': async ({ dir }) => {
    // Existing build-time compilation
  }
}
```

This would ensure worker files are always available in both development and production environments.
