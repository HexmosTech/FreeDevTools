---
title: "Go Install - Compile and Install Go Packages | Free DevTools"
name: go-install
path: /freedevtools/tldr/common/go-install
canonical: "https://hexmos.com/freedevtools/tldr/common/go-install/"
description: "Compile Go packages instantly with Go Install. Easily manage dependencies and install specific versions of programs using the go command. Free online tool, no registration required."
category: common
keywords:
- Go package installer
- Go install command
- Go dependency management
- Go version control
- Go program compiler
- Go package compilation
- Go application installer
- Go modules
- Go build tool
- Go package manager
features:
- Compile and install Go packages from import paths
- Install the latest version of a program, ignoring go.mod
- Install a specific local Go package
- Install a program at the version selected by go.mod
- Manage Go dependencies with command-line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# go install

> Compile and install packages named by the import paths.
> More information: <https://pkg.go.dev/cmd/go#hdr-Compile_and_install_packages_and_dependencies>.

- Compile and install the current package:

`go install`

- Compile and install a specific local package:

`go install {{path/to/package}}`

- Install the latest version of a program, ignoring `go.mod` in the current directory:

`go install {{golang.org/x/tools/gopls}}@{{latest}}`

- Install a program at the version selected by `go.mod` in the current directory:

`go install {{golang.org/x/tools/gopls}}`
