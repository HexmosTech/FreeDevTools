---
title: "LaTeX Compiler - Generate Documents with latexmk | Online Free DevTools by Hexmos"
name: latexmk
path: /freedevtools/tldr/common/latexmk
canonical: "https://hexmos.com/freedevtools/tldr/common/latexmk/"
description: "Generate LaTeX documents automatically with latexmk. Compile, update, and clean LaTeX projects effortlessly. Free online tool, no registration required."
category: common
keywords:
- latex compiler
- latex document generator
- latex PDF compiler
- latex DVI compiler
- latex automatic compilation
- latex build tool
- latex document management
- tex compilation
- command line latex
- latexmk automation
features:
- Compile LaTeX source files into various document formats.
- Automatically run LaTeX multiple times as needed.
- Continuously update documents based on source file changes.
- Force document generation despite errors.
- Clean up temporary LaTeX files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# latexmk

> Compile LaTeX source files into finished documents.
> Automatically does multiple runs when needed.
> More information: <https://mg.readthedocs.io/latexmk.html>.

- Compile a DVI (Device Independent file) document from every source:

`latexmk`

- Compile a DVI document from a specific source file:

`latexmk {{path/to/source.tex}}`

- Compile a PDF document:

`latexmk -pdf {{path/to/source.tex}}`

- Open the document in a viewer and continuously update it whenever source files change:

`latexmk -pvc {{path/to/source.tex}}`

- Force the generation of a document even if there are errors:

`latexmk -f {{path/to/source.tex}}`

- Clean up temporary TEX files created for a specific TEX file:

`latexmk -c {{path/to/source.tex}}`

- Clean up all temporary TEX files in the current directory:

`latexmk -c`
