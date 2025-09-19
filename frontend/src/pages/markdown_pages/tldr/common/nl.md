---
title: "Number Lines - Format Text Files with nl | Online Free DevTools by Hexmos"
name: nl
path: /freedevtools/tldr/common/nl
canonical: "https://hexmos.com/freedevtools/tldr/common/nl/"
description: "Format text files with Number Lines (nl). Add line numbers to your files, customize numbering and separators. Free online tool, no registration required."
category: common
keywords:
- line number formatting
- text file numbering
- nl command linux
- nl command example
- number lines in file
- add line numbers to text
- customize line numbering
- linux command line tools
- text processing utilities
- format text files
features:
- Number non-blank lines in a file.
- Customize line numbering increment.
- Format line numbering justification and width.
- Specify a custom separator between line numbers and lines.
- Number only lines matching a specific regular expression.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nl

> Number lines from a file or from `stdin`.
> More information: <https://manned.org/nl.1p>.

- Number non-blank lines in a file:

`nl {{path/to/file}}`

- Read from `stdin`:

`{{command}} | nl -`

- Number [a]ll [b]ody lines including blank lines or do [n]ot number [b]ody lines:

`nl -b {{a|n}} {{path/to/file}}`

- Number only the [b]ody lines that match a basic `regex` (BRE) [p]attern:

`nl -b p'FooBar[0-9]' {{path/to/file}}`

- Use a specific [i]ncrement for line numbering:

`nl -i {{increment}} {{path/to/file}}`

- Specify the line numbering format to [r]ight or [l]eft justified, keeping leading [z]eros or [n]ot:

`nl -n {{rz|ln|rn}}`

- Specify the line numbering's [w]idth (6 by default):

`nl -w {{col_width}} {{path/to/file}}`

- Use a specific string to [s]eparate the line numbers from the lines (TAB by default):

`nl -s {{separator}} {{path/to/file}}`
