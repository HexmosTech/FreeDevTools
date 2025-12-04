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

// ... (keep structs)

// Structs matching DB schema
type Page struct {
	UrlHash     int64
	Url         string
	Cluster     string
	Name        string
	Platform    string
	Title       string
	Description string
	MoreInfoUrl string
	Keywords    string // JSON
	Features    string // JSON
	Examples    string // JSON
	RawContent  string
	HtmlContent string
	Path        string
}

type Cluster struct {
	Name        string
	HashName    string
	Count       int
	Description string
}

type Frontmatter struct {
	Title    string   `yaml:"title"`
	Category string   `yaml:"category"`
	Path     string   `yaml:"path"`
	Keywords []string `yaml:"keywords"`
	Features []string `yaml:"features"`
}

type Example struct {
	Description string `json:"description"`
	Cmd         string `json:"cmd"`
}

// --- Hashing Functions (Replicating Python logic) ---

func createFullHash(category, lastPath string) string {
	category = strings.ToLower(strings.TrimSpace(category))
	lastPath = strings.ToLower(strings.TrimSpace(lastPath))
	uniqueStr := fmt.Sprintf("%s/%s", category, lastPath)
	hash := sha256.Sum256([]byte(uniqueStr))
	return hex.EncodeToString(hash[:])
}

func get8Bytes(fullHash string) int64 {
	// Take first 16 hex chars (8 bytes)
	hexPart := fullHash[:16]
	bytesVal, err := hex.DecodeString(hexPart)
	if err != nil {
		log.Fatalf("Failed to decode hex: %v", err)
	}
	// Unpack as signed 64-bit integer (big-endian)
	return int64(binary.BigEndian.Uint64(bytesVal))
}

func hashNameToKey(name string) string {
	hash := sha256.Sum256([]byte(name))
	// Take first 8 bytes and interpret as big-endian signed 64-bit integer
	val := int64(binary.BigEndian.Uint64(hash[:8]))
	return fmt.Sprintf("%d", val)
}

// --- Markdown Parsing ---

func parseTldrFile(path string) (*Page, error) {
	contentBytes, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}
	content := string(contentBytes)

	// Split frontmatter
	parts := regexp.MustCompile(`(?m)^---\s*$`).Split(content, 3)
	if len(parts) < 3 {
		// Try to handle cases where file starts with ---
		if strings.HasPrefix(content, "---") {
			parts = regexp.MustCompile(`(?m)^---\s*$`).Split(content, 3)
			// If split results in empty first part, shift
			if len(parts) >= 3 && parts[0] == "" {
				// parts[1] is frontmatter, parts[2] is body
			} else {
				log.Printf("Skipping %s: Invalid frontmatter format", filepath.Base(path))
				return nil, nil
			}
		} else {
			log.Printf("Skipping %s: No frontmatter found", filepath.Base(path))
			return nil, nil
		}
	}

	frontmatterRaw := parts[1]
	markdownBody := strings.TrimSpace(parts[2])

	// Strip first H1 (# Title)
	lines := strings.Split(markdownBody, "\n")
	if len(lines) > 0 && strings.HasPrefix(strings.TrimSpace(lines[0]), "# ") {
		markdownBody = strings.Join(lines[1:], "\n")
	}
	markdownBody = strings.TrimSpace(markdownBody)

	// Parse Frontmatter
	var fm Frontmatter
	if err := yaml.Unmarshal([]byte(frontmatterRaw), &fm); err != nil {
		log.Printf("Error parsing YAML in %s: %v", filepath.Base(path), err)
		return nil, nil
	}

	// Clean title
	title := strings.Split(fm.Title, " | ")[0]

	// Parse Markdown Body for metadata
	descriptionLines := []string{}
	moreInfoUrl := ""
	examples := []Example{}

	// Re-split for processing examples/description (using the stripped body)
	lines = strings.Split(markdownBody, "\n")
	for i := 0; i < len(lines); i++ {
		line := strings.TrimSpace(lines[i])
		if strings.HasPrefix(line, ">") {
			cleanLine := strings.TrimSpace(strings.TrimPrefix(line, ">"))
			if strings.HasPrefix(cleanLine, "More information:") {
				re := regexp.MustCompile(`<(.*?)>`)
				match := re.FindStringSubmatch(cleanLine)
				if len(match) > 1 {
					moreInfoUrl = match[1]
				}
			} else {
				descriptionLines = append(descriptionLines, cleanLine)
			}
		} else if strings.HasPrefix(line, "- ") {
			exampleDesc := strings.TrimSpace(strings.TrimPrefix(line, "- "))
			cmd := ""
			// Look ahead
			for j := i + 1; j < len(lines); j++ {
				nextLine := strings.TrimSpace(lines[j])
				if strings.HasPrefix(nextLine, "`") && strings.HasSuffix(nextLine, "`") {
					cmd = strings.Trim(nextLine, "`")
					i = j
					break
				} else if nextLine == "" {
					continue
				} else {
					break
				}
			}
			if cmd != "" {
				examples = append(examples, Example{Description: exampleDesc, Cmd: cmd})
			}
		}
	}

	description := strings.Join(descriptionLines, " ")

	// Convert Markdown to HTML
	extensions := parser.CommonExtensions | parser.AutoHeadingIDs | parser.NoEmptyLineBeforeBlock
	p := parser.NewWithExtensions(extensions)
	doc := p.Parse([]byte(markdownBody))

	htmlFlags := html.CommonFlags | html.HrefTargetBlank
	opts := html.RendererOptions{Flags: htmlFlags}
	renderer := html.NewRenderer(opts)
	htmlBytes := markdown.Render(doc, renderer)
	htmlContent := string(htmlBytes)

	// Calculate Hash
	cluster := filepath.Base(filepath.Dir(path))
	name := strings.TrimSuffix(filepath.Base(path), filepath.Ext(path))
	fullHash := createFullHash(cluster, name)
	urlHash := get8Bytes(fullHash)

	// JSON fields
	keywordsJson, _ := json.Marshal(fm.Keywords)
	featuresJson, _ := json.Marshal(fm.Features)
	examplesJson, _ := json.Marshal(examples)

	pathUrl := fmt.Sprintf("/freedevtools/tldr/%s/%s/", cluster, name)

	return &Page{
		UrlHash:     urlHash,
		Url:         fmt.Sprintf("%s/%s", cluster, name),
		Cluster:     cluster,
		Name:        name,
		Platform:    fm.Category,
		Title:       title,
		Description: description,
		MoreInfoUrl: moreInfoUrl,
		Keywords:    string(keywordsJson),
		Features:    string(featuresJson),
		Examples:    string(examplesJson),
		RawContent:  content,
		HtmlContent: htmlContent,
		Path:        pathUrl,
	}, nil
}

// --- Database ---

func ensureSchema(db *sql.DB) error {
	// Pages table
	_, err := db.Exec(`
		CREATE TABLE IF NOT EXISTS pages (
			url_hash INTEGER PRIMARY KEY,
			url TEXT NOT NULL,
			cluster TEXT NOT NULL,
			name TEXT NOT NULL,
			platform TEXT DEFAULT '',
			title TEXT DEFAULT '',
			description TEXT DEFAULT '',
			more_info_url TEXT DEFAULT '',
			keywords TEXT DEFAULT '[]',
			features TEXT DEFAULT '[]',
			examples TEXT DEFAULT '[]',
			raw_content TEXT DEFAULT '',
			html_content TEXT DEFAULT '',
			path TEXT DEFAULT ''
		) WITHOUT ROWID;
	`)
	if err != nil {
		return err
	}

	_, err = db.Exec("CREATE INDEX IF NOT EXISTS idx_pages_cluster ON pages(cluster);")
	if err != nil {
		return err
	}

	// Cluster table
	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS cluster (
			name TEXT PRIMARY KEY,
			hash_name TEXT NOT NULL,
			count INTEGER NOT NULL,
			description TEXT DEFAULT ''
		);
	`)
	if err != nil {
		return err
	}
	_, err = db.Exec("CREATE INDEX IF NOT EXISTS idx_cluster_hash_name ON cluster(hash_name);")
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

	// Ensure output dir
	if err := os.MkdirAll(filepath.Dir(DbPath), 0755); err != nil {
		log.Fatal(err)
	}
	os.Remove(DbPath) // Start fresh

	db, err := sql.Open("sqlite3", DbPath)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Performance optimizations - Removed to match tldr_to_db.py defaults
	// if _, err := db.Exec("PRAGMA synchronous = OFF"); err != nil {
	// 	log.Fatal(err)
	// }
	// if _, err := db.Exec("PRAGMA journal_mode = WAL"); err != nil {
	// 	log.Fatal(err)
	// }

	if err := ensureSchema(db); err != nil {
		log.Fatal(err)
	}

	// Prepare Insert
	insertSQL := `
		INSERT OR REPLACE INTO pages (
			url_hash, url, cluster, name, platform, title, description, more_info_url,
			keywords, features, examples, raw_content, html_content, path
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	`
	tx, err := db.Begin()
	if err != nil {
		log.Fatal(err)
	}
	stmt, err := tx.Prepare(insertSQL)
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	// Walk Data Dir
	targetDir := DataDir
	fmt.Printf("Scanning %s...\n", targetDir)

	count := 0
	batchSize := 1000

	err = filepath.WalkDir(targetDir, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && strings.HasSuffix(d.Name(), ".md") {
			page, err := parseTldrFile(path)
			if err != nil {
				log.Printf("Error parsing %s: %v", path, err)
				return nil
			}
			if page == nil {
				return nil
			}

			_, err = stmt.Exec(
				page.UrlHash, page.Url, page.Cluster, page.Name, page.Platform,
				page.Title, page.Description, page.MoreInfoUrl, page.Keywords,
				page.Features, page.Examples, page.RawContent, page.HtmlContent, page.Path,
			)
			if err != nil {
				log.Printf("Error inserting %s: %v", page.Name, err)
				return nil
			}

			count++
			if count%batchSize == 0 {
				stmt.Close()
				if err := tx.Commit(); err != nil {
					return err
				}
				tx, err = db.Begin()
				if err != nil {
					return err
				}
				stmt, err = tx.Prepare(insertSQL)
				if err != nil {
					return err
				}
				fmt.Printf("\rProcessed %d pages...", count)
			}
		}
		return nil
	})

	if err != nil {
		log.Fatal(err)
	}

	if err := tx.Commit(); err != nil {
		log.Fatal(err)
	}

	// Populate Cluster & Overview
	fmt.Println("\nPopulating cluster and overview...")
	
	// Cluster
	if _, err := db.Exec("DELETE FROM cluster"); err != nil {
		log.Fatal(err)
	}
	rows, err := db.Query("SELECT cluster, COUNT(*) FROM pages GROUP BY cluster")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	clusterTx, err := db.Begin()
	if err != nil {
		log.Fatal(err)
	}
	clusterStmt, err := clusterTx.Prepare("INSERT INTO cluster (name, hash_name, count, description) VALUES (?, ?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer clusterStmt.Close()

	for rows.Next() {
		var name string
		var count int
		if err := rows.Scan(&name, &count); err != nil {
			log.Fatal(err)
		}
		hashName := hashNameToKey(name)
		if _, err := clusterStmt.Exec(name, hashName, count, ""); err != nil {
			log.Fatal(err)
		}
	}
	if err := clusterTx.Commit(); err != nil {
		log.Fatal(err)
	}

	// Overview
	if _, err := db.Exec("DELETE FROM overview"); err != nil {
		log.Fatal(err)
	}
	if _, err := db.Exec("INSERT INTO overview (id, total_count) SELECT 1, COUNT(*) FROM pages"); err != nil {
		log.Fatal(err)
	}

	elapsed := time.Since(start)
	fmt.Printf("Finished! Processed %d pages in %s.\n", count, elapsed)
}
