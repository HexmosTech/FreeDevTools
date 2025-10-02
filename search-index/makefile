.PHONY: build run clean test

# Build the Go binary
build:
    go build -o search-index .

# Run the search index generator
run:
    go run .

gen-tools:
	go run . category tools

gen-tldr:
	go run . category tldr

gen-emojis:
	go run . category emojis

gen-svg-icons:
	go run . category svg_icons

gen-cheatsheets:
	go run . category cheatsheets

gen-all:
	go run .

sync-search-index:
    @echo "🔄 Starting search index sync process..."
    @echo "📊 Step 1: Generating search index files..."
    go run .
    @echo "📤 Step 2: Transferring files to remote server..."
    ./transfer-index-files.sh
    @echo "✅ Search index sync completed!"
