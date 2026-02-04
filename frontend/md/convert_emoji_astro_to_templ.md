# Port Emojis Astro Project to Go + Templ

## Overview

Port the Astro-based emoji application to Go + Templ, maintaining server-side rendering, database queries, pagination, and sitemap generation. The emoji system has three main sections:

1. **Regular Emojis** (`/emojis/`) - Main emoji reference
2. **Apple Emojis** (`/emojis/apple-emojis/`) - Apple vendor-specific emojis
3. **Discord Emojis** (`/emojis/discord-emojis/`) - Discord vendor-specific emojis

## Database Setup

1. **Database file**: `emoji-db-v4.db` (2.3G) already exists in `db/all_dbs/`
2. **Create Go database package** at `internal/db/emojis/`:

- `schema.go` - Define Go structs matching TypeScript interfaces (EmojiData, EmojiImageVariants, CategoryWithPreview, etc.)
- `queries.go` - SQLite query functions using `github.com/mattn/go-sqlite3`
- `cache.go` - In-memory caching layer with TTL (similar to svg_icons and man_pages)
- `utils.go` - Helper functions for URL building, database path, etc.

## Route Structure

Create HTTP handlers in `cmd/server/routes.go` for:

### Regular Emojis

- `GET /freedevtools/emojis/` - Main index page (categories list, page 1)
- `GET /freedevtools/emojis/{page}/` - Index pagination (categories, page N)
- `GET /freedevtools/emojis/{category}/` - Category page (emojis list, page 1)
- `GET /freedevtools/emojis/{category}/{page}/` - Category pagination (emojis, page N)
- `GET /freedevtools/emojis/{slug}/` - Individual emoji detail page
- `GET /freedevtools/emojis/credits/` - Credits page
- `GET /freedevtools/emojis/sitemap.xml` - Main emoji sitemap

### Apple Emojis

- `GET /freedevtools/emojis/apple-emojis/` - Apple emojis index page
- `GET /freedevtools/emojis/apple-emojis/{category}/` - Apple category page (page 1)
- `GET /freedevtools/emojis/apple-emojis/{category}/{page}/` - Apple category pagination
- `GET /freedevtools/emojis/apple-emojis/{slug}/` - Individual Apple emoji page
- `GET /freedevtools/emojis/apple-emojis/sitemap.xml` - Apple emojis sitemap

### Discord Emojis

- `GET /freedevtools/emojis/discord-emojis/` - Discord emojis index page
- `GET /freedevtools/emojis/discord-emojis/{category}/` - Discord category page (page 1)
- `GET /freedevtools/emojis/discord-emojis/{category}/{page}/` - Discord category pagination
- `GET /freedevtools/emojis/discord-emojis/{slug}/` - Individual Discord emoji page
- `GET /freedevtools/emojis/discord-emojis/sitemap.xml` - Discord emojis sitemap

## Route Matching Logic

Use helper functions for route matching (similar to svg_icons and man_pages):

### Regular Emojis

- `matchEmojisIndex()` - Main index page (no segments or numeric segment)
- `matchEmojisCategory()` - Category page (single non-numeric segment)
- `matchEmojisCategoryPagination()` - Category with page (two segments, second is numeric)
- `matchEmojiSlug()` - Individual emoji (single segment that's not numeric and not a category)
- `matchEmojisCredits()` - Credits page
- `matchEmojisSitemap()` - Main sitemap

### Apple Emojis

- `matchAppleEmojisIndex()` - Apple index page
- `matchAppleEmojisCategory()` - Apple category page
- `matchAppleEmojisCategoryPagination()` - Apple category pagination
- `matchAppleEmojiSlug()` - Individual Apple emoji
- `matchAppleEmojisSitemap()` - Apple sitemap

### Discord Emojis

- `matchDiscordEmojisIndex()` - Discord index page
- `matchDiscordEmojisCategory()` - Discord category page
- `matchDiscordEmojisCategoryPagination()` - Discord category pagination
- `matchDiscordEmojiSlug()` - Individual Discord emoji
- `matchDiscordEmojisSitemap()` - Discord sitemap

**Key routing logic:**

- Index pagination: `/emojis/{page}/` where page is numeric
- Category: `/emojis/{category}/` where category is not numeric and not a known emoji slug
- Category pagination: `/emojis/{category}/{page}/` where page is numeric
- Emoji slug: `/emojis/{slug}/` where slug is not numeric and not a category
- Same pattern applies to `/apple-emojis/` and `/discord-emojis/` prefixes

## Templ Components

Create components in `components/pages/emojis/`:

### Regular Emojis

- `index.templ` - Main index page (port from `src/pages/emojis/index.astro`)
- `category.templ` - Category listing page with pagination (port from `src/pages/emojis/[category].astro`)
- `category_pagination.templ` - Category pagination page (port from `src/pages/emojis/[category]/[page].astro`)
- `emoji.templ` - Individual emoji detail page (port from `src/pages/emojis/[category].astro `emoji handling + `EachEmojiPage.astro`)
- `credits.templ` - Credits page (port from `src/pages/emojis/credits.astro`)
- `sitemap.go` - Sitemap generation handler

### Apple Emojis

- `apple/index.templ` - Apple emojis index page
- `apple/category.templ` - Apple category page
- `apple/category_pagination.templ` - Apple category pagination
- `apple/emoji.templ` - Individual Apple emoji page
- `apple/sitemap.go` - Apple sitemap handler

### Discord Emojis

- `discord/index.templ` - Discord emojis index page
- `discord/category.templ` - Discord category page
- `discord/category_pagination.templ` - Discord category pagination
- `discord/emoji.templ` - Individual Discord emoji page
- `discord/sitemap.go` - Discord sitemap handler

### Shared Components

- `helpers.go` - Shared helper functions (formatCategoryName, etc.)
- `components.go` - Port React components from `_EmojiComponents.tsx`:
- CopyButtons component (Go + Templ)
- ImageVariants component (Go + Templ)
- ShortcodesTable component (Go + Templ)

## Database Query Functions

Implement in `internal/db/emojis/queries.go`:

### Core Functions

- `GetEmojiCategories()` - All categories from database
- `GetTotalEmojis()` - Total emoji count
- `GetCategoriesWithPreviewEmojis(previewCount)` - Categories with preview emojis (optimized query)
- `GetEmojisByCategoryPaginated(category, page, itemsPerPage)` - Paginated emojis for a category (36 per page)
- `GetEmojiBySlug(slug)` - Get single emoji by slug
- `GetEmojiImages(slug)` - Get image variants for an emoji

### Apple-Specific Functions

- `GetAppleCategoriesWithPreviewEmojis(previewCount)` - Apple categories with previews
- `GetEmojisByCategoryWithAppleImagesPaginated(category, page, itemsPerPage)` - Apple emojis with images
- `GetAppleEmojiBySlug(slug)` - Get Apple emoji by slug
- `GetSitemapAppleEmojis()` - All Apple emojis for sitemap (lightweight, slug + category only)

### Discord-Specific Functions

- `GetDiscordCategoriesWithPreviewEmojis(previewCount)` - Discord categories with previews
- `GetEmojisByCategoryWithDiscordImagesPaginated(category, page, itemsPerPage)` - Discord emojis with images
- `GetDiscordEmojiBySlug(slug)` - Get Discord emoji by slug
- `GetSitemapDiscordEmojis()` - All Discord emojis for sitemap (lightweight, slug + category only)

### Sitemap Functions

- `GetSitemapEmojis()` - All emojis for main sitemap (lightweight, slug + category only)

**Note:** JSON columns (`shortcodes`, `senses`, `keywords`, `version`, etc.) need to be unmarshaled manually in Go.

## Caching Strategy

Implement in-memory cache with TTL in `internal/db/emojis/cache.go`:

- Total emojis count: 5 minutes
- Categories list: 5 minutes
- Categories with preview: 3 minutes
- Emojis by category: 3 minutes
- Individual emoji: 10 minutes
- Emoji images: 10 minutes
- Vendor-specific queries: Same TTLs as above

## Pagination

- **Index pages**: 30 categories per page
- **Category pages**: 36 emojis per page (for all three sections)
- Reuse existing pagination component and helpers from svg_icons/man_pages
- URL structure:
- Index page 1: `/emojis/`
- Index page N: `/emojis/{page}/`
- Category page 1: `/emojis/{category}/`
- Category page N: `/emojis/{category}/{page}/`
- Same pattern for `/apple-emojis/` and `/discord-emojis/`

## Sitemap Implementation

Create sitemap handlers in `components/pages/emojis/sitemap.go`, `components/pages/emojis/apple/sitemap.go`, and `components/pages/emojis/discord/sitemap.go`:

1. **Main emoji sitemap** (`/emojis/sitemap.xml`):

- Landing page URL
- Category pages (only allowed categories: Activities, Animals & Nature, Food & Drink, Objects, People & Body, Smileys & Emotion, Symbols, Travel & Places, Flags)
- Individual emoji pages

2. **Apple emojis sitemap** (`/emojis/apple-emojis/sitemap.xml`):

- Apple index page URL
- Apple category pages (only allowed categories)
- Individual Apple emoji pages

3. **Discord emojis sitemap** (`/emojis/discord-emojis/sitemap.xml`):

- Discord index page URL
- Discord category pages (only allowed categories)
- Individual Discord emoji pages

**Key points:**

- Clean XML output (no XSL stylesheet reference)
- Site URL read dynamically from `SITE` env var
- Filter categories to only allowed ones (exclude "Other")
- XML escaping for category/slug names

## Key Features to Implement

1. **Emoji Content Rendering**:

- Display emoji character (code)
- Show title, description, keywords
- Render image variants (3D, Color, Flat, High Contrast)
- Display shortcodes table
- Show senses (adjectives, verbs, nouns)
- Version information (emoji version, unicode version)
- Use `templ.Raw()` for HTML content where needed

2. **Vendor-Specific Logic**:

- Apple emojis: Filter out excluded emojis from `apple_vendor_excluded_emojis` list
- Discord emojis: Filter out excluded emojis from `discord_vendor_excluded_emojis` list
- Show vendor-specific descriptions (apple_vendor_description, discord_vendor_description)
- Display vendor-specific images (latestAppleImage, latestDiscordImage)

3. **Category Icons**:

- Use category icon map for index pages
- Apple: Use Apple vendor images for category icons
- Discord: Use Discord vendor images for category icons
- Regular: Use emoji characters for category icons

4. **Copy Functionality**:

- Port CopyButtons component to Go + Templ
- Support copying emoji character
- Support copying vendor shortcodes
- Use JavaScript for clipboard API

5. **Image Variants**:

- Port ImageVariants component to Go + Templ
- Support copying images to clipboard (convert WebP/SVG to PNG)
- Display image variants in grid layout

6. **Navigation Links**:

- Show links to Apple/Discord versions if available (and not excluded)
- Show link back to category
- Show breadcrumbs

## Files to Create/Modify

### Database Package

- `internal/db/emojis/schema.go` - Go structs matching TypeScript interfaces
- `internal/db/emojis/queries.go` - All database query functions
- `internal/db/emojis/cache.go` - Caching layer with TTL
- `internal/db/emojis/utils.go` - Helper functions (GetDBPath, etc.)

### Templ Components - Regular Emojis

- `components/pages/emojis/index.templ` - Main index page
- `components/pages/emojis/category.templ` - Category listing
- `components/pages/emojis/category_pagination.templ` - Category pagination
- `components/pages/emojis/emoji.templ` - Individual emoji page
- `components/pages/emojis/credits.templ` - Credits page
- `components/pages/emojis/sitemap.go` - Sitemap handler
- `components/pages/emojis/helpers.go` - Helper functions
- `components/pages/emojis/components.go` - Shared components (CopyButtons, ImageVariants, ShortcodesTable)

### Templ Components - Apple Emojis

- `components/pages/emojis/apple/index.templ` - Apple index
- `components/pages/emojis/apple/category.templ` - Apple category
- `components/pages/emojis/apple/category_pagination.templ` - Apple category pagination
- `components/pages/emojis/apple/emoji.templ` - Individual Apple emoji
- `components/pages/emojis/apple/sitemap.go` - Apple sitemap handler

### Templ Components - Discord Emojis

- `components/pages/emojis/discord/index.templ` - Discord index
- `components/pages/emojis/discord/category.templ` - Discord category
- `components/pages/emojis/discord/category_pagination.templ` - Discord category pagination
- `components/pages/emojis/discord/emoji.templ` - Individual Discord emoji
- `components/pages/emojis/discord/sitemap.go` - Discord sitemap handler

### Route Handlers

- `cmd/server/routes.go` - Add emoji route handlers (similar to `setupSVGIconsRoutes()` and `setupManPagesRoutes()`)
- `cmd/server/main.go` - Initialize emoji database connection
- Reuse existing middleware and static file serving

### Configuration

- `db/config/db_config.go` - Add EmojiDBConfig constant for connection string

## Implementation Steps

1. Create database package structure (`internal/db/emojis/`)
2. Implement schema.go with Go structs (EmojiData, EmojiImageVariants, CategoryWithPreview, etc.)
3. Implement queries.go with all database functions (regular, Apple, Discord)
4. Implement cache.go with TTL caching
5. Implement utils.go with helper functions
6. Create templ components for regular emojis (index, category, emoji, credits)
7. Create templ components for Apple emojis
8. Create templ components for Discord emojis
9. Port React components to Go + Templ (CopyButtons, ImageVariants, ShortcodesTable)
10. Add route handlers in routes.go for all three sections
11. Implement sitemap generation for all three sections
12. Add vendor exclusion logic (apple_vendor_excluded_emojis, discord_vendor_excluded_emojis)
13. Test all routes and pagination
14. Verify JSON content parsing and HTML rendering
15. Manually test URLs after building to verify functionality

## Test URLs to Verify

### Regular Emojis

- `/freedevtools/emojis/` - Index page (9 categories, 4,164 emojis)
- `/freedevtools/emojis/animals-nature/` - Category page
- `/freedevtools/emojis/animals-nature/5/` - Category pagination
- `/freedevtools/emojis/person-climbing-medium-dark-skin-tone/` - Individual emoji
- `/freedevtools/emojis/credits/` - Credits page
- `/freedevtools/emojis/sitemap.xml` - Sitemap

### Apple Emojis

- `/freedevtools/emojis/apple-emojis/` - Apple index
- `/freedevtools/emojis/apple-emojis/animals-nature/` - Apple category
- `/freedevtools/emojis/apple-emojis/animals-nature/5/` - Apple category pagination
- `/freedevtools/emojis/apple-emojis/palm-tree/` - Individual Apple emoji
- `/freedevtools/emojis/apple-emojis/sitemap.xml` - Apple sitemap

### Discord Emojis

- `/freedevtools/emojis/discord-emojis/` - Discord index
- `/freedevtools/emojis/discord-emojis/flags/` - Discord category
- `/freedevtools/emojis/discord-emojis/flags/8/` - Discord category pagination
- `/freedevtools/emojis/discord-emojis/flag-angola/` - Individual Discord emoji
- `/freedevtools/emojis/discord-emojis/sitemap.xml` - Discord sitemap

## Notes

- Follow the same patterns as svg_icons and man_pages conversions
- Use `database/sql` with `github.com/mattn/go-sqlite3` driver
- SQLite connection string: Use `EmojiDBConfig` from `db/config/db_config.go` (similar to SVG/man-pages)
- Connection pool: 4 max open/idle connections (matching current setup)
- Database path: `db/all_dbs/emoji-db-v4.db`
- JSON columns need explicit unmarshaling
- Route matching must distinguish between numeric (pagination) and non-numeric (category/slug) segments
- Vendor exclusion lists are in `emojis-consts.ts` - port to Go constants
- Handle emoji complexity for display sizing (grapheme count, ZWJ count)
- Support Ctrl/Cmd+Click for copy functionality on emoji cards

## Test by curling the endpoint to localhost

here are the prodcution urls and pages
https://hexmos.com/freedevtools/emojis/ is the index page
9
Categories
4,164
Emojis
Showing 9 of 9 categories (Page 1 of 1)
https://hexmos.com/freedevtools/emojis/animals-nature/5/#pagination-info
https://hexmos.com/freedevtools/emojis/activities/ one of the 9 categories
https://hexmos.com/freedevtools/emojis/person-climbing-medium-dark-skin-tone/ one of the emoji in activities category

https://hexmos.com/freedevtools/emojis/apple-emojis/ apple emoji index
https://hexmos.com/freedevtools/emojis/apple-emojis/animals-nature/ apple emoji one of category
153
Emojis
5
Pages
Showing 36 of 153 emojis (Page 1 of 5)
https://hexmos.com/freedevtools/emojis/apple-emojis/animals-nature/5/#pagination-info
https://hexmos.com/freedevtools/emojis/apple-emojis/palm-tree/ apple emoji one of emoji in animals and nature category

https://hexmos.com/freedevtools/emojis/discord-emojis/ discord emoji index
https://hexmos.com/freedevtools/emojis/discord-emojis/flags/ one of category in discord emoji
269
Emojis
8
Pages
https://hexmos.com/freedevtools/emojis/discord-emojis/flags/8/#pagination-info
https://hexmos.com/freedevtools/emojis/discord-emojis/flag-angola/ one of emoji in discord emoji's flag category
