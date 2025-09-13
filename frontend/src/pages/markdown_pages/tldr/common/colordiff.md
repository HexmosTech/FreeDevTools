---
title: "Colordiff - Highlight Diff Output | Free DevTools"
name: colordiff
path: /freedevtools/tldr/common/colordiff
canonical: "https://hexmos.com/freedevtools/tldr/common/colordiff/"
description: "Highlight diff output with Colordiff. Visualize changes in files with syntax highlighting and customizable color schemes. Free online tool, no registration required."
category: common
keywords:
- colored diff output
- syntax highlighting diff
- diff visualizer
- colored text diff
- command line diff highlighter
- colordiff linux
- colordiff macos
- file comparison tool
- whitespace diff
- case insensitive diff
features:
- Compare files with syntax highlighting
- Output diff in two columns
- Ignore case differences during comparison
- Report when files are identical
- Ignore whitespace during comparison
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# colordiff

> A wrapper around `diff` that produces the same output but with pretty syntax highlighting.
> Color schemes can be customized.
> More information: <https://github.com/kimmel/colordiff>.

- Compare files:

`colordiff {{file1}} {{file2}}`

- Output in two columns:

`colordiff -y {{file1}} {{file2}}`

- Ignore case differences in file contents:

`colordiff -i {{file1}} {{file2}}`

- Report when two files are the same:

`colordiff -s {{file1}} {{file2}}`

- Ignore whitespace:

`colordiff -w {{file1}} {{file2}}`
