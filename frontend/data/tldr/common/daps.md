---
title: "DocBook Validation - Convert DocBook XML | Online Free DevTools by Hexmos"
name: daps
path: "/freedevtools/tldr/common/daps/"
canonical: "https://hexmos.com/freedevtools/tldr/common/daps/"
description: "Validate DocBook XML with daps. Convert DocBook files to HTML and PDF. Free online tool, no registration required."
category: common
keywords:
- DocBook validation
- DocBook XML converter
- XML to PDF conversion
- XML to HTML conversion
- DocBook to HTML
- DocBook to PDF
- XML validation linux
- DocBook processing
- daps command
- XML command line tool
features:
- Validate DocBook XML files
- Convert DocBook XML to PDF
- Convert DocBook XML to single HTML file
- Display daps help information
- Display daps version
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# daps

> An open source program for transforming DocBook XML into output formats such as HTML or PDF.
> More information: <https://opensuse.github.io/daps/doc/index.html>.

- Check if a DocBook XML file is valid:

`daps {{[-d|--docconfig]}} {{path/to/file.xml}} validate`

- Convert a DocBook XML file into PDF:

`daps {{[-d|--docconfig]}} {{path/to/file.xml}} pdf`

- Convert a DocBook XML file into a single HTML file:

`daps {{[-d|--docconfig]}} {{path/to/file.xml}} html --single`

- Display help:

`daps {{[-h|--help]}}`

- Display version:

`daps --version`
