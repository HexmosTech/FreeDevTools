# TLDR to DB Converter

This Go script parses TLDR pages (markdown files) and populates a SQLite database.

## Prerequisites

- Go installed (1.18+)
- SQLite3

## Directory Structure

The script expects the following directory structure relative to its location:

- Input Data: `../../data/tldr` (Contains the TLDR markdown files)
- Output Database: `../../db/all_dbs/tldr-db-v1.db`

## Setup

1. Navigate to the script directory:
   ```bash
   cd scripts/tldr
   ```

2. Install dependencies:
   ```bash
   go mod tidy
   ```

## Usage

Run the script using:

```bash
go run tldr_to_db.go
```

The script will:
1. Create/Reset the database at `../../db/all_dbs/tldr-db.db`.
2. Walk through the `../../data/tldr` directory.
3. Parse each markdown file (frontmatter, content, examples).
4. Insert the data into the database.
5. Populate cluster and overview tables.

## Output

The script outputs progress to the console and prints the total time taken upon completion.
