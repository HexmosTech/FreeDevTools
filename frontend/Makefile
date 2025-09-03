.PHONY: build deploy run clean gen

# Build the project
build:
	npm run build

# Deploy: build first, then rsync to server
deploy: build 
	rsync -avz --progress ./dist/ nats03-do:/tools/

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

# Convert images to WebP format (usage: make convert-to-webp src=path/to/image.jpg out=path/to/image.webp)
# Requires: sudo dnf install -y libwebp-tools (Fedora) or sudo apt install -y webp (Debian/Ubuntu)
convert-to-webp:
	./scripts/convert-to-webp.sh "$(src)" "$(out)"
