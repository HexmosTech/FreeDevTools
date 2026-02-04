# Scripts Directory

This directory contains various utility scripts for managing and analyzing the FreeDevTools project.

## Available Commands

Run commands from the project root using `make -C scripts <command>` or `cd scripts && make <command>`.

### URL Analysis

#### `categorize-urls`
Categorizes URLs from `crawled_not_indexed.csv` and displays statistics showing:
- Total number of URLs
- Number of categories found
- Count and percentage breakdown by category

```bash
make categorize-urls
```

Categories include: `man-pages`, `png_icons`, `svg_icons`, `man_pages`, `mcp`, `tldr`, `emojis`, `installerpedia`, `journal`, `www`, and others.

### Emoji Management

#### `emoji-blob-to-files`
Extracts emoji images from the database to `public/emojis/` directory.

```bash
make emoji-blob-to-files
```

#### `add-emoji-indexes`
Adds composite indexes for Apple and Discord images query optimization.

```bash
make add-emoji-indexes
```

#### `verify-indexes`
Verifies and creates emoji indexes in the database.

```bash
make verify-indexes
```

#### `optimize-order-by-indexes`
Adds indexes to optimize ORDER BY performance for emoji queries.

```bash
make optimize-order-by-indexes
```

### Man Pages Management

#### `optimize-man-pages-indexes`
Adds indexes to optimize man pages queries.

```bash
make optimize-man-pages-indexes
```

#### `create_html_content`
Creates HTML content column for man pages.

```bash
make create_html_content
```

#### `drop_content_column`
Drops the content column from the man_pages table.

```bash
make drop_content_column
```

## Script Files

- `categorize_urls.py` - Categorizes and analyzes URLs from CSV files
- `analyze_search_urls.py` - Analyzes search URLs
- `show_other_logs.py` - Displays various logs
- `clean_404.py` - Cleans up 404 errors
- Various emoji and man-pages management scripts in subdirectories

