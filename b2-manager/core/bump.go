package core

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"

	"b2m/model"
)

// RunCLIBumpDBVersion handles the CLI bump-db-version command logic
func RunCLIBumpDBVersion(baseDBName string) (string, error) {
	LogInfo("Bumping DB version for base: %s", baseDBName)

	// 1. Determine the actual current DB filename from db.toml (since the user likely passed the generic name)
	// Or they might have passed the exact active name `ipm-db-v1.db`. We try to parse out the V.

	// Assume the current working database is in model.AppConfig.LocalDBDir (which UpdateForScript set to the changeset directory)
	// We scan the directory to find the DB matching the prefix, or directly parse the requested one.

	currentPath := filepath.Join(model.AppConfig.LocalDBDir, baseDBName)
	if _, err := os.Stat(currentPath); os.IsNotExist(err) {
		// Try to find the actual file if they passed a prefix like "test-db"
		files, errDir := os.ReadDir(model.AppConfig.LocalDBDir)
		foundMatch := false
		if errDir == nil {
			for _, file := range files {
				if strings.HasPrefix(file.Name(), baseDBName) && strings.HasSuffix(file.Name(), ".db") {
					baseDBName = file.Name()
					currentPath = filepath.Join(model.AppConfig.LocalDBDir, baseDBName)
					foundMatch = true
					break
				}
			}
		}
		if !foundMatch {
			return "", fmt.Errorf("database file doesn't exist in script dir to bump: %s", currentPath)
		}
	}

	// 2. Increment the version number string inside the filename
	// e.g. ipm-db-v1.db -> ipm-db-v2.db
	newDBName, err := incrementFilenameVersion(baseDBName)
	if err != nil {
		return "", fmt.Errorf("failed to parse version from filename %s: %w", baseDBName, err)
	}

	newPath := filepath.Join(model.AppConfig.LocalDBDir, newDBName)
	serverDBDir := filepath.Join(model.AppConfig.ProjectRoot, "db", "all_dbs")
	serverPath := filepath.Join(serverDBDir, newDBName)

	// 3. Copy the DB file inside the changeset staging directory with the new name
	err = copyFile(currentPath, newPath)
	if err != nil {
		return "", fmt.Errorf("failed to copy database in changeset dir: %w", err)
	}
	LogInfo("Copied to new version in changeset dir: %s", newPath)

	// 4. Copy the newly versioned DB file into the main server directory (`db/all_dbs`)
	err = copyFile(newPath, serverPath)
	if err != nil {
		return "", fmt.Errorf("failed to copy bumped db to server db dir: %w", err)
	}
	LogInfo("Copied to server db dir: %s", serverPath)

	// 5. Update the `db.toml` to point to the newly named database.
	err = updateDBToml(baseDBName, newDBName)
	if err != nil {
		return "", fmt.Errorf("failed to update db.toml: %w", err)
	}
	LogInfo("Updated db.toml with new version %s", newDBName)

	return newDBName, nil
}

func incrementFilenameVersion(filename string) (string, error) {
	// Look for -vX or _vX before the extension
	ext := filepath.Ext(filename)
	base := strings.TrimSuffix(filename, ext)

	re := regexp.MustCompile(`[-_]v?(\d+)$`)
	matches := re.FindStringSubmatchIndex(base)

	if matches == nil {
		// If no version found natively, append -v2 (assuming this was v1 implicitly)
		return fmt.Sprintf("%s-v2%s", base, ext), nil
	}

	// matches[2]:matches[3] contains the numeric part
	startIdx := matches[2]
	endIdx := matches[3]

	versionStr := base[startIdx:endIdx]
	versionNum, err := strconv.Atoi(versionStr)
	if err != nil {
		return "", err
	}

	newVersionStr := strconv.Itoa(versionNum + 1)
	newBase := base[:startIdx] + newVersionStr + base[endIdx:]

	return newBase + ext, nil
}

// copyFile is a simple utility to copy a file from src to dst.
func copyFile(src, dst string) error {
	input, err := os.ReadFile(src)
	if err != nil {
		return err
	}
	return os.WriteFile(dst, input, 0644)
}

// updateDBToml rewrites the db.toml file, replacing occurrences of the old DB name with the new one.
func updateDBToml(oldName, newName string) error {
	tomlPath := model.AppConfig.FrontendTomlPath
	if _, err := os.Stat(tomlPath); os.IsNotExist(err) {
		return fmt.Errorf("db.toml doesn't exist at %s", tomlPath)
	}

	data, err := os.ReadFile(tomlPath)
	if err != nil {
		return err
	}

	content := string(data)
	// Replace all verbatim occurrences of the old name
	newContent := strings.ReplaceAll(content, oldName, newName)

	return os.WriteFile(tomlPath, []byte(newContent), 0644)
}
