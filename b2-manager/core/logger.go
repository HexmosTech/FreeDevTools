package core

import (
	"fmt"
	"log"
	"os"
	"path/filepath"

	"b2m/config"
)

var LogFile *os.File
var Logger *log.Logger

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

	LogFile = file
	Logger = log.New(file, "", log.LstdFlags)

	LogInfo("-------------------------------------------")
	LogInfo("Application Started - v%s", config.AppConfig.ToolVersion)
	return nil
}

// CloseLogger closes the log file
func CloseLogger() {
	if LogFile != nil {
		LogInfo("Application Exiting")
		LogFile.Close()
	}
}

// LogInfo logs an info message
func LogInfo(format string, v ...interface{}) {
	if Logger != nil {
		msg := fmt.Sprintf(format, v...)
		Logger.Printf("[INFO] %s", msg)
	}
}

// LogError logs an error message
func LogError(format string, v ...interface{}) {
	if Logger != nil {
		msg := fmt.Sprintf(format, v...)
		Logger.Printf("[ERROR] %s", msg)
	}
}
