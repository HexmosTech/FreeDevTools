.PHONY: build deploy run clean gen banners check-pagespeed deploy-no-pagespeed local-env sync-db

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
	@sudo -v
	@curl https://rclone.org/install.sh | sudo bash
	@echo "✅ rclone installed successfully"
	@rclone version
	@mkdir -p ~/.config/rclone
	@echo "[b2-config]" > ~/.config/rclone/rclone.conf
	@echo "type = b2" >> ~/.config/rclone/rclone.conf
	@echo "account = ${B2_ACCOUNT_ID}" >> ~/.config/rclone/rclone.conf
	@echo "key = ${B2_APPLICATION_KEY}" >> ~/.config/rclone/rclone.conf
	@echo "hard_delete = false" >> ~/.config/rclone/rclone.conf
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
		--progress
	@echo "✅ Database sync completed"