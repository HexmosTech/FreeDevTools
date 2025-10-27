# Search Index

Indexing tools to meilisearch is a three step process:

1. Collecting data using go routine and creating a structued json.
2. Transfering this Json Data into remote server.
3. Indexing the data to the meili search database.

This directory contains a Go program that generates JSON data structures for search indexing across different categories of content in the FreeDevTools project.

## Overview

The search index generator creates structured JSON files for six main categories:

- **Tools**: Web development tools and utilities
- **TLDR Pages**: Command-line tool documentation
- **Emojis**: Emoji data with metadata
- **SVG Icons**: Vector icons organized by clusters
- **Cheatsheets**: Programming language and framework cheat sheets
- **MCP**: Model Context Protocol servers and repositories

## Data Structure for Each Category

### 1. Tools Data Structure

```go
type ToolData struct {
    ID          string `json:"id"`          // Unique identifier: "tools-{slug}"
    Name        string `json:"name"`        // Display name of the tool
    Description string `json:"description"` // Tool description
    Path        string `json:"path"`        // URL path: "/freedevtools/tools/{slug}"
    Category    string `json:"category"`    // Always "tools"
}
```

**Example JSON Output:**

```json
{
  "id": "tools-json-formatter",
  "name": "JSON Formatter",
  "description": "Format and validate JSON data with syntax highlighting",
  "path": "/freedevtools/tools/json-formatter",
  "category": "tools"
}
```

### 2. TLDR Data Structure

```go
type TLDRData struct {
    ID          string `json:"id"`          // Unique identifier: "tldr-{category}-{name}"
    Name        string `json:"name"`        // Command name
    Description string `json:"description"` // Command description from frontmatter
    Path        string `json:"path"`        // URL path from frontmatter
    Category    string `json:"category"`    // Always "tldr"
}
```

**Example JSON Output:**

```json
{
  "id": "tldr-common-grep",
  "name": "grep",
  "description": "Search text patterns in files with grep command",
  "path": "/freedevtools/tldr/common/grep",
  "category": "tldr"
}
```

### 3. Emoji Data Structure

```go
type EmojiData struct {
    ID          string `json:"id"`          // Unique identifier: "emojis-{slug}"
    Name        string `json:"name"`        // Display name/title
    Code        string `json:"code"`        // Unicode character or glyph
    Description string `json:"description"` // Emoji description
    Path        string `json:"path"`        // URL path: "/freedevtools/emoji/{slug}"
    Category    string `json:"category"`    // Always "emojis"
}
```

**Example JSON Output:**

```json
{
  "id": "emojis-smiling-face",
  "name": "Smiling Face",
  "code": "😊",
  "description": "A yellow face with smiling eyes and a broad, closed smile",
  "path": "/freedevtools/emoji/smiling-face",
  "category": "emojis"
}
```

### 4. SVG Icons Data Structure

```go
type SVGIconData struct {
    ID          string `json:"id"`          // Unique identifier: "svg-icons-{cluster}-{filename}"
    Name        string `json:"name"`        // Display name
    Description string `json:"description"` // Icon description
    Path        string `json:"path"`        // URL path: "/freedevtools/svg_icons/{cluster}/{filename}"
    Image       string `json:"image"`       // Image path: "/svg_icons/{cluster}/{filename}.svg"
    Category    string `json:"category"`    // Always "svg_icons"
}
```

**Example JSON Output:**

```json
{
  "id": "svg-icons-arrow-arrow-up",
  "name": "Arrow Up",
  "description": "An upward pointing arrow icon",
  "path": "/freedevtools/svg_icons/arrow/arrow-up",
  "image": "/svg_icons/arrow/arrow-up.svg",
  "category": "svg_icons"
}
```

### 5. Cheatsheets Data Structure

```go
type CheatsheetData struct {
    ID          string `json:"id"`          // Unique identifier: "cheatsheets-{category}-{name}"
    Name        string `json:"name"`        // Cheatsheet name
    Description string `json:"description"` // Description from frontmatter
    Path        string `json:"path"`        // URL path from frontmatter
    Category    string `json:"category"`    // Always "cheatsheets"
}
```

**Example JSON Output:**

```json
{
  "id": "cheatsheets-python-basics",
  "name": "Python Basics",
  "description": "Essential Python syntax and programming fundamentals",
  "path": "/freedevtools/c/python/basics/",
  "category": "cheatsheets"
}
```

### 6. MCP Data Structure

```go
type MCPData struct {
    ID          string `json:"id"`          // Unique identifier: "mcp-{category}-{repo-key}"
    Name        string `json:"name"`        // Repository name
    Description string `json:"description"` // Repository description
    Path        string `json:"path"`        // URL path: "/freedevtools/mcp/{category}/{repo-key}/"
    Category    string `json:"category"`    // Always "mcp"
    Owner       string `json:"owner"`       // Repository owner
    Stars       int    `json:"stars"`       // GitHub stars count
    Language    string `json:"language"`    // Primary programming language
}
```

**Example JSON Output:**

```json
{
  "id": "mcp-official-servers-apify--apify-mcp-server",
  "name": "apify-mcp-server",
  "description": "Enable interaction with various Apify Actors to perform specific tasks through an MCP server configuration",
  "path": "/freedevtools/mcp/official-servers/apify--apify-mcp-server/",
  "category": "mcp",
  "owner": "apify",
  "stars": 429,
  "language": "TypeScript"
}
```

## Creating Go Program for Generating JSON Structure

### Main Program Structure (`main.go`)

The main program orchestrates the generation of all data categories using goroutines for concurrent processing

```go
func main() {
    // Parse command line arguments for category-specific generation
    category := parseCategory()

    if category != "" {
        runSingleCategory(category)
        return
    }

    // Generate all categories concurrently
    ctx := context.Background()
    start := time.Now()

    // Create channels for each data type
    toolsChan := make(chan []ToolData, 1)
    tldrChan := make(chan []TLDRData, 1)
    emojisChan := make(chan []EmojiData, 1)
    svgIconsChan := make(chan []SVGIconData, 1)
    cheatsheetsChan := make(chan []CheatsheetData, 1)
    mcpChan := make(chan []MCPData, 1)
    errorsChan := make(chan error, 6)

    var wg sync.WaitGroup
    wg.Add(6)

    // Launch goroutines for each category
    go func() {
        defer wg.Done()
        tools, err := generateToolsData(ctx)
        if err != nil {
            errorsChan <- err
            return
        }
        toolsChan <- tools
    }()

    // ... similar for other categories

    // Collect results and save to JSON files
    // Write each category to output/{category}.json
}
```

### Category-Specific Generators

Each category has its own generator function:

- `generateToolsData(ctx)` - Processes tool configurations
- `generateTLDRData(ctx)` - Parses TLDR markdown files with YAML frontmatter
- `generateEmojisData(ctx)` - Processes emoji JSON files from directory structure
- `generateSVGIconsData(ctx)` - Processes SVG clusters and generates icon metadata
- `generateCheatsheetsData(ctx)` - Parses cheatsheet markdown files
- `generateMCPData(ctx)` - Processes MCP repository data from input JSON

### Building and Running

```bash
# Build the binary
go build -o search-index .

# Run all categories
go run .

# Run specific category
go run . category=tools
go run . category=tldr
go run . category=emojis
go run . category=svg_icons
go run . category=cheatsheets
go run . category=mcp

# Process JSON files with text stemming
go run . stem=output/emojis.json
go run . stem=output/tools.json
go run . stem=output/tldr_pages.json
```

## Text Stemming Processing

The search index generator includes advanced text processing capabilities using the [jargon](https://github.com/clipperhouse/jargon) library for improved search functionality.

### Stem Processing Features

The stem processing applies three key transformations to text data:

1. **Contractions Expansion**: Expands contractions (e.g., "don't" → "do not")
2. **ASCII Folding**: Normalizes Unicode characters to ASCII equivalents
3. **English Stemming**: Reduces words to their root forms (e.g., "running" → "run")

### Usage

```bash
# Process any JSON file with stemming
go run . stem=filepath.json

# Example:
go run . stem=output/emojis.json
```

### Output Structure

After processing, JSON objects will include additional fields:

```json
{
  "id": "emojis-smiling-face",
  "name": "Smiling Face",
  "altName": "smil face", // Processed version of name
  "description": "A yellow face...",
  "altDescription": "a yellow face...", // Processed version of description
  "code": "😊",
  "path": "/freedevtools/emoji/smiling-face",
  "category": "emojis"
}
```

### Performance

- **Parallel Processing**: Uses multiple workers (CPU count - 1) for fast processing
- **Speed**: ~123µs per entry on modern hardware
- **Memory Efficient**: Processes large datasets without memory issues

### Processing Pipeline

1. **File Validation**: Checks if the target JSON file exists in `output/` directory
2. **JSON Parsing**: Loads and parses the JSON data structure
3. **Parallel Processing**: Distributes work across multiple goroutines
4. **Text Processing**: Applies contractions, ASCII folding, and stemming
5. **Progress Tracking**: Shows examples and progress updates
6. **File Output**: Saves processed data back to the original file

### Example Output

```
🔍 Processing emojis file: output/emojis.json
📊 Found 2812 entries to process
🚀 Using 7 workers for parallel processing
📝 Example 1:
   Name: 'Adhesive Bandage' → altName: 'adhes bandag'
   Description: 'An adhesive bandage...' → altDescription: 'an adhes bandag...'

⏳ Processed 100/2812 entries...
⏳ Processed 200/2812 entries...
...
✅ Processing completed!
📈 Statistics:
   • Entries processed: 2812
   • Workers used: 7
   • Time taken: 347.633132ms
   • Average time per entry: 123.624µs
```

## Integration with transfer-index-files.sh

The [`transfer-index-files.sh`](transfer-index-files.sh) script handles transferring generated JSON files to the remote search server. You need to add new categories to **line 10**:

```bash
# Line 10 in transfer-index-files.sh
FILES=("tools.json" "tldr_pages.json" "emojis.json" "svg_icons.json" "cheatsheets.json" "mcp.json")
```

**To add a new category (e.g., "tutorials"):**

```bash
# Update line 10 to include the new file
FILES=("tools.json" "tldr_pages.json" "emojis.json" "svg_icons.json" "cheatsheets.json" "tutorials.json")
```

### Transfer Process

The script performs these steps:

1. **Validation**: Checks that all required JSON files exist in `output/` directory
2. **Remote Setup**: Creates remote directory and transfers the `index-fdt.sh` script
3. **File Transfer**: Uses `rsync` to transfer each JSON file to the remote server
4. **Remote Indexing**: Executes `index-fdt.sh` on the remote server to update the search index

## Makefile Details

The [`makefile`](makefile) provides convenient commands for building and generating search index data:

### Available Commands

```bash
# Build the Go binary
make build

# Run the search index generator (all categories)
make run

# Generate specific categories
make gen-tools        # Generate tools.json
make gen-tldr         # Generate tldr_pages.json
make gen-emojis       # Generate emojis.json
make gen-svg-icons    # Generate svg_icons.json
make gen-png-icons    # Generate png_icons.json
make gen-cheatsheets  # Generate cheatsheets.json
make gen-mcp          # Generate mcp.json

# Generate all categories
make gen-all

# Process JSON files with stemming
make stem              # Process emojis.json with stemming

# Complete sync process (generate + transfer + index)
make sync-search-index
```

### Sync Process

The `sync-search-index` target performs the complete workflow:

1. **Generation**: Runs `go run .` to generate all JSON files
2. **Transfer**: Executes `./transfer-index-files.sh` to upload files
3. **Indexing**: Triggers remote indexing via SSH

## Adding New Categories

To add a new category (e.g., "tutorials"), follow these steps:

### 1. Define Data Structure

Add the new type to [`types.go`](types.go):

```go
type TutorialData struct {
    ID          string `json:"id"`
    Name        string `json:"name"`
    Description string `json:"description"`
    Path        string `json:"path"`
    Category    string `json:"category"`
}
```

### 2. Create Generator Function

Create a new file `tutorials.go`:

```go
package main

import (
    "context"
    "fmt"
)

func generateTutorialsData(ctx context.Context) ([]TutorialData, error) {
    var tutorials []TutorialData

    // Your generation logic here
    // Process files, parse data, create TutorialData structs

    return tutorials, nil
}
```

### 3. Update Main Function

Modify [`main.go`](main.go):

- Add channel for new category
- Add goroutine for generation
- Add case in result collection loop
- Add to file saving logic

### 4. Update Transfer Script

Add the new JSON file to [`transfer-index-files.sh`](transfer-index-files.sh) line 10:

```bash
FILES=("tools.json" "tldr_pages.json" "emojis.json" "svg_icons.json" "cheatsheets.json" "tutorials.json")
```

### 5. Update Makefile

Add new targets to [`makefile`](makefile):

```makefile
gen-tutorials:
    go run . category tutorials
```

### 6. Update Remote Indexing

**Important**: You must also edit the `index-fdt` script in the **search-sync repository** (`freedevtools/search-sync`) to handle the new category in the search index configuration.

The search-sync repository contains the indexing logic that processes these JSON files and updates the search engine. Without updating `index-fdt`, the new category data will be transferred but not indexed for search.

## Output Files

Generated JSON files are saved to the [`output/`](output/) directory:

- `tools.json` - Tools data
- `tldr_pages.json` - TLDR pages data
- `emojis.json` - Emoji data
- `svg_icons.json` - SVG icons data
- `cheatsheets.json` - Cheatsheets data
- `mcp.json` - MCP repositories data

You can track the status,logs or progress of indexing from meilisearch-ui(https://github.com/riccox/meilisearch-ui)
