# Convert {CATEGORY} to Worker Pool Architecture

## Usage Instructions

**To use this template:**

1. Replace all instances of `{CATEGORY}` with your category name (e.g., `emoji`, `man_pages`, `mcp`)
2. Replace `{CATEGORY_UPPER}` with uppercase version (e.g., `EMOJI`, `MAN_PAGES`, `MCP`)
3. Replace `{CATEGORY_PLURAL}` with plural form if different (e.g., `emojis`, `man-pages`, `mcps`)
4. Replace `{URL_PREFIX}` with the URL path prefix (e.g., `/freedevtools/emojis/`, `/freedevtools/man-pages/`)
5. Replace `{DB_PATH}` with database file path (e.g., `db/all_dbs/emoji-db.db`)
6. Replace `{FILE_EXTENSION}` with file extension if applicable (e.g., `.svg`, `.png`, or empty string)
7. Follow each phase sequentially, checking off items as you complete them

**Example:** To convert Emoji category:

- `{CATEGORY}` → `emoji`
- `{CATEGORY_UPPER}` → `EMOJI`
- `{CATEGORY_PLURAL}` → `emojis`
- `{URL_PREFIX}` → `/freedevtools/emojis/`
- `{DB_PATH}` → `db/all_dbs/emoji-db.db`
- `{FILE_EXTENSION}` → (empty, no extension)

---

## Overview

Convert {CATEGORY} from direct database access (`bun:sqlite`) to worker pool architecture using worker threads, matching the SVG icons implementation. This ensures consistent architecture, better performance, and scalability.

## Prerequisites

Before starting, verify:

- [ ] Reference implementation exists: `db/svg_icons/` (svg-worker-pool.ts, svg-worker.ts, svg-icons-utils.ts)
- [ ] Target category has: `db/{CATEGORY}/` directory with utils file
- [ ] Target category has: `src/pages/{CATEGORY_PLURAL}/` directory
- [ ] Database exists at: `{DB_PATH}`
- [ ] Database tables have been migrated to use hash-based primary keys (if applicable)

## ⚠️ Important: Path Resolution Fix

**CRITICAL**: Always use `findProjectRoot()` instead of `process.cwd()` in worker-pool.ts to avoid path resolution issues when running from different directories (e.g., `dev/` subdirectory). See Phase 2, Step 3 for the implementation. This prevents "Worker file not found" errors when the server runs from a subdirectory.

## Current State Analysis

### SVG Icons (Reference Implementation - DO NOT MODIFY)

- **Database Layer**: `db/svg_icons/`
- `svg-worker-pool.ts` - Worker pool manager (2 workers, round-robin)
- `svg-worker.ts` - Worker thread with SQLite queries
- `svg-icons-utils.ts` - Public API using worker pool
- `svg-icons-schema.ts` - TypeScript interfaces with `hash_name`, `url_hash`, `_json` columns

### {CATEGORY} (Current State - TO BE CONVERTED)

- **Database Layer**: `db/{CATEGORY}/`
  - `{CATEGORY}-utils.ts` - Direct DB access using `bun:sqlite` (needs conversion)
  - `{CATEGORY}-schema.ts` - May be missing hash types
  - Missing: `{CATEGORY}-worker-pool.ts`
  - Missing: `{CATEGORY}-worker.ts`

### Pages

- `src/pages/{CATEGORY_PLURAL}_pages/sitemap.xml.ts` - May use content collections (needs DB query)
- `src/pages/{CATEGORY_PLURAL}/*.astro` - May use direct DB access (needs async conversion)

---

## Implementation Plan

### Phase 1: Database Schema Updates

**File**: `db/{CATEGORY}/{CATEGORY}-schema.ts`

**Steps:**

1. **Check if database uses cluster/category table with hash_name:**

   ```bash
   sqlite3 {DB_PATH} "PRAGMA table_info(cluster);"
   # OR
   sqlite3 {DB_PATH} "PRAGMA table_info(category);"
   ```

   - If `hash_name` column exists → database is ready
   - If not → run migration script first (see `db/bench/{CATEGORY}/generate-{CATEGORY}-hashes.js`)

2. **Update TypeScript interfaces:**
   - [ ] Add `hash_name: string` to main category/cluster interface (bigint stored as string)
   - [ ] Add `url_hash: string` to item/icon interface if applicable (bigint stored as string)
   - [ ] Update `RawClusterRow` or equivalent to use `_json` column names:
- `keywords_json`, `tags_json`, `alternative_terms_json`, `why_choose_us_json`
- Add `hash_name: string`
   - [ ] Add `preview_icons_json` related interfaces if needed:
- `PreviewIcon` interface
- `ClusterWithPreviewIcons` interface
     - `RawClusterPreviewPrecomputedRow` interface

**Note:** Database columns should already match (from migration), only TypeScript types need updating.

**Reference:** See `db/svg_icons/svg-icons-schema.ts` for complete structure.

---

### Phase 2: Create Worker Pool Infrastructure

**File**: `db/{CATEGORY}/{CATEGORY}-worker-pool.ts` (NEW)

**Steps:**

1. **Copy template:**

   ```bash
   cp db/svg_icons/svg-worker-pool.ts db/{CATEGORY}/{CATEGORY}-worker-pool.ts
   ```

2. **Find and replace:**
   - [ ] `SVG_ICONS_DB` → `{CATEGORY_UPPER}_DB` (all occurrences)
   - [ ] `svg_icons` → `{CATEGORY}` (in paths)
   - [ ] `svg-icons-db.db` → `{CATEGORY}-db.db` (in getDbPath)
   - [ ] `svg-worker` → `{CATEGORY}-worker` (in worker paths)

3. **Add findProjectRoot() function (IMPORTANT - fixes path resolution issues):**

   ```typescript
   // Find project root by looking for package.json or node_modules
   function findProjectRoot(): string {
     let current = __dirname;
     while (current !== path.dirname(current)) {
       if (existsSync(path.join(current, 'package.json')) || existsSync(path.join(current, 'node_modules'))) {
         return current;
       }
       current = path.dirname(current);
     }
     // Fallback to process.cwd() if we can't find project root
     return process.cwd();
   }
   ```

4. **Update getDbPath():**

   ```typescript
   function getDbPath(): string {
     const projectRoot = findProjectRoot();
     return path.resolve(projectRoot, '{DB_PATH}');
   }
   ```

5. **Update worker path resolution in initWorkers():**

   Replace `process.cwd()` with `findProjectRoot()`:

   ```typescript
   // OLD (can fail if running from different directory):
   const projectRoot = process.cwd();
   
   // NEW (reliable path resolution):
   const projectRoot = findProjectRoot();
   ```

   This ensures the worker file is found regardless of the current working directory (e.g., when running from `dev/` subdirectory).

   **Why this matters**: If your server runs from a subdirectory (like `dev/`), `process.cwd()` will point to that subdirectory, causing the worker pool to look for files in the wrong location (e.g., `dev/dist/...` instead of `dist/...`). The `findProjectRoot()` function walks up from `__dirname` to find the actual project root.

6. **Add max listeners (prevent memory leak warnings):**

   ```typescript
   worker.setMaxListeners(100);
   ```

   Add this after creating the worker, before `worker.on('message', ...)`

6. **Verify query interface matches:**
   - [ ] Export `query` object with same methods as SVG version
   - [ ] All query methods delegate to `executeQuery()`

**Reference:** See `db/svg_icons/svg-worker-pool.ts` for complete implementation.

---

### Phase 3: Create Worker Thread

**File**: `db/{CATEGORY}/{CATEGORY}-worker.ts` (NEW)

**Steps:**

1. **Copy template:**

   ```bash
   cp db/svg_icons/svg-worker.ts db/{CATEGORY}/{CATEGORY}-worker.ts
   ```

2. **Find and replace:**
   - [ ] `SVG_ICONS_DB` → `{CATEGORY_UPPER}_DB` (all log labels)
   - [ ] Update comment: "Handles all query types for the {CATEGORY} database"

3. **Update SQL queries:**
   - [ ] Check table names match your database (may be `cluster`, `category`, `emoji`, etc.)
   - [ ] Use `keywords_json`, `tags_json`, etc. if columns exist
   - [ ] Use `hash_name` for category/cluster lookups
   - [ ] Use `url_hash` for item lookups (if applicable)
   - [ ] Include `preview_icons_json` in queries if column exists

4. **Update URL patterns:**
   - [ ] In `getIconsByCluster` or equivalent: Update URL to `{URL_PREFIX}`
   - [ ] In `getIconByCategoryAndName`: Update file extension handling (`.svg` → `{FILE_EXTENSION}`)
   - [ ] In transform mode: Update icon/url paths to `{URL_PREFIX}`

5. **Update query handlers:**
   - [ ] Parse JSON columns correctly (`keywords_json`, `tags_json`, etc.)
   - [ ] Handle `hash_name` lookups properly
   - [ ] Ensure all return types match schema interfaces

6. **Verify all query types:**
   - [ ] `getTotalIcons` / `getTotalItems`
   - [ ] `getTotalClusters` / `getTotalCategories`
   - [ ] `getIconsByCluster` / `getItemsByCategory`
   - [ ] `getClustersWithPreviewIcons` / `getCategoriesWithPreview`
   - [ ] `getClusterByName` / `getCategoryByName`
   - [ ] `getClusters` / `getCategories`
   - [ ] `getIconByUrlHash` / `getItemByUrlHash`
   - [ ] `getIconByCategoryAndName` / `getItemByCategoryAndName`

**Reference:** See `db/svg_icons/svg-worker.ts` for complete query implementations.

---

### Phase 4: Update Utils to Use Worker Pool

**File**: `db/{CATEGORY}/{CATEGORY}-utils.ts`

**Steps:**

1. **Remove direct database access:**
   - [ ] Remove `import { Database } from 'bun:sqlite'`
   - [ ] Remove `getDb()` function
   - [ ] Remove `dbInstance` variable

2. **Add worker pool import:**

   ```typescript
   import { query } from './{CATEGORY}-worker-pool';
   ```

3. **Import hash utilities:**

   ```typescript
   import { hashUrlToKey, hashNameToKey } from '../../src/lib/hash-utils';
   ```

4. **Create category-specific URL builder (if needed):**

   ```typescript
   function build{CATEGORY}Url(category: string, name: string): string {
     const segments = [category, name]
       .filter((segment) => typeof segment === 'string' && segment.length > 0)
       .map((segment) => encodeURIComponent(segment));
     return '{URL_PREFIX}' + segments.join('/');
   }
   ```

   Only needed if URL pattern differs from SVG (which uses `/` + segments).

5. **Convert all functions to async:**
   - [ ] `getTotalIcons()` → `async function getTotalIcons(): Promise<number>`
   - [ ] `getTotalClusters()` → `async function getTotalClusters(): Promise<number>`
   - [ ] `getClusters()` → `async function getClusters(): Promise<Cluster[]>`
   - [ ] `getClusterByName(name: string)` → Use `hashNameToKey()` helper:
     ```typescript
     export async function getClusterByName(
       name: string
     ): Promise<Cluster | null> {
       const hashName = hashNameToKey(name);
       return query.getClusterByName(hashName);
     }
     ```
   - [ ] `getIconsByCluster()` → `async function getIconsByCluster()`
   - [ ] `getClustersWithPreviewIcons()` → Use worker pool query
   - [ ] `getIconByCategoryAndName()` → Use `hashUrlToKey()` and `getIconByUrlHash`:
     ```typescript
     export async function getIconByCategoryAndName(
       category: string,
       iconName: string
     ): Promise<Icon | null> {
       const clusterData = await getClusterByName(category);
       if (!clusterData) return null;
       const filename = iconName.replace('{FILE_EXTENSION}', '');
       const url = build{CATEGORY}Url(clusterData.source_folder || category, filename);
       const hashKey = hashUrlToKey(url);
       return query.getIconByUrlHash(hashKey);
     }
     ```

6. **Remove all direct SQL queries:**
   - [ ] Replace all `db.prepare()` calls with `query.*()` calls
   - [ ] Remove all database connection code

7. **Update return types:**
   - [ ] Ensure all return types match SVG utils interface
   - [ ] Add `IconWithMetadata` interface if needed
   - [ ] Add `ClusterTransformed` interface if needed

**Reference:** See `db/svg_icons/svg-icons-utils.ts` for complete structure.

---

### Phase 5: Build Integration

**File**: `integrations/copy-worker.mjs`

**Steps:**

1. **Locate the workers array:**
   Find the `workers` array that contains SVG and PNG worker configs.

2. **Add new worker entry:**

   ```javascript
   {
     source: path.join(projectRoot, 'db', '{CATEGORY}', '{CATEGORY}-worker.ts'),
     dist: path.join(distDir, 'server', 'chunks', 'db', '{CATEGORY}', '{CATEGORY}-worker.js'),
     name: '{CATEGORY_UPPER}',
   },
   ```

3. **Verify:**
   - [ ] Worker entry is added to the array
   - [ ] Paths use correct category name
   - [ ] Name is uppercase version

**Reference:** See `integrations/copy-worker.mjs` for current structure.

---

### Phase 6: Update Page Files

#### 6.1: Update Sitemap

**File**: `src/pages/{CATEGORY_PLURAL}_pages/sitemap.xml.ts`

**Steps:**

1. **Replace content collection import (if exists):**

   ```typescript
   // REMOVE:
   const { getCollection } = await import('astro:content');
   const entries = await getCollection('{category}Metadata');

   // ADD:
   import { getClusters } from 'db/{CATEGORY}/{CATEGORY}-utils';
   const clusters = await getClusters();
   ```

2. **Update pagination calculation:**

   ```typescript
   const itemsPerPage = 30;
   const totalPages = Math.ceil(clusters.length / itemsPerPage);
   ```

3. **Update URL generation:**
   - [ ] Use `{URL_PREFIX}` for all URLs
   - [ ] Ensure pagination URLs match pattern

**Reference:** See `src/pages/svg_icons_pages/sitemap.xml.ts` for complete example.

#### 6.2: Update Main Pages

**Files**: `src/pages/{CATEGORY_PLURAL}/*.astro`

**Steps:**

1. **Find all function calls:**

   ```bash
   grep -n "getClusters\|getClusterByName\|getIconsByCluster\|getClustersWithPreviewIcons\|getTotalIcons\|getIconByCategoryAndName" src/pages/{CATEGORY_PLURAL}/*.astro
   ```

2. **Add `await` to all async calls:**
   - [ ] `getClusters()` → `await getClusters()`
   - [ ] `getClusterByName()` → `await getClusterByName()`
   - [ ] `getIconsByCluster()` → `await getIconsByCluster()`
   - [ ] `getClustersWithPreviewIcons()` → `await getClustersWithPreviewIcons()`
   - [ ] `getTotalIcons()` → `await getTotalIcons()`
   - [ ] `getIconByCategoryAndName()` → `await getIconByCategoryAndName()`

3. **Verify imports:**
   - [ ] All imports from `db/{CATEGORY}/{CATEGORY}-utils` are correct
   - [ ] No direct database imports remain

4. **Check for direct DB access:**
   ```bash
   grep -n "getDb()\|Database\|bun:sqlite" src/pages/{CATEGORY_PLURAL}/*.astro
   ```

   - [ ] Remove any direct database access
   - [ ] Replace with worker pool calls

**Reference:** See `src/pages/svg_icons/*.astro` for examples.

---

### Phase 7: Testing & Verification

**Checklist:**

1. **Worker Pool Initialization:**
   - [ ] Start dev server: `npm run dev` or `bun run dev`
   - [ ] Check console for: `[{CATEGORY_UPPER}_DB] Initializing worker pool with 2 workers...`
   - [ ] Verify: `[{CATEGORY_UPPER}_DB] Worker pool initialized in Xms`
   - [ ] No errors about missing worker files

2. **Query Functionality:**
   - [ ] Test main listing page: `/{URL_PREFIX}`
   - [ ] Test category page: `/{URL_PREFIX}{category}/`
   - [ ] Test item page: `/{URL_PREFIX}{category}/{item}/`
   - [ ] Check console logs for query execution times
   - [ ] Verify no SQL errors

3. **Build Process:**
   - [ ] Run build: `npm run build` or `bun run build`
   - [ ] Verify worker file compiled: `dist/server/chunks/db/{CATEGORY}/{CATEGORY}-worker.js`
   - [ ] Check build logs for: `✅ Compiled {CATEGORY_UPPER} worker.js using esbuild`

4. **Page Rendering:**
   - [ ] All pages render without errors
   - [ ] Data displays correctly
   - [ ] Pagination works
   - [ ] Sitemap generates correctly

5. **Performance:**
   - [ ] Query times are reasonable (< 100ms for simple queries)
   - [ ] No memory leaks (check worker pool logs)
   - [ ] Worker pool handles concurrent requests

---

## Category-Specific Notes

### For Icon Categories (SVG, PNG, etc.)

- Use `cluster` table name
- Use `icon` table name
- URL pattern: `/freedevtools/{category}_icons/{cluster}/{icon}/`
- File extension: `.svg` or `.png`

### For Emoji Categories

- May use `emoji` table instead of `icon`
- May use `category` instead of `cluster`
- URL pattern: `/freedevtools/emojis/{category}/`
- No file extension in URLs
- May have different schema structure

### For Other Categories

- Check actual table names in database
- Check URL patterns in existing pages
- Adapt query names to match category terminology
- Verify hash column names match database structure

---

## Common Issues & Solutions

### Issue: Worker file not found

**Error Message:**
```
Worker file not found. Checked:
  - /path/to/project/dev/dist/server/chunks/db/{CATEGORY}/{CATEGORY}-worker.js (production)
  - /path/to/project/dev/db/{CATEGORY}/{CATEGORY}-worker.ts (development)
  - /path/to/project/dist/server/chunks/{CATEGORY}-worker.ts (fallback)
```

**Root Cause:**
The worker pool uses `process.cwd()` to resolve paths, which can be wrong if the server runs from a different directory (e.g., `dev/` subdirectory). Notice the paths include `dev/` in them, indicating `process.cwd()` is pointing to the wrong directory.

**Solution:**

1. **CRITICAL FIX**: Add `findProjectRoot()` function to worker-pool.ts (see Phase 2, Step 3):

   ```typescript
   // Find project root by looking for package.json or node_modules
   function findProjectRoot(): string {
     let current = __dirname;
     while (current !== path.dirname(current)) {
       if (existsSync(path.join(current, 'package.json')) || existsSync(path.join(current, 'node_modules'))) {
         return current;
       }
       current = path.dirname(current);
     }
     // Fallback to process.cwd() if we can't find project root
     return process.cwd();
   }
   ```

2. **Update getDbPath()** to use `findProjectRoot()`:

   ```typescript
   function getDbPath(): string {
     const projectRoot = findProjectRoot();
     return path.resolve(projectRoot, '{DB_PATH}');
   }
   ```

3. **Update initWorkers()** to use `findProjectRoot()`:

   ```typescript
   // Replace this:
   const projectRoot = process.cwd();
   
   // With this:
   const projectRoot = findProjectRoot();
   ```

4. **Additional checks:**
   - Verify worker file exists: `db/{CATEGORY}/{CATEGORY}-worker.ts`
   - Verify build integration copied file to dist: `dist/server/chunks/db/{CATEGORY}/{CATEGORY}-worker.js`
   - Check the compiled worker file exists at the expected dist path
   - Ensure build was run after adding the worker files
   - Restart the server after making these changes

### Issue: SQLiteError: no such column

**Solution:**

- Verify database schema matches TypeScript types
- Check if migration script was run
- Verify column names use `_json` suffix if applicable

### Issue: Query timeout

**Solution:**

- Check if database file exists at correct path
- Verify database is not locked by another process
- Check worker pool initialization completed

### Issue: Type errors

**Solution:**

- Ensure schema types match database structure
- Verify all interfaces include required fields
- Check return types match function signatures

---

## Files Checklist

**New Files to Create:**

- [ ] `db/{CATEGORY}/{CATEGORY}-worker-pool.ts`
- [ ] `db/{CATEGORY}/{CATEGORY}-worker.ts`

**Files to Modify:**

- [ ] `db/{CATEGORY}/{CATEGORY}-utils.ts` (major refactor)
- [ ] `db/{CATEGORY}/{CATEGORY}-schema.ts` (add missing types)
- [ ] `integrations/copy-worker.mjs` (add worker copy)
- [ ] `src/pages/{CATEGORY_PLURAL}_pages/sitemap.xml.ts` (use DB queries)
- [ ] `src/pages/{CATEGORY_PLURAL}/*.astro` (add await, update imports)

**Reference Files (DO NOT MODIFY):**

- `db/svg_icons/svg-worker-pool.ts` (template)
- `db/svg_icons/svg-worker.ts` (template)
- `db/svg_icons/svg-icons-utils.ts` (template)
- `src/pages/svg_icons_pages/sitemap.xml.ts` (template)

---

## Completion Checklist

- [ ] Phase 1: Schema updated
- [ ] Phase 2: Worker pool created
- [ ] Phase 3: Worker thread created
- [ ] Phase 4: Utils refactored
- [ ] Phase 5: Build integration updated
- [ ] Phase 6: All pages updated
- [ ] Phase 7: All tests passing
- [ ] No linter errors
- [ ] Build succeeds
- [ ] Pages render correctly

---

## Next Steps After Conversion

1. Update any documentation referencing the old architecture
2. Remove any unused database connection code
3. Consider adding performance monitoring
4. Update any related scripts or tools
5. Test in production-like environment
