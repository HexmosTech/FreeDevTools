---
title: "Compile XeTeX - Generate PDF Documents | Online Free DevTools by Hexmos"
name: xetex
path: /freedevtools/tldr/common/xetex
canonical: "https://hexmos.com/freedevtools/tldr/common/xetex/"
description: "Compile PDF documents with XeTeX. Generate professional-quality documents from LaTeX source. Free online tool, no registration required."
category: common
keywords:
- xetex compiler
- latex to pdf
- tex document generation
- pdf document creation
- xetex command line
- latex compiler common
- xetex pdf compilation
- tex pdf converter
- xetex document building
- latex document generation
features:
- Compile XeTeX source files into PDF documents.
- Specify an output directory for compiled PDFs.
- Halt compilation on error for debugging.
- Convert LaTeX documents to PDF format.
- Generate PDF documents from XeTeX source.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xetex

> Compile a PDF document from XeTeX source files.
> More information: <https://www.tug.org/xetex/>.

- Compile a PDF document:

`xetex {{source.tex}}`

- Compile a PDF document, specifying an output directory:

`xetex -output-directory={{path/to/directory}} {{source.tex}}`

- Compile a PDF document, exiting if errors occur:

`xetex -halt-on-error {{source.tex}}`
