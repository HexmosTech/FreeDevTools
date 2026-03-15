package cli

import (
	"b2m/core"
	"b2m/model"
	"context"
	"fmt"
)

// RunCLIUpload runs a database upload without UI components
func RunCLIUpload(dbName string) error {
	ctx := context.Background()

	// 1. Check status to ensure we are not uploading an outdated or modified-without-bump version
	// We use the internal RunCLIStatus to get the string status
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
		// ETA is in seconds
		etaStr := "-"
		if p.Stats.Eta > 0 {
			etaStr = fmt.Sprintf("%ds", p.Stats.Eta)
		}
		fmt.Printf("\rUploading... %d%% (ETA: %s)", pct, etaStr)
	}
	onStatusUpdate := func(s string) {
		fmt.Printf("\rStatus: %s\n", s)
	}

	// We force the upload (true) to bypass interactive safety checks that would hang a script
	err = core.PerformUpload(ctx, dbName, true, onProgress, onStatusUpdate)
	fmt.Println() // Add a final newline
	return err
}
