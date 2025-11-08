---
title: "Create PDF Documents - Compile TeX Files | Online Free DevTools by Hexmos"
name: pdftex
path: "/freedevtools/tldr/common/pdftex/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pdftex/"
description: "Create PDF documents with pdftex. Compile TeX source files to PDF output with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- TeX to PDF compilation
- PDF generation from TeX
- command line PDF creator
- pdftex compiler
- TeX document creation
- Linux PDF generation
- macOS PDF compilation
- TeX typesetting
- PDF file output
- scientific document creation
features:
- Compile TeX source files into PDF documents
- Specify an output directory for the generated PDF
- Halt compilation immediately upon encountering an error
- Convert TeX files to PDF format on Linux
- Supports command-line PDF creation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdftex

> Compile a PDF document from TeX source files.
> More information: <https://www.tug.org/applications/pdftex/>.

- Compile a PDF document:

`pdftex {{source.tex}}`

- Compile a PDF document, specifying an output directory:

`pdftex -output-directory={{path/to/directory}} {{source.tex}}`

- Compile a PDF document, exiting on each error:

`pdftex -halt-on-error {{source.tex}}`
