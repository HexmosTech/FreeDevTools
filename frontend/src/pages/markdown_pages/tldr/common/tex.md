---
title: "Generate DVI with TeX - Compile TeX Files | Free DevTools"
name: tex
path: /freedevtools/tldr/common/tex
canonical: "https://hexmos.com/freedevtools/tldr/common/tex/"
description: "Generate DVI files with TeX. Compile TeX source code into DVI documents with advanced options. Free online tool, no registration required."
category: common
keywords:
- TeX DVI generator
- TeX compiler
- LaTeX DVI creation
- DVI file compilation
- TeX source to DVI
- Command line TeX
- Linux TeX compiler
- MacOS TeX compiler
- TeX error handling
- DVI output directory
features:
- Compile TeX source files into DVI documents.
- Specify the output directory for the generated DVI file.
- Halt compilation on the first error encountered.
- Process TeX files directly from the command line.
- Generate DVI output compatible with various viewers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tex

> Compile a DVI document from TeX source files.
> More information: <https://www.tug.org/begin.html>.

- Compile a DVI document:

`tex {{source.tex}}`

- Compile a DVI document, specifying an output directory:

`tex -output-directory={{path/to/directory}} {{source.tex}}`

- Compile a DVI document, exiting on each error:

`tex -halt-on-error {{source.tex}}`
