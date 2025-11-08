---
title: "Generate PDF from LaTeX - Compile Documents | Online Free DevTools by Hexmos"
name: pdflatex
path: "/freedevtools/tldr/common/pdflatex/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pdflatex/"
description: "Generate PDF documents easily with pdflatex. Quickly compile LaTeX source files into PDFs using command-line options. Free online tool, no registration required."
category: common
keywords:
- latex pdf generator
- latex compiler
- pdf from latex
- compile latex document
- pdflatex command
- latex to pdf conversion
- tex compiler
- latex build tools
- command line pdf generation
- latex document generation
features:
- Compile LaTeX source files into PDF documents
- Specify an output directory for compiled PDF
- Halt compilation on the first error encountered
- Customize PDF generation using command-line options
- Generate PDF from LaTeX using command-line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdflatex

> Compile a PDF document from LaTeX source files.
> More information: <https://manned.org/pdflatex>.

- Compile a PDF document:

`pdflatex {{source.tex}}`

- Compile a PDF document specifying an output directory:

`pdflatex -output-directory={{path/to/directory}} {{source.tex}}`

- Compile a PDF document, exiting on each error:

`pdflatex -halt-on-error {{source.tex}}`
