---
title: "Format Terminal Output - Rich CLI | Online Free DevTools by Hexmos"
name: rich
path: /freedevtools/tldr/common/rich
canonical: "https://hexmos.com/freedevtools/tldr/common/rich/"
description: "Format terminal output with Rich, enhancing readability and debugging.  Syntax highlight code, add line numbers and use themes easily. Free online tool, no registration required."
category: common
keywords:
- rich cli formatter
- rich terminal output
- python syntax highlighting
- command line formatter
- terminal themes
- rich text formatting
- console output styling
- terminal enhancement cli
- rich markdown viewer
- rich text export html
features:
- Display files with syntax highlighting and formatting in the terminal
- Apply themes to terminal output for enhanced readability
- Export files to HTML with applied formatting
- Display content from URLs with syntax highlighting and pagination
- Customize text alignment and line width for precise terminal presentation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rich

> A toolbox for fancy output in the terminal.
> More information: <https://github.com/Textualize/rich-cli>.

- Display a file with syntax highlighting:

`rich {{path/to/file.py}}`

- Add line numbers, and indentation guides:

`rich {{path/to/file.py}} --line-numbers --guides`

- Apply a theme:

`rich {{path/to/file.py}} --theme {{monokai}}`

- Display a file in an interactive pager:

`rich {{path/to/file.py}} --pager`

- Display contents from a URL:

`rich {{https://raw.githubusercontent.com/Textualize/rich-cli/main/README.md}} --markdown --pager`

- Export a file as HTML:

`rich {{path/to/file.md}} --export-html {{path/to/file.html}}`

- Display text with formatting tags, custom alignment, and line width:

`rich --print "{{Hello [green on black]Stylized[/green on black] [bold]World[/bold]}}" --{{left|center|right}} --width {{10}}`
