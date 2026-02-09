package core

import (
	"fmt"

	"b2m/model"
)

// ErrWarningLocalChanges is a special error indicating a warning validation state
var ErrWarningLocalChanges = fmt.Errorf("WARNING_LOCAL_CHANGES")

// ErrWarningDatabaseUpdating indicates the database is being updated by another user
var ErrWarningDatabaseUpdating = fmt.Errorf("WARNING_DATABASE_UPDATING")

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

		// Check if locked by other and updating
		if dbInfo.StatusCode == model.StatusCodeLockedByOther {
			// We can inspect the Status text or we might need access to more details.
			// Currently dbInfo.Status is the formatted string.
			// But wait, ValidateAction only takes dbInfo.
			// core.CalculateDBStatus returns formatted string.
			// "User 1 is Updating 🔄"
			// This relies on string parsing which is brittle.
			// BETTER: ValidateAction should maybe take the raw metadata or lock info?
			// OR validation check in UI?
			// The user request says: "Also should show small warning notification suggesting to downloader that db is updating"
			// In `CalculateDBStatus`, we return `LockedByOther` and text "... is Updating ...".

			// Let's rely on string check for now as we don't want to change ValidateAction signature too much yet
			// unless we really need to.
			// Actually, let's look at `ui/operations.go`: `core.ValidateAction(selectedDB, "download")`
			// `selectedDB` is `model.DBStatusInfo`.

			// If status contains "Updating", return warning.
			// We now check dbInfo.RemoteMetaStatus which is populated from raw metadata
			// If status is "updating" or "uploading", return warning.
			if dbInfo.StatusCode == model.StatusCodeLockedByOther && (dbInfo.RemoteMetaStatus == "updating" || dbInfo.RemoteMetaStatus == "uploading") {
				return ErrWarningDatabaseUpdating
			}
		}
	}
	return nil
}
