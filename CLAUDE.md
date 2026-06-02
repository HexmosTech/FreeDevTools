# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

FreeDevTools is a curated collection of 125,000+ free developer resources (icons, cheat sheets, TLDRs, man pages, MCP tools, emojis, installerpedia). It's a multi-component monorepo:

- **`frontend/`** — Main Go + Templ + React SSR web application (primary component)
- **`b2-manager/`** — Go CLI for managing SQLite databases via Backblaze B2 with distributed locking
- **`search-index/`** — Go program that generates JSON indexes for Meilisearch
- **`vscode-extension/`** — TypeScript VS Code extension

---

## Development Commands (run from `frontend/`)

```bash
# Install all dependencies (Go, Node, templ CLI)
make install

# Development: full build + run (generates templ, CSS, JS, then serves on :4321)
make run

# Development with live reload (watches .templ, .go, CSS in parallel)
make start-dev

# Individual build steps
make generate      # Run templ code generation
make build-css     # Compile Tailwind CSS → assets/css/output.css
make build-js      # Bundle React with esbuild → assets/js/

# Run tests
make test

# Production
make start-prod              # Full build + pmdaemon start (generates sitemaps in background)
make start-prod SKIP_SITEMAP=1  # Skip sitemap generation
make stop-prod               # Stop server + free port 4321
make logs                    # Tail pmdaemon logs

# Database sync (requires rclone configured via make init-rclone)
make sync-db-to-local        # Pull all SQLite DBs from Backblaze B2
make update-db-to-b2 file=db/all_dbs/some.db  # Push one DB to B2

# Kill dev server
make kill                    # Kills process on port 4321
```

Config is loaded from `fdt-dev.toml` (dev), `fdt-staging.toml`, or `fdt-prod.toml` based on `NODE_ENV` in `.env`.

---

## Frontend Architecture

### Request Lifecycle

```
HTTP Request → cmd/middleware/ → cmd/server/routes.go
  → internal/controllers/<category>/handlers.go
    → internal/db/<category>/queries.go  (SQLite)
    → internal/http_cache/<category>.go  (in-memory cache)
    → components/pages/<category>/       (Templ templates → HTML)
```

For SEO-critical pages, a static HTML layer sits in front:
```
Request → static/<section>/  (pre-rendered HTML, served by nginx)
  → fallback to Go SSR if not found
```

### Key Directories

| Path | Purpose |
|------|---------|
| `cmd/server/` | Entry point, route registration, middleware wiring |
| `internal/config/` | TOML config loader (koanf), singleton `appConfig` |
| `internal/db/<category>/` | SQLite layer per resource type (schema, queries, cache, utils) |
| `internal/http_cache/` | Per-category in-memory HTTP response caching |
| `internal/controllers/<category>/` | HTTP handlers per resource type |
| `internal/static_cache/` | Static page serving logic |
| `components/` | Templ templates (layouts, pages, common components) |
| `components/pages/<category>/` | Page-level Templ files per resource section |
| `assets/css/` | Tailwind input/output CSS |
| `assets/js/` | React bundles built by esbuild (`build.js`) |
| `db/all_dbs/` | SQLite database files (versioned, e.g. `tldr-db-v6.db`) |
| `db.toml` | Maps logical DB names to versioned filenames |
| `cmd/static-generator/` | Offline pre-renderer for static HTML deployment |
| `scripts/` | Utility scripts (analysis, migration, indexing) |

### Database Layer Pattern

Each resource category (`svg_icons`, `tldr`, `man_pages`, etc.) follows the same structure under `internal/db/<category>/`:
- `schema.go` — struct definitions and DB connection init
- `queries.go` — SQL query functions
- `cache.go` — in-memory cache wrapping queries
- `utils.go` — helpers

Database filenames are versioned (`ipm-db-v59.db`) and tracked in `db.toml`. To update a DB version: edit `db.toml`, then push via `make update-db-to-b2`.

### Templ + React Hybrid

Pages are server-rendered via [Templ](https://templ.guide/) (Go HTML templating). React bundles are injected as `<script>` tags for client-side interactivity. After editing any `.templ` file, run `make generate` (or `make run` which does it automatically) — the generated `*_templ.go` files must be committed alongside `.templ` files.

### Configuration

`internal/config/config.go` loads from the appropriate TOML file based on `NODE_ENV`. Config includes: site URL, port, basepath, B2 credentials, Meilisearch keys, feature flags, ad configuration, and PostgreSQL credentials (for bookmarks).

---

## b2-manager

CLI tool run from `frontend/` as `./b2m`. Manages distributed locking for SQLite DB edits via B2 file-based locks. Build with `make build-b2m` from `frontend/`. Requires `rclone` and `b3sum`.

## search-index

Standalone Go program in `search-index/`. Generates JSON index files for Meilisearch per resource category. Use `make ready-search` from `frontend/` to set up local Meilisearch with Docker, generate indexes, and configure keys.
