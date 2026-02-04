package http_cache

import (
	emojis_components "fdt-templ/components/pages/emojis"
	"fdt-templ/internal/db/emojis"
	"fdt-templ/internal/types"
	"log"
)

func CheckEmojisUpdatedAt(db *emojis.DB, routeType types.RouteType, category, subCategory, param string) (string, *types.RouteInfo) {
	info := &types.RouteInfo{
		Type:            routeType,
		CategorySlug:    category,
		SubCategorySlug: subCategory,
		ParamSlug:       param,
	}

	var updatedAt string
	var err error

	// Handle vendor prefix logic
	isVendor := category == "apple-emojis" || category == "discord-emojis"

	switch routeType {
	case types.TypeIndex:
		overview, e := db.GetOverview()
		if e == nil && overview != nil {
			updatedAt = overview.LastUpdatedAt
		}
		err = e
	case types.TypeCategory:
		if isVendor {
			// e.g., /emojis/apple-emojis/ -> use index timestamp
			overview, e := db.GetOverview()
			if e == nil && overview != nil {
				updatedAt = overview.LastUpdatedAt
			}
			err = e
		} else {
			categoryName := emojis_components.SlugToCategory(category)
			updatedAt, err = db.GetEmojiCategoryUpdatedAt(categoryName)
			// Handle ambiguity: if not found as category, could be a flat emoji slug (ParamSlug is set by DetectRoute)
			if (err != nil || updatedAt == "") && param != "" {
				slugHash := emojis.HashStringToInt64(param)
				if u, e2 := db.GetEmojiUpdatedAt(slugHash); e2 == nil && u != "" {
					updatedAt = u
					info.Type = types.TypeDetail // Correct the type for the handler
				}
			}
		}
	case types.TypeSubCategory:
		if isVendor {
			// e.g., /emojis/apple-emojis/smileys-emotion/ -> it's actually an emoji category
			// We need to check if subCategory is a category or an emoji
			categoryName := emojis_components.SlugToCategory(subCategory)
			updatedAt, err = db.GetEmojiCategoryUpdatedAt(categoryName)
			if err != nil || updatedAt == "" {
				// Try as emoji slug
				slugHash := emojis.HashStringToInt64(subCategory)
				if u, e2 := db.GetEmojiUpdatedAt(slugHash); e2 == nil && u != "" {
					updatedAt = u
					info.Type = types.TypeDetail
					info.ParamSlug = subCategory
				}
			}
		} else {
			// e.g., /emojis/category/page -> it's a category
			categoryName := emojis_components.SlugToCategory(category)
			updatedAt, err = db.GetEmojiCategoryUpdatedAt(categoryName)
		}
	case types.TypeDetail:
		slug := param
		if slug == "" {
			slug = subCategory
		}
		slugHash := emojis.HashStringToInt64(slug)
		updatedAt, err = db.GetEmojiUpdatedAt(slugHash)
	}

	if err != nil {
		log.Printf("[HTTP_CACHE] Error fetching updated_at for emojis %v: %v", routeType, err)
		return "", info
	}

	return updatedAt, info
}
