package main

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

type ImageRecord struct {
	EmojiSlugHash int64
	EmojiSlug     string
	ImageType     string
	Filename      string
	Exists        bool
	FilePath      string
}

type MissingImageStats struct {
	TotalInDB    int
	TotalMissing int
	TotalExists  int
	ByImageType  map[string]TypeStats
	MissingFiles []ImageRecord
}

type TypeStats struct {
	Total       int
	Missing     int
	Exists      int
	MissingList []ImageRecord
}

func main() {
	// Get database path
	dbPath := getDBPath()
	if dbPath == "" {
		fmt.Fprintf(os.Stderr, "Error: Could not find emoji database\n")
		os.Exit(1)
	}

	// Open database
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error opening database: %v\n", err)
		os.Exit(1)
	}
	defer db.Close()

	// Query all images with emoji_slug_hash
	query := `
		SELECT emoji_slug_hash, emoji_slug, image_type, filename
		FROM images
		WHERE emoji_slug IS NOT NULL
		ORDER BY image_type, emoji_slug, filename
	`

	rows, err := db.Query(query)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error querying images: %v\n", err)
		os.Exit(1)
	}
	defer rows.Close()

	// Get public directory path
	publicPath, err := filepath.Abs("public")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error getting public directory path: %v\n", err)
		os.Exit(1)
	}

	stats := MissingImageStats{
		ByImageType:  make(map[string]TypeStats),
		MissingFiles: []ImageRecord{},
	}

	// Store all records for CSV export
	allRecords := []ImageRecord{}

	// Process each image
	for rows.Next() {
		var record ImageRecord
		if err := rows.Scan(&record.EmojiSlugHash, &record.EmojiSlug, &record.ImageType, &record.Filename); err != nil {
			fmt.Fprintf(os.Stderr, "Error scanning row: %v\n", err)
			continue
		}

		stats.TotalInDB++

		// Build expected file path
		expectedPath := buildEmojiImagePath(publicPath, record.EmojiSlug, record.ImageType, record.Filename)
		record.FilePath = expectedPath

		// Check if file exists
		exists := fileExists(expectedPath)
		record.Exists = exists

		// Store record for CSV
		allRecords = append(allRecords, record)

		// Update stats
		if exists {
			stats.TotalExists++
		} else {
			stats.TotalMissing++
			stats.MissingFiles = append(stats.MissingFiles, record)
		}

		// Update type-specific stats
		typeStat := stats.ByImageType[record.ImageType]
		typeStat.Total++
		if exists {
			typeStat.Exists++
		} else {
			typeStat.Missing++
			typeStat.MissingList = append(typeStat.MissingList, record)
		}
		stats.ByImageType[record.ImageType] = typeStat
	}

	if err := rows.Err(); err != nil {
		fmt.Fprintf(os.Stderr, "Error iterating rows: %v\n", err)
		os.Exit(1)
	}

	// Generate report
	generateReport(stats, publicPath)

	// Save detailed report to file
	saveDetailedReport(stats, publicPath)

	// Save CSV report
	saveCSVReport(allRecords)
}

func buildEmojiImagePath(publicPath, emojiSlug, imageType, filename string) string {
	basePath := filepath.Join(publicPath, "emojis")
	if imageType == "apple-vendor" {
		return filepath.Join(basePath, emojiSlug, "apple-emojis", filename)
	}
	return filepath.Join(basePath, emojiSlug, filename)
}

func fileExists(path string) bool {
	_, err := os.Stat(path)
	return err == nil
}

func getDBPath() string {
	// Try common database locations
	possiblePaths := []string{
		"db/all_dbs/emoji-db-v5.db",
		"../db/all_dbs/emoji-db-v5.db",
		"../../db/all_dbs/emoji-db-v5.db",
		"./emoji-db-v5.db",
		"scripts/emojis/../db/all_dbs/emoji-db-v5.db",
	}

	for _, path := range possiblePaths {
		if absPath, err := filepath.Abs(path); err == nil {
			if _, err := os.Stat(absPath); err == nil {
				return absPath
			}
		}
	}

	return ""
}

func generateReport(stats MissingImageStats, publicPath string) {
	fmt.Println("=" + strings.Repeat("=", 80))
	fmt.Println("EMOJI IMAGE ANALYSIS REPORT")
	fmt.Println("=" + strings.Repeat("=", 80))
	fmt.Println()

	fmt.Printf("Public Directory: %s\n", publicPath)
	fmt.Println()

	// Overall statistics
	fmt.Println("OVERALL STATISTICS")
	fmt.Println(strings.Repeat("-", 80))
	fmt.Printf("Total Images in Database:    %8d\n", stats.TotalInDB)
	fmt.Printf("Images Found on Disk:        %8d (%.2f%%)\n", stats.TotalExists, float64(stats.TotalExists)/float64(stats.TotalInDB)*100)
	fmt.Printf("Images Missing from Disk:    %8d (%.2f%%)\n", stats.TotalMissing, float64(stats.TotalMissing)/float64(stats.TotalInDB)*100)
	fmt.Println()

	// Statistics by image type
	fmt.Println("STATISTICS BY IMAGE TYPE")
	fmt.Println(strings.Repeat("-", 80))
	fmt.Printf("%-20s %10s %10s %10s %12s\n", "Image Type", "Total", "Exists", "Missing", "Missing %")
	fmt.Println(strings.Repeat("-", 80))

	for imageType, typeStat := range stats.ByImageType {
		missingPct := float64(typeStat.Missing) / float64(typeStat.Total) * 100
		fmt.Printf("%-20s %10d %10d %10d %11.2f%%\n",
			imageType, typeStat.Total, typeStat.Exists, typeStat.Missing, missingPct)
	}
	fmt.Println()

	// Detailed missing files report
	if len(stats.MissingFiles) > 0 {
		fmt.Println("DETAILED MISSING FILES REPORT")
		fmt.Println(strings.Repeat("-", 80))
		fmt.Printf("Total Missing Files: %d\n\n", len(stats.MissingFiles))

		// Group by image type
		for imageType, typeStat := range stats.ByImageType {
			if typeStat.Missing > 0 {
				fmt.Printf("\n[%s] - %d missing files:\n", imageType, typeStat.Missing)
				fmt.Println(strings.Repeat("-", 80))

				// Show first 50 missing files per type, then summarize
				maxShow := 50
				for i, record := range typeStat.MissingList {
					if i >= maxShow {
						remaining := len(typeStat.MissingList) - maxShow
						fmt.Printf("... and %d more files\n", remaining)
						break
					}
					expectedPath := buildEmojiImagePath("public", record.EmojiSlug, record.ImageType, record.Filename)
					fmt.Printf("  %s\n", expectedPath)
				}
			}
		}

		// Summary by emoji slug
		fmt.Println()
		fmt.Println("MISSING FILES BY EMOJI SLUG (Top 20)")
		fmt.Println(strings.Repeat("-", 80))
		slugCounts := make(map[string]int)
		for _, record := range stats.MissingFiles {
			slugCounts[record.EmojiSlug]++
		}

		// Sort by count (simple approach - show top 20)
		type SlugCount struct {
			Slug  string
			Count int
		}
		slugList := make([]SlugCount, 0, len(slugCounts))
		for slug, count := range slugCounts {
			slugList = append(slugList, SlugCount{slug, count})
		}

		// Simple sort (bubble sort for small list)
		for i := 0; i < len(slugList) && i < 20; i++ {
			maxIdx := i
			for j := i + 1; j < len(slugList); j++ {
				if slugList[j].Count > slugList[maxIdx].Count {
					maxIdx = j
				}
			}
			slugList[i], slugList[maxIdx] = slugList[maxIdx], slugList[i]
		}

		for i := 0; i < len(slugList) && i < 20; i++ {
			fmt.Printf("  %-40s %4d missing files\n", slugList[i].Slug, slugList[i].Count)
		}
		if len(slugList) > 20 {
			fmt.Printf("  ... and %d more emojis with missing files\n", len(slugList)-20)
		}
	} else {
		fmt.Println("✓ All images found on disk!")
	}

	fmt.Println()
	fmt.Println("=" + strings.Repeat("=", 80))
}

func saveDetailedReport(stats MissingImageStats, publicPath string) {
	reportFile := "scripts/emojis/missing_images_report.txt"
	file, err := os.Create(reportFile)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Warning: Could not create report file: %v\n", err)
		return
	}
	defer file.Close()

	fmt.Fprintf(file, "="+strings.Repeat("=", 80)+"\n")
	fmt.Fprintf(file, "EMOJI IMAGE ANALYSIS REPORT - DETAILED\n")
	fmt.Fprintf(file, "Generated: %s\n", getCurrentTime())
	fmt.Fprintf(file, "="+strings.Repeat("=", 80)+"\n\n")

	fmt.Fprintf(file, "Public Directory: %s\n", publicPath)
	fmt.Fprintf(file, "\n")

	// Overall statistics
	fmt.Fprintf(file, "OVERALL STATISTICS\n")
	fmt.Fprintf(file, strings.Repeat("-", 80)+"\n")
	fmt.Fprintf(file, "Total Images in Database:    %8d\n", stats.TotalInDB)
	fmt.Fprintf(file, "Images Found on Disk:        %8d (%.2f%%)\n", stats.TotalExists, float64(stats.TotalExists)/float64(stats.TotalInDB)*100)
	fmt.Fprintf(file, "Images Missing from Disk:    %8d (%.2f%%)\n", stats.TotalMissing, float64(stats.TotalMissing)/float64(stats.TotalInDB)*100)
	fmt.Fprintf(file, "\n")

	// Statistics by image type
	fmt.Fprintf(file, "STATISTICS BY IMAGE TYPE\n")
	fmt.Fprintf(file, strings.Repeat("-", 80)+"\n")
	fmt.Fprintf(file, "%-20s %10s %10s %10s %12s\n", "Image Type", "Total", "Exists", "Missing", "Missing %")
	fmt.Fprintf(file, strings.Repeat("-", 80)+"\n")

	for imageType, typeStat := range stats.ByImageType {
		missingPct := float64(typeStat.Missing) / float64(typeStat.Total) * 100
		fmt.Fprintf(file, "%-20s %10d %10d %10d %11.2f%%\n",
			imageType, typeStat.Total, typeStat.Exists, typeStat.Missing, missingPct)
	}
	fmt.Fprintf(file, "\n")

	// All missing files
	if len(stats.MissingFiles) > 0 {
		fmt.Fprintf(file, "ALL MISSING FILES (Complete List)\n")
		fmt.Fprintf(file, strings.Repeat("-", 80)+"\n")
		fmt.Fprintf(file, "Total Missing Files: %d\n\n", len(stats.MissingFiles))

		// Group by image type
		for imageType, typeStat := range stats.ByImageType {
			if typeStat.Missing > 0 {
				fmt.Fprintf(file, "\n[%s] - %d missing files:\n", imageType, typeStat.Missing)
				fmt.Fprintf(file, strings.Repeat("-", 80)+"\n")

				for _, record := range typeStat.MissingList {
					expectedPath := buildEmojiImagePath("public", record.EmojiSlug, record.ImageType, record.Filename)
					fmt.Fprintf(file, "  %s\n", expectedPath)
				}
			}
		}

		// Summary by emoji slug
		fmt.Fprintf(file, "\n\nMISSING FILES BY EMOJI SLUG\n")
		fmt.Fprintf(file, strings.Repeat("-", 80)+"\n")
		slugCounts := make(map[string]int)
		for _, record := range stats.MissingFiles {
			slugCounts[record.EmojiSlug]++
		}

		type SlugCount struct {
			Slug  string
			Count int
		}
		slugList := make([]SlugCount, 0, len(slugCounts))
		for slug, count := range slugCounts {
			slugList = append(slugList, SlugCount{slug, count})
		}

		// Sort by count
		for i := 0; i < len(slugList); i++ {
			maxIdx := i
			for j := i + 1; j < len(slugList); j++ {
				if slugList[j].Count > slugList[maxIdx].Count {
					maxIdx = j
				}
			}
			slugList[i], slugList[maxIdx] = slugList[maxIdx], slugList[i]
		}

		for _, item := range slugList {
			fmt.Fprintf(file, "  %-40s %4d missing files\n", item.Slug, item.Count)
		}
	}

	fmt.Printf("\nDetailed report saved to: %s\n", reportFile)
}

func getCurrentTime() string {
	return time.Now().Format("2006-01-02 15:04:05")
}

func saveCSVReport(records []ImageRecord) {
	csvFile := "scripts/emojis/images_analysis.csv"
	file, err := os.Create(csvFile)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Warning: Could not create CSV file: %v\n", err)
		return
	}
	defer file.Close()

	// Write CSV header
	fmt.Fprintf(file, "emoji_slug_hash,emoji_slug,image_type,filename,file_path,exists\n")

	// Write only missing records (exists = no)
	missingCount := 0
	for _, record := range records {
		if !record.Exists {
			// Escape CSV fields (handle commas and quotes in values)
			emojiSlug := escapeCSV(record.EmojiSlug)
			imageType := escapeCSV(record.ImageType)
			filename := escapeCSV(record.Filename)
			filePath := escapeCSV(record.FilePath)

			fmt.Fprintf(file, "%d,%s,%s,%s,%s,no\n",
				record.EmojiSlugHash, emojiSlug, imageType, filename, filePath)
			missingCount++
		}
	}

	fmt.Printf("CSV report saved to: %s (%d missing records)\n", csvFile, missingCount)
}

func escapeCSV(s string) string {
	// If string contains comma, quote, or newline, wrap in quotes and escape quotes
	if strings.Contains(s, ",") || strings.Contains(s, "\"") || strings.Contains(s, "\n") {
		s = strings.ReplaceAll(s, "\"", "\"\"")
		return fmt.Sprintf("\"%s\"", s)
	}
	return s
}
