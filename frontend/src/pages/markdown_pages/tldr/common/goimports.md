---
title: "Format Go Imports - Organize Code | Online Free DevTools by Hexmos"
name: goimports
path: /freedevtools/tldr/common/goimports
canonical: "https://hexmos.com/freedevtools/tldr/common/goimports/"
description: "Format Go import statements automatically with goimports. Add missing imports, remove unused ones, and organize your Go code. Free online tool, no registration required."
category: common
keywords:
- Go import formatter
- Go import organizer
- Go code formatting
- Go dependency management
- Go package manager
- Go code cleaner
- Go import auto-fix
- Go import helper
- Go code style guide
- Go import optimization
features:
- Automatically adds missing Go import statements
- Removes unreferenced Go import statements
- Organizes Go import blocks according to standard conventions
- Writes formatted Go code directly back to the source file
- Displays diffs of import changes before writing to file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# goimports

> Updates Go import lines, adding missing ones and removing unreferenced ones.
> More information: <https://pkg.go.dev/golang.org/x/tools/cmd/goimports>.

- Display the completed import source file:

`goimports {{path/to/file.go}}`

- Write the result back to the source file instead of `stdout`:

`goimports -w {{path/to/file.go}}`

- Display diffs and write the result back to the source file:

`goimports -w -d {{path/to/file.go}}`

- Set the import prefix string after 3rd-party packages (comma-separated list):

`goimports -local {{path/to/package1,path/to/package2,...}} {{path/to/file.go}}`
