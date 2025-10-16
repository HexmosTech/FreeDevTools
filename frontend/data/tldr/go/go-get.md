---
title: "Go Get - Manage Go Packages and Dependencies | Online Free DevTools by Hexmos"
name: go-get
path: "/freedevtools/tldr/go/go-get/"
canonical: "https://hexmos.com/freedevtools/tldr/go/go-get/"
description: "Manage Go packages and dependencies with Go Get. Easily add, update, and remove packages in module-aware or GOPATH mode. Free online tool, no registration required."
category: common
keywords:
- go package manager
- go dependency manager
- go module management
- go get package
- go mod add
- go get update
- go get remove
- golang package import
- go module versioning
- go get gopath
features:
- Add Go packages to go.mod
- Update Go packages to specific versions
- Remove Go packages from dependencies
- Install packages in GOPATH mode
- Manage module dependencies via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# go get

> Add a dependency package, or download packages in legacy GOPATH mode.
> More information: <https://pkg.go.dev/cmd/go#hdr-Add_dependencies_to_current_module_and_install_them>.

- Add a specified package to `go.mod` in module-mode or install the package in GOPATH-mode:

`go get {{example.com/pkg}}`

- Modify the package with a given version in module-aware mode:

`go get {{example.com/pkg}}@{{v1.2.3}}`

- Remove a specified package:

`go get {{example.com/pkg}}@{{none}}`
