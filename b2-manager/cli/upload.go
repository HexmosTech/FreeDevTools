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
	err := core.PerformUpload(ctx, dbName, true, onProgress, onStatusUpdate)
	fmt.Println() // Add a final newline
	return err
}
