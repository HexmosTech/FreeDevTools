---
title: "Expand - Convert Tabs to Spaces | Online Free DevTools by Hexmos"
name: expand
path: /freedevtools/tldr/common/expand
canonical: "https://hexmos.com/freedevtools/tldr/common/expand/"
description: "Convert tabs to spaces with Expand. Adjust tab spacing and format text easily for code and documents. Free online tool, no registration required."
category: common
keywords:
- tab to space conversion
- text formatting tool
- whitespace manipulation
- expand tabs command
- file content formatting
- coreutils expand utility
- command line text editor
- linux text processing
- macOS text processing
- expand tabs online
features:
- Convert tabs to spaces in files
- Customize tab spacing for output
- Read input from standard input
- Suppress initial tab conversions
- Define specific tab stop positions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# expand

> Convert tabs to spaces.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/expand-invocation.html>.

- Convert tabs in each file to spaces, writing to `stdout`:

`expand {{path/to/file}}`

- Convert tabs to spaces, reading from `stdin`:

`expand`

- Do not convert tabs after non blanks:

`expand {{[-i|--initial]}} {{path/to/file}}`

- Have tabs a certain number of characters apart, not 8:

`expand {{[-t|--tabs]}} {{number}} {{path/to/file}}`

- Use a comma separated list of explicit tab positions:

`expand {{[-t|--tabs]}} {{1,4,6}}`
