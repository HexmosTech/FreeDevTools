# FreeDevTools Static Generator

This directory contains the tools and scripts used to pre-render the dynamic Go `templ` components into static `.html` files. The static engine serves these generated HTML files directly (via Nginx or a lightweight middleware layer) to significantly boost load speeds, SEO performance, and reliability, rather than running server-side queries on every request.

## How the Stitching works

The static generation works by decoupling the rendering layer from the live traffic.

1. **Fetching:** For a specific tool (e.g. `man_pages.go`), the generator queries the local SQLite databases directly to retrieve the full dataset of available components, categories, and specific pages.
2. **Templ Rendering:** For each individual URL path (like a specific man page or cheat sheet), the generator builds the corresponding `templ` UI component (like `@page.templ`) and passes the queried database data to it as props.
3. **Stitching to Layout:** The rendered sub-component is then "stitched" into the master layout component (`base_layout.templ`) so the resulting HTML contains the entire web page—headers, footers, ad blocks, critical CSS, etc.
4. **Writing to cache:** The final fully-formed HTML string is written directly to disk in the `static/freedevtools/` directory. For example, a man page would be saved to `static/freedevtools/man-pages/kernel-routines/index.html`.

During live production, a middleware router or static proxy simply checks if an `index.html` file exists for the requested path in the static cache directory and replies with it immediately, completely bypassing the database routing layer.

## How to trigger static generation

The easiest way to execute the generation is via the `Makefile` scripts. You can run all the generators at once, or isolate a specific section using the `--section` flag.

### Core Commands

| Command | Description |
| :--- | :--- |
| `make static-generation-all` | Clears and regenerates the static cache for **ALL** tools and pages. |
| `make static-generation-cheatsheets` | Regenerates only the cheatsheets cache. |
| `make static-generation-installerpedia` | Regenerates only the installerpedia cache. |
| `make static-generation-emojis` | Regenerates only the emojis cache. |
| `make static-generation-man-pages` | Regenerates only the man-pages cache. |
| `make clear-static-cache` | Deletes the entire `static/freedevtools/` directory. |

### Production Startup Command

When deploying or starting the production server, the `Makefile` automatically queues a background generation job without blocking the server startup. 

By default, it will generate **everything**:
```bash
make start-prod
```

You can limit the background rendering job to only a specific section by passing the `STATIC_SECTION` argument:
```bash
make start-prod STATIC_SECTION=cheatsheets
```

*(This argument is directly passed down to `./scripts/background_static_indexing.sh --section=cheatsheets`, which in turn executes `make static-generation-cheatsheets`)*

## Environment Configuration
Static site caching must be explicitly enabled in the production configuration via the TOML config file:
```toml
# fdt-prod.toml
enable_static_cache = true
```
