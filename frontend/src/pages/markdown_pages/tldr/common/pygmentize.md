---
title: "Highlight Syntax - Format Code with Pygmentize | Online Free DevTools by Hexmos"
name: pygmentize
path: /freedevtools/tldr/common/pygmentize
canonical: "https://hexmos.com/freedevtools/tldr/common/pygmentize/"
description: "Highlight syntax with Pygmentize. Format and colorize code snippets in various languages, directly from the command line. Free online tool, no registration required."
category: common
keywords:
- syntax highlighting
- code formatter
- pygments highlighter
- command line syntax
- source code formatter
- code colorizer
- language lexer
- HTML code output
- linux syntax
- macos syntax
features:
- Highlight code syntax based on file extension
- Explicitly specify the language for highlighting
- List available lexers for various languages
- Output highlighted code in HTML format
- Customize output format with additional options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pygmentize

> Python-based syntax highlighter.
> More information: <https://pygments.org/docs/cmdline/>.

- Highlight file syntax and print to `stdout` (language is inferred from the file extension):

`pygmentize {{file.py}}`

- Explicitly set the language for syntax highlighting:

`pygmentize -l {{javascript}} {{input_file}}`

- List available lexers (processors for input languages):

`pygmentize -L lexers`

- Save output to a file in HTML format:

`pygmentize -f html -o {{output_file.html}} {{input_file.py}}`

- List available output formats:

`pygmentize -L formatters`

- Output an HTML file, with additional formatter options (full page, with line numbers):

`pygmentize -f html -O "full,linenos=True" -o {{output_file.html}} {{input_file}}`
