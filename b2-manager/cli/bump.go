package cli

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"time"

	"b2m/core"
	"b2m/model"
)

// RunCLIBumpDBVersion handles the CLI bump-db-version command logic
func RunCLIBumpDBVersion(baseDBName string) (string, error) {
	core.LogInfo("Bumping DB version for base: %s", baseDBName)

	// 1. Determine the actual current DB filename from db.toml (since the user likely passed the generic name)
	// Or they might have passed the exact active name `ipm-db-v1.db`. We try to parse out the V.

	// Assume the current working database is in model.AppConfig.Frontend.LocalDB (which UpdateForScript set to the changeset directory)
	// We scan the directory to find the DB matching the prefix, or directly parse the requested one.

	currentPath := filepath.Join(model.AppConfig.Frontend.LocalDB, baseDBName)
	if _, err := os.Stat(currentPath); os.IsNotExist(err) {
		// Try to find the actual file if they passed a prefix like "test-db"
		files, errDir := os.ReadDir(model.AppConfig.Frontend.LocalDB)
		foundMatch := false
		if errDir == nil {
			for _, file := range files {
				if strings.HasPrefix(file.Name(), baseDBName) && strings.HasSuffix(file.Name(), ".db") {
					baseDBName = file.Name()
					currentPath = filepath.Join(model.AppConfig.Frontend.LocalDB, baseDBName)
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

	newPath := filepath.Join(model.AppConfig.Frontend.LocalDB, newDBName)
	serverDBDir := filepath.Join(model.AppConfig.ProjectRoot, "db", "all_dbs")
	serverPath := filepath.Join(serverDBDir, newDBName)

	// 3. Copy the DB file inside the changeset staging directory with the new name
	err = copyFile(currentPath, newPath)
	if err != nil {
		return "", fmt.Errorf("failed to copy database in changeset dir: %w", err)
	}
	core.LogInfo("Copied to new version in changeset dir: %s", newPath)

	// 4. Copy the newly versioned DB file into the main server directory (`db/all_dbs`)
	err = copyFile(newPath, serverPath)
	if err != nil {
		return "", fmt.Errorf("failed to copy bumped db to server db dir: %w", err)
	}
	core.LogInfo("Copied to server db dir: %s", serverPath)

	// 5. Update the `db.toml` to point to the newly named database.
	err = updateDBToml(baseDBName, newDBName)
	if err != nil {
		return "", fmt.Errorf("failed to update db.toml: %w", err)
	}
	core.LogInfo("Updated db.toml with new version %s", newDBName)

	return newDBName, nil
}

// RunCLIBumpAndUpload handles the combined bump and upload logic
func RunCLIBumpAndUpload(dbName string, useJSON bool) (string, error) {
	// 1. Bump version
	newDBName, err := RunCLIBumpDBVersion(dbName)
	if err != nil {
		return "", fmt.Errorf("failed to bump db version: %w", err)
	}

	// 2. Upload new version
	if err := RunCLIUpload(newDBName); err != nil {
		return newDBName, fmt.Errorf("failed to upload bumped db: %w", err)
	}

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

	// Since we might be given oldName as "ipm-db-v8.db", but db.toml contains "ipm-db-v6.db"
	// we want to find the true original mapping by scanning for the base name.
	ext := filepath.Ext(oldName)
	baseName := strings.TrimSuffix(oldName, ext)

	// Strip out the version number to find the base identifier string
	reVersioned := regexp.MustCompile(`^(.*?)([-_]v\d+)?$`)
	match := reVersioned.FindStringSubmatch(baseName)
	var trueBaseName string
	if match != nil {
		trueBaseName = match[1]
	} else {
		trueBaseName = baseName
	}

	// Escape baseName for use in regex
	escapedBase := regexp.QuoteMeta(trueBaseName)

	// Search for `<base>[-_]v<num><ext>` or `<base><ext>` anywhere
	reReplace := regexp.MustCompile(escapedBase + `([-_]v\d+)?` + regexp.QuoteMeta(ext))

	// Verify if what we replace exists
	if !reReplace.MatchString(content) {
		core.LogInfo("Warning: base name %s not found in db.toml to replace", trueBaseName)
		return nil
	}

	newContent := reReplace.ReplaceAllString(content, newName)
	if err := os.WriteFile(tomlPath, []byte(newContent), 0644); err != nil {
		return err
	}

	if err := commitAndPushDBToml(tomlPath, newName); err != nil {
		return fmt.Errorf("failed to commit and push db.toml: %w", err)
	}

	return nil
}

// commitAndPushDBToml adds, commits, and pushes db.toml to origin main
func commitAndPushDBToml(tomlPath, newName string) error {
	dir := filepath.Dir(tomlPath)

	// Check if we are in a git repo before trying
	if _, err := exec.LookPath("git"); err != nil {
		return nil
	}

	ctxAdd, cancelAdd := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancelAdd()
	cmdAdd := exec.CommandContext(ctxAdd, "git", "add", filepath.Base(tomlPath))
	cmdAdd.Dir = dir
	_ = cmdAdd.Run() // Ignore errors if not a git repo or timeout

	commitMsg := fmt.Sprintf("chore: bump DB version to %s in db.toml", newName)
	ctxCommit, cancelCommit := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancelCommit()
	cmdCommit := exec.CommandContext(ctxCommit, "git", "commit", "-m", commitMsg)
	cmdCommit.Dir = dir
	commitOut, err := cmdCommit.CombinedOutput()
	if err != nil {
		outStr := string(commitOut)
		if strings.Contains(outStr, "interactive environment detected") || strings.Contains(outStr, "no-op") {
			return fmt.Errorf("git commit skipped: %s", strings.TrimSpace(outStr))
		}
		// If it's just "nothing to commit", we can ignore it
		if strings.Contains(outStr, "nothing to commit") {
			return nil
		}
		if ctxCommit.Err() == context.DeadlineExceeded {
			return fmt.Errorf("git commit timed out (hook hang?)")
		}
		return fmt.Errorf("git commit failed: %v\nOutput: %s", err, outStr)
	}

	// For push, we use a timeout or just skip if it might hang
	// In test environments, this often hangs. We can check for an env var.
	if os.Getenv("SKIP_B2M_PUSH") == "true" {
		return nil
	}

	// Try push with a short-ish timeout
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()
	cmdPush := exec.CommandContext(ctx, "git", "push")
	cmdPush.Dir = dir
	pushOut, err := cmdPush.CombinedOutput()
	if err != nil {
		return fmt.Errorf("git push failed: %v\nOutput: %s", err, string(pushOut))
	}
	return nil
}
