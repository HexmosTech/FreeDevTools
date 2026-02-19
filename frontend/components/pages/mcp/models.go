package mcp_pages

import (
	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	"fdt-templ/internal/db/mcp"
)

type IndexData struct {
	Categories      []mcp.McpCategory
	CurrentPage     int
	TotalPages      int
	TotalCategories int
	TotalRepos      int
	BreadcrumbItems []components.BreadcrumbItem
	LayoutProps     layouts.BaseLayoutProps
	PageURL         string
}

type CategoryData struct {
	Category        *mcp.McpCategory
	Repos           []mcp.McpPage
	CurrentPage     int
	TotalPages      int
	TotalRepos      int
	BreadcrumbItems []components.BreadcrumbItem
	LayoutProps     layouts.BaseLayoutProps
	PageURL         string
}

type RepoData struct {
	Repo            *mcp.McpPage
	Category        *mcp.McpCategory
	BreadcrumbItems []components.BreadcrumbItem
	LayoutProps     layouts.BaseLayoutProps
	Keywords        []string
	SeeAlsoItems    []common.SeeAlsoItem
}
