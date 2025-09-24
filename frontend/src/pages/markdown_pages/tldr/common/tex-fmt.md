---
title: "Format LaTeX - Format LaTeX Source Code | Online Free DevTools by Hexmos"
name: tex-fmt
path: /freedevtools/tldr/common/tex-fmt
canonical: "https://hexmos.com/freedevtools/tldr/common/tex-fmt/"
description: "Format LaTeX documents efficiently with tex-fmt. Improve LaTeX code readability and maintainability. Free online tool, no registration required."
category: common
keywords:
- latex formatter
- latex beautifier
- latex code style
- tex formatter
- tex code beautifier
- tex code style
- latex editor linux
- latex editor macos
- tex editor linux
- tex editor macos
features:
- Format LaTeX files and overwrite originals
- Check LaTeX files for correct formatting
- Format LaTeX from stdin to stdout
- Improve LaTeX code readability
- Maintain consistent LaTeX code style
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tex-fmt

> Format LaTeX source code.
> More information: <https://github.com/WGUNDERWOOD/tex-fmt>.

- Format a file, overwriting the original:

`tex-fmt {{path/to/file.tex}}`

- Check if a file is correctly formatted:

`tex-fmt --check {{path/to/file.tex}}`

- Format a file read from `stdin` and print to `stdout`:

`cat {{path/to/file.tex}} | tex-fmt --stdin`
