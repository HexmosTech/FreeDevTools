package cli

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"b2m/model"
)

// RunCLICopy handles moving db and sql files between the standard all_dbs and changeset backups dir
func RunCLICopy(srcName, dst, fileType, scriptName string) error {
	allDbsDir := filepath.Join(model.AppConfig.ProjectRoot, "db", "all_dbs")
	changesetDir := model.AppConfig.Frontend.Changeset.Dbs // This is updated by UpdateForScript

	filename := srcName
	if fileType == "db" {
		if strings.HasSuffix(filename, ".sql") {
			filename = filename[:len(filename)-4] + ".db"
		} else if !strings.HasSuffix(filename, ".db") {
			filename += ".db"
		}
	} else if fileType == "sql" {
		if strings.HasSuffix(filename, ".db") {
			filename = filename[:len(filename)-3] + ".sql"
		} else if !strings.HasSuffix(filename, ".sql") {
			filename += ".sql"
		}
	}

	var srcPath string
	if dst == "changeset" {
		exactPath := filepath.Join(allDbsDir, filename)
		if _, err := os.Stat(exactPath); err == nil {
			srcPath = exactPath
		} else {
			files, _ := os.ReadDir(allDbsDir)
			ext := "." + fileType
			for _, f := range files {
				if strings.HasPrefix(f.Name(), srcName) && strings.HasSuffix(f.Name(), ext) {
					srcPath = filepath.Join(allDbsDir, f.Name())
					filename = f.Name()
					break
				}
			}
		}
	} else if dst == "all_dbs" {
		exactPath := filepath.Join(changesetDir, filename)
		if _, err := os.Stat(exactPath); err == nil {
			srcPath = exactPath
		}
	}

	if srcPath == "" {
		return fmt.Errorf("could not find source file for '%s'", srcName)
	}

	destDir := allDbsDir
	if dst == "changeset" {
		destDir = changesetDir
	}

	if err := os.MkdirAll(destDir, 0755); err != nil {
		return fmt.Errorf("failed to create dest dir: %w", err)
	}

	destPath := filepath.Join(destDir, filename)
	fmt.Printf("Copying %s to %s\n", srcPath, destPath)

	if fileType == "db" {
		if err := WalCheckpointTruncate(filename); err != nil {
			fmt.Printf("Wal truncation skipped or failed in copy: %v\n", err)
		}
	}

	return copyFile(srcPath, destPath)
}
