package core

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"text/template"
	"time"

	"b2m/model"
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

	fmt.Printf("Executing Changeset Script: %s\n", scriptPath)

	cmd := exec.Command("python3", scriptPath)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	if err := cmd.Run(); err != nil {
		return fmt.Errorf("script execution failed: %w", err)
	}

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
			// Translate core statuses to the 3 Python required statuses
			switch info.StatusCode {
			case model.StatusCodeLocalNewer, model.StatusCodeNewLocal, model.StatusCodeLockedByYou:
				fmt.Println("ready_to_upload")
			case model.StatusCodeUpToDate:
				fmt.Println("up_to_date")
			default:
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

// RunCLIUpload runs a database upload without UI components
func RunCLIUpload(dbName string) error {
	ctx := context.Background()
	// Using empty functions to keep it quiet
	return PerformUpload(ctx, dbName, false, nil, nil)
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
