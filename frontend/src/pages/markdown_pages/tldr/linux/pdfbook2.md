---
title: "Create PDF Booklets - Format PDF for Printing | Online Free DevTools by Hexmos"
name: pdfbook2
path: /freedevtools/tldr/linux/pdfbook2
canonical: "https://hexmos.com/freedevtools/tldr/linux/pdfbook2/"
description: "Create printable PDF booklets with pdfbook2. Format PDF files for double-sided printing and manage margins. Free online tool, no registration required."
category: linux
keywords:
- PDF booklet creator
- PDF formatting tool
- Linux PDF printer
- Double sided PDF printing
- PDF margin adjustment
- Printable PDF generator
- PDF book signature
- PDF to booklet converter
- Command line PDF tools
- Landscape PDF format
features:
- Create double-sided printable PDF booklets
- Adjust inner margins for booklet printing
- Set paper size for PDF booklets
- Organize large PDFs with print signatures
- Format PDF for landscape printing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdfbook2

> Create a double sided printable PDF booklet from a PDF.
> Note: The booklet needs to be printed double-sided in landscape mode, flipped on the long edge.
> More information: <https://github.com/jenom/pdfbook2#examples>.

- Create a booklet named `file-book.pdf` with sane defaults:

`pdfbook2 {{path/to/file.pdf}}`

- Create a booklet with the paper size set to A4:

`pdfbook2 {{[-p|--paper]}} a4paper {{path/to/file.pdf}}`

- Create a booklet that has the inner margin reduced to 50 pixels (default = 150px):

`pdfbook2 {{[-p|--paper]}} a4paper {{[-i|--inner-margin]}} 50 {{path/to/file.pdf}}`

- Organize a large file with print signatures for binding into a larger booklet (signatures must be divisible by 4):

`pdfbook2 {{[-p|--paper]}} a4paper --signature {{24}} {{path/to/file.pdf}}`
