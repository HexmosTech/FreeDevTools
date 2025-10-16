---
title: "Convert PDF Files - Mutool PDF Converter | Online Free DevTools by Hexmos"
name: mutool
path: "/freedevtools/tldr/common/mutool/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mutool/"
description: "Convert PDF files easily with Mutool. Query information, extract data, and manipulate PDF content with this command-line utility. Free online tool, no registration required."
category: common
keywords:
- pdf converter
- pdf manipulation
- pdf extract data
- pdf query information
- pdf merge files
- command line pdf tools
- pdf to image conversion
- pdf to text conversion
- linux pdf tools
- mutool pdf editor
features:
- Convert PDF pages to PNG images
- Extract text content from PDF files
- Merge multiple PDF files into a single PDF
- Query information about PDF content and metadata
- Extract images, fonts, and resources from PDF files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mutool

> Convert, query information and extract data from PDF files.
> More information: <https://mupdf.readthedocs.io/en/latest/tools/mutool.html>.

- Convert a range of pages to PNGs (Note: `%nd` in the output placeholder must be replaced with a print modifier like `%d` or `%2d`):

`mutool convert -o {{path/to/output%nd.png}} {{path/to/input.pdf}} {{1-10}}`

- Convert one or more pages of a PDF into text in `stdout`:

`mutool draw -F txt {{path/to/input.pdf}} {{2,3,5,...}}`

- Concatenate multiple PDF files:

`mutool merge -o {{path/to/output.pdf}} {{path/to/input1.pdf path/to/input2.pdf ...}}`

- Query information about all content embedded in a PDF:

`mutool info {{path/to/input.pdf}}`

- Extract all images, fonts and resources embedded in a PDF to the current directory:

`mutool extract {{path/to/input.pdf}}`

- Show the outline (table of contents) of a PDF:

`mutool show {{path/to/input.pdf}} outline`
