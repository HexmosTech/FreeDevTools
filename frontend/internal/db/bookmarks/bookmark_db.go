package bookmarks

import (
	"database/sql"
	"fmt"
	"os"

	"fdt-templ/internal/config"

	_ "github.com/lib/pq"
)

// DB wraps a database connection
type DB struct {
	conn *sql.DB
}

// GetDB returns a database instance using PostgreSQL connection
func GetDB() (*DB, error) {
	cfg := config.GetConfig()
	dbConfig := cfg.FdtPgDB

	// Validate required fields
	if dbConfig.Host == "" {
		return nil, fmt.Errorf("fdt_pg_db host is not configured")
	}
	if dbConfig.User == "" {
		dbConfig.User = "freedevtools_user"
	}
	// Allow password to be set via environment variable as fallback
	if dbConfig.Password == "" {
		dbConfig.Password = os.Getenv("FREEDEVTOOLS_USER_PASSWORD")
	}
	if dbConfig.Password == "" {
		return nil, fmt.Errorf("fdt_pg_db password is not configured (set in TOML or FREEDEVTOOLS_USER_PASSWORD env var)")
	}
	if dbConfig.DBName == "" {
		dbConfig.DBName = "freedevtools"
	}
	if dbConfig.Port == "" {
		dbConfig.Port = "5432"
	}

	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		dbConfig.Host, dbConfig.Port, dbConfig.User, dbConfig.Password, dbConfig.DBName)

	conn, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	conn.SetMaxOpenConns(25)
	conn.SetMaxIdleConns(25)
	conn.SetConnMaxLifetime(0)

	if err := conn.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	return &DB{conn: conn}, nil
}

// Close closes the database connection
func (db *DB) Close() error {
	return db.conn.Close()
}

