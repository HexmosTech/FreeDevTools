package config

import (
	"fmt"
	"path/filepath"
	"sync"

	"github.com/knadh/koanf/parsers/toml/v2"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/v2"
)

// DBTomlConfig holds the dynamic database paths and filenames from db.toml
type DBTomlConfig struct {
	Path          string `toml:"path"`
	BannerDB      string `toml:"bannerdb"`
	CheatsheetsDB string `toml:"cheatsheetsdb"`
	EmojiDB       string `toml:"emojidb"`
	IpmDB         string `toml:"ipmdb"`
	ManPagesDB    string `toml:"manpagesdb"`
	McpDB         string `toml:"mcpdb"`
	PngIconsDB    string `toml:"pngiconsdb"`
	SvgIconsDB    string `toml:"svgiconsdb"`
	TldrDB        string `toml:"tldrdb"`
}

var (
	DBConfig   *DBTomlConfig
	dbTomlOnce sync.Once
	dbTomlErr  error
)

// LoadDBToml loads database versions and paths from db.toml in a thread-safe manner
func LoadDBToml() error {
	dbTomlOnce.Do(func() {
		dbTomlErr = loadDBTomlInternal()
	})
	return dbTomlErr
}

func safeJoin(basePath, filename string) string {
	if filename == "" {
		return ""
	}
	return filepath.Join(basePath, filename)
}

func loadDBTomlInternal() error {
	tomlPath := "db.toml"
	var k = koanf.New(".")

	// Load db.toml from current directory 
	if err := k.Load(file.Provider(tomlPath), toml.Parser()); err != nil {
		return fmt.Errorf("FATAL: failed to load %s: %w", tomlPath, err)
	}

	var parsedConfig DBTomlConfig
	if err := k.Unmarshal("db", &parsedConfig); err != nil {
		return fmt.Errorf("FATAL: failed to unmarshal db config: %w", err)
	}

	basePathStr := parsedConfig.Path
	if basePathStr == "" {
		basePathStr = "db/all_dbs/"
	}

	DBConfig = &DBTomlConfig{
		Path:          basePathStr,
		BannerDB:      safeJoin(basePathStr, parsedConfig.BannerDB),
		CheatsheetsDB: safeJoin(basePathStr, parsedConfig.CheatsheetsDB),
		EmojiDB:       safeJoin(basePathStr, parsedConfig.EmojiDB),
		IpmDB:         safeJoin(basePathStr, parsedConfig.IpmDB),
		ManPagesDB:    safeJoin(basePathStr, parsedConfig.ManPagesDB),
		McpDB:         safeJoin(basePathStr, parsedConfig.McpDB),
		PngIconsDB:    safeJoin(basePathStr, parsedConfig.PngIconsDB),
		SvgIconsDB:    safeJoin(basePathStr, parsedConfig.SvgIconsDB),
		TldrDB:        safeJoin(basePathStr, parsedConfig.TldrDB),
	}

	fmt.Printf("Successfully loaded db.toml config. Database location path: %s\n", DBConfig.Path)
	fmt.Printf("BannerDB: %s\n", DBConfig.BannerDB)
	fmt.Printf("CheatsheetsDB: %s\n", DBConfig.CheatsheetsDB)
	fmt.Printf("EmojiDB: %s\n", DBConfig.EmojiDB)
	fmt.Printf("IpmDB: %s\n", DBConfig.IpmDB)
	fmt.Printf("ManPagesDB: %s\n", DBConfig.ManPagesDB)
	fmt.Printf("McpDB: %s\n", DBConfig.McpDB)
	fmt.Printf("PngIconsDB: %s\n", DBConfig.PngIconsDB)
	fmt.Printf("SvgIconsDB: %s\n", DBConfig.SvgIconsDB)
	fmt.Printf("TldrDB: %s\n", DBConfig.TldrDB)

	return nil
}
