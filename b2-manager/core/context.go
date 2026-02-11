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
	meta, err := GenerateLocalMetadata(dbName, uploadDuration, "cancelled")
	if err != nil {
		LogError("⚠️  Failed to generate cancellation metadata: %v", err)
	} else {
		// Append event
		meta, err = AppendEventToMetadata(context.Background(), dbName, meta)
		if err != nil {
			LogError("⚠️  Failed to append cancellation event: %v", err)
		} else {
			// Upload metadata
			// Use context.Background() because original context is likely cancelled
			if err := UploadMetadata(context.Background(), dbName, meta); err != nil {
				LogError("⚠️  Failed to upload cancellation metadata: %v", err)
			} else {
				LogInfo("✅ Cancellation recorded in metadata")
			}
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
