package utils

import (
	"fdt-templ/internal/types"
	"strings"
)

var EmojiCategoryChecker func(string) bool

func DetectRoute(path string, section string) (types.RouteInfo, bool) {
	// Index Root
	if MatchIndex(path) {
		return types.RouteInfo{
			Type: types.TypeIndex,
			Page: 1,
		}, true
	}

	// Exception Paths (3 parts that look like pagination but are details)
	if IsExceptionPath(path) {
		parts := strings.Split(path, "/")
		if len(parts) == 3 {
			return types.RouteInfo{
				Type:            types.TypeDetail,
				CategorySlug:    unescape(parts[0]),
				SubCategorySlug: unescape(parts[1]),
				ParamSlug:       unescape(parts[2]),
			}, true
		}
	}

	// Credits (Static)
	if path == "credits" {
		return types.RouteInfo{}, false
	}

	// Index Pagination
	if page, ok := MatchPagination(path); ok {
		return types.RouteInfo{
			Type: types.TypeIndex,
			Page: page,
		}, true
	}

	// Section-specific structural overrides
	if section == "tools" {
		if slug, ok := MatchCategory(path); ok {
			return types.RouteInfo{
				Type:      types.TypeDetail,
				ParamSlug: slug,
				Page:      1,
			}, true
		}
	}

	if section == "emojis" {
		// Handle 1 part: /category/ or /slug/
		if category, ok := MatchCategory(path); ok {
			if category == "apple-emojis" || category == "discord-emojis" {
				return types.RouteInfo{
					Type:         types.TypeCategory,
					CategorySlug: category,
					Page:         1,
				}, true
			}

			// Use the validator for general emoji categories
			if EmojiCategoryChecker != nil && EmojiCategoryChecker(category) {
				return types.RouteInfo{
					Type:         types.TypeCategory,
					CategorySlug: category,
					Page:         1,
				}, true
			}

			// Not a category, treat as detail
			return types.RouteInfo{
				Type:      types.TypeDetail,
				ParamSlug: category,
			}, true
		}
	}

	// Category Root
	if category, ok := MatchCategory(path); ok {
		return types.RouteInfo{
			Type:         types.TypeCategory,
			CategorySlug: category,
			Page:         1,
		}, true
	}

	// Category Pagination
	if category, page, ok := MatchCategoryPagination(path); ok {
		return types.RouteInfo{
			Type:         types.TypeCategory,
			CategorySlug: category,
			Page:         page,
		}, true
	}

	// Subcategory Pagination
	if category, subcategory, page, ok := MatchSubcategoryPagination(path); ok {
		return types.RouteInfo{
			Type:            types.TypeSubCategory,
			CategorySlug:    category,
			SubCategorySlug: subcategory,
			Page:            page,
		}, true
	}

	// Subcategory Detail
	if category, subcategory, slug, ok := MatchSubcategoryDetail(path); ok {
		return types.RouteInfo{
			Type:            types.TypeDetail,
			CategorySlug:    category,
			SubCategorySlug: subcategory,
			ParamSlug:       slug,
		}, true
	}

	// Deep Detail (4+ parts)
	if category, subcategory, slug, ok := MatchDeepDetail(path); ok {
		return types.RouteInfo{
			Type:            types.TypeDetail,
			CategorySlug:    category,
			SubCategorySlug: subcategory,
			ParamSlug:       slug,
		}, true
	}

	// SubCategory / Detail Page (2 parts)
	if category, slug, ok := MatchDetailPage(path); ok {
		// Section-specific overrides for 2-part URLs
		if section == "emojis" {
			// Vendor check: /apple-emojis/slug-or-category/
			if category == "apple-emojis" || category == "discord-emojis" {
				if EmojiCategoryChecker != nil && EmojiCategoryChecker(slug) {
					return types.RouteInfo{
						Type:            types.TypeSubCategory,
						CategorySlug:    category,
						SubCategorySlug: slug,
						Page:            1,
					}, true
				}
			}
		}

		// Default type for 2-part URLs is Detail (e.g., /category/slug/)
		// Exception: man_pages uses 2-part for SubCategory (e.g., /category/subcategory/)
		routeType := types.TypeDetail
		if section == "man_pages" {
			routeType = types.TypeSubCategory
		}

		return types.RouteInfo{
			Type:            routeType,
			CategorySlug:    category,
			SubCategorySlug: slug,
			ParamSlug:       slug,
			Page:            1,
		}, true
	}

	return types.RouteInfo{}, false
}
