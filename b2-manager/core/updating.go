package core

import (
	"context"

	"b2m/config"
)

// AcquireCustomLock acquires a lock for a database and sets its status to "updating"
// This is used for manual locking operations where the user intends to perform maintenance
func AcquireCustomLock(ctx context.Context, dbName string) error {
	LogInfo("AcquireCustomLock: Locking %s for manual update", dbName)

	// 1. Acquire Lock
	// We use "manual_update" as the intent, but the standard Lock mechanism just uses .lock extension
	// The intent ends up in the file content if we look at LockDatabase implementation
	// User requirement: "User can lock the db... This 'l' command should only create lock and update metadata with status: 'updating'"
	// We use Force=false here to respect other locks. The LockDatabase function checks validity.
	if err := LockDatabase(ctx, dbName, config.AppConfig.CurrentUser, config.AppConfig.Hostname, "manual_update", false); err != nil {
		return err
	}

	// 2. Generate and Upload Metadata with Status "updating"
	// We need to create a metadata entry that signifies "updating".
	// We can base it on the current local state or just create a minimal update.
	// "This 'l' commad should only create lock and update metadata with status: 'updating'"

	// Let's get current local metadata or generate new if missing
	meta, err := GenerateLocalMetadata(dbName, 0, "updating")
	if err != nil {
		// If gen fails (e.g. no local file), what should we do?
		// If custom lock is allowed on remote-only DB? Probably not.
		// Assume local DB exists.
		LogError("AcquireCustomLock: Failed to generate metadata: %v", err)
		// Undo lock?
		UnlockDatabase(ctx, dbName, config.AppConfig.CurrentUser, true)
		return err
	}

	// Explicitly set status to updating
	meta.Status = "updating"

	// Appending event?
	// The user request says "update metadata with status: 'updating'".
	// Typically we track history. Let's append an event.
	meta, err = AppendEventToMetadata(dbName, meta)
	if err != nil {
		LogError("AcquireCustomLock: Failed to append event: %v", err)
		UnlockDatabase(ctx, dbName, config.AppConfig.CurrentUser, true)
		return err
	}

	// Upload Metadata
	if err := UploadMetadata(ctx, dbName, meta); err != nil {
		LogError("AcquireCustomLock: Failed to upload metadata: %v", err)
		UnlockDatabase(ctx, dbName, config.AppConfig.CurrentUser, true)
		return err
	}

	LogInfo("AcquireCustomLock: Successfully locked %s and set status to 'updating'", dbName)

	return nil
}
