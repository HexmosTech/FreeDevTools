package core

import (
	"context"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	"b2m/model"
)

// SignalHandler manages the application lifecycle context triggered by OS signals
type SignalHandler struct {
	ctx    context.Context
	cancel context.CancelFunc
	mu     sync.Mutex
}

// NewSignalHandler creates a new signal handler
func NewSignalHandler() *SignalHandler {
	h := &SignalHandler{}
	h.Reset()
	return h
}

// Context returns the current active context
func (h *SignalHandler) Context() context.Context {
	h.mu.Lock()
	defer h.mu.Unlock()
	return h.ctx
}

// Reset creates a new context watching for signals (clearing previous cancellation)
func (h *SignalHandler) Reset() {
	h.mu.Lock()
	defer h.mu.Unlock()
	if h.cancel != nil {
		h.cancel()
	}
	h.ctx, h.cancel = signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
}

// Cancel manually cancels the current context
func (h *SignalHandler) Cancel() {
	h.mu.Lock()
	defer h.mu.Unlock()
	if h.cancel != nil {
		h.cancel()
	}
}

// CleanupOnCancel handles cleanup when an upload is cancelled
func CleanupOnCancel(dbName string, startTime time.Time) error {
	uploadDuration := time.Since(startTime).Seconds()

	LogInfo("⚠️  Upload cancelled for %s", dbName)

	// Generate metadata with "cancelled" status
	LogInfo("📝 Recording cancellation...")

	// strategy: Try to get existing remote metadata to preserve the "last valid state"
	// and only append the cancellation event.
	// If getting remote metadata fails, we fall back to generating local metadata but mark it carefully.

	var meta *model.Metadata
	var err error

	// We can't easily "fetch remote" here without potentially getting a stale lock file or blocking?
	// Actually AppendEventToMetadata does fetch remote.

	// Create a "cancelled" event payload.
	// We need a base metadata object to pass to AppendEventToMetadata.
	// If we use GenerateLocalMetadata, it sets the *top level* hash to the local file's hash.
	// This might be wrong if the upload failed.

	// However, AppendEventToMetadata logic (core/metadata.go) reads:
	// "if !exists { First upload... } else { Append new event ... }"
	// It DOES NOT overwrite the top-level fields of the EXISTING metadata if it exists,
	// it only appends the event.
	// ... WAIT. Let's look at AppendEventToMetadata in core/metadata.go again.
	// It says: "newMeta.Events = append(existingMeta.Events, newEvent)"
	// But it returns `newMeta`.
	// And then UploadMetadata uploads `meta` (which is `newMeta`).
	// So YES, it DOES overwrite the top-level fields with `newMeta`'s fields.

	// FIX: We need to use existingMeta's fields for the top-level, and only add the event.

	// 1. Generate the event info we want to record (the failed attempt)
	eventMeta, err := GenerateLocalMetadata(dbName, uploadDuration, "cancelled")
	if err != nil {
		LogError("CleanupOnCancel: Failed to generate cancellation metadata for %s: %v", dbName, err)
		return err
	}

	// 2. Fetch "base" metadata to preserve history and valid remote state.
	// We prioritize LocalAnchorDir (last known good sync) as it's available locally.
	var baseMeta *model.Metadata

	ctx := context.Background()

	// Try loading from Local Anchor (most reliable for "last known good state")
	if localAnchor, err := GetLocalVersion(dbName); err == nil && localAnchor != nil {
		LogInfo("CleanupOnCancel: Using local anchor metadata as base for %s", dbName)
		baseMeta = localAnchor
	} else {
		// Fallback: Try fetching single remote metadata
		LogInfo("CleanupOnCancel: Local anchor missing for %s, trying remote fetch...", dbName)
		remoteMeta, err := FetchSingleRemoteMetadata(ctx, dbName)
		if err == nil && remoteMeta != nil {
			LogInfo("CleanupOnCancel: Fetched remote metadata as base for %s", dbName)
			baseMeta = remoteMeta
		} else {
			LogInfo("CleanupOnCancel: No existing metadata found (new file?), starting fresh.")
		}
	}

	// 3. Construct the final metadata object
	if baseMeta != nil {
		// Use the base (remote/anchor) as the primary object to preserve Hash/Timestamp
		meta = baseMeta

		// Create the new event describing the cancellation
		newEvent := model.MetaEvent{
			SequenceID:        len(baseMeta.Events) + 1,
			Datetime:          eventMeta.Datetime,
			Timestamp:         eventMeta.Timestamp,
			Hash:              eventMeta.Hash, // The hash of the file we TRIED to upload
			SizeBytes:         eventMeta.SizeBytes,
			Uploader:          eventMeta.Uploader,
			Hostname:          eventMeta.Hostname,
			Platform:          eventMeta.Platform,
			ToolVersion:       eventMeta.ToolVersion,
			UploadDurationSec: eventMeta.UploadDurationSec,
			Status:            "cancelled",
		}
		meta.Events = append(meta.Events, newEvent)
		meta.Status = "cancelled" // Mark top-level status as cancelled to indicate last op failed
	} else {
		// No base found -> New file upload attempt failed.
		// Use the local info as the only record.
		meta = eventMeta
		// Ensure event #1 is present
		if len(meta.Events) == 0 {
			meta.Events = []model.MetaEvent{
				{
					SequenceID:        1,
					Datetime:          meta.Datetime,
					Timestamp:         meta.Timestamp,
					Hash:              meta.Hash,
					SizeBytes:         meta.SizeBytes,
					Uploader:          meta.Uploader,
					Hostname:          meta.Hostname,
					Platform:          meta.Platform,
					ToolVersion:       meta.ToolVersion,
					UploadDurationSec: meta.UploadDurationSec,
					Status:            "cancelled",
				},
			}
		}
	}

	// 4. Upload the update
	if meta != nil {
		if err := UploadMetadata(ctx, dbName, meta); err != nil {
			LogError("CleanupOnCancel: Failed to upload cancellation metadata: %v", err)
		} else {
			LogInfo("CleanupOnCancel: Cancellation recorded in metadata for %s", dbName)
		}
	}

	// Release lock with retries
	LogInfo("🔓 Releasing lock on %s... (Attempting cleanup)", dbName)
	// Cleanup runs on a NEW context or a background context usually, since the original might be cancelled.
	var lastErr error
	for i := 0; i < 3; i++ {
		if err := UnlockDatabase(context.Background(), dbName, model.AppConfig.CurrentUser, true); err == nil {
			LogInfo("✅ Lock released successfully on attempt %d", i+1)
			return nil
		} else {
			lastErr = err
			LogInfo("⚠️  Unlock attempt %d failed: %v. Retrying...", i+1, err)
			time.Sleep(1 * time.Second)
		}
	}

	LogError("❌ CRITICAL: Failed to release lock for %s after 3 attempts. Manual unlock required! Error: %v", dbName, lastErr)
	return lastErr
}
