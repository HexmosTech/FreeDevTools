---
title: "Expand LaTeX Files - Simplify Documents | Online Free DevTools by Hexmos"
name: latexpand
path: /freedevtools/tldr/common/latexpand
canonical: "https://hexmos.com/freedevtools/tldr/common/latexpand/"
description: "Expand LaTeX files effortlessly with latexpand. Simplify LaTeX documents by resolving includes and removing comments. Free online tool, no registration required."
category: common
keywords:
- LaTeX expander
- LaTeX preprocessor
- LaTeX include resolver
- LaTeX comment remover
- LaTeX file simplifier
- LaTeX document compiler
- TeX expander
- TeX preprocessor
- LaTeX package expander
- CLI LaTeX tool
features:
- Resolve LaTeX includes and inputs
- Remove comments from LaTeX source
- Expand LaTeX usepackage directives
- Inline BBL bibliography files
- Generate a simplified LaTeX document
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# latexpand

> Simplify LaTeX source files by removing comments and resolving `\include`s, `\input`s, etc.
> More information: <https://www.ctan.org/pkg/latexpand>.

- Simplify the specified source file and save the result to the specified output file:

`latexpand {{[-o|--output]}} {{path/to/output.tex}} {{path/to/file.tex}}`

- Do not remove comments:

`latexpand --keep-comments {{[-o|--output]}} {{path/to/output.tex}} {{path/to/file.tex}}`

- Do not expand `\include`s, `\input`s etc.:

`latexpand --keep-includes {{[-o|--output]}} {{path/to/output.tex}} {{path/to/file.tex}}`

- Expand `\usepackage`s as far as the corresponding STY files can be found:

`latexpand --expand-usepackage {{[-o|--output]}} {{path/to/output.tex}} {{path/to/file.tex}}`

- Inline the specified BBL file:

`latexpand --expand-bbl {{path/to/bibliography.bbl}} {{[-o|--output]}} {{path/to/output.tex}} {{path/to/file.tex}}`
