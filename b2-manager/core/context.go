package core

import (
	"context"
	"os"
	"os/signal"
	"syscall"
	"time"

	"b2m/config"
)

// Global cancellation context
var (
	globalCtx    context.Context
	globalCancel context.CancelFunc
)

// SetupCancellation sets up signal handling for graceful cancellation
func SetupCancellation() {
	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
	globalCtx = ctx
	globalCancel = cancel
}

// GetContext returns the global cancellation context
func GetContext() context.Context {
	if globalCtx == nil {
		SetupCancellation()
	}
	return globalCtx
}

// ResetContext resets the cancellation context (for after a cancellation event)
func ResetContext() {
	if globalCancel != nil {
		globalCancel()
	}
	SetupCancellation()
}

// CleanupOnCancel handles cleanup when an upload is cancelled
func CleanupOnCancel(dbName string, startTime time.Time) error {
	uploadDuration := time.Since(startTime).Seconds()

	// fmt.Printf("\n⚠️  Upload cancelled for %s\n", dbName)
	LogInfo("⚠️  Upload cancelled for %s", dbName)

	// Generate metadata with "cancelled" status
	// fmt.Println("📝 Recording cancellation...")
	LogInfo("📝 Recording cancellation...")
	meta, err := GenerateLocalMetadata(dbName, uploadDuration, "cancelled")
	if err != nil {
		// fmt.Printf("⚠️  Failed to generate cancellation metadata: %v\n", err)
		LogError("⚠️  Failed to generate cancellation metadata: %v", err)
	} else {
		// Append event
		meta, err = AppendEventToMetadata(dbName, meta)
		if err != nil {
			// fmt.Printf("⚠️  Failed to append cancellation event: %v\n", err)
			LogError("⚠️  Failed to append cancellation event: %v", err)
		} else {
			// Upload metadata
			// Use context.Background() because original context is likely cancelled
			if err := UploadMetadata(context.Background(), dbName, meta); err != nil {
				// fmt.Printf("⚠️  Failed to upload cancellation metadata: %v\n", err)
				LogError("⚠️  Failed to upload cancellation metadata: %v", err)
			} else {
				// fmt.Println("✅ Cancellation recorded in metadata")
				LogInfo("✅ Cancellation recorded in metadata")
			}
		}
	}

	// Release lock
	// fmt.Printf("🔓 Releasing lock on %s...\n", dbName)
	LogInfo("🔓 Releasing lock on %s...", dbName)
	// Cleanup runs on a NEW context or a background context usually, since the original might be cancelled.
	if err := UnlockDatabase(context.Background(), dbName, config.AppConfig.CurrentUser, true); err != nil {
		// fmt.Printf("⚠️  Failed to release lock: %v\n", err)
		LogError("⚠️  Failed to release lock: %v", err)
		return err
	}
	// fmt.Println("✅ Lock released")
	LogInfo("✅ Lock released")

	return nil
}
