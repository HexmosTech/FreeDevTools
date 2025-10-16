---
title: "Highlight Syntax - Chroma Code Formatter | Online Free DevTools by Hexmos"
name: chroma
path: "/freedevtools/tldr/common/chroma/"
canonical: "https://hexmos.com/freedevtools/tldr/common/chroma/"
description: "Highlight syntax with Chroma, a versatile code formatter for various programming languages. Effortlessly format code snippets for web or documentation. Free online tool, no registration required."
category: common
keywords:
- syntax highlighter
- code formatter
- source code highlighter
- code syntax highlighting
- language syntax formatter
- terminal syntax highlighting
- code to HTML converter
- chroma highlighter
- cli syntax highlighting
- command line highlighter
features:
- Highlight code from files or standard input
- Support for multiple programming languages via lexers
- Output code in various formats including HTML and SVG
- Customize highlighting styles with predefined themes
- List available lexers, styles and formatters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chroma

> A general-purpose syntax highlighter.
> The `--lexer` option is usually unnecessary, as it will be automatically determined based on the file extension.
> More information: <https://github.com/alecthomas/chroma>.

- Highlight source code from a file with the Python lexer and output to `stdout`:

`chroma --lexer {{python}} {{path/to/source_file.py}}`

- Highlight source code from a file with the Go lexer and output to an HTML file:

`chroma --lexer {{go}} --formatter {{html}} {{path/to/source_file.go}} > {{path/to/target_file.html}}`

- Highlight source code from `stdin` with the C++ lexer and output to an SVG file, using the Monokai style:

`{{command}} | chroma --lexer {{c++}} --formatter {{svg}} --style {{monokai}} > {{path/to/target_file.svg}}`

- List available lexers, styles and formatters:

`chroma --list`
