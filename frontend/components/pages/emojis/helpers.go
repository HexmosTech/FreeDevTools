package emojis

import (
	emojis_db "fdt-templ/internal/db/emojis"
	"fmt"
	"strings"
)

// FormatCount formats a count number, showing "k" for thousands (exported)
func FormatCount(count int) string {
	return formatCount(count)
}

// formatCount formats a count number, showing "k" for thousands with decimal precision
func formatCount(count int) string {
	if count >= 1000 {
		// Show one decimal place for numbers like 4164 -> 4.1k or 4200 -> 4.2k
		thousands := float64(count) / 1000.0
		if thousands == float64(int(thousands)) {
			// If it's a whole number like 4000, show as 4k
			return fmt.Sprintf("%dk", int(thousands))
		}
		// Otherwise show one decimal place
		return fmt.Sprintf("%.1fk", thousands)
	}
	return fmt.Sprintf("%d", count)
}

// FormatCategoryName formats a category name by capitalizing the first letter (exported)
func FormatCategoryName(name string) string {
	if name == "" {
		return name
	}
	return strings.ToUpper(name[:1]) + name[1:]
}

// formatCategoryName formats a category name by capitalizing the first letter (internal)
func formatCategoryName(name string) string {
	return FormatCategoryName(name)
}

// CategoryToSlug converts a category name to a URL slug (exported)
func CategoryToSlug(category string) string {
	return categoryToSlug(category)
}

// categoryToSlug converts a category name to a URL slug.
// It matches the Astro implementation:
//   - lowercases
//   - replaces any run of non [a-z0-9] chars with a single '-'
//   - trims leading / trailing '-'
func categoryToSlug(category string) string {
	s := strings.ToLower(category)

	var b strings.Builder
	prevDash := false

	for _, r := range s {
		if (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') {
			b.WriteRune(r)
			prevDash = false
		} else {
			if !prevDash {
				b.WriteRune('-')
				prevDash = true
			}
		}
	}

	slug := b.String()
	slug = strings.Trim(slug, "-")
	return slug
}

// SlugToCategory converts a URL slug back to a category name (exported for use in routes)
func SlugToCategory(slug string) string {
	// Normalize slug: replace double dashes with single dashes
	normalizedSlug := strings.ReplaceAll(slug, "--", "-")
	
	// Map common slugs to category names
	categoryMap := map[string]string{
		"activities":         "Activities",
		"animals-nature":     "Animals & Nature",
		"food-drink":         "Food & Drink",
		"objects":            "Objects",
		"people-body":        "People & Body",
		"smileys-emotion":    "Smileys & Emotion",
		"symbols":            "Symbols",
		"travel-places":      "Travel & Places",
		"flags":              "Flags",
	}
	if category, ok := categoryMap[normalizedSlug]; ok {
		return category
	}
	// Fallback: capitalize and replace hyphens with spaces
	result := strings.ReplaceAll(normalizedSlug, "-", " ")
	words := strings.Fields(result)
	for i, word := range words {
		if len(word) > 0 {
			words[i] = strings.ToUpper(word[:1]) + word[1:]
		}
	}
	return strings.Join(words, " ")
}

// AllowedCategories are the categories allowed in sitemaps (excluding "Other")
var AllowedCategories = []string{
	"Activities",
	"Animals & Nature",
	"Food & Drink",
	"Objects",
	"People & Body",
	"Smileys & Emotion",
	"Symbols",
	"Travel & Places",
	"Flags",
}

// AppleVendorExcludedEmojis contains emoji slugs excluded from Apple vendor pages
var AppleVendorExcludedEmojis = map[string]bool{
	"person-with-beard": true,
	"woman-in-motorized-wheelchair-facing-right": true,
	"person-in-bed-medium-skin-tone": true,
	"person-in-bed-light-skin-tone": true,
	"person-in-bed-dark-skin-tone": true,
	"person-in-bed-medium-light-skin-tone": true,
	"person-in-bed-medium-dark-skin-tone": true,
	"snowboarder-medium-light-skin-tone": true,
	"snowboarder-dark-skin-tone": true,
	"snowboarder-medium-dark-skin-tone": true,
	"snowboarder-light-skin-tone": true,
	"snowboarder-medium-skin-tone": true,
	"medical-symbol": true,
	"male-sign": true,
	"female-sign": true,
	"woman-with-headscarf": true,
}

// DiscordVendorExcludedEmojis contains emoji slugs excluded from Discord vendor pages
// This is a large list - using a map for O(1) lookup
var DiscordVendorExcludedEmojis = map[string]bool{
	"kiss-person-man-no-skin-tone-medium-skin-tone": true,
	"kiss-man-no-skin-tone-man-dark-skin-tone": true,
	"kiss-person-woman-dark-skin-tone-medium-skin-tone": true,
	"kiss-man-light-skin-tone-woman-medium-light-skin-tone": true,
	"family-adult-child-child": true,
	"couple-with-heart-woman-person-medium-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-man-medium-skin-tone-woman-medium-light-skin-tone": true,
	"couple-with-heart-woman-person-light-skin-tone-no-skin-tone": true,
	"couple-with-heart-man-light-skin-tone-man-no-skin-tone": true,
	"woman_walking_facing_right_medium-dark_skin_tone": true,
	"kiss-man-no-skin-tone-woman-dark-skin-tone": true,
	"couple-with-heart-man-person-medium-dark-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-person-man-medium-skin-tone-medium-dark-skin-tone": true,
	"kiss-person-man-dark-skin-tone-medium-light-skin-tone": true,
	"kiss-man-light-skin-tone-woman-no-skin-tone": true,
	"couple-with-heart-person-person-no-skin-tone-medium-dark-skin-tone": true,
	"woman_kneeling_facing_right": true,
	"couple-with-heart-woman-person-light-skin-tone-medium-skin-tone": true,
	"couple-with-heart-man-person-no-skin-tone-medium-skin-tone": true,
	"couple-with-heart-person-woman-medium-skin-tone-dark-skin-tone": true,
	"kiss-man-medium-light-skin-tone-woman-no-skin-tone": true,
	"woman_running_facing_right_dark_skin_tone": true,
	"couple-with-heart-woman-dark-skin-tone-man-no-skin-tone": true,
	"kiss-person-man-no-skin-tone-light-skin-tone": true,
	"couple-with-heart-woman-person-light-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-man-person-medium-light-skin-tone-dark-skin-tone": true,
	"kiss-man-light-skin-tone-man-no-skin-tone": true,
	"man_in_motorized_wheelchair_facing_right_medium-dark_skin_tone": true,
	"couple-with-heart-woman-no-skin-tone-man-medium-skin-tone": true,
	"kiss-person-woman-medium-skin-tone-light-skin-tone": true,
	"kiss-woman-person-dark-skin-tone-no-skin-tone": true,
	"kiss-person-man-medium-dark-skin-tone-light-skin-tone": true,
	"kiss-man-no-skin-tone-woman-light-skin-tone": true,
	"couple-with-heart-person-woman-light-skin-tone-no-skin-tone": true,
	"couple-with-heart-man-medium-dark-skin-tone-woman-no-skin-tone": true,
	"man_in_manual_wheelchair_facing_right_dark_skin_tone": true,
	"kiss-person-person-medium-skin-tone": true,
	"couple-with-heart-woman-person-medium-light-skin-tone-light-skin-tone": true,
	"person_in_manual_wheelchair_facing_right": true,
	"couple-with-heart-man-no-skin-tone-man-medium-skin-tone": true,
	"man_with_white_cane_facing_right_medium-dark_skin_tone": true,
	"couple-with-heart-woman-no-skin-tone-woman-dark-skin-tone": true,
	"kiss-person-woman-medium-light-skin-tone-light-skin-tone": true,
	"person_running_facing_right_dark_skin_tone": true,
	"couple-with-heart-man-medium-dark-skin-tone-woman-medium-light-skin-tone": true,
	"couple-with-heart-man-person-dark-skin-tone-medium-dark-skin-tone": true,
	"kiss-woman-person": true,
	"handshake-no-skin-tone-no-skin-tone": true,
	"kiss-man-light-skin-tone-woman-medium-dark-skin-tone": true,
	"woman_running_facing_right": true,
	"kiss-man-person-medium-light-skin-tone": true,
	"woman_in_manual_wheelchair_facing_right_light_skin_tone": true,
	"person_running_facing_right_medium-light_skin_tone": true,
	"woman_walking_facing_right_medium_skin_tone": true,
	"handshake-dark-skin-tone-no-skin-tone": true,
	"couple-with-heart-person-man-light-skin-tone-no-skin-tone": true,
	"kiss-man-person-light-skin-tone-no-skin-tone": true,
	"couple-with-heart-woman-no-skin-tone-man-light-skin-tone": true,
	"variation-selector-16": true,
	"woman_kneeling_facing_right_medium-light_skin_tone": true,
	"couple-with-heart-person-woman-medium-skin-tone": true,
	"couple-with-heart-person-man-light-skin-tone": true,
	"kiss-woman-person-medium-light-skin-tone-no-skin-tone": true,
	"kiss-man-person-no-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-person-woman-medium-dark-skin-tone-dark-skin-tone": true,
	"couple-with-heart-person-man-dark-skin-tone": true,
	"kiss-man-medium-skin-tone-woman-medium-light-skin-tone": true,
	"couple-with-heart-man-person-medium-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-person-man-medium-dark-skin-tone-dark-skin-tone": true,
	"kiss-person-person-no-skin-tone-dark-skin-tone": true,
	"couple-with-heart-woman-person-medium-skin-tone": true,
	"kiss-woman-person-dark-skin-tone-medium-light-skin-tone": true,
	"kiss-woman-person-medium-dark-skin-tone": true,
	"couple-with-heart-man-medium-light-skin-tone-woman-light-skin-tone": true,
	"man_kneeling_facing_right": true,
	"man_kneeling_facing_right_medium_skin_tone": true,
	"couple-with-heart-person-man-medium-light-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-person-woman-medium-skin-tone-light-skin-tone": true,
	"person_with_white_cane_facing_right_dark_skin_tone": true,
	"handshake-no-skin-tone-dark-skin-tone": true,
	"kiss-woman-person-no-skin-tone-dark-skin-tone": true,
	"kiss-man-woman": true,
	"couple-with-heart-man-person-medium-dark-skin-tone-dark-skin-tone": true,
	"woman_walking_facing_right_dark_skin_tone": true,
	"kiss-person-person-medium-dark-skin-tone-no-skin-tone": true,
	"kiss-man-medium-light-skin-tone-woman-medium-light-skin-tone": true,
	"kiss-person-person-light-skin-tone-no-skin-tone": true,
	"kiss-man-person-medium-dark-skin-tone-dark-skin-tone": true,
	"couple-with-heart-woman-person-light-skin-tone-dark-skin-tone": true,
	"kiss-man-person-medium-skin-tone": true,
	"couple-with-heart-woman-person-light-skin-tone": true,
	"kiss-man-person-medium-light-skin-tone-dark-skin-tone": true,
	"couple-with-heart-person-woman-medium-light-skin-tone-dark-skin-tone": true,
	"couple-with-heart-person-woman-no-skin-tone-medium-light-skin-tone": true,
	"kiss-person-man-medium-dark-skin-tone-medium-skin-tone": true,
	"kiss-man-medium-light-skin-tone-woman-medium-dark-skin-tone": true,
	"kiss-man-person-dark-skin-tone": true,
	"kiss-woman-person-no-skin-tone-medium-light-skin-tone": true,
	"kiss-man-medium-skin-tone-woman-medium-skin-tone": true,
	"kiss-man-dark-skin-tone-woman-light-skin-tone": true,
	"kiss-woman-light-skin-tone-woman-no-skin-tone": true,
	"phoenix-bird": true,
	"couple-with-heart-person-woman-medium-light-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-woman-person-dark-skin-tone-light-skin-tone": true,
	"kiss-man-person-no-skin-tone-medium-skin-tone": true,
	"couple-with-heart-person-man-medium-skin-tone-dark-skin-tone": true,
	"person_running_facing_right_medium-dark_skin_tone": true,
	"person_running_facing_right": true,
	"kiss-man-person-no-skin-tone-dark-skin-tone": true,
	"kiss-person-woman-medium-light-skin-tone-medium-skin-tone": true,
	"kiss-person-man-medium-light-skin-tone-medium-dark-skin-tone": true,
	"woman_in_manual_wheelchair_facing_right_medium-light_skin_tone": true,
	"couple-with-heart-man-medium-light-skin-tone-woman-medium-light-skin-tone": true,
	"couple-with-heart-person-woman-medium-dark-skin-tone-medium-light-skin-tone": true,
	"kiss-person-woman-medium-light-skin-tone-no-skin-tone": true,
	"broken-chain": true,
	"couple-with-heart-man-medium-light-skin-tone-woman-medium-dark-skin-tone": true,
	"kiss-person-man-medium-dark-skin-tone-no-skin-tone": true,
	"kiss-person-man-medium-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-person-man-medium-dark-skin-tone-light-skin-tone": true,
	"kiss-man-medium-dark-skin-tone-woman-medium-light-skin-tone": true,
	"couple-with-heart-woman-person-dark-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-man-medium-skin-tone-woman-medium-dark-skin-tone": true,
	"woman_in_manual_wheelchair_facing_right_medium-dark_skin_tone": true,
	"kiss-man-person-medium-light-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-person-person-medium-dark-skin-tone-no-skin-tone": true,
	"couple-with-heart-man-medium-dark-skin-tone-man-no-skin-tone": true,
	"kiss-man-person-medium-dark-skin-tone-medium-light-skin-tone": true,
	"kiss-woman-person-light-skin-tone-dark-skin-tone": true,
	"kiss-woman-person-medium-dark-skin-tone-medium-skin-tone": true,
	"couple-with-heart-man-person-no-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-woman-person-dark-skin-tone-medium-skin-tone": true,
	"kiss-person-woman-dark-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-person-man-dark-skin-tone-medium-skin-tone": true,
	"kiss-person-woman-medium-light-skin-tone-dark-skin-tone": true,
	"couple-with-heart-person-person-medium-light-skin-tone-no-skin-tone": true,
	"kiss-woman-no-skin-tone-woman-medium-light-skin-tone": true,
	"kiss-person-woman": true,
	"woman_in_motorized_wheelchair_facing_right_light_skin_tone": true,
	"couple-with-heart-man-medium-skin-tone-woman-light-skin-tone": true,
	"couple-with-heart-woman-person-medium-light-skin-tone-no-skin-tone": true,
	"kiss-man-medium-light-skin-tone-woman-light-skin-tone": true,
	"couple-with-heart-person-man-medium-light-skin-tone": true,
	"couple-with-heart-woman-person-no-skin-tone-dark-skin-tone": true,
	"couple-with-heart-person-man-medium-dark-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-person-woman-medium-skin-tone-medium-light-skin-tone": true,
	"kiss-man-person-medium-light-skin-tone-no-skin-tone": true,
	"flag-sark": true,
	"kiss-man-person-dark-skin-tone-medium-light-skin-tone": true,
	"kiss-person-man-medium-skin-tone": true,
	"couple-with-heart-person-woman-dark-skin-tone": true,
	"man_in_manual_wheelchair_facing_right_light_skin_tone": true,
	"couple-with-heart-person-man": true,
	"couple-with-heart-woman-person-no-skin-tone-light-skin-tone": true,
	"woman_kneeling_facing_right_medium_skin_tone": true,
	"couple-with-heart-woman-person-dark-skin-tone-medium-light-skin-tone": true,
	"person_in_manual_wheelchair_facing_right_medium_skin_tone": true,
	"couple-with-heart-woman-no-skin-tone-man-medium-light-skin-tone": true,
	"couple-with-heart-woman-no-skin-tone-woman-medium-skin-tone": true,
	"kiss-man-person-dark-skin-tone-medium-dark-skin-tone": true,
	"kiss-person-woman-no-skin-tone-medium-dark-skin-tone": true,
	"head-shaking-vertically": true,
	"kiss-person-woman-light-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-man-dark-skin-tone-woman-light-skin-tone": true,
	"kiss-person-woman-light-skin-tone": true,
	"kiss-person-person-medium-dark-skin-tone": true,
	"couple-with-heart-woman-person-medium-dark-skin-tone-medium-light-skin-tone": true,
	"kiss-person-woman-dark-skin-tone-light-skin-tone": true,
	"person_running_facing_right_light_skin_tonet": true,
	"person_in_motorized_wheelchair_facing_right_light_skin_tone": true,
	"kiss-woman-medium-light-skin-tone-woman-no-skin-tone": true,
	"kiss-man-medium-dark-skin-tone-woman-light-skin-tone": true,
	"man_in_manual_wheelchair_facing_right": true,
	"couple-with-heart-person-man-no-skin-tone-medium-light-skin-tone": true,
	"man_with_white_cane_facing_right_medium_skin_tone": true,
	"kiss-man-dark-skin-tone-man-no-skin-tone": true,
	"couple-with-heart-man-person-light-skin-tone-medium-dark-skin-tone": true,
	"kiss-woman-person-medium-light-skin-tone-light-skin-tone": true,
	"couple-with-heart-woman-person-medium-skin-tone-light-skin-tone": true,
	"couple-with-heart-woman-person-medium-dark-skin-tone-medium-skin-tone": true,
	"man_in_motorized_wheelchair_facing_right_medium_skin_tone": true,
	"couple-with-heart-woman-person-dark-skin-tone-no-skin-tone": true,
	"couple-with-heart-man-person-dark-skin-tone-medium-skin-tone": true,
	"couple-with-heart-man-medium-skin-tone-woman-dark-skin-tone": true,
	"couple-with-heart-man-dark-skin-tone-woman-no-skin-tone": true,
	"couple-with-heart-person-person-no-skin-tone-medium-skin-tone": true,
	"kiss-man-person-light-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-man-light-skin-tone-woman-no-skin-tone": true,
	"couple-with-heart-man-person-dark-skin-tone-light-skin-tone": true,
	"kiss-person-person-medium-light-skin-tone": true,
	"couple-with-heart-man-medium-skin-tone-woman-no-skin-tone": true,
	"kiss-person-man-light-skin-tone-medium-skin-tone": true,
	"kiss-man-person-medium-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-man-person": true,
	"couple-with-heart-woman-person-no-skin-tone-medium-dark-skin-tone": true,
	"person_in_manual_wheelchair_facing_right_light_skin_tone": true,
	"kiss-woman-no-skin-tone-man-medium-dark-skin-tone": true,
	"kiss-person-man-dark-skin-tone-medium-skin-tone": true,
	"kiss-person-man-medium-skin-tone-no-skin-tone": true,
	"couple-with-heart-woman-person-dark-skin-tone": true,
	"kiss-woman-no-skin-tone-man-light-skin-tone": true,
	"person_walking_facing_right_medium-dark_skin_tone": true,
	"fingerprint": true,
	"kiss-woman-person-medium-dark-skin-tone-light-skin-tone": true,
	"brown-mushroom": true,
	"kiss-man-person-dark-skin-tone-medium-skin-tone": true,
	"woman_with_white_cane_facing_right_light_skin_tone": true,
	"couple-with-heart-person-person-no-skin-tone-medium-light-skin-tone": true,
	"kiss-woman-no-skin-tone-man-dark-skin-tone": true,
	"couple-with-heart-man-person-no-skin-tone-light-skin-tone": true,
	"couple-with-heart-man-medium-light-skin-tone-woman-dark-skin-tone": true,
	"couple-with-heart-man-dark-skin-tone-woman-medium-skin-tone": true,
	"couple-with-heart-man-person-dark-skin-tone-no-skin-tone": true,
	"kiss-woman-no-skin-tone-woman-medium-skin-tone": true,
	"couple-with-heart-man-person-dark-skin-tone": true,
	"kiss-woman-person-dark-skin-tone-medium-skin-tone": true,
	"kiss-woman-person-dark-skin-tone-medium-dark-skin-tone": true,
	"kiss-woman-no-skin-tone-woman-light-skin-tone": true,
	"woman_in_motorized_wheelchair_facing_right_dark_skin_tone": true,
	"kiss-woman-person-light-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-man-light-skin-tone-woman-dark-skin-tone": true,
	"person_kneeling_facing_right_medium-dark_skin_tone": true,
	"kiss-woman-person-dark-skin-tone-light-skin-tone": true,
	"man_walking_facing_right_medium-light_skin_tone": true,
	"woman_with_white_cane_facing_right_medium_skin_tone": true,
	"family-adult-adult-child-child": true,
	"couple-with-heart-person-woman-medium-light-skin-tone-light-skin-tone": true,
	"couple-with-heart-man-no-skin-tone-man-light-skin-tone": true,
	"kiss-person-woman-medium-dark-skin-tone-medium-light-skin-tone": true,
	"woman_kneeling_facing_right_light_skin_tone": true,
	"kiss-man-medium-dark-skin-tone-woman-medium-skin-tone": true,
	"couple-with-heart-man-person-dark-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-man-light-skin-tone-woman-medium-skin-tone": true,
	"kiss-person-man-medium-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-person-person-medium-light-skin-tone": true,
	"kiss-woman-no-skin-tone-woman-medium-dark-skin-tone": true,
	"couple-with-heart-person-woman-no-skin-tone-dark-skin-tone": true,
	"kiss-person-man": true,
	"kiss-person-man-medium-dark-skin-tone-dark-skin-tone": true,
	"couple-with-heart-person-woman-medium-skin-tone-medium-dark-skin-tone": true,
	"kiss-woman-person-light-skin-tone-medium-dark-skin-tone": true,
	"kiss-person-man-medium-light-skin-tone-no-skin-tone": true,
	"kiss-man-no-skin-tone-woman-medium-skin-tone": true,
	"kiss-person-person-no-skin-tone-light-skin-tone": true,
	"kiss-man-dark-skin-tone-woman-no-skin-tone": true,
	"couple-with-heart-person-man-light-skin-tone-dark-skin-tone": true,
	"couple-with-heart-person-woman-light-skin-tone-medium-dark-skin-tone": true,
	"kiss-person-woman-dark-skin-tone-no-skin-tone": true,
	"man_walking_facing_right": true,
	"kiss-man-medium-dark-skin-tone-woman-no-skin-tone": true,
	"couple-with-heart-man-person-light-skin-tone-dark-skin-tone": true,
	"kiss-man-light-skin-tone-woman-medium-skin-tone": true,
	"kiss-woman-person-medium-skin-tone-medium-dark-skin-tone": true,
	"kiss-man-medium-dark-skin-tone-woman-dark-skin-tone": true,
	"couple-with-heart-person-man-medium-light-skin-tone-medium-skin-tone": true,
	"couple-with-heart-man-person-medium-skin-tone-no-skin-tone": true,
	"person_in_motorized_wheelchair_facing_right_medium_skin_tone": true,
	"handshake-no-skin-tone-light-skin-tone": true,
	"couple-with-heart-person-woman-medium-skin-tone-no-skin-tone": true,
	"couple-with-heart-woman-medium-light-skin-tone-woman-no-skin-tone": true,
	"man_in_manual_wheelchair_facing_right_medium-dark_skin_tone": true,
	"couple-with-heart-man-person-medium-light-skin-tone-no-skin-tone": true,
	"couple-with-heart-woman-medium-dark-skin-tone-woman-no-skin-tone": true,
	"couple-with-heart-person-person-medium-skin-tone-no-skin-tone": true,
	"kiss-person-person-no-skin-tone-medium-light-skin-tone": true,
	"kiss-person-woman-dark-skin-tone": true,
	"couple-with-heart-woman-light-skin-tone-woman-no-skin-tone": true,
	"woman_walking_facing_right_medium-light_skin_tone": true,
	"couple-with-heart-man-person-medium-dark-skin-tone-no-skin-tone": true,
	"kiss-person-woman-light-skin-tone-medium-skin-tone": true,
	"kiss-woman-person-light-skin-tone": true,
	"woman_walking_facing_right": true,
	"kiss-person-man-dark-skin-tone-no-skin-tone": true,
	"kiss-person-woman-no-skin-tone-dark-skin-tone": true,
	"kiss-person-woman-medium-dark-skin-tone-medium-skin-tone": true,
	"kiss-man-person-medium-dark-skin-tone-light-skin-tone": true,
	"man_kneeling_facing_right_dark_skin_tone": true,
	"person_in_manual_wheelchair_facing_right_dark_skin_tone": true,
	"kiss-person-woman-dark-skin-tone-medium-dark-skin-tone": true,
	"person_walking_facing_right": true,
	"couple-with-heart-man-person-medium-dark-skin-tone-medium-skin-tone": true,
	"kiss-person-man-dark-skin-tone": true,
	"couple-with-heart-person-man-dark-skin-tone-medium-dark-skin-tone": true,
	"kiss-woman-no-skin-tone-woman-dark-skin-tone": true,
	"kiss-man-person-medium-skin-tone-no-skin-tone": true,
	"kiss-man-dark-skin-tone-woman-dark-skin-tone": true,
	"couple-with-heart-person-man-light-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-woman-person-no-skin-tone-medium-skin-tone": true,
	"couple-with-heart-man-medium-dark-skin-tone-woman-medium-skin-tone": true,
	"couple-with-heart-person-man-medium-dark-skin-tone-no-skin-tone": true,
	"kiss-woman-person-medium-dark-skin-tone-dark-skin-tone": true,
	"person_in_manual_wheelchair_facing_right_medium-dark_skin_tone": true,
	"kiss-man-light-skin-tone-woman-light-skin-tone": true,
	"couple-with-heart-person-person-medium-skin-tone": true,
	"couple-with-heart-woman-person-medium-light-skin-tone-medium-dark-skin-tone": true,
	"woman_with_white_cane_facing_right": true,
	"kiss-person-man-dark-skin-tone-light-skin-tone": true,
	"kiss-woman-person-medium-light-skin-tone-medium-dark-skin-tone": true,
	"kiss-person-woman-medium-skin-tone-dark-skin-tone": true,
	"man_running_facing_right": true,
	"kiss-woman-dark-skin-tone-man-no-skin-tone": true,
	"couple-with-heart-person-woman-light-skin-tone-medium-light-skin-tone": true,
	"person_with_white_cane_facing_right_medium-dark_skin_tone": true,
	"root-vegetable": true,
	"couple-with-heart-woman-medium-light-skin-tone-man-no-skin-tone": true,
	"kiss-person-man-light-skin-tone-medium-light-skin-tone": true,
	"man_with_white_cane_facing_right_medium-light_skin_tone": true,
	"kiss-person-person-no-skin-tone-medium-skin-tone": true,
	"kiss-man-no-skin-tone-woman-medium-light-skin-tone": true,
	"kiss-person-man-medium-dark-skin-tone": true,
	"couple-with-heart-person-man-dark-skin-tone-no-skin-tone": true,
	"kiss-man-person-medium-skin-tone-light-skin-tone": true,
	"kiss-man-medium-skin-tone-woman-medium-dark-skin-tone": true,
	"couple-with-heart-person-man-light-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-man-no-skin-tone-man-dark-skin-tone": true,
	"couple-with-heart-person-man-medium-skin-tone-no-skin-tone": true,
	"kiss-man-medium-skin-tone-woman-dark-skin-tone": true,
	"kiss-man-medium-skin-tone-woman-light-skin-tone": true,
	"man_walking_facing_right_dark_skin_tone": true,
	"kiss-person-man-medium-light-skin-tone-medium-skin-tone": true,
	"person_walking_facing_right_dark_skin_tone": true,
	"man_in_motorized_wheelchair_facing_right_dark_skin_tone": true,
	"kiss-person-woman-no-skin-tone-light-skin-tone": true,
	"kiss-person-woman-no-skin-tone-medium-skin-tone": true,
	"man_walking_facing_right_medium_skin_tone": true,
	"kiss-woman-medium-skin-tone-man-no-skin-tone": true,
	"couple-with-heart-woman-person-medium-dark-skin-tone": true,
	"kiss-person-woman-light-skin-tone-dark-skin-tone": true,
	"couple-with-heart-man-person-medium-light-skin-tone-light-skin-tone": true,
	"kiss-person-woman-medium-dark-skin-tone-no-skin-tone": true,
	"person_kneeling_facing_right_medium_skin_tone": true,
	"couple-with-heart-person-person-light-skin-tone": true,
	"couple-with-heart-person-man-no-skin-tone-dark-skin-tone": true,
	"couple-with-heart-man-person-no-skin-tone-dark-skin-tone": true,
	"couple-with-heart-man-dark-skin-tone-woman-dark-skin-tone": true,
	"couple-with-heart-person-person-dark-skin-tone-no-skin-tone": true,
	"man_in_motorized_wheelchair_facing_right_light_skin_tone": true,
	"couple-with-heart-man-medium-dark-skin-tone-woman-light-skin-tone": true,
	"couple-with-heart-man-no-skin-tone-woman-light-skin-tone": true,
	"couple-with-heart-woman-person-medium-light-skin-tone": true,
	"kiss-man-person-light-skin-tone": true,
	"kiss-man-person-light-skin-tone-medium-skin-tone": true,
	"shovel": true,
	"kiss-person-woman-light-skin-tone-no-skin-tone": true,
	"couple-with-heart-man-medium-light-skin-tone-woman-medium-skin-tone": true,
	"kiss-man-person-no-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-woman-medium-skin-tone-man-no-skin-tone": true,
	"couple-with-heart-person-woman-medium-dark-skin-tone-no-skin-tone": true,
	"couple-with-heart-person-person-dark-skin-tone": true,
	"family-adult-adult-child": true,
	"person_in_motorized_wheelchair_facing_right_medium-light_skin_tone": true,
	"couple-with-heart-woman-medium-dark-skin-tone-man-no-skin-tone": true,
	"kiss-woman-person-light-skin-tone-no-skin-tone": true,
	"man_kneeling_facing_right_medium-light_skin_tone": true,
	"kiss-woman-person-medium-dark-skin-tone-medium-light-skin-tone": true,
	"kiss-man-medium-skin-tone-man-no-skin-tone": true,
	"person_with_white_cane_facing_right_medium_skin_tone": true,
	"kiss-person-man-light-skin-tone-no-skin-tone": true,
	"kiss-person-woman-light-skin-tone-medium-dark-skin-tone": true,
	"kiss-woman-dark-skin-tone-woman-no-skin-tone": true,
	"person_kneeling_facing_right_dark_skin_tone": true,
	"kiss-man-person-medium-light-skin-tone-light-skin-tone": true,
	"couple-with-heart-man-woman": true,
	"handshake-light-skin-tone-no-skin-tone": true,
	"couple-with-heart-person-woman-medium-light-skin-tone-no-skin-tone": true,
	"couple-with-heart-person-person-no-skin-tone-dark-skin-tone": true,
	"person_walking_facing_right_light_skin_tone": true,
	"couple-with-heart-man-person-medium-light-skin-tone": true,
	"kiss-woman-no-skin-tone-man-medium-skin-tone": true,
	"kiss-woman-person-no-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-woman-person-light-skin-tone-medium-light-skin-tone": true,
	"person_in_motorized_wheelchair_facing_right": true,
	"kiss-person-man-light-skin-tone-dark-skin-tone": true,
	"man_in_manual_wheelchair_facing_right_medium_skin_tone": true,
	"kiss-woman-person-no-skin-tone-light-skin-tone": true,
	"couple-with-heart-person-man-no-skin-tone-medium-dark-skin-tone": true,
	"woman_with_white_cane_facing_right_dark_skin_tone": true,
	"couple-with-heart-person-man-medium-skin-tone-light-skin-tone": true,
	"handshake-no-skin-tone-medium-skin-tone": true,
	"couple-with-heart-person-man-dark-skin-tone-light-skin-tone": true,
	"family-adult-child": true,
	"couple-with-heart-woman-person-medium-light-skin-tone-dark-skin-tone": true,
	"couple-with-heart-person-woman-no-skin-tone-medium-dark-skin-tone": true,
	"person_in_manual_wheelchair_facing_right_medium-light_skin_tone": true,
	"kiss-person-man-no-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-woman-person-medium-dark-skin-tone-no-skin-tone": true,
	"man_running_facing_right_medium-light_skin_tone": true,
	"couple-with-heart-person-woman-medium-dark-skin-tone-medium-skin-tone": true,
	"couple-with-heart-person-person-no-skin-tone-light-skin-tone": true,
	"couple-with-heart-man-medium-light-skin-tone-woman-no-skin-tone": true,
	"couple-with-heart-person-woman-dark-skin-tone-no-skin-tone": true,
	"man_running_facing_right_dark_skin_tone": true,
	"kiss-woman-medium-dark-skin-tone-woman-no-skin-tone": true,
	"kiss-person-person-no-skin-tone-medium-dark-skin-tone": true,
	"person_running_facing_right_medium_skin_tone": true,
	"couple-with-heart-person-man-medium-skin-tone": true,
	"man_kneeling_facing_right_medium-dark_skin_tone": true,
	"kiss-man-no-skin-tone-man-medium-dark-skin-tone": true,
	"kiss-woman-person-medium-skin-tone-light-skin-tone": true,
	"couple-with-heart-man-person-medium-dark-skin-tone": true,
	"couple-with-heart-woman-medium-skin-tone-woman-no-skin-tone": true,
	"couple-with-heart-man-person-no-skin-tone-medium-light-skin-tone": true,
	"man_kneeling_facing_right_light_skin_tone": true,
	"kiss-person-woman-medium-dark-skin-tone": true,
	"woman_kneeling_facing_right_medium-dark_skin_tone": true,
	"man_running_facing_right_medium-dark_skin_tone": true,
	"kiss-man-medium-light-skin-tone-woman-dark-skin-tone": true,
	"couple-with-heart-woman-person-medium-dark-skin-tone-light-skin-tone": true,
	"man_running_facing_right_light_skin_tone": true,
	"couple-with-heart-person-woman-dark-skin-tone-light-skin-tone": true,
	"couple-with-heart-woman-person": true,
	"kiss-man-person-dark-skin-tone-no-skin-tone": true,
	"kiss-man-no-skin-tone-man-medium-light-skin-tone": true,
	"couple-with-heart-woman-no-skin-tone-woman-medium-light-skin-tone": true,
	"couple-with-heart-person-man-medium-dark-skin-tone-medium-skin-tone": true,
	"woman_in_manual_wheelchair_facing_right_medium_skin_tone": true,
	"man_with_white_cane_facing_right": true,
	"couple-with-heart-man-light-skin-tone-woman-light-skin-tone": true,
	"couple-with-heart-man-medium-skin-tone-woman-medium-skin-tone": true,
	"person_in_motorized_wheelchair_facing_right_medium-dark_skin_tone": true,
	"couple-with-heart-person-man-dark-skin-tone-medium-light-skin-tone": true,
	"kiss-man-dark-skin-tone-woman-medium-skin-tone": true,
	"kiss-man-person-medium-skin-tone-dark-skin-tone": true,
	"kiss-woman-person-light-skin-tone-medium-skin-tone": true,
	"couple-with-heart-person-woman-no-skin-tone-light-skin-tone": true,
	"couple-with-heart-person-woman-light-skin-tone-medium-skin-tone": true,
	"kiss-man-dark-skin-tone-woman-medium-dark-skin-tone": true,
	"kiss-man-person-dark-skin-tone-light-skin-tone": true,
	"kiss-person-man-medium-light-skin-tone-dark-skin-tone": true,
	"kiss-man-light-skin-tone-woman-dark-skin-tone": true,
	"man_in_manual_wheelchair_facing_right_medium-light_skin_tone": true,
	"couple-with-heart-person-woman-medium-dark-skin-tone": true,
	"kiss-person-man-no-skin-tone-medium-light-skin-tone": true,
	"kiss-woman-person-medium-skin-tone-dark-skin-tone": true,
	"couple-with-heart-man-dark-skin-tone-woman-medium-light-skin-tone": true,
	"splatter": true,
	"couple-with-heart-person-man-no-skin-tone-medium-skin-tone": true,
	"kiss-woman-person-medium-light-skin-tone-dark-skin-tone": true,
	"couple-with-heart-person-woman-no-skin-tone-medium-skin-tone": true,
	"man_with_white_cane_facing_right_dark_skin_tone": true,
	"couple-with-heart-woman-person-medium-light-skin-tone-medium-skin-tone": true,
	"couple-with-heart-person-man-medium-light-skin-tone-no-skin-tone": true,
	"couple-with-heart-person-man-light-skin-tone-medium-skin-tone": true,
	"kiss-person-woman-medium-dark-skin-tone-light-skin-tone": true,
	"couple-with-heart-person-person-medium-dark-skin-tone": true,
	"kiss-woman-person-medium-skin-tone-medium-light-skin-tone": true,
	"kiss-man-person-medium-dark-skin-tone-medium-skin-tone": true,
	"person_walking_facing_right_medium-light_skin_tone": true,
	"couple-with-heart-woman-person-no-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-man-person-medium-light-skin-tone-medium-dark-skin-tone": true,
	"couple-with-heart-woman-light-skin-tone-man-no-skin-tone": true,
	"kiss-woman-person-medium-light-skin-tone": true,
	"kiss-person-man-medium-light-skin-tone": true,
	"kiss-person-man-medium-dark-skin-tone-medium-light-skin-tone": true,
	"couple-with-heart-man-medium-dark-skin-tone-woman-dark-skin-tone": true,
	"kiss-woman-person-medium-skin-tone": true,
	"kiss-person-man-no-skin-tone-dark-skin-tone": true,
	"man_running_facing_right_medium_skin_tone": true,
	"face-with-bags-under-eyes": true,
	"handshake-no-skin-tone-medium-dark-skin-tone": true,
	"kiss-person-woman-medium-dark-skin-tone-dark-skin-tone": true,
	"couple-with-heart-man-person-light-skin-tone": true,
	"couple-with-heart-woman-person-medium-dark-skin-tone-dark-skin-tone": true,
	"person_kneeling_facing_right_medium-light_skin_tone": true,
	"kiss-person-man-medium-skin-tone-dark-skin-tone": true,
	"man_with_white_cane_facing_right_light_skin_tone": true,
	"kiss-man-medium-light-skin-tone-man-no-skin-tone": true,
	"kiss-woman-medium-light-skin-tone-man-no-skin-tone": true,
	"couple-with-heart-man-medium-skin-tone-man-no-skin-tone": true,
	"woman_running_facing_right_light_skin_tone": true,
	"kiss-woman-medium-dark-skin-tone-man-no-skin-tone": true,
	"couple-with-heart-person-woman-medium-light-skin-tone": true,
	"kiss-person-person-dark-skin-tone": true,
	"leafless-tree": true,
	"couple-with-heart-man-no-skin-tone-woman-dark-skin-tone": true,
	"couple-with-heart-person-man-medium-dark-skin-tone": true,
	"couple-with-heart-man-medium-light-skin-tone-man-no-skin-tone": true,
	"couple-with-heart-man-light-skin-tone-woman-medium-light-skin-tone": true,
	"couple-with-heart-woman-person-medium-skin-tone-dark-skin-tone": true,
	"couple-with-heart-woman-dark-skin-tone-woman-no-skin-tone": true,
	"couple-with-heart-man-no-skin-tone-woman-medium-dark-skin-tone": true,
	"person_with_white_cane_facing_right": true,
	"couple-with-heart-person-woman-dark-skin-tone-medium-skin-tone": true,
	"kiss-woman-person-no-skin-tone-medium-skin-tone": true,
	"handshake-medium-light-skin-tone-no-skin-tone": true,
	"woman_with_white_cane_facing_right_medium-dark_skin_tone": true,
	"couple-with-heart-man-light-skin-tone-woman-medium-dark-skin-tone": true,
	"couple-with-heart-man-dark-skin-tone-man-no-skin-tone": true,
	"kiss-person-woman-medium-skin-tone": true,
	"kiss-man-person-light-skin-tone-dark-skin-tone": true,
	"woman_in_motorized_wheelchair_facing_right_medium_skin_tone": true,
	"couple-with-heart-person-woman-medium-dark-skin-tone-light-skin-tone": true,
	"kiss-person-woman-medium-skin-tone-no-skin-tone": true,
	"harp": true,
	"kiss-person-man-medium-skin-tone-light-skin-tone": true,
	"couple-with-heart-man-medium-dark-skin-tone-woman-medium-dark-skin-tone": true,
	"woman_running_facing_right_medium_skin_tone": true,
	"handshake-medium-skin-tone-no-skin-tone": true,
	"woman_in_manual_wheelchair_facing_right_dark_skin_tone": true,
	"kiss-woman-person-medium-light-skin-tone-medium-skin-tone": true,
	"kiss-man-dark-skin-tone-woman-medium-light-skin-tone": true,
	"couple-with-heart-man-person-medium-skin-tone-light-skin-tone": true,
	"kiss-man-medium-dark-skin-tone-woman-medium-dark-skin-tone": true,
	"person_with_white_cane_facing_right_light_skin_tone": true,
	"couple-with-heart-woman-no-skin-tone-man-medium-dark-skin-tone": true,
	"couple-with-heart-woman-no-skin-tone-woman-medium-dark-skin-tone": true,
	"kiss-man-no-skin-tone-man-medium-skin-tone": true,
	"kiss-man-person-medium-light-skin-tone-medium-skin-tone": true,
	"couple-with-heart-person-person": true,
	"kiss-man-person-no-skin-tone-light-skin-tone": true,
	"couple-with-heart-person-woman-medium-light-skin-tone-medium-skin-tone": true,
}

// CategoryIconMap maps category names to emoji icons
var CategoryIconMap = map[string]string{
	"Activities":         "⚽",
	"Animals & Nature":   "🐱",
	"Food & Drink":       "🍕",
	"Objects":            "💡",
	"People & Body":      "👤",
	"Smileys & Emotion":  "😀",
	"Symbols":            "💬",
	"Travel & Places":    "✈️",
	"Flags":              "🏳️",
	"Other":              "❓",
}

// GetCategoryIcon returns the emoji icon for a category (exported)
func GetCategoryIcon(category string) string {
	if icon, ok := CategoryIconMap[category]; ok {
		return icon
	}
	return "❓"
}

// PreviewEmojiLink generates HTML for a preview emoji link (regular emojis)
func PreviewEmojiLink(preview emojis_db.PreviewEmoji) string {
	emojiName := preview.Title
	truncatedName := emojiName
	if len(emojiName) > 27 {
		truncatedName = emojiName[:27] + "..."
	}
	return fmt.Sprintf(`<a href="/freedevtools/emojis/%s/" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-black dark:hover:text-white hover:font-bold">%s %s</a>`, preview.Slug, preview.Code, truncatedName)
}

// PreviewAppleEmojiLink generates HTML for a preview emoji link (Apple emojis)
func PreviewAppleEmojiLink(preview emojis_db.PreviewEmoji) string {
	emojiName := preview.Title
	truncatedName := emojiName
	if len(emojiName) > 27 {
		truncatedName = emojiName[:27] + "..."
	}
	return fmt.Sprintf(`<a href="/freedevtools/emojis/apple-emojis/%s/" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-black dark:hover:text-white hover:font-bold">%s %s</a>`, preview.Slug, preview.Code, truncatedName)
}

// PreviewDiscordEmojiLink generates HTML for a preview emoji link (Discord emojis)
func PreviewDiscordEmojiLink(preview emojis_db.PreviewEmoji) string {
	emojiName := preview.Title
	truncatedName := emojiName
	if len(emojiName) > 27 {
		truncatedName = emojiName[:27] + "..."
	}
	return fmt.Sprintf(`<a href="/freedevtools/emojis/discord-emojis/%s/" class="block text-sm text-blue-600 dark:text-blue-400 hover:text-black dark:hover:text-white hover:font-bold">%s %s</a>`, preview.Slug, preview.Code, truncatedName)
}

