package http_cache

import (
	"log"

	"fdt-templ/internal/db/tldr"
	"fdt-templ/internal/types"
)

func CheckTldrUpdatedAt(db *tldr.DB, routeType types.RouteType, category, param string) (string, *types.RouteInfo) {
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
		hash := tldr.CalculateHash(category)
		info.HashID = hash
		updatedAt, err = db.GetClusterUpdatedAt(hash)

	case types.TypeDetail:
		hash := tldr.CalculatePageHash(category, param)
		info.HashID = hash
		updatedAt, err = db.GetUpdatedAtForCommands(hash)
	}

	if err != nil {
		log.Printf("[HTTP_CACHE] Error fetching updated_at for tldr %v: %v", routeType, err)
		return "", info
	}

	return updatedAt, info
}
