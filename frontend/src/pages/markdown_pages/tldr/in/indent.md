---
title: "Format C/C++ Code - Indent Tool | Online Free DevTools by Hexmos"
name: indent
path: /freedevtools/tldr/in/indent
canonical: "https://hexmos.com/freedevtools/tldr/in/indent/"
description: "Format C/C++ code with Indent Tool. Easily adjust whitespace, adhere to style guides, and improve code readability. Free online tool, no registration required."
category: common
keywords:
- C/C++ code formatter
- code indentation tool
- Linux code style
- GNU code style
- Kernighan & Ritchie style
- source code indentation
- automatic code formatting
- whitespace control
- command line indent
- C++ indent
features:
- Format C/C++ source code
- Apply Linux, GNU, or K&R style guidelines
- Automatically backup original files
- Save indented code to new files
- Customize indentation level and line length
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# indent

> Change the appearance of a C/C++ program by inserting or deleting whitespace.
> More information: <https://www.gnu.org/software/indent/manual/indent/Option-Summary.html>.

- Format C/C++ source according to the Linux style guide, automatically back up the original files, and replace with the indented versions:

`indent {{[-linux|--linux-style]}} {{path/to/source.c}} {{path/to/another_source.c}}`

- Format C/C++ source according to the GNU style, saving the indented version to a different file:

`indent {{[-gnu|--gnu-style]}} {{path/to/source.c}} -o {{path/to/indented_source.c}}`

- Format C/C++ source according to the style of Kernighan & Ritchie (K&R), no tabs, 3 spaces per indent, and wrap lines at 120 characters:

`indent {{[-kr|--k-and-r-style]}} {{[-il|--indent-level]}}3 {{[-nut|--no-tabs]}} {{[-l|--line-length]}}120 {{path/to/source.c}} -o {{path/to/indented_source.c}}`
