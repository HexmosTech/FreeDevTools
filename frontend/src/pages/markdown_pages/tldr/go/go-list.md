---
title: "List Go Packages - Discover Dependencies | Free DevTools"
name: go-list
path: /freedevtools/tldr/go/go-list
canonical: "https://hexmos.com/freedevtools/tldr/go/go-list/"
description: "List Go packages and module dependencies with go-list. Find available updates and dependencies for your Go projects. Free online tool, no registration required."
category: common
keywords:
- Go package lister
- Go module dependency explorer
- Go dependency update checker
- Go project analyzer
- Go standard library finder
- Go JSON output generator
- Go package graph generator
- Go import path identifier
- Go dependency version reporter
- Go cross-platform dependency checker
features:
- List all packages in a directory recursively
- Identify standard library packages
- Output package information in JSON format
- List module dependencies and available updates
- Discover dependencies of a specific Go module
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# go list

> List packages or modules.
> More information: <https://pkg.go.dev/cmd/go#hdr-List_packages_or_modules>.

- List packages:

`go list ./...`

- List standard packages:

`go list std`

- List packages in JSON format:

`go list -json time net/http`

- List module dependencies and available updates:

`go list -m -u all`
