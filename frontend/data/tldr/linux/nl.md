---
title: "Number Lines - Format Text Output | Online Free DevTools by Hexmos"
name: nl
path: "/freedevtools/tldr/linux/nl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/nl/"
description: "Format text output with the nl command, easily numbering lines in files or from stdin.  Customize numbering style, increments, separators, and more. Free online tool, no registration required."
category: linux
keywords:
  - line numbering command
  - text formatting command
  - file processing command
  - linux command line tool
  - unix command line tool
  - number lines in file
  - customize line numbering
  - stdin line numbering
  - command-line text processing
  - text output formatting
features:
  - Number lines from a file or standard input.
  - Customize line numbering increments.
  - Control the formatting of line numbers (width, justification).
  - Specify a custom separator between line numbers and text.
  - Number only specific lines matching a regular expression.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nl

> Number lines from a file or from `stdin`.
> More information: <https://manned.org/nl>.

- Number non-blank lines in a file:

`nl {{path/to/file}}`

- Read from `stdin`:

`{{command}} | nl`

- Number [a]ll body lines including blank lines or do [n]ot number body lines:

`nl {{[-b|--body-numbering]}} {{a|n}} {{path/to/file}}`

- Number only the body lines that match a basic `regex` (BRE) [p]attern:

`nl {{[-b|--body-numbering]}} p'FooBar[0-9]' {{path/to/file}}`

- Use a specific increment for line numbering:

`nl {{[-i|--line-increment]}} {{increment}} {{path/to/file}}`

- Specify the line numbering format to [r]ight or [l]eft justified, keeping leading [z]eros or [n]ot:

`nl {{[-n|--number-format]}} {{rz|ln|rn}}`

- Specify the line numbering's width (6 by default):

`nl {{[-w|--number-width]}} {{col_width}} {{path/to/file}}`

- Use a specific string to separate the line numbers from the lines (TAB by default):

`nl {{[-s|--number-separator]}} {{separator}} {{path/to/file}}`
