---
title: "Transform XML - Control with xsltproc | Online Free DevTools by Hexmos"
name: xsltproc
path: "/freedevtools/tldr/osx/xsltproc/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/xsltproc/"
description: "Transform XML files effortlessly with xsltproc. Apply XSLT stylesheets to create HTML or XML output. Free online tool, no registration required."
category: osx
keywords:
- XML transformation
- XSLT processor
- XSLT transformation
- XML to HTML conversion
- XSLT stylesheet application
- OSX XML tools
- Command line XML transformation
- XML xsltproc
- xsltproc command
- macOS XML processing
features:
- Transform XML using XSLT stylesheets
- Output transformed XML to HTML or XML formats
- Pass parameters to XSLT stylesheets
- Process XML documents from the command line
- Apply XSLT transformations on macOS
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xsltproc

> Transform XML with XSLT to produce output (usually HTML or XML).
> More information: <https://manned.org/xsltproc>.

- Transform an XML file with a specific XSLT stylesheet:

`xsltproc --output {{path/to/output_file.html}} {{path/to/stylesheet_file.xslt}} {{path/to/file.xml}}`

- Pass a value to a parameter in the stylesheet:

`xsltproc --output {{path/to/output_file.html}} --stringparam "{{name}}" "{{value}}" {{path/to/stylesheet_file.xslt}} {{path/to/xml_file.xml}}`
