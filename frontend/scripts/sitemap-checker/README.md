# Sitemap URL Checker

This is a tool for loading URLs from sitemaps or JSON files and checking their HTTP status codes and indexability. It supports high concurrency, HEAD/GET requests, and optional PDF/JSON reports.



## Usage

Build:

```bash
go build -o sitemap-checker
```

Run with a sitemap:

```bash
./sitemap-checker --sitemap=https://example.com/sitemap.xml
```

Run with a JSON file:

```bash
./sitemap-checker --input=urls.json
```

Limit pages:

```bash
./sitemap-checker --maxPages=50
```

Use HEAD requests only:

```bash
./sitemap-checker --head
```

Choose output format:

```bash
--output=pdf
--output=json
--output=both
```

Set concurrency:

```bash
./sitemap-checker --concurrency=300
```

Mode (affects URL rewriting via `ToOfflineUrl`):

```bash
--mode=local
--mode=prod
```

---

## JSON Input Format

`urls.json`:

```json
[
  "https://example.com/",
  "https://example.com/page1",
  "https://example.com/page2"
]
```

---

## What It Does

1. Loads URLs from:

   * XML sitemap (supports sitemap index)
   * JSON list

2. Optionally rewrites each URL using `ToOfflineUrl`.

3. Spawns N workers (default 200).

4. Workers call `checkUrl()` using GET or HEAD.

5. Collects results and saves them as PDF, JSON, or both.



## Output

Files are saved with timestamps, e.g.:

```
sitemap_report_2025-11-14_19-42.pdf
sitemap_report_2025-11-14_19-42.json
```

