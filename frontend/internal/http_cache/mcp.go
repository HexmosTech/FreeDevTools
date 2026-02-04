package http_cache

import (
	"fdt-templ/internal/db/mcp"
	"fdt-templ/internal/types"
)

func CheckMcpUpdatedAt(db *mcp.DB, routeType types.RouteType, category, param string) (string, *types.RouteInfo) {
	info := &types.RouteInfo{
		Type:         routeType,
		CategorySlug: category,
		ParamSlug:    param,
	}

	// HashID is calculated regardless of cache hit/miss for Detail pages,
	// because we need it for the controller if cache misses.
	if routeType == types.TypeDetail {
		// Use HashURLToKey to get the hashID
		info.HashID = mcp.HashURLToKey(category, param)
	}

	var updatedAt string
	var err error

	switch routeType {
	case types.TypeIndex:
		updatedAt, err = db.GetLastUpdatedAt()
	case types.TypeCategory:
		updatedAt, err = db.GetCategoryUpdatedAt(category)
	case types.TypeDetail:
		if category == "" {
			updatedAt, err = db.GetLastUpdatedAt()
		} else {
			updatedAt, err = db.GetMcpPageUpdatedAt(info.HashID)
		}
	}

	if err != nil {
		// If DB error, just return empty updatedAt (force refresh/no cache)
		return "", info
	}

	return updatedAt, info
}
