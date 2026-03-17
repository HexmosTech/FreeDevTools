package cli

import (
	"b2m/core"
	"b2m/model"
	"context"
	"fmt"
)

// RunCLIUpload runs a database upload without UI components
func RunCLIUpload(dbName string, useJSON bool) error {
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

	// Use a 30-minute timeout for the whole upload flow to prevent indefinite hangs
	uploadCtx, cancel := context.WithTimeout(context.Background(), model.TimeoutUpload)
	defer cancel()

	// We force the upload (true) to bypass interactive safety checks that would hang a script
	err = core.PerformUpload(uploadCtx, dbName, false, nil, nil)
	return err
}
