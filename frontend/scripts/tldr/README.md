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

## How it Works

The `tldr_to_db.go` script performs the following steps to transform raw markdown files into a structured SQLite database:

### 1. Database Initialization

- Creates the database file at `../../db/all_dbs/tldr-db-v1.db`.
- Defines the schema with three main tables:
  - **`pages`**: Stores individual command pages.
    - `url_hash` (PK): Integer hash of the URL.
    - `url`: The full path (e.g., `/freedevtools/tldr/common/tar/`).
    - `cluster_hash`: Integer hash of the cluster name (FK).
    - `html_content`: Rendered HTML from markdown.
    - `metadata`: JSON string containing title, description, keywords, etc.
  - **`cluster`**: Stores metadata for command groups (platforms like `common`, `linux`).
    - `hash` (PK): Integer hash of the cluster name.
    - `name`: Cluster name (e.g., `common`).
    - `count`: Total number of commands in the cluster.
    - `preview_commands_json`: JSON array of the first 5 commands for preview.
  - **`overview`**: Stores global statistics.
    - `total_count`: Total number of commands across all platforms.

### 2. File Parsing

- Walks through the `../../data/tldr` directory.
- Parses each `.md` file:
  - Extracts **Frontmatter** (YAML) for metadata like title and description.
  - Renders **Markdown Body** to HTML using `gomarkdown`.
  - Generates a unique **URL Hash** based on the category and filename.

### 3. Data Insertion

- **Pages**: Inserts every parsed page into the `pages` table.
- **Clusters**:
  - Groups pages by their platform (cluster).
  - Sorts pages alphabetically within each cluster.
  - Generates a preview JSON for the first 5 commands.
  - Inserts the aggregated data into the `cluster` table.
- **Overview**: Inserts the total count of processed pages into the `overview` table.

This approach ensures that the frontend can efficiently fetch:

- Individual pages by URL hash.
- Cluster summaries (for lists and pagination) by cluster hash.
- Global stats from the overview table.
