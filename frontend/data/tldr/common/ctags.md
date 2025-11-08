---
title: "Generate ctags - Index Code Objects | Online Free DevTools by Hexmos"
name: ctags
path: "/freedevtools/tldr/common/ctags/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ctags/"
description: "Generate indexes with ctags, a powerful tool for navigating code. Quickly find functions and classes across projects. Free online tool, no registration required."
category: common
keywords:
- ctags index
- source code index generator
- code navigation tool
- programming language indexer
- ctags file
- ctags linux
- ctags macos
- ctags windows
- ctags documentation
- ctags tutorial
features:
- Generate tag files for source code
- Index various programming languages
- Recursively generate tags in directories
- Output tags in JSON format
- Specify fields to include in the output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ctags

> Generate an index (or tag) file of language objects found in source files for many popular programming languages.
> More information: <https://docs.ctags.io/en/latest/man/ctags.1.html>.

- Generate tags for a single file, and output them to a file named "tags" in the current directory, overwriting the file if it exists:

`ctags {{path/to/file}}`

- Generate tags for all files in the current directory, and output them to a specific file, overwriting the file if it exists:

`ctags -f {{path/to/file}} *`

- Generate tags for all files in the current directory and all subdirectories:

`ctags --recurse`

- Generate tags for a single file, and output them with start line number and end line number in JSON format:

`ctags --fields=+ne --output-format=json {{path/to/file}}`
