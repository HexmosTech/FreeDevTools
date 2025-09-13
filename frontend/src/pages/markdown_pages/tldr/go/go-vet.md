---
title: "Validate Go Code - Check Source Files with go vet | Free DevTools"
name: go-vet
path: /freedevtools/tldr/go/go-vet
canonical: "https://hexmos.com/freedevtools/tldr/go/go-vet/"
description: "Validate Go code with go vet. Detect suspicious constructs, enforce coding standards, and improve code quality. Free online tool, no registration required."
category: common
keywords:
- go vet
- go linter
- go static analysis
- go code analyzer
- go code validation
- go source code check
- go best practices
- go coding standards
- golang vet
- golang linter
features:
- Detect suspicious code constructs
- Enforce coding standards
- Report potential bugs and errors
- Analyze Go source code for common mistakes
- Provide suggestions for code improvement
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# go vet

> Check Go source code and report suspicious constructs (e.g. lint your Go source files).
> Go vet returns a non-zero exit code if problems are found; returns a zero exit code if no problems are found.
> More information: <https://pkg.go.dev/cmd/vet>.

- Check the Go package in the current directory:

`go vet`

- Check the Go package in the specified path:

`go vet {{path/to/file_or_directory}}`

- List available checks that can be run with go vet:

`go tool vet help`

- View details and flags for a particular check:

`go tool vet help {{check_name}}`

- Display offending lines plus `n` lines of surrounding context:

`go vet -c={{n}}`

- Output analysis and errors in JSON format:

`go vet -json`
