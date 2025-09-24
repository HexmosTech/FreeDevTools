---
title: "Syntax Aware Diff - Compare Files with difft | Online Free DevTools by Hexmos"
name: difft
path: /freedevtools/tldr/common/difft
canonical: "https://hexmos.com/freedevtools/tldr/common/difft/"
description: "Compare files syntactically with difft, a powerful syntax-aware diff tool.  Quickly identify code differences, ignore comments, and customize the display. Free online tool, no registration required."
category: common
keywords:
  - syntax aware diff tool
  - code comparison tool
  - file difference analyzer
  - syntax highlighting diff
  - semantic diff command
  - command line file comparison
  - code review diff tool
  - difftastic alternative
  - directory comparison tool
  - file comparison utility
features:
  - Compare files and directories with syntax awareness.
  - Ignore comments for cleaner comparisons.
  - Customize output display (side-by-side, inline, JSON).
  - Toggle syntax highlighting for improved readability.
  - Efficiently check for differences without detailed output.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
