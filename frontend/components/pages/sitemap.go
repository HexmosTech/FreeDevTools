package pages

import (
	"fmt"
	"net/http"

	"fdt-templ/internal/config"
)

// HandleRootSitemap generates the root sitemap.xml index
func HandleRootSitemap(w http.ResponseWriter, r *http.Request) {
	site := config.GetSiteURL()
	// Use the production date for the root sitemap index
	now := "2025-11-26T15:57:36.402Z"

	sitemaps := []string{
		"/tldr/sitemap.xml",
		"/t/sitemap.xml",
		"/c/sitemap.xml",
		"/c_pages/sitemap.xml",
		"/svg_icons/sitemap.xml",
		"/png_icons/sitemap.xml",
		"/emojis/sitemap.xml",
		"/emojis_pages/sitemap.xml",
		"/mcp/sitemap.xml",
		"/man-pages/sitemap.xml",
		"/installerpedia/sitemap.xml",
		"/installerpedia_pages/sitemap.xml",
		"/temporary/sitemap.xml",
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")

	xml := `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

	for _, sitemap := range sitemaps {
		fullURL := fmt.Sprintf("%s%s", site, sitemap)

		xml += fmt.Sprintf(`  <sitemap>
    <loc>%s</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, fullURL, now)
	}

	xml += "</sitemapindex>"
	fmt.Fprint(w, xml)
}
