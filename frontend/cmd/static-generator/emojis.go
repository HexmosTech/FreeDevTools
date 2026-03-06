package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	emojis_page "fdt-templ/components/pages/emojis"
	apple_page "fdt-templ/components/pages/emojis/apple"
	discord_page "fdt-templ/components/pages/emojis/discord"
	"fdt-templ/internal/config"
	emojis_db "fdt-templ/internal/db/emojis"
	"fdt-templ/internal/static_cache"

	"github.com/a-h/templ"
)

func GenerateEmojis() {
	log.Println("Starting static generation for Emojis...")

	// Load config to get SiteURL and BasePath
	_, err := config.LoadConfig()
	if err != nil {
		log.Printf("Config load error: %v", err)
	}

	db, err := emojis_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open Emojis database: %v", err)
	}
	defer db.Close()

	outDir := filepath.Join("static", "freedevtools", "emojis")
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Fatalf("Failed to create out dir: %v", err)
	}

	overview, err := db.GetOverview()
	if err != nil {
		log.Fatalf("Failed to get overview: %v", err)
	}

	categories, err := db.GetCategoriesWithPreviewEmojis(5)
	if err != nil {
		log.Fatalf("Failed to get categories: %v", err)
	}

	var filteredCategories []emojis_db.CategoryWithPreview
	for _, cat := range categories {
		if cat.Category != "Other" {
			filteredCategories = append(filteredCategories, cat)
		}
	}

	const itemsPerPage = 30
	totalCategories := len(filteredCategories)
	totalIndexPages := (totalCategories + itemsPerPage - 1) / itemsPerPage
	if totalIndexPages == 0 {
		totalIndexPages = 1
	}

	// Calculate total pages for progress tracker
	totalPagesCount := 1 + totalIndexPages // credits + index pages
	// Main categories
	for _, cat := range filteredCategories {
		catPages := (cat.Count + 36 - 1) / 36 // Emojis category page uses 36 items per page
		if catPages == 0 {
			catPages = 1
		}
		totalPagesCount += catPages
	}
	// Main emoji individual pages
	sitemapEmojis, err := db.GetSitemapEmojis()
	if err == nil {
		totalPagesCount += len(sitemapEmojis)
	}
	// Vendor pages (Apple & Discord) - more accurate estimation
	// Apple
	appleCategories, _ := db.GetAppleCategoriesWithPreviewEmojis(5)
	appleSitemap, _ := db.GetSitemapAppleEmojis()
	totalPagesCount += 1 // Apple Index
	totalPagesCount += len(appleCategories)
	totalPagesCount += len(appleSitemap)

	// Discord
	discordCategories, _ := db.GetDiscordCategoriesWithPreviewEmojis(5)
	discordSitemap, _ := db.GetSitemapDiscordEmojis()
	totalPagesCount += 1 // Discord Index
	totalPagesCount += len(discordCategories)
	totalPagesCount += len(discordSitemap)

	tracker := NewProgressTracker("Emojis", totalPagesCount)
	ctx := context.Background()
	var meta *static_cache.PageMetadata

	renderToFile := func(relPath string, component templ.Component, metadata *static_cache.PageMetadata) {
		defer tracker.Increment()

		pageDir := filepath.Join(outDir, relPath)
		if err := os.MkdirAll(pageDir, 0755); err != nil {
			log.Printf("Failed to create dir %s: %v", pageDir, err)
			return
		}

		filename := filepath.Join(pageDir, "index.html")
		f, err := os.Create(filename)
		if err != nil {
			log.Printf("Failed to create file %s: %v", filename, err)
			return
		}
		defer f.Close()

		if metadata != nil {
			metaBytes, err := json.Marshal(metadata)
			if err != nil {
				log.Printf("Failed to marshal metadata for %s: %v", filename, err)
			} else {
				fmt.Fprintf(f, "<!-- FDT_META: %s -->\n", string(metaBytes))
			}
		}

		if err := component.Render(ctx, f); err != nil {
			log.Printf("Failed to render %s: %v", filename, err)
		}
	}

	basePath := config.GetBasePath()
	siteURL := config.GetSiteURL()

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

	// Credits Page
	log.Println("Generating Emojis Credits page...")
	creditsLayoutProps := layouts.BaseLayoutProps{
		Name:        "Emojis Credits",
		Title:       "Emoji Credits & Acknowledgments | Online Free DevTools by Hexmos",
		Description: "Credits and acknowledgments for emoji data sources including Emojipedia, Fluent UI, and other contributors.",
		Canonical:   siteURL + "/emojis/credits/",
		ShowHeader:  true,
	}
		meta = &static_cache.PageMetadata{
			Title:       creditsLayoutProps.Title,
			Description: creditsLayoutProps.Description,
			Canonical:   creditsLayoutProps.Canonical,
			UpdatedAt:   overview.LastUpdatedAt,
		}
	renderToFile("credits/", emojis_page.CreditsContent(emojis_page.CreditsData{LayoutProps: creditsLayoutProps}), meta)

	// Main Index Pages
	log.Println("Generating Emojis Index Pages...")
	for p := 1; p <= totalIndexPages; p++ {
		var relPath string
		if p == 1 {
			relPath = ""
		} else {
			relPath = fmt.Sprintf("%d/", p)
		}

		start := (p - 1) * itemsPerPage
		end := start + itemsPerPage
		if end > totalCategories {
			end = totalCategories
		}
		currentCats := filteredCategories[start:end]

		title := "Emoji Reference - Browse & Copy Emojis | Online Free DevTools by Hexmos"
		description := "Explore the emoji reference by category. Find meanings, names, and shortcodes. Browse thousands of emojis and copy instantly."
		if p > 1 {
			title = fmt.Sprintf("Emoji Reference - Page %d | Online Free DevTools by Hexmos", p)
			description = fmt.Sprintf("Browse page %d of our emoji reference. Find meanings, names, and shortcodes.", p)
		}

		breadcrumbItems := []components.BreadcrumbItem{
			{Label: "Free DevTools", Href: basePath + "/"},
			{Label: "Emojis", Href: basePath + "/emojis/"},
		}
		if p > 1 {
			breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
				Label: fmt.Sprintf("Page %d", p),
			})
		}

		layoutProps := layouts.BaseLayoutProps{
			Title:       title,
			Description: description,
			Canonical:   siteURL + "/emojis/",
			ShowHeader:  true,
		}

		indexData := emojis_page.IndexData{
			Categories:      currentCats,
			TotalCategories: totalCategories,
			TotalEmojis:     overview.TotalCount,
			CurrentPage:     p,
			TotalPages:      totalIndexPages,
			BreadcrumbItems: breadcrumbItems,
			LayoutProps:     layoutProps,
		}

		meta = &static_cache.PageMetadata{
			Title:       layoutProps.Title,
			Description: layoutProps.Description,
			Canonical:   layoutProps.Canonical,
			UpdatedAt:   overview.LastUpdatedAt,
		}
		renderToFile(relPath, emojis_page.IndexContent(indexData), meta)
	}

	// Category Pages
	log.Println("Generating Emojis Category Pages...")
	for _, cat := range filteredCategories {
		catSlug := emojis_page.CategoryToSlug(cat.Category)
		catItemsPerPage := 36
		catPages := (cat.Count + catItemsPerPage - 1) / catItemsPerPage
		if catPages == 0 {
			catPages = 1
		}

		for p := 1; p <= catPages; p++ {
			var relPath string
			if p == 1 {
				relPath = fmt.Sprintf("%s/", catSlug)
			} else {
				relPath = fmt.Sprintf("%s/%d/", catSlug, p)
			}

			emojisList, _, err := db.GetEmojisByCategoryPaginated(cat.Category, p, catItemsPerPage)
			if err != nil {
				log.Printf("Failed to fetch emojis for %s page %d: %v", cat.Category, p, err)
				continue
			}

			title := fmt.Sprintf("%s Emojis | Online Free DevTools by Hexmos", cat.Category)
			description := fmt.Sprintf("Explore %s emojis. Copy emoji, view meanings, and find shortcodes instantly.", cat.Category)
			if p > 1 {
				title = fmt.Sprintf("%s Emojis - Page %d | Online Free DevTools by Hexmos", cat.Category, p)
			}

			breadcrumbItems := []components.BreadcrumbItem{
				{Label: "Free DevTools", Href: basePath + "/"},
				{Label: "Emojis", Href: basePath + "/emojis/"},
				{Label: cat.Category},
			}
			if p > 1 {
				breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
					Label: fmt.Sprintf("Page %d", p),
				})
			}

			layoutProps := layouts.BaseLayoutProps{
				Title:       title,
				Description: description,
				Canonical:   fmt.Sprintf("%s/emojis/%s/", siteURL, catSlug),
				ShowHeader:  true,
			}

			catData := emojis_page.CategoryData{
				Category:            cat.Category,
				CategorySlug:        catSlug,
				CategoryDescription: description,
				Emojis:              emojisList,
				TotalEmojis:         cat.Count,
				CurrentPage:         p,
				TotalPages:          catPages,
				BreadcrumbItems:     breadcrumbItems,
				LayoutProps:         layoutProps,
			}

			meta = &static_cache.PageMetadata{
				Title:       layoutProps.Title,
				Description: layoutProps.Description,
				Canonical:   layoutProps.Canonical,
				UpdatedAt:   cat.UpdatedAt,
			}
			renderToFile(relPath, emojis_page.CategoryContent(catData), meta)
		}
	}

	// Individual Emoji Pages
	log.Println("Generating Individual Emoji Pages...")
	for _, se := range sitemapEmojis {
		emoji, err := db.GetEmojiBySlug(se.Slug)
		if err != nil || emoji == nil {
			continue
		}

		images, err := db.GetEmojiImages(se.Slug)
		if err != nil {
			log.Printf("Failed to fetch emoji images for %s: %v", se.Slug, err)
		}
		var imageVariants []emojis_page.ImageVariant
		if images != nil {
			if images.ThreeD != nil {
				imageVariants = append(imageVariants, emojis_page.ImageVariant{Type: "3D", URL: *images.ThreeD})
			}
			if images.Color != nil {
				imageVariants = append(imageVariants, emojis_page.ImageVariant{Type: "Color", URL: *images.Color})
			}
			if images.Flat != nil {
				imageVariants = append(imageVariants, emojis_page.ImageVariant{Type: "Flat", URL: *images.Flat})
			}
			if images.HighContrast != nil {
				imageVariants = append(imageVariants, emojis_page.ImageVariant{Type: "High Contrast", URL: *images.HighContrast})
			}
		}

		breadcrumbItems := []components.BreadcrumbItem{
			{Label: "Free DevTools", Href: basePath + "/"},
			{Label: "Emojis", Href: basePath + "/emojis/"},
		}
		if emoji.Category != nil {
			cSlug := emojis_page.CategoryToSlug(*emoji.Category)
			breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
				Label: *emoji.Category,
				Href:  basePath + "/emojis/" + cSlug + "/",
			})
		}
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{Label: emoji.Title})

		title := fmt.Sprintf("%s %s - Emoji Reference | Online Free DevTools by Hexmos", emoji.Code, emoji.Title)
		description := ""
		if emoji.Description != nil {
			description = cleanDescription(*emoji.Description)
		}
		if description == "" && emoji.Title != "" {
			description = fmt.Sprintf("Learn about the %s emoji %s. Find meanings, shortcodes, and usage information.", emoji.Title, emoji.Code)
		}

		var seeAlsoItems []common.SeeAlsoItem
		if emoji.SeeAlso != "" {
			var seeAlsoData []common.SeeAlsoJSONItem
			if err := json.Unmarshal([]byte(emoji.SeeAlso), &seeAlsoData); err == nil {
				for _, item := range seeAlsoData {
					seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
				}
			}
		}

		layoutProps := layouts.BaseLayoutProps{
			Title:       title,
			Description: description,
			Canonical:   fmt.Sprintf("%s/emojis/%s/", siteURL, se.Slug),
			ShowHeader:  true,
		}

		emojiData := emojis_page.EmojiData{
			Emoji:           emoji,
			Images:          images,
			ImageVariants:   imageVariants,
			BreadcrumbItems: breadcrumbItems,
			LayoutProps:     layoutProps,
			Keywords:        emoji.Keywords,
			SeeAlsoItems:    seeAlsoItems,
		}

		meta = &static_cache.PageMetadata{
			Title:       layoutProps.Title,
			Description: layoutProps.Description,
			Keywords:    emoji.Keywords,
			Canonical:   layoutProps.Canonical,
			UpdatedAt:   emoji.UpdatedAt,
		}
		renderToFile(se.Slug+"/", emojis_page.EmojiContent(emojiData), meta)
	}

	// --- Apple Emojis ---
	log.Println("Generating Apple Emojis pages...")
	// appleCategories already fetched at top
	var filteredAppleCategories []emojis_db.CategoryWithPreview
	for _, cat := range appleCategories {
		if cat.Category != "Other" {
			filteredAppleCategories = append(filteredAppleCategories, cat)
		}
	}
	
	// Apple Index
	appleIndexData := apple_page.IndexData{
		Categories:      filteredAppleCategories,
		TotalCategories: len(filteredAppleCategories),
		TotalEmojis:     overview.TotalCount,
		BreadcrumbItems: []components.BreadcrumbItem{
			{Label: "Free DevTools", Href: basePath + "/"},
			{Label: "Emojis", Href: basePath + "/emojis/"},
			{Label: "Apple Emojis"},
		},
		LayoutProps: layouts.BaseLayoutProps{
			Title:       "Apple Emojis Reference | Online Free DevTools by Hexmos",
			Description: "Browse Apple's full emoji collection here, complete with previews and instant copy options.",
			Canonical:   siteURL + "/emojis/apple-emojis/",
			ShowHeader:  true,
		},
		// CategoryIcons: ... (Need to fetch batch if really needed)
	}
		meta = &static_cache.PageMetadata{
			Title:       appleIndexData.LayoutProps.Title,
			Description: appleIndexData.LayoutProps.Description,
			Canonical:   appleIndexData.LayoutProps.Canonical,
			UpdatedAt:   overview.LastUpdatedAt,
		}
	renderToFile("apple-emojis/", apple_page.IndexContent(appleIndexData), meta)

	for _, cat := range filteredAppleCategories {
		catSlug := emojis_page.CategoryToSlug(cat.Category)
		emWithImg := make([]apple_page.EmojiWithImage, 0, cat.Count)
		for ep := 1; ; ep++ {
			batchSize := 100
			batchList, _, err := db.GetEmojisByCategoryWithAppleImagesPaginated(cat.Category, ep, batchSize)
			if err != nil {
				log.Printf("Failed to fetch emojis batch for apple category %s, page %d: %v", cat.Category, ep, err)
				break
			}
			if len(batchList) == 0 {
				break
			}

			slugs := make([]string, len(batchList))
			for i, em := range batchList {
				slugs[i] = em.Slug
			}

			evolutionMap, err := db.GetAppleEvolutionImagesBatch(slugs)
			if err != nil {
				log.Printf("Failed to fetch evolution images batch: %v", err)
			}

			for _, em := range batchList {
				evolution := evolutionMap[em.Slug]
				var latestImg *string
				if len(evolution) > 0 {
					latest := evolution[len(evolution)-1].URL
					latestImg = &latest
				}

				emWithImg = append(emWithImg, apple_page.EmojiWithImage{Emoji: &em, LatestImage: latestImg})

				// Individual Apple Emoji Page
				appleEv := make([]apple_page.EvolutionImage, len(evolution))
				for i, ev := range evolution {
					appleEv[i] = apple_page.EvolutionImage{URL: ev.URL, Version: ev.Version}
				}
			
			var description string
			if em.AppleVendorDescription != nil && *em.AppleVendorDescription != "" {
				description = *em.AppleVendorDescription
			} else if em.Description != nil && *em.Description != "" {
				description = *em.Description
			}
			description = cleanDescription(description)
			if description == "" {
				description = fmt.Sprintf("Learn about the %s emoji in Apple's style: meaning, usage, and evolution.", em.Title)
			}
			
			appleEmojiData := apple_page.EmojiData{
				Emoji:           &em,
				LatestImage:     latestImg,
				EvolutionImages: appleEv,
				BreadcrumbItems: []components.BreadcrumbItem{
					{Label: "Free DevTools", Href: basePath + "/"},
					{Label: "Emojis", Href: basePath + "/emojis/"},
					{Label: "Apple Emojis", Href: basePath + "/emojis/apple-emojis/"},
					{Label: em.Title},
				},
				Description: description,
				LayoutProps: layouts.BaseLayoutProps{
					Title:       em.Title + " (Apple Style) - Emoji Evolution",
					Description: description,
					Canonical:   siteURL + "/emojis/apple-emojis/" + em.Slug + "/",
					ShowHeader:  true,
				},
			}
			meta = &static_cache.PageMetadata{
				Title:       appleEmojiData.LayoutProps.Title,
				Description: appleEmojiData.LayoutProps.Description,
				Canonical:   appleEmojiData.LayoutProps.Canonical,
				UpdatedAt:   em.UpdatedAt,
			}
			renderToFile("apple-emojis/"+em.Slug+"/", apple_page.EmojiContent(appleEmojiData), meta)
			}
			if ep*batchSize >= cat.Count {
				break
			}
		}

		catData := apple_page.CategoryData{
			Category:     cat.Category,
			CategorySlug: catSlug,
			Emojis:       emWithImg,
			TotalEmojis:  cat.Count,
			CurrentPage:  1,
			TotalPages:   1,
			BreadcrumbItems: []components.BreadcrumbItem{
				{Label: "Free DevTools", Href: basePath + "/"},
				{Label: "Emojis", Href: basePath + "/emojis/"},
				{Label: "Apple Emojis", Href: basePath + "/emojis/apple-emojis/"},
				{Label: cat.Category},
			},
			LayoutProps: layouts.BaseLayoutProps{
				Title:       cat.Category + " - Apple Emojis",
				Description: "Browse Apple-style " + cat.Category + " emojis.",
				Canonical:   siteURL + "/emojis/apple-emojis/" + catSlug + "/",
				ShowHeader:  true,
		},
	}
	meta = &static_cache.PageMetadata{
		Title:       catData.LayoutProps.Title,
		Description: catData.LayoutProps.Description,
		Canonical:   catData.LayoutProps.Canonical,
		UpdatedAt:   cat.UpdatedAt,
	}
	renderToFile("apple-emojis/"+catSlug+"/", apple_page.CategoryContent(catData), meta)
	}

	// --- Discord Emojis ---
	log.Println("Generating Discord Emojis pages...")
	// discordCategories already fetched at top
	var filteredDiscordCategories []emojis_db.CategoryWithPreview
	for _, cat := range discordCategories {
		if cat.Category != "Other" {
			filteredDiscordCategories = append(filteredDiscordCategories, cat)
		}
	}
	
	discordIndexData := discord_page.IndexData{
		Categories:      filteredDiscordCategories,
		TotalCategories: len(filteredDiscordCategories),
		TotalEmojis:     overview.TotalCount,
		BreadcrumbItems: []components.BreadcrumbItem{
			{Label: "Free DevTools", Href: basePath + "/"},
			{Label: "Emojis", Href: basePath + "/emojis/"},
			{Label: "Discord Emojis"},
		},
		LayoutProps: layouts.BaseLayoutProps{
			Title:       "Discord Emojis Reference | Online Free DevTools by Hexmos",
			Description: "Browse Discord's full emoji collection here.",
			Canonical:   siteURL + "/emojis/discord-emojis/",
			ShowHeader:  true,
		},
	}
		meta = &static_cache.PageMetadata{
			Title:       discordIndexData.LayoutProps.Title,
			Description: discordIndexData.LayoutProps.Description,
			Canonical:   discordIndexData.LayoutProps.Canonical,
			UpdatedAt:   overview.LastUpdatedAt,
		}
	renderToFile("discord-emojis/", discord_page.IndexContent(discordIndexData), meta)

	for _, cat := range filteredDiscordCategories {
		catSlug := emojis_page.CategoryToSlug(cat.Category)
		emWithImg := make([]discord_page.EmojiWithImage, 0, cat.Count)
		for ep := 1; ; ep++ {
			batchSize := 100
			batchList, _, err := db.GetEmojisByCategoryWithDiscordImagesPaginated(cat.Category, ep, batchSize)
			if err != nil {
				log.Printf("Failed to fetch emojis batch for discord category %s, page %d: %v", cat.Category, ep, err)
				break
			}
			if len(batchList) == 0 {
				break
			}

			slugs := make([]string, len(batchList))
			for i, em := range batchList {
				slugs[i] = em.Slug
			}

			evolutionMap, err := db.GetDiscordEvolutionImagesBatch(slugs)
			if err != nil {
				log.Printf("Failed to fetch discord evolution images batch: %v", err)
			}

			for _, em := range batchList {
				evolution := evolutionMap[em.Slug]
				var latestImg *string
				if len(evolution) > 0 {
					latest := evolution[len(evolution)-1].URL
					latestImg = &latest
				}

				emWithImg = append(emWithImg, discord_page.EmojiWithImage{Emoji: &em, LatestImage: latestImg})

				// Individual Discord Emoji Page
				discordEv := make([]discord_page.EvolutionImage, len(evolution))
				for i, ev := range evolution {
					discordEv[i] = discord_page.EvolutionImage{URL: ev.URL, Version: ev.Version}
				}
			
			var description string
			if em.DiscordVendorDescription != nil && *em.DiscordVendorDescription != "" {
				description = *em.DiscordVendorDescription
			} else if em.Description != nil && *em.Description != "" {
				description = *em.Description
			}
			description = cleanDescription(description)
			if description == "" {
				description = fmt.Sprintf("Learn about the %s emoji in Discord's style: meaning, usage, and evolution.", em.Title)
			}
			
			discordEmojiData := discord_page.EmojiData{
				Emoji:           &em,
				LatestImage:     latestImg,
				EvolutionImages: discordEv,
				BreadcrumbItems: []components.BreadcrumbItem{
					{Label: "Free DevTools", Href: basePath + "/"},
					{Label: "Emojis", Href: basePath + "/emojis/"},
					{Label: "Discord Emojis", Href: basePath + "/emojis/discord-emojis/"},
					{Label: em.Title},
				},
				Description: description,
				LayoutProps: layouts.BaseLayoutProps{
					Title:       em.Title + " (Discord Style) - Emoji Evolution",
					Description: description,
					Canonical:   siteURL + "/emojis/discord-emojis/" + em.Slug + "/",
					ShowHeader:  true,
				},
			}
			meta = &static_cache.PageMetadata{
				Title:       discordEmojiData.LayoutProps.Title,
				Description: discordEmojiData.LayoutProps.Description,
				Canonical:   discordEmojiData.LayoutProps.Canonical,
				UpdatedAt:   em.UpdatedAt,
			}
			renderToFile("discord-emojis/"+em.Slug+"/", discord_page.EmojiContent(discordEmojiData), meta)
			}
			if ep*batchSize >= cat.Count {
				break
			}
		}

		catData := discord_page.CategoryData{
			Category:     cat.Category,
			CategorySlug: catSlug,
			Emojis:       emWithImg,
			TotalEmojis:  cat.Count,
			CurrentPage:  1,
			TotalPages:   1,
			BreadcrumbItems: []components.BreadcrumbItem{
				{Label: "Free DevTools", Href: basePath + "/"},
				{Label: "Emojis", Href: basePath + "/emojis/"},
				{Label: "Discord Emojis", Href: basePath + "/emojis/discord-emojis/"},
				{Label: cat.Category},
			},
			LayoutProps: layouts.BaseLayoutProps{
				Title:       cat.Category + " - Discord Emojis",
				Description: "Browse Discord-style " + cat.Category + " emojis.",
				Canonical:   siteURL + "/emojis/discord-emojis/" + catSlug + "/",
				ShowHeader:  true,
			},
		}
		meta = &static_cache.PageMetadata{
			Title:       catData.LayoutProps.Title,
			Description: catData.LayoutProps.Description,
			Canonical:   catData.LayoutProps.Canonical,
			UpdatedAt:   cat.UpdatedAt,
		}
		renderToFile("discord-emojis/"+catSlug+"/", discord_page.CategoryContent(catData), meta)
	}

	log.Println("Static HTML generation for Emojis complete!")
	tracker.Finish()
}
