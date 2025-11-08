---
title: "Generate LS_COLOR - Style LS Commands | Online Free DevTools by Hexmos"
name: dircolors
path: "/freedevtools/tldr/common/dircolors/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dircolors/"
description: "Generate LS_COLOR environment variables with dircolors. Style `ls` commands, customize terminal colors, and improve file readability. Free online tool, no registration required."
category: common
keywords:
- LS_COLOR generator
- terminal color customization
- ls command styling
- dircolors configuration
- linux terminal colors
- bash ls colors
- zsh ls colors
- directory color scheme
- coreutils dircolors
- file type color coding
features:
- Output commands to set LS_COLOR with default colors
- Display filetypes with corresponding `ls` colors
- Use custom colors from a specified file
- Generate commands for Bourne shell
- Generate commands for C shell
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dircolors

> Output commands to set the LS_COLOR environment variable and style `ls`, `dir`, etc.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/dircolors-invocation.html>.

- Output commands to set LS_COLOR using default colors:

`dircolors`

- Display each filetype with the color they would appear in `ls`:

`dircolors --print-ls-colors`

- Output commands to set LS_COLOR using colors from a file:

`dircolors {{path/to/file}}`

- Output commands for Bourne shell:

`dircolors {{[-b|--bourne-shell]}}`

- Output commands for C shell:

`dircolors {{[-c|--c-shell]}}`

- View the default colors for file types and extensions:

`dircolors {{[-p|--print-database]}}`
