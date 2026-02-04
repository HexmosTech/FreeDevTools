# Sitemap Checker V2 - Extract all URLs from sitemaps

SITEMAP_TYPE ?= svg

# Sitemap URLs
PROD_SITEMAP_URL = https://hexmos.com/freedevtools/$(SITEMAP_TYPE)_icons/sitemap.xml
LOCAL_SITEMAP_URL = http://localhost:4321/freedevtools/$(SITEMAP_TYPE)_icons/sitemap.xml
LOCAL_HOST_HEADER = localhost

# Binary name
BINARY = extract-urls

# Timestamp for log folder
TIMESTAMP = $(shell date +%Y-%m-%d_%H-%M-%S)
LOG_DIR = logs/$(TIMESTAMP)

.PHONY: build svg png emoji tldr t c mcp man-pages clean

# Build the Go binary
build:
	@go build -o $(BINARY) extract-urls.go

# Create log directory
create-log-dir:
	@mkdir -p $(LOG_DIR)

# Extract SVG icons URLs
svg: build create-log-dir
	@echo "Extracting SVG icons URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-svg.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-svg.log" && \
	 ./$(BINARY) -url "$(PROD_SITEMAP_URL)" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "$(LOCAL_SITEMAP_URL)" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract PNG icons URLs
png: build create-log-dir
	@echo "Extracting PNG icons URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-png.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-png.log" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/png_icons/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://localhost:4321/freedevtools/png_icons/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract emojis URLs
emoji: build create-log-dir
	@echo "Extracting emojis URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-emoji.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-emoji.log" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/emojis/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://localhost:4321/freedevtools/emojis/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract TLDR URLs
tldr: build create-log-dir
	@echo "Extracting TLDR URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-tldr.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-tldr.log" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/tldr/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://localhost:4321/freedevtools/tldr/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract Tools URLs
t: build create-log-dir
	@echo "Extracting Tools URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-tools.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-tools.log" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/t/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://localhost:4321/freedevtools/t/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract Cheatsheets URLs
c: build create-log-dir
	@echo "Extracting Cheatsheets URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-cheatsheets.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-cheatsheets.log" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/c/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://localhost:4321/freedevtools/c/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract MCP URLs
mcp: build create-log-dir
	@echo "Extracting MCP URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-mcp.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-mcp.log" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/mcp/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://localhost:4321/freedevtools/mcp/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract Man Pages URLs
man-pages: build create-log-dir
	@echo "Extracting Man Pages URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-man-pages.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-man-pages.log" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/man-pages/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://localhost:4321/freedevtools/man-pages/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract Installerpedia URLs
installerpedia: build create-log-dir
	@echo "Extracting Installerpedia URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-installerpedia.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-installerpedia.log" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/installerpedia/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://localhost:4321/freedevtools/installerpedia/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Extract Main Sitemap URLs
main: build create-log-dir
	@echo "Extracting Main Sitemap URLs..."
	@PROD_OUTPUT="$(LOG_DIR)/urls-prod-main.log" && \
	 LOCAL_OUTPUT="$(LOG_DIR)/urls-local-main.log" && \
	 ./$(BINARY) -url "https://hexmos.com/freedevtools/sitemap.xml" -output "$$PROD_OUTPUT" && \
	 ./$(BINARY) -url "http://localhost:4321/freedevtools/sitemap.xml" -output "$$LOCAL_OUTPUT" -host "$(LOCAL_HOST_HEADER)" && \
	 echo "" && \
	 echo "✅ Production URLs saved to: $$PROD_OUTPUT" && \
	 echo "✅ Local URLs saved to: $$LOCAL_OUTPUT" && \
	 go run compare.go "$$PROD_OUTPUT" "$$LOCAL_OUTPUT"

# Clean output files and binary
clean:
	@rm -rf logs/ urls-prod-*.txt urls-local-*.txt sitemap-prod-*.xml sitemap-local-*.xml $(BINARY)
	@echo "✅ Cleaned all output files and logs"

