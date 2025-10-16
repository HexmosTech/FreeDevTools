---
title: "Convert Documents - Pandoc File Converter | Online Free DevTools by Hexmos"
name: pandoc
path: "/freedevtools/tldr/common/pandoc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pandoc/"
description: "Convert documents easily with Pandoc file converter. Effortlessly transform Markdown, HTML, LaTeX and more. Free online tool, no registration required."
category: common
keywords:
- markdown converter
- document converter
- file converter
- pandoc converter
- markdown to pdf
- html to pdf
- latex converter
- ebook converter
- document transformation
- cross-platform document conversion
features:
- Convert documents between various formats (Markdown, HTML, LaTeX, etc.)
- Transform documents using Lua scripts
- Convert Markdown to PDF using specified PDF engine
- Specify input and output formats manually
- Create standalone files with appropriate headers/footers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pandoc

> Convert documents between various formats.
> More information: <https://pandoc.org/MANUAL.html>.

- Convert a Markdown file to PDF using `pdflatex` (the formats are determined by file extensions):

`pandoc {{path/to/input.md}} {{[-o|--output]}} {{path/to/output.pdf}}`

- Convert a Markdown file to PDF using the specified PDF engine:

`pandoc {{path/to/input.md}} --pdf-engine {{tectonic|weasyprint|typst|...}} {{[-o|--output]}} {{path/to/output.pdf}}`

- Convert to a standalone file with the appropriate headers/footers (for LaTeX, HTML, etc.):

`pandoc {{path/to/input.md}} {{[-s|--standalone]}} {{[-o|--output]}} {{path/to/output.html}}`

- Manually specify formats (overriding automatic format detection using the filename extension, or when there is no extension):

`pandoc {{[-f|--from]}} {{docx|...}} {{path/to/input}} {{[-t|--to]}} {{pdf|...}} {{[-o|--output]}} {{path/to/output}}`

- Transform a document using a Lua script (see <https://pandoc.org/lua-filters.html> for more information):

`pandoc {{path/to/input}} {{[-L|--lua-filter]}} {{path/to/filter.lua}} {{[-o|--output]}} {{path/to/output}}`

- List all supported input formats:

`pandoc --list-input-formats`

- List all supported output formats:

`pandoc --list-output-formats`
