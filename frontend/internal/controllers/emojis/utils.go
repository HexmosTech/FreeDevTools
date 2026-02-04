package emojis

import (
	emojis_components "fdt-templ/components/pages/emojis"
	"fdt-templ/internal/db/emojis"
	"log"
	"strings"
	"sync"
)

var (
	categorySlugMapOnce sync.Once
	categorySlugMap     map[string]bool
)

// InitCategorySlugMap initializes the category slug map at startup (called once)
func InitCategorySlugMap(db *emojis.DB) {
	categorySlugMapOnce.Do(func() {
		categories, err := db.GetEmojiCategories()
		if err != nil {
			log.Printf("Error fetching categories for slug map: %v", err)
			categorySlugMap = make(map[string]bool)
			return
		}

		categorySlugMap = make(map[string]bool, len(categories)*2)

		for _, cat := range categories {
			catSlug := emojis_components.CategoryToSlug(cat)
			categorySlugMap[catSlug] = true
			normalizedSlug := strings.ReplaceAll(catSlug, "--", "-")
			categorySlugMap[normalizedSlug] = true
		}

		appleCategories, err := db.GetAppleCategoriesWithPreviewEmojis(1)
		if err == nil {
			for _, cat := range appleCategories {
				catSlug := emojis_components.CategoryToSlug(cat.Category)
				categorySlugMap[catSlug] = true
				normalizedSlug := strings.ReplaceAll(catSlug, "--", "-")
				categorySlugMap[normalizedSlug] = true
			}
		}

		discordCategories, err := db.GetDiscordCategoriesWithPreviewEmojis(1)
		if err == nil {
			for _, cat := range discordCategories {
				catSlug := emojis_components.CategoryToSlug(cat.Category)
				categorySlugMap[catSlug] = true
				normalizedSlug := strings.ReplaceAll(catSlug, "--", "-")
				categorySlugMap[normalizedSlug] = true
			}
		}

		log.Printf("[EMOJI_CTRL] Initialized category slug map with %d unique category slugs", len(categorySlugMap))
	})
}

// IsCategorySlug checks if a slug is a category slug
func IsCategorySlug(slug string) bool {
	normalizedSlug := strings.ReplaceAll(slug, "--", "-")
	return categorySlugMap[normalizedSlug]
}

// GenerateSlugVariations generates common slug variations based on database patterns
func GenerateSlugVariations(slug string) []string {
	var variations []string
	seen := make(map[string]bool)

	add := func(v string) {
		if !seen[v] {
			variations = append(variations, v)
			seen[v] = true
		}
	}

	// Original logic from emojis_routes.go
	if strings.HasPrefix(slug, "keycap-") || strings.HasPrefix(slug, "keycap:") {
		normalized := strings.ReplaceAll(slug, ":", "-")
		normalized = strings.ReplaceAll(normalized, "--", "-")
		parts := strings.Split(normalized, "-")
		if len(parts) >= 2 {
			num := parts[1]
			if num == "" && len(parts) >= 3 {
				num = parts[2]
			}
			numMap := map[string]string{
				"0": "zero", "1": "one", "2": "two", "3": "three", "4": "four",
				"5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine",
			}
			if digit, ok := numMap[num]; ok {
				suffix := ""
				startIdx := 2
				if num == "" {
					startIdx = 3
				}
				if len(parts) > startIdx {
					suffix = "-" + strings.Join(parts[startIdx:], "-")
				}
				add("keycap-digit-" + digit + suffix)
			}
			if num == "10" {
				suffix := ""
				startIdx := 2
				if num == "" {
					startIdx = 3
				}
				if len(parts) > startIdx {
					suffix = "-" + strings.Join(parts[startIdx:], "-")
				}
				add("keycap-10" + suffix)
			}
		}
	}

	if strings.Contains(slug, "man-in-business-suit-levitating") {
		add(strings.ReplaceAll(slug, "man-in-business-suit-levitating", "person-in-suit-levitating"))
	}

	if strings.Contains(slug, "raised-hand-with-fingers-splayed") {
		add(strings.ReplaceAll(slug, "raised-hand-with-fingers-splayed", "hand-with-fingers-splayed"))
	}

	if strings.Contains(slug, "bride-with-veil") {
		add(strings.ReplaceAll(slug, "bride-with-veil", "person-with-veil"))
		add(strings.ReplaceAll(slug, "bride-with-veil", "man-with-veil"))
		add(strings.ReplaceAll(slug, "bride-with-veil", "woman-with-veil"))
	}

	if strings.Contains(slug, "blond-haired-person") {
		if strings.Contains(slug, "-skin-tone") {
			parts := strings.Split(slug, "-")
			skinToneIdx := -1
			for i, p := range parts {
				if p == "skin" && i+1 < len(parts) && parts[i+1] == "tone" {
					skinToneIdx = i
					break
				}
			}
			if skinToneIdx > 0 {
				beforeSkinTone := strings.Join(parts[0:skinToneIdx], "-")
				beforeSkinTone = strings.ReplaceAll(beforeSkinTone, "blond-haired-person", "person")
				skinTonePart := strings.Join(parts[skinToneIdx:skinToneIdx+2], "-")
				add(beforeSkinTone + "-" + skinTonePart + "-blond-hair")
			}
		} else {
			add(strings.ReplaceAll(slug, "blond-haired-person", "person") + "-blond-hair")
		}
	}
	if strings.Contains(slug, "blond-haired-woman") {
		if strings.Contains(slug, "-skin-tone") {
			parts := strings.Split(slug, "-")
			skinToneIdx := -1
			for i, p := range parts {
				if p == "skin" && i+1 < len(parts) && parts[i+1] == "tone" {
					skinToneIdx = i
					break
				}
			}
			if skinToneIdx > 0 {
				beforeSkinTone := strings.Join(parts[0:skinToneIdx], "-")
				beforeSkinTone = strings.ReplaceAll(beforeSkinTone, "blond-haired-woman", "woman")
				skinTonePart := strings.Join(parts[skinToneIdx:skinToneIdx+2], "-")
				add(beforeSkinTone + "-" + skinTonePart + "-blond-hair")
			}
		} else {
			add(strings.ReplaceAll(slug, "blond-haired-woman", "woman") + "-blond-hair")
		}
	}
	if strings.Contains(slug, "blond-haired-man") {
		if strings.Contains(slug, "-skin-tone") {
			parts := strings.Split(slug, "-")
			skinToneIdx := -1
			for i, p := range parts {
				if p == "skin" && i+1 < len(parts) && parts[i+1] == "tone" {
					skinToneIdx = i
					break
				}
			}
			if skinToneIdx > 0 {
				beforeSkinTone := strings.Join(parts[0:skinToneIdx], "-")
				beforeSkinTone = strings.ReplaceAll(beforeSkinTone, "blond-haired-man", "man")
				skinTonePart := strings.Join(parts[skinToneIdx:skinToneIdx+2], "-")
				add(beforeSkinTone + "-" + skinTonePart + "-blond-hair")
			}
		} else {
			add(strings.ReplaceAll(slug, "blond-haired-man", "man") + "-blond-hair")
		}
	}

	if strings.Contains(slug, "heavy-heart-exclamation") {
		add(strings.ReplaceAll(slug, "heavy-heart-exclamation", "heart-exclamation"))
	}

	if strings.Contains(slug, "ballot-box-with-check") {
		add(strings.ReplaceAll(slug, "ballot-box-with-check", "ballot-box-with-ballot"))
	}

	if strings.Contains(slug, "man-with-chinese-cap") {
		add(strings.ReplaceAll(slug, "man-with-chinese-cap", "person-with-skullcap"))
		add(strings.ReplaceAll(slug, "man-with-chinese-cap", "man-with-skullcap"))
		add(strings.ReplaceAll(slug, "man-with-chinese-cap", "woman-with-skullcap"))
	}

	return variations
}
