# FDT Templ Project

A starter project using [Templ](https://templ.guide), [Templ UI](https://templui.io), and Tailwind CSS.

## Prerequisites

- Go 1.21 or later
- Node.js and npm
- [Templ CLI](https://templ.guide/install) (installed via `make install`)

## Installation

### Option 1: Using Makefile (Recommended)

Install all dependencies:
```bash
make install
```

This will:
- Install Go dependencies
- Install Node.js dependencies  
- Install Templ CLI globally

### Option 2: Using Nix (Reproducible Environment)

If you have Nix installed, you can use the flake for a fully reproducible environment:

```bash
# Enter the development shell (includes Go, Node, and Templ)
nix develop

# Or if using direnv
direnv allow
```

The Nix flake provides:
- Go (latest)
- Node.js and npm
- Templ CLI
- All tools in consistent versions

## Development

### Using Makefile

Run the development server:
```bash
make run
```

This will:
- Generate templ files
- Build Tailwind CSS
- Start the server on port 8080

For development with file watching, run in separate terminals:
```bash
# Terminal 1: Run the server
make dev

# Terminal 2: Watch for changes
make watch
```

### Using Nix + Makefile

```bash
# Enter Nix shell
nix develop

# Then use make commands as usual
make run
```

## Available Make Targets

- `make install` - Install all dependencies
- `make run` - Generate, build CSS, and run the server
- `make dev` - Run the development server
- `make watch` - Watch for templ and CSS changes
- `make generate` - Generate templ files
- `make build-css` - Build Tailwind CSS
- `make build` - Build the application binary
- `make clean` - Clean build artifacts
- `make test` - Run tests
- `make help` - Show all available targets

### URL Analysis Commands

**Prerequisites:** Before running URL analysis commands, download the 404 pages report from Google Search Console:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (hexmos.com)
3. Navigate to **Coverage** → **Excluded** → **Not found (404)**
4. Export the data as CSV
5. Save it as `Table.csv` in the root of the project folder

The CSV should have columns: `URL` and `Last crawled` (or similar).

**Workflow:**

1. **Download 404 data from Google Search Console**
   - Export 404 pages report as CSV
   - Save as `Table.csv` in project root

2. **Analyze all URLs:**
   ```bash
   make analyze-search-404-urls
   ```
   - Analyzes URLs from `Table.csv`, checks their HTTP status codes
   - Generates `url_status_results.csv` with detailed status information
   - Includes redirect chains (301→200, 301→404, etc.)
   - Provides summary by category and status code

3. **Analyze man-pages 404s by depth:**
   ```bash
   make analyze-man-pages-404
   ```
   - Analyzes man-pages 404 URLs by URL depth level
   - Categorizes into:
     - Level 1: `man-pages/main-category` (1 part after man-pages)
     - Level 2: `man-pages/category/subcategory` (2 parts)
     - Level 3: `man-pages/category/subcategory/detail` (3 parts)
     - Level 4+: `man-pages/category/subcategory/extra/slug` (4+ parts)
   - Generates separate CSV files in `man-pages-stuff/` for each depth level

4. **Root cause analysis for level 2 404s:**
   ```bash
   make rca-man-pages-level2
   ```
   - Analyzes why level 2 URLs are failing
   - Identifies issues like:
     - Numeric slug misrouting (treated as pagination instead of subcategory)
     - Short slugs (likely missing subcategory)
     - Subcategory not found in database
   - Provides recommendations for each issue

5. **Test level 2 URLs (after fixes):**
   ```bash
   make test-man-pages-level2
   ```
   - Tests URLs from `man_pages_404_level_2_sub_category.csv`
   - Verifies pagination fallback is working
   - Checks if URLs redirect to category home pages instead of 404

## Project Structure

```
.
├── assets/
│   └── css/
│       ├── input.css    # Tailwind CSS input
│       └── output.css   # Generated CSS (gitignored)
├── cmd/
│   └── server/
│       └── main.go      # Main server file
├── components/
│   ├── layout.templ     # Layout component
│   └── pages/
│       └── index.templ  # Index page
├── flake.nix            # Nix flake for reproducible environment
├── go.mod
├── Makefile             # Build automation
├── package.json
├── tailwind.config.js
└── Taskfile.yml         # Alternative task runner (optional)
```

## Choosing Between Nix and Makefile

**Use Makefile if:**
- You want simplicity and universal compatibility
- You already have Go and Node.js installed
- You prefer traditional build tools

**Use Nix if:**
- You want 100% reproducible builds
- You work on multiple projects with different tool versions
- You want to ensure everyone uses the exact same environment
- You're already using Nix for other projects

**Best of Both Worlds:**
- Use Nix for environment management
- Use Makefile for task automation
- Run `nix develop` then `make run`

## Profiling
To profile the application performance:

1. Ensure the server is running (e.g., `make run`).
2. Run the crawler or load generator (like `vegeta` or `wrk`) in the background to generate traffic. This ensures the profiler captures active workload data.
3. Run the pprof tool to analyze CPU usage:
```bash
go tool pprof -http=:8080 http://localhost:4321/debug/pprof/profile
```
This will capture a 30-second CPU profile and open a web interface at `http://localhost:8080` where you can visualize consumption.

## Resources

- [Templ Documentation](https://templ.guide)
- [Templ UI Documentation](https://templui.io/docs/how-to-use)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Nix Flakes Documentation](https://nixos.wiki/wiki/Flakes)


## Working with DB Files on Backblaze B2

To add or update a database (DB) file for a category:

1. **Upload or Update the DB File**
   - Use the following command, replacing the path as needed:

     ```
     make update-db-to-b2 path/to/your-db.db
     ```

   - **Naming Convention:** Follow consistent naming for all DB files.

   - **Important:** Do **not** commit DB files to the repo.

2. **Sync the Database Files from B2 to Local**

   After uploading, verify the file by syncing from Backblaze B2 to your local environment:

   ```
   make sync-db-to-local
   ```

3. **Check Synced Files**
   - List the locally synced DB files:
     ```
     ls db/all_dbs/
     ```

4. **Referencing in Code**
   - Always reference database files in your code using the path:  
     `db/all_dbs/your-db.db`

## Working with Public Files on Backblaze B2

To sync or update public files (emojis, images, static assets):

1. **Sync Public Files from B2 to Local**
   
   Download the latest public files from Backblaze B2 to your local environment:
   
   ```
   make sync-public-to-local
   ```
   
   This will sync all files from `b2-config:hexmos/freedevtools/content/public/` to your local `public/` directory.

2. **Upload Public Directory to B2**
   
   After making changes to files in the `public/` directory, upload them to Backblaze B2:
   
   ```
   make update-public-to-b2
   ```
   
   This uploads all files from your local `public/` directory to Backblaze B2.

3. **Check Synced Files**
   - List the locally synced public files:
     ```
     ls public/
     ```
   - For emoji files specifically:
     ```
     ls public/emojis/
     ```

4. **Referencing in Code**
   - Always reference public files in your code using the path:  
     `/freedevtools/public/your-file-path`
   - For emoji images, use:  
     `/freedevtools/public/emojis/{emoji_slug}/{filename}`
   - For apple-vendor emojis, use:  
     `/freedevtools/public/emojis/{emoji_slug}/apple-emojis/{filename}`

5. **Important Notes**
   - The sync uses checksum verification to ensure file integrity
   - Public files are not committed to the repo (use `.gitignore`)
   - Always verify synced files after downloading from B2


## See Also and Search Index Deployment Docs

Refer to the [search-index/README.md](search-index/README.md#how-to-index-search-and-deploy-search-index) for details on deploying the search index and see also.
