package model

import "time"

// Timeouts for various operations
const (
	TimeoutShort        = 5 * time.Second
	TimeoutDefault      = 10 * time.Second
	TimeoutCommit       = 15 * time.Second
	TimeoutRcloneDelete = 30 * time.Second
	TimeoutFetchLocks   = 1 * time.Minute
	TimeoutSqlite       = 1 * time.Minute
	TimeoutLsfRclone    = 2 * time.Minute
	TimeoutTestDefault  = 20 * time.Minute
	TimeoutHash         = 4 * time.Minute
	TimeoutSync         = 5 * time.Minute
	TimeoutUpload       = 30 * time.Minute
)

// Exit codes
const (
	ExitCodeFileChanged = 1
)
