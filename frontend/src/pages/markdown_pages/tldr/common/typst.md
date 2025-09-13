---
title: "Compile Typst to PDF - Generate Docs | Free DevTools"
name: typst
path: /freedevtools/tldr/common/typst
canonical: "https://hexmos.com/freedevtools/tldr/common/typst/"
description: "Compile documents with Typst, a powerful typesetting language. Generate professional PDF files from Typst markup. Free online tool, no registration required."
category: common
keywords:
- typst compiler
- typst to pdf
- document compilation
- typesetting language
- markdown to pdf
- typst documentation
- typst command line
- typst fonts
- typst template
- typst watch mode
features:
- Compile Typst source code into PDF documents.
- Watch files for changes and automatically recompile.
- Initialize new Typst projects from templates.
- List available fonts in specified directories.
- Customize output paths for generated PDFs.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# typst

> Compile a Typst file to PDF.
> Note: Specifying the output location is optional.
> More information: <https://github.com/typst/typst>.

- Initialize a new Typst project in a given directory using a template (e.g., `@preview/charged-ieee`):

`typst init "{{template}}" {{path/to/directory}}`

- Compile a Typst file:

`typst compile {{path/to/source.typ}} {{path/to/output.pdf}}`

- Watch a Typst file and recompile on changes:

`typst watch {{path/to/source.typ}} {{path/to/output.pdf}}`

- List all discoverable fonts in the system and the given directory:

`typst --font-path {{path/to/fonts_directory}} fonts`
