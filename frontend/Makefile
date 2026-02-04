.PHONY: install run dev build generate build-css watch-css clean test kill start-prod start-dev stop-prod logs-prod show-404 show-301 show-other-logs show-nginx-error 404-filter-man read-profile read-profile-ui read-profile-cli help purge-cloudflare-cache analyze-search-404-urls analyze-man-pages-404 analyze-categories rca-man-pages-level2 test-man-pages-level2 add-see-also-column index-see-also ready-search

# Variables
PORT ?= 4321
# Try to find templ in PATH, GOPATH/bin, or use go run
TEMPL_CMD := $(shell which templ 2>/dev/null || echo "go run github.com/a-h/templ/cmd/templ@latest")
GO_CMD = go
NPM_CMD = npm
SLEEP_INTERVAL ?= 0.1

# Read NODE_ENV from .env file once
NODE_ENV := $(shell grep -E '^NODE_ENV=' .env 2>/dev/null | cut -d'=' -f2 | tr -d '"' | tr -d "'" | xargs || echo "")
# Set sync destination based on NODE_ENV
SYNC_PUBLIC_DEST := $(if $(filter prod,$(NODE_ENV)),/var/www/freedevtools-public/,public/)

# Command to load environment variables from .env
LOAD_ENV = if [ -f .env ]; then set -a; . ./.env; set +a; fi;

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'

install: ## Install all dependencies
	@echo "Installing Go dependencies..."
	$(GO_CMD) mod download
	@echo "Installing Node.js dependencies..."
	$(NPM_CMD) install
	@echo "Installing Templ CLI..."
	@if command -v templ >/dev/null 2>&1 || [ -f "$(HOME)/go/bin/templ" ]; then \
		echo "Templ already installed"; \
	else \
		echo "Installing templ to $(HOME)/go/bin/..."; \
		$(GO_CMD) install github.com/a-h/templ/cmd/templ@latest; \
		echo "Note: Add $(HOME)/go/bin to your PATH if templ command is not found"; \
		echo "      Or the Makefile will use 'go run' as fallback"; \
	fi
	@echo "Installation complete!"

generate: ## Generate templ files
	@echo "Generating templ files..."
	@if command -v templ >/dev/null 2>&1; then \
		templ generate; \
	elif [ -f "$(HOME)/go/bin/templ" ]; then \
		$(HOME)/go/bin/templ generate; \
	else \
		echo "Using 'go run' to generate templ files..."; \
		$(GO_CMD) run github.com/a-h/templ/cmd/templ@latest generate; \
	fi

generate-sitemaps: ## Generate static sitemaps
	@echo "Generating sitemaps..."
	@$(LOAD_ENV) $(GO_CMD) run scripts/sitemap-generator/main.go -section all

generate-sitemap-installerpedia: ## Generate Installerpedia sitemap only
	@echo "Generating Installerpedia sitemap..."
	@$(LOAD_ENV) $(GO_CMD) run scripts/sitemap-generator/main.go -section installerpedia


build-css: ## Build Tailwind CSS
	@echo "Building CSS..."
	@if [ ! -d "node_modules" ]; then \
		echo "node_modules not found, installing dependencies..."; \
		$(NPM_CMD) install; \
	fi
	$(NPM_CMD) run build:css

build-js: ## Build React Bundle
	@echo "Building React Bundle..."
	@if [ ! -d "node_modules" ]; then \
		echo "node_modules not found, installing dependencies..."; \
		$(NPM_CMD) install; \
	fi
	@mkdir -p assets/js
	node build.js
	@echo "Extracting chunk names for modulepreload..."
	@node scripts/extract-chunks.js

generate-critical: ## Generate Critical CSS (requires server running on port 4321)
	@echo "Generating Critical CSS..."
	@if ! command -v node > /dev/null 2>&1; then \
		echo "❌ Error: Node.js is not installed"; \
		exit 1; \
	fi
	@if ! curl -s http://localhost:4321 > /dev/null; then \
		echo "❌ Error: Server must be running on port 4321"; \
		exit 1; \
	fi
	node generate-critical.mjs
	@echo "Critical CSS generated in assets/css/critical.css"

checkpoint-db: ## Checkpoint SQLite WAL (required before shipping with immutable mode)
	@echo "Checkpointing SQLite WAL..."
	@DB_PATH="db/all_dbs/svg-icons-db-v4.db"; \
	if [ ! -f "$$DB_PATH" ]; then \
		echo "Warning: Database file not found at $$DB_PATH"; \
		echo "Skipping checkpoint..."; \
	else \
		if command -v sqlite3 >/dev/null 2>&1; then \
			echo "Running WAL checkpoint on $$DB_PATH..."; \
			sqlite3 "$$DB_PATH" "PRAGMA wal_checkpoint(FULL);" && echo "✓ WAL checkpoint complete"; \
		else \
			echo "Warning: sqlite3 command not found. Install sqlite3 to checkpoint WAL."; \
			echo "On Ubuntu/Debian: sudo apt-get install sqlite3"; \
			echo "On macOS: brew install sqlite3"; \
		fi \
	fi

man-pages-index-slug: ## Add index on slug column to man_pages table
	@echo "Adding index on slug column to man_pages table..."
	@DB_PATH="db/all_dbs/man-pages-db-v4.db"; \
	if [ ! -f "$$DB_PATH" ]; then \
		echo "❌ Error: Database file not found at $$DB_PATH"; \
		exit 1; \
	fi; \
	if ! command -v sqlite3 >/dev/null 2>&1; then \
		echo "❌ Error: sqlite3 command not found. Install sqlite3 to create index."; \
		echo "On Ubuntu/Debian: sudo apt-get install sqlite3"; \
		echo "On macOS: brew install sqlite3"; \
		exit 1; \
	fi; \
	echo "Creating index idx_man_pages_slug on man_pages(slug)..."; \
	sqlite3 "$$DB_PATH" "CREATE INDEX IF NOT EXISTS idx_man_pages_slug ON man_pages(slug);" && \
	echo "✓ Index created successfully"; \
	echo "Verifying index exists..."; \
	sqlite3 "$$DB_PATH" "SELECT name FROM sqlite_master WHERE type='index' AND name='idx_man_pages_slug';" | grep -q "idx_man_pages_slug" && \
	echo "✓ Index verified" || echo "⚠ Warning: Index verification failed"

undo-man-pages-index-slug: ## Remove index on slug column from man_pages table
	@echo "Removing index on slug column from man_pages table..."
	@DB_PATH="db/all_dbs/man-pages-db-v4.db"; \
	if [ ! -f "$$DB_PATH" ]; then \
		echo "❌ Error: Database file not found at $$DB_PATH"; \
		exit 1; \
	fi; \
	if ! command -v sqlite3 >/dev/null 2>&1; then \
		echo "❌ Error: sqlite3 command not found. Install sqlite3 to remove index."; \
		echo "On Ubuntu/Debian: sudo apt-get install sqlite3"; \
		echo "On macOS: brew install sqlite3"; \
		exit 1; \
	fi; \
	echo "Dropping index idx_man_pages_slug..."; \
	sqlite3 "$$DB_PATH" "DROP INDEX IF EXISTS idx_man_pages_slug;" && \
	echo "✓ Index removed successfully"; \
	echo "Verifying index is removed..."; \
	sqlite3 "$$DB_PATH" "SELECT name FROM sqlite_master WHERE type='index' AND name='idx_man_pages_slug';" | grep -q "idx_man_pages_slug" && \
	echo "⚠ Warning: Index still exists" || echo "✓ Index verified removed"

build: generate build-css build-js checkpoint-db ## Build the application
	@echo "Building application..."
	$(GO_CMD) build -o bin/fdt-binary ./cmd/server

build-fdtdb-cli: ## Build fdtdb CLI
	@echo "Building fdtdb..."
	cd fdtdb-cli && $(GO_CMD) build -o ../fdtdb .

run: generate build-css build-js ## Run the development server
	@echo "Starting server on port $(PORT)..."
	@$(LOAD_ENV) PORT=$(PORT) $(GO_CMD) run ./cmd/server

dev: ## Run development server with file watching (requires templ watch)
	@echo "Starting development server..."
	@echo "Note: Run 'make watch' in another terminal for file watching"
	@$(LOAD_ENV) $(GO_CMD) run ./cmd/server

start-dev: ## Start development server with live reload (watches .templ, .go, and CSS files)
	@bash scripts/start-dev.sh

watch: ## Watch for changes and regenerate
	@echo "Watching for templ and CSS changes..."
	@echo "Press Ctrl+C to stop"
	@if command -v templ >/dev/null 2>&1; then \
		templ generate --watch --proxy="http://localhost:$(PORT)" & \
	elif [ -f "$(HOME)/go/bin/templ" ]; then \
		$(HOME)/go/bin/templ generate --watch --proxy="http://localhost:$(PORT)" & \
	else \
		$(GO_CMD) run github.com/a-h/templ/cmd/templ@latest generate --watch --proxy="http://localhost:$(PORT)" & \
	fi
	@$(NPM_CMD) run watch:css & \
	wait

clean: ## Clean build artifacts
	@echo "Cleaning..."
	rm -rf bin/
	rm -f assets/css/output.css
	@echo "Clean complete!"

test: generate ## Run tests
	$(GO_CMD) test ./...

kill: ## Kill process running on port (default: 4321)
	@echo "Killing process on port $(PORT)..."
	@lsof -ti:$(PORT) | xargs -r kill -9 2>/dev/null || echo "No process found on port $(PORT)"
	@echo "Done!"

start-prod: ## Start production server on port 4321 using pmdaemon
	@$(MAKE) generate
	@$(MAKE) build-css
	@$(MAKE) build-js
	@$(MAKE) build
	@if ! command -v pmdaemon > /dev/null 2>&1; then \
		echo "❌ Error: pmdaemon is not installed or not in PATH"; \
		echo "Install from: https://github.com/hexops/pmdaemon"; \
		exit 1; \
	fi
	@echo "Starting production server with pmdaemon..."
	@echo "Stopping existing service if running..."
	@$(MAKE) stop-prod > /dev/null 2>&1 || true
	@sleep 1
	@echo "Starting server..."
	@pmdaemon --config pmd.config.json start
	@if [ "$(NODE_ENV)" = "prod" ]; then \
		sudo rm -rf /var/www/freedevtools-static; \
		sudo cp -r /home/ubuntu/fdt-templ/assets /var/www/freedevtools-static; \
		sudo touch /var/log/nginx/hexmos.com.error.log 2>/dev/null || true; \
		sudo sh -c "> /var/log/nginx/hexmos.com.error.log" 2>/dev/null || true; \
	fi
	@echo ""
	@echo "Server started with pmdaemon"
	@echo "Test: curl http://localhost:4321/freedevtools/"
	@echo "Use 'make stop-prod' to stop the server"
	@echo "View logs: pmdaemon --config pmd.config.json logs"

start-prod-binary: ## Start production server using existing binary (no build)
	@if [ ! -f bin/fdt-binary ]; then \
		echo "❌ Error: Binary not found at bin/fdt-binary"; \
		echo "Run 'make build' first to create the binary"; \
		exit 1; \
	fi
	@if ! command -v pmdaemon > /dev/null 2>&1; then \
		echo "❌ Error: pmdaemon is not installed or not in PATH"; \
		echo "Install from: https://github.com/hexops/pmdaemon"; \
		exit 1; \
	fi
	@echo "Starting production server with pmdaemon (using existing binary)..."
	@echo "Stopping existing service if running..."
	@$(MAKE) stop-prod > /dev/null 2>&1 || true
	@sleep 1
	@echo "Emptying log file..."
	@> ~/.pmdaemon/logs/fdt-4321-error.log 2>/dev/null || true
	@echo "Starting server..."
	@pmdaemon --config pmd.config.json start
	@if [ "$(NODE_ENV)" = "prod" ]; then \
		sudo rm -rf /var/www/freedevtools-static; \
		sudo cp -r /home/ubuntu/fdt-templ/assets /var/www/freedevtools-static; \
		sudo touch /var/log/nginx/hexmos.com.error.log 2>/dev/null || true; \
		sudo sh -c "> /var/log/nginx/hexmos.com.error.log" 2>/dev/null || true; \
	fi
	@echo ""
	@echo "Server started with pmdaemon"
	@echo "Test: curl http://localhost:4321/freedevtools/"
	@echo "Use 'make stop-prod' to stop the server"
	@echo "View logs: pmdaemon --config pmd.config.json logs"
	@pmd logs fdt-4321 -f

start-prod-profiling: generate build-css ## Start production server with CPU profiling enabled
	@echo "Building server binary..."
	$(GO_CMD) build -o bin/fdt-binary ./cmd/server
	@mkdir -p ~/.pmdaemon/logs ~/.pmdaemon/pids
	> ~/.pmdaemon/logs/fdt-4321-error.log
	@mkdir -p /tmp/profiles
	@PROFILE_FILE="/tmp/profiles/cpu-$$(date +%Y%m%d-%H%M%S).prof"; \
	echo "Starting production server with profiling enabled..."; \
	echo "Profile will be written to: $$PROFILE_FILE"; \
	echo "Checking for existing processes..."; \
	make stop-prod > /dev/null 2>&1 || true; \
	sleep 1; \
	echo "Starting server on port 4321 with profiling..."; \
	cd $(shell pwd) && PORT=4321 nohup ./bin/fdt-binary --profile="$$PROFILE_FILE" >> ~/.pmdaemon/logs/fdt-4321-error.log 2>&1 & echo $$! > ~/.pmdaemon/pids/fdt-4321.pid; \
	echo $$PROFILE_FILE > /tmp/server-4321.profile; \
	sleep 3; \
	echo ""; \
	echo "Checking server status..."; \
	if [ -f ~/.pmdaemon/pids/fdt-4321.pid ] && ps -p $$(cat ~/.pmdaemon/pids/fdt-4321.pid 2>/dev/null) > /dev/null 2>&1; then \
		echo "✓ Server on port 4321 started with profiling (PID: $$(cat ~/.pmdaemon/pids/fdt-4321.pid))"; \
		echo "  Profile file: $$PROFILE_FILE"; \
		echo "  Test: curl http://localhost:4321/freedevtools/"; \
		echo ""; \
		echo "  IMPORTANT: Make some requests to the server to generate profiling data!"; \
		echo "  Then use 'make stop-prod' to stop the server and finalize the profile"; \
	else \
		echo "✗ Server on port 4321 failed to start"; \
		echo "  Last 10 lines of log:"; \
		tail -10 ~/.pmdaemon/logs/fdt-4321-error.log 2>/dev/null || echo "    (log file empty)"; \
	fi; \
	echo ""; \
	echo "Logs: ~/.pmdaemon/logs/fdt-4321-error.log"; \
	echo "View logs: tail -f ~/.pmdaemon/logs/fdt-4321-error.log"

read-profile: read-profile-ui ## Read the latest CPU profile (defaults to UI)

read-profile-ui: ## Read the latest CPU profile in web UI
	@if [ -f /tmp/server-4321.profile ]; then \
		PROFILE_FILE=$$(cat /tmp/server-4321.profile); \
		if [ -f "$$PROFILE_FILE" ]; then \
			echo "Opening profile in web UI: $$PROFILE_FILE"; \
			echo "Web UI will be available at http://localhost:8009"; \
			echo "Press Ctrl+C to stop the web server"; \
			echo ""; \
			$(GO_CMD) tool pprof -http=:8009 $$PROFILE_FILE; \
		else \
			echo "Profile file not found: $$PROFILE_FILE"; \
			echo "Trying to find latest profile in /tmp/profiles/..."; \
			LATEST=$$(ls -t /tmp/profiles/*.prof 2>/dev/null | head -1); \
			if [ -n "$$LATEST" ]; then \
				echo "Found: $$LATEST"; \
				echo "Web UI will be available at http://localhost:8009"; \
				echo "Press Ctrl+C to stop the web server"; \
				echo ""; \
				$(GO_CMD) tool pprof -http=:8009 $$LATEST; \
			else \
				echo "No profile files found. Start server with 'make start-prod-profiling' first."; \
			fi; \
		fi; \
	else \
		echo "No active profile session found. Looking for latest profile in /tmp/profiles/..."; \
		LATEST=$$(ls -t /tmp/profiles/*.prof 2>/dev/null | head -1); \
		if [ -n "$$LATEST" ]; then \
			echo "Found latest profile: $$LATEST"; \
			echo "Web UI will be available at http://localhost:8009"; \
			echo "Press Ctrl+C to stop the web server"; \
			echo ""; \
			$(GO_CMD) tool pprof -http=:8009 $$LATEST; \
		else \
			echo "No profile files found. Start server with 'make start-prod-profiling' first."; \
			echo "Or manually specify profile file: go tool pprof -http=:8009 <profile-file>"; \
		fi; \
	fi

read-profile-cli: ## Read the latest CPU profile in CLI mode
	@if [ -f /tmp/server-4321.profile ]; then \
		PROFILE_FILE=$$(cat /tmp/server-4321.profile); \
		if [ -f "$$PROFILE_FILE" ]; then \
			echo "Reading profile: $$PROFILE_FILE"; \
			echo "Use 'go tool pprof' commands to analyze:"; \
			echo "  top10 - top 10 functions"; \
			echo "  web - visualize in browser"; \
			echo "  list <function> - see source code"; \
			echo ""; \
			$(GO_CMD) tool pprof $$PROFILE_FILE; \
		else \
			echo "Profile file not found: $$PROFILE_FILE"; \
			echo "Trying to find latest profile in /tmp/profiles/..."; \
			LATEST=$$(ls -t /tmp/profiles/*.prof 2>/dev/null | head -1); \
			if [ -n "$$LATEST" ]; then \
				echo "Found: $$LATEST"; \
				$(GO_CMD) tool pprof $$LATEST; \
			else \
				echo "No profile files found. Start server with 'make start-prod-profiling' first."; \
			fi; \
		fi; \
	else \
		echo "No active profile session found. Looking for latest profile in /tmp/profiles/..."; \
		LATEST=$$(ls -t /tmp/profiles/*.prof 2>/dev/null | head -1); \
		if [ -n "$$LATEST" ]; then \
			echo "Found latest profile: $$LATEST"; \
			$(GO_CMD) tool pprof $$LATEST; \
		else \
			echo "No profile files found. Start server with 'make start-prod-profiling' first."; \
			echo "Or manually specify profile file: go tool pprof <profile-file>"; \
		fi; \
	fi

profile-url: ## Profile a specific URL (usage: make profile-url URL=http://localhost:4321/...)
	@if [ -z "$(URL)" ]; then \
		echo "Error: URL argument is required"; \
		echo "Usage: make profile-url URL=http://localhost:4321/freedevtools/ SLEEP_INTERVAL=0.1"; \
		exit 1; \
	fi
	@echo "Profiling URL: $(URL)"
	@if command -v hey >/dev/null 2>&1; then \
		echo "Starting load generation with hey (40s)..."; \
		hey -z 40s -c 10 "$(URL)" > /dev/null 2>&1 & \
		echo "Capturing 30s profile..."; \
		$(GO_CMD) tool pprof -http=:8009 http://localhost:4321/debug/pprof/profile?seconds=30; \
	else \
		echo "Warning: 'hey' not found. Using curl for simple load gen..."; \
		echo "Sleep interval: $(SLEEP_INTERVAL)s"; \
		(end=$$(date +%s); end=$$((end + 40)); while [ $$(date +%s) -lt $$end ]; do curl -s "$(URL)" > /dev/null; sleep $(SLEEP_INTERVAL); done) & \
		echo "Capturing 30s profile..."; \
		$(GO_CMD) tool pprof -http=:8009 http://localhost:4321/debug/pprof/profile?seconds=30; \
	fi

analyze-emoji-logs:
	@echo "Analyzing emoji logs..."
	python3 scripts/analyze.py ~/.pmdaemon/logs/fdt-4321-error.log

analyze-man-pages-logs:
	@echo "Analyzing man pages logs..."
	python3 scripts/man-page_analyze.py ~/.pmdaemon/logs/fdt-4321-error.log

stop-prod: ## Stop production server and kill all processes on port 4321
	@echo "Stopping production server..."
	@echo ""
	@# Step 1: Stop and delete pmdaemon processes
	@if command -v pmdaemon > /dev/null 2>&1; then \
		echo "Stopping pmdaemon service 'fdt-4321'..."; \
		pmdaemon --config pmd.config.json stop fdt-4321 2>/dev/null || echo "  (service not running or already stopped)"; \
		echo "Deleting pmdaemon service 'fdt-4321'..."; \
		pmdaemon --config pmd.config.json delete fdt-4321 2>/dev/null || echo "  (service not found or already deleted)"; \
		echo "✓ pmdaemon cleanup complete"; \
	else \
		echo "pmdaemon not found, skipping pmdaemon cleanup..."; \
	fi
	@echo ""
	@# Step 2: Kill processes from PID file (fallback method)
	@if [ -f ~/.pmdaemon/pids/fdt-4321.pid ]; then \
		PID=$$(cat ~/.pmdaemon/pids/fdt-4321.pid 2>/dev/null); \
		if [ -n "$$PID" ] && ps -p $$PID > /dev/null 2>&1; then \
			echo "Found process in PID file ($$PID), stopping..."; \
			echo "  Sending SIGTERM (graceful shutdown)..."; \
			kill $$PID 2>/dev/null || true; \
			WAIT_COUNT=0; \
			while [ $$WAIT_COUNT -lt 10 ] && ps -p $$PID > /dev/null 2>&1; do \
				sleep 1; \
				WAIT_COUNT=$$((WAIT_COUNT + 1)); \
			done; \
			if ps -p $$PID > /dev/null 2>&1; then \
				echo "  Process still running, force killing..."; \
				kill -9 $$PID 2>/dev/null || true; \
			fi; \
			echo "  ✓ Process $$PID stopped"; \
		fi; \
		rm -f ~/.pmdaemon/pids/fdt-4321.pid; \
	fi
	@echo ""
	@# Step 3: Find and kill all processes using port 4321
	@echo "Checking for processes using port 4321..."
	@if command -v lsof > /dev/null 2>&1; then \
		PIDS=$$(lsof -ti:4321 2>/dev/null || true); \
		if [ -n "$$PIDS" ]; then \
			echo "Found processes on port 4321: $$PIDS"; \
			for PID in $$PIDS; do \
				if ps -p $$PID > /dev/null 2>&1; then \
					PROC_INFO=$$(ps -p $$PID -o comm=,args= 2>/dev/null | head -1); \
					echo "  Killing PID $$PID ($$PROC_INFO)..."; \
					kill -9 $$PID 2>/dev/null || true; \
				fi; \
			done; \
			echo "✓ All processes on port 4321 killed"; \
		else \
			echo "  No processes found on port 4321"; \
		fi; \
	elif command -v fuser > /dev/null 2>&1; then \
		echo "Using fuser to find processes on port 4321..."; \
		fuser -k 4321/tcp 2>/dev/null && echo "✓ Processes on port 4321 killed" || echo "  No processes found on port 4321"; \
	elif command -v ss > /dev/null 2>&1; then \
		echo "Using ss to find processes on port 4321..."; \
		PIDS=$$(ss -tlnp 2>/dev/null | grep :4321 | awk '{print $$6}' | cut -d',' -f2 | cut -d'=' -f2 | sort -u | grep -v '^$$' || true); \
		if [ -n "$$PIDS" ]; then \
			for PID in $$PIDS; do \
				if ps -p $$PID > /dev/null 2>&1; then \
					echo "  Killing PID $$PID..."; \
					kill -9 $$PID 2>/dev/null || true; \
				fi; \
			done; \
			echo "✓ All processes on port 4321 killed"; \
		else \
			echo "  No processes found on port 4321"; \
		fi; \
	else \
		echo "  ⚠ Warning: No tools available to check port 4321 (lsof/fuser/ss not found)"; \
	fi
	@echo ""
	@# Final verification
	@if command -v lsof > /dev/null 2>&1; then \
		REMAINING=$$(lsof -ti:4321 2>/dev/null || true); \
		if [ -n "$$REMAINING" ]; then \
			echo "⚠ Warning: Some processes may still be using port 4321: $$REMAINING"; \
		else \
			echo "✓ Port 4321 is now free"; \
		fi; \
	fi
	@echo ""
	@echo "Stop complete!"

logs: ## Show live logs from production server (pmdaemon)
	@if command -v pmdaemon > /dev/null 2>&1; then \
		pmdaemon --config pmd.config.json logs fdt-4321 --follow; \
	else \
		echo "pmdaemon not found, showing fallback logs..."; \
		tail -f ~/.pmdaemon/logs/fdt-4321-error.log 2>/dev/null || echo "No log file found"; \
	fi

logs-prod: ## Show logs from production server (legacy)
	@echo "=== Server 4321 log (last 20 lines) ==="
	@tail -20 ~/.pmdaemon/logs/fdt-4321-error.log 2>/dev/null || echo "No log file found"

show-404: ## Show all 404 URLs from server log with category summary
	@python3 scripts/clean_404.py
 
show-301: ## Show all 301 redirect URLs from server log with category summary
	@echo "=== 301 Redirect URLs from ~/.pmdaemon/logs/fdt-4321-error.log ==="
	@if [ ! -f ~/.pmdaemon/logs/fdt-4321-error.log ]; then \
		echo "❌ Log file not found: ~/.pmdaemon/logs/fdt-4321-error.log"; \
		exit 1; \
	fi
	@echo ""
	@echo "Individual 301 Redirect URLs:"
	@grep " 301 " ~/.pmdaemon/logs/fdt-4321-error.log 2>/dev/null | \
		awk '{print $$4}' | \
		sort | \
		uniq -c | \
		sort -rn | \
		awk '{printf "%4d  %s\n", $$1, $$2}' || \
		echo "No 301 redirects found in log"
	@echo ""
	@echo "=== Summary by Category ==="
	@grep " 301 " ~/.pmdaemon/logs/fdt-4321-error.log 2>/dev/null | \
		awk '{print $$4}' | \
		awk -F'/' '{ \
			if (NF >= 3) { \
				category = "/" $$2 "/" $$3 "/"; \
				print category \
			} else if (NF == 2) { \
				print "/" $$2 "/" \
			} else { \
				print "/" \
			} \
		}' | \
		sort | \
		uniq -c | \
		sort -rn | \
		awk '{printf "%4d  %s\n", $$1, $$2}' || \
		echo "No categories found"
	@echo ""
	@TOTAL=$$(grep " 301 " ~/.pmdaemon/logs/fdt-4321-error.log 2>/dev/null | wc -l | tr -d ' '); \
	echo "Total 301 redirects: $$TOTAL"

show-other-logs: ## Show all HTTP status codes other than 200, 404, 301 from server log
	@python3 scripts/show_other_logs.py

show-nginx-error: ## Show nginx error logs with category summary
	@echo "Making nginx error log readable..."
	@sudo chmod 777 /var/log/nginx/hexmos.com.error.log 2>/dev/null || \
	 sudo chmod 777 /var/log/nginx/hexmos.com.error.log 2>/dev/null || \
	 echo "⚠️  Could not change permissions (may need sudo access)"
	@python3 scripts/show_nginx_errors.py

404-filter-man: ## Filter 404.txt to only include man-pages URLs and remove leading numbers
	@./scripts/filter_manpages_404.sh

init-rclone:
	@echo "⬇️  Initializing Rclone..."
	@if ! command -v rclone >/dev/null 2>&1; then \
		echo "📦 Installing rclone..."; \
		sudo -v; \
		curl https://rclone.org/install.sh | sudo bash; \
		echo "✅ rclone installed successfully"; \
	else \
		echo "✅ rclone already installed"; \
	fi
	@rclone version
	@if [ ! -f .env ]; then \
		echo "❌ Error: .env file not found"; \
		exit 1; \
	fi
	@mkdir -p ~/.config/rclone
	@$(LOAD_ENV) && \
		echo "[b2-config]" > ~/.config/rclone/rclone.conf && \
		echo "type = b2" >> ~/.config/rclone/rclone.conf && \
		echo "account = $$(echo $$B2_ACCOUNT_ID | tr -d '\"')" >> ~/.config/rclone/rclone.conf && \
		echo "key = $$(echo $$B2_APPLICATION_KEY | tr -d '\"')" >> ~/.config/rclone/rclone.conf && \
		echo "hard_delete = false" >> ~/.config/rclone/rclone.conf
	@echo "✅ rclone config created successfully"
	@echo "✅ Rclone initialized successfully"

sync-db-to-local:
	@echo "⬇️  Syncing database files from Backblaze B2..."
	@mkdir -p db/all_dbs
	rclone sync \
		b2-config:hexmos/freedevtools/content/db/ \
		db/all_dbs/ \
		--checksum \
		--retries 20 \
		--low-level-retries 30 \
		--retries-sleep 10s \
		--progress \
		&& \
	rclone check \
	  b2-config:hexmos/freedevtools/content/db/ \
	  db/all_dbs/ \
	  --checksum \
	  --one-way
	@echo "✅ Database sync completed"

update-db-to-b2:
	@FILE_PATH=$$([ -n "$(file)" ] && echo "$(file)" || echo "$(filter-out update-db-to-b2,$(MAKECMDGOALS))" | head -n1); \
	if [ -z "$$FILE_PATH" ]; then \
		echo "❌ Error: File path is required"; \
		echo "Usage: make update-db-to-b2 file=<path-to-db-file>"; \
		echo "   or: make update-db-to-b2 <path-to-db-file>"; \
		echo "Example: make update-db-to-b2 file=db/all_dbs/banner-db.db"; \
		exit 1; \
	fi; \
	if [ ! -f "$$FILE_PATH" ]; then \
		echo "❌ Error: File '$$FILE_PATH' not found"; \
		exit 1; \
	fi; \
	echo "⬆️  Uploading $$FILE_PATH to Backblaze B2..."; \
	rclone copy \
		"$$FILE_PATH" \
		b2-config:hexmos/freedevtools/content/db/ \
		--checksum \
		--retries 20 \
		--low-level-retries 30 \
		--retries-sleep 10s \
		--progress; \
	DB_NAME=$$(basename "$$FILE_PATH"); \
	echo "✅ Database file uploaded successfully"; \
	DISCORD_WEBHOOK=$$(grep -E '^discord_webhook_url\s*=' fdt-dev.toml 2>/dev/null | sed 's/.*=\s*"\(.*\)".*/\1/' | tr -d ' ' || echo ""); \
	if [ -z "$$DISCORD_WEBHOOK" ]; then \
		echo "⚠️  Warning: discord_webhook_url not found in fdt-dev.toml"; \
	else \
		curl -H "Content-Type: application/json" \
			-d "{\"content\": \"✅ Database updated to B2: **$$DB_NAME**\"}" \
			"$$DISCORD_WEBHOOK" \
			-s -o /dev/null || true; \
	fi

sync-public-to-local:
	@echo "⬇️  Syncing public files from Backblaze B2..."
	@sudo mkdir -p $(SYNC_PUBLIC_DEST)
	rclone sync \
		b2-config:hexmos/freedevtools/content/public/ \
		$(SYNC_PUBLIC_DEST) \
		--checksum \
		--retries 20 \
		--low-level-retries 30 \
		--retries-sleep 10s \
		--progress
	@echo "✅ Public files sync completed"	

update-public-to-b2:
	@echo "⬆️  Uploading public directory to Backblaze B2..."
	@if [ ! -d "$(SYNC_PUBLIC_DEST)" ]; then \
		echo "❌ Error: $(SYNC_PUBLIC_DEST) directory not found"; \
		exit 1; \
	fi; \
	rclone copy \
		$(SYNC_PUBLIC_DEST) \
		b2-config:hexmos/freedevtools/content/public/ \
		--checksum \
		--retries 20 \
		--low-level-retries 30 \
		--retries-sleep 10s \
		--progress
	@echo "✅ Public directory uploaded successfully"

update-public-file-to-b2: ## Upload a specific public file to B2 (usage: make update-public-file-to-b2 file=<path>)
	@FILE_PATH=$$([ -n "$(file)" ] && echo "$(file)" || echo "$(filter-out update-public-file-to-b2,$(MAKECMDGOALS))" | head -n1); \
	if [ -z "$$FILE_PATH" ]; then \
		echo "❌ Error: File path is required"; \
		echo "Usage: make update-public-file-to-b2 file=<path-to-file>"; \
		echo "   or: make update-public-file-to-b2 <path-to-file>"; \
		echo "Example: make update-public-file-to-b2 file=public/svg_icons/interstellar/6180_the_moon.svg"; \
		exit 1; \
	fi; \
	if [ ! -f "$$FILE_PATH" ]; then \
		echo "❌ Error: File '$$FILE_PATH' not found"; \
		exit 1; \
	fi; \
	echo "⬆️  Uploading $$FILE_PATH to Backblaze B2..."; \
	RELATIVE_PATH=$$(echo "$$FILE_PATH" | sed 's|^public/||'); \
	rclone copy \
		"$$FILE_PATH" \
		"b2-config:hexmos/freedevtools/content/public/$$(dirname $$RELATIVE_PATH)/" \
		--checksum \
		--retries 20 \
		--low-level-retries 30 \
		--retries-sleep 10s \
		--progress; \
	FILE_NAME=$$(basename "$$FILE_PATH"); \
	echo "✅ File uploaded successfully: $$FILE_NAME"



read-profile-url-ui: ## Read the latest CPU profile in web UI
	@if [ -f ~/.pmdaemon/pids/fdt-4321.pid ] && ps -p $$(cat ~/.pmdaemon/pids/fdt-4321.pid 2>/dev/null) > /dev/null 2>&1; then \
		echo "Server is running (PID: $$(cat ~/.pmdaemon/pids/fdt-4321.pid))"; \
		echo "Reading live profile from http://localhost:4321/debug/pprof/profile..."; \
		echo "Web UI will be available at http://localhost:8009"; \
		echo "Press Ctrl+C to stop the web server"; \
		echo ""; \
		$(GO_CMD) tool pprof -http=:8009 http://localhost:4321/debug/pprof/profile?seconds=30; \
	elif [ -f /tmp/server-4321.profile ]; then \
		PROFILE_FILE=$$(cat /tmp/server-4321.profile); \
		if [ -f "$$PROFILE_FILE" ]; then \
			echo "Opening profile in web UI: $$PROFILE_FILE"; \
			echo "Web UI will be available at http://localhost:8009"; \
			echo "Press Ctrl+C to stop the web server"; \
			echo ""; \
			$(GO_CMD) tool pprof -http=:8009 $$PROFILE_FILE; \
		else \
			echo "Profile file not found: $$PROFILE_FILE"; \
			echo "Trying to find latest profile in /tmp/profiles/..."; \
			LATEST=$$(ls -t /tmp/profiles/*.prof 2>/dev/null | head -1); \
			if [ -n "$$LATEST" ]; then \
				echo "Found: $$LATEST"; \
				echo "Web UI will be available at http://localhost:8009"; \
				echo "Press Ctrl+C to stop the web server"; \
				echo ""; \
				$(GO_CMD) tool pprof -http=:8009 $$LATEST; \
			else \
				echo "No profile files found. Start server with 'make start-prod-profiling' first."; \
			fi; \
		fi; \
	else \
		echo "No active profile session found. Looking for latest profile in /tmp/profiles/..."; \
		LATEST=$$(ls -t /tmp/profiles/*.prof 2>/dev/null | head -1); \
		if [ -n "$$LATEST" ]; then \
			echo "Found latest profile: $$LATEST"; \
			echo "Web UI will be available at http://localhost:8009"; \
			echo "Press Ctrl+C to stop the web server"; \
			echo ""; \
			$(GO_CMD) tool pprof -http=:8009 $$LATEST; \
		else \
			echo "No profile files found. Start server with 'make start-prod-profiling' first."; \
			echo "Or manually specify profile file: go tool pprof -http=:8009 <profile-file>"; \
		fi; \
	fi

start-prod-profiling-url: generate build-css ## Start production server with profiling enabled
	@echo "Building server binary..."
	$(GO_CMD) build -o bin/fdt-binary ./cmd/server
	@mkdir -p ~/.pmdaemon/logs ~/.pmdaemon/pids
	> ~/.pmdaemon/logs/fdt-4321-error.log
	@echo "Starting production server with profiling enabled..."
	@echo "Checking for existing processes..."
	@make stop-prod > /dev/null 2>&1 || true
	@sleep 1
	@echo "Starting server on port 4321..."
	@cd $(shell pwd) && PORT=4321 nohup ./bin/fdt-binary >> ~/.pmdaemon/logs/fdt-4321-error.log 2>&1 & echo $$! > ~/.pmdaemon/pids/fdt-4321.pid
	@sleep 3
	@echo ""
	@echo "Checking server status..."
	@if [ -f ~/.pmdaemon/pids/fdt-4321.pid ] && ps -p $$(cat ~/.pmdaemon/pids/fdt-4321.pid 2>/dev/null) > /dev/null 2>&1; then \
		echo "✓ Server on port 4321 started (PID: $$(cat ~/.pmdaemon/pids/fdt-4321.pid))"; \
		echo "  Live profiling is enabled via HTTP."; \
		echo "  Test: curl http://localhost:4321/freedevtools/"; \
		echo ""; \
		echo "  Run 'make read-profile' to capture and analyze a 30s CPU profile."; \
	else \
		echo "✗ Server on port 4321 failed to start"; \
		echo "  Last 10 lines of log:"; \
		tail -10 ~/.pmdaemon/logs/fdt-4321-error.log 2>/dev/null || echo "    (log file empty)"; \
	fi
	@echo ""
	@echo "Logs: ~/.pmdaemon/logs/fdt-4321-error.log"
	@echo "View logs: tail -f ~/.pmdaemon/logs/fdt-4321-error.log"


purge-cloudflare-cache: ## Purge Cloudflare cache
	@echo "Purging Cloudflare cache..."
	@CF_TOKEN=$$(grep -E '^cloudflare_api_token\s*=' fdt-dev.toml 2>/dev/null | sed 's/.*=\s*"\(.*\)".*/\1/' | tr -d ' ' || echo ""); \
	CF_ZONE=$$(grep -E '^cloudflare_zone_id\s*=' fdt-dev.toml 2>/dev/null | sed 's/.*=\s*"\(.*\)".*/\1/' | tr -d ' ' || echo "47a238ef5a42fd5e38dd16a5bea1b6fc"); \
	if [ -z "$$CF_TOKEN" ]; then \
		echo "❌ Error: cloudflare_api_token not found in fdt-dev.toml"; \
		exit 1; \
	fi; \
	curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$$CF_ZONE/purge_cache" \
		-H "Authorization: Bearer $$CF_TOKEN" \
		-H "Content-Type: application/json" \
		--data '{"purge_everything":true}'
	@echo "\nCloudflare cache purge requested."

analyze-search-404-urls: ## Analyze URLs from Table.csv and generate status code summary
	@echo "Analyzing URLs from Table.csv..."
	@python3 scripts/analyze_search_urls.py

analyze-man-pages-404: ## Analyze man-pages 404 URLs by depth level
	@echo "Analyzing man-pages 404 URLs by depth..."
	@cd man-pages-stuff && python3 analyze_man_pages_404.py

analyze-categories: ## Analyze URL status results and create separate CSV files for each category
	@echo "Analyzing URL status results by category..."
	@python3 scripts/analyze_categories.py

rca-man-pages-level2: ## Root cause analysis for level 2 man-pages 404 URLs
	@echo "Running RCA for level 2 man-pages 404 URLs..."
	@cd man-pages-stuff && python3 rca_level_2_404.py

test-man-pages-level2: ## Test level 2 man-pages URLs to verify pagination fallback
	@echo "Testing level 2 man-pages URLs..."
	@cd man-pages-stuff && python3 test_level2_urls.py

add-see-also-column: ## Add see_also column to all database tables
	@echo "Adding see_also column to all databases..."
	@./scripts/add_see_also_column.sh
	@echo "✅ see_also columns added!"

index-see-also: ## Index and find "See Also" related content for all categories (usage: make index-see-also items=3 limit=0 workers=10)
	@echo "Indexing See Also content for all categories..."
	@$(LOAD_ENV) go run scripts/see-also/*.go -items $(if $(items),$(items),3) -limit $(if $(limit),$(limit),0) -workers $(if $(workers),$(workers),10)

index-see-also-ipm: ## Index and find "See Also" content for installerpedia (usage: make index-see-also-installerpedia items=3 limit=0 workers=10)
	@echo "Indexing See Also content for Installerpedia..."
	@$(LOAD_ENV) go run scripts/see-also/*.go \
	-category ipm \
	-items $(if $(items),$(items),3) \
	-limit $(if $(limit),$(limit),0) \
	-workers $(if $(workers),$(workers),50)

index-see-also-fast: ## Index and find "See Also" related content for all categories (usage: make index-see-also items=3 limit=0 workers=10)
	@echo "Indexing See Also content for all categories..."
	@$(LOAD_ENV) go run scripts/see-also/*.go -items $(if $(items),$(items),3) -limit $(if $(limit),$(limit),0) -workers $(if $(workers),$(workers),50)

check-see-also-empty: ## Check how many see_also rows are not filled in each category
	@./scripts/check_see_also_empty.sh

ready-search: ## Setup local searchsync & meilisearch, generate JSON files, and index them locally
	@echo "🚀 Setting up local search environment..."
	@FDT_ROOT="$$(pwd)"; \
	SEARCHSYNC_REPO="$$(cd "$$FDT_ROOT/../searchsync" && pwd)"; \
	if [ ! -d "$$SEARCHSYNC_REPO" ]; then \
		echo "❌ Searchsync repository not found at $$SEARCHSYNC_REPO"; \
		exit 1; \
	fi; \
	echo "📁 Searchsync repo: $$SEARCHSYNC_REPO"; \
	echo ""; \
	echo "🔧 Step 0: Updating searchsync .env to use localhost..."; \
	if [ -f "$$SEARCHSYNC_REPO/.env" ]; then \
		if grep -q "^SEARCH_API_PROD=" "$$SEARCHSYNC_REPO/.env"; then \
			sed -i 's|^SEARCH_API_PROD=.*|SEARCH_API_PROD="http://localhost:7700"|' "$$SEARCHSYNC_REPO/.env"; \
			echo "✅ Updated SEARCH_API_PROD in searchsync .env to localhost"; \
		else \
			echo 'SEARCH_API_PROD="http://localhost:7700"' >> "$$SEARCHSYNC_REPO/.env"; \
			echo "✅ Added SEARCH_API_PROD to searchsync .env"; \
		fi; \
	else \
		echo 'SEARCH_API_PROD="http://localhost:7700"' > "$$SEARCHSYNC_REPO/.env"; \
		echo "✅ Created searchsync .env with SEARCH_API_PROD"; \
	fi; \
	echo ""; \
	echo "📦 Step 1: Starting meilisearch with docker-compose..."; \
	cd "$$SEARCHSYNC_REPO" && \
	if ! docker compose ps meilisearch 2>/dev/null | grep -q "Up"; then \
		echo "Starting meilisearch container..."; \
		docker compose up -d meilisearch; \
		echo "⏳ Waiting for meilisearch to be healthy..."; \
		for i in 1 2 3 4 5 6 7 8 9 10; do \
			if curl -sf http://localhost:7700/health >/dev/null 2>&1; then \
				echo "✅ Meilisearch is healthy!"; \
				break; \
			fi; \
			if [ $$i -eq 10 ]; then \
				echo "❌ Meilisearch failed to become healthy"; \
				exit 1; \
			fi; \
			echo "  Waiting... ($$i/10)"; \
			sleep 2; \
		done; \
	else \
		echo "✅ Meilisearch is already running"; \
	fi; \
	echo ""; \
	echo "🔨 Step 2: Building search_sync binary..."; \
	cd "$$SEARCHSYNC_REPO" && make build; \
	if [ ! -f "$$SEARCHSYNC_REPO/build/search_sync" ]; then \
		echo "❌ Failed to build binary"; \
		exit 1; \
	fi; \
	echo "✅ Binary built successfully"; \
	echo ""; \
	echo "📊 Step 3: Generating JSON index files..."; \
	cd "$$FDT_ROOT/search-index" && \
	if [ ! -d "output" ] || [ -z "$$(ls -A output/*.json 2>/dev/null)" ]; then \
		echo "Generating all JSON files..."; \
		make -C . gen-all || go run .; \
	else \
		echo "✅ JSON files already exist in output/"; \
	fi; \
	echo ""; \
	echo "📤 Step 4: Transferring JSON files and indexing..."; \
	cd "$$FDT_ROOT/search-index" && \
	SEARCHSYNC_REPO_PATH="$$SEARCHSYNC_REPO" \
	MEILI_MASTER_KEY="$$(grep -E '^meili_master_key\s*=' "$$FDT_ROOT/frontend/fdt-dev.toml" 2>/dev/null | sed 's/.*=\s*"\(.*\)".*/\1/' | tr -d ' ' || grep -E '^MEILI_MASTER_KEY=' "$$SEARCHSYNC_REPO/.env" 2>/dev/null | cut -d'=' -f2 | tr -d '"' | tr -d "'" | xargs || echo '')" \
	./transfer-index-files-local.sh; \
	echo ""; \
	echo ""; \
	echo "🔑 Step 5: Creating search API key for local meilisearch..."; \
	MASTER_KEY="$$(grep -E '^meili_master_key\s*=' "$$FDT_ROOT/frontend/fdt-dev.toml" 2>/dev/null | sed 's/.*=\s*"\(.*\)".*/\1/' | tr -d ' ' || grep -E '^MEILI_MASTER_KEY=' "$$SEARCHSYNC_REPO/.env" 2>/dev/null | cut -d'=' -f2 | tr -d '"' | tr -d "'" | xargs || echo ''); \
	if [ -z "$$MASTER_KEY" ]; then \
		echo "❌ Error: meili_master_key not found in fdt-dev.toml or SEARCHSYNC_REPO/.env"; \
		exit 1; \
	fi; \
	SEARCH_KEY_RESPONSE=$$(curl -s -X POST 'http://localhost:7700/keys' \
		-H 'Content-Type: application/json' \
		-H "Authorization: Bearer $$MASTER_KEY" \
		--data-binary '{"description": "Search API key for local development", "actions": ["search"], "indexes": ["freedevtools"], "expiresAt": null}' 2>/dev/null); \
	if echo "$$SEARCH_KEY_RESPONSE" | grep -q '"key"'; then \
		SEARCH_KEY=$$(echo "$$SEARCH_KEY_RESPONSE" | grep -o '"key":"[^"]*"' | cut -d'"' -f4); \
		echo "✅ Search API key created: $$SEARCH_KEY"; \
		if [ -f "$$FDT_ROOT/.env" ]; then \
			if grep -q "^MEILI_SEARCH_KEY=" "$$FDT_ROOT/.env"; then \
				sed -i "s|^MEILI_SEARCH_KEY=.*|MEILI_SEARCH_KEY=$$SEARCH_KEY|" "$$FDT_ROOT/.env"; \
			else \
				echo "MEILI_SEARCH_KEY=$$SEARCH_KEY" >> "$$FDT_ROOT/.env"; \
			fi; \
		else \
			echo "MEILI_SEARCH_KEY=$$SEARCH_KEY" > "$$FDT_ROOT/.env"; \
		fi; \
		echo "✅ Saved MEILI_SEARCH_KEY to fdt-templ .env"; \
	else \
		echo "⚠️  Warning: Failed to create search API key (may already exist)"; \
		echo "   Response: $$SEARCH_KEY_RESPONSE"; \
	fi; \
	echo ""; \
	echo "✅ Local search environment setup complete!"
 