now we have the @svg_icons @svg_icons_pages @svg_icons 

Likewise we need to convert @png_icons @png_icons_pages @png_icons  

Write detailed spec plan etc
Becuse i need to reuse that plan for other categories aswell.

Basicall the old system is using direct db query using single connection or something

We need to create workers for each category svg will have 2 workers, png will have 2 workers so on..

then anything to be modified in integrations folder ? check that aswell 

db/svg_icons
src/pages/svg_icons

check sitemap of target converstion category aswell 

all queries must be optimized to use hash of category table or hash_url of icon table or similar in other category

Have offset for paginated queries for example look at svg_icons 



# Convert PNG Icons to Worker Pool Architecture

## Overview

Convert PNG icons from direct database access (`bun:sqlite`) to worker pool architecture using worker threads, matching the SVG icons implementation. This ensures consistent architecture, better performance, and scalability.

## Current State Analysis

### SVG Icons (Reference Implementation)

- **Database Layer**: `db/svg_icons/`
- `svg-worker-pool.ts` - Worker pool manager (2 workers, round-robin)
- `svg-worker.ts` - Worker thread with SQLite queries
- `svg-icons-utils.ts` - Public API using worker pool
- `svg-icons-schema.ts` - TypeScript interfaces with `hash_name`, `url_hash`, `_json` columns

### PNG Icons (Current State)

- **Database Layer**: `db/png_icons/`
- `png-icons-utils.ts` - Direct DB access using `bun:sqlite` (needs conversion)
- `png-icons-schema.ts` - Missing `hash_name`, `url_hash`, `preview_icons_json` types
- Missing: `png-worker-pool.ts`
- Missing: `png-worker.ts`

### Pages

- `src/pages/png_icons_pages/sitemap.xml.ts` - Uses content collections (needs DB query)
- `src/pages/svg_icons_pages/sitemap.xml.ts` - Uses `getClusters()` from database

## Implementation Plan

### Phase 1: Database Schema Updates

**File**: `db/png_icons/png-icons-schema.ts`

1. Add `hash_name: string` to `Cluster` interface (bigint stored as string)
2. Add `url_hash: string` to `Icon` interface (bigint stored as string)
3. Update `RawClusterRow` to use `_json` column names:

- `keywords_json`, `tags_json`, `alternative_terms_json`, `why_choose_us_json`
- Add `hash_name: string`

4. Add `preview_icons_json` related interfaces:

- `PreviewIcon` interface
- `ClusterWithPreviewIcons` interface
- `RawClusterPreviewPrecomputedRow` interface (if needed)

**Note**: Database columns already match (from previous migration), only TypeScript types need updating.

### Phase 2: Create Worker Pool Infrastructure

**File**: `db/png_icons/png-worker-pool.ts` (NEW)

1. Copy structure from `db/svg_icons/svg-worker-pool.ts`
2. Replace all `SVG_ICONS_DB` references with `PNG_ICONS_DB`
3. Update `getDbPath()` to return `db/all_dbs/png-icons-db.db`
4. Update worker path resolution:

- Source: `db/png_icons/png-worker`
- Dist: `dist/server/chunks/db/png_icons/png-worker`

5. Export `query` object with same interface as SVG version

**File**: `db/png_icons/png-worker.ts` (NEW)

1. Copy structure from `db/svg_icons/svg-worker.ts`
2. Replace all `SVG_ICONS_DB` log labels with `PNG_ICONS_DB`
3. Update database path in `workerData`
4. Update SQL queries to match PNG table structure:

- Use `keywords_json`, `tags_json`, etc. (already in DB)
- Use `hash_name` for cluster lookups
- Use `url_hash` for icon lookups
- Include `preview_icons_json` in cluster queries

5. Update query handlers to parse JSON columns correctly
6. Ensure `getIconByUrlHash` uses correct URL pattern (`/freedevtools/png_icons/`)

### Phase 3: Update Utils to Use Worker Pool

**File**: `db/png_icons/png-icons-utils.ts`

1. Remove direct `Database` import and `getDb()` function
2. Import `query` from `./png-worker-pool` instead
3. Convert all functions to async (matching SVG pattern):

- `getTotalIcons()` → `async function getTotalIcons(): Promise<number>`
- `getTotalClusters()` → `async function getTotalClusters(): Promise<number>`
- `getClusters()` → `async function getClusters(): Promise<Cluster[]>`
- `getClusterByName(name: string)` → Use `hashNameToKey()` helper
- `getIconsByCluster()` → `async function getIconsByCluster()`
- `getClustersWithPreviewIcons()` → Use worker pool query
- `getIconByCategoryAndName()` → Use `hashUrlToKey()` and `getIconByUrlHash`

4. Import hash utilities: `hashUrlToKey`, `hashNameToKey` from `../../src/lib/hash-utils`
5. Remove all direct SQL queries - delegate to worker pool
6. Update return types to match SVG utils interface

### Phase 4: Build Integration

**File**: `integrations/copy-worker.mjs`

1. Add PNG worker file copying alongside SVG worker
2. Update `astro:build:done` hook to copy both:

- `db/svg_icons/svg-worker.ts` → `dist/server/chunks/db/svg_icons/svg-worker.js`
- `db/png_icons/png-worker.ts` → `dist/server/chunks/db/png_icons/png-worker.js`

3. Use same esbuild compilation approach for both

### Phase 5: Update Page Files

**File**: `src/pages/png_icons_pages/sitemap.xml.ts`

1. Replace content collection import with database query
2. Import `getClusters` from `db/png_icons/png-icons-utils`
3. Use `await getClusters()` instead of `getCollection('pngIconsMetadata')`
4. Calculate pagination from cluster count (matching SVG pattern)

**Files**: `src/pages/png_icons/*.astro`

1. Verify all pages use async utils functions correctly
2. Update any direct DB access to use worker pool
3. Ensure `getClusterByName` uses hashed lookups

### Phase 6: Testing & Verification

1. Verify worker pool initializes correctly
2. Test all query types work through worker pool
3. Verify build process compiles worker files
4. Check page rendering with new architecture
5. Verify sitemap generation works

## Reusability Notes

This plan can be adapted for other icon categories by:

1. Replacing `png` with category name (e.g., `jpg`, `webp`)
2. Updating database paths and table names
3. Adjusting URL patterns in hash functions
4. Following same worker pool pattern

## Key Differences from SVG

- PNG uses `.png` extension in URLs (vs `.svg`)
- PNG database path: `db/all_dbs/png-icons-db.db`
- PNG URL prefix: `/freedevtools/png_icons/`
- All other patterns match SVG implementation

## Files to Create/Modify

**New Files:**

- `db/png_icons/png-worker-pool.ts`
- `db/png_icons/png-worker.ts`

**Modified Files:**

- `db/png_icons/png-icons-utils.ts` (major refactor)
- `db/png_icons/png-icons-schema.ts` (add missing types)
- `integrations/copy-worker.mjs` (add PNG worker copy)
- `src/pages/png_icons_pages/sitemap.xml.ts` (use DB queries)

**Reference Files:**

- `db/svg_icons/svg-worker-pool.ts` (template)
- `db/svg_icons/svg-worker.ts` (template)
- `db/svg_icons/svg-icons-utils.ts` (template)
- `src/pages/svg_icons_pages/sitemap.xml.ts` (template)