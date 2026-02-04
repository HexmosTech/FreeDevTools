package mcp

import (
	"database/sql"
	"fmt"
	"path/filepath"

	db_config "fdt-templ/db/config"

	_ "github.com/mattn/go-sqlite3"
)

// DB wraps a database connection
type DB struct {
	conn *sql.DB
}

// NewDB creates a new database connection
func NewDB(dbPath string) (*DB, error) {
	connStr := dbPath + db_config.McpDBConfig
	conn, err := sql.Open("sqlite3", connStr)
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

// GetDB returns a database instance using the default path
func GetDB() (*DB, error) {
	dbPath := GetDBPath()
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, err
	}
	return NewDB(absPath)
}
