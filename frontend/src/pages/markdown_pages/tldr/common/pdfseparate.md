---
title: "PDF Separator - Extract PDF Pages | Online Free DevTools by Hexmos"
name: pdfseparate
path: /freedevtools/tldr/common/pdfseparate
canonical: "https://hexmos.com/freedevtools/tldr/common/pdfseparate/"
description: "Extract PDF pages with PDF Separator, creating individual PDF files for each. Manage and split PDF documents easily. Free online tool, no registration required."
category: common
keywords:
- PDF page extractor
- PDF splitter
- PDF separate pages
- PDF extraction command
- PDF to single page
- Command line PDF tool
- Linux PDF utilities
- macOS PDF tools
- PDF management tool
- Separate PDF pages
features:
- Extract specific pages from a PDF
- Create individual PDF files per page
- Specify a range of pages for extraction
- Define the starting page for extraction
- Define the last page for extraction
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdfseparate

> Portable Document Format (PDF) file page extractor.
> More information: <https://manpages.debian.org/latest/poppler-utils/pdfseparate.1.en.html>.

- Extract pages from PDF file and make a separate PDF file for each page:

`pdfseparate {{path/to/source_filename.pdf}} {{path/to/destination_filename-%d.pdf}}`

- Specify the first/start page for extraction:

`pdfseparate -f {{3}} {{path/to/source_filename.pdf}} {{path/to/destination_filename-%d.pdf}}`

- Specify the last page for extraction:

`pdfseparate -l {{10}} {{path/to/source_filename.pdf}} {{path/to/destination_filename-%d.pdf}}`
