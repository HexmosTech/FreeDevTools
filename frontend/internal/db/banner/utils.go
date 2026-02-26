package banner

import (
	"database/sql"
	"fdt-templ/internal/config"
	"fmt"
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
	var initErr error
	dbOnce.Do(func() {
		// Ensure config is loaded
		if e := config.LoadDBToml(); e != nil {
			initErr = fmt.Errorf("failed to load db.toml for Banner DB: %w", e)
			return
		}
		dbPath := config.DBConfig.BannerDB
		if dbPath == "" {
			initErr = fmt.Errorf("Banner DB path is empty in db.toml")
			return
		}

		dbInstance, initErr = sql.Open("sqlite3", dbPath+"?mode=ro")
		if initErr != nil {
			initErr = fmt.Errorf("failed to open banner database: %w", initErr)
			return
		}
		// Set connection pool settings
		dbInstance.SetMaxOpenConns(1)
		dbInstance.SetMaxIdleConns(1)
		dbInstance.SetConnMaxLifetime(time.Hour)
	})
	return dbInstance, initErr
}

// CloseDB closes the database connection
func CloseDB() {
	if dbInstance != nil {
		dbInstance.Close()
	}
}
