package core

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"b2m/model"
)

// CreateMigration generates a new migration script with a timestamped filename
func CreateMigration(phrase string) error {
	// Config is initialized before this is called (in main.go -> InitSystem)
	scriptsDir := model.AppConfig.MigrationsDir
	if err := os.MkdirAll(scriptsDir, 0755); err != nil {
		return fmt.Errorf("failed to create scripts directory: %w", err)
	}

	// Generate filename
	// Format: YYYYMMDDHHMMSS + nanoseconds + _phrase.py
	now := time.Now().UTC()
	timestamp := now.Format("20060102150405") + fmt.Sprintf("%09d", now.Nanosecond())

	// Sanitize phrase
	safePhrase := strings.ReplaceAll(phrase, " ", "_")
	safePhrase = strings.Map(func(r rune) rune {
		if (r >= 'a' && r <= 'z') || (r >= 'A' && r <= 'Z') || (r >= '0' && r <= '9') || r == '_' || r == '-' {
			return r
		}
		return -1
	}, safePhrase)

	filename := fmt.Sprintf("%s_%s.py", timestamp, safePhrase)
	filePath := filepath.Join(scriptsDir, filename)

	// Create empty file
	file, err := os.Create(filePath)
	if err != nil {
		return fmt.Errorf("failed to create migration file: %w", err)
	}
	defer file.Close()

	// Add shebang or basic request?
	// User didn't ask for content, just the file.
	// But let's add a python shebang for convenience.
	_, err = file.WriteString("#!/usr/bin/env python3\n\n# Migration script\n")
	if err != nil {
		return fmt.Errorf("failed to write to migration file: %w", err)
	}

	fmt.Printf("Created migration script: %s\n", filePath)
	return nil
}
