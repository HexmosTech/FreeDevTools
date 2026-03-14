package cli

import (
	"context"
	"fmt"
	"os"
	"path/filepath"

	"b2m/core"
	"b2m/model"
)

// RunCLIDownload runs a database download without UI components
func RunCLIDownload(dbName string) error {
	ctx := context.Background()
	return core.DownloadDatabase(ctx, dbName, true, nil)
}

// RunCLIFetchDBToml downloads db.toml from backblaze
func RunCLIFetchDBToml() error {
	ctx := context.Background()
	localPath := model.AppConfig.FrontendTomlPath
	remotePath := model.AppConfig.RootBucket + filepath.Base(localPath)

	if err := os.MkdirAll(filepath.Dir(localPath), 0755); err != nil {
		return fmt.Errorf("failed to create directory for db.toml: %w", err)
	}

	// Use RcloneCopy to pull specific file to localPath
	description := "Fetching db.toml"
	err := core.RcloneCopy(ctx, "copyto", remotePath, localPath, description, true, nil)
	if err != nil {
		return fmt.Errorf("failed to fetch db.toml: %w", err)
	}

	fmt.Printf("db.toml downloaded to %s\n", localPath)
	return nil
}

// RunCLIDownloadLatestDB checks the status of the database and downloads the latest version if outdated.
// It loops until the database is up_to_date or ready_to_upload.
func RunCLIDownloadLatestDB(dbName string) error {
	for {
		statusStr, err := RunCLIStatus(dbName, false)
		if err != nil {
			return fmt.Errorf("failed to get status for %s: %w", dbName, err)
		}

		if statusStr == "up_to_date" || statusStr == "ready_to_upload" || statusStr == "bump_and_upload" {
			core.LogInfo("Database %s is %s. Continuing to update stage.", dbName, statusStr)
			// Print for Python
			fmt.Printf("Database %s is %s. Continuing to update stage.\n", dbName, statusStr)
			break
		} else if statusStr == "outdated_db" || statusStr == "outdated_version" {
			core.LogInfo("Database %s is outdated (%s). Downloading latest version...", dbName, statusStr)
			fmt.Printf("Database %s is outdated. Downloading latest version...\n", dbName)

			if err := RunCLIDownload(dbName); err != nil {
				return fmt.Errorf("failed to download latest for %s: %w", dbName, err)
			}
		} else {
			core.LogInfo("Warning: Unexpected status '%s' for %s.", statusStr, dbName)
			fmt.Printf("Warning: Unexpected status '%s' for %s.\n", statusStr, dbName)
			break
		}
	}
	return nil
}
