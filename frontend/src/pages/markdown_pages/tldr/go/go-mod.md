---
title: "Go Mod - Manage Go Modules | Online Free DevTools by Hexmos"
name: go-mod
path: /freedevtools/tldr/go/go-mod
canonical: "https://hexmos.com/freedevtools/tldr/go/go-mod/"
description: "Manage Go modules efficiently with Go Mod. Download, tidy, verify, and vendor your Go dependencies easily. Free online tool, no registration required."
category: common
keywords:
- go modules
- go mod init
- go dependency management
- go mod download
- go mod tidy
- go mod verify
- go mod vendor
- go packages
- go dependency tree
- go build management
features:
- Initialize new Go modules
- Download Go dependencies
- Tidy up Go module dependencies
- Verify Go dependency content
- Vendor Go module dependencies
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# go mod

> Module maintenance.
> More information: <https://pkg.go.dev/cmd/go#hdr-Module_maintenance>.

- Initialize new module in current directory:

`go mod init {{moduleName}}`

- Download modules to local cache:

`go mod download`

- Add missing and remove unused modules:

`go mod tidy`

- Verify dependencies have expected content:

`go mod verify`

- Copy sources of all dependencies into the vendor directory:

`go mod vendor`
