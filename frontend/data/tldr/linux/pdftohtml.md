---
title: "Convert PDF to HTML - Generate HTML from PDF Files | Online Free DevTools by Hexmos"
name: pdftohtml
path: "/freedevtools/tldr/linux/pdftohtml/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pdftohtml/"
description: "Convert PDF files to HTML with pdftohtml. Effortlessly create HTML, XML and PNG images from PDFs using this Linux command. Free online tool, no registration required."
category: linux
keywords:
- PDF to HTML converter
- PDF to XML converter
- Linux PDF conversion
- command line PDF to HTML
- PDF to image conversion
- PDF parser Linux
- HTML generation from PDF
- pdftohtml Linux command
- PDF formatting tool
- PDF to web page
features:
- Convert PDF documents to HTML format
- Generate XML output from PDF files
- Extract PNG images from PDF documents
- Ignore embedded images during HTML conversion
- Create single HTML files containing all PDF pages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdftohtml

> Convert PDF files into HTML, XML and PNG images.
> More information: <https://manned.org/pdftohtml>.

- Convert a PDF file to an HTML file:

`pdftohtml {{path/to/file.pdf}} {{path/to/output_file.html}}`

- Ignore images in the PDF file:

`pdftohtml -i {{path/to/file.pdf}} {{path/to/output_file.html}}`

- Generate a single HTML file that includes all PDF pages:

`pdftohtml -s {{path/to/file.pdf}} {{path/to/output_file.html}}`

- Convert a PDF file to an XML file:

`pdftohtml -xml {{path/to/file.pdf}} {{path/to/output_file.xml}}`
