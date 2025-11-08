---
title: "Format Lua Code - Stylua Code Formatter | Online Free DevTools by Hexmos"
name: stylua
path: "/freedevtools/tldr/st/stylua/"
canonical: "https://hexmos.com/freedevtools/tldr/st/stylua/"
description: "Format Lua code instantly with Stylua. Ensure consistent coding style, improve readability, and automate code formatting. Free online tool, no registration required."
category: common
keywords:
- lua code formatter
- lua formatter
- lua code style
- stylua lua
- lua syntax checker
- lua beautifier
- lua linting
- lua coding standards
- lua auto format
- stylua configuration
features:
- Auto-formats Lua code files and directories
- Checks if a Lua file has been formatted correctly
- Uses a custom configuration file for formatting
- Formats Lua code from standard input to standard output
- Supports spaces and single quotes for formatting
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# stylua

> An opinionated Lua code formatter.
> More information: <https://github.com/JohnnyMorganz/StyLua>.

- Auto-format a file or an entire directory:

`stylua {{path/to/file_or_directory}}`

- Check if a specific file has been formatted:

`stylua --check {{path/to/file}}`

- Run with a specific configuration file:

`stylua --config-path {{path/to/config_file}} {{path/to/file}}`

- Format code from `stdin` and output to `stdout`:

`stylua - < {{path/to/file.lua}}`

- Format a file or directory using spaces and preferring single quotes:

`stylua --indent-type {{Spaces}} --quote-style {{AutoPreferSingle}} {{path/to/file_or_directory}}`
