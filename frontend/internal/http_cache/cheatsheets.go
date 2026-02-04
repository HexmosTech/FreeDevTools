package http_cache

import (
	"log"

	"fdt-templ/internal/db/cheatsheets"
	"fdt-templ/internal/types"
)

func CheckCheatsheetUpdatedAt(db *cheatsheets.DB, routeType types.RouteType, category, param string) (string, *types.RouteInfo) {
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
		updatedAt, err = db.GetUpdatedAtForCategory(category)

	case types.TypeDetail:
		hashID := cheatsheets.HashURLToKeyInt(category, param)
		info.HashID = hashID
		updatedAt, err = db.GetUpdatedAtForCheatsheet(hashID)
	}

	if err != nil {
		log.Printf("[HTTP_CACHE] Error fetching updated_at for %v: %v", routeType, err)
		return "", info
	}

	return updatedAt, info
}
