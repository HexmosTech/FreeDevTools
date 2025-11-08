package jargon_stemmer

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
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
	AltDescription  string `json:"altDescription,omitempty"`  // Processed version of description
	Path            string `json:"path,omitempty"`
	Image           string `json:"image,omitempty"`
	Category        string `json:"category,omitempty"`
	Code            string `json:"code,omitempty"`            // For emojis
	Owner           string `json:"owner,omitempty"`           // For mcp
	Stars           int    `json:"stars,omitempty"`           // For mcp
	Language        string `json:"language,omitempty"`        // For mcp
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
				// Process name field
				originalName := objects[i].Name
				processedName := ProcessText(originalName)
				objects[i].AltName = processedName
				
				// Process description field if it exists
				if objects[i].Description != "" {
					originalDescription := objects[i].Description
					processedDescription := ProcessText(originalDescription)
					objects[i].AltDescription = processedDescription
				}
				
				// Update counter safely
				mu.Lock()
				processedCount++
				mu.Unlock()
				
				// Show first few examples
				
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
		return fmt.Errorf("error marshaling JSON: %v", err)
	}
	
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
				// Process name field
				originalName := objects[i].Name
				processedName := ProcessText(originalName)
				objects[i].AltName = processedName
				
				// Process description field if it exists
				if objects[i].Description != "" {
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
