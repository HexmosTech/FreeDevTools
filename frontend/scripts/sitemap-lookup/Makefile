.PHONY: download check clean build

build:
	go build -o sitemap-lookup main.go

download: build
	./sitemap-lookup download -root https://hexmos.com/freedevtools/sitemap.xml -dir sitemaps

# Usage: make check url=https://hexmos.com/freedevtools/t/json-to-yaml
check: build
	./sitemap-lookup check -url "$(url)" -dir sitemaps

clean:
	rm -rf sitemaps sitemap-lookup
