---
title: "Go Build - Compile Go Sources | Free DevTools"
name: go-build
path: /freedevtools/tldr/go/go-build
canonical: "https://hexmos.com/freedevtools/tldr/go/go-build/"
description: "Compile Go sources effortlessly with Go Build. Create binaries, specify output filenames, and enable race detection. Free online tool, no registration required."
category: common
keywords:
- go build command
- go compiler
- compile go program
- go executable
- go build flags
- go build package
- go build race condition
- go build linux
- go build windows
- go build macos
features:
- Compile single Go source files
- Specify output filename for the compiled binary
- Compile Go packages into executables
- Enable data race detection during compilation
- Compile Go sources for different operating systems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# go build

> Compile Go sources.
> More information: <https://pkg.go.dev/cmd/go#hdr-Compile_packages_and_dependencies>.

- Compile a 'package main' file (output will be the filename without extension):

`go build {{path/to/main.go}}`

- Compile, specifying the output filename:

`go build -o {{path/to/binary}} {{path/to/source.go}}`

- Compile a package:

`go build -o {{path/to/binary}} {{path/to/package}}`

- Compile a main package into an executable, enabling data race detection:

`go build -race -o {{path/to/executable}} {{path/to/main/package}}`
