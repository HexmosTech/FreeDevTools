.PHONY: build deploy run clean gen banners check-pagespeed deploy-no-pagespeed local-env sync-db update-db-to-b2 index-deploy local-prod-build

# Build the project
build:
	npm run build

# Generate all tool banners
banners:
	node scripts/generate-all-banners.cjs || true

# Check PageSpeed scores for all tools
check-pagespeed:
	@echo "Checking PageSpeed scores for all tools..."
	@node scripts/check-pagespeed-thresholds.cjs || (echo "❌ PageSpeed check failed! Some metrics are below the required thresholds." && exit 1)

# Deploy without PageSpeed check
deploy-no-pagespeed: banners build
	@echo "⚠️ Skipping PageSpeed check during deployment"
	rsync -rvz --no-perms --no-owner --no-group --no-times --progress ./dist/ root@master-do:/tools/

# Deploy: check PageSpeed, generate banners, build, then rsync to server
deploy:
	@if [ "$(SKIP_PAGESPEED)" = "1" ]; then \
		$(MAKE) deploy-no-pagespeed; \
	else \
		$(MAKE) check-pagespeed banners build && \
		rsync -rvz --no-perms --no-owner --no-group --no-times --progress ./dist/ root@master-do:/tools/; \
	fi

# Deploy: check PageSpeed, generate banners, build, then rsync to server
deploy2: build
		rsync -rvz --no-perms --no-owner --no-group --no-times --progress ./dist/ root@master-do:/tools/; \

# Deploy index.html: build then rsync index.html to a4.html
# Note: rsync without --delete flag will only add/update files, never delete
index-deploy:
	npm run build:index
	rsync -rvz --no-perms --no-owner --no-group --no-times --progress ./dist/index.html root@master-do:/tools/a4.html
	rsync -rvz --no-perms --no-owner --no-group --no-times --progress ./dist/_astro/style* root@master-do:/tools/_astro/

# Run development server
run:
	npm run dev

# Clean build artifacts
clean:
	rm -rf dist/
	rm -rf .astro/

# Generate a new tool (usage: make gen tool-name)
gen:
	@if [ -z "$(tool)" ]; then \
		echo "❌ Error: Tool name is required"; \
		echo "Usage: make gen tool=<tool-name>"; \
		echo "Example: make gen tool=password-generator"; \
		exit 1; \
	fi
	node scripts/generateTool.cjs $(tool) 


local-env:
	@echo "PAGESPEED_API_KEY=" > .env
	@echo "PUBLIC_GA_ID=" >> .env
	@echo "✅ .env created"

# Convert images to WebP format (usage: make convert-to-webp src=path/to/image.jpg out=path/to/image.webp)
# Requires: sudo dnf install -y libwebp-tools (Fedora) or sudo apt install -y webp (Debian/Ubuntu)
convert-to-webp:
	./scripts/convert-to-webp.sh "$(src)" "$(out)"



# Pull all DB files via Git LFS
# pull-db:
# 	@echo "🔎 Checking Git LFS..."
# 	@git lfs version || (echo "Git LFS not installed"; exit 1)

# 	@echo "⬇️ Fetching all LFS objects..."
# 	@git lfs fetch --all

# 	@echo "⬇️ Pulling DB-related LFS files..."
# 	@git lfs pull --include="db/**,frontend/db/**" --exclude=""

# 	@echo "📄 Listing LFS-tracked files (only DB paths)..."
# 	@git lfs ls-files | grep -E "db/|frontend/db/" || echo "No DB files tracked via LFS."

# 	@echo "📏 Showing DB file sizes..."
# 	@git lfs ls-files --size | grep -E "db/|frontend/db/" || true

# 	@echo "✅ Checking if DB files are actual binaries (not pointers)..."
# 	@for f in db/*.db frontend/db/*.db; do \
# 		if [ -f "$$f" ]; then \
# 			echo "File: $$f"; \
# 			head -n 3 $$f; \
# 			echo "---"; \
# 		fi; \
# 	done

# 	@echo "✅ DB pull completed."

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
	@export $$(grep -v '^#' .env | xargs) && \
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
		b2-config:hexmos/freedevtools/content/db/cheatsheets-db.db \
		db/all_dbs/ \
		--checksum \
		--retries 20 \
		--low-level-retries 30 \
		--retries-sleep 10s \
		--progress
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
	echo "✅ Database file uploaded successfully"

# trigger build locally and deploy to production server via rsync
local-prod-build:
	bash ./scripts/local-prod-build.sh

%:
	@: