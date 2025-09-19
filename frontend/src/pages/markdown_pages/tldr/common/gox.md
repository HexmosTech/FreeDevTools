---
title: "Compile Go Programs - Cross-Compile with Gox | Online Free DevTools by Hexmos"
name: gox
path: /freedevtools/tldr/common/gox
canonical: "https://hexmos.com/freedevtools/tldr/common/gox/"
description: "Cross-compile Go programs with Gox. Effortlessly build for multiple operating systems and architectures. Free online tool, no registration required."
category: common
keywords:
- go cross-compiler
- go build tool
- go multi-platform compile
- go cross-platform build
- go binary cross-compile
- go linux build
- go windows build
- go macos build
- go arm64 build
- go amd64 build
features:
- Cross-compile Go programs for multiple OS/architecture combinations
- Compile Go programs from remote URLs
- Specify target operating system for compilation
- Specify target operating system and architecture for compilation
- Build Go binaries for different platforms from a single command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gox

> Cross-compile Go programs.
> More information: <https://github.com/mitchellh/gox>.

- Compile Go program in the current directory for all operating systems and architecture combinations:

`gox`

- Download and compile a Go program from a remote URL:

`gox {{url_1}} {{url_2}}`

- Compile current directory for a particular operating system:

`gox -os="{{os}}"`

- Compile current directory for a single operating system and architecture combination:

`gox -osarch="{{os}}/{{arch}}"`
