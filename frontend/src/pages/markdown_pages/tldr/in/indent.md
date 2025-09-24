---
title: "C/C++ Code Formatter - Indent Code Online | Free DevTools by Hexmos"
name: indent
path: /freedevtools/tldr/in/indent
canonical: "https://hexmos.com/freedevtools/tldr/in/indent/"
description: "Format C/C++ code with the Indent tool. Easily adjust whitespace, adhere to style guides (Linux, GNU, K&R), and improve code readability with automatic code formatting. Free online tool, no registration required."
category: in
keywords:
  - C++ code formatter
  - C code formatter
  - indent C++ code
  - indent C code
  - Linux C++ code style
  - GNU C++ code style
  - K&R C++ code style
  - source code indentation tool
  - command line code formatter
  - automatic code formatting tool
features:
  - Format C/C++ source code according to Linux, GNU, or K&R style guides.
  - Automatically back up original files before formatting.
  - Customize indentation level and line length for precise control.
  - Save formatted code to new files, preserving the original.
  - Support for command-line usage with various formatting options.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
