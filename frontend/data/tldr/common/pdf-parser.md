---
title: "PDF Parser - Analyze PDF Files | Online Free DevTools by Hexmos"
name: pdf-parser
path: "/freedevtools/tldr/common/pdf-parser/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pdf-parser/"
description: "Analyze PDF files quickly with PDF Parser. Identify objects, search content, and extract statistics without rendering. Free online tool, no registration required."
category: common
keywords:
- PDF analysis
- PDF structure analysis
- PDF object extraction
- PDF content search
- PDF statistics
- PDF parsing tool
- PDF metadata analysis
- command-line PDF analysis
- PDF file inspection
- Didier Stevens PDF tools
features:
- Extract PDF file statistics
- Identify specific PDF object types
- Search for strings within PDF indirect objects
- Analyze PDF structure without rendering
- Parse and extract data from PDF files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdf-parser

> Identify fundamental elements of a PDF file without rendering it.
> More information: <https://blog.didierstevens.com/programs/pdf-tools>.

- Display statistics for a PDF file:

`pdf-parser {{[-a|--stats]}} {{path/to/file.pdf}}`

- Display objects of a specific type (`/Font`, `/URI`, ...) in a PDF file:

`pdf-parser {{[-t|--type]}} {{/object_type}} {{path/to/file.pdf}}`

- Search for strings in indirect objects:

`pdf-parser {{[-s|--search]}} {{search_string}} {{path/to/file.pdf}}`
