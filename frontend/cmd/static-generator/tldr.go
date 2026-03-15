package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"

	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	"fdt-templ/components/pages/tldr"
	"fdt-templ/internal/config"
	tldr_db "fdt-templ/internal/db/tldr"
	"fdt-templ/internal/static_cache"

	"github.com/a-h/templ"
)

func GenerateTLDR() {
	log.Println("Starting static generation for TLDR...")

	// Load config to get SiteURL and BasePath
	_, err := config.LoadConfig()
	if err != nil {
		log.Printf("Config load error: %v", err)
	}

	db, err := tldr_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open TLDR database: %v", err)
	}
	defer db.Close()

	outDir := filepath.Join("static", "freedevtools", "tldr")
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Fatalf("Failed to create out dir: %v", err)
	}

	overview, err := db.GetOverview()
	if err != nil {
		log.Fatalf("Failed to get overview: %v", err)
	}

	clusters, err := db.GetAllClusters()
	if err != nil {
		log.Fatalf("Failed to get clusters: %v", err)
	}

	const itemsPerPage = 30
	totalPlatforms := len(clusters)
	totalIndexPages := (totalPlatforms + itemsPerPage - 1) / itemsPerPage
	if totalIndexPages == 0 {
		totalIndexPages = 1
	}

	// Calculate total pages for progress tracker
	totalPagesCount := 1 + totalIndexPages // credits + index pages
	for _, cluster := range clusters {
		catPages := (cluster.Count + itemsPerPage - 1) / itemsPerPage
		if catPages == 0 {
			catPages = 1
		}
		totalPagesCount += catPages + cluster.Count // platform pages + command pages
	}

	tracker := NewProgressTracker("TLDR", totalPagesCount)
	ctx := context.Background()

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

	// Credits Page
	log.Println("Generating TLDR Credits page...")
	creditsLayoutProps := layouts.BaseLayoutProps{
		Name:        "TLDR Credits",
		Title:       "TLDR Credits | Online Free DevTools by Hexmos",
		Description: "Credits and acknowledgments for the TLDR command documentation content used in Free DevTools.",
		Canonical:   config.GetSiteURL() + "/tldr/credits/",
		ShowHeader:  true,
	}
	creditsMeta := &static_cache.PageMetadata{
		Title:       creditsLayoutProps.Title,
		Description: creditsLayoutProps.Description,
		Canonical:   creditsLayoutProps.Canonical,
		UpdatedAt:   overview.LastUpdatedAt,
	}
	renderToFile("credits/", tldr.CreditsContent(tldr.CreditsData{LayoutProps: creditsLayoutProps}), creditsMeta)

	// Index Pages
	log.Println("Generating TLDR Index Pages...")
	basePath := config.GetBasePath()
	siteURL := config.GetSiteURL()

	for p := 1; p <= totalIndexPages; p++ {
		var relPath string
		if p == 1 {
			relPath = ""
		} else {
			relPath = fmt.Sprintf("%d/", p)
		}

		start := (p - 1) * itemsPerPage
		end := start + itemsPerPage
		if end > totalPlatforms {
			end = totalPlatforms
		}
		currentPlatforms := clusters[start:end]

		title := "TLDR - Command Line Documentation | Online Free DevTools by Hexmos"
		description := fmt.Sprintf("Comprehensive documentation for %d+ command-line tools across different platforms. Learn commands quickly with practical examples.", overview.TotalCount)
		if p > 1 {
			title = fmt.Sprintf("TLDR - Page %d | Online Free DevTools by Hexmos", p)
			description = fmt.Sprintf("Browse page %d of our TLDR command documentation. Learn command-line tools across different platforms.", p)
		}

		breadcrumbItems := []components.BreadcrumbItem{
			{Label: "Free DevTools", Href: basePath + "/"},
			{Label: "TLDR", Href: basePath + "/tldr/"},
		}
		if p > 1 {
			breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
				Label: fmt.Sprintf("Page %d", p),
			})
		}

		layoutProps := layouts.BaseLayoutProps{
			Title:       title,
			Description: description,
			Canonical:   siteURL + "/tldr/",
			ShowHeader:  true,
		}

		indexData := tldr.TLDRIndexData{
			Platforms:       currentPlatforms,
			CurrentPage:     p,
			TotalPages:      totalIndexPages,
			TotalPlatforms:  totalPlatforms,
			TotalCommands:   overview.TotalCount,
			BreadcrumbItems: breadcrumbItems,
			LayoutProps:     layoutProps,
		}

		meta := &static_cache.PageMetadata{
			Title:       layoutProps.Title,
			Description: layoutProps.Description,
			Canonical:   layoutProps.Canonical,
			UpdatedAt:   overview.LastUpdatedAt,
		}
		renderToFile(relPath, tldr.IndexContent(indexData), meta)
	}

	// Platform and Command Pages
	log.Println("Generating TLDR Platform and Command Pages...")
	for _, cluster := range clusters {
		platform := cluster.Name
		catPages := (cluster.Count + itemsPerPage - 1) / itemsPerPage
		if catPages == 0 {
			catPages = 1
		}

		// Platform Pages
		for p := 1; p <= catPages; p++ {
			var relPath string
			if p == 1 {
				relPath = fmt.Sprintf("%s/", platform)
			} else {
				relPath = fmt.Sprintf("%s/%d/", platform, p)
			}

			offset := (p - 1) * itemsPerPage
			commands, err := db.GetCommandsByClusterPaginated(platform, itemsPerPage, offset)
			if err != nil {
				log.Printf("Failed to fetch commands for %s page %d: %v", platform, p, err)
				continue
			}

			title := fmt.Sprintf("%s Commands - TLDR Documentation | Online Free DevTools by Hexmos", platform)
			description := fmt.Sprintf("Comprehensive documentation for %s command-line tools. Learn %s commands quickly with practical examples.", platform, platform)
			if p > 1 {
				title = fmt.Sprintf("%s Commands - Page %d | Online Free DevTools by Hexmos", platform, p)
				description = fmt.Sprintf("Browse page %d of %d pages in our %s command documentation.", p, catPages, platform)
			}

			breadcrumbItems := []components.BreadcrumbItem{
				{Label: "Free DevTools", Href: basePath + "/"},
				{Label: "TLDR", Href: basePath + "/tldr/"},
				{Label: platform, Href: fmt.Sprintf("%s/tldr/%s/", basePath, platform)},
			}
			if p > 1 {
				breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
					Label: fmt.Sprintf("Page %d", p),
				})
			}

			layoutProps := layouts.BaseLayoutProps{
				Title:       title,
				Description: description,
				Canonical:   fmt.Sprintf("%s/tldr/%s/", siteURL, platform),
				ShowHeader:  true,
			}

			platformData := tldr.TLDRPlatformData{
				Platform:        platform,
				Commands:        commands,
				CurrentPage:     p,
				TotalPages:      catPages,
				TotalCommands:   cluster.Count,
				BreadcrumbItems: breadcrumbItems,
				LayoutProps:     layoutProps,
			}

			meta := &static_cache.PageMetadata{
				Title:       layoutProps.Title,
				Description: layoutProps.Description,
				Canonical:   layoutProps.Canonical,
				UpdatedAt:   cluster.UpdatedAt,
			}
			renderToFile(relPath, tldr.PlatformContent(platformData), meta)
		}

		// Command Pages
		// We can't use GetPagesByClusterPaginatedFull for ALL commands easily without a loop
		for cp := 1; ; cp++ {
			pages, err := db.GetPagesByClusterPaginatedFull(platform, 100, (cp-1)*100)
			if err != nil || len(pages) == 0 {
				break
			}

			for _, page := range pages {
				// Extract command name from URL: /freedevtools/tldr/common/tar/ -> tar
				cmdName := filepath.Base(strings.TrimSuffix(page.URL, "/"))

				// relPath should be platform/command/
				relPath := fmt.Sprintf("%s/%s/", platform, cmdName)

				title := page.Title
				if title == "" {
					title = fmt.Sprintf("%s - %s Commands - TLDR", cmdName, platform)
				}
				description := page.Description
				if description == "" {
					description = fmt.Sprintf("Documentation for %s command", cmdName)
				}

				keywords := page.Metadata.Keywords
				if len(keywords) == 0 {
					keywords = []string{"tldr", "command", "cli", platform, cmdName}
				}

				layoutProps := layouts.BaseLayoutProps{
					Title:       title,
					Description: description,
					Canonical:   fmt.Sprintf("%s/tldr/%s/%s/", siteURL, platform, cmdName),
					Keywords:    keywords,
					ShowHeader:  true,
				}

				commandData := tldr.TLDRCommandData{
					Command:  cmdName,
					Platform: platform,
					Page:     &page,
					BreadcrumbItems: []components.BreadcrumbItem{
						{Label: "Free DevTools", Href: basePath + "/"},
						{Label: "TLDR", Href: basePath + "/tldr/"},
						{Label: platform, Href: fmt.Sprintf("%s/tldr/%s/", basePath, platform)},
						{Label: cmdName},
					},
					LayoutProps:  layoutProps,
					Keywords:     keywords,
					SeeAlsoItems: []common.SeeAlsoItem{}, // Simplified for now, or fetch if needed
				}

				// Handle SeeAlso
				if page.SeeAlso != "" {
					var seeAlsoData []common.SeeAlsoJSONItem
					if err := json.Unmarshal([]byte(page.SeeAlso), &seeAlsoData); err == nil {
						for _, item := range seeAlsoData {
							commandData.SeeAlsoItems = append(commandData.SeeAlsoItems, item.ToSeeAlsoItem())
						}
					}
				}

				meta := &static_cache.PageMetadata{
					Title:       layoutProps.Title,
					Description: layoutProps.Description,
					Keywords:    layoutProps.Keywords,
					Canonical:   layoutProps.Canonical,
					UpdatedAt:   page.UpdatedAt,
				}
				renderToFile(relPath, tldr.CommandContent(commandData), meta)
			}
			if cp*100 >= cluster.Count {
				break
			}
		}
	}

	log.Println("Static HTML generation for TLDR complete!")
	tracker.Finish()
}
