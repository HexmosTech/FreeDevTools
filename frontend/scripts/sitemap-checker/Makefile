# -----------------------------
# Makefile for Sitemap Checker
# -----------------------------

# Binary name
BINARY := sitemap-checker

# Default flags (can be overridden from CLI)
SITEMAP ?= http://localhost:4321/freedevtools/tldr/sitemap.xml
INPUT ?= 
CONCURRENCY ?= 24 
MODE ?= local
MAXPAGES ?= 0
OUTPUT ?= pdf
HEAD ?= false

# -----------------------------
# Targets
# -----------------------------

# Build the binary
build:
	go build -o $(BINARY) .

# Run without building (like `go run .`)
run:
	go run . \
		--sitemap=$(SITEMAP) \
		--input=$(INPUT) \
		--concurrency=$(CONCURRENCY) \
		--mode=$(MODE) \
		--maxPages=$(MAXPAGES) \
		--output=$(OUTPUT) \
		--head=$(HEAD)

# Run the built binary
run-bin: build
	./$(BINARY) \
		--sitemap=$(SITEMAP) \
		--input=$(INPUT) \
		--concurrency=$(CONCURRENCY) \
		--mode=$(MODE) \
		--maxPages=$(MAXPAGES) \
		--output=$(OUTPUT) \
		--head=$(HEAD)

# Clean the binary
clean:
	rm -f $(BINARY)

# Convenience target for apple-emojis sitemap (localhost)
apple-emojis:
	make run SITEMAP=http://localhost:4321/freedevtools/emojis/apple-emojis/sitemap.xml

.PHONY: build run run-bin clean apple-emojis

tldr:
	make run SITEMAP=http://localhost:4321/freedevtools/tldr/sitemap.xml
	