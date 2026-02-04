package http_cache

import (
	"log"
	"net/http"
	"strings"

	"fdt-templ/internal/db/cheatsheets"
	"fdt-templ/internal/db/emojis"
	"fdt-templ/internal/db/installerpedia"
	"fdt-templ/internal/db/man_pages"
	"fdt-templ/internal/db/mcp"
	"fdt-templ/internal/db/png_icons"
	"fdt-templ/internal/db/svg_icons"
	"fdt-templ/internal/db/tldr"
	"fdt-templ/internal/db/tools"

	"fdt-templ/internal/types"
)

func CheckETag(w http.ResponseWriter, r *http.Request, updatedAt string) bool {
	if updatedAt == "" {
		return false
	}
	// Use Weak ETag to survive Cloudflare/compression middleware
	etag := "W/\"" + updatedAt + "\""

	w.Header().Set("ETag", etag)
	w.Header().Set("Last-Modified", updatedAt)

	// Check If-None-Match (ETag)
	if match := r.Header.Get("If-None-Match"); match != "" {
		// handles cases where client sends Strong or Weak ETag
		cleanMatch := strings.TrimPrefix(match, "W/")
		cleanEtag := strings.TrimPrefix(etag, "W/")

		if cleanMatch == cleanEtag {
			w.WriteHeader(http.StatusNotModified)
			return true
		}
	}

	// Check If-Modified-Since
	if since := r.Header.Get("If-Modified-Since"); since != "" {
		if since == updatedAt {
			w.WriteHeader(http.StatusNotModified)
			return true
		}
	}

	return false
}

// CheckCache checks if the content has been modified.
// db: The database connection (can be nil for sections that use static config, like "tools").
func CheckCache(w http.ResponseWriter, r *http.Request, db any, section string, routeInfo types.RouteInfo) (bool, *types.RouteInfo) {
	var updatedAt string
	var info *types.RouteInfo

	switch section {
	case "cheatsheets":
		if csDB, ok := db.(*cheatsheets.DB); ok {
			rType := routeInfo.Type
			if rType == types.TypeSubCategory {
				rType = types.TypeDetail
			}
			updatedAt, info = CheckCheatsheetUpdatedAt(csDB, rType, routeInfo.CategorySlug, routeInfo.ParamSlug)
		} else {
			log.Printf("[HTTP_CACHE] Error: Invalid DB type for cheatsheets cache check")
			return false, nil
		}
	case "tldr":
		if tldrDB, ok := db.(*tldr.DB); ok {
			rType := routeInfo.Type
			if rType == types.TypeSubCategory {
				rType = types.TypeDetail
			}
			updatedAt, info = CheckTldrUpdatedAt(tldrDB, rType, routeInfo.CategorySlug, routeInfo.ParamSlug)
		} else {
			log.Printf("[HTTP_CACHE] Error: Invalid DB type for tldr cache check")
			return false, nil
		}
	case "svg_icons":
		if svgDB, ok := db.(*svg_icons.DB); ok {
			rType := routeInfo.Type
			if rType == types.TypeSubCategory {
				rType = types.TypeDetail
			}
			updatedAt, info = CheckSvgIconsUpdatedAt(svgDB, rType, routeInfo.CategorySlug, routeInfo.ParamSlug)
		} else {
			log.Printf("[HTTP_CACHE] Error: Invalid DB type for svg_icons cache check")
			return false, nil
		}
	case "mcp":
		if mcpDB, ok := db.(*mcp.DB); ok {
			updatedAt, info = CheckMcpUpdatedAt(mcpDB, routeInfo.Type, routeInfo.CategorySlug, routeInfo.ParamSlug)
		} else {
			log.Printf("[HTTP_CACHE] Error: Invalid DB type for mcp cache check")
			return false, nil
		}
	case "installerpedia":
		if ipDB, ok := db.(*installerpedia.DB); ok {
			updatedAt, info = CheckInstallerpediaUpdatedAt(ipDB, routeInfo.Type, routeInfo.CategorySlug, routeInfo.ParamSlug)
		} else {
			log.Printf("[HTTP_CACHE] Error: Invalid DB type for installerpedia cache check")
			return false, nil
		}
	case "png_icons":
		if pngDB, ok := db.(*png_icons.DB); ok {
			rType := routeInfo.Type
			if rType == types.TypeSubCategory {
				rType = types.TypeDetail
			}
			updatedAt, info = CheckPngIconsUpdatedAt(pngDB, rType, routeInfo.CategorySlug, routeInfo.ParamSlug)
		} else {
			log.Printf("[HTTP_CACHE] Error: Invalid DB type for png_icons cache check")
			return false, nil
		}
	case "man_pages":
		if mpDB, ok := db.(*man_pages.DB); ok {
			updatedAt, info = CheckManPagesUpdatedAt(mpDB, routeInfo.Type, routeInfo.CategorySlug, routeInfo.SubCategorySlug, routeInfo.ParamSlug)
		} else {
			log.Printf("[HTTP_CACHE] Error: Invalid DB type for man_pages cache check")
			return false, nil
		}
	case "emojis":
		if emojiDB, ok := db.(*emojis.DB); ok {
			updatedAt, info = CheckEmojisUpdatedAt(emojiDB, routeInfo.Type, routeInfo.CategorySlug, routeInfo.SubCategorySlug, routeInfo.ParamSlug)
		} else {
			log.Printf("[HTTP_CACHE] Error: Invalid DB type for emojis cache check")
			return false, nil
		}
	case "tools":
		// Type assertion to get the correct DB instance.
		// Fallback nil DB handling is done inside CheckToolUpdatedAt if type assertion fails (which shouldn't happen).
		toolsConfig, _ := db.(*tools.Config)
		updatedAt, info = CheckToolUpdatedAt(routeInfo.Type, routeInfo.ParamSlug, toolsConfig)
	default:
		log.Printf("[HTTP_CACHE] Unknown section: %s", section)
		return false, nil
	}

	if info == nil {
		return false, nil
	}

	// Restore Page if missing (since we didn't pass it)
	info.Page = routeInfo.Page

	if CheckETag(w, r, updatedAt) {
		return true, info
	}

	return false, info
}
