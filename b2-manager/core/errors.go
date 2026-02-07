package core

import "errors"

var (
	// ErrDatabaseLocked indicates the database is locked by another user or process
	ErrDatabaseLocked = errors.New("database is locked")
)
