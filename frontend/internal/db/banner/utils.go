package banner

import (
	"database/sql"
	"log"
	"path/filepath"
	"sync"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

var (
	dbInstance *sql.DB
	dbOnce     sync.Once
)

// GetDB returns a singleton database connection
func GetDB() (*sql.DB, error) {
	var err error
	dbOnce.Do(func() {
		dbPath := filepath.Join("db", "all_dbs", "banner-db.db")
		dbInstance, err = sql.Open("sqlite3", dbPath+"?mode=ro")
		if err != nil {
			log.Printf("Failed to open banner database: %v", err)
			return
		}
		// Set connection pool settings
		dbInstance.SetMaxOpenConns(1)
		dbInstance.SetMaxIdleConns(1)
		dbInstance.SetConnMaxLifetime(time.Hour)
	})
	return dbInstance, err
}

// CloseDB closes the database connection
func CloseDB() {
	if dbInstance != nil {
		dbInstance.Close()
	}
}

