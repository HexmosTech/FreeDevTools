---
title: "Generate PDF Posters - Scale and Print PDFs | Online Free DevTools by Hexmos"
name: pdfposter
path: "/freedevtools/tldr/common/pdfposter/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pdfposter/"
description: "Generate PDF posters with pdfposter. Scale and convert large PDF documents into printable pages. Free online tool, no registration required."
category: common
keywords:
- PDF poster generator
- PDF scaling tool
- Large format PDF printer
- PDF to A4 converter
- Command line PDF poster
- PDF poster Linux
- PDF poster macOS
- PDF tiling software
- Print large PDF sheets
- Split PDF for printing
features:
- Convert PDFs to multiple A4 pages for printing
- Scale PDFs for poster creation
- Define custom poster sizes
- Automate PDF poster generation via command line
- Create large-format prints from single PDF files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdfposter

> Convert a large-sheeted PDF into multiple A4 pages for printing.
> More information: <https://pdfposter.readthedocs.io>.

- Convert an A2 poster into 4 A4 pages:

`pdfposter --poster-size a2 {{input_file.pdf}} {{output_file.pdf}}`

- Scale an A4 poster to A3 and then generate 2 A4 pages:

`pdfposter --scale 2 {{input_file.pdf}} {{output_file.pdf}}`
