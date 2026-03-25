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

// CreateChangeset generates a new changeset python script from a template.
func CreateChangeset(phrase string, dbShortNames []string) error {
	timestamp := time.Now().UnixNano()
	filename := fmt.Sprintf("%d_%s.py", timestamp, phrase)

	scriptDir := model.AppConfig.Frontend.Changeset.Script
	if err := os.MkdirAll(scriptDir, 0755); err != nil {
		return fmt.Errorf("failed to create scripts directory: %w", err)
	}

	scriptPath := filepath.Join(scriptDir, filename)

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
		Timestamp    int64
		Phrase       string
		DBShortNames []string
	}{
		Timestamp:    timestamp,
		Phrase:       phrase,
		DBShortNames: dbShortNames,
	}

	if err := tmpl.Execute(f, data); err != nil {
		return fmt.Errorf("failed to execute template: %w", err)
	}

	fmt.Printf("✅ Changeset script created: %s\n", scriptPath)
	return nil
}

// ExecuteChangeset runs the specified python script securely.
// When cronMode is true, Discord notifications are sent only on failure.
// Start and success messages are always suppressed to avoid alert fatigue.
func ExecuteChangeset(scriptName string, cronMode bool) error {
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

	fmt.Printf("Executing Changeset Script: %s\n", scriptPath)

	cmd := exec.Command("python3", scriptPath)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	if err := cmd.Run(); err != nil {
		// Only send Discord alert on failure, and only when running as a cron job
		if cronMode {
			ctx := context.Background()
			core.SendDiscord(ctx, fmt.Sprintf("❌ **Changeset Failed (cron):** `%s`\nError: %v", scriptName, err))
		}
		return fmt.Errorf("script execution failed: %w", err)
	}

	return nil
}

// RunCLINotify sends a custom notification to a specific Discord webhook URL.
// If webhookURL is empty it falls back to the global config webhook.
func RunCLINotify(message, webhookURL string) error {
	ctx := context.Background()
	if webhookURL == "" {
		core.SendDiscord(ctx, message)
	} else {
		core.SendDiscordToURL(ctx, webhookURL, message)
	}
	return nil
}

// RunCLIHandleQuery executes a specific SQL file against a target database
func RunCLIHandleQuery(sqlName string, dbName string, useJSON bool) error {
	// The files are expected to be in the changeset backup directory due to previous steps
	dbPath := filepath.Join(model.AppConfig.Frontend.Changeset.Dbs, dbName)
	sqlPath := filepath.Join(model.AppConfig.Frontend.Changeset.Dbs, sqlName)

	if _, err := os.Stat(dbPath); os.IsNotExist(err) {
		return fmt.Errorf("database file not found at %s", dbPath)
	}
	if _, err := os.Stat(sqlPath); os.IsNotExist(err) {
		return fmt.Errorf("SQL file not found at %s", sqlPath)
	}

	if !useJSON {
		fmt.Printf("Executing queries from %s into %s...\n", sqlName, dbName)
	}

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

	if !useJSON {
		fmt.Printf("Successfully applied %s to %s\n", sqlName, dbName)
	}
	return nil
}
