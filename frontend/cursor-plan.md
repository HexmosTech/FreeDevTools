# Convert SVG Icons Database to Async node-sqlite3

## Overview

Convert all SVG icons database operations from synchronous `better-sqlite3` to asynchronous `node-sqlite3` to enable concurrent request handling and prevent event loop blocking.

## Files to Modify

### 1. `db/svg_icons/svg-icons-utils.ts`

- Replace `import Database from 'better-sqlite3'` with `import sqlite3 from 'sqlite3'`
- Convert `getDb()` to async function returning a Promise that resolves to a Database instance
- Update database initialization to use `sqlite3.Database()` with proper mode flags (`sqlite3.OPEN_READONLY`)
- Convert all pragma statements to use async `db.run()` with callbacks or Promises
- Convert all query functions to async:
- `getClusters()` → `async getClusters(): Promise<Cluster[]>`
- `getTotalIcons()` → `async getTotalIcons(): Promise<number>`
- `getIconsByCluster()` → `async getIconsByCluster(cluster: string): Promise<Icon[]>`
- `getIconsByClusterLimit()` → `async getIconsByClusterLimit(cluster: string, limit: number): Promise<Icon[]>`
- `getClustersWithPreviewIcons()` → `async getClustersWithPreviewIcons(...): Promise<ClusterWithPreviewIcons[]>`
- `getClusterByName()` → `async getClusterByName(name: string): Promise<Cluster | null>`
- `getIconByCategoryAndName()` → `async getIconByCategoryAndName(...): Promise<Icon | null>`
- Use `db.all()` and `db.get()` with Promise wrappers for queries
- Maintain connection reuse pattern with singleton instance

### 2. `src/pages/svg_icons/index.astro`

- Add `await` to all database function calls:
- `await getClusters()`
- `await getClustersWithPreviewIcons(...)`
- `await getTotalIcons()`

### 3. `src/pages/svg_icons/[category].astro`

- Add `await` to all database function calls:
- `await getClusters()`
- `await getClusterByName(...)`
- `await getIconsByCluster(...)`
- `await getClustersWithPreviewIcons(...)`
- `await getTotalIcons()`
- Update the `getCategoryIcons()` async function to properly await `getIconsByCluster()`

### 4. `src/pages/svg_icons/[category]/[icon].astro`

- Add `await` to database function call:
- `await getIconByCategoryAndName(...)`

### 5. `src/pages/svg_icons_pages/sitemap.xml.ts`

- Add `await` to database function call:
- `await getClusters()`

## Implementation Details

### Database Connection Pattern

- Use `sqlite3.Database()` constructor with `sqlite3.OPEN_READONLY` mode
- Wrap database operations in Promises for easier async/await usage
- Apply pragmas using `db.run()` with Promise wrapper
- Maintain singleton pattern for connection reuse

### Query Pattern

- Use `db.all()` for multiple rows with Promise wrapper
- Use `db.get()` for single row with Promise wrapper
- Handle JSON parsing in the same way (no changes needed)

### Pragma Configuration

- Convert pragma calls to async using `db.run()`:
- `journal_mode = WAL` (for concurrent reads)
- `synchronous = NORMAL`
- `mmap_size = 1073741824`
- `temp_store = MEMORY`
- `read_uncommitted = ON`

## Notes

- All functions will return Promises, requiring `await` at call sites
- Maintain existing error handling patterns
- Keep performance logging intact
- Ensure WAL mode is enabled for concurrent read access as mentioned in conversation.md