---
title: "Format Go - Format Go Source Files | Online Free DevTools by Hexmos"
name: go-fmt
path: /freedevtools/tldr/go/go-fmt
canonical: "https://hexmos.com/freedevtools/tldr/go/go-fmt/"
description: "Format Go source files with Go fmt. Improve code readability with automated formatting. Free online tool, no registration required."
category: common
keywords:
- go format
- gofmt
- go source code formatter
- go code style
- go formatting tool
- go coding standards
- go compiler
- go package
- linux go format
- macos go format
features:
- Format Go source files in the current directory
- Format a specific Go package by its import path
- Recursively format Go packages in subdirectories
- Preview formatting changes without applying them
- Display formatting commands as they are executed
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# go fmt

> Format Go source files, printing the changed filenames.
> More information: <https://pkg.go.dev/cmd/go#hdr-Gofmt__reformat__package_sources>.

- Format Go source files in the current directory:

`go fmt`

- Format a specific Go package in your import path (`$GOPATH/src`):

`go fmt {{path/to/package}}`

- Format the package in the current directory and all subdirectories (note the `...`):

`go fmt {{./...}}`

- Print what format commands would've been run, without modifying anything:

`go fmt -n`

- Print which format commands are run as they are run:

`go fmt -x`
