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
	svg_icons_pages "fdt-templ/components/pages/svg_icons"
	"fdt-templ/internal/config"
	svg_icons_db "fdt-templ/internal/db/svg_icons"
	"fdt-templ/internal/static_cache"

	"github.com/a-h/templ"
)

func GenerateSVGIcons() {
	log.Println("Starting static generation for SVG Icons...")

	_, err := config.LoadConfig()
	if err != nil {
		log.Printf("Config load error: %v", err)
	}

	db, err := svg_icons_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open SVG Icons database: %v", err)
	}
	defer db.Close()

	outDir := filepath.Join("static", "freedevtools", "svg_icons")
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Fatalf("Failed to create out dir: %v", err)
	}

	totalCategories, err := db.GetTotalClusters()
	if err != nil {
		log.Fatalf("Failed to get total clusters: %v", err)
	}

	totalIcons, err := db.GetTotalIcons()
	if err != nil {
		log.Fatalf("Failed to get total icons: %v", err)
	}

	const indexItemsPerPage = 30
	const categoryItemsPerPage = 30

	totalIndexPages := (totalCategories + indexItemsPerPage - 1) / indexItemsPerPage
	if totalIndexPages == 0 {
		totalIndexPages = 1
	}

	// Calculate total pages for progress
	totalPages := 1 + totalIndexPages // credits + index pages
	clusters, err := db.GetClusters()
	if err != nil {
		log.Fatalf("Failed to get clusters: %v", err)
	}
	for _, cluster := range clusters {
		catPages := (cluster.Count + categoryItemsPerPage - 1) / categoryItemsPerPage
		if catPages == 0 {
			catPages = 1
		}
		totalPages += catPages + cluster.Count
	}

	tracker := NewProgressTracker("SVG Icons", totalPages)
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
			metaBytes, _ := json.Marshal(metadata)
			fmt.Fprintf(f, "<!-- FDT_META: %s -->\n", string(metaBytes))
		}

		if err := component.Render(ctx, f); err != nil {
			log.Printf("Failed to render %s: %v", filename, err)
		}
	}

	// Credits page (full HTML, no stitching)
	log.Println("Generating SVG Icons Credits page...")
	creditsData := svg_icons_pages.CreditsData{
		LayoutProps: layouts.BaseLayoutProps{
			Name:        "SVG Icons Credits",
			Title:       "SVG Icons Credits & Acknowledgments | Online Free DevTools by Hexmos",
			Description: "Credits and acknowledgments for the free SVG icons available on Free DevTools.",
			Canonical:   "https://hexmos.com/freedevtools/svg_icons/credits/",
			ShowHeader:  true,
		},
	}
	renderToFile("credits/", svg_icons_pages.Credits(creditsData), nil)

	// Index pages
	log.Println("Generating SVG Icons Index Pages...")
	siteURL := config.GetSiteURL()
	basePath := config.GetBasePath()

	for p := 1; p <= totalIndexPages; p++ {
		var relPath string
		if p == 1 {
			relPath = ""
		} else {
			relPath = fmt.Sprintf("%d/", p)
		}

		categoriesResult, err := db.GetClustersWithPreviewIcons(p, indexItemsPerPage, 6, true)
		if err != nil {
			log.Printf("Failed to fetch index data for page %d: %v", p, err)
			continue
		}
		categories, ok := categoriesResult.([]svg_icons_db.ClusterTransformed)
		if !ok {
			log.Printf("Failed to cast categories for page %d", p)
			continue
		}

		title := "Free SVG Icons - Download Vector Graphics | Online Free DevTools by Hexmos | No Registration Required"
		if p > 1 {
			title = fmt.Sprintf("Free SVG Icons - Page %d | Online Free DevTools by Hexmos", p)
		}

		layoutProps := layouts.BaseLayoutProps{
			Title:       title,
			Description: "Download thousands of free SVG icons instantly. Edit colors, add backgrounds, and customize vector graphics. No registration required.",
			Keywords:    []string{"svg icons", "vector graphics", "free icons", "download icons"},
			ShowHeader:  true,
			Canonical:   siteURL + "/svg_icons/",
		}

		data := svg_icons_pages.SVGIndexData{
			Categories:      categories,
			CurrentPage:     p,
			TotalPages:      totalIndexPages,
			TotalCategories: totalCategories,
			TotalSvgIcons:   totalIcons,
			BreadcrumbItems: []components.BreadcrumbItem{
				{Label: "Free DevTools", Href: basePath + "/"},
				{Label: "SVG Icons"},
			},
			LayoutProps: layoutProps,
		}

		meta := &static_cache.PageMetadata{
			Title:          layoutProps.Title,
			Description:    layoutProps.Description,
			Keywords:       layoutProps.Keywords,
			Canonical:      layoutProps.Canonical,
			OgImage:        layoutProps.OgImage,
			TwitterImage:   layoutProps.TwitterImage,
			ThumbnailUrl:   layoutProps.ThumbnailUrl,
			EncodingFormat: layoutProps.EncodingFormat,
		}
		renderToFile(relPath, svg_icons_pages.IndexContent(data), meta)
	}

	// Category and Icon pages
	log.Println("Generating SVG Icons Category and Icon Pages...")
	for _, cluster := range clusters {
		category := cluster.SourceFolder
		categoryName := category

		catPages := (cluster.Count + categoryItemsPerPage - 1) / categoryItemsPerPage
		if catPages == 0 {
			catPages = 1
		}

		// Category pagination pages
		for p := 1; p <= catPages; p++ {
			var relPath string
			if p == 1 {
				relPath = fmt.Sprintf("%s/", category)
			} else {
				relPath = fmt.Sprintf("%s/%d/", category, p)
			}

			offset := (p - 1) * categoryItemsPerPage
			icons, err := db.GetIconsByCluster(cluster.SourceFolder, &categoryName, categoryItemsPerPage, offset)
			if err != nil {
				log.Printf("Failed to fetch icons for %s page %d: %v", category, p, err)
				continue
			}

			title := cluster.Title
			if title == "" {
				title = fmt.Sprintf("%s SVG Icons - Free Download & Edit | Online Free DevTools by Hexmos", category)
			}
			description := cluster.Description
			if description == "" {
				description = fmt.Sprintf("Download free %s SVG icons. High quality vector graphics for your projects.", category)
			}

			layoutProps := layouts.BaseLayoutProps{
				Title:       title,
				Description: description,
				ShowHeader:  true,
				Canonical:   fmt.Sprintf("%s/svg_icons/%s/", siteURL, category),
			}

			headingTitle := strings.TrimSpace(strings.Split(title, "|")[0])

			data := svg_icons_pages.CategoryData{
				Category:     category,
				HeadingTitle: headingTitle,
				ClusterData:  &cluster,
				CategoryIcons: icons,
				TotalIcons:   cluster.Count,
				CurrentPage:  p,
				TotalPages:   catPages,
				BreadcrumbItems: []components.BreadcrumbItem{
					{Label: "Free DevTools", Href: basePath + "/"},
					{Label: "SVG Icons", Href: basePath + "/svg_icons/"},
					{Label: category},
				},
				LayoutProps: layoutProps,
			}

			catMeta := &static_cache.PageMetadata{
				Title:          layoutProps.Title,
				Description:    layoutProps.Description,
				Keywords:       layoutProps.Keywords,
				Canonical:      layoutProps.Canonical,
				OgImage:        layoutProps.OgImage,
				TwitterImage:   layoutProps.TwitterImage,
				ThumbnailUrl:   layoutProps.ThumbnailUrl,
				EncodingFormat: layoutProps.EncodingFormat,
			}
			renderToFile(relPath, svg_icons_pages.CategoryContent(data), catMeta)
		}

		// Individual icon pages
		iconPage := 0
		for {
			offset := iconPage * 100
			icons, err := db.GetIconsByCluster(cluster.SourceFolder, &categoryName, 100, offset)
			if err != nil || len(icons) == 0 {
				break
			}

			for _, iconMeta := range icons {
				icon, err := db.GetIconByCategoryAndName(category, iconMeta.Name)
				if err != nil || icon == nil {
					continue
				}

				relPath := fmt.Sprintf("%s/%s/", category, icon.Name)

				var title string
				if icon.Title != nil && *icon.Title != "" {
					title = *icon.Title
				} else {
					title = fmt.Sprintf("Free %s Vector SVG Icon Download | Online Free DevTools by Hexmos", icon.Name)
				}

				description := icon.Description
				if description == "" {
					description = fmt.Sprintf("Download %s SVG icon for free.", icon.Name)
				}

				keywords := []string{"svg", "icons", "vector", category}
				if icon.Name != "" {
					keywords = append(keywords, icon.Name)
				}
				if len(icon.Tags) > 0 {
					keywords = append(keywords, icon.Tags...)
				}

				svgImageUrl := fmt.Sprintf("https://hexmos.com/freedevtools/svg_icons/%s/%s.svg", category, icon.Name)

				layoutProps := layouts.BaseLayoutProps{
					Name:           icon.Name,
					Title:          title,
					Description:    description,
					Keywords:       keywords,
					ShowHeader:     true,
					Canonical:      fmt.Sprintf("%s/svg_icons/%s/%s/", siteURL, category, icon.Name),
					ThumbnailUrl:   svgImageUrl,
					OgImage:        svgImageUrl,
					TwitterImage:   svgImageUrl,
					ImgWidth:       128,
					ImgHeight:      128,
					EncodingFormat: "image/svg+xml",
				}

				// Parse SeeAlso
				var seeAlsoItems []common.SeeAlsoItem
				if icon.SeeAlso != "" {
					var seeAlsoData []common.SeeAlsoJSONItem
					if err := json.Unmarshal([]byte(icon.SeeAlso), &seeAlsoData); err == nil {
						for _, item := range seeAlsoData {
							seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
						}
					}
				}

				data := svg_icons_pages.IconData{
					Icon:     icon,
					Category: category,
					BreadcrumbItems: []components.BreadcrumbItem{
						{Label: "Free DevTools", Href: basePath + "/"},
						{Label: "SVG Icons", Href: basePath + "/svg_icons/"},
						{Label: category, Href: basePath + "/svg_icons/" + category + "/"},
						{Label: icon.Name},
					},
					LayoutProps:  layoutProps,
					Keywords:     keywords,
					SeeAlsoItems: seeAlsoItems,
				}

				iconMeta := &static_cache.PageMetadata{
					Title:          data.LayoutProps.Title,
					Description:    data.LayoutProps.Description,
					Keywords:       data.LayoutProps.Keywords,
					Canonical:      data.LayoutProps.Canonical,
					OgImage:        data.LayoutProps.OgImage,
					TwitterImage:   data.LayoutProps.TwitterImage,
					ThumbnailUrl:   data.LayoutProps.ThumbnailUrl,
					EncodingFormat: data.LayoutProps.EncodingFormat,
				}
				renderToFile(relPath, svg_icons_pages.IconContent(data), iconMeta)
			}

			if len(icons) < 100 {
				break
			}
			iconPage++
		}
	}

	log.Println("Static HTML generation for SVG Icons complete!")
	tracker.Finish()
}
