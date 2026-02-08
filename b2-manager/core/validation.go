package core

import (
	"fmt"

	"b2m/model"
)

// ErrWarningLocalChanges is a special error indicating a warning validation state
var ErrWarningLocalChanges = fmt.Errorf("WARNING_LOCAL_CHANGES")

const (
	ActionUpload   = "upload"
	ActionDownload = "download"
)

// ValidateAction checks if an action (upload/download) is allowed given the DB status.
func ValidateAction(dbInfo model.DBStatusInfo, action string) error {
	switch action {
	case "upload":
		if dbInfo.StatusCode == model.StatusCodeRemoteNewer {
			return fmt.Errorf("CONFLICT: Remote is newer. Please download first.")
		}
		if dbInfo.StatusCode == model.StatusCodeLockedByOther {
			return fmt.Errorf("LOCKED: Database is locked by another user.")
		}
		if dbInfo.StatusCode == model.StatusCodeRemoteOnly {
			return fmt.Errorf("MISSING: Database does not exist locally.")
		}

	case "download":
		if dbInfo.StatusCode == model.StatusCodeLocalNewer || dbInfo.StatusCode == model.StatusCodeNewLocal {
			// If we have local changes (or are new local), downloading will overwrite them.
			return ErrWarningLocalChanges
		}
	}
	return nil
}
