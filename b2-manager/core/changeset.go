package core

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strings"
	"text/template"
	"time"

	"b2m/model"

	"github.com/pelletier/go-toml/v2"
)

// CreateChangeset generates a new changeset python script from a template
func CreateChangeset(phrase string) error {
	timestamp := time.Now().UnixNano()
	filename := fmt.Sprintf("%d_%s.py", timestamp, phrase)

	scriptDir := model.AppConfig.ChangesetScriptsDir
	if err := os.MkdirAll(scriptDir, 0755); err != nil {
		return fmt.Errorf("failed to create scripts directory: %w", err)
	}

	scriptPath := filepath.Join(scriptDir, filename)

	// Get template path
	// Assuming b2m runs from frontend, the templates dir would be in ../b2-manager/templates/
	// We should probably rely on ProjectRoot
	templatePath := filepath.Join(model.AppConfig.ProjectRoot, "..", "b2-manager", "templates", "changeset_template.py")

	tmpl, err := template.ParseFiles(templatePath)
	if err != nil {
		return fmt.Errorf("failed to parse template file %s: %w", templatePath, err)
	}

	f, err := os.Create(scriptPath)
	if err != nil {
		return fmt.Errorf("failed to create script file: %w", err)
	}
	defer f.Close()

	data := struct {
		Timestamp int64
		Phrase    string
	}{
		Timestamp: timestamp,
		Phrase:    phrase,
	}

	if err := tmpl.Execute(f, data); err != nil {
		return fmt.Errorf("failed to execute template: %w", err)
	}

	fmt.Printf("Changeset script created at: %s\n", scriptPath)
	return nil
}

// ExecuteChangeset runs the specified python script securely
func ExecuteChangeset(scriptName string) error {
	scriptDir := model.AppConfig.ChangesetScriptsDir

	// Ensure ".py" extension is present if not provided
	if filepath.Ext(scriptName) != ".py" {
		scriptName += ".py"
	}
	// Sanitize to prevent directory traversal
	scriptName = filepath.Base(scriptName)

	scriptPath := filepath.Join(scriptDir, scriptName)

	if _, err := os.Stat(scriptPath); os.IsNotExist(err) {
		return fmt.Errorf("script %s not found in %s", scriptName, scriptDir)
	}

	// Since b2m runs from frontend, changeset.py should be at frontend/changeset/changeset.py
	// But it's better to make it relative to the scripts dir (which is frontend/changeset/scripts).
	// So the wrapper will be at: [scriptDir]/../changeset.py
	fmt.Printf("Executing Changeset Script: %s\n", scriptPath)

	ctx := context.Background()
	sendDiscord(ctx, fmt.Sprintf("🚀 **Starting Changeset Execution:** `%s`", scriptName))

	cmd := exec.Command("python3", scriptPath)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	if err := cmd.Run(); err != nil {
		sendDiscord(ctx, fmt.Sprintf("❌ **Changeset Execution Failed:** `%s`\nError: %v", scriptName, err))
		return fmt.Errorf("script execution failed: %w", err)
	}

	sendDiscord(ctx, fmt.Sprintf("✅ **Changeset Execution Completed Successfully:** `%s`", scriptName))
	return nil
}

// RunCLINotify sends a custom notification to Discord from the script
func RunCLINotify(message string) error {
	ctx := context.Background()
	sendDiscord(ctx, message)
	return nil
}

// RunCLIStatus runs a status check for a specific database and prints the status natively for python
func RunCLIStatus(dbName string) error {
	ctx := context.Background()

	// In order to get status, we fetch local DBs, Remote Metas, and Locks...
	// FetchDBStatusData logic does exactly this.
	statusData, err := FetchDBStatusData(ctx, nil)
	if err != nil {
		return fmt.Errorf("failed to fetch status data: %w", err)
	}

	found := false
	for _, info := range statusData {
		// handle both exact match and extension-less
		baseName := strings.TrimSuffix(info.DB.Name, filepath.Ext(info.DB.Name))
		reqBaseName := strings.TrimSuffix(dbName, filepath.Ext(dbName))

		if baseName == reqBaseName || info.DB.Name == dbName {
			found = true
			isReadyToUpload := info.StatusCode == model.StatusCodeLocalNewer || info.StatusCode == model.StatusCodeNewLocal || info.StatusCode == model.StatusCodeLockedByYou
			isOutdated := info.StatusCode == model.StatusCodeRemoteNewer || info.StatusCode == model.StatusCodeRemoteOnly || info.StatusCode == model.StatusCodeErrorReadLocal || info.StatusCode == model.StatusCodeUnknown

			if info.VersionRole == "New Bump" && isReadyToUpload {
				fmt.Println("ready_to_upload")
			} else if info.VersionRole == "Latest" && isOutdated {
				fmt.Println("bump_and_upload")
			} else if info.VersionRole == "Old Version" {
				fmt.Println("outdated_version")
			} else if info.StatusCode == model.StatusCodeUpToDate {
				fmt.Println("up_to_date")
			} else if isReadyToUpload {
				// User didn't specify what to do if it's 'Latest' and 'ready_to_upload', but it should upload.
				fmt.Println("ready_to_upload")
			} else {
				fmt.Println("outdated_db") // fallback for safety
			}
			return nil
		}
	}

	if !found {
		fmt.Println("outdated_db")
	}
	return nil
}

// RunCLIGetLatest finds the "Latest" version of a database given its base name or current name, and prints it natively for python
func RunCLIGetLatest(dbName string) error {
	ctx := context.Background()

	statusData, err := FetchDBStatusData(ctx, nil)
	if err != nil {
		return fmt.Errorf("failed to fetch status data: %w", err)
	}

	reqBaseName := strings.TrimSuffix(dbName, filepath.Ext(dbName))
	// if it has a version like -v2, strip it to find the true base name if possible
	re := regexp.MustCompile(`^(.*)-v(\d+)$`)
	if match := re.FindStringSubmatch(reqBaseName); match != nil {
		reqBaseName = match[1]
	}

	for _, info := range statusData {
		baseName := strings.TrimSuffix(info.DB.Name, filepath.Ext(info.DB.Name))
		if match := re.FindStringSubmatch(baseName); match != nil {
			baseName = match[1]
		}

		if baseName == reqBaseName {
			if info.VersionRole == "Latest" {
				fmt.Println(info.DB.Name)
				return nil
			}
		}
	}

	// Fallback to original dbName if latest not found
	fmt.Println(dbName)
	return nil
}

// RunCLIGetVersion reads db.toml to find the full filename for a given short name and prints it natively for python
func RunCLIGetVersion(shortName string) error {
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

	fmt.Println(val)
	return nil
}

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
	err := PerformUpload(ctx, dbName, true, onProgress, onStatusUpdate)
	fmt.Println() // Add a final newline
	return err
}

// RunCLIHandleQuery executes a specific SQL file against a target database
func RunCLIHandleQuery(sqlName string, dbName string) error {
	// The files are expected to be in the changeset backup directory due to previous steps
	dbPath := filepath.Join(model.AppConfig.ChangesetDBsDir, dbName)
	sqlPath := filepath.Join(model.AppConfig.ChangesetDBsDir, sqlName)

	if _, err := os.Stat(dbPath); os.IsNotExist(err) {
		return fmt.Errorf("database file not found at %s", dbPath)
	}
	if _, err := os.Stat(sqlPath); os.IsNotExist(err) {
		return fmt.Errorf("SQL file not found at %s", sqlPath)
	}

	fmt.Printf("Executing queries from %s into %s...\n", sqlName, dbName)

	// Read SQL file content
	sqlContent, err := os.ReadFile(sqlPath)
	if err != nil {
		return fmt.Errorf("failed to read SQL file: %w", err)
	}

	// Execute via sqlite3 CLI (assuming it is installed)
	cmd := exec.Command("sqlite3", dbPath)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	// Pipe the SQL content to sqlite3
	stdin, err := cmd.StdinPipe()
	if err != nil {
		return fmt.Errorf("failed to create stdin pipe: %w", err)
	}

	go func() {
		defer stdin.Close()
		stdin.Write(sqlContent)
	}()

	if err := cmd.Run(); err != nil {
		return fmt.Errorf("sqlite3 execution failed: %w", err)
	}

	fmt.Printf("Successfully applied %s to %s\n", sqlName, dbName)
	return nil
}

// RunCLIDownload runs a database download without UI components
func RunCLIDownload(dbName string) error {
	ctx := context.Background()
	return DownloadDatabase(ctx, dbName, true, nil)
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
	err := RcloneCopy(ctx, "copyto", remotePath, localPath, description, true, nil)
	if err != nil {
		return fmt.Errorf("failed to fetch db.toml: %w", err)
	}

	fmt.Printf("db.toml downloaded to %s\n", localPath)
	return nil
}
