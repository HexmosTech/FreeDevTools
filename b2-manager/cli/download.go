package cli

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"b2m/config"
	"b2m/core"
	"b2m/model"
)

// RunCLIDownload runs a database download without UI components
func RunCLIDownload(dbName string, useJSON bool) error {
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

	core.LogInfo("db.toml downloaded to %s", localPath)
	return nil
}

// RunCLIDownloadLatestDB identifies the latest DB version from B2 based on db.toml short name,
// downloads it into the changeset script's directory, and returns (dbName, dbPath, error).
func RunCLIDownloadLatestDB(shortName, changesetScript string, useJSON bool) (string, string, error) {
	ctx := context.Background()

	// 1. Identify what test short name preset in local db.toml
	dbName, err := config.GetDBNameFromToml(shortName)
	if err != nil {
		return "", "", err
	}

	// 2. Status check based on this in db/all_dbs (implicit since we haven't overwritten LocalDBDir yet)
	statusData, err := core.FetchDBStatusData(ctx, nil)
	if err != nil {
		return dbName, "", fmt.Errorf("failed to fetch status data: %w", err)
	}

	// 3. Identify latest db based on CLI status function logic
	reqBaseName := strings.TrimSuffix(dbName, filepath.Ext(dbName))
	re := regexp.MustCompile(`^(.*)-v(\d+)$`)
	if match := re.FindStringSubmatch(reqBaseName); match != nil {
		reqBaseName = match[1]
	}

	var dbInfos []model.DBInfo
	for _, info := range statusData {
		dbInfos = append(dbInfos, info.DB)
	}
	roles := calculateVersionRoles(dbInfos)

	latestDBName := dbName
	for _, info := range statusData {
		baseName := strings.TrimSuffix(info.DB.Name, filepath.Ext(info.DB.Name))
		if match := re.FindStringSubmatch(baseName); match != nil {
			baseName = match[1]
		}
		if baseName == reqBaseName && roles[info.DB.Name] == "Latest" {
			latestDBName = info.DB.Name
			break
		}
	}

	// 4. Download latest db
	// We want to download it into the script's directory, NOT db/all_dbs and NOT backup/.
	// Strip .py if the user passed it with .py
	scriptNameClean := strings.TrimSuffix(changesetScript, ".py")

	var specificDestLocation string
	if scriptNameClean != "" {
		specificDestLocation = filepath.Join(model.AppConfig.Frontend.Changeset.Dir, "dbs", scriptNameClean)
		if err := os.MkdirAll(specificDestLocation, 0755); err != nil {
			return latestDBName, "", fmt.Errorf("failed to create target directory: %w", err)
		}
	}

	if err := core.DownloadDatabase(ctx, latestDBName, true, nil, specificDestLocation); err != nil {
		return latestDBName, "", fmt.Errorf("failed to download latest for %s: %w", latestDBName, err)
	}

	// Calculate returned db_path
	dbPath := ""
	if latestDBName != "" {
		targetDir := model.AppConfig.Frontend.LocalDB
		if specificDestLocation != "" {
			targetDir = specificDestLocation
		}

		relDir, err := filepath.Rel(model.AppConfig.ProjectRoot, targetDir)
		if err == nil {
			// Ensure it starts with a slash
			dbPath = "/" + filepath.Join(relDir, latestDBName)
		} else {
			dbPath = filepath.Join(targetDir, latestDBName)
		}
	}

	return latestDBName, dbPath, nil
}
