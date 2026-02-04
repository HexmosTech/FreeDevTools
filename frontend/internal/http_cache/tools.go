package http_cache

import (
 	"fdt-templ/internal/db/tools"
	"fdt-templ/internal/types"
	"log"
)

// CheckToolUpdatedAt checks the last modified time for tools pages.
func CheckToolUpdatedAt(routeType types.RouteType, slug string, toolsConfig *tools.Config) (string, *types.RouteInfo) {
	info := &types.RouteInfo{
		Type:      routeType,
		ParamSlug: slug,
	}

	var updatedAt string

	switch routeType {
	case types.TypeIndex:
		// For index, find the most recently updated tool
		for _, t := range toolsConfig.GetToolsList() {
			if t.LastModifiedAt > updatedAt {
				updatedAt = t.LastModifiedAt
			}
		}

	case types.TypeDetail:
		// Note: helper.DetectRoute treats /t/slug as a Category.
		// We treat it as a Tool Detail or just a Tool Page.
		var tool tools.Tool
		var ok bool

		if toolsConfig == nil {
			log.Printf("[HTTP_CACHE] DB is nil for tool lookup: %s", slug)
			return "", nil
		}

		tool, ok = toolsConfig.GetTool(slug)

		if !ok {
			log.Printf("[HTTP_CACHE] Tool not found: %s", slug)
			return "", nil
		}
		updatedAt = tool.LastModifiedAt
		// Correct the info type to Detail as it's a specific tool page.
		// This is critical for ensuring the correct cache key (e.g., Detail vs Category) is generated.
		info.Type = types.TypeDetail
		info.ParamSlug = slug
	}

	return updatedAt, info
}
