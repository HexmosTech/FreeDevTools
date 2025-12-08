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
	Title       string
	Description string
	HtmlContent string
	Metadata    string // JSON (keywords, features)
}

type MainPage struct {
	Hash       int64
	Data       string // JSON
	TotalCount int
	Url        string
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
	Keywords []string `json:"keywords"`
	Features []string `json:"features"`
}

type Frontmatter struct {
	Title       string   `yaml:"title"`
	Description string   `yaml:"description"`
	Category    string   `yaml:"category"`
	Path        string   `yaml:"path"`
	Keywords    []string `yaml:"keywords"`
	Features    []string `yaml:"features"`
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

	title := fm.Title
	description := fm.Description

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
	pathUrl := fm.Path
	if pathUrl == "" {
		pathUrl = fmt.Sprintf("/freedevtools/tldr/%s/%s/", cluster, name)
	}
	if !strings.HasSuffix(pathUrl, "/") {
		pathUrl += "/"
	}

	return &ProcessedPage{
		UrlHash:     urlHash,
		Url:         pathUrl,
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
	// Drop tables if they exist to force schema update
	if _, err := db.Exec("DROP TABLE IF EXISTS pages"); err != nil {
		return err
	}
	if _, err := db.Exec("DROP TABLE IF EXISTS cluster"); err != nil {
		return err
	}
	if _, err := db.Exec("DROP TABLE IF EXISTS overview"); err != nil {
		return err
	}

	// Pages table - Simplified
	fmt.Println("Creating pages table...")
	_, err := db.Exec(`
		CREATE TABLE pages (
			url_hash INTEGER PRIMARY KEY,
			url TEXT NOT NULL, -- Kept for reference
			cluster_hash INTEGER NOT NULL,
			title TEXT DEFAULT '',
			description TEXT DEFAULT '',
			html_content TEXT DEFAULT '',
			metadata TEXT DEFAULT '{}' -- JSON (keywords, features)
		) WITHOUT ROWID;
	`)
	if err != nil {
		return fmt.Errorf("failed to create pages table: %w", err)
	}

	// Cluster table - Cluster Metadata (similar to emojis category)
	fmt.Println("Creating cluster table...")
	_, err = db.Exec(`
		CREATE TABLE cluster (
			hash INTEGER PRIMARY KEY,
			name TEXT NOT NULL,
			count INTEGER NOT NULL,
			preview_commands_json TEXT DEFAULT '[]' -- JSON list of preview commands
		) WITHOUT ROWID;
	`)
	if err != nil {
		return fmt.Errorf("failed to create cluster table: %w", err)
	}

	// Overview table
	fmt.Println("Creating overview table...")
	_, err = db.Exec(`
		CREATE TABLE overview (
			id INTEGER PRIMARY KEY CHECK(id = 1),
			total_count INTEGER NOT NULL,
			total_clusters INTEGER NOT NULL DEFAULT 0,
			total_pages INTEGER NOT NULL DEFAULT 0
		);
	`)
	if err != nil {
		return fmt.Errorf("failed to create overview table: %w", err)
	}
	return nil
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
	var allUrls []string

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
	stmt, err := tx.Prepare("INSERT INTO pages (url_hash, url, cluster_hash, title, description, html_content, metadata) VALUES (?, ?, ?, ?, ?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	for _, p := range allPages {
		meta := PageMetadata{
			Keywords: p.Keywords,
			Features: p.Features,
		}
		metaJson, _ := json.Marshal(meta)

		// Calculate cluster hash
		clusterHash := get8Bytes(hashString(p.Cluster))

		_, err = stmt.Exec(p.UrlHash, p.Url, clusterHash, p.Title, p.Description, p.HtmlContent, string(metaJson))
		if err != nil {
			log.Printf("Error inserting page %s: %v", p.Name, err)
		}
		allUrls = append(allUrls, p.Url)
	}
	tx.Commit()

	// 3. Generate Cluster (Cluster Metadata)
	fmt.Println("Generating cluster metadata...")
	pagesByCluster := make(map[string][]*ProcessedPage)
	for _, p := range allPages {
		pagesByCluster[p.Cluster] = append(pagesByCluster[p.Cluster], p)
	}

	tx, err = db.Begin()
	if err != nil {
		log.Fatal(err)
	}
	stmt, err = tx.Prepare("INSERT INTO cluster (hash, name, count, preview_commands_json) VALUES (?, ?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}

	for cluster, pages := range pagesByCluster {
		// Sort pages by name
		sort.Slice(pages, func(i, j int) bool {
			return pages[i].Name < pages[j].Name
		})

		totalCount := len(pages)

		// Get top 5 commands for preview
		var commandPreviews []map[string]string
		previewCount := 5
		if len(pages) < previewCount {
			previewCount = len(pages)
		}
		for k := 0; k < previewCount; k++ {
			commandPreviews = append(commandPreviews, map[string]string{
				"name": pages[k].Name,
				"url":  fmt.Sprintf("/freedevtools/tldr/%s/%s/", cluster, pages[k].Name),
			})
		}
		previewJson, _ := json.Marshal(commandPreviews)

		// Hash: cluster (e.g., common)
		hash := get8Bytes(hashString(cluster))

		_, err = stmt.Exec(hash, cluster, totalCount, string(previewJson))
		if err != nil {
			log.Printf("Error inserting cluster %s: %v", cluster, err)
		}
	}
	tx.Commit()

	// 4. Overview
	totalClusters := len(pagesByCluster)
	totalPages := len(allPages)
	if _, err := db.Exec("INSERT INTO overview (id, total_count, total_clusters, total_pages) VALUES (1, ?, ?, ?)", totalPages, totalClusters, totalPages); err != nil {
		log.Fatal(err)
	}

	elapsed := time.Since(start)
	fmt.Printf("Finished! Processed %d pages and %d URLs in %s.\n", len(allPages), len(allUrls), elapsed)
}
