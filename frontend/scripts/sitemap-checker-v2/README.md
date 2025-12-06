# Sitemap Checker V2

Simple Go program that extracts all URLs from sitemaps (recursively fetching sub-sitemaps) and saves them to text files.

## Usage

```bash
cd sitemap-checker-v2
make svg    # Extract SVG icons URLs
make png    # Extract PNG icons URLs
make emoji  # Extract emojis URLs
make clean  # Remove all output files and logs
```

## Output Files

All output files are saved in timestamped folders under `logs/`:
- `logs/YYYY-MM-DD_HH-MM-SS/urls-prod-<type>.txt` - All URLs from production sitemap (one URL per line)
- `logs/YYYY-MM-DD_HH-MM-SS/urls-local-<type>.txt` - All URLs from local sitemap (one URL per line)

Each run creates a new timestamped folder, so you can keep a history of all extractions.

## How It Works

1. Fetches the main sitemap XML using Go's HTTP client
2. Parses XML to detect if it's a sitemap index or URL set
3. If it's a sitemap index (contains sub-sitemaps), recursively fetches all sub-sitemaps
4. Extracts all `<url><loc>` entries (ignores `<sitemap><loc>` entries)
5. Saves all URLs to a simple text file (one URL per line, no XML metadata)

## Building

The Makefile automatically builds the Go binary when you run `make svg`, `make png`, or `make emoji`. You can also build manually:

```bash
go build -o extract-urls extract-urls.go
```

## Examples

```bash
# Extract SVG icons URLs
make svg

# Extract PNG icons URLs  
make png

# Extract emojis URLs
make emoji

# Clean all files
make clean
```

