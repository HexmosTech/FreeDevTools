package mcp_pages

import (
	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	banner_db "fdt-templ/internal/db/banner"
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
	TextBanner      *banner_db.Banner
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
	TextBanner      *banner_db.Banner
}

type RepoData struct {
	Repo            *mcp.McpPage
	Category        *mcp.McpCategory
	BreadcrumbItems []components.BreadcrumbItem
	LayoutProps     layouts.BaseLayoutProps
	TextBanner      *banner_db.Banner
	Keywords        []string
	SeeAlsoItems    []common.SeeAlsoItem
}
