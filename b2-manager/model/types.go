package model

import (
	"errors"
	"fmt"
	"time"

	"github.com/jedib0t/go-pretty/v6/text"
)

// DBInfo represents static information about a database
type DBInfo struct {
	Name         string
	ExistsLocal  bool
	ExistsRemote bool
	CreatedAt    time.Time
	ModifiedAt   time.Time
}

// DBStatusInfo represents a database with its calculated status
type DBStatusInfo struct {
	DB               DBInfo
	Status           string
	StatusCode       string // Stable identifier for logic (e.g. "remote_newer")
	RemoteMetaStatus string // Raw status from remote metadata (e.g. "uploading")
	Color            text.Color
}

// RcloneProgress represents the structure of rclone's JSON stats output
type RcloneProgress struct {
	Level string `json:"level"`
	Msg   string `json:"msg"`
	Stats struct {
		Bytes          int64   `json:"bytes"`
		Checks         int     `json:"checks"`
		DeletedDirs    int     `json:"deletedDirs"`
		Deletes        int     `json:"deletes"`
		ElapsedTime    float64 `json:"elapsedTime"`
		Errors         int     `json:"errors"`
		Eta            int     `json:"eta"` // seconds
		FatalError     bool    `json:"fatalError"`
		Renames        int     `json:"renames"`
		RetryError     bool    `json:"retryError"`
		Speed          float64 `json:"speed"` // bytes/sec
		TotalBytes     int64   `json:"totalBytes"`
		TotalChecks    int     `json:"totalChecks"`
		TotalTransfers int     `json:"totalTransfers"`
		TransferTime   float64 `json:"transferTime"`
		Transfers      int     `json:"transfers"`
	} `json:"stats"`
}

// LockEntry represents a lock file on B2
type LockEntry struct {
	DBName   string
	Owner    string
	Hostname string
	Type     string // "lock"
}

// Metadata represents the synchronization state of a database
type Metadata struct {
	FileID            string      `json:"file_id"`
	Hash              string      `json:"hash"`
	Timestamp         int64       `json:"timestamp"`
	SizeBytes         int64       `json:"size_bytes"`
	Uploader          string      `json:"uploader"`
	Hostname          string      `json:"hostname"`
	Platform          string      `json:"platform"`
	ToolVersion       string      `json:"tool_version"`
	UploadDurationSec float64     `json:"upload_duration_sec"`
	Datetime          string      `json:"datetime"`
	Status            string      `json:"status"` // "success", "uploading", "cancelled"
	Events            []MetaEvent `json:"events"`
}

// MetaEvent tracks operation history
type MetaEvent struct {
	SequenceID        int     `json:"sequence_id"`
	Datetime          string  `json:"datetime"`
	Timestamp         int64   `json:"timestamp"`
	Hash              string  `json:"hash"`
	SizeBytes         int64   `json:"size_bytes"`
	Uploader          string  `json:"uploader"`
	Hostname          string  `json:"hostname"`
	Platform          string  `json:"platform"`
	ToolVersion       string  `json:"tool_version"`
	UploadDurationSec float64 `json:"upload_duration_sec"`
	Status            string  `json:"status"` // "success" or "cancelled"
}

// DBStatusDefinition defines the properties of a status
type DBStatusDefinition struct {
	Code  string // Stable code for logic
	Text  string
	Color text.Color
}

// Status Codes
const (
	StatusCodeLockedByOther     = "locked_by_other"
	StatusCodeLockedByYou       = "locked_by_you"
	StatusCodeUploading         = "uploading"
	StatusCodeNewLocal          = "new_local"
	StatusCodeUploadCancelled   = "upload_cancelled" // reused?
	StatusCodeRecievedStaleMeta = "stale_meta"       // reused?
	StatusCodeRemoteOnly        = "remote_only"
	StatusCodeNoMetadata        = "no_metadata" // reused?
	StatusCodeErrorReadLocal    = "error_read_local"
	StatusCodeUpToDate          = "up_to_date"
	StatusCodeErrorStatLocal    = "error_stat_local"
	StatusCodeLocalNewer        = "local_newer"
	StatusCodeRemoteNewer       = "remote_newer"
	StatusCodeUnknown           = "unknown"
)

// Global DBStatuses
var DBStatuses = struct {
	LockedByOther     DBStatusDefinition
	LockedByYou       DBStatusDefinition
	Uploading         DBStatusDefinition
	NewLocal          DBStatusDefinition
	UploadCancelled   DBStatusDefinition
	RecievedStaleMeta DBStatusDefinition
	RemoteOnly        DBStatusDefinition
	NoMetadata        DBStatusDefinition
	ErrorReadLocal    DBStatusDefinition
	UpToDate          DBStatusDefinition
	ErrorStatLocal    DBStatusDefinition
	LocalNewer        DBStatusDefinition
	RemoteNewer       DBStatusDefinition
	Unknown           DBStatusDefinition
}{
	LockedByOther:     DBStatusDefinition{StatusCodeLockedByOther, "%s is Uploading ⬆️", text.FgYellow},
	LockedByYou:       DBStatusDefinition{StatusCodeLockedByYou, "Ready to Upload ⬆️", text.FgGreen},
	Uploading:         DBStatusDefinition{StatusCodeUploading, "You are Uploading ⬆️", text.FgGreen},
	NewLocal:          DBStatusDefinition{StatusCodeNewLocal, "Ready To Upload ⬆️", text.FgCyan},
	UploadCancelled:   DBStatusDefinition{StatusCodeUploadCancelled, "Ready To Upload ⬆️", text.FgCyan},
	RecievedStaleMeta: DBStatusDefinition{StatusCodeRecievedStaleMeta, "Ready To Upload ⬆️", text.FgCyan},
	RemoteOnly:        DBStatusDefinition{StatusCodeRemoteOnly, "Download DB ⬇️", text.FgYellow},
	NoMetadata:        DBStatusDefinition{StatusCodeNoMetadata, "Ready To Upload ⬆️", text.FgCyan},
	ErrorReadLocal:    DBStatusDefinition{StatusCodeErrorReadLocal, "Error (Read ❌)", text.FgRed},
	UpToDate:          DBStatusDefinition{StatusCodeUpToDate, "Up to Date ✅", text.FgGreen},
	ErrorStatLocal:    DBStatusDefinition{StatusCodeErrorStatLocal, "Error (Read ❌)", text.FgRed},
	LocalNewer:        DBStatusDefinition{StatusCodeLocalNewer, "Ready To Upload ⬆️", text.FgCyan},
	RemoteNewer:       DBStatusDefinition{StatusCodeRemoteNewer, "DB Outdated Download Now 🔽", text.FgYellow},
	Unknown:           DBStatusDefinition{StatusCodeUnknown, "Error (Read ❌)", text.FgRed},
}

// ErrWarningLocalChanges is a special error indicating a warning validation state
var ErrWarningLocalChanges = fmt.Errorf("WARNING_LOCAL_CHANGES")

const (
	ActionUpload   = "upload"
	ActionDownload = "download"
)

var (
	// ErrDatabaseLocked indicates the database is locked by another user or process
	ErrDatabaseLocked = errors.New("database is locked")
)

// Config holds all application configuration
type Config struct {
	// Paths
	RootBucket      string
	LockDir         string
	VersionDir      string
	LocalVersionDir string
	LocalAnchorDir  string
	LocalB2MDir     string
	LocalDBDir      string
	MigrationsDir   string

	// Environment
	DiscordWebhookURL string

	// User Info
	CurrentUser string
	Hostname    string
	ProjectRoot string

	// Tool Info
	ToolVersion string
}

var AppConfig = Config{}
