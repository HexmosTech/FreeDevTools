package main

import (
	"database/sql"
	"log"
	"os"
	"strings"

	"fdt-templ/internal/db/svg_icons"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	log.SetOutput(os.Stdout)
	log.SetFlags(0)

	dbPath, err := svg_icons.GetDBPath()
	if err != nil {
		log.Fatalf("Error getting DB path: %v", err)
	}
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		log.Fatalf("Error opening database: %v", err)
	}
	defer db.Close()

	// The 404 URL is: /freedevtools/svg_icons/divide/math-1-divide-2/linear-gradient(to
	category := "divide"
	iconName := "math-1-divide-2"

	log.Println("=== ROOT CAUSE ANALYSIS: SVG Icon 404 Error ===")
	log.Printf("404 URL: /freedevtools/svg_icons/divide/math-1-divide-2/linear-gradient(to")
	log.Println("")

	// Check if icon exists with exact name
	log.Printf("1. Checking for icon with name: '%s' in category: '%s'", iconName, category)

	// Get cluster first
	var clusterID int64
	var clusterSourceFolder string
	err = db.QueryRow("SELECT id, source_folder FROM cluster WHERE source_folder = ?", category).Scan(&clusterID, &clusterSourceFolder)
	if err == sql.ErrNoRows {
		log.Printf("   ❌ Category '%s' not found in database", category)
	} else if err != nil {
		log.Printf("   ❌ Error querying category: %v", err)
	} else {
		log.Printf("   ✓ Category found: ID=%d, source_folder='%s'", clusterID, clusterSourceFolder)
	}

	// Check for icon with exact name
	var iconID int
	var iconNameDB string
	var iconCluster string
	err = db.QueryRow("SELECT id, name, cluster FROM icon WHERE cluster = ? AND name = ? LIMIT 1", category, iconName).Scan(&iconID, &iconNameDB, &iconCluster)
	if err == sql.ErrNoRows {
		log.Printf("   ❌ Icon with exact name '%s' not found", iconName)
	} else if err != nil {
		log.Printf("   ❌ Error querying icon: %v", err)
	} else {
		log.Printf("   ✓ Icon found: ID=%d, name='%s', cluster='%s'", iconID, iconNameDB, iconCluster)
	}

	// Check for icons with similar names (containing math-1-divide-2)
	log.Println("")
	log.Printf("2. Checking for icons with names containing '%s':", iconName)
	rows, err := db.Query("SELECT id, name, cluster FROM icon WHERE name LIKE ? LIMIT 10", "%"+iconName+"%")
	if err != nil {
		log.Printf("   ❌ Error querying similar icons: %v", err)
	} else {
		defer rows.Close()
		found := false
		for rows.Next() {
			var id int
			var name, cluster string
			if err := rows.Scan(&id, &name, &cluster); err != nil {
				continue
			}
			found = true
			log.Printf("   Found: ID=%d, name='%s', cluster='%s'", id, name, cluster)

			// Check if name contains problematic characters
			if strings.Contains(name, "/") || strings.Contains(name, "linear-gradient") {
				log.Printf("      ⚠️  WARNING: Icon name contains '/' or 'linear-gradient' - this is malformed!")
				log.Printf("      ⚠️  This would create URL: /freedevtools/svg_icons/%s/%s/", cluster, name)
			}
		}
		if !found {
			log.Printf("   No icons found with similar names")
		}
	}

	// Check for icons with names that might have been truncated or corrupted
	log.Println("")
	log.Printf("3. Checking for icons with names containing 'linear-gradient':")
	rows2, err := db.Query("SELECT id, name, cluster FROM icon WHERE name LIKE ? LIMIT 10", "%linear-gradient%")
	if err != nil {
		log.Printf("   ❌ Error querying: %v", err)
	} else {
		defer rows2.Close()
		found := false
		for rows2.Next() {
			var id int
			var name, cluster string
			if err := rows2.Scan(&id, &name, &cluster); err != nil {
				continue
			}
			found = true
			log.Printf("   Found: ID=%d, name='%s', cluster='%s'", id, name, cluster)
			log.Printf("      ⚠️  WARNING: Icon name contains 'linear-gradient' - this is malformed!")
		}
		if !found {
			log.Printf("   No icons found with 'linear-gradient' in name")
		}
	}

	// Check URL construction
	log.Println("")
	log.Println("4. URL Construction Analysis:")
	log.Printf("   Expected URL format: /freedevtools/svg_icons/{category}/{iconName}/")
	log.Printf("   Expected for this icon: /freedevtools/svg_icons/divide/math-1-divide-2/")
	log.Printf("   Actual 404 URL: /freedevtools/svg_icons/divide/math-1-divide-2/linear-gradient(to")
	log.Println("")
	log.Println("   Root Cause Hypothesis:")
	log.Println("   - The icon name in the database might be stored as 'math-1-divide-2/linear-gradient(to'")
	log.Println("   - OR the URL field in IconWithMetadata might contain malformed data")
	log.Println("   - When GetIconURL() is called, it uses icon.URL if present, which might be corrupted")
	log.Println("   - The matchIcon() function expects exactly 2 path segments, but gets 3 segments")
	log.Println("   - This causes the route to not match, resulting in a 404")

	log.Println("")
	log.Println("=== SUMMARY ===")
	log.Println("The 404 is caused by a malformed URL that includes 'linear-gradient(to' as a third path segment.")
	log.Println("This suggests either:")
	log.Println("1. The icon name in the database contains '/linear-gradient(to' appended to it")
	log.Println("2. The icon.URL field contains malformed data")
	log.Println("3. A link was generated incorrectly from SVG/CSS content")
}
