package config

import (
	"fmt"
	"path/filepath"
	"sync"

	"github.com/rs/zerolog/log"

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

func safeJoinAndAbs(basePath, filename string) string {
	if filename == "" {
		return ""
	}
	joined := filepath.Join(basePath, filename)
	absPath, err := filepath.Abs(joined)
	if err != nil {
		log.Warn().Msgf("Warning: failed to resolve absolute path for %s: %v", joined, err)
		return "file:" + joined
	}
	return "file:" + absPath
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
		BannerDB:      safeJoinAndAbs(basePathStr, parsedConfig.BannerDB),
		CheatsheetsDB: safeJoinAndAbs(basePathStr, parsedConfig.CheatsheetsDB),
		EmojiDB:       safeJoinAndAbs(basePathStr, parsedConfig.EmojiDB),
		IpmDB:         safeJoinAndAbs(basePathStr, parsedConfig.IpmDB),
		ManPagesDB:    safeJoinAndAbs(basePathStr, parsedConfig.ManPagesDB),
		McpDB:         safeJoinAndAbs(basePathStr, parsedConfig.McpDB),
		PngIconsDB:    safeJoinAndAbs(basePathStr, parsedConfig.PngIconsDB),
		SvgIconsDB:    safeJoinAndAbs(basePathStr, parsedConfig.SvgIconsDB),
		TldrDB:        safeJoinAndAbs(basePathStr, parsedConfig.TldrDB),
	}

	log.Info().Msgf("Successfully loaded db.toml config. Database location path: %s", DBConfig.Path)
	log.Info().Msgf("BannerDB: %s", DBConfig.BannerDB)
	log.Info().Msgf("CheatsheetsDB: %s", DBConfig.CheatsheetsDB)
	log.Info().Msgf("EmojiDB: %s", DBConfig.EmojiDB)
	log.Info().Msgf("IpmDB: %s", DBConfig.IpmDB)
	log.Info().Msgf("ManPagesDB: %s", DBConfig.ManPagesDB)
	log.Info().Msgf("McpDB: %s", DBConfig.McpDB)
	log.Info().Msgf("PngIconsDB: %s", DBConfig.PngIconsDB)
	log.Info().Msgf("SvgIconsDB: %s", DBConfig.SvgIconsDB)
	log.Info().Msgf("TldrDB: %s", DBConfig.TldrDB)

	return nil
}
