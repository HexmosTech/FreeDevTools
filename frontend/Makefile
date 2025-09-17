.PHONY: build deploy run clean gen banners check-pagespeed deploy-no-pagespeed local-env

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
