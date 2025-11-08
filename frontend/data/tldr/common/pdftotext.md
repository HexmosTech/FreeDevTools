---
title: "Convert PDF to Text - Extract Text | Online Free DevTools by Hexmos"
name: pdftotext
path: "/freedevtools/tldr/common/pdftotext/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pdftotext/"
description: "Convert PDF to text with pdftotext. Extract readable text content and preserve layout. Free online tool, no registration required."
category: common
keywords:
- PDF to text converter
- Extract text from PDF
- PDF text extraction
- Command line PDF conversion
- pdftotext linux
- pdftotext windows
- PDF to plain text
- PDF text layout preservation
- Batch PDF conversion
- PDF text extraction CLI
features:
- Convert PDF files to plain text format
- Preserve document layout during conversion
- Extract specific pages from PDF
- Output text to stdout or a file
- Support batch PDF processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdftotext

> Convert PDF files to plain text format.
> More information: <https://www.xpdfreader.com/pdftotext-man.html>.

- Convert `filename.pdf` to plain text and print it to `stdout`:

`pdftotext {{filename.pdf}} -`

- Convert `filename.pdf` to plain text and save it as `filename.txt`:

`pdftotext {{filename.pdf}}`

- Convert `filename.pdf` to plain text and preserve the layout:

`pdftotext -layout {{filename.pdf}}`

- Convert `input.pdf` to plain text and save it as `output.txt`:

`pdftotext {{input.pdf}} {{output.txt}}`

- Convert pages 2, 3 and 4 of `input.pdf` to plain text and save them as `output.txt`:

`pdftotext -f {{2}} -l {{4}} {{input.pdf}} {{output.txt}}`
