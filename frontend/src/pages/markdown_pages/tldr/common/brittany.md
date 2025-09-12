---
title: "Format Haskell Code - Pretty-Print with Brittany | Free DevTools"
name: brittany
path: /freedevtools/tldr/common/brittany
canonical: "https://hexmos.com/freedevtools/tldr/common/brittany/"
description: "Format Haskell code easily with Brittany. Enhance code readability and maintainability using command-line options. Free online tool, no registration required."
category: common
keywords:
- haskell formatter
- haskell code beautifier
- code formatting haskell
- haskell code style
- brittany haskell
- haskell linting
- haskell language tool
- hs code formatter
- haskell code formatter online
- haskell code formatter command line
features:
- Format Haskell source code to stdout
- Format Haskell files in-place with write mode
- Check Haskell code for formatting changes
- Customize indentation and line length
- Apply formatting based on a configuration file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# brittany

> Pretty-print Haskell source files.
> More information: <https://github.com/lspitzner/brittany#readme>.

- Format a Haskell source file and print the result to `stdout`:

`brittany {{path/to/file.hs}}`

- Format all Haskell source files in the current directory in-place:

`brittany --write-mode=inplace {{*.hs}}`

- Check whether a Haskell source file needs changes and indicate the result through the programme's exit code:

`brittany --check-mode {{path/to/file.hs}}`

- Format a Haskell source file using the specified amount of spaces per indentation level and line length:

`brittany --indent {{4}} --columns {{100}} {{path/to/file.hs}}`

- Format a Haskell source file according to the style defined in the specified configuration file:

`brittany --config-file {{path/to/config.yaml}} {{path/to/file.hs}}`
