package t

import (
	"fmt"
	"net/http"
	"os"
	"strings"

	"fdt-templ/internal/db/tools"
	"fdt-templ/internal/config"
)

// getSiteURL returns the site URL from SITE environment variable
func getSiteURL() string {
	return config.GetSiteURL()
}

// GenerateSitemapXML generates the sitemap XML string for tools
func GenerateSitemapXML() string {
	allTools := tools.GetAllTools()
	siteURL := getSiteURL()

	defaultLastMod := "2026-01-02T16:25:11Z"
	if len(allTools) > 0 && allTools[0].LastModifiedAt != "" {
		defaultLastMod = allTools[0].LastModifiedAt
	}

	var urls []string

	// Root URL
	urls = append(urls, fmt.Sprintf(`  <url>
    <loc>%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`, siteURL, defaultLastMod))

	// Main Tools URL
	urls = append(urls, fmt.Sprintf(`  <url>
    <loc>%s/t/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`, siteURL, defaultLastMod))

	for _, tool := range allTools {
		var fullURL string
		if strings.HasPrefix(tool.Path, "/freedevtools") {
			relPath := strings.TrimPrefix(tool.Path, "/freedevtools")
			fullURL = siteURL + relPath
		} else {
			// fallback
			fullURL = siteURL + tool.Path
		}

		lastmod := tool.LastModifiedAt
		if lastmod == "" {
			lastmod = defaultLastMod
		}

		urls = append(urls, fmt.Sprintf(`  <url>
    <loc>%s</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.6</priority>
  </url>`, fullURL, lastmod))
	}

	return fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
%s
</urlset>`, strings.Join(urls, "\n"))
}

// HandleSitemap generates and serves the sitemap for tools
func HandleSitemap(w http.ResponseWriter, r *http.Request) {
	// Try serving static file first
	staticFile := "sitemaps/t/sitemap.xml"
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	// Fallback to dynamic generation
	xml := GenerateSitemapXML()
	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}
