# Port Astro TLDR Project to Go + Templ

## Overview

Port the Astro-based TLDR (Command Line Documentation) application to Go + Templ, maintaining server-side rendering, database queries, pagination, and sitemap generation.

## Database Setup

1. **Verify database file**: Ensure `tldr-db-v5.db` is present in `db/all_dbs/`.
2. **Create Go database package** at `internal/db/tldr/`:

- `schema.go` - Define Go structs matching TypeScript interfaces (Command, Cluster, Page, etc.)
- `queries.go` - SQLite query functions using `github.com/mattn/go-sqlite3`
- `cache.go` - In-memory caching layer
- `utils.go` - Helper functions

## Route Structure

Create HTTP handlers (preferably in `cmd/server/tldr_routes.go`) for:

- `GET /freedevtools/tldr/` - Main index page (Platform list)
- `GET /freedevtools/tldr/{page}/` - Paginated index pages
- `GET /freedevtools/tldr/{platform}/` - Platform/Cluster listing page (e.g., /common/, /linux/)
- `GET /freedevtools/tldr/{platform}/{command}/` - Individual command page
- `GET /freedevtools/tldr/sitemap.xml` - Sitemap index
- `GET /freedevtools/tldr/sitemap-{index}.xml` - Chunked sitemaps
- `GET /freedevtools/tldr_pages/sitemap.xml` - Pagination sitemap

## Templ Components

Create components in `components/`:

- `pages/tldr/index.templ` - Main index page with platform list
- `pages/tldr/platform.templ` - Platform/Category listing page
- `pages/tldr/command.templ` - Individual command detail page
- `components/pages/tldr/sitemap.go` - Sitemap generation handlers

## Key Features to Implement

1. **Pagination**:
   - Index: List of Platforms/Clusters (30 per page)
   - Platform Page: List of Commands (probably paginated, though Astro might list all. Need to check if platform pages are paginated.)
   - "Go to page" functionality.
2. **Database Queries**:
   - `GetAllClusters()` - For index page.
   - `GetClusterByName(name)` - For platform page.
   - `GetCommand(platform, name)` - For command page.
   - `GetTotalCommands()` - For stats.
3. **Caching**:
   - Cache expensive DB queries (clusters, heavy command lists).
4. **Sitemap**:
   - Similar chunking strategy as SVG icons.

## Implementation Steps

1. Set up database connection (add to `internal/db/sqlite.go` if needed or reusing existing).
2. Create `internal/db/tldr` package with schema and queries.
3. Create templ components for Index, Platform, and Command pages.
4. Setup routing in `cmd/server`.
5. Implement sitemap.
6. Verify against original Astro site.

## Files to Create/Modify

- `internal/db/tldr/schema.go`
- `internal/db/tldr/queries.go`
- `internal/db/tldr/cache.go`
- `internal/db/tldr/utils.go`
- `components/pages/tldr/index.templ`
- `components/pages/tldr/platform.templ`
- `components/pages/tldr/command.templ`
- `cmd/server/tldr_routes.go` (new file for route organization)
- `cmd/server/main.go` (register routes)
