package tools

func NewToolsCache() (*Config, error) {
	return &Config{
		cache: NewCache(),
	}, nil
}

func (db *Config) Close() error {
	return nil
}

// GetToolsCache returns a database instance
func GetToolsCache() (*Config, error) {
	return NewToolsCache()
}
