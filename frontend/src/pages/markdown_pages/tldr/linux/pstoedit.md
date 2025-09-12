---
title: "Convert PDF Files - Format Images with pstoedit | Free DevTools"
name: pstoedit
path: /freedevtools/tldr/linux/pstoedit
canonical: "https://hexmos.com/freedevtools/tldr/linux/pstoedit/"
description: "Format images from PDF files with pstoedit, a powerful PDF converter. Extract specific pages, and convert to PNG or JPG formats. Free online tool, no registration required."
category: linux
keywords:
- PDF file converter
- PDF to image conversion
- PDF to PNG
- PDF to JPG
- Linux PDF tools
- Command line PDF converter
- PDF page extractor
- Batch PDF conversion
- Image format conversion
- pstoedit linux
features:
- Convert PDF pages to PNG format
- Convert PDF pages to JPEG format
- Extract specific pages from PDF documents
- Convert multiple PDF pages to numbered images
- Support batch processing for PDF conversion
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pstoedit

> Convert PDF files into various image formats.
> More information: <http://www.pstoedit.net>.

- Convert a PDF page to PNG or JPEG format:

`pstoedit -page {{page_number}} -f magick {{path/to/file.pdf}} {{page.png|page.jpg}}`

- Convert multiple PDF pages to numbered images:

`pstoedit -f magick {{path/to/file}} {{page%d.png|page%d.jpg}}`
