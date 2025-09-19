---
title: "Render HTML to PDF - Weasyprint | Online Free DevTools by Hexmos"
name: weasyprint
path: /freedevtools/tldr/common/weasyprint
canonical: "https://hexmos.com/freedevtools/tldr/common/weasyprint/"
description: "Render HTML documents to PDF with Weasyprint. Convert HTML files to high-quality PDFs or PNGs using command line options. Free online tool, no registration required."
category: common
keywords:
- HTML to PDF converter
- HTML to PNG converter
- command line PDF generation
- Weasyprint HTML rendering
- CSS stylesheet PDF
- HTML document rendering
- PDF generation Linux
- PDF generation macOS
- HTML rendering CLI
- HTML converter online
features:
- Convert HTML files to PDF format
- Convert HTML files to PNG format
- Apply custom CSS stylesheets during rendering
- Control output resolution for PNG generation
- Specify a base URL for relative paths
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# weasyprint

> Render HTML to PDF or PNG.
> More information: <https://doc.courtbouillon.org/weasyprint/stable/api_reference.html#command-line-api>.

- Render an HTML file to PDF:

`weasyprint {{path/to/input.html}} {{path/to/output.pdf}}`

- Render an HTML file to PNG, including an additional user stylesheet:

`weasyprint {{path/to/input.html}} {{path/to/output.png}} --stylesheet {{path/to/stylesheet.css}}`

- Output additional debugging information when rendering:

`weasyprint {{path/to/input.html}} {{path/to/output.pdf}} --verbose`

- Specify a custom resolution when outputting to PNG:

`weasyprint {{path/to/input.html}} {{path/to/output.png}} --resolution {{300}}`

- Specify a base URL for relative URLs in the input HTML file:

`weasyprint {{path/to/input.html}} {{path/to/output.png}} --base-url {{url_or_filename}}`
