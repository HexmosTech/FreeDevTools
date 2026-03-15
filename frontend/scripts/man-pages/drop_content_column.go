package main

import (
	"database/sql"
	"log"
	"path/filepath"
	"strings"

	man_pages_db "fdt-templ/internal/db/man_pages"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	// Get database path
	dbPath, err := man_pages_db.GetDBPath()
	if err != nil {
		log.Fatalf("Error getting DB path: %v", err)
	}
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		log.Fatalf("Failed to resolve database path: %v", err)
	}

	// Connect to database in writable mode
	connStr := absPath
	conn, err := sql.Open("sqlite3", connStr)
	if err != nil {
		log.Fatalf("Failed to open database: %v", err)
	}
	defer conn.Close()

	// Test connection
	if err := conn.Ping(); err != nil {
		log.Fatalf("Failed to ping database: %v", err)
	}

	log.Printf("Connected to database: %s", absPath)

	// Check if column exists
	var columnExists int
	err = conn.QueryRow(`
		SELECT COUNT(*) FROM pragma_table_info('man_pages') WHERE name='content'
	`).Scan(&columnExists)
	if err != nil {
		log.Fatalf("Failed to check if column exists: %v", err)
	}

	if columnExists == 0 {
		log.Println("Column 'content' does not exist. Nothing to do.")
		return
	}

	log.Println("Dropping 'content' column from man_pages table...")

	// Drop content column (SQLite 3.35.0+ supports DROP COLUMN)
	_, err = conn.Exec("ALTER TABLE man_pages DROP COLUMN content")
	if err != nil {
		if strings.Contains(err.Error(), "DROP COLUMN") {
			log.Fatalf("Your SQLite version does not support DROP COLUMN (requires 3.35.0+). Error: %v", err)
		}
		log.Fatalf("Failed to drop column: %v", err)
	}

	log.Println("✓ Successfully dropped 'content' column")
}
