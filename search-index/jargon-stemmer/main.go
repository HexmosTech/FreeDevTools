package jargon_stemmer

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"regexp"
	"runtime"
	"strings"
	"sync"
	"time"

	"github.com/clipperhouse/jargon"
	"github.com/clipperhouse/jargon/filters/ascii"
	"github.com/clipperhouse/jargon/filters/contractions"
	"github.com/clipperhouse/jargon/filters/stemmer"
)

type JSONObject struct {
	ID              string `json:"id"`
	Name            string `json:"name"`
	AltName         string `json:"altName,omitempty"`         // Processed version of name
	Description     string `json:"description,omitempty"`
	AltDescription  string `json:"altDescription,omitempty"`  // Processed version of description or img_alt
	Path            string `json:"path,omitempty"`
	Image           string `json:"image,omitempty"`
	Category        string `json:"category,omitempty"`
	Code            string `json:"code,omitempty"`            // For emojis
	Owner           string `json:"owner,omitempty"`           // For mcp
	Stars           int    `json:"stars,omitempty"`           // For mcp
	Language        string `json:"language,omitempty"`         // For mcp
	ImgAlt          string `json:"img_alt,omitempty"`         // For icons - used for altDescription
}

// cleanName strips suffixes like "| online free devtools by hexmos" and trims whitespace
func cleanName(name string) string {
	name = strings.TrimSpace(name)
	// Strip "| online free devtools by hexmos" (case insensitive, handles both "devtools" and "devtool")
	name = regexp.MustCompile(`(?i)\s*\|\s*online\s+free\s+devtools?\s+by\s+hexmos?\s*$`).ReplaceAllString(name, "")
	return strings.TrimSpace(name)
}

func ProcessText(text string) string {
	// Apply all filters: Contractions, ASCII fold, and Stem
	stream := jargon.TokenizeString(text).
		Filter(contractions.Expand).
		Filter(ascii.Fold).
		Filter(stemmer.English)
	
	var results []string
	for stream.Scan() {
		token := stream.Token()
		// Only include non-whitespace tokens
		if !token.IsSpace() {
			results = append(results, token.String())
		}
	}
	
	if err := stream.Err(); err != nil {
		log.Printf("Error processing '%s': %v", text, err)
		return text // Return original if processing fails
	}
	
	return strings.Join(results, " ")
}

func ProcessJSONFile(filePath string) error {
	fmt.Printf("🔍 Processing JSON file: %s\n", filePath)
	start := time.Now()
	
	// Read JSON file
	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		return fmt.Errorf("error reading file %s: %v", filePath, err)
	}
	
	// Parse JSON
	var objects []JSONObject
	if err := json.Unmarshal(data, &objects); err != nil {
		return fmt.Errorf("error parsing JSON: %v", err)
	}
	
	fmt.Printf("📊 Found %d entries to process\n", len(objects))
	
	// Get number of workers (CPU count - 1)
	numWorkers := runtime.NumCPU() - 1
	if numWorkers < 1 {
		numWorkers = 1
	}
	
	fmt.Printf("🚀 Using %d workers for parallel processing\n", numWorkers)
	
	// Process objects in parallel using goroutines
	var wg sync.WaitGroup
	processedCount := int64(0)
	var mu sync.Mutex
	
	// Channel to distribute work
	workChan := make(chan int, numWorkers*2)
	
	// Start workers
	for i := 0; i < numWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for i := range workChan {
				// Clean name first (strip suffixes and trim)
				originalName := cleanName(objects[i].Name)
				// For emojis, split by ":" and take only the first part
				if objects[i].Category == "emojis" {
					if idx := strings.Index(originalName, ":"); idx != -1 {
						originalName = strings.TrimSpace(originalName[:idx])
					}
				}
				objects[i].Name = originalName
				
				// Process name field for altName
				processedName := ProcessText(originalName)
				// Clean altName (strip suffixes and trim)
				objects[i].AltName = cleanName(processedName)
				
				// Process description field if it exists
				// For icons, prefer img_alt for altDescription if available
				if objects[i].ImgAlt != "" {
					// Use img_alt directly for altDescription (already processed/optimized)
					objects[i].AltDescription = objects[i].ImgAlt
					// Clear img_alt so it doesn't appear in JSON
					objects[i].ImgAlt = ""
				} else if objects[i].Description != "" {
					originalDescription := objects[i].Description
					processedDescription := ProcessText(originalDescription)
					objects[i].AltDescription = processedDescription
				}
				
				// Update counter safely
				mu.Lock()
				processedCount++
				currentCount := processedCount
				mu.Unlock()
				
				// Show progress every 5000 entries
				if currentCount%5000 == 0 {
					fmt.Printf("  Processed %d/%d entries...\n", currentCount, len(objects))
				}
			}
		}()
	}
	
	// Send work to workers
	for i := range objects {
		workChan <- i
	}
	close(workChan)
	
	// Wait for all workers to complete
	wg.Wait()
	
	fmt.Printf("💾 Marshaling JSON data...\n")
	// Write back to file
	outputData, err := json.MarshalIndent(objects, "", "  ")
	if err != nil {
		return fmt.Errorf("error marshaling JSON: %v", err)
	}
	
	fmt.Printf("💾 Writing to file %s...\n", filePath)
	if err := ioutil.WriteFile(filePath, outputData, 0644); err != nil {
		return fmt.Errorf("error writing file %s: %v", filePath, err)
	}
	
	elapsed := time.Since(start)
	fmt.Printf("✅ Processing completed!\n")
	fmt.Printf("📈 Statistics:\n")
	fmt.Printf("   • Entries processed: %d\n", processedCount)
	fmt.Printf("   • Workers used: %d\n", numWorkers)
	fmt.Printf("   • Time taken: %v\n", elapsed)
	fmt.Printf("   • Average time per entry: %v\n", elapsed/time.Duration(processedCount))
	
	return nil
}

func ProcessInstallerpediaJSONFile(filePath string) error {
	fmt.Printf("🔍 Processing Installerpedia JSON file: %s\n", filePath)
	start := time.Now()

	// Read JSON file
	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		return fmt.Errorf("error reading file %s: %v", filePath, err)
	}

	// Parse as generic array of maps (PRESERVES ALL FIELDS)
	var objects []map[string]interface{}
	if err := json.Unmarshal(data, &objects); err != nil {
		return fmt.Errorf("error parsing JSON: %v", err)
	}

	fmt.Printf("📊 Found %d Installerpedia entries\n", len(objects))

	// Worker pool
	numWorkers := runtime.NumCPU() - 1
	if numWorkers < 1 {
		numWorkers = 1
	}
	fmt.Printf("🚀 Using %d workers\n", numWorkers)

	var wg sync.WaitGroup
	workChan := make(chan int, numWorkers*2)

	// Workers
	for w := 0; w < numWorkers; w++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for i := range workChan {
				obj := objects[i]

				// --- Clean and process name ---
				if name, ok := obj["name"].(string); ok {
					cleanedName := cleanName(name)
					// For emojis, split by ":" and take only the first part
					if category, ok := obj["category"].(string); ok && category == "emojis" {
						if idx := strings.Index(cleanedName, ":"); idx != -1 {
							cleanedName = strings.TrimSpace(cleanedName[:idx])
						}
					}
					obj["name"] = cleanedName
					obj["altName"] = cleanName(ProcessText(cleanedName))
				}

				// --- altDescription ---
				// For icons, prefer img_alt for altDescription if available
				if imgAlt, ok := obj["img_alt"].(string); ok && imgAlt != "" {
					obj["altDescription"] = imgAlt
					// Remove img_alt from JSON output
					delete(obj, "img_alt")
				} else if desc, ok := obj["description"].(string); ok {
					obj["altDescription"] = ProcessText(desc)
				}
			}
		}()
	}

	// Queue indices
	for i := range objects {
		workChan <- i
	}
	close(workChan)

	wg.Wait()

	// Save back
	outputData, err := json.MarshalIndent(objects, "", "  ")
	if err != nil {
		return fmt.Errorf("error marshaling JSON: %v", err)
	}

	if err := ioutil.WriteFile(filePath, outputData, 0644); err != nil {
		return fmt.Errorf("error writing file: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("✅ Installerpedia processing completed in %v\n", elapsed)

	return nil
}


func main() {
	if len(os.Args) != 2 {
		fmt.Fprintf(os.Stderr, "Usage: %s <json_file>\n", os.Args[0])
		os.Exit(1)
	}
	
	jsonFile := os.Args[1]
	
	fmt.Printf("🔍 Processing JSON file: %s\n", jsonFile)
	start := time.Now()
	
	// Read JSON file
	data, err := ioutil.ReadFile(jsonFile)
	if err != nil {
		log.Fatalf("Error reading file %s: %v", jsonFile, err)
	}
	
	// Parse JSON
	var objects []JSONObject
	if err := json.Unmarshal(data, &objects); err != nil {
		log.Fatalf("Error parsing JSON: %v", err)
	}
	
	fmt.Printf("📊 Found %d entries to process\n", len(objects))
	
	// Get number of workers (CPU count - 1)
	numWorkers := runtime.NumCPU() - 1
	if numWorkers < 1 {
		numWorkers = 1
	}
	
	fmt.Printf("🚀 Using %d workers for parallel processing\n", numWorkers)
	
	// Process objects in parallel using goroutines
	var wg sync.WaitGroup
	processedCount := int64(0)
	var mu sync.Mutex
	
	// Channel to distribute work
	workChan := make(chan int, numWorkers*2)
	
	// Start workers
	for i := 0; i < numWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for i := range workChan {
				// Clean name first (strip suffixes and trim)
				originalName := cleanName(objects[i].Name)
				// For emojis, split by ":" and take only the first part
				if objects[i].Category == "emojis" {
					if idx := strings.Index(originalName, ":"); idx != -1 {
						originalName = strings.TrimSpace(originalName[:idx])
					}
				}
				objects[i].Name = originalName
				
				// Process name field for altName
				processedName := ProcessText(originalName)
				// Clean altName (strip suffixes and trim)
				objects[i].AltName = cleanName(processedName)
				
				// Process description field if it exists
				// For icons, prefer img_alt for altDescription if available
				if objects[i].ImgAlt != "" {
					// Use img_alt directly for altDescription (already processed/optimized)
					objects[i].AltDescription = objects[i].ImgAlt
					// Clear img_alt so it doesn't appear in JSON
					objects[i].ImgAlt = ""
				} else if objects[i].Description != "" {
					originalDescription := objects[i].Description
					processedDescription := ProcessText(originalDescription)
					objects[i].AltDescription = processedDescription
				}
				
				// Update counter safely
				mu.Lock()
				processedCount++
				mu.Unlock()
				
			
				
				// Progress update removed - no more spam
			}
		}()
	}
	
	// Send work to workers
	for i := range objects {
		workChan <- i
	}
	close(workChan)
	
	// Wait for all workers to complete
	wg.Wait()
	
	// Write back to file
	outputData, err := json.MarshalIndent(objects, "", "  ")
	if err != nil {
		log.Fatalf("Error marshaling JSON: %v", err)
	}
	
	if err := ioutil.WriteFile(jsonFile, outputData, 0644); err != nil {
		log.Fatalf("Error writing file %s: %v", jsonFile, err)
	}
	
	elapsed := time.Since(start)
	fmt.Printf("✅ Processing completed!\n")
	fmt.Printf("📈 Statistics:\n")
	fmt.Printf("   • Entries processed: %d\n", processedCount)
	fmt.Printf("   • Workers used: %d\n", numWorkers)
	fmt.Printf("   • Time taken: %v\n", elapsed)
	fmt.Printf("   • Average time per entry: %v\n", elapsed/time.Duration(processedCount))
}
