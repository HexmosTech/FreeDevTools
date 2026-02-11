package core

import (
	"fmt"
	"log"
	"os"
	"path/filepath"

	"b2m/model"
)

// Internal logger variables
var (
	logFile *os.File
	logger  *log.Logger
)

// InitLogger initializes the global logger
func InitLogger() error {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return fmt.Errorf("failed to get user config dir: %v", err)
	}

	appConfigDir := filepath.Join(configDir, "b2m")
	if err := os.MkdirAll(appConfigDir, 0755); err != nil {
		return fmt.Errorf("failed to create app config dir: %v", err)
	}

	logPath := "b2m.log"
	file, err := os.OpenFile(logPath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return fmt.Errorf("failed to open log file: %v", err)
	}

	logFile = file
	logger = log.New(file, "", log.LstdFlags)

	LogInfo("-------------------------------------------")
	LogInfo("Application Started - v%s", model.AppConfig.ToolVersion)
	return nil
}

// CloseLogger closes the log file
func CloseLogger() {
	if logFile != nil {
		LogInfo("Application Exiting")
		logFile.Close()
	}
}

// LogInfo logs an info message
func LogInfo(format string, v ...interface{}) {
	if logger != nil {
		msg := fmt.Sprintf(format, v...)
		logger.Printf("[INFO] %s", msg)
	}
}

// LogError logs an error message
func LogError(format string, v ...interface{}) {
	if logger != nil {
		msg := fmt.Sprintf(format, v...)
		logger.Printf("[ERROR] %s", msg)
	}
}
