---
title: "MuPDF Viewer - Open and View PDF Files | Free DevTools"
name: mupdf
path: /freedevtools/tldr/common/mupdf
canonical: "https://hexmos.com/freedevtools/tldr/common/mupdf/"
description: "View PDF files easily with MuPDF Viewer. Open, zoom, and customize PDF display with command-line options. Free online tool, no registration required."
category: common
keywords:
- PDF viewer
- PDF reader
- XPS viewer
- E-book viewer
- Command-line PDF viewer
- MuPDF command
- Open PDF Linux
- View PDF macOS
- Password protected PDF
- Lightweight PDF viewer
features:
- Open PDF documents on a specified page
- Open password-protected PDF files
- Customize zoom level by specifying DPI
- Invert colors for improved readability
- Tint PDF display with custom colors
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mupdf

> A lightweight PDF, XPS, and E-book viewer.
> More information: <https://mupdf.readthedocs.io/en/latest/tools/mupdf-gl.html>.

- Open a PDF on the first page:

`mupdf {{path/to/file}}`

- Open a PDF on page 3:

`mupdf {{path/to/file}} {{3}}`

- Open a password secured PDF:

`mupdf -p {{password}} {{path/to/file}}`

- Open a PDF with an initial zoom level, specified as DPI, of 72:

`mupdf -r {{72}} {{path/to/file}}`

- Open a PDF with inverted color:

`mupdf -I {{path/to/file}}`

- Open a PDF tinted red #FF0000 (hexadecimal color syntax RRGGBB):

`mupdf -C {{FF0000}}`

- Open a PDF without anti-aliasing (0 = off, 8 = best):

`mupdf -A {{0}}`
