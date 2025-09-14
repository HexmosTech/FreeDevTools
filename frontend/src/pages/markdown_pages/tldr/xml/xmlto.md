---
title: "XML Format Tool - Convert XML with XSLT | Free DevTools"
name: xmlto
path: /freedevtools/tldr/xml/xmlto
canonical: "https://hexmos.com/freedevtools/tldr/xml/xmlto/"
description: "Convert XML files with XSLT using xmlto. Apply stylesheets to XML documents for various output formats. Free online tool, no registration required."
category: common
keywords:
- XML conversion
- XSLT transformation
- DocBook to HTML
- DocBook to PDF
- XML to HTML converter
- XML to PDF converter
- XSL stylesheet application
- Linux XML tools
- Common platform XML
- XML formatting tool
features:
- Convert XML documents to various formats
- Apply XSL stylesheets for transformations
- Generate HTML output from DocBook XML
- Produce PDF output from DocBook XML
- Customize transformations with specific stylesheets
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xmlto

> Apply an XSL stylesheet to an XML document.
> More information: <https://manned.org/xmlto>.

- Convert a DocBook XML document to PDF format:

`xmlto pdf {{document.xml}}`

- Convert a DocBook XML document to HTML format and store the resulting files in a separate directory:

`xmlto -o {{path/to/html_files}} html {{document.xml}}`

- Convert a DocBook XML document to a single HTML file:

`xmlto {{html-nochunks}} {{document.xml}}`

- Specify a stylesheet to use while converting a DocBook XML document:

`xmlto -x {{stylesheet.xsl}} {{output_format}} {{document.xml}}`
