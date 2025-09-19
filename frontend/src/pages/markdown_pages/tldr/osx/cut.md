---
title: "Cut - Extract Text Fields | Online Free DevTools by Hexmos"
name: cut
path: /freedevtools/tldr/osx/cut
canonical: "https://hexmos.com/freedevtools/tldr/osx/cut/"
description: "Extract text fields with Cut. Effortlessly manipulate text by specifying delimiters and field ranges. Free online tool, no registration required."
category: osx
keywords:
- text extraction
- text field extraction
- cut command line
- cut osx
- cut macos
- text delimiter
- field separator
- character range extraction
- cut text files
- cut stdin
features:
- Extract specific character ranges from lines
- Extract fields based on a delimiter
- Process standard input (stdin)
- Work directly with files
- Define custom field delimiters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cut

> Cut out fields from `stdin` or files.
> More information: <https://keith.github.io/xcode-man-pages/cut.1.html>.

- Print a specific character/field range of each line:

`{{command}} | cut -{{c|f}} {{1|1,10|1-10|1-|-10}}`

- Print a field range of each line with a specific delimiter:

`{{command}} | cut -d "{{,}}" -f {{1}}`

- Print a character range of each line of a specific file:

`cut -c {{1}} {{path/to/file}}`
