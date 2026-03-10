package banner

import (
	"database/sql"
	"fdt-templ/internal/config"
	"fmt"
	"sync"
	"time"

	_ "github.com/mattn/go-sqlite3"
"github.com/rs/zerolog/log"
)

var (
	dbInstance *sql.DB
	dbOnce     sync.Once
)

func NewDB(dbPath string) (*sql.DB, error) {
	conn, err := sql.Open("sqlite3", dbPath+"?mode=ro")
	if err != nil {
		return nil, fmt.Errorf("failed to open banner database: %w", err)
	}

	// Set connection pool settings
	conn.SetMaxOpenConns(1)
	conn.SetMaxIdleConns(1)
	conn.SetConnMaxLifetime(time.Hour)

	if err := conn.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping banner database: %w", err)
	}

	log.Info().Msgf("Successfully connected to Banner DB at %s", dbPath)
	return conn, nil
}

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

		dbInstance, initErr = NewDB(dbPath)
	})
	return dbInstance, initErr
}

// CloseDB closes the database connection
func CloseDB() {
	if dbInstance != nil {
		dbInstance.Close()
	}
}
