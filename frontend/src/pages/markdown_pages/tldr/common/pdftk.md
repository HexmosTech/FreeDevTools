---
title: "PDF Toolkit - Control PDF Files | Free DevTools"
name: pdftk
path: "/freedevtools/tldr/common/pdftk"
canonical: "https://hexmos.com/freedevtools/tldr/common/pdftk/"
description: "Control PDF files with PDFtk. Merge, split, rotate and extract pages from your PDF documents. Free online tool, no registration required."
category: common
keywords:
- PDF Toolkit
- PDF Merge
- PDF Split
- PDF Rotate
- PDF Extract
- PDF Command Line
- PDF Manipulation
- PDF Linux
- PDF macOS
- PDF Batch Processing
features:
- Merge multiple PDF files into one
- Split a PDF file into individual pages
- Rotate pages within a PDF document
- Extract specific pages from a PDF file
- Manipulate PDF documents via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdftk

> PDF toolkit.
> More information: <https://www.pdflabs.com/docs/pdftk-man-page/>.

- Extract pages 1-3, 5 and 6-10 from a PDF file and save them as another one:

`pdftk {{input.pdf}} cat {{1-3 5 6-10}} output {{output.pdf}}`

- Merge (concatenate) a list of PDF files and save the result as another one:

`pdftk {{file1.pdf file2.pdf ...}} cat output {{output.pdf}}`

- Split each page of a PDF file into a separate file, with a given filename output pattern:

`pdftk {{input.pdf}} burst output {{out_%d.pdf}}`

- Rotate all pages by 180 degrees clockwise:

`pdftk {{input.pdf}} cat {{1-endsouth}} output {{output.pdf}}`

- Rotate third page by 90 degrees clockwise and leave others unchanged:

`pdftk {{input.pdf}} cat {{1-2 3east 4-end}} output {{output.pdf}}`
