package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"sync"
	"time"
)

type categoryResult struct {
	name              string
	total             int
	updatedCount      int
	errorCount        int
	duration          time.Duration
	dbQueryTime       time.Duration
	processPageTime   time.Duration
	meilisearchTime   time.Duration
	processingTime    time.Duration
	jsonMarshalTime   time.Duration
	dbUpdateTime      time.Duration
}

func processCategory(categoryName string, processor Processor, numItems, limit, workers int, wg *sync.WaitGroup, resultsChan chan categoryResult) {
	startTime := time.Now()

	fmt.Printf("\n=== Processing %s category with %d items per page (workers: %d) ===\n", categoryName, numItems, workers)
	if limit > 0 {
		fmt.Printf("  (Limited to %d pages for testing)\n", limit)
	}
	fmt.Println()

	// Get all pages
	dbQueryStart := time.Now()
	pages, err := processor.GetAllPages(limit)
	dbQueryTime := time.Since(dbQueryStart)
	if err != nil {
		duration := time.Since(startTime)
		fmt.Fprintf(os.Stderr, "Failed to get pages for %s: %v\n", categoryName, err)
		resultsChan <- categoryResult{name: categoryName, total: 0, updatedCount: 0, errorCount: 1, duration: duration, dbQueryTime: dbQueryTime}
		return
	}

	total := len(pages)
	fmt.Printf("Processing %d pages with %d workers...\n", total, workers)
	fmt.Println()

	var updatedCount, errorCount int64
	var mu sync.Mutex
	var processedCount int64
	var totalProcessPageTime, totalMeilisearchTime, totalProcessingTime, totalJsonMarshalTime, totalDbUpdateTime time.Duration

	// Create page channel
	pageChan := make(chan PageData, workers*2)
	
	// Start workers
	var workerWg sync.WaitGroup
	for i := 0; i < workers; i++ {
		workerWg.Add(1)
		go func() {
			defer workerWg.Done()
			for page := range pageChan {
				// Process page (includes API calls)
				processPageStart := time.Now()
				seeAlsoItems, meilisearchTime, processingTime, err := ProcessPage(page, processor, numItems)
				processPageTime := time.Since(processPageStart)
				if err != nil {
					mu.Lock()
					errorCount++
					current := processedCount + 1
					mu.Unlock()
					fmt.Fprintf(os.Stderr, "[%s %d/%d] Error processing %s: %v\n", categoryName, current, total, page.Key, err)
					mu.Lock()
					processedCount++
					mu.Unlock()
					continue
				}

				// Convert to JSON
				jsonMarshalStart := time.Now()
				seeAlsoJSON, err := json.Marshal(seeAlsoItems)
				jsonMarshalTime := time.Since(jsonMarshalStart)
				if err != nil {
					mu.Lock()
					errorCount++
					current := processedCount + 1
					mu.Unlock()
					fmt.Fprintf(os.Stderr, "[%s %d/%d] Error marshaling JSON for %s: %v\n", categoryName, current, total, page.Key, err)
					mu.Lock()
					processedCount++
					mu.Unlock()
					continue
				}

				// Update database
				dbUpdateStart := time.Now()
				err = processor.UpdatePage(page.HashID, page.CategoryID, string(seeAlsoJSON))
				dbUpdateTime := time.Since(dbUpdateStart)
				if err != nil {
					mu.Lock()
					errorCount++
					current := processedCount + 1
					mu.Unlock()
					fmt.Fprintf(os.Stderr, "[%s %d/%d] Error updating %s: %v\n", categoryName, current, total, page.Key, err)
					mu.Lock()
					processedCount++
					mu.Unlock()
					continue
				}

				mu.Lock()
				totalProcessPageTime += processPageTime
				totalMeilisearchTime += meilisearchTime
				totalProcessingTime += processingTime
				totalJsonMarshalTime += jsonMarshalTime
				totalDbUpdateTime += dbUpdateTime
				current := processedCount + 1
				total64 := int64(total)
				if len(seeAlsoItems) > 0 {
					updatedCount++
					if current%10 == 0 || current == total64 {
						fmt.Printf("[%s %d/%d] Updated: %s - Found %d related items\n", categoryName, current, total, page.Key, len(seeAlsoItems))
					}
				} else {
					if current%50 == 0 || current == total64 {
						fmt.Printf("[%s %d/%d] No results: %s\n", categoryName, current, total, page.Key)
					}
				}
				processedCount++
				mu.Unlock()
			}
		}()
	}

	// Send pages to workers
	for _, page := range pages {
		pageChan <- page
	}
	close(pageChan)

	// Wait for all workers to finish
	workerWg.Wait()

	duration := time.Since(startTime)
	overheadTime := duration - dbQueryTime - totalProcessPageTime - totalJsonMarshalTime - totalDbUpdateTime
	
	fmt.Printf("\n%s category complete!\n", categoryName)
	fmt.Printf("  Total pages: %d\n", total)
	fmt.Printf("  Updated with results: %d\n", updatedCount)
	fmt.Printf("  No results: %d\n", total-int(updatedCount)-int(errorCount))
	fmt.Printf("  Errors: %d\n", errorCount)
	fmt.Printf("  Duration: %s\n", duration.Round(time.Millisecond))
	if duration > 0 && total > 0 {
		fmt.Printf("\n  Time breakdown:\n")
		fmt.Printf("    Database query:     %s (%.1f%%)\n", dbQueryTime.Round(time.Millisecond), float64(dbQueryTime)/float64(duration)*100)
		fmt.Printf("    Process pages:      %s (%.1f%%) - avg %s/page\n", totalProcessPageTime.Round(time.Millisecond), float64(totalProcessPageTime)/float64(duration)*100, (totalProcessPageTime/time.Duration(total)).Round(time.Millisecond))
		fmt.Printf("      ├─ Meilisearch:   %s (%.1f%%) - avg %s/page\n", totalMeilisearchTime.Round(time.Millisecond), float64(totalMeilisearchTime)/float64(duration)*100, (totalMeilisearchTime/time.Duration(total)).Round(time.Millisecond))
		fmt.Printf("      └─ Processing:    %s (%.1f%%) - avg %s/page\n", totalProcessingTime.Round(time.Millisecond), float64(totalProcessingTime)/float64(duration)*100, (totalProcessingTime/time.Duration(total)).Round(time.Millisecond))
		fmt.Printf("    JSON marshaling:    %s (%.1f%%)\n", totalJsonMarshalTime.Round(time.Millisecond), float64(totalJsonMarshalTime)/float64(duration)*100)
		fmt.Printf("    Database updates:   %s (%.1f%%) - avg %s/page\n", totalDbUpdateTime.Round(time.Millisecond), float64(totalDbUpdateTime)/float64(duration)*100, (totalDbUpdateTime/time.Duration(total)).Round(time.Millisecond))
		fmt.Printf("    Overhead/sync:      %s (%.1f%%)\n", overheadTime.Round(time.Millisecond), float64(overheadTime)/float64(duration)*100)
	}

	resultsChan <- categoryResult{
		name:            categoryName,
		total:           total,
		updatedCount:    int(updatedCount),
		errorCount:      int(errorCount),
		duration:        duration,
		dbQueryTime:     dbQueryTime,
		processPageTime: totalProcessPageTime,
		meilisearchTime: totalMeilisearchTime,
		processingTime:  totalProcessingTime,
		jsonMarshalTime: totalJsonMarshalTime,
		dbUpdateTime:    totalDbUpdateTime,
	}
}

func main() {
	items := flag.Int("items", 3, "Number of See Also items to store and display (1-10)")
	limit := flag.Int("limit", 0, "Limit number of pages to process per category (0 = no limit, for testing)")
	workers := flag.Int("workers", 10, "Number of concurrent workers per category (default: 10)")
	categoryFlag := flag.String("category", "", "Process only a specific category (e.g. mcp, cheatsheet). If empty, process all.")

	flag.Parse()

	// Clamp items between 1 and 10
	numItems := *items
	if numItems < 1 {
		numItems = 1
	} else if numItems > 10 {
		numItems = 10
	}
	if numItems != *items {
		fmt.Fprintf(os.Stderr, "Warning: items clamped to %d (must be between 1 and 10)\n", numItems)
	}

	// Clamp workers between 1 and 50
	numWorkers := *workers
	if numWorkers < 1 {
		numWorkers = 1
	} else if numWorkers > 50 {
		numWorkers = 50
	}
	if numWorkers != *workers {
		fmt.Fprintf(os.Stderr, "Warning: workers clamped to %d (must be between 1 and 50)\n", numWorkers)
	}

	
	if *categoryFlag != "" {
		fmt.Printf("Processing category %q with %d items per page and %d workers...\n",
			*categoryFlag, numItems, numWorkers)
	} else {
		fmt.Printf("Processing all categories with %d items per page and %d workers per category...\n",
			numItems, numWorkers)
	}
	
	if *limit > 0 {
		fmt.Printf("  (Limited to %d pages per category for testing)\n", *limit)
	}
	fmt.Println()

	scriptStartTime := time.Now()

	// Process all categories in parallel
	categories := []struct {
		name      string
		processor func() (Processor, error)
	}{
		{"mcp", func() (Processor, error) {
			p, err := NewMcpProcessor()
			return p, err
		}},
		{"cheatsheet", func() (Processor, error) {
			p, err := NewCheatsheetProcessor()
			return p, err
		}},
		{"tldr", func() (Processor, error) {
			p, err := NewTldrProcessor()
			return p, err
		}},
		{"svg_icons", func() (Processor, error) {
			p, err := NewSvgIconsProcessor()
			return p, err
		}},
		{"png_icons", func() (Processor, error) {
			p, err := NewPngIconsProcessor()
			return p, err
		}},
		{"ipm", func() (Processor, error) {
			p, err := NewIpmProcessor()
			return p, err
		}},
		{"man_pages", func() (Processor, error) {
			p, err := NewManPagesProcessor()
			return p, err
		}},
		{"emojis", func() (Processor, error) {
			p, err := NewEmojisProcessor()
			return p, err
		}},
	}

	categoryMap := make(map[string]struct {
		name      string
		processor func() (Processor, error)
	})
	
	for _, c := range categories {
		categoryMap[c.name] = c
	}
	
	selectedCategories := categories

	if *categoryFlag != "" {
		cat, ok := categoryMap[*categoryFlag]
		if !ok {
			fmt.Fprintf(os.Stderr, "Unknown category: %s\nAvailable categories:\n", *categoryFlag)
			for _, c := range categories {
				fmt.Fprintf(os.Stderr, "  - %s\n", c.name)
			}
			os.Exit(1)
		}

		selectedCategories = []struct {
			name      string
			processor func() (Processor, error)
		}{cat}
	}


	var wg sync.WaitGroup
	resultsChan := make(chan categoryResult, len(selectedCategories))


	// Start all categories in parallel
	for _, cat := range selectedCategories {
		wg.Add(1)
		go func(category struct {
			name      string
			processor func() (Processor, error)
		}) {
			defer wg.Done()
			
			processor, err := category.processor()
			if err != nil {
				fmt.Fprintf(os.Stderr, "Failed to initialize %s processor: %v\n", category.name, err)
				resultsChan <- categoryResult{name: category.name, total: 0, updatedCount: 0, errorCount: 1, duration: 0}
				return
			}
			defer processor.Close()

			processCategory(category.name, processor, numItems, *limit, numWorkers, nil, resultsChan)
		}(cat)
	}

	// Wait for all goroutines to complete
	wg.Wait()
	close(resultsChan)

	// Collect results
	var totalPages, totalUpdated, totalErrors int
	var totalDuration, totalDbQueryTime, totalProcessPageTime, totalMeilisearchTime, totalProcessingTime, totalJsonMarshalTime, totalDbUpdateTime time.Duration
	fmt.Println()
	fmt.Println("========================================")
	fmt.Println("All categories processing complete!")
	for result := range resultsChan {
		fmt.Printf("  %s: %d pages, %d updated, %d errors, %s\n", result.name, result.total, result.updatedCount, result.errorCount, result.duration.Round(time.Millisecond))
		totalPages += result.total
		totalUpdated += result.updatedCount
		totalErrors += result.errorCount
		totalDuration += result.duration
		totalDbQueryTime += result.dbQueryTime
		totalProcessPageTime += result.processPageTime
		totalMeilisearchTime += result.meilisearchTime
		totalProcessingTime += result.processingTime
		totalJsonMarshalTime += result.jsonMarshalTime
		totalDbUpdateTime += result.dbUpdateTime
	}
	totalScriptDuration := time.Since(scriptStartTime)
	totalOverheadTime := totalScriptDuration - totalDbQueryTime - totalProcessPageTime - totalJsonMarshalTime - totalDbUpdateTime
	
	fmt.Println("========================================")
	fmt.Printf("  Total pages processed: %d\n", totalPages)
	fmt.Printf("  Total updated: %d\n", totalUpdated)
	fmt.Printf("  Total errors: %d\n", totalErrors)
	fmt.Printf("  Total category time: %s\n", totalDuration.Round(time.Millisecond))
	fmt.Printf("  Total script time: %s\n", totalScriptDuration.Round(time.Millisecond))
	if totalScriptDuration > 0 && totalPages > 0 {
		fmt.Println()
		fmt.Println("  Overall time breakdown:")
		fmt.Printf("    Database queries:    %s (%.1f%%)\n", totalDbQueryTime.Round(time.Millisecond), float64(totalDbQueryTime)/float64(totalScriptDuration)*100)
		fmt.Printf("    Process pages:      %s (%.1f%%) - avg %s/page\n", totalProcessPageTime.Round(time.Millisecond), float64(totalProcessPageTime)/float64(totalScriptDuration)*100, (totalProcessPageTime/time.Duration(totalPages)).Round(time.Millisecond))
		fmt.Printf("      ├─ Meilisearch:   %s (%.1f%%) - avg %s/page\n", totalMeilisearchTime.Round(time.Millisecond), float64(totalMeilisearchTime)/float64(totalScriptDuration)*100, (totalMeilisearchTime/time.Duration(totalPages)).Round(time.Millisecond))
		fmt.Printf("      └─ Processing:    %s (%.1f%%) - avg %s/page\n", totalProcessingTime.Round(time.Millisecond), float64(totalProcessingTime)/float64(totalScriptDuration)*100, (totalProcessingTime/time.Duration(totalPages)).Round(time.Millisecond))
		fmt.Printf("    JSON marshaling:    %s (%.1f%%)\n", totalJsonMarshalTime.Round(time.Millisecond), float64(totalJsonMarshalTime)/float64(totalScriptDuration)*100)
		fmt.Printf("    Database updates:   %s (%.1f%%) - avg %s/page\n", totalDbUpdateTime.Round(time.Millisecond), float64(totalDbUpdateTime)/float64(totalScriptDuration)*100, (totalDbUpdateTime/time.Duration(totalPages)).Round(time.Millisecond))
		fmt.Printf("    Overhead/sync:      %s (%.1f%%)\n", totalOverheadTime.Round(time.Millisecond), float64(totalOverheadTime)/float64(totalScriptDuration)*100)
	}
}

