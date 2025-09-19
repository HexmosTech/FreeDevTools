---
title: "Count Lines of Code - Analyze LOC with CLI | Online Free DevTools by Hexmos"
name: loc
path: /freedevtools/tldr/common/loc
canonical: "https://hexmos.com/freedevtools/tldr/common/loc/"
description: "Analyze lines of code with LOC, a command-line tool for code counting. Quickly assess code size in various directories and files. Free online tool, no registration required."
category: common
keywords:
- code lines counter
- lines of code analysis
- source code statistics
- command line code analyzer
- directory LOC count
- file LOC count
- rust LOC counter
- linux code count
- macos code count
- unix lines of code
features:
- Count lines of code in a specified directory
- Analyze individual file LOC statistics
- Exclude files based on .gitignore configurations
- Count hidden files and directories with unrestricted flag
- Provide summary statistics for code size analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# loc

> Count lines of code. Written in Rust.
> More information: <https://github.com/cgag/loc>.

- Print lines of code in the current directory:

`loc`

- Print lines of code in the target directory:

`loc {{path/to/directory}}`

- Print lines of code with stats for individual files:

`loc --files`

- Print lines of code without .gitignore (etc.) files (e.g. two -u flags will additionally count hidden files and dirs):

`loc {{[-u|--unrestricted]}}`
