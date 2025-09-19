---
title: "View PDF Files - Display PDF Documents with Xpdf | Online Free DevTools by Hexmos"
name: xpdf
path: /freedevtools/tldr/common/xpdf
canonical: "https://hexmos.com/freedevtools/tldr/common/xpdf/"
description: "Display PDF documents efficiently with Xpdf. Open, zoom, and navigate PDF files using command line options. Free online tool, no registration required."
category: common
keywords:
- PDF viewer
- PDF document viewer
- Open PDF file linux
- PDF fullscreen mode
- Command line PDF tool
- PDF file reader
- Xpdf command
- Compressed PDF support
- PDF zoom control
- PDF page navigation
features:
- Open PDF files from the command line
- Navigate to a specific page within a PDF
- Display PDF in fullscreen mode
- Specify initial zoom level for PDF viewing
- Open compressed PDF files directly
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xpdf

> Portable Document Format (PDF) file viewer.
> More information: <https://www.xpdfreader.com/xpdf-man.html>.

- Open a PDF file:

`xpdf {{path/to/file.pdf}}`

- Open a specific page in a PDF file:

`xpdf {{path/to/file.pdf}} :{{page_number}}`

- Open a compressed PDF file:

`xpdf {{path/to/file.pdf.tar}}`

- Open a PDF file in fullscreen mode:

`xpdf -fullscreen {{path/to/file.pdf}}`

- Specify the initial zoom:

`xpdf -z {{75}}% {{path/to/file.pdf}}`

- Specify the initial zoom at page width or full page:

`xpdf -z {{page|width}} {{path/to/file.pdf}}`
