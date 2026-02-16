package config

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/pelletier/go-toml/v2"
)

// Config holds the application configuration
type Config struct {
	Site             string              `toml:"site"`
	Port             int                 `toml:"port"`
	Basepath         string              `toml:"basepath"`
	NodeEnv          string              `toml:"node_env"`
	B2AccountID      string              `toml:"b2_account_id"`
	B2ApplicationKey string              `toml:"b2_application_key"`
	MeiliWriteKey    string              `toml:"meili_write_key"`
	EnableAds        bool                `toml:"enable_ads"`
	Ads              map[string][]string `toml:"ads"`
	FdtPgDB       FdtPgDBConfig    `toml:"fdt_pg_db"`
}

// FdtPgDBConfig holds PostgreSQL database configuration for Free DevTools
type FdtPgDBConfig struct {
	Host     string `toml:"host"`
	Port     string `toml:"port"`
	User     string `toml:"user"`
	Password string `toml:"password"`
	DBName   string `toml:"dbname"`
}

var appConfig *Config

// loadNodeEnvFromDotEnv reads NODE_ENV from .env file
// Returns the value if found, otherwise returns empty string
func loadNodeEnvFromDotEnv() string {
	envFile := ".env"
	if _, err := os.Stat(envFile); os.IsNotExist(err) {
		return ""
	}

	file, err := os.Open(envFile)
	if err != nil {
		return ""
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		// Skip empty lines and comments
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		// Parse KEY=VALUE format
		parts := strings.SplitN(line, "=", 2)
		if len(parts) == 2 {
			key := strings.TrimSpace(parts[0])
			value := strings.TrimSpace(parts[1])
			// Remove quotes if present
			value = strings.Trim(value, `"'`)
			if key == "NODE_ENV" {
				return value
			}
		}
	}

	return ""
}

// LoadConfig loads the TOML configuration file based on environment
// Looks for fdt-{env}.toml where env is from NODE_ENV in .env file or environment variable, or defaults to "dev"
func LoadConfig() (*Config, error) {
	if appConfig != nil {
		return appConfig, nil
	}

	// First try to read from .env file
	env := loadNodeEnvFromDotEnv()
	// If not found in .env, try environment variable
	if env == "" {
		env = os.Getenv("NODE_ENV")
	}
	// Default to "dev" if still not set
	if env == "" {
		env = "dev"
	}

	configFile := fmt.Sprintf("fdt-%s.toml", env)

	// Check if config file exists
	if _, err := os.Stat(configFile); os.IsNotExist(err) {
		log.Printf("Config file %s not found, using defaults", configFile)
		appConfig = &Config{
			Site:             "http://localhost:4321/freedevtools",
			Port:             4321,
			Basepath:         "/freedevtools",
			NodeEnv:          "dev",
			B2AccountID:      "",
			B2ApplicationKey: "",
			MeiliWriteKey: "",
			EnableAds:        false,
			Ads:              make(map[string][]string),
		FdtPgDB: FdtPgDBConfig{
			Host:     "",
			Port:     "5432",
			User:     "freedevtools_user",
			Password: "",
			DBName:   "freedevtools",
		},
		}
		return appConfig, nil
	}

	data, err := os.ReadFile(configFile)
	if err != nil {
		return nil, fmt.Errorf("failed to read config file %s: %w", configFile, err)
	}

	var config Config
	if err := toml.Unmarshal(data, &config); err != nil {
		return nil, fmt.Errorf("failed to parse config file %s: %w", configFile, err)
	}

	// Set defaults if not specified
	if config.Site == "" {
		config.Site = "http://localhost:4321/freedevtools"
	}
	if config.Port == 0 {
		config.Port = 4321
	}
	if config.Basepath == "" {
		config.Basepath = "/freedevtools"
	}
	if config.NodeEnv == "" {
		config.NodeEnv = env
	}

	appConfig = &config
	log.Printf("Loaded configuration from %s (env: %s, enable_ads: %v)", configFile, config.NodeEnv, config.EnableAds)
	return appConfig, nil
}

// GetConfig returns the loaded configuration
func GetConfig() *Config {
	if appConfig == nil {
		// Try to load if not already loaded
		cfg, err := LoadConfig()
		if err != nil {
			log.Printf("Warning: Failed to load config: %v, using defaults", err)
			appConfig = &Config{
				Site:             "http://localhost:4321/freedevtools",
				Port:             4321,
				Basepath:         "/freedevtools",
				NodeEnv:          "dev",
				B2AccountID:      "",
				B2ApplicationKey: "",
				MeiliWriteKey: "",
				EnableAds:        false,
			}
		} else {
			appConfig = cfg
		}
	}
	return appConfig
}

// GetSiteURL returns the site URL from config
func GetSiteURL() string {
	cfg := GetConfig()
	return cfg.Site
}

// GetBasePath returns the base path from config
func GetBasePath() string {
	cfg := GetConfig()
	return cfg.Basepath
}

// GetPort returns the port from config as string
func GetPort() string {
	cfg := GetConfig()
	return strconv.Itoa(cfg.Port)
}

// GetAdsEnabled returns true if ads are enabled in config
func GetAdsEnabled() bool {
	cfg := GetConfig()
	return cfg.EnableAds
}

// ShouldShowBannerDB checks if bannerdb ads should be shown for a given page type
func ShouldShowBannerDB(pageType string) bool {
	cfg := GetConfig()
	if !cfg.EnableAds {
		return false
	}
	if cfg.Ads == nil {
		return false
	}
	adTypes, exists := cfg.Ads[pageType]
	if !exists {
		return false
	}
	// Check if 'bannerdb' is in the list
	for _, adType := range adTypes {
		if adType == "bannerdb" {
			return true
		}
	}
	return false
}

// ShouldShowEthicalAds checks if ethical ads should be shown for a given page type
func ShouldShowEthicalAds(pageType string) bool {
	cfg := GetConfig()
	if !cfg.EnableAds {
		return false
	}
	if cfg.Ads == nil {
		return false
	}
	adTypes, exists := cfg.Ads[pageType]
	if !exists {
		return false
	}
	// Check if 'ethical' is in the list
	for _, adType := range adTypes {
		if adType == "ethical" {
			return true
		}
	}
	return false
}

// GetEnabledAdTypes returns a map of enabled ad types for a given page type
// Returns a map with keys: "bannerdb", "ethical", "google" set to true if enabled
func GetEnabledAdTypes(pageType string) map[string]bool {
	result := map[string]bool{
		"bannerdb": false,
		"ethical":  false,
		"google":   false,
	}

	cfg := GetConfig()
	if !cfg.EnableAds {
		return result
	}
	if cfg.Ads == nil {
		return result
	}

	adTypes, exists := cfg.Ads[pageType]
	if !exists {
		return result
	}

	// Check which ad types are enabled
	for _, adType := range adTypes {
		switch adType {
		case "bannerdb":
			result["bannerdb"] = true
		case "ethical":
			result["ethical"] = true
		case "google":
			result["google"] = true
		}
	}

	return result
}

// LoadConfigFromPath loads config from a specific file path (for testing)
func LoadConfigFromPath(path string) (*Config, error) {
	absPath, err := filepath.Abs(path)
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path: %w", err)
	}

	data, err := os.ReadFile(absPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read config file %s: %w", absPath, err)
	}

	var config Config
	if err := toml.Unmarshal(data, &config); err != nil {
		return nil, fmt.Errorf("failed to parse config file %s: %w", absPath, err)
	}

	// Set defaults if not specified
	if config.Site == "" {
		config.Site = "http://localhost:4321/freedevtools"
	}
	if config.Port == 0 {
		config.Port = 4321
	}
	if config.Basepath == "" {
		config.Basepath = "/freedevtools"
	}

	return &config, nil
}
