# Sitemap Lookup Tool

This tool allows you to download all sitemaps for `hexmos.com/freedevtools` and check if a specific URL exists within them.

## Installation

Ensure you have Go installed.

## Usage

### 1. Download all sitemaps locally
This command recursively fetches the root sitemap and all sub-sitemaps (e.g., svg-icons, png-icons, etc.) and saves them in the `sitemaps/` directory.

```bash
make download
```

### 2. Check if a URL exists
Run this command to search for a specific URL across all downloaded sitemap files.

```bash
make check url=https://hexmos.com/freedevtools/t/json-to-yaml
```

## How it works
- **Download**: Parses `sitemapindex` files and recursively downloads every linked `.xml` sitemap.
- **Check**: Iterates through the local `sitemaps/` directory, parses each XML file, and looks for the exact URL match.
