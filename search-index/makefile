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
	go run . category all