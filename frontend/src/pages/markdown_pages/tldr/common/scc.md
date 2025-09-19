---
title: "Count Lines of Code - Analyze Source Code with scc | Online Free DevTools by Hexmos"
name: scc
path: /freedevtools/tldr/common/scc
canonical: "https://hexmos.com/freedevtools/tldr/common/scc/"
description: "Analyze lines of code with scc, a fast and accurate code counter. Get detailed source code metrics for various languages. Free online tool, no registration required."
category: common
keywords:
- Source code analysis
- Code line counter
- LoC counter
- Go code analysis
- Software metrics
- Code statistics
- Code complexity analysis
- Directory code counter
- File extension code counter
- Command line code counter
features:
- Count lines of code in various programming languages
- Analyze code complexity and generate metrics
- Filter files by extension for targeted analysis
- Exclude directories for refined code counting
- Sort output by files, name, lines, or code metrics
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scc

> Count lines of code. Written in Go.
> More information: <https://github.com/boyter/scc>.

- Print lines of code in the current directory:

`scc`

- Print lines of code in the target directory:

`scc {{path/to/directory}}`

- Display output for every file:

`scc --by-file`

- Display output using a specific output format (defaults to `tabular`):

`scc {{[-f|--format]}} {{tabular|wide|json|csv|cloc-yaml|html|html-table}}`

- Only count files with specific file extensions:

`scc {{[-i|--include-ext]}} {{go,java,js}}`

- Exclude directories from being counted:

`scc --exclude-dir {{.git,.hg}}`

- Display output and sort by column (defaults to by files):

`scc {{[-s|--sort]}} {{files|name|lines|blanks|code|comments|complexity}}`

- Display help:

`scc {{[-h|--help]}}`
