package blog

import (
	"encoding/xml"
	"net/http"

	"fdt-templ/internal/config"

	blog_content "fdt-templ/internal/blog"
)

type sitemapURL struct {
	Loc string `xml:"loc"`
}

type sitemapURLSet struct {
	XMLName xml.Name     `xml:"urlset"`
	Xmlns   string       `xml:"xmlns,attr"`
	URLs    []sitemapURL `xml:"url"`
}

func HandleSitemap(w http.ResponseWriter, r *http.Request, store *blog_content.Store) {
	siteURL := config.GetSiteURL()

	urlSet := sitemapURLSet{
		Xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
		URLs: []sitemapURL{
			{Loc: siteURL + "/blog/"},
		},
	}

	for _, slug := range store.SitemapSlugs() {
		urlSet.URLs = append(urlSet.URLs, sitemapURL{Loc: siteURL + "/blog/" + slug + "/"})
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Write([]byte(xml.Header))
	enc := xml.NewEncoder(w)
	enc.Indent("", "  ")
	enc.Encode(urlSet)
}
