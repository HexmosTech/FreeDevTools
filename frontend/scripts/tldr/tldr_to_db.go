package main

import (
	"crypto/sha256"
	"database/sql"
	"encoding/binary"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"math"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
	"time"

	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/html"
	"github.com/gomarkdown/markdown/parser"
	_ "github.com/mattn/go-sqlite3"
	"gopkg.in/yaml.v3"
)

// Paths
const (
	DataDir = "../../data/tldr"
	DbPath  = "../../db/all_dbs/tldr-db-v1.db"
)

// Structs matching DB schema
type Page struct {
	UrlHash     int64
	Url         string // Kept for reference
	HtmlContent string
	Metadata    string // JSON
}

type MainPage struct {
	Hash       int64
	Data       string // JSON
	TotalCount int
}

// Intermediate struct for processing
type ProcessedPage struct {
	UrlHash     int64
	Url         string
	Cluster     string
	Name        string
	Platform    string
	Title       string
	Description string
	Keywords    []string
	Features    []string
	HtmlContent string
	Path        string
}

type PageMetadata struct {
	Url         string   `json:"url"`
	Cluster     string   `json:"cluster"`
	Name        string   `json:"name"`
	Platform    string   `json:"platform"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Keywords    []string `json:"keywords"`
	Features    []string `json:"features"` // Kept in metadata but removed from table
}

type Frontmatter struct {
	Title    string   `yaml:"title"`
	Category string   `yaml:"category"`
	Path     string   `yaml:"path"`
	Keywords []string `yaml:"keywords"`
	Features []string `yaml:"features"`
}

// --- Hashing Functions ---

func createFullHash(category, lastPath string) string {
	category = strings.ToLower(strings.TrimSpace(category))
	lastPath = strings.ToLower(strings.TrimSpace(lastPath))
	uniqueStr := fmt.Sprintf("%s/%s", category, lastPath)
	hash := sha256.Sum256([]byte(uniqueStr))
	return hex.EncodeToString(hash[:])
}

func get8Bytes(fullHash string) int64 {
	hexPart := fullHash[:16]
	bytesVal, err := hex.DecodeString(hexPart)
	if err != nil {
		log.Fatalf("Failed to decode hex: %v", err)
	}
	return int64(binary.BigEndian.Uint64(bytesVal))
}

func hashString(s string) string {
	hash := sha256.Sum256([]byte(s))
	return hex.EncodeToString(hash[:])
}

// --- Markdown Parsing ---

func parseTldrFile(path string) (*ProcessedPage, error) {
	contentBytes, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}
	content := string(contentBytes)

	parts := regexp.MustCompile(`(?m)^---\s*$`).Split(content, 3)
	if len(parts) < 3 {
		if strings.HasPrefix(content, "---") {
			parts = regexp.MustCompile(`(?m)^---\s*$`).Split(content, 3)
			if len(parts) >= 3 && parts[0] == "" {
			} else {
				return nil, nil
			}
		} else {
			return nil, nil
		}
	}

	frontmatterRaw := parts[1]
	markdownBody := strings.TrimSpace(parts[2])

	lines := strings.Split(markdownBody, "\n")
	if len(lines) > 0 && strings.HasPrefix(strings.TrimSpace(lines[0]), "# ") {
		markdownBody = strings.Join(lines[1:], "\n")
	}
	markdownBody = strings.TrimSpace(markdownBody)

	var fm Frontmatter
	if err := yaml.Unmarshal([]byte(frontmatterRaw), &fm); err != nil {
		log.Printf("Error parsing YAML in %s: %v", filepath.Base(path), err)
		return nil, nil
	}

	title := strings.Split(fm.Title, " | ")[0]
	descriptionLines := []string{}
	
	lines = strings.Split(markdownBody, "\n")
	for i := 0; i < len(lines); i++ {
		line := strings.TrimSpace(lines[i])
		if strings.HasPrefix(line, ">") {
			cleanLine := strings.TrimSpace(strings.TrimPrefix(line, ">"))
			if !strings.HasPrefix(cleanLine, "More information:") {
				descriptionLines = append(descriptionLines, cleanLine)
			}
		}
	}
	description := strings.Join(descriptionLines, " ")

	extensions := parser.CommonExtensions | parser.AutoHeadingIDs | parser.NoEmptyLineBeforeBlock
	p := parser.NewWithExtensions(extensions)
	doc := p.Parse([]byte(markdownBody))

	htmlFlags := html.CommonFlags | html.HrefTargetBlank
	opts := html.RendererOptions{Flags: htmlFlags}
	renderer := html.NewRenderer(opts)
	htmlBytes := markdown.Render(doc, renderer)
	htmlContent := string(htmlBytes)

	cluster := filepath.Base(filepath.Dir(path))
	name := strings.TrimSuffix(filepath.Base(path), filepath.Ext(path))
	fullHash := createFullHash(cluster, name)
	urlHash := get8Bytes(fullHash)
	pathUrl := fmt.Sprintf("/freedevtools/tldr/%s/%s/", cluster, name)

	return &ProcessedPage{
		UrlHash:     urlHash,
		Url:         fmt.Sprintf("%s/%s", cluster, name),
		Cluster:     cluster,
		Name:        name,
		Platform:    fm.Category,
		Title:       title,
		Description: description,
		Keywords:    fm.Keywords,
		Features:    fm.Features,
		HtmlContent: htmlContent,
		Path:        pathUrl,
	}, nil
}

// --- Database ---

func ensureSchema(db *sql.DB) error {
	// Pages table - Simplified
	_, err := db.Exec(`
		CREATE TABLE IF NOT EXISTS pages (
			url_hash INTEGER PRIMARY KEY,
			url TEXT NOT NULL, -- Kept for reference
			html_content TEXT DEFAULT '',
			metadata TEXT DEFAULT '{}' -- JSON
		) WITHOUT ROWID;
	`)
	if err != nil {
		return err
	}

	// MainPages table - Pre-calculated lists
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS main_pages (
			hash INTEGER PRIMARY KEY,
			data TEXT DEFAULT '{}', -- JSON
			total_count INTEGER NOT NULL
		) WITHOUT ROWID;
	`)
	if err != nil {
		return err
	}

	// Overview table
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS overview (
			id INTEGER PRIMARY KEY CHECK(id = 1),
			total_count INTEGER NOT NULL
		);
	`)
	return err
}

func main() {
	start := time.Now()

	if err := os.MkdirAll(filepath.Dir(DbPath), 0755); err != nil {
		log.Fatal(err)
	}
	os.Remove(DbPath)

	db, err := sql.Open("sqlite3", DbPath)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	if err := ensureSchema(db); err != nil {
		log.Fatal(err)
	}

	// 1. Parse all files into memory
	fmt.Printf("Scanning %s...\n", DataDir)
	var allPages []*ProcessedPage
	
	err = filepath.WalkDir(DataDir, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && strings.HasSuffix(d.Name(), ".md") {
			page, err := parseTldrFile(path)
			if err != nil {
				log.Printf("Error parsing %s: %v", path, err)
				return nil
			}
			if page != nil {
				allPages = append(allPages, page)
			}
		}
		return nil
	})
	if err != nil {
		log.Fatal(err)
	}

	// 2. Insert Pages
	fmt.Println("Inserting pages...")
	tx, err := db.Begin()
	if err != nil {
		log.Fatal(err)
	}
	stmt, err := tx.Prepare("INSERT INTO pages (url_hash, url, html_content, metadata) VALUES (?, ?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	for _, p := range allPages {
		meta := PageMetadata{
			Url:         p.Url,
			Cluster:     p.Cluster,
			Name:        p.Name,
			Platform:    p.Platform,
			Title:       p.Title,
			Description: p.Description,
			Keywords:    p.Keywords,
			Features:    p.Features,
		}
		metaJson, _ := json.Marshal(meta)
		
		_, err = stmt.Exec(p.UrlHash, p.Url, p.HtmlContent, string(metaJson))
		if err != nil {
			log.Printf("Error inserting page %s: %v", p.Name, err)
		}
	}
	tx.Commit()

	// 3. Generate MainPages (Cluster Lists)
	fmt.Println("Generating cluster lists...")
	pagesByCluster := make(map[string][]*ProcessedPage)
	for _, p := range allPages {
		pagesByCluster[p.Cluster] = append(pagesByCluster[p.Cluster], p)
	}

	tx, err = db.Begin()
	if err != nil {
		log.Fatal(err)
	}
	stmt, err = tx.Prepare("INSERT INTO main_pages (hash, data, total_count) VALUES (?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}

	itemsPerPage := 30
	
	// For Index Page (List of Platforms)
	var platforms []map[string]interface{}
	
	for cluster, pages := range pagesByCluster {
		// Sort pages by name
		sort.Slice(pages, func(i, j int) bool {
			return pages[i].Name < pages[j].Name
		})

		totalCount := len(pages)
		totalPages := int(math.Ceil(float64(totalCount) / float64(itemsPerPage)))

		// Add to platforms list for index
		platforms = append(platforms, map[string]interface{}{
			"name":  cluster,
			"count": totalCount,
			"url":   fmt.Sprintf("/freedevtools/tldr/%s/", cluster),
		})

		// Generate paginated lists for this cluster
		for i := 0; i < totalPages; i++ {
			pageNum := i + 1
			startIdx := i * itemsPerPage
			endIdx := startIdx + itemsPerPage
			if endIdx > totalCount {
				endIdx = totalCount
			}

			chunk := pages[startIdx:endIdx]
			var commands []map[string]interface{}
			for _, p := range chunk {
				commands = append(commands, map[string]interface{}{
					"name":        p.Name,
					"url":         p.Path,
					"description": p.Description,
					"category":    p.Platform,
					"features":    p.Features,
				})
			}

			data := map[string]interface{}{
				"commands":    commands,
				"total":       totalCount,
				"page":        pageNum,
				"total_pages": totalPages,
			}
			dataJson, _ := json.Marshal(data)

			// Hash: cluster/page (e.g., common/1)
			hashKey := fmt.Sprintf("%s/%d", cluster, pageNum)
			hash := get8Bytes(hashString(hashKey))

			_, err = stmt.Exec(hash, string(dataJson), totalCount)
			if err != nil {
				log.Printf("Error inserting cluster page %s: %v", hashKey, err)
			}
		}
	}

	// 4. Generate MainPages (Index)
	fmt.Println("Generating index...")
	sort.Slice(platforms, func(i, j int) bool {
		return platforms[i]["name"].(string) < platforms[j]["name"].(string)
	})

	totalPlatforms := len(platforms)
	totalIndexPages := int(math.Ceil(float64(totalPlatforms) / float64(itemsPerPage)))

	for i := 0; i < totalIndexPages; i++ {
		pageNum := i + 1
		startIdx := i * itemsPerPage
		endIdx := startIdx + itemsPerPage
		if endIdx > totalPlatforms {
			endIdx = totalPlatforms
		}

		chunk := platforms[startIdx:endIdx]
		data := map[string]interface{}{
			"platforms":      chunk,
			"total":          totalPlatforms,
			"page":           pageNum,
			"total_pages":    totalIndexPages,
			"total_commands": len(allPages),
		}
		dataJson, _ := json.Marshal(data)

		// Hash: index/page (e.g., index/1)
		hashKey := fmt.Sprintf("index/%d", pageNum)
		hash := get8Bytes(hashString(hashKey))

		_, err = stmt.Exec(hash, string(dataJson), totalPlatforms)
		if err != nil {
			log.Printf("Error inserting index page %s: %v", hashKey, err)
		}
	}
	tx.Commit()

	// 5. Overview
	if _, err := db.Exec("INSERT INTO overview (id, total_count) VALUES (1, ?)", len(allPages)); err != nil {
		log.Fatal(err)
	}

	elapsed := time.Since(start)
	fmt.Printf("Finished! Processed %d pages in %s.\n", len(allPages), elapsed)
}

