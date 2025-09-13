---
title: "Run Go Tool - Execute Go Programs | Free DevTools"
name: go-tool
path: /freedevtools/tldr/go/go-tool
canonical: "https://hexmos.com/freedevtools/tldr/go/go-tool/"
description: "Execute Go programs with Go Tool, a powerful debugging and execution tool. Easily test and debug Go code with this free online tool, no registration required."
category: common
keywords:
- go program execution
- go command execution
- go debugging tool
- go linker
- go dist list
- go cross compilation
- go toolchain
- go tool command
- linux go tool
- macos go tool
features:
- Execute Go commands as standalone binaries
- List available Go tools
- Link Go object files
- Display execution command without running
- View documentation for specific Go tools
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# go tool

> Run a Go tool or command.
> Execute a Go command as a stand-alone binary, typically for debugging.
> More information: <https://pkg.go.dev/cmd/go#hdr-Run_specified_go_tool>.

- List available tools:

`go tool`

- Run the go link tool:

`go tool link {{path/to/main.o}}`

- Print the command that would be executed, but do not execute it (similar to `whereis`):

`go tool -n {{command}} {{arguments}}`

- View documentation for a specified tool:

`go tool {{command}} --help`

- List all available cross-compilation targets:

`go tool dist list`
