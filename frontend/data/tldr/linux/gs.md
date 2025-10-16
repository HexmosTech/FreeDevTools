---
title: "GhostScript PDF Control - Manage PDFs with gs | Online Free DevTools by Hexmos"
name: gs
path: "/freedevtools/tldr/linux/gs/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/gs/"
description: "Control and manipulate PDF files with GhostScript. Convert, merge, and extract pages from PDFs effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - pdf manipulation gs
  - pdf conversion gs
  - pdf merging gs
  - pdf splitting gs
  - ghostscript pdf commands
  - postscript to pdf conversion
  - pdf image extraction gs
  - gs pdf viewer
  - ebook pdf optimization gs
  - command-line pdf processing
features:
  - View PDF files from the command line.
  - Reduce PDF file size by optimizing images.
  - Convert PDF pages to JPEG images.
  - Extract specific pages from a PDF file.
  - Merge multiple PDF files into a single document.
  - Convert PostScript files to PDF format.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gs

> GhostScript, a PDF and PostScript interpreter.
> More information: <https://manned.org/gs>.

- To view a file:

`gs -dQUIET -dBATCH {{file.pdf}}`

- Reduce PDF file size to 150 dpi images for reading on a e-book device:

`gs -dNOPAUSE -dQUIET -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -sOutputFile={{output.pdf}} {{input.pdf}}`

- Convert PDF file (pages 1 through 3) to an image with 150 dpi resolution:

`gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=jpeg -r150 -dFirstPage={{1}} -dLastPage={{3}} -sOutputFile={{output_%d.jpg}} {{input.pdf}}`

- Extract pages from a PDF file:

`gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile={{output.pdf}} {{input.pdf}}`

- Merge PDF files:

`gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile={{output.pdf}} {{input1.pdf}} {{input2.pdf}}`

- Convert from PostScript file to PDF file:

`gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile={{output.pdf}} {{input.ps}}`
