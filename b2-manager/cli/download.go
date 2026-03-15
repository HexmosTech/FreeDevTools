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
