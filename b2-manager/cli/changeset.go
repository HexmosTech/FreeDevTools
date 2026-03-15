package cli

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"text/template"
	"time"

	"b2m/core"
	"b2m/model"
)

// CreateChangeset generates a new changeset python script from a template
func CreateChangeset(phrase string) error {
	timestamp := time.Now().UnixNano()
	filename := fmt.Sprintf("%d_%s.py", timestamp, phrase)

	scriptDir := model.AppConfig.Frontend.Changeset.Script
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
	scriptDir := model.AppConfig.Frontend.Changeset.Script

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
	core.SendDiscord(ctx, fmt.Sprintf("🚀 **Starting Changeset Execution:** `%s`", scriptName))

	cmd := exec.Command("python3", scriptPath)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	if err := cmd.Run(); err != nil {
		core.SendDiscord(ctx, fmt.Sprintf("❌ **Changeset Execution Failed:** `%s`\nError: %v", scriptName, err))
		return fmt.Errorf("script execution failed: %w", err)
	}

	core.SendDiscord(ctx, fmt.Sprintf("✅ **Changeset Execution Completed Successfully:** `%s`", scriptName))
	return nil
}

// RunCLINotify sends a custom notification to Discord from the script
func RunCLINotify(message string) error {
	ctx := context.Background()
	core.SendDiscord(ctx, message)
	return nil
}

// RunCLIHandleQuery executes a specific SQL file against a target database
func RunCLIHandleQuery(sqlName string, dbName string) error {
	// The files are expected to be in the changeset backup directory due to previous steps
	dbPath := filepath.Join(model.AppConfig.Frontend.Changeset.Dbs, dbName)
	sqlPath := filepath.Join(model.AppConfig.Frontend.Changeset.Dbs, sqlName)

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
		if _, err := stdin.Write(sqlContent); err != nil {
			fmt.Fprintf(os.Stderr, "failed to write to sqlite3 stdin: %v\n", err)
		}
	}()

	if err := cmd.Run(); err != nil {
		return fmt.Errorf("sqlite3 execution failed: %w", err)
	}

	fmt.Printf("Successfully applied %s to %s\n", sqlName, dbName)
	return nil
}
