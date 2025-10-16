---
title: "PDFFonts - Extract PDF Fonts Information | Online Free DevTools by Hexmos"
name: pdffonts
path: "/freedevtools/tldr/common/pdffonts/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pdffonts/"
description: "Extract PDF fonts information with PDFFonts. Get font details, location, and security information from your PDF files. Free online tool, no registration required."
category: common
keywords:
- pdf fonts extractor
- pdf font analysis
- pdf font viewer
- linux pdf fonts
- macos pdf fonts
- windows pdf fonts
- command line pdf fonts
- pdf font information
- pdf security information
- xpdf pdffonts
features:
- Extract font information from PDF files
- Specify user or owner password for secure PDFs
- Determine the location of fonts used in PDF rasterization
- Determine the location of fonts used in PDF to PostScript conversion
- Display security restrictions and font details
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdffonts

> Portable Document Format (PDF) file fonts information viewer.
> More information: <https://www.xpdfreader.com/pdffonts-man.html>.

- Print PDF file fonts information:

`pdffonts {{path/to/file.pdf}}`

- Specify user password for PDF file to bypass security restrictions:

`pdffonts -upw {{password}} {{path/to/file.pdf}}`

- Specify owner password for PDF file to bypass security restrictions:

`pdffonts -opw {{password}} {{path/to/file.pdf}}`

- Print additional information on location of the font that will be used when the PDF file is rasterized:

`pdffonts -loc {{path/to/file.pdf}}`

- Print additional information on location of the font that will be used when the PDF file is converted to PostScript:

`pdffonts -locPS {{path/to/file.pdf}}`
