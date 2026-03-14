package cli

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"

	"b2m/core"
	"b2m/model"

	"github.com/pelletier/go-toml/v2"
)

// RunCLIStatus runs a status check for a specific database and prints the status natively for python
//
// Status Resolution Table:
// | Version Role  | DB Status         | Return             |
// |---------------|-------------------|--------------------|
// | New Bump      | Ready to Upload   | ready_to_upload    |
// | Latest        | Outdated          | bump_and_upload    |
// | Old Version   | Any               | outdated_version   |
// | Any           | Up To Date        | up_to_date         |
// | Any           | Ready to Upload   | unidentified    |
// | Any           | Unknown/Other     | unidentified       |
func RunCLIStatus(dbName string, useJSON bool) (string, error) {
	ctx := context.Background()

	// Truncate WAL for matching DBs before fetching status
	if err := WalCheckpointTruncate(dbName); err != nil {
		core.LogInfo("WAL truncation skipped or failed: %v", err)
	}

	// In order to get status, we fetch local DBs, Remote Metas, and Locks...
	// FetchDBStatusData logic does exactly this.
	statusData, err := core.FetchDBStatusData(ctx, nil)
	if err != nil {
		return "", fmt.Errorf("failed to fetch status data: %w", err)
	}

	// Need a generic slice of DBInfos to compute roles
	var dbInfos []model.DBInfo
	for _, info := range statusData {
		dbInfos = append(dbInfos, info.DB)
	}
	roles := calculateVersionRoles(dbInfos)
	core.LogInfo("DEBUG: calculateVersionRoles returned: %+v", roles)

	found := false
	for _, info := range statusData {
		// handle both exact match and extension-less
		baseName := strings.TrimSuffix(info.DB.Name, filepath.Ext(info.DB.Name))
		reqBaseName := strings.TrimSuffix(dbName, filepath.Ext(dbName))

		if baseName == reqBaseName || info.DB.Name == dbName {
			found = true
			isReadyToUpload := info.StatusCode == model.StatusCodeLocalNewer || info.StatusCode == model.StatusCodeNewLocal || info.StatusCode == model.StatusCodeLockedByYou
			isOutdated := info.StatusCode == model.StatusCodeRemoteNewer || info.StatusCode == model.StatusCodeRemoteOnly || info.StatusCode == model.StatusCodeErrorReadLocal || info.StatusCode == model.StatusCodeUnknown

			versionRole := roles[info.DB.Name]

			core.LogInfo("DEBUG [MATCH FOUND]: DB.Name=%s", info.DB.Name)
			core.LogInfo("DEBUG: info.StatusCode=%d", info.StatusCode)
			core.LogInfo("DEBUG: isReadyToUpload=%v", isReadyToUpload)
			core.LogInfo("DEBUG: isOutdated=%v", isOutdated)
			core.LogInfo("DEBUG: versionRole=%s", versionRole)

			var statusStr string
			if versionRole == "New Bump" && isReadyToUpload {
				statusStr = "ready_to_upload"
			} else if versionRole == "Latest" && isReadyToUpload {
				statusStr = "bump_and_upload"
			} else if versionRole == "Old Version" {
				statusStr = "outdated_version"
			} else if info.StatusCode == model.StatusCodeUpToDate {
				statusStr = "up_to_date"
			} else if isReadyToUpload {
				statusStr = "unidentified"
			} else {
				statusStr = "unidentified" // fallback for safety
			}

			if useJSON {
				resp := struct {
					Status      string `json:"status"`
					DBName      string `json:"db_name"`
					StatusCode  string `json:"status_code"`
					VersionRole string `json:"version_role"`
				}{statusStr, info.DB.Name, info.StatusCode, versionRole}
				b, _ := json.MarshalIndent(resp, "", "  ")
				return string(b), nil
			}
			return statusStr, nil
		}
	}

	if !found {
		if useJSON {
			return `{"status":"unidentified"}`, nil
		}
		return "unidentified", nil
	}
	if useJSON {
		return `{"status":"unidentified"}`, nil
	}
	return "unidentified", nil
}

// RunCLIGetLatest finds the "Latest" version of a database given its base name or current name, and prints it natively for python
func RunCLIGetLatest(dbName string, useJSON bool) error {
	ctx := context.Background()

	statusData, err := core.FetchDBStatusData(ctx, nil)
	if err != nil {
		return fmt.Errorf("failed to fetch status data: %w", err)
	}

	reqBaseName := strings.TrimSuffix(dbName, filepath.Ext(dbName))
	// if it has a version like -v2, strip it to find the true base name if possible
	re := regexp.MustCompile(`^(.*)-v(\d+)$`)
	if match := re.FindStringSubmatch(reqBaseName); match != nil {
		reqBaseName = match[1]
	}

	var dbInfos []model.DBInfo
	for _, info := range statusData {
		dbInfos = append(dbInfos, info.DB)
	}
	roles := calculateVersionRoles(dbInfos)

	for _, info := range statusData {
		baseName := strings.TrimSuffix(info.DB.Name, filepath.Ext(info.DB.Name))
		if match := re.FindStringSubmatch(baseName); match != nil {
			baseName = match[1]
		}

		if baseName == reqBaseName {
			if roles[info.DB.Name] == "Latest" {
				if useJSON {
					resp := struct {
						LatestDBName string `json:"latest_db_name"`
						BaseName     string `json:"base_name"`
					}{info.DB.Name, baseName}
					b, _ := json.MarshalIndent(resp, "", "  ")
					fmt.Println(string(b))
				} else {
					fmt.Println(info.DB.Name)
				}
				return nil
			}
		}
	}

	// Fallback to original dbName if latest not found
	if useJSON {
		resp := struct {
			LatestDBName string `json:"latest_db_name"`
			BaseName     string `json:"base_name"`
		}{dbName, reqBaseName}
		b, _ := json.MarshalIndent(resp, "", "  ")
		fmt.Println(string(b))
	} else {
		fmt.Println(dbName)
	}
	return nil
}

// RunCLIGetVersion reads db.toml to find the full filename for a given short name and prints it natively for python
func RunCLIGetVersion(shortName string, useJSON bool) error {
	tomlPath := model.AppConfig.FrontendTomlPath
	if _, err := os.Stat(tomlPath); os.IsNotExist(err) {
		return fmt.Errorf("db.toml doesn't exist at %s", tomlPath)
	}

	data, err := os.ReadFile(tomlPath)
	if err != nil {
		return fmt.Errorf("failed to read db.toml: %w", err)
	}

	// Since we want to dynamically lookup the shortName, we can unmarshal the
	// [db] block into a map instead of a strict struct to avoid the long switch statement.
	var file struct {
		DB map[string]interface{} `toml:"db"`
	}

	if err := toml.Unmarshal(data, &file); err != nil {
		return fmt.Errorf("failed to parse db.toml: %w", err)
	}

	valInterface, ok := file.DB[shortName]
	if !ok {
		return fmt.Errorf("short name '%s' not found in db.toml mapping", shortName)
	}

	val, ok := valInterface.(string)
	if !ok || val == "" {
		return fmt.Errorf("short name '%s' is empty or invalid in db.toml", shortName)
	}

	if useJSON {
		resp := struct {
			VersionDBName string `json:"version_db_name"`
			ShortName     string `json:"short_name"`
		}{val, shortName}
		b, _ := json.MarshalIndent(resp, "", "  ")
		fmt.Println(string(b))
	} else {
		fmt.Println(val)
	}
	return nil
}

func calculateVersionRoles(dbs []model.DBInfo) map[string]string {
	roles := make(map[string]string)

	re := regexp.MustCompile(`^(.*)-v(\d+)(\..*)?$`)

	type verInfo struct {
		name    string
		version int
		remote  bool
	}
	groups := make(map[string][]verInfo)

	for _, db := range dbs {
		match := re.FindStringSubmatch(db.Name)
		if match != nil {
			base := match[1]
			ver, err := strconv.Atoi(match[2])
			if err != nil {
				ver = 0
			}
			groups[base] = append(groups[base], verInfo{name: db.Name, version: ver, remote: db.ExistsRemote})
		} else {
			if db.ExistsRemote {
				roles[db.Name] = "Latest"
			} else {
				roles[db.Name] = "New Bump"
			}
		}
	}

	for _, list := range groups {
		maxRemoteVer := -1
		for _, info := range list {
			if info.remote && info.version > maxRemoteVer {
				maxRemoteVer = info.version
			}
		}

		for _, info := range list {
			if info.version == maxRemoteVer && info.remote {
				roles[info.name] = "Latest"
			} else if !info.remote && info.version > maxRemoteVer {
				roles[info.name] = "New Bump"
			} else {
				roles[info.name] = "Old Version"
			}
		}
	}

	return roles
}

// WalCheckpointTruncate attempts to run PRAGMA wal_checkpoint(TRUNCATE) on a specific database file
func WalCheckpointTruncate(dbName string) error {
	dbPath := filepath.Join(model.AppConfig.LocalDBDir, dbName)
	if _, err := os.Stat(dbPath); err != nil {
		return fmt.Errorf("database file not found at %s", dbPath)
	}

	cmd := exec.Command("sqlite3", dbPath)
	stdin, err := cmd.StdinPipe()
	if err != nil {
		return fmt.Errorf("failed to create stdin pipe: %w", err)
	}

	go func() {
		defer stdin.Close()
		stdin.Write([]byte("PRAGMA wal_checkpoint(TRUNCATE);\n.quit\n"))
	}()

	if err := cmd.Run(); err != nil {
		return fmt.Errorf("failed to execute sqlite3 WAL checkpoint: %w", err)
	}

	return nil
}
