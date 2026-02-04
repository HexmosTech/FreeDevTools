package http_cache

import (
	"log"

	"fdt-templ/internal/db/png_icons"
	"fdt-templ/internal/types"
)

func CheckPngIconsUpdatedAt(db *png_icons.DB, routeType types.RouteType, category, param string) (string, *types.RouteInfo) {
	info := &types.RouteInfo{
		Type:         routeType,
		CategorySlug: category,
		ParamSlug:    param,
	}

	var updatedAt string
	var err error

	switch routeType {
	case types.TypeIndex:
		overview, err := db.GetOverview()
		if err == nil && overview != nil {
			updatedAt = overview.LastUpdatedAt
		}
	case types.TypeCategory:
		hashName := png_icons.HashNameToKey(category)
		updatedAt, err = db.GetClusterUpdatedAt(hashName)
	case types.TypeDetail:
		updatedAt, err = db.GetIconUpdatedAt(category, param)
	}

	if err != nil {
		log.Printf("[HTTP_CACHE] Error fetching updated_at for png_icons %v: %v", routeType, err)
		return "", info
	}

	return updatedAt, info
}
