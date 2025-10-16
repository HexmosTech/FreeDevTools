---
title: "Cut Data - Extract Fields with cut | Online Free DevTools by Hexmos"
name: cut
path: "/freedevtools/tldr/common/cut/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cut/"
description: "Extract fields and characters with the cut command.  Process text files efficiently using various delimiters and options. Free online tool, no registration required."
category: common
keywords:
  - text field extraction
  - command line cut
  - data field selection
  - character range extraction
  - linux cut command
  - text processing cut
  - data manipulation cut
  - file data extraction
  - unix cut command
  - string manipulation cut
features:
  - Extract specific character ranges from text.
  - Select fields based on delimiters (e.g., comma, tab).
  - Process data from standard input or files.
  - Handle NUL-terminated lines for advanced scenarios.
  - Define custom field and character ranges for precise extraction.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cut

> Cut out fields from `stdin` or files.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/cut-invocation.html>.

- Print a specific [c]haracter/[f]ield range of each line:

`{{command}} | cut --{{characters|fields}} {{1|1,10|1-10|1-|-10}}`

- Print a field range of each line with a specific delimiter:

`{{command}} | cut {{[-d|--delimiter]}} "{{delimiter}}" {{[-f|--fields]}} {{1|1,10|1-10|1-|-10}}`

- Print a character range of each line of the specific file:

`cut {{[-c|--characters]}} {{1}} {{path/to/file}}`

- Print specific fields of `NUL` terminated lines (e.g. as in `find . -print0`) instead of newlines:

`{{command}} | cut {{[-z|--zero-terminated]}} {{[-f|--fields]}} {{1}}`
