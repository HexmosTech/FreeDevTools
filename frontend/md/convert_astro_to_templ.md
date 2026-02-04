# Port Astro SVG Icons Project to Go + Templ

## Overview

Port the Astro-based SVG icons application to Go + Templ, maintaining server-side rendering, database queries, pagination, and sitemap generation.

## Database Setup

1. **Copy database files** from `astro_freedevtools/db/all_dbs/` to `db/all_dbs/` in the new project
2. **Create Go database package** at `internal/db/svg_icons/`:
 
- `schema.go` - Define Go structs matching TypeScript interfaces (Icon, Cluster, etc.)
- `queries.go` - SQLite query functions using `github.com/mattn/go-sqlite3`
- `cache.go` - In-memory caching layer (similar to TypeScript cache with TTL)
- `utils.go` - Helper functions for URL building, hashing, etc.

## Route Structure

Create HTTP handlers in `cmd/server/` for:

- `GET /freedevtools/` - Main index page
- `GET /freedevtools/svg_icons/` - SVG index (page 1)
- `GET /freedevtools/svg_icons/{page}/` - Paginated SVG index pages
- `GET /freedevtools/svg_icons/{category}/` - Category listing page
- `GET /freedevtools/svg_icons/{category}/{icon}/` - Individual icon page
- `GET /freedevtools/svg_icons/sitemap.xml` - Sitemap index (lists all sitemaps)
- `GET /freedevtools/svg_icons/sitemap-{index}.xml` - Chunked icon sitemaps (max 5000 URLs per chunk)
- `GET /freedevtools/svg_icons_pages/sitemap.xml` - Pagination pages sitemap

## Templ Components

Create components in `components/`:

- `pages/index.templ` - Main index page (port from `src/pages/index.astro`)
- `pages/svg_icons/index.templ` - SVG index page with pagination
- `pages/svg_icons/category.templ` - Category listing page
- `pages/svg_icons/icon.templ` - Individual icon detail page
- `components/pagination.templ` - Pagination component (port from `PaginationComponent.astro`)
- `components/pagination_data.go` - Pagination data structures (`PaginationData`, `PaginationPage`)
- `components/pagination_helpers.go` - Pagination helper functions (`PaginationURL`, `PaginationOnClickJS`, etc.)
- `components/breadcrumb.templ` - Breadcrumb navigation
- `components/layout.templ` - Base HTML layout wrapper
- `components/pages/svg_icons/category_helpers.go` - Category-specific helper functions (`GetIconURL`)
- `components/pages/svg_icons/sitemap.go` - Sitemap generation handlers

## Key Features to Implement

1. **Pagination**: 
   - SVG index: 30 categories per page
   - Category pages: 10 icons per page
   - "Go to page" functionality with JavaScript validation
2. **Database Queries**: 

- `GetTotalIcons()` - Total icon count from overview table
- `GetTotalClusters()` - Total cluster count from overview table
- `GetClustersWithPreviewIcons(page, itemsPerPage, previewIconsPerCluster, transform)` - Paginated clusters with preview icons
- `GetClusterByName(hashName)` - Lookup cluster by hash name
- `GetClusterBySourceFolder(sourceFolder)` - Lookup cluster by source folder (primary method)
- `GetIconsByCluster(cluster, categoryName, limit, offset)` - Paginated icons in a cluster
- `GetIconByCategoryAndName(category, iconName)` - Get single icon with fallback lookup
- `GetSitemapIcons()` - All icons for sitemap generation
- `GetClusters()` - All clusters (for future use)

3. **Caching**: In-memory cache with TTL:
   - Total icons/clusters: 5 minutes
   - Clusters with preview: 2 minutes
   - Icons by cluster: 3 minutes
   - Cluster by name: 10 minutes
   - All clusters: 5 minutes
4. **Sitemap**: Generate XML sitemap from database with image sitemap support:
   - Main sitemap index (`/svg_icons/sitemap.xml`) - Lists all chunked sitemaps and pagination sitemap
   - Chunked icon sitemaps (`/svg_icons/sitemap-{index}.xml`) - Max 5000 URLs per chunk, includes image sitemap data
   - Pagination sitemap (`/svg_icons_pages/sitemap.xml`) - Lists all pagination pages
   - Site URL read from `SITE` environment variable dynamically
   - Clean XML output (no XSL stylesheet reference)
5. **Static Assets**: Serve CSS from `assets/` directory via `/static/` route
6. **Middleware**: 
   - Request logging with status codes and duration
   - Optional gzip compression (enabled via `ENABLE_GZIP=1`)
7. **Server Configuration**:
   - Runtime: Limited to 2 CPU cores (`GOMAXPROCS=2`)
   - HTTP timeouts: 300s read/write, 120s idle, 5s header
   - Database: Read-only immutable mode with optimized connection pool (20 connections)

## Implementation Steps

1. Set up database connection and schema
2. Create database query functions
3. Implement caching layer
4. Create templ components for pages
5. Set up HTTP routing with proper path handling
6. Implement pagination logic
7. Add sitemap generation endpoint
8. Copy static SVG assets
9. Test all routes and pagination

## Running the Server

- **Development**: `make run` (runs on port 4321 by default)
- **Production**: `make start-prod` (runs in background, logs to `~/.pmdaemon/logs/fdt-4321-error.log`)
- **Stop Production**: `make stop-prod`
- **View Logs**: `make logs-prod` or `tail -f ~/.pmdaemon/logs/fdt-4321-error.log`
- **Build Binary**: `make build` (includes templ generation, CSS build, and DB checkpoint)
- **Production Binary**: `make start-prod-binary` (uses compiled binary instead of `go run`)

## Files to Create/Modify

- `internal/db/svg_icons/schema.go` - Database structs
- `internal/db/svg_icons/queries.go` - Query functions
- `internal/db/svg_icons/cache.go` - Caching
- `internal/db/svg_icons/utils.go` - Helpers
- `components/pages/index.templ` - Main page
- `components/pages/svg_icons/index.templ` - SVG index
- `components/pages/svg_icons/category.templ` - Category page
- `components/pages/svg_icons/icon.templ` - Icon detail
- `components/pages/svg_icons/category_helpers.go` - Category helper functions
- `components/pagination.templ` - Pagination UI
- `components/pagination_data.go` - Pagination data structures
- `components/pagination_helpers.go` - Pagination helper functions
- `components/breadcrumb.templ` - Breadcrumbs
- `components/layout.templ` - Base layout component
- `cmd/server/routes.go` - Route handlers
- `cmd/server/main.go` - Server entry point
- `cmd/server/middleware.go` - HTTP middleware (gzip compression)
- `cmd/server/logging.go` - Request logging middleware
- `cmd/server/env.go` - Environment variable configuration (GetBasePath, GetSiteURL, GetPort)
- `components/pages/svg_icons/sitemap.go` - Sitemap generation (HandleSitemapIndex, HandleSitemapChunk, HandlePaginationSitemap)
- `assets/sitemap.xsl` - Optional XSL stylesheet for browser display (not referenced in XML)
- `go.mod` - Add sqlite3 dependency

## Notes

- No need for worker pools in Go (goroutines handle concurrency)
- Use `database/sql` with `github.com/mattn/go-sqlite3` driver
- Maintain same URL structure and SEO metadata
- Keep Tailwind CSS styling consistent

## Learnings & Challenges

### 1. Route Handling in Go's ServeMux

**Challenge**: Go's `http.ServeMux` has specific pattern matching rules that differ from Astro's file-based routing.

**Key Learnings**:
- Patterns ending with `/` match all paths that start with that prefix
- Longer patterns are matched first
- Cannot register the same pattern twice (causes panic)
- Route registration order matters - more specific routes should be registered first

**Solution**: 
- Use a single handler function for `/freedevtools/svg_icons/` that parses the path manually
- Check for specific paths (like sitemap.xml) before general routing
- Use helper functions for route matching: `matchSitemap()`, `matchIndex()`, `matchPagination()`, `matchCategory()`, `matchIcon()`, `matchCategoryPagination()`
- Use `strings.TrimPrefix` and `strings.Split` to parse URL segments
- Handle pagination by checking if path segment is numeric
- URL decode category and icon names using `url.QueryUnescape()`
- Remove `.svg` extension from icon names if present

### 2. Database Query Patterns

**Challenge**: TypeScript/Bun database queries use different patterns than Go's `database/sql`.

**Key Learnings**:
- Go's `database/sql` requires explicit error handling for `sql.ErrNoRows`
- JSON columns need to be unmarshaled manually (unlike Bun's automatic handling)
- Nullable fields require `sql.NullString` or pointer types
- Connection pooling is handled automatically but can be configured

**Solution**:
- Created helper functions to parse JSON arrays into Go slices (`parseJSONArray()`, `parseJSONArrayToPreviewIcons()`)
- Used `sql.NullString` for nullable database columns
- Implemented proper error handling with `sql.ErrNoRows` checks
- Added connection pool configuration: 20 max open/idle connections, infinite lifetime
- SQLite connection string: `mode=ro&_immutable=1&_cache_size=-128000&_mmap_size=468435456`
- Database must be checkpointed before shipping (WAL must be merged)
- Raw row structs (`rawIconRow`, `rawClusterRow`) for scanning, then converted to public types

### 3. Caching Strategy

**Challenge**: Implementing in-memory cache with TTL similar to TypeScript implementation.

**Key Learnings**:
- Go's `sync.RWMutex` is essential for thread-safe cache operations
- Cache keys should include all query parameters for uniqueness
- TTL should vary by query type (totals cached longer, paginated results shorter)
- Cache invalidation happens automatically on TTL expiry

**Solution**:
- Created `Cache` struct with `sync.RWMutex` for thread safety
- Implemented `Get()` and `Set()` methods with TTL support
- Used different TTL constants for different query types
- Cache keys include function name and all parameters

### 4. URL Hash Lookup vs Direct Lookup

**Challenge**: Database stores icons with `url_hash` but URLs use category/icon names.

**Key Learnings**:
- Original Astro code used URL hashing for icon lookups
- Database `url_hash` format: `/{source_folder}/{icon_name}` (no trailing slash, no prefix)
- Direct lookup by `cluster` and `name` is more reliable
- Category names in URLs match `source_folder` in database, not `name`

**Solution**:
- Implemented `GetClusterBySourceFolder()` to lookup by `source_folder` or `name`
- Added fallback to hashed name lookup for compatibility
- Primary lookup uses direct `cluster` and `name` query
- Fallback to URL hash lookup if direct query fails

### 5. Static File Serving

**Challenge**: Serving CSS and SVG files correctly with proper route precedence.

**Key Learnings**:
- Static file handlers must be registered before dynamic routes in some cases
- `http.StripPrefix` is needed when serving from subdirectories
- File paths must be absolute or relative to working directory
- Route conflicts occur when patterns overlap

**Solution**:
- Registered static file handler first in `main.go`
- Used `filepath.Abs()` to get absolute paths
- Separate handler for SVG files from `public/svg_icons/` directory
- CSS files served from embedded `assets` directory

### 6. Templ Component Patterns

**Challenge**: Converting Astro components to Templ syntax.

**Key Learnings**:
- Templ uses Go syntax for conditionals and loops
- Component props are passed as function parameters
- `templ.Component` interface for child components
- Use `templ.URL()` for safe URL generation
- Use `templ.Raw()` for raw HTML/JavaScript (carefully)

**Solution**:
- Created data structs for component props (e.g., `IconData`, `CategoryData`)
- Used `if` statements for conditional rendering
- Used `for` loops for iterating over slices
- Separated helper functions into `.go` files (e.g., `pagination_helpers.go`)

### 7. Pagination Implementation

**Challenge**: Implementing pagination with "Go to page" functionality.

**Key Learnings**:
- Pagination data structure needs to include all necessary URLs
- JavaScript for "Go to page" must be injected safely
- Page number validation should happen client-side
- URL structure: `/svg_icons/` for page 1, `/svg_icons/2/` for page 2
- Category pagination: `/svg_icons/{category}/` for page 1, `/svg_icons/{category}/2/` for page 2
- Redirect page 1 to base URL (no page number)

**Solution**:
- Created `PaginationData` struct with all pagination state (CurrentPage, TotalPages, URLs, page ranges)
- `NewPaginationData()` function calculates all URLs and page links
- Helper functions: `PaginationURL()`, `PaginationOnClickJS()`, `Min()`, `Max()`, `FormatInt()`
- Used `templ.Raw()` for JavaScript injection in pagination component
- Implemented proper URL generation for first/last/prev/next pages
- Shows page range with ellipsis (first/last pages when needed)
- Separate pagination for index (30 items) and category pages (10 items)

### 8. Base64 Image Display

**Challenge**: Displaying icons using Base64 data from database.

**Key Learnings**:
- Database stores PNG previews as Base64 strings
- Using Base64 data URIs is more reliable than file serving
- Format: `data:image/png;base64,{base64_string}`
- Fallback to file URL if Base64 not available

**Solution**:
- Updated icon detail page to use Base64 data primarily
- Added conditional rendering: Base64 if available, file URL as fallback
- Category pages already used Base64, kept consistency

### 9. Port Configuration

**Challenge**: Making port configurable to match Astro's default (4321).

**Key Learnings**:
- Environment variables are the standard way to configure ports
- Makefile variables can be overridden
- Default values should match original project

**Solution**:
- Changed default `PORT` in Makefile from 8080 to 4321
- Server reads `PORT` environment variable, defaults to 4321
- `make kill` uses `PORT` variable for consistency
- `make run` passes `PORT` to server process

### 10. Debug Logging

**Challenge**: Debugging route matching and database queries.

**Key Learnings**:
- Strategic logging helps identify route matching issues
- Log route handler entry, path parsing, and database lookups
- Too much logging can impact performance
- Remove debug logs after issues are resolved

**Solution**:
- Added logging at key points: route handler entry, path parsing, database lookups
- Used structured log messages with relevant context
- Can be easily removed or made conditional with log levels

### 11. Error Handling Patterns

**Challenge**: Proper error handling in HTTP handlers.

**Key Learnings**:
- `http.NotFound()` for 404 responses
- `http.Error()` for 500 responses with messages
- Database errors should be logged but not exposed to users
- Return early on errors to avoid nested conditionals

**Solution**:
- Used early returns in handlers for error cases
- Logged errors with context before returning
- Returned appropriate HTTP status codes
- Graceful degradation (e.g., empty arrays instead of errors)

### 12. Type Conversions

**Challenge**: Converting between TypeScript types and Go types.

**Key Learnings**:
- TypeScript `number` maps to Go `int` or `int64`
- TypeScript `string | null` maps to Go `*string` or `sql.NullString`
- TypeScript arrays map to Go slices
- JSON columns need explicit unmarshaling

**Solution**:
- Created Go structs matching TypeScript interfaces
- Used pointer types for nullable fields
- Created helper functions for JSON unmarshaling
- Used `json.Unmarshal()` for JSON columns

### 13. Route Matching Helper Functions

**Challenge**: Clean route pattern matching without complex nested conditionals.

**Key Learnings**:
- Helper functions make route matching logic clear and testable
- Separate functions for each route pattern (sitemap, index, pagination, category, icon)
- URL decoding should happen in matching functions
- Category pagination requires two-segment matching (category + page number)

**Solution**:
- Created dedicated matching functions: `matchSitemap()`, `matchIndex()`, `matchPagination()`, `matchCategory()`, `matchIcon()`, `matchCategoryPagination()`
- Each function returns matched values and boolean success flag
- URL decoding integrated into matching functions
- Clear separation of concerns in route handler

### 14. Parallel Query Execution

**Challenge**: Optimizing page load times by reducing database query latency.

**Key Learnings**:
- Multiple independent queries can run in parallel using goroutines
- Channels provide clean synchronization for parallel results
- Error handling must account for multiple goroutines

**Solution**:
- SVG index page runs 3 queries in parallel: `GetTotalClusters()`, `GetTotalIcons()`, `GetClustersWithPreviewIcons()`
- Used channels for result collection: `totalCategoriesChan`, `totalIconsChan`, `categoriesChan`, `errChan`
- Error channel collects any failures from parallel queries
- Sequential result collection after all goroutines complete

### 15. Production Server Setup

**Challenge**: Running server in production with proper process management.

**Key Learnings**:
- `nohup` allows server to run in background
- PID file tracking enables clean shutdown
- Log file management for debugging
- Database checkpointing required before immutable mode

**Solution**:
- `make start-prod`: Runs server in background with `nohup`, logs to `~/.pmdaemon/logs/fdt-4321-error.log`
- `make stop-prod`: Kills process by PID and port
- `make logs-prod`: View recent log entries
- `make checkpoint-db`: Checkpoints SQLite WAL before shipping
- `make start-prod-binary`: Uses compiled binary instead of `go run`

### 16. Middleware Implementation

**Challenge**: Adding cross-cutting concerns like logging and compression.

**Key Learnings**:
- Middleware wraps `http.Handler` for composability
- Response writer wrapping needed to capture status codes
- Gzip compression should be optional (nginx can handle it)
- Only compress HTML responses, not binary assets

**Solution**:
- `loggingMiddleware`: Wraps response writer to capture status code, logs method/path/status/duration
- `gzipMiddleware`: Conditionally compresses HTML responses if `ENABLE_GZIP=1`
- Middleware chain: `loggingMiddleware(gzipMiddleware(mux))` or just `loggingMiddleware(mux)`
- Response writer wrapper pattern for status code capture

### 17. Category Pagination

**Challenge**: Supporting pagination within category pages.

**Key Learnings**:
- Category pagination uses different URL pattern: `/svg_icons/{category}/{page}/`
- Must distinguish between category+page and category+icon patterns
- Category pages show 10 icons per page (different from index's 30)

**Solution**:
- `matchCategoryPagination()` checks if second segment is numeric
- Category handler accepts `page` parameter, defaults to 1
- Pagination component reused with different base URL
- Limit of 10 icons per page for category pages

### 18. Profiling Support

**Challenge**: Performance monitoring and debugging in production.

**Key Learnings**:
- Go's `net/http/pprof` provides built-in profiling
- Profiling routes should be registered but not exposed publicly
- Useful for CPU, memory, and goroutine profiling

**Solution**:
- Registered pprof routes: `/debug/pprof/`, `/debug/pprof/profile`, etc.
- Can be accessed for local debugging
- Should be protected by reverse proxy in production

### 19. Sitemap Implementation

**Challenge**: Implementing proper sitemap structure with chunking and pagination support.

**Key Learnings**:
- Sitemaps must be split into chunks if >5000 URLs (max 50,000 URLs per sitemap)
- Sitemap index file lists all individual sitemaps
- Separate sitemap for pagination pages vs icon pages
- Site URL should be configurable via environment variable
- XSL stylesheet is optional (only for browser display, not required by search engines)
- Site URL must be read dynamically, not cached at package initialization

**Solution**:
- Created `sitemap.go` in `components/pages/svg_icons/` with three handlers:
  - `HandleSitemapIndex()` - Main sitemap index listing all chunked sitemaps
  - `HandleSitemapChunk()` - Chunked icon sitemaps (5000 URLs per chunk)
  - `HandlePaginationSitemap()` - Pagination pages sitemap
- Routes: `/svg_icons/sitemap.xml`, `/svg_icons/sitemap-{index}.xml`, `/svg_icons_pages/sitemap.xml`
- `getSiteURL()` function reads `SITE` env var dynamically on each request
- Removed XSL stylesheet reference from XML output (clean XML for search engines)
- Chunk calculation: `(len(icons) + maxURLsPerSitemap) / maxURLsPerSitemap`
- Each chunk includes root URL + up to 5000 icon URLs
- Image sitemap data included in chunked sitemaps using `xmlns:image` namespace

### 20. Environment Variable Configuration

**Challenge**: Centralizing environment variable handling across the application.

**Key Learnings**:
- Environment variables should be read from a single location
- Default values should match production defaults
- Base path and site URL need to be configurable
- Package-level variable initialization can cache values incorrectly

**Solution**:
- Created `cmd/server/env.go` with centralized functions:
  - `GetBasePath()` - Reads `BASEPATH` env var, defaults to `/freedevtools`
  - `GetSiteURL()` - Reads `SITE` env var, defaults to `https://hexmos.com/freedevtools`
  - `GetPort()` - Reads `PORT` env var, defaults to `4321`
- Sitemap handlers call `getSiteURL()` dynamically (not cached)
- All routes use `GetBasePath()` from env.go
- Server uses `GetPort()` from env.go

### Best Practices Discovered

1. **Route Organization**: Group related routes in separate functions (e.g., `setupSVGIconsRoutes()`)
2. **Database Queries**: Always handle `sql.ErrNoRows` explicitly
3. **Caching**: Use different TTLs for different data types
4. **Error Handling**: Log errors with context, return appropriate HTTP status codes
5. **Component Structure**: Keep data structs close to components, helpers in separate files
6. **Static Assets**: Serve from absolute paths, register handlers in correct order
7. **Configuration**: Use environment variables with sensible defaults
8. **Testing**: Test route matching, database queries, and component rendering separately
9. **Performance**: Use parallel queries for independent data fetching
10. **Production**: Use immutable SQLite mode with checkpointing, limit CPU cores, configure timeouts
11. **Middleware**: Wrap handlers for cross-cutting concerns, make compression optional
12. **Route Matching**: Use helper functions for clean, testable route pattern matching
13. **Sitemaps**: Split large sitemaps into chunks, use sitemap index, read site URL dynamically
14. **Environment Variables**: Centralize env var handling in `env.go`, read dynamically when needed