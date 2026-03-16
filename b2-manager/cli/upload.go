package cli

import (
	"b2m/core"
	"b2m/model"
	"context"
	"fmt"
	"time"
)

// RunCLIUpload runs a database upload without UI components
func RunCLIUpload(dbName string) error {
	// 1. Check status to ensure we are not uploading an outdated or modified-without-bump version
	status, err := RunCLIStatus(dbName, false)
	if err == nil {
		if status == "bump_and_upload" {
			return fmt.Errorf("direct upload not allowed for '%s' because it needs a version bump. Use 'bump-and-upload' instead", dbName)
		}
		if status == "outdated_version" {
			return fmt.Errorf("direct upload not allowed for '%s' because a newer version exists on remote. Download the latest version first", dbName)
		}
	}

	// Using empty functions to keep it quiet, but print basic progress
	onProgress := func(p model.RcloneProgress) {
		pct := int64(0)
		if p.Stats.TotalBytes > 0 {
			pct = (p.Stats.Bytes * 100) / p.Stats.TotalBytes
		}
		etaStr := "-"
		if p.Stats.Eta > 0 {
			etaStr = fmt.Sprintf("%ds", p.Stats.Eta)
		}
		fmt.Printf("\rUploading... %d%% (ETA: %s)", pct, etaStr)
	}
	onStatusUpdate := func(s string) {
		fmt.Printf("\rStatus: %s\n", s)
	}

	// Use a 30-minute timeout for the whole upload flow to prevent indefinite hangs
	uploadCtx, cancel := context.WithTimeout(context.Background(), 30*time.Minute)
	defer cancel()

	// We force the upload (true) to bypass interactive safety checks that would hang a script
	err = core.PerformUpload(uploadCtx, dbName, true, onProgress, onStatusUpdate)
	fmt.Println() // Add a final newline
	return err
}
