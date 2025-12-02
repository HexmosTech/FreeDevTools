# Sitemap URL Checker

This is a robust tool for validating sitemaps and checking the health of your URLs. It supports high concurrency, recursive sitemap index fetching, and comparing local sitemaps against production.

## Features

- **Recursive Fetching**: Automatically detects sitemap indices and fetches all sub-sitemaps.
- **Comparison Mode**: Compares a local sitemap against a production sitemap to find missing or extra URLs.
- **High Performance**: Spawns multiple concurrent workers (default 200) for fast checking.
- **Flexible Input**: Accepts XML sitemaps or JSON files.
- **Detailed Reporting**: Generates PDF and JSON reports with summary tables and detailed issue tracking.
- **Smart URL Derivation**: Automatically derives production URLs from local inputs and vice-versa for comparison.

## Installation

Ensure you have Go installed. Then build the tool:

```bash
go build -o sitemap-checker
```

## Usage

### Basic Health Check

Check a sitemap for broken links and indexability issues:

```bash
./sitemap-checker --sitemap=https://example.com/sitemap.xml
```

### Compare Local vs. Production

Compare your local development sitemap with the live production sitemap to ensure no URLs are missing or unexpectedly added.

**If you provide a Local URL:**
The tool automatically derives the Production URL (replacing `localhost:4321` with `hexmos.com`).

```bash
./sitemap-checker --sitemap=http://localhost:4321/freedevtools/sitemap.xml --compare-prod --mode=local
```

**If you provide a Production URL:**
The tool automatically derives the Local URL.

```bash
./sitemap-checker --sitemap=https://hexmos.com/freedevtools/sitemap.xml --compare-prod --mode=local
```

### Other Options

| Flag | Description | Default |
| :--- | :--- | :--- |
| `--sitemap` | URL of the sitemap to check. | |
| `--input` | Path to a JSON file containing a list of URLs. | |
| `--concurrency` | Number of concurrent workers. | `200` |
| `--mode` | `local` (rewrites URLs to localhost) or `prod`. | `local` |
| `--maxPages` | Limit the number of pages to check (useful for testing). | `0` (unlimited) |
| `--head` | Use HEAD requests only (faster, checks status only). | `false` |
| `--output` | Output format: `pdf`, `json`, or `both`. | `pdf` |
| `--compare-prod` | Enable comparison mode. | `false` |

### Using Make

You can also use the provided `Makefile` for convenience:

```bash
# Run with default settings (checks local sitemap)
make run

# Run with custom sitemap and comparison enabled
make run SITEMAP=http://localhost:4321/freedevtools/sitemap.xml COMPARE_PROD=true
```

## Output

The tool generates a report with a timestamped filename:

- **PDF Report** (`sitemap_report_YYYY-MM-DD_HH-MM.pdf`):
  - **Summary Table**: Overview of comparison status and indexability health.
  - **Comparison Details**: Lists missing or extra URLs (if any).
  - **Indexability Details**: Detailed list of all checked URLs with status codes and issues.

- **JSON Report** (`sitemap_report_YYYY-MM-DD_HH-MM.json`):
  - Raw data of the check results.

## JSON Input Format

If you prefer to provide a list of URLs via JSON:

`urls.json`:

```json
[
  "https://example.com/",
  "https://example.com/page1",
  "https://example.com/page2"
]
```
