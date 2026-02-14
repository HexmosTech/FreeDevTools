package core

import (
	"fmt"

	"b2m/model"
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
			return model.ErrWarningLocalChanges
		}

		// Check if locked by other and updating
		if dbInfo.StatusCode == model.StatusCodeLockedByOther {
			// We can inspect the Status text or we might need access to more details.
			// Currently dbInfo.Status is the formatted string.
			// But wait, ValidateAction only takes dbInfo.
			// core.CalculateDBStatus returns formatted string.
			// "User 1 is Updating 🔄"
			// We now check dbInfo.RemoteMetaStatus which is populated from raw metadata
			// If status is "updating" or "uploading", return warning.
			if dbInfo.StatusCode == model.StatusCodeLockedByOther && (dbInfo.RemoteMetaStatus == "updating" || dbInfo.RemoteMetaStatus == "uploading") {
				return model.ErrWarningDatabaseUpdating
			}
		}
	}
	return nil
}
