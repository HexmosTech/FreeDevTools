package tools

import (
	"fmt"

)

// GetTool retrieves a tool by slug/key
func (toolsConfig *Config) GetTool(slug string) (Tool, bool) {
	key := fmt.Sprintf("GetTool:%s", slug)
	if val, ok := toolsConfig.cache.Get(key); ok {
		return val.(Tool), true
	}

	// Fetch from static config
	tool, ok := GetToolByKey(slug)
	if !ok {
		return Tool{}, false
	}

	toolsConfig.cache.Set(key, tool, CacheTTLTool)
	return tool, true
}

// GetToolsList returns the full list of tools
func (toolsConfig *Config) GetToolsList() []Tool {
	key := "GetToolsList"
	if val, ok := toolsConfig.cache.Get(key); ok {
		return val.([]Tool)
	}

	list := ToolsList
	toolsConfig.cache.Set(key, list, CacheTTLIndex)
	return list
}

func init() {
	for _, tool := range ToolsList {
		ToolsConfig[tool.ID] = tool
	}
}

func GetToolByKey(key string) (Tool, bool) {
	tool, ok := ToolsConfig[key]
	return tool, ok
}

func GetAllTools() []Tool {
	return ToolsList
}

func GetAllUniqueTools() []Tool {
	var uniqueTools []Tool
	for _, tool := range ToolsList {
		if tool.VariationOf == "" {
			uniqueTools = append(uniqueTools, tool)
		}
	}
	return uniqueTools
}
