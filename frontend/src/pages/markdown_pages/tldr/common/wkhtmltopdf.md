---
title: "Convert HTML to PDF - wkhtmltopdf | Free DevTools"
name: wkhtmltopdf
path: /freedevtools/tldr/common/wkhtmltopdf
canonical: "https://hexmos.com/freedevtools/tldr/common/wkhtmltopdf/"
description: "Convert HTML documents to PDF with wkhtmltopdf. Generate professional-quality PDFs from web pages or HTML files with customizable options. Free online tool, no registration required."
category: common
keywords:
- HTML to PDF converter
- Web page to PDF
- wkhtmltopdf command
- PDF generator
- Command line PDF conversion
- HTML to PDF Linux
- HTML to PDF macOS
- wkhtmltopdf options
- PDF page size
- PDF margins
features:
- Convert HTML files to PDF format
- Customize PDF page size and orientation
- Set specific margins for PDF output
- Generate greyscale PDFs
- Supports command-line PDF generation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wkhtmltopdf

> Convert HTML documents or web pages into PDF files.
> More information: <https://wkhtmltopdf.org/usage/wkhtmltopdf.txt>.

- Convert a HTML document into PDF:

`wkhtmltopdf {{input.html}} {{output.pdf}}`

- Specify the PDF page size (please see `PaperSize` of `QPrinter` for supported sizes):

`wkhtmltopdf --page-size {{A4}} {{input.html}} {{output.pdf}}`

- Set the PDF page margins:

`wkhtmltopdf --margin-{{top|bottom|left|right}} {{10mm}} {{input.html}} {{output.pdf}}`

- Set the PDF page orientation:

`wkhtmltopdf --orientation {{Landscape|Portrait}} {{input.html}} {{output.pdf}}`

- Generate a greyscale version of the PDF document:

`wkhtmltopdf --grayscale {{input.html}} {{output.pdf}}`
