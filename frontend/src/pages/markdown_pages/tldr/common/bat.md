---
title: "Highlight Files - Format Files with Bat | Online Free DevTools by Hexmos"
name: bat
path: "/freedevtools/tldr/common/bat"
canonical: "https://hexmos.com/freedevtools/tldr/common/bat/"
description: "Format files with Bat, a syntax highlighting cat clone. Enhance readability and integrate Git info with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- Syntax Highlighting Files
- Colorized File Output
- Git Integration Cat Clone
- Command Line File Viewer
- bat command linux
- bat command macos
- File Formatting Command
- Text File Highlighter
- Code Syntax Highlighting
- Terminal File Viewer
features:
- Display files with syntax highlighting.
- Integrate with Git to show modified lines.
- Highlight specific lines for focused viewing.
- Show non-printable characters in file content.
- Customize output style and disable paging.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bat

> Print and concatenate files.
> A `cat` clone with syntax highlighting and Git integration.
> More information: <https://github.com/sharkdp/bat>.

- Pretty print the contents of one or more files to `stdout`:

`bat {{path/to/file1 path/to/file2 ...}}`

- Concatenate several files into the target file:

`bat {{path/to/file1 path/to/file2 ...}} > {{path/to/target_file}}`

- Remove decorations and disable paging (`--style plain` can be replaced with `-p`, or both options with `-pp`):

`bat --style plain --pager never {{path/to/file}}`

- Highlight a specific line or a range of lines with a different background color:

`bat {{[-H|--highlight-line]}} {{10|5:10|:10|10:|10:+5}} {{path/to/file}}`

- Show non-printable characters like space, tab or newline:

`bat {{[-A|--show-all]}} {{path/to/file}}`

- Remove all decorations except line numbers in the output:

`bat {{[-n|--number]}} {{path/to/file}}`

- Syntax highlight a JSON file by explicitly setting the language:

`bat {{[-l|--language]}} json {{path/to/file.json}}`

- Display all supported languages:

`bat {{[-L|--list-languages]}}`
