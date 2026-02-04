package http_cache

import (
	"fdt-templ/internal/db/installerpedia"
	"fdt-templ/internal/types"
	"log"
)

func CheckInstallerpediaUpdatedAt(db *installerpedia.DB, routeType types.RouteType, category, param string) (string, *types.RouteInfo) {
	info := &types.RouteInfo{
		Type:         routeType,
		CategorySlug: category,
		ParamSlug:    param,
	}

	var updatedAt string
	var err error

	switch routeType {
	case types.TypeIndex:
		updatedAt, err = db.GetLastUpdatedAt()
	case types.TypeCategory:
		updatedAt, err = db.GetCategoryUpdatedAt(category)
	case types.TypeDetail:
		hashID := installerpedia.HashStringToInt64(param)
		info.HashID = hashID
		updatedAt, err = db.GetRepoUpdatedAt(hashID)
	default:
		// Unknown route type, no cache
		return "", info
	}

	if err != nil {
		log.Printf("[HTTP_CACHE] Installerpedia DB error: %v", err)
		// If DB error, just return empty updatedAt (force refresh/no cache)
		return "", info
	}

	return updatedAt, info
}
