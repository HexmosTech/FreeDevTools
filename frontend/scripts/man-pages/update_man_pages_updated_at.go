package main

import (
	"bufio"
	"context"
	"crypto/sha256"
	"database/sql"
	"encoding/binary"
	"flag"
	"fmt"
	"log"
	"net/url"
	"os"
	"strings"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

// HashURLToKey generates a hash ID from mainCategory, subCategory, and slug
// Matches the project's internal/db/man_pages/utils.go and Python version
func HashURLToKey(mainCategory, subCategory, slug string) int64 {
	combined := mainCategory + subCategory + slug
	hash := sha256.Sum256([]byte(combined))
	// Take first 8 bytes and convert to int64 (big-endian)
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

type UpdateRecord struct {
	URL     string
	Tbl     string
	LastMod string
	Hid     int64
}

func parseLine(line string) *UpdateRecord {
	line = strings.TrimSpace(line)
	if line == "" {
		return nil
	}
	parts := strings.Split(line, "|")
	if len(parts) < 3 {
		return nil
	}
	rawURL, lastmod := parts[0], parts[2]

	prefix := "https://hexmos.com/freedevtools/man-pages/"
	if !strings.HasPrefix(rawURL, prefix) {
		return nil
	}

	relPath := strings.Trim(rawURL[len(prefix):], "/")
	if relPath == "" {
		return &UpdateRecord{rawURL, "overview", lastmod, 0}
	}

	pathSegments := strings.Split(relPath, "/")
	for i, p := range pathSegments {
		decoded, err := url.PathUnescape(p)
		if err == nil {
			pathSegments[i] = decoded
		}
	}

	switch len(pathSegments) {
	case 1:
		return &UpdateRecord{rawURL, "category", lastmod, HashURLToKey(pathSegments[0], "", "")}
	case 2:
		if isDigit(pathSegments[1]) {
			return nil
		}
		return &UpdateRecord{rawURL, "sub_category", lastmod, HashURLToKey(pathSegments[0], pathSegments[1], "")}
	case 3:
		if isDigit(pathSegments[2]) {
			return nil
		}
		return &UpdateRecord{rawURL, "man_pages", lastmod, HashURLToKey(pathSegments[0], pathSegments[1], pathSegments[2])}
	}

	return nil
}

func isDigit(s string) bool {
	for _, c := range s {
		if c < '0' || c > '9' {
			return false
		}
	}
	return s != ""
}

func main() {
	dbPath := flag.String("db", "/home/lince/hexmos/fdt-templ/db/all_dbs/man-pages-db-v5.db", "Path to SQLite database")
	logFile := flag.String("log", "", "Path to log file")
	verbose := flag.Bool("verbose", true, "Show log for each insertion")
	flag.Parse()

	if *logFile == "" {
		log.Fatal("Log file path is required. Use -log <path>")
	}

	startTime := time.Now()

	fmt.Printf("Opening DB: %s\n", *dbPath)
	db, err := sql.Open("sqlite3", *dbPath)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// CRITICAL: Force single connection to preserve TEMP tables across transactions
	db.SetMaxOpenConns(1)
	ctx := context.Background()
	conn, err := db.Conn(ctx)
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	// Initial setup
	_, _ = conn.ExecContext(ctx, "PRAGMA journal_mode=WAL")
	_, _ = conn.ExecContext(ctx, "PRAGMA synchronous=OFF")
	_, _ = conn.ExecContext(ctx, "PRAGMA cache_size = 100000")
	_, _ = conn.ExecContext(ctx, "PRAGMA temp_store = MEMORY")
	_, _ = conn.ExecContext(ctx, "PRAGMA busy_timeout = 30000")

	// Ensure columns exist
	tables := []struct {
		name string
		col  string
	}{
		{"man_pages", "updated_at"},
		{"category", "updated_at"},
		{"sub_category", "updated_at"},
		{"overview", "last_updated_at"},
	}
	for _, t := range tables {
		query := fmt.Sprintf("ALTER TABLE %s ADD COLUMN %s TEXT DEFAULT ''", t.name, t.col)
		_, _ = conn.ExecContext(ctx, query)
	}

	fmt.Printf("Reading and parsing log file: %s\n", *logFile)
	file, err := os.Open(*logFile)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	// Create Temp Table
	_, err = conn.ExecContext(ctx, "CREATE TEMP TABLE temp_updates (tbl TEXT, lastmod TEXT, hid INTEGER)")
	if err != nil {
		log.Fatal(err)
	}

	tx, err := conn.BeginTx(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	stmt, err := tx.PrepareContext(ctx, "INSERT INTO temp_updates VALUES (?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	scanner := bufio.NewScanner(file)
	count := 0
	for scanner.Scan() {
		record := parseLine(scanner.Text())
		if record != nil {
			_, err = stmt.ExecContext(ctx, record.Tbl, record.LastMod, record.Hid)
			if err != nil {
				log.Fatal(err)
			}
			if *verbose {
				fmt.Printf("[%d] Staging update for: %s (table: %s, hid: %d)\n", count+1, record.URL, record.Tbl, record.Hid)
			}
			count++
		}
	}
	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	err = tx.Commit()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Inserted %d records into temp table.\n", count)

	_, err = conn.ExecContext(ctx, "CREATE INDEX temp_hid_idx ON temp_updates(hid, tbl)")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Executing bulk joining updates...")

	txUpdates, err := conn.BeginTx(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	// Bulk updates using UPDATE ... FROM (SQLite 3.33.0+)
	queries := []struct {
		q    string
		desc string
	}{
		{
			q: `UPDATE man_pages 
                SET updated_at = t.lastmod
                FROM temp_updates AS t
                WHERE man_pages.hash_id = t.hid AND t.tbl = 'man_pages'`,
			desc: "Man pages",
		},
		{
			q: `UPDATE category 
                SET updated_at = t.lastmod
                FROM temp_updates AS t
                WHERE category.hash_id = t.hid AND t.tbl = 'category'`,
			desc: "Categories",
		},
		{
			q: `UPDATE sub_category 
                SET updated_at = t.lastmod
                FROM temp_updates AS t
                WHERE sub_category.hash_id = t.hid AND t.tbl = 'sub_category'`,
			desc: "Sub-categories",
		},
		{
			q: `UPDATE overview 
                SET last_updated_at = (SELECT lastmod FROM temp_updates WHERE tbl = 'overview')
                WHERE id = 1`,
			desc: "Overview",
		},
	}

	for _, q := range queries {
		fmt.Printf("Updating %s...\n", q.desc)
		res, err := txUpdates.ExecContext(ctx, q.q)
		if err != nil {
			fmt.Printf("Error updating %s: %v\n", q.desc, err)
			continue
		}
		rows, _ := res.RowsAffected()
		fmt.Printf("%s updated: %d rows\n", q.desc, rows)
	}

	err = txUpdates.Commit()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Successfully updated database in %v.\n", time.Since(startTime))
}
