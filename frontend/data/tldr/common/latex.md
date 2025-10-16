---
title: "Compile LaTeX - Generate DVI Documents | Online Free DevTools by Hexmos"
name: latex
path: "/freedevtools/tldr/common/latex/"
canonical: "https://hexmos.com/freedevtools/tldr/common/latex/"
description: "Generate DVI documents with LaTeX. Compile TeX files to DVI format using command line. Free online tool, no registration required."
category: common
keywords:
- latex compiler
- tex to dvi
- dvi generator
- latex command line
- tex compiler online
- linux latex
- macos latex
- dvi format converter
- latex source code
- command line latex
features:
- Compile LaTeX source files to DVI format.
- Specify the output directory for the compiled DVI file.
- Halt compilation on the first error encountered.
- Generate DVI documents from TeX source.
- Control error handling during LaTeX compilation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# latex

> Compile a DVI document from LaTeX source files.
> More information: <https://www.latex-project.org>.

- Compile a DVI document:

`latex {{source.tex}}`

- Compile a DVI document, specifying an output directory:

`latex -output-directory={{path/to/directory}} {{source.tex}}`

- Compile a DVI document, exiting on each error:

`latex -halt-on-error {{source.tex}}`
