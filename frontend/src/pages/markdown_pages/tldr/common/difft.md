---
title: "Compare Files - Syntax Aware Diff Tool | Online Free DevTools by Hexmos"
name: difft
path: /freedevtools/tldr/common/difft
canonical: "https://hexmos.com/freedevtools/tldr/common/difft/"
description: "Compare files based on syntax with difft, a syntax-aware diff tool. Find differences, ignore comments, and customize display. Free online tool, no registration required."
category: common
keywords:
- syntax aware diff
- code comparison
- file difference analyzer
- syntax highlighting diff
- semantic diff tool
- command line diff
- code review tool
- difftastic
- file comparison linux
- directory comparison
features:
- Compare files or directories syntactically.
- Ignore comments during file comparison.
- Customize diff display modes (side-by-side, inline, JSON).
- Enable or disable syntax highlighting.
- Detect only presence of differences without detailed output.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# difft

> Compare files or directories based on the syntax of the programming language.
> See also: `delta`, `diff`.
> More information: <https://difftastic.wilfred.me.uk/introduction.html>.

- Compare two files or directories:

`difft {{path/to/file_or_directory1}} {{path/to/file_or_directory2}}`

- Only report the presence of differences between the files:

`difft --check-only {{path/to/file1}} {{path/to/file2}}`

- Specify the display mode (default is `side-by-side`):

`difft --display {{side-by-side|side-by-side-show-both|inline|json}} {{path/to/file1}} {{path/to/file2}}`

- Ignore comments when comparing:

`difft --ignore-comments {{path/to/file1}} {{path/to/file2}}`

- Enable/Disable syntax highlighting of source code (default is `on`):

`difft --syntax-highlight {{on|off}} {{path/to/file1}} {{path/to/file2}}`

- Do not output anything at all if there are no differences between files:

`difft --skip-unchanged {{path/to/file_or_directory1}} {{path/to/file_or_directory2}}`

- Print all programming languages supported by the tool, along with their extensions:

`difft --list-languages`
