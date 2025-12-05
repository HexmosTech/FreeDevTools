# Sitemap Checker V2 - Extract all URLs from sitemaps

SITEMAP_TYPE ?= svg

# Sitemap URLs
PROD_SITEMAP_URL = https://hexmos.com/freedevtools/$(SITEMAP_TYPE)_icons/sitemap.xml
LOCAL_SITEMAP_URL = http://127.0.0.1/freedevtools/$(SITEMAP_TYPE)_icons/sitemap.xml
LOCAL_HOST_HEADER = hexmos-local.com

# Binary name
BINARY = extract-urls

# Timestamp for log folder
TIMESTAMP = $(shell date +%Y-%m-%d_%H-%M-%S)
LOG_DIR = logs/$(TIMESTAMP)

.PHONY: build svg png emoji clean

# Build the Go binary
build:
	@go build -o $(BINARY) extract-urls.go

# Create log directory
create-log-dir:
	@mkdir -p $(LOG_DIR)

# Extract SVG icons URLs
svg: build create-log-dir
	@echo "Extracting SVG icons URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-svg.txt" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-svg.txt" && \
	 ./$(BINARY) -url "$(PROD_SITEMAP_URL)" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "$(LOCAL_SITEMAP_URL)" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract PNG icons URLs
png: build create-log-dir
	@echo "Extracting PNG icons URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-png.txt" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-png.txt" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/png_icons/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://127.0.0.1/freedevtools/png_icons/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract emojis URLs
emoji: build create-log-dir
	@echo "Extracting emojis URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-emoji.txt" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-emoji.txt" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/emojis/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://127.0.0.1/freedevtools/emojis/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Clean output files and binary
clean:
	@rm -rf logs/ urls-prod-*.txt urls-local-*.txt sitemap-prod-*.xml sitemap-local-*.xml $(BINARY)
	@echo "✅ Cleaned all output files and logs"

