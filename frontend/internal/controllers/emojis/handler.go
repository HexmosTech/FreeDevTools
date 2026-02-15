// Package emojis - Emojis Handlers
//
// This file contains all business logic and database operations for emoji pages.
// All handlers in this file are called from cmd/server/emojis_routes.go after
// routing logic determines which handler to invoke.
//
// IMPORTANT: All database operations for emojis MUST be performed in this file.
// The route files (cmd/server/emojis_routes.go) should only handle URL routing
// and delegate to these handlers. This separation ensures:
// - Single responsibility: routes handle routing, handlers handle business logic
// - Maintainability: all DB logic is centralized in one place
// - Testability: handlers can be tested independently of routing
//
// Each handler function performs the following:
// 1. Database queries to fetch required data
// 2. Business logic processing (data transformation, validation, etc.)
// 3. Response rendering (HTML templates, JSON, etc.)
package emojis

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
	"regexp"
	"strings"
	"time"

	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	emojis_components "fdt-templ/components/pages/emojis"
	apple_components "fdt-templ/components/pages/emojis/apple"
	discord_components "fdt-templ/components/pages/emojis/discord"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/banner"
	"fdt-templ/internal/db/emojis"
	"github.com/a-h/templ"
)

var (
	debugLog = os.Getenv("DEBUG") == "1"
	basePath = config.GetBasePath()
)

func HandleEmojiSlug(w http.ResponseWriter, r *http.Request, db *emojis.DB, slug string) {
	start := time.Now()
	defer func() {
		if debugLog {
			log.Printf("HandleEmojiSlug slug=%s took=%s", slug, time.Since(start))
		}
	}()

	slugsToTry := []string{slug}
	seen := make(map[string]bool)
	seen[slug] = true

	decodedSlug, err := url.PathUnescape(slug)
	if err == nil && decodedSlug != slug && !seen[decodedSlug] {
		slugsToTry = append(slugsToTry, decodedSlug)
		seen[decodedSlug] = true
	}

	var dashSlug string
	if strings.Contains(slug, ":") {
		dashSlug = strings.ReplaceAll(slug, ":", "-")
		if dashSlug != slug && !seen[dashSlug] {
			slugsToTry = append(slugsToTry, dashSlug)
			seen[dashSlug] = true
		}
	}

	variations := GenerateSlugVariations(slug)
	for _, v := range variations {
		if !seen[v] {
			slugsToTry = append(slugsToTry, v)
			seen[v] = true
		}
	}

	if dashSlug != "" {
		dashVariations := GenerateSlugVariations(dashSlug)
		for _, v := range dashVariations {
			if !seen[v] {
				slugsToTry = append(slugsToTry, v)
				seen[v] = true
			}
		}
	}

	var emoji *emojis.EmojiData
	var images *emojis.EmojiImageVariants
	var foundSlug string

	for _, trySlug := range slugsToTry {
		if trySlug != slug && debugLog {
			log.Printf("Trying fallback slug: %s (original: %s)", trySlug, slug)
		}

		emojiChan := make(chan *emojis.EmojiData, 1)
		imagesChan := make(chan *emojis.EmojiImageVariants, 1)
		errChan := make(chan error, 2)

		go func(s string) {
			emoji, err := db.GetEmojiBySlug(s)
			if err != nil {
				errChan <- err
				return
			}
			emojiChan <- emoji
		}(trySlug)

		go func(s string) {
			img, err := db.GetEmojiImages(s)
			if err != nil {
				errChan <- err
				return
			}
			imagesChan <- img
		}(trySlug)

		tryEmoji := <-emojiChan
		tryImages := <-imagesChan

		if len(errChan) > 0 {
			log.Printf("Error fetching emoji data for slug %s: %v", trySlug, <-errChan)
		}

		if tryEmoji != nil {
			emoji = tryEmoji
			images = tryImages
			foundSlug = trySlug
			break
		}
	}

	if emoji == nil {
		http.NotFound(w, r)
		return
	}

	if foundSlug != slug && images == nil {
		images, _ = db.GetEmojiImages(foundSlug)
	}

	var imageVariants []emojis_components.ImageVariant
	if images != nil {
		if images.ThreeD != nil {
			imageVariants = append(imageVariants, emojis_components.ImageVariant{Type: "3D", URL: *images.ThreeD})
		}
		if images.Color != nil {
			imageVariants = append(imageVariants, emojis_components.ImageVariant{Type: "Color", URL: *images.Color})
		}
		if images.Flat != nil {
			imageVariants = append(imageVariants, emojis_components.ImageVariant{Type: "Flat", URL: *images.Flat})
		}
		if images.HighContrast != nil {
			imageVariants = append(imageVariants, emojis_components.ImageVariant{Type: "High Contrast", URL: *images.HighContrast})
		}
	}

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Emojis", Href: basePath + "/emojis/"},
	}
	if emoji.Category != nil {
		categorySlug := emojis_components.CategoryToSlug(*emoji.Category)
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: *emoji.Category,
			Href:  basePath + "/emojis/" + categorySlug + "/",
		})
	}
	breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
		Label: emoji.Title,
	})

	cleanDescription := func(text string) string {
		if text == "" {
			return ""
		}
		re := regexp.MustCompile(`<[^>]*>`)
		text = re.ReplaceAllString(text, "")
		text = strings.ReplaceAll(text, "&nbsp;", " ")
		text = strings.ReplaceAll(text, "&amp;", "&")
		text = strings.ReplaceAll(text, "&lt;", "<")
		text = strings.ReplaceAll(text, "&gt;", ">")
		text = strings.ReplaceAll(text, "&quot;", "\"")
		text = strings.ReplaceAll(text, "&#39;", "'")
		for strings.Contains(text, "??") {
			text = strings.ReplaceAll(text, "??", "?")
		}
		return strings.TrimSpace(text)
	}

	title := fmt.Sprintf("%s %s - Emoji Reference | Online Free DevTools by Hexmos", emoji.Code, emoji.Title)

	seoDescription := ""
	if emoji.Description != nil {
		seoDescription = cleanDescription(*emoji.Description)
	}
	if seoDescription == "" && emoji.Title != "" {
		seoDescription = fmt.Sprintf("Learn about the %s emoji %s. Find meanings, shortcodes, and usage information.", emoji.Title, emoji.Code)
	}

	var textBanner, bannerBanner *banner.Banner
	adsEnabled := config.GetAdsEnabled()
	enabledAdTypes := config.GetEnabledAdTypes("emojis")

	if adsEnabled && enabledAdTypes["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
		bannerBanner, _ = banner.GetRandomBannerByType("banner")
	}

	keywords := []string{
		"emoji",
		"emojis",
		"unicode",
	}
	if emoji.Title != "" {
		keywords = append(keywords, emoji.Title)
	}
	if emoji.Category != nil {
		keywords = append(keywords, *emoji.Category)
	}
	if len(emoji.Keywords) > 0 {
		keywords = append(keywords, emoji.Keywords...)
	}

	// Parse SeeAlso JSON
	var seeAlsoItems []common.SeeAlsoItem
	if emoji.SeeAlso != "" {
		var seeAlsoData []common.SeeAlsoJSONItem
		if err := json.Unmarshal([]byte(emoji.SeeAlso), &seeAlsoData); err != nil {
			// Log error but don't fail the page
			log.Printf("Error parsing see_also JSON for emoji %s: %v", slug, err)
		} else {
			for _, item := range seeAlsoData {
				seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
			}
		}
	}

	data := emojis_components.EmojiData{
		Emoji:           emoji,
		Images:          images,
		ImageVariants:   imageVariants,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  seoDescription,
			Canonical:    fmt.Sprintf("%s/emojis/%s/", config.GetSiteURL(), slug),
			ShowHeader:   true,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
			Keywords:     keywords,
			PageType:     "Article",
		},
		TextBanner:   textBanner,
		BannerBanner: bannerBanner,
		Keywords:     keywords,
		SeeAlsoItems: seeAlsoItems,
	}

	handler := templ.Handler(emojis_components.Emoji(data))
	handler.ServeHTTP(w, r)
}

func HandleAppleEmojisCategory(w http.ResponseWriter, r *http.Request, db *emojis.DB, categorySlug string, page int) {
	start := time.Now()
	defer func() {
		if debugLog {
			log.Printf("HandleAppleEmojisCategory categorySlug=%s page=%d took=%s", categorySlug, page, time.Since(start))
		}
	}()
	itemsPerPage := 36

	categoryName := emojis_components.SlugToCategory(categorySlug)

	emojisList, total, err := db.GetEmojisByCategoryWithAppleImagesPaginated(categoryName, page, itemsPerPage)
	if err != nil {
		log.Printf("Error fetching Apple emojis for category %s: %v", categoryName, err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	if len(emojisList) == 0 && page == 1 {
		http.NotFound(w, r)
		return
	}

	totalPages := (total + itemsPerPage - 1) / itemsPerPage
	if page > totalPages || page < 1 {
		http.NotFound(w, r)
		return
	}

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Emojis", Href: basePath + "/emojis/"},
		{Label: "Apple Emojis", Href: basePath + "/emojis/apple-emojis/"},
		{Label: categoryName},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	appleCategoryDescriptions := map[string]string{
		"Smileys & Emotion": "Apple's Smileys feature glossy shading and expressive faces that set the tone for iMessage and social platforms. The distinctive rounded eyes and vibrant gradients are signature Apple touches.",
		"People & Body":     "Apple leads on inclusivity—supporting diverse skin tones, gender options, and custom Memoji. People and gestures have soft edges and subtle shadows, making them feel inviting and lively on iOS.",
		"Animals & Nature":  "Animals in Apple's emoji set are playful and detailed, often with friendly eyes and vivid colors. Nature motifs leverage semi-realistic illustrations that feel right at home in iOS dark and light mode.",
		"Food & Drink":      "Apple's food and beverage emojis showcase appetizing colors and convincing textures, making fruits, desserts, and snacks visually relatable in Messages and social apps.",
		"Travel & Places":   "Apple's transport and location emojis are crisp and three-dimensional, with clean lines and well-balanced perspectives. Landmarks, vehicles, and scenery reflect Apple's passion for polished iconography.",
		"Activities":        "Sport, game, and recreation emojis on Apple platforms use bold highlights and clear shapes, inviting users to show off hobbies and energy in chats and posts.",
		"Objects":           "Apple renders everyday objects with photorealistic vibes—from high-res tech gadgets to lifelike accessories—ensuring each emoji looks detailed and familiar across Apple devices.",
		"Symbols":           "Apple's symbols blend clarity with style. Glassy gradients, subtle depth, and clean shapes set apart icons like hearts, arrows, and warning signs from standard flat glyphs.",
		"Flags":             "Apple flags maintain accurate proportions and vibrant colors for easy recognition, with an extra emphasis on clarity and accessibility for global users.",
		"Other":             "Apple's unique emojis in the 'Other' category often represent novelty, tech, and recent trends, all interpreted with its signature visual polish and device-optimized detail.",
	}

	description := appleCategoryDescriptions[categoryName]
	if description == "" {
		description = "Explore how Apple brings unique flair to this emoji group, optimized for every Apple device."
	}

	title := fmt.Sprintf("%s - Apple Emojis | Online Free DevTools by Hexmos", categoryName)
	if page > 1 {
		title = fmt.Sprintf("%s - Apple Emojis - Page %d | Online Free DevTools by Hexmos", categoryName, page)
	}

	canonical := fmt.Sprintf("%s/emojis/apple-emojis/%s/", config.GetSiteURL(), categorySlug)
	if page > 1 {
		canonical = fmt.Sprintf("%s/emojis/apple-emojis/%s/%d/", config.GetSiteURL(), categorySlug, page)
	}

	seoDescription := fmt.Sprintf("Browse Apple-style %s emojis. Copy, preview, and explore how they appear on iOS.", categoryName)

	emojisWithImages := make([]apple_components.EmojiWithImage, 0, len(emojisList))
	for _, emoji := range emojisList {
		latestImage, err := db.GetLatestAppleImage(emoji.Slug)
		if err != nil {
			log.Printf("Error fetching latest Apple image for %s: %v", emoji.Slug, err)
		}
		emojisWithImages = append(emojisWithImages, apple_components.EmojiWithImage{
			Emoji:       &emoji,
			LatestImage: latestImage,
		})
	}

	adsEnabled := config.GetAdsEnabled()
	enabledAdTypes := config.GetEnabledAdTypes("emojis")

	var textBanner *banner.Banner
	if adsEnabled && enabledAdTypes["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
	}

	keywords := []string{
		strings.ToLower(categoryName) + " apple emojis",
		"apple emoji set",
		"ios emoji style",
		"emoji meanings",
	}

	data := apple_components.CategoryData{
		Category:            categoryName,
		CategorySlug:        categorySlug,
		Emojis:              emojisWithImages,
		TotalEmojis:         total,
		CurrentPage:         page,
		TotalPages:          totalPages,
		BreadcrumbItems:     breadcrumbItems,
		CategoryDescription: description,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  seoDescription,
			Canonical:    canonical,
			ShowHeader:   true,
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
		},
		TextBanner: textBanner,
	}

	handler := templ.Handler(apple_components.Category(data))
	handler.ServeHTTP(w, r)
}

func HandleDiscordEmojisCategory(w http.ResponseWriter, r *http.Request, db *emojis.DB, categorySlug string, page int) {
	start := time.Now()
	defer func() {
		if debugLog {
			log.Printf("HandleDiscordEmojisCategory categorySlug=%s page=%d took=%s", categorySlug, page, time.Since(start))
		}
	}()
	itemsPerPage := 36

	categoryName := emojis_components.SlugToCategory(categorySlug)

	emojisList, total, err := db.GetEmojisByCategoryWithDiscordImagesPaginated(categoryName, page, itemsPerPage)
	if err != nil {
		log.Printf("Error fetching Discord emojis for category %s: %v", categoryName, err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	if len(emojisList) == 0 && page == 1 {
		http.NotFound(w, r)
		return
	}

	totalPages := (total + itemsPerPage - 1) / itemsPerPage
	if page > totalPages || page < 1 {
		http.NotFound(w, r)
		return
	}

	emojisWithImages := make([]discord_components.EmojiWithImage, 0, len(emojisList))
	for _, emoji := range emojisList {
		latestImage, err := db.GetLatestDiscordImage(emoji.Slug)
		if err != nil {
			log.Printf("Error fetching latest Discord image for %s: %v", emoji.Slug, err)
		}
		emojisWithImages = append(emojisWithImages, discord_components.EmojiWithImage{
			Emoji:       &emoji,
			LatestImage: latestImage,
		})
	}

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Emojis", Href: basePath + "/emojis/"},
		{Label: "Discord Emojis", Href: basePath + "/emojis/discord-emojis/"},
		{Label: categoryName},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	title := fmt.Sprintf("%s - Discord Emojis | Online Free DevTools by Hexmos", categoryName)
	if page > 1 {
		title = fmt.Sprintf("%s - Discord Emojis - Page %d | Online Free DevTools by Hexmos", categoryName, page)
	}

	seoDescription := fmt.Sprintf("Browse Discord-style %s emojis. Copy, preview, and explore how they appear on Discord.", categoryName)

	discordCategoryDescriptions := map[string]string{
		"Smileys & Emotion": "Discord's expressive faces use clean shapes and bold outlines, tailored for clarity in chats and dark mode environments.",
		"People & Body":     "Discord-style characters emphasize cartoon-like simplicity with sharp lines, making gestures and skin tone variations easy to identify.",
		"Animals & Nature":  "Discord animals have a flat, modern aesthetic with vibrant colors that look crisp across devices.",
		"Food & Drink":      "Food emojis on Discord use simplified shading and bold silhouettes for easy visibility in small message bubbles.",
		"Travel & Places":   "Discord's travel icons are minimalist, relying on clear geometry and strong contrast, ensuring readability across themes.",
		"Activities":        "Activity emojis feature flat color palettes and high contrast for clear visual communication during events or streams.",
		"Objects":           "Objects follow Discord's modern-icon style — clean, bold, and optimized for chat environments.",
		"Symbols":           "Discord symbols are designed with strong contrast and flat color styles that stand out in dark mode.",
		"Flags":             "Flags on Discord are simplified yet recognizable, ensuring quick identification without excessive detail.",
		"Other":             "Miscellaneous emojis follow the same sharp, modern style that defines Discord's visual identity.",
	}

	categoryDescription := discordCategoryDescriptions[categoryName]
	if categoryDescription == "" {
		categoryDescription = "Explore how Discord renders this emoji set with its clean, modern aesthetic."
	}

	canonical := fmt.Sprintf("%s/emojis/discord-emojis/%s/", config.GetSiteURL(), categorySlug)
	if page > 1 {
		canonical = fmt.Sprintf("%s/emojis/discord-emojis/%s/%d/", config.GetSiteURL(), categorySlug, page)
	}

	enabledAdTypes := config.GetEnabledAdTypes("emojis")
	adsEnabled := config.GetAdsEnabled()

	var textBanner *banner.Banner
	if adsEnabled && enabledAdTypes["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
	}

	keywords := []string{
		strings.ToLower(categoryName) + " discord emojis",
		"discord emoji set",
		"discord emoji style",
	}

	data := discord_components.CategoryData{
		Category:            categoryName,
		CategorySlug:        categorySlug,
		Emojis:              emojisWithImages,
		TotalEmojis:         total,
		CurrentPage:         page,
		TotalPages:          totalPages,
		BreadcrumbItems:     breadcrumbItems,
		CategoryDescription: categoryDescription,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  seoDescription,
			Canonical:    canonical,
			ShowHeader:   true,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
			Keywords:     keywords,
		},
		TextBanner: textBanner,
	}

	handler := templ.Handler(discord_components.Category(data))
	handler.ServeHTTP(w, r)
}

func HandleAppleEmojiSlug(w http.ResponseWriter, r *http.Request, db *emojis.DB, slug string) {
	start := time.Now()
	defer func() {
		if debugLog {
			log.Printf("HandleAppleEmojiSlug slug=%s took=%s", slug, time.Since(start))
		}
	}()
	emoji, err := db.GetAppleEmojiBySlug(slug)
	if err != nil {
		log.Printf("Error fetching Apple emoji data: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	if emoji == nil {
		decodedSlug, err := url.PathUnescape(slug)
		if err == nil && decodedSlug != slug {
			if debugLog {
				log.Printf("Apple emoji not found for slug=%s, trying decoded version: %s", slug, decodedSlug)
			}
			emoji, _ = db.GetAppleEmojiBySlug(decodedSlug)
			if emoji != nil {
				HandleAppleEmojiSlug(w, r, db, decodedSlug)
				return
			}
		}
		if strings.Contains(slug, ":") {
			dashSlug := strings.ReplaceAll(slug, ":", "-")
			if debugLog {
				log.Printf("Apple emoji not found for slug=%s, trying dash version: %s", slug, dashSlug)
			}
			emoji, _ = db.GetAppleEmojiBySlug(dashSlug)
			if emoji != nil {
				HandleAppleEmojiSlug(w, r, db, dashSlug)
				return
			}
		}
		log.Printf("Apple emoji not found for slug=%s, falling back to regular emoji page", slug)
		HandleEmojiSlug(w, r, db, slug)
		return
	}

	evolutionImages, err := db.GetAppleEvolutionImages(slug)
	if err != nil {
		log.Printf("Error fetching Apple evolution images for %s: %v", slug, err)
		evolutionImages = []emojis.EvolutionImage{}
	}

	var latestImage *string
	if len(evolutionImages) > 0 {
		latestImage = &evolutionImages[len(evolutionImages)-1].URL
	} else {
		latestImage, err = db.GetLatestAppleImage(slug)
		if err != nil {
			log.Printf("Error fetching latest Apple emoji image for %s: %v", slug, err)
		}
	}

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Emojis", Href: basePath + "/emojis/"},
		{Label: "Apple Emojis", Href: basePath + "/emojis/apple-emojis/"},
		{Label: emoji.Title},
	}

	var description string
	if emoji.AppleVendorDescription != nil && *emoji.AppleVendorDescription != "" {
		description = *emoji.AppleVendorDescription
	} else if emoji.Description != nil && *emoji.Description != "" {
		description = *emoji.Description
	}
	description = strings.ReplaceAll(description, "<", "")
	description = strings.ReplaceAll(description, ">", "")
	description = strings.ReplaceAll(description, "&nbsp;", " ")
	description = strings.ReplaceAll(description, "&amp;", "&")
	description = strings.ReplaceAll(description, "&lt;", "<")
	description = strings.ReplaceAll(description, "&gt;", ">")
	description = strings.ReplaceAll(description, "&quot;", "\"")
	description = strings.ReplaceAll(description, "&#39;", "'")
	for strings.Contains(description, "??") {
		description = strings.ReplaceAll(description, "??", "?")
	}
	description = strings.TrimSpace(description)

	appleEvolutionImages := make([]apple_components.EvolutionImage, len(evolutionImages))
	for i, img := range evolutionImages {
		appleEvolutionImages[i] = apple_components.EvolutionImage{
			URL:     img.URL,
			Version: img.Version,
		}
	}

	title := fmt.Sprintf("%s (Apple Style) - Emoji Evolution", emoji.Title)
	if description == "" {
		description = fmt.Sprintf("Learn about the %s emoji in Apple's style: meaning, usage, and evolution.", emoji.Title)
	}

	enabledAdTypes := config.GetEnabledAdTypes("emojis")
	adsEnabled := config.GetAdsEnabled()

	var textBanner *banner.Banner
	if adsEnabled && enabledAdTypes["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
	}

	data := apple_components.EmojiData{
		Emoji:           emoji,
		LatestImage:     latestImage,
		EvolutionImages: appleEvolutionImages,
		BreadcrumbItems: breadcrumbItems,
		Description:     description,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    fmt.Sprintf("%s/emojis/apple-emojis/%s/", config.GetSiteURL(), slug),
			ShowHeader:   true,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
		},
		TextBanner: textBanner,
	}

	handler := templ.Handler(apple_components.Emoji(data))
	handler.ServeHTTP(w, r)
}

func HandleDiscordEmojiSlug(w http.ResponseWriter, r *http.Request, db *emojis.DB, slug string) {
	start := time.Now()
	defer func() {
		if debugLog {
			log.Printf("HandleDiscordEmojiSlug slug=%s took=%s", slug, time.Since(start))
		}
	}()
	emoji, err := db.GetDiscordEmojiBySlug(slug)
	if err != nil {
		log.Printf("Error fetching Discord emoji data: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	if emoji == nil {
		decodedSlug, err := url.PathUnescape(slug)
		if err == nil && decodedSlug != slug {
			if debugLog {
				log.Printf("Discord emoji not found for slug=%s, trying decoded version: %s", slug, decodedSlug)
			}
			emoji, _ = db.GetDiscordEmojiBySlug(decodedSlug)
			if emoji != nil {
				HandleDiscordEmojiSlug(w, r, db, decodedSlug)
				return
			}
		}
		if strings.Contains(slug, ":") {
			dashSlug := strings.ReplaceAll(slug, ":", "-")
			if debugLog {
				log.Printf("Discord emoji not found for slug=%s, trying dash version: %s", slug, dashSlug)
			}
			emoji, _ = db.GetDiscordEmojiBySlug(dashSlug)
			if emoji != nil {
				HandleDiscordEmojiSlug(w, r, db, dashSlug)
				return
			}
		}
		log.Printf("Discord emoji not found for slug=%s, falling back to regular emoji page", slug)
		HandleEmojiSlug(w, r, db, slug)
		return
	}

	evolutionImages, err := db.GetDiscordEvolutionImages(slug)
	if err != nil {
		log.Printf("Error fetching Discord evolution images for %s: %v", slug, err)
		evolutionImages = []emojis.EvolutionImage{}
	}

	var latestImage *string
	if len(evolutionImages) > 0 {
		latestImage = &evolutionImages[len(evolutionImages)-1].URL
	} else {
		latestImage, err = db.GetLatestDiscordImage(slug)
		if err != nil {
			log.Printf("Error fetching latest Discord emoji image for %s: %v", slug, err)
		}
	}

	var description string
	if emoji.DiscordVendorDescription != nil && *emoji.DiscordVendorDescription != "" {
		description = *emoji.DiscordVendorDescription
	} else if emoji.Description != nil && *emoji.Description != "" {
		description = *emoji.Description
	}
	description = strings.ReplaceAll(description, "<", "")
	description = strings.ReplaceAll(description, ">", "")
	description = strings.ReplaceAll(description, "&nbsp;", " ")
	description = strings.ReplaceAll(description, "&amp;", "&")
	description = strings.ReplaceAll(description, "&lt;", "<")
	description = strings.ReplaceAll(description, "&gt;", ">")
	description = strings.ReplaceAll(description, "&quot;", "\"")
	description = strings.ReplaceAll(description, "&#39;", "'")

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Emojis", Href: basePath + "/emojis/"},
		{Label: "Discord Emojis", Href: basePath + "/emojis/discord-emojis/"},
		{Label: emoji.Title},
	}

	discordEvolutionImages := make([]discord_components.EvolutionImage, len(evolutionImages))
	for i, img := range evolutionImages {
		discordEvolutionImages[i] = discord_components.EvolutionImage{
			URL:     img.URL,
			Version: img.Version,
		}
	}

	title := fmt.Sprintf("%s (Discord Style) - Emoji Evolution", emoji.Title)
	if description == "" {
		description = fmt.Sprintf("Learn about the %s emoji in Discord's style: meaning, usage, and evolution.", emoji.Title)
	}

	enabledAdTypes := config.GetEnabledAdTypes("emojis")

	var textBanner *banner.Banner
	adsEnabled := config.GetAdsEnabled()
	if adsEnabled && enabledAdTypes["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
	}

	data := discord_components.EmojiData{
		Emoji:           emoji,
		LatestImage:     latestImage,
		EvolutionImages: discordEvolutionImages,
		BreadcrumbItems: breadcrumbItems,
		Description:     description,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    fmt.Sprintf("%s/emojis/discord-emojis/%s/", config.GetSiteURL(), slug),
			ShowHeader:   true,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
		},
		TextBanner: textBanner,
	}

	handler := templ.Handler(discord_components.Emoji(data))
	handler.ServeHTTP(w, r)
}

func HandleEmojisIndex(w http.ResponseWriter, r *http.Request, db *emojis.DB, page int) {
	itemsPerPage := 30

	categoriesChan := make(chan []emojis.CategoryWithPreview, 1)
	totalEmojisChan := make(chan int, 1)
	errChan := make(chan error, 2)

	go func() {
		categories, err := db.GetCategoriesWithPreviewEmojis(5)
		if err != nil {
			errChan <- err
			return
		}
		categoriesChan <- categories
	}()

	go func() {
		total, err := db.GetTotalEmojis()
		if err != nil {
			errChan <- err
			return
		}
		totalEmojisChan <- total
	}()

	categories := <-categoriesChan
	totalEmojis := <-totalEmojisChan

	if len(errChan) > 0 {
		log.Printf("Error fetching emoji data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	var filteredCategories []emojis.CategoryWithPreview
	for _, cat := range categories {
		if cat.Category != "Other" {
			filteredCategories = append(filteredCategories, cat)
		}
	}

	totalCategories := len(filteredCategories)
	totalPages := (totalCategories + itemsPerPage - 1) / itemsPerPage

	if page > totalPages || page < 1 {
		http.NotFound(w, r)
		return
	}

	startIndex := (page - 1) * itemsPerPage
	endIndex := startIndex + itemsPerPage
	if endIndex > totalCategories {
		endIndex = totalCategories
	}
	paginatedCategories := filteredCategories[startIndex:endIndex]

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Emojis"},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	title := "Emoji Reference - Browse & Copy Emojis | Online Free DevTools by Hexmos"
	if page > 1 {
		title = fmt.Sprintf("Emoji Reference - Page %d | Online Free DevTools by Hexmos", page)
	}

	description := "Comprehensive emoji reference with categories, meanings, and copy functionality. Browse categories like Smileys & Emotion, People & Body, Animals & Nature, Food & Drink, Travel & Places, Activities, Objects, Symbols, and Flags."
	if page == 1 {
		description = "Explore the emoji reference by category. Find meanings, names, and shortcodes. Browse thousands of emojis and copy instantly. Free, fast, no signup."
	} else {
		description = fmt.Sprintf("Browse page %d of our emoji reference. Find meanings, names, and shortcodes. Copy emojis instantly.", page)
	}

	canonical := fmt.Sprintf("%s/emojis/", config.GetSiteURL())
	if page > 1 {
		canonical = fmt.Sprintf("%s/emojis/%d/", config.GetSiteURL(), page)
	}

	keywords := []string{
		"emoji reference",
		"emoji categories",
		"copy emojis",
		"emoji meanings",
		"emoji shortcodes",
		"emoji library",
		"free emojis",
		"emoji search",
		"emoji copy",
		"unicode emojis",
	}

	var textBanner *banner.Banner
	if config.GetAdsEnabled() && config.GetEnabledAdTypes("emojis")["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
	}

	data := emojis_components.IndexData{
		Categories:      paginatedCategories,
		TotalCategories: totalCategories,
		TotalEmojis:     totalEmojis,
		CurrentPage:     page,
		TotalPages:      totalPages,
		BreadcrumbItems: breadcrumbItems,
		TextBanner:      textBanner,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    canonical,
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
			ShowHeader:   true,
		},
	}

	handler := templ.Handler(emojis_components.Index(data))
	handler.ServeHTTP(w, r)
}

func HandleEmojisCredits(w http.ResponseWriter, r *http.Request) {
	data := emojis_components.CreditsData{
		LayoutProps: layouts.BaseLayoutProps{
			Name:        "Emojis Credits",
			Title:       "Emoji Credits & Acknowledgments | Online Free DevTools by Hexmos",
			Description: "Credits and acknowledgments for emoji data sources including Emojipedia, Fluent UI, and other contributors.",
			Canonical:   config.GetSiteURL() + "/emojis/credits/",
			ShowHeader:  true,
		},
	}

	handler := templ.Handler(emojis_components.Credits(data))
	handler.ServeHTTP(w, r)
}

func HandleEmojisCategory(w http.ResponseWriter, r *http.Request, db *emojis.DB, categorySlug string, page int) {
	itemsPerPage := 36

	categoryName := emojis_components.SlugToCategory(categorySlug)

	emojisList, total, err := db.GetEmojisByCategoryPaginated(categoryName, page, itemsPerPage)
	if err != nil {
		log.Printf("Error fetching emojis for category %s: %v", categoryName, err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	if len(emojisList) == 0 && page == 1 {
		http.NotFound(w, r)
		return
	}

	totalPages := (total + itemsPerPage - 1) / itemsPerPage
	if page > totalPages || page < 1 {
		http.NotFound(w, r)
		return
	}

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Emojis", Href: basePath + "/emojis/"},
		{Label: categoryName},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	categorySeo := map[string]struct {
		Title       string
		Description string
		Keywords    string
	}{
		"Activities": {
			Title:       "Activities Emojis - Sports, Events, and Hobbies | Online Free DevTools by Hexmos",
			Description: "Explore activities emojis covering sports, games, celebrations, and hobbies. Copy emoji, view meanings, and find shortcodes instantly.",
			Keywords:    "activities emojis, sports emojis, games emojis, celebration emojis, hobby emojis, copy emoji, emoji meanings",
		},
		"Animals & Nature": {
			Title:       "Animals & Nature Emojis - Wildlife, Plants, and Weather | Online Free DevTools by Hexmos",
			Description: "Discover animals and nature emojis including wildlife, pets, plants, and weather symbols. Copy emoji, view meanings, and find shortcodes instantly.",
			Keywords:    "animals emojis, nature emojis, wildlife emojis, plant emojis, weather emojis, copy emoji, emoji meanings",
		},
		"Food & Drink": {
			Title:       "Food & Drink Emojis - Meals, Beverages, and Snacks | Online Free DevTools by Hexmos",
			Description: "Browse food and drink emojis including meals, beverages, fruits, vegetables, and snacks. Copy emoji, view meanings, and find shortcodes instantly.",
			Keywords:    "food emojis, drink emojis, meal emojis, beverage emojis, fruit emojis, copy emoji, emoji meanings",
		},
		"Objects": {
			Title:       "Objects Emojis - Technology, Tools, and Items | Online Free DevTools by Hexmos",
			Description: "Explore object emojis including technology, tools, clothing, and everyday items. Copy emoji, view meanings, and find shortcodes instantly.",
			Keywords:    "object emojis, technology emojis, tool emojis, clothing emojis, item emojis, copy emoji, emoji meanings",
		},
		"People & Body": {
			Title:       "People & Body Emojis - Faces, Gestures, and Body Parts | Online Free DevTools by Hexmos",
			Description: "Discover people and body emojis including faces, gestures, body parts, and family members. Copy emoji, view meanings, and find shortcodes instantly.",
			Keywords:    "people emojis, body emojis, face emojis, gesture emojis, family emojis, copy emoji, emoji meanings",
		},
		"Smileys & Emotion": {
			Title:       "Smileys & Emotion Emojis - Faces, Feelings, and Expressions | Online Free DevTools by Hexmos",
			Description: "Browse smileys and emotion emojis including faces, feelings, and expressions. Copy emoji, view meanings, and find shortcodes instantly.",
			Keywords:    "smiley emojis, emotion emojis, face emojis, feeling emojis, expression emojis, copy emoji, emoji meanings",
		},
		"Symbols": {
			Title:       "Symbols Emojis - Signs, Shapes, and Icons | Online Free DevTools by Hexmos",
			Description: "Explore symbol emojis including signs, shapes, icons, and special characters. Copy emoji, view meanings, and find shortcodes instantly.",
			Keywords:    "symbol emojis, sign emojis, shape emojis, icon emojis, character emojis, copy emoji, emoji meanings",
		},
		"Travel & Places": {
			Title:       "Travel & Places Emojis - Destinations, Transportation, and Locations | Online Free DevTools by Hexmos",
			Description: "Discover travel and places emojis including destinations, transportation, and location symbols. Copy emoji, view meanings, and find shortcodes instantly.",
			Keywords:    "travel emojis, places emojis, destination emojis, transportation emojis, location emojis, copy emoji, emoji meanings",
		},
		"Flags": {
			Title:       "Flags Emojis - Country and Regional Flags | Online Free DevTools by Hexmos",
			Description: "Browse flag emojis including country flags, regional flags, and special flags. Copy emoji, view meanings, and find shortcodes instantly.",
			Keywords:    "flag emojis, country emojis, regional emojis, national emojis, copy emoji, emoji meanings",
		},
	}

	seoData, exists := categorySeo[categoryName]
	var title, description string
	var keywords []string
	if exists {
		title = seoData.Title
		description = seoData.Description
		keywords = strings.Split(seoData.Keywords, ", ")
	} else {
		title = fmt.Sprintf("%s Emojis | Online Free DevTools by Hexmos", categoryName)
		description = fmt.Sprintf("Explore %s emojis. Copy emoji, view meanings, and find shortcodes instantly.", categoryName)
		keywords = []string{fmt.Sprintf("%s emojis", strings.ToLower(categoryName)), "copy emoji", "emoji meanings"}
	}

	if page > 1 {
		title = fmt.Sprintf("%s Emojis - Page %d | Online Free DevTools by Hexmos", categoryName, page)
	}

	canonical := fmt.Sprintf("%s/emojis/%s/", config.GetSiteURL(), categorySlug)
	if page > 1 {
		canonical = fmt.Sprintf("%s/emojis/%s/%d/", config.GetSiteURL(), categorySlug, page)
	}

	data := emojis_components.CategoryData{
		Category:            categoryName,
		CategorySlug:        categorySlug,
		CategoryDescription: description,
		Emojis:              emojisList,
		TotalEmojis:         total,
		CurrentPage:         page,
		TotalPages:          totalPages,
		BreadcrumbItems:     breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    canonical,
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
			ShowHeader:   true,
		},
	}

	handler := templ.Handler(emojis_components.Category(data))
	handler.ServeHTTP(w, r)
}

func HandleAppleEmojisIndex(w http.ResponseWriter, r *http.Request, db *emojis.DB, page int) {
	itemsPerPage := 30

	categoriesChan := make(chan []emojis.CategoryWithPreview, 1)
	totalEmojisChan := make(chan int, 1)
	errChan := make(chan error, 2)

	go func() {
		categories, err := db.GetAppleCategoriesWithPreviewEmojis(5)
		if err != nil {
			errChan <- err
			return
		}
		categoriesChan <- categories
	}()

	go func() {
		total, err := db.GetTotalEmojis()
		if err != nil {
			errChan <- err
			return
		}
		totalEmojisChan <- total
	}()

	categories := <-categoriesChan
	totalEmojis := <-totalEmojisChan

	if len(errChan) > 0 {
		log.Printf("Error fetching Apple emoji data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	var filteredCategories []emojis.CategoryWithPreview
	for _, cat := range categories {
		if cat.Category != "Other" {
			filteredCategories = append(filteredCategories, cat)
		}
	}

	totalCategories := len(filteredCategories)
	totalPages := (totalCategories + itemsPerPage - 1) / itemsPerPage

	if page > totalPages || page < 1 {
		http.NotFound(w, r)
		return
	}

	startIndex := (page - 1) * itemsPerPage
	endIndex := startIndex + itemsPerPage
	if endIndex > totalCategories {
		endIndex = totalCategories
	}
	paginatedCategories := filteredCategories[startIndex:endIndex]

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Emojis", Href: basePath + "/emojis/"},
		{Label: "Apple Emojis"},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	categoryIconMap := map[string]struct {
		Slug     string
		Filename string
	}{
		"Smileys & Emotion": {"slightly-smiling-face", "slightly-smiling-face_iOS_18.4.png"},
		"People & Body":     {"bust-in-silhouette", "bust-in-silhouette_1f464_iOS_18.4.png"},
		"Animals & Nature":  {"dog-face", "dog-face_1f436_iOS_18.4.png"},
		"Food & Drink":      {"red-apple", "red-apple_1f34e_iOS_18.4.png"},
		"Travel & Places":   {"airplane", "airplane_iOS_18.4.png"},
		"Activities":        {"soccer-ball", "soccer-ball_26bd_iOS_18.4.png"},
		"Objects":           {"mobile-phone", "mobile-phone_iOS_18.4.png"},
		"Symbols":           {"check-mark-button", "check-mark-button_2705_iOS_18.4.png"},
		"Flags":             {"chequered-flag", "chequered-flag_iOS_18.4.png"},
		"Other":             {"question-mark", "question-mark_2753_iOS_18.4.png"},
	}

	iconRequests := make([]struct {
		Slug     string
		Filename string
	}, 0, len(categoryIconMap))
	for _, iconData := range categoryIconMap {
		iconRequests = append(iconRequests, iconData)
	}

	categoryIconsBatch, err := db.FetchCategoryIconsBatch(iconRequests)
	if err != nil {
		log.Printf("Error fetching category icons batch: %v", err)
		categoryIconsBatch = make(map[string]string)
	}

	categoryIcons := make(map[string]string)
	fallbackURI := ""
	if fallback, ok := categoryIconsBatch["question-mark:question-mark_2753_iOS_18.4.png"]; ok {
		fallbackURI = fallback
	}
	for category, iconData := range categoryIconMap {
		key := fmt.Sprintf("%s:%s", iconData.Slug, iconData.Filename)
		if dataURI, ok := categoryIconsBatch[key]; ok && dataURI != "" {
			categoryIcons[category] = dataURI
		} else if fallbackURI != "" {
			categoryIcons[category] = fallbackURI
		} else {
			categoryIcons[category] = ""
		}
	}

	title := "Apple Emojis Reference - Browse & Copy Apple Emojis | Online Free DevTools by Hexmos"
	if page > 1 {
		title = fmt.Sprintf("Apple Emojis Reference - Page %d | Online Free DevTools by Hexmos", page)
	}

	description := "Browse Apple's version of emojis by category. Copy instantly, explore meanings, and discover platform-specific emoji designs."
	canonical := fmt.Sprintf("%s/emojis/apple-emojis/", config.GetSiteURL())
	if page > 1 {
		canonical = fmt.Sprintf("%s/emojis/apple-emojis/%d/", config.GetSiteURL(), page)
	}

	keywords := []string{
		"apple emojis",
		"ios emojis",
		"apple emoji list",
		"apple emoji reference",
		"emoji categories",
		"copy emojis",
		"emoji meanings",
		"emoji shortcodes",
		"emoji library",
		"emoji copy",
	}

	data := apple_components.IndexData{
		Categories:      paginatedCategories,
		TotalCategories: totalCategories,
		TotalEmojis:     totalEmojis,
		CurrentPage:     page,
		TotalPages:      totalPages,
		BreadcrumbItems: breadcrumbItems,
		CategoryIcons:   categoryIcons,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    canonical,
			ShowHeader:   true,
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
		},
	}

	handler := templ.Handler(apple_components.Index(data))
	handler.ServeHTTP(w, r)
}

func HandleDiscordEmojisIndex(w http.ResponseWriter, r *http.Request, db *emojis.DB, page int) {
	itemsPerPage := 30

	categoriesChan := make(chan []emojis.CategoryWithPreview, 1)
	totalEmojisChan := make(chan int, 1)
	errChan := make(chan error, 2)

	go func() {
		categories, err := db.GetDiscordCategoriesWithPreviewEmojis(5)
		if err != nil {
			errChan <- err
			return
		}
		categoriesChan <- categories
	}()

	go func() {
		total, err := db.GetTotalEmojis()
		if err != nil {
			errChan <- err
			return
		}
		totalEmojisChan <- total
	}()

	categories := <-categoriesChan
	totalEmojis := <-totalEmojisChan

	if len(errChan) > 0 {
		log.Printf("Error fetching Discord emoji data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	var filteredCategories []emojis.CategoryWithPreview
	for _, cat := range categories {
		if cat.Category != "Other" {
			filteredCategories = append(filteredCategories, cat)
		}
	}

	totalCategories := len(filteredCategories)
	totalPages := (totalCategories + itemsPerPage - 1) / itemsPerPage

	if page > totalPages || page < 1 {
		http.NotFound(w, r)
		return
	}

	startIndex := (page - 1) * itemsPerPage
	endIndex := startIndex + itemsPerPage
	if endIndex > totalCategories {
		endIndex = totalCategories
	}
	paginatedCategories := filteredCategories[startIndex:endIndex]

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Emojis", Href: basePath + "/emojis/"},
		{Label: "Discord Emojis"},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	categoryIconMap := map[string]struct {
		Slug     string
		Filename string
	}{
		"Smileys & Emotion": {"slightly-smiling-face", "slightly-smiling-face_iOS_18.4.png"},
		"People & Body":     {"bust-in-silhouette", "bust-in-silhouette_1f464_iOS_18.4.png"},
		"Animals & Nature":  {"dog-face", "dog-face_1f436_iOS_18.4.png"},
		"Food & Drink":      {"red-apple", "red-apple_1f34e_iOS_18.4.png"},
		"Travel & Places":   {"airplane", "airplane_iOS_18.4.png"},
		"Activities":        {"soccer-ball", "soccer-ball_26bd_iOS_18.4.png"},
		"Objects":           {"mobile-phone", "mobile-phone_iOS_18.4.png"},
		"Symbols":           {"check-mark-button", "check-mark-button_2705_iOS_18.4.png"},
		"Flags":             {"chequered-flag", "chequered-flag_iOS_18.4.png"},
		"Other":             {"question-mark", "question-mark_2753_iOS_18.4.png"},
	}

	iconRequests := make([]struct {
		Slug     string
		Filename string
	}, 0, len(categoryIconMap))
	for _, iconData := range categoryIconMap {
		iconRequests = append(iconRequests, iconData)
	}

	categoryIconsBatch, err := db.FetchCategoryIconsBatch(iconRequests)
	if err != nil {
		log.Printf("Error fetching category icons batch: %v", err)
		categoryIconsBatch = make(map[string]string)
	}

	categoryIcons := make(map[string]string)
	fallbackURI := ""
	if fallback, ok := categoryIconsBatch["question-mark:question-mark_2753_iOS_18.4.png"]; ok {
		fallbackURI = fallback
	}
	for category, iconData := range categoryIconMap {
		key := fmt.Sprintf("%s:%s", iconData.Slug, iconData.Filename)
		if dataURI, ok := categoryIconsBatch[key]; ok && dataURI != "" {
			categoryIcons[category] = dataURI
		} else if fallbackURI != "" {
			categoryIcons[category] = fallbackURI
		} else {
			categoryIcons[category] = ""
		}
	}

	title := "Discord Emojis Reference - Browse & Copy Discord Emojis | Online Free DevTools by Hexmos"
	if page > 1 {
		title = fmt.Sprintf("Discord Emojis Reference - Page %d | Online Free DevTools by Hexmos", page)
	}

	description := "Browse Discord-styled emojis by category. Copy instantly, view Discord-style artwork, and compare them with other platform vendors."
	canonical := fmt.Sprintf("%s/emojis/discord-emojis/", config.GetSiteURL())
	if page > 1 {
		canonical = fmt.Sprintf("%s/emojis/discord-emojis/%d/", config.GetSiteURL(), page)
	}

	keywords := []string{
		"discord emojis",
		"discord emoji list",
		"discord emoji reference",
		"emoji categories",
		"copy emojis",
		"emoji meanings",
		"emoji shortcodes",
		"emoji library",
		"emoji copy",
	}

	data := discord_components.IndexData{
		Categories:      paginatedCategories,
		TotalCategories: totalCategories,
		TotalEmojis:     totalEmojis,
		CurrentPage:     page,
		TotalPages:      totalPages,
		BreadcrumbItems: breadcrumbItems,
		CategoryIcons:   categoryIcons,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    canonical,
			ShowHeader:   true,
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
		},
	}

	handler := templ.Handler(discord_components.Index(data))
	handler.ServeHTTP(w, r)
}

func HandleEmojisSitemap(w http.ResponseWriter, r *http.Request, db *emojis.DB) {
	emojis_components.HandleSitemap(w, r, db)
}
