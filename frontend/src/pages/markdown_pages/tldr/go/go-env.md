---
title: "Go Env - Manage Go Environment Variables | Online Free DevTools by Hexmos"
name: go-env
path: /freedevtools/tldr/go/go-env
canonical: "https://hexmos.com/freedevtools/tldr/go/go-env/"
description: "Manage Go environment variables easily with Go Env. Configure GOPATH, GOBIN, and other settings for Go development. Free online tool, no registration required."
category: common
keywords:
- go environment variables
- go env command
- go path configuration
- go bin directory
- go gopath
- go environment management
- go development environment
- go toolchain
- go command line
- go build environment
features:
- Display all Go environment variables
- Show the value of a specific environment variable
- Set a Go environment variable
- Unset a Go environment variable
- Configure the Go development environment
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# go env

> Manage environment variables used by the Go toolchain.
> More information: <https://pkg.go.dev/cmd/go#hdr-Print_Go_environment_information>.

- Show all environment variables:

`go env`

- Show a specific environment variable:

`go env {{GOPATH}}`

- Set an environment variable to a value:

`go env -w {{GOBIN}}={{path/to/directory}}`

- Reset an environment variable's value:

`go env -u {{GOBIN}}`
