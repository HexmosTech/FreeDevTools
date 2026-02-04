package http_cache

import (
	"log"

	"fdt-templ/internal/db/man_pages"
	"fdt-templ/internal/types"
)

func CheckManPagesUpdatedAt(db *man_pages.DB, routeType types.RouteType, category, subCategory, param string) (string, *types.RouteInfo) {
	info := &types.RouteInfo{
		Type:            routeType,
		CategorySlug:    category,
		SubCategorySlug: subCategory,
		ParamSlug:       param,
	}

	var updatedAt string
	var err error

	switch routeType {
	case types.TypeIndex:
		overview, e := db.GetOverview()
		if e == nil && overview != nil {
			updatedAt = overview.LastUpdatedAt
		}
		err = e

	case types.TypeCategory:
		updatedAt, err = db.GetCategoryUpdatedAt(category)

	case types.TypeSubCategory:
		updatedAt, err = db.GetSubCategoryUpdatedAt(category, subCategory)

	case types.TypeDetail:
		hashID := man_pages.HashURLToKey(category, subCategory, param)
		info.HashID = hashID
		updatedAt, err = db.GetManPageUpdatedAt(hashID)
	}

	if err != nil {
		log.Printf("[HTTP_CACHE] Error fetching updated_at for man_pages %v: %v", routeType, err)
		return "", info
	}

	return updatedAt, info
}
