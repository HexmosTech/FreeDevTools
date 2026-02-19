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
	"os"
	"strings"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

// HashURLToKey generates a hash ID from string
func HashString64(s string) int64 {
	hash := sha256.Sum256([]byte(s))
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
	if line == "" || !strings.Contains(line, " (Prod: ") {
		return nil
	}

	// Extract URL
	urlEnd := strings.Index(line, " (")
	if urlEnd == -1 {
		return nil
	}
	rawURL := line[:urlEnd]

	// Extract Prod Date
	prodStartMark := "Prod: "
	prodStart := strings.Index(line, prodStartMark)
	if prodStart == -1 {
		return nil
	}
	prodStart += len(prodStartMark)

	prodEnd := strings.Index(line[prodStart:], ",")
	if prodEnd == -1 {
		prodEnd = strings.Index(line[prodStart:], ")")
	}
	if prodEnd == -1 {
		return nil
	}
	lastmod := line[prodStart : prodStart+prodEnd]

	baseURL := "https://hexmos.com/freedevtools/svg_icons/"
	if !strings.HasPrefix(rawURL, baseURL) {
		return nil
	}

	relPath := strings.Trim(rawURL[len(baseURL):], "/")
	if relPath == "" {
		return &UpdateRecord{rawURL, "overview", lastmod, 0}
	}

	segments := strings.Split(relPath, "/")
	if len(segments) == 1 {
		// Cluster
		return &UpdateRecord{rawURL, "cluster", lastmod, HashString64(segments[0])}
	} else if len(segments) == 2 {
		// Icon
		iconURL := "/" + segments[0] + "/" + segments[1]
		return &UpdateRecord{rawURL, "icon", lastmod, HashString64(iconURL)}
	}

	return nil
}

func main() {
	dbPath := flag.String("db", "/home/lince/hexmos/fdt-templ/db/all_dbs/svg-icons-db-v5.db", "Path to SQLite database")
	logFile := flag.String("log", "", "Path to log file")
	verbose := flag.Bool("verbose", false, "Show log for each insertion")
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

	queries := []struct {
		q    string
		desc string
	}{
		{
			q: `UPDATE icon 
                SET updated_at = t.lastmod
                FROM temp_updates AS t
                WHERE icon.url_hash = t.hid AND t.tbl = 'icon'`,
			desc: "Icons",
		},
		{
			q: `UPDATE cluster 
                SET updated_at = t.lastmod
                FROM temp_updates AS t
                WHERE cluster.hash_name = t.hid AND t.tbl = 'cluster'`,
			desc: "Clusters",
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
