# Port Man Pages Astro Project to Go + Templ

## Overview

Port the Astro-based man pages application to Go + Templ, maintaining server-side rendering, database queries, pagination, and sitemap generation. Follow the same patterns established in the svg_icons conversion documented in `md/convert_astro_to_templ.md`.

## Database Setup

1. **Database already exists** at `db/all_dbs/man-pages-db-v4.db`
2. **Create Go database package** at `internal/db/man_pages/`:

- `schema.go` - Define Go structs matching TypeScript interfaces (ManPage, Category, SubCategory, Overview, ManPageContent)
- `queries.go` - SQLite query functions using `github.com/mattn/go-sqlite3`
- `cache.go` - In-memory caching layer with TTL (similar to svg_icons)
- `utils.go` - Helper functions for URL building, database path, etc.

## Route Structure

Create HTTP handlers in `cmd/server/routes.go` for:

- `GET /freedevtools/man-pages/` - Main index page (categories list)
- `GET /freedevtools/man-pages/{category}/` - Category page (subcategories list, page 1)
- `GET /freedevtools/man-pages/{category}/{page}/` - Category pagination (subcategories, page N)
- `GET /freedevtools/man-pages/{category}/{subcategory}/` - Subcategory page (man pages list, page 1)
- `GET /freedevtools/man-pages/{category}/{subcategory}/{page}/` - Subcategory pagination (man pages, page N)
- `GET /freedevtools/man-pages/{category}/{subcategory}/{slug}/` - Individual man page detail
- `GET /freedevtools/man-pages/credits/` - Credits page
- `GET /freedevtools/man-pages/sitemap.xml` - Sitemap index (lists all chunked sitemaps)
- `GET /freedevtools/man-pages/sitemap-{index}.xml` - Chunked man page sitemaps (max 5000 URLs per chunk)
- `GET /freedevtools/man-pages_pages/sitemap.xml` - Pagination pages sitemap (optional, currently commented out in Astro)

## Route Matching Logic

Similar to svg_icons, use helper functions for route matching:

- `matchManPagesSitemap()` - Main sitemap index
- `matchManPagesSitemapChunk()` - Chunked sitemap
- `matchManPagesIndex()` - Main index page
- `matchManPagesCategory()` - Category page (single segment)
- `matchManPagesCategoryPagination()` - Category with page number (two segments, second is numeric)
- `matchManPagesSubcategory()` - Subcategory page (two segments, second is not numeric)
- `matchManPagesSubcategoryPagination()` - Subcategory with page (three segments, third is numeric)
- `matchManPagesPage()` - Individual man page (three segments, third is not numeric)
- `matchManPagesCredits()` - Credits page

**Key routing logic:**

- Category pagination: `/man-pages/{category}/{page}/` where page is numeric
- Subcategory: `/man-pages/{category}/{subcategory}/` where subcategory is not numeric
- Subcategory pagination: `/man-pages/{category}/{subcategory}/{page}/` where page is numeric
- Man page: `/man-pages/{category}/{subcategory}/{slug}/` where slug is not numeric

## Templ Components

Create components in `components/`:

- `pages/man_pages/index.templ` - Main index page (port from `src/pages/man-pages/index.astro`)
- `pages/man_pages/category.templ` - Category listing page with pagination
- `pages/man_pages/subcategory.templ` - Subcategory listing page with pagination
- `pages/man_pages/page.templ` - Individual man page detail page
- `pages/man_pages/credits.templ` - Credits page
- `components/pages/man_pages/sitemap.go` - Sitemap generation handlers
- Reuse existing `components/pagination.templ` and pagination helpers

## Database Query Functions

Implement in `internal/db/man_pages/queries.go`:

- `GetManPageCategories()` - All categories from category table
- `GetOverview()` - Total man pages count from overview table
- `GetSubCategoriesByMainCategoryPaginated(mainCategory, limit, offset)` - Paginated subcategories for a category (12 per page)
- `GetTotalSubCategoriesManPagesCount(mainCategory)` - Returns both subcategory count and total man pages count for a category
- `GetManPagesBySubcategoryPaginated(mainCategory, subCategory, limit, offset)` - Paginated man pages for a subcategory (20 per page)
- `GetManPagesCountBySubcategory(mainCategory, subCategory)` - Count of man pages in a subcategory
- `GetManPageBySlug(mainCategory, subCategory, slug)` - Get single man page by slug
- `GetAllManPagesPaginated(limit, offset)` - All man pages for sitemap generation (paginated)

**Note:** JSON columns (`content`, `keywords`) need to be unmarshaled manually in Go.

## Caching Strategy

Implement in-memory cache with TTL in `internal/db/man_pages/cache.go`:

- Total man pages count: 5 minutes
- Categories list: 5 minutes
- Subcategories by category: 3 minutes
- Man pages by subcategory: 3 minutes
- Individual man page: 10 minutes
- Count queries: 5 minutes

## Pagination

- **Category pages**: 12 subcategories per page
- **Subcategory pages**: 20 man pages per page
- Reuse existing pagination component and helpers from svg_icons
- URL structure:
- Category page 1: `/man-pages/{category}/`
- Category page N: `/man-pages/{category}/{page}/`
- Subcategory page 1: `/man-pages/{category}/{subcategory}/`
- Subcategory page N: `/man-pages/{category}/{subcategory}/{page}/`

## Sitemap Implementation

Create in `components/pages/man_pages/sitemap.go`:

1. **Main sitemap index** (`/man-pages/sitemap.xml`):

- Lists all chunked sitemaps based on total man page count
- Each chunk has max 5000 URLs

2. **Chunked sitemaps** (`/man-pages/sitemap-{index}.xml`):

- Contains up to 5000 man page URLs
- Format: `/man-pages/{category}/{subcategory}/{slug}/`
- Read site URL dynamically from `SITE` env var

3. **Pagination sitemap** (`/man-pages_pages/sitemap.xml`):

- Currently commented out in Astro - implement if needed
- Would list all category/subcategory pagination pages

**Key points:**

- Clean XML output (no XSL stylesheet reference)
- Site URL read dynamically on each request
- XML escaping for category/subcategory/slug names

## Key Features to Implement

1. **Man Page Content Rendering**:

- Content stored as JSON with dynamic sections (NAME, SYNOPSIS, DESCRIPTION, etc.)
- Render sections in order as they appear in JSON
- Use `templ.Raw()` for HTML content (man pages contain HTML)
- Table of contents navigation

2. **URL Structure**:

- Categories and subcategories use URL encoding/decoding
- Slug-based lookup for individual man pages
- Handle numeric vs non-numeric segments for routing

3. **Stats Display**:

- Show category count and total man pages on index
- Show subcategory count and man pages count on category pages
- Show man pages count on subcategory pages

4. **Breadcrumbs**:

- Reuse breadcrumb component pattern
- Format category/subcategory names (replace hyphens, capitalize)

## Files to Create/Modify

### Database Package

- `internal/db/man_pages/schema.go` - Go structs matching TypeScript interfaces
- `internal/db/man_pages/queries.go` - All database query functions
- `internal/db/man_pages/cache.go` - Caching layer with TTL
- `internal/db/man_pages/utils.go` - Helper functions (GetDBPath, etc.)

### Templ Components

- `components/pages/man_pages/index.templ` - Main index page
- `components/pages/man_pages/category.templ` - Category listing
- `components/pages/man_pages/subcategory.templ` - Subcategory listing
- `components/pages/man_pages/page.templ` - Individual man page
- `components/pages/man_pages/credits.templ` - Credits page
- `components/pages/man_pages/sitemap.go` - Sitemap handlers

### Route Handlers

- `cmd/server/routes.go` - Add man pages route handlers (similar to `setupSVGIconsRoutes()`)
- Reuse existing middleware and static file serving

## Implementation Steps

1. Create database package structure (`internal/db/man_pages/`)
2. Implement schema.go with Go structs
3. Implement queries.go with all database functions
4. Implement cache.go with TTL caching
5. Implement utils.go with helper functions
6. Create templ components for all pages
7. Add route handlers in routes.go
8. Implement sitemap generation
9. Test all routes and pagination
10. Verify JSON content parsing and HTML rendering
11. Manually test URLs after building to verify functionality

### Test URLs to Verify do CURL and check

**Main Index Page** (`/freedevtools/man-pages/`):

- Verify: Contains "9 Categories" or category count
- Verify: Contains "119k Man Pages" or total man pages count
- Verify: Lists all categories with links

**Category Page** (`/freedevtools/man-pages/miscellaneous/`):

- Verify: Contains "26 Subcategories" or subcategory count
- Verify: Contains "2k Man Pages" or man pages count for category
- Verify: Shows "Showing 12 of 26 subcategories (Page 1 of 3)"
- Verify: Lists subcategories with pagination

**Category Pagination** (`/freedevtools/man-pages/miscellaneous/3/`):

- Verify: Shows page 3 of category pagination
- Verify: Contains pagination info showing correct page number
- Verify: Lists subcategories for that page

**Subcategory Page** (`/freedevtools/man-pages/miscellaneous/filesystem-types/`):

- Verify: Contains "35 Man Pages in Filesystem types" or man pages count
- Verify: Shows "Showing 20 of 35 man pages (Page 1 of 2)"
- Verify: Lists man pages with pagination

**Individual Man Page** (`/freedevtools/man-pages/miscellaneous/filesystem-types/fors_zeropoint/`):

- Verify: Contains man page title "fors_zeropoint - Compute zeropoint"
- Verify: Contains "Contents" section with table of contents
- Verify: Contains man page content sections (NAME, SYNOPSIS, DESCRIPTION, etc.)
- Verify: Breadcrumbs show correct path

**Sitemap Index** (`/freedevtools/man-pages/sitemap.xml`):

- Verify: Valid XML format
- Verify: Contains sitemap entries (sitemap-1.xml through sitemap-24.xml or appropriate range)
- Verify: Each sitemap entry has `<loc>` and `<lastmod>` tags

**Sitemap Chunk** (`/freedevtools/man-pages/sitemap-24.xml`):

- Verify: Valid XML format
- Verify: Contains up to 5000 URLs
- Verify: URLs follow pattern `/man-pages/{category}/{subcategory}/{slug}/`
- Verify: Each URL has `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>` tags
- Verify: Example URLs like `tpm2-nvcertify` and `tpm2-nvextend` are present

**Credits Page** (`/freedevtools/man-pages/credits/`):

- Verify: Contains credits content
- Verify: Contains "Ubuntu Manpages Credits & Acknowledgments" heading

### After curling, Expected Data Verification

- **Index page** (`/freedevtools/man-pages/`):
- Should show category count (e.g., "9 Categories" or actual count from DB)
- Should show total man pages count (e.g., "119k Man Pages" or actual count)
- Should list all categories with clickable links

- **Miscellaneous category** (`/freedevtools/man-pages/miscellaneous/`):
- Should show subcategory count (e.g., "26 Subcategories" or actual count)
- Should show man pages count for category (e.g., "2k Man Pages" or actual count)
- Should show pagination info: "Showing 12 of 26 subcategories (Page 1 of 3)"
- Should list subcategories with pagination controls

- **Category pagination** (`/freedevtools/man-pages/miscellaneous/3/`):
- Should show page 3 in pagination
- Should show correct subcategory count
- Should list subcategories for page 3

- **Filesystem types subcategory** (`/freedevtools/man-pages/miscellaneous/filesystem-types/`):
- Should show man pages count (e.g., "35 Man Pages in Filesystem types")
- Should show pagination info: "Showing 20 of 35 man pages (Page 1 of 2)"
- Should list man pages with pagination controls

- **Individual man page** (`/freedevtools/man-pages/miscellaneous/filesystem-types/fors_zeropoint/`):
- Should show title: "fors_zeropoint - Compute zeropoint"
- Should show "Contents" section with table of contents
- Should show man page content sections (NAME, SYNOPSIS, DESCRIPTION, etc.)
- Should show breadcrumbs: Free DevTools / Man Pages / Miscellaneous / Filesystem types / fors_zeropoint

- **Sitemap index** (`/freedevtools/man-pages/sitemap.xml`):
- Should be valid XML
- Should contain `<sitemapindex>` root element
- Should list sitemap entries from sitemap-1.xml to sitemap-N.xml (where N = total man pages / 5000, rounded up)
- Each entry should have `<loc>` and `<lastmod>` tags

- **Sitemap chunk** (`/freedevtools/man-pages/sitemap-24.xml`):
- Should be valid XML
- Should contain `<urlset>` root element
- Should contain up to 5000 URLs
- URLs should follow pattern: `/man-pages/{category}/{subcategory}/{slug}/`
- Each URL should have `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>` tags
- Should contain example URLs like `tpm2-nvcertify` and `tpm2-nvextend`

- **Credits page** (`/freedevtools/man-pages/credits/`):
- Should show "Ubuntu Manpages Credits & Acknowledgments" heading
- Should contain credits content

## Notes

- Follow the same patterns as svg_icons conversion
- Use `database/sql` with `github.com/mattn/go-sqlite3` driver
- SQLite connection string: `mode=ro&_immutable=1&_cache_size=-128000&_mmap_size=468435456`
- Connection pool: 20 max open/idle connections
- Database path: `db/all_dbs/man-pages-db-v4.db`
- JSON columns need explicit unmarshaling
- Man page content contains HTML - use `templ.Raw()` carefully
- Route matching must distinguish between numeric (pagination) and non-numeric (category/subcategory/slug) segments

Here are few urls from production/astro thing

https://hexmos.com/freedevtools/man-pages/
Free DevTools
/
Man Pages
Man Pages
Browse and search manual pages with detailed documentation for system calls, commands, and configuration files.

9
Categories
119k
Man Pages

https://hexmos.com/freedevtools/man-pages/miscellaneous/
Free DevTools
/
Man Pages
/
Miscellaneous
Miscellaneous Man Pages
Browse Miscellaneous manual page subcategories with detailed documentation.

26
Subcategories
2k
Man Pages
Showing 12 of 26 subcategories (Page 1 of 3)

https://hexmos.com/freedevtools/man-pages/miscellaneous/3/#pagination-info
Miscellaneous Man Pages
Browse Miscellaneous manual page subcategories with detailed documentation.

26
Subcategories
2k
Man Pages

https://hexmos.com/freedevtools/man-pages/miscellaneous/filesystem-types/
35
Man Pages in Filesystem types
Showing 20 of 35 man pages (Page 1 of 2)

https://hexmos.com/freedevtools/man-pages/miscellaneous/filesystem-types/fors_zeropoint/
Free DevTools
/
Man Pages
/
Miscellaneous
/
Filesystem types
/
fors_zeropoint
fors_zeropoint - Compute zeropoint
Contents

https://hexmos.com/freedevtools/man-pages/sitemap.xml
Sitemap Index
Location Last Modified
https://hexmos.com/freedevtools/man-pages/sitemap-1.xml 2025-11-23T19:54:25.606Z

https://hexmos.com/freedevtools/man-pages/sitemap-24.xml 2025-11-23T19:54:25.606Z

https://hexmos.com/freedevtools/man-pages/sitemap-24.xml
Sitemap
URL Last Modified Changefreq Priority
https://hexmos.com/freedevtools/man-pages/user-commands/security-and-encryption/tpm2-nvcertify/ 2025-11-26T17:10:32.089Z daily 0.8
https://hexmos.com/freedevtools/man-pages/user-commands/security-and-encryption/tpm2-nvextend/ 2025-11-26T17:10:32.089Z daily 0.8

update the plan to check for these urls aswell and verify these data are present
