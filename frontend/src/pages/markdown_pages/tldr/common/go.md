---
title: "Go - Manage Go Source Code | Free DevTools"
name: go
path: /freedevtools/tldr/common/go
canonical: "https://hexmos.com/freedevtools/tldr/common/go/"
description: "Manage Go source code with Go. Compile, build, and execute Go programs efficiently with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- go source code manager
- go build command
- go run command
- go install command
- go module initializer
- go test runner
- go package installer
- golang command line
- linux go compiler
- macos go builder
features:
- Download and install Go packages from import paths
- Compile and execute Go source files with main package
- Compile Go source into named executables
- Execute test cases within Go packages
- Initialize new Go modules with specified names
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# go

> Manage Go source code.
> Some subcommands such as `build` have their own usage documentation.
> More information: <https://pkg.go.dev/cmd/go>.

- Download and install a package, specified by its import path:

`go get {{package_path}}`

- Compile and run a source file (it has to contain a `main` package):

`go run {{file}}.go`

- Compile a source file into a named executable:

`go build -o {{executable}} {{file}}.go`

- Compile the package present in the current directory:

`go build`

- Execute all test cases of the current package (files have to end with `_test.go`):

`go test`

- Compile and install the current package:

`go install`

- Initialize a new module in the current directory:

`go mod init {{module_name}}`
