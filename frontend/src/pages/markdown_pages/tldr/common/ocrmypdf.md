---
title: "Generate Searchable PDF - ocrmypdf | Online Free DevTools by Hexmos"
name: ocrmypdf
path: /freedevtools/tldr/common/ocrmypdf
canonical: "https://hexmos.com/freedevtools/tldr/common/ocrmypdf/"
description: "Generate searchable PDF documents with ocrmypdf. Optimize scanned PDFs, convert images to text, and add metadata easily. Free online tool, no registration required."
category: common
keywords:
- searchable PDF generator
- OCR PDF creation
- scanned PDF to text
- PDF/A converter
- PDF optimization
- OCRmyPDF Linux
- command line OCR
- text recognition PDF
- PDF metadata editor
- deskew PDF scan
features:
- Create searchable PDFs from scanned documents
- Optimize PDF files for size and quality
- Add metadata to PDF documents
- Clean and deskew scanned pages
- Skip text on already-searchable pages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ocrmypdf

> Generate a searchable PDF or PDF/A from a scanned PDF or an image of text.
> More information: <https://ocrmypdf.readthedocs.io/en/latest/cookbook.html>.

- Create a new searchable PDF/A file from a scanned PDF or image file:

`ocrmypdf {{path/to/input}} {{path/to/output.pdf}}`

- Skip pages of a mixed-format input PDF file that already contain text:

`ocrmypdf --skip-text {{path/to/input.pdf}} {{path/to/output.pdf}}`

- Clean, de-skew, and rotate pages of a poor scan:

`ocrmypdf --clean --deskew --rotate-pages {{path/to/input.pdf}} {{path/to/output.pdf}}`

- Perform lossy optimization on a PDF without performing any OCR:

`ocrmypdf --tesseract-timeout 0 --optimize 2 --skip-text {{path/to/input.pdf}} {{path/to/output.pdf}}`

- Set the metadata of a searchable PDF file:

`ocrmypdf --title "{{title}}" --author "{{author}}" --subject "{{subject}}" --keywords "{{keyword; key phrase; ...}}" {{path/to/input.pdf}} {{path/to/output.pdf}}`

- Display help:

`ocrmypdf --help`
