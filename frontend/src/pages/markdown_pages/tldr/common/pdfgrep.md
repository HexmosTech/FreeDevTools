---
title: "PDF Text Search - Find Text in PDFs | Online Free DevTools by Hexmos"
name: pdfgrep
path: /freedevtools/tldr/common/pdfgrep
canonical: "https://hexmos.com/freedevtools/tldr/common/pdfgrep/"
description: "Search PDF text with pdfgrep. Quickly find specific words or phrases within PDF documents using command-line. Free online tool, no registration required."
category: common
keywords:
- PDF text search
- PDF content search
- PDF file search
- PDF text extraction
- PDF grep command
- Linux PDF search
- macOS PDF search
- Command line PDF search
- Recursive PDF search
- PDF pattern matching
features:
- Find text patterns within PDF files
- Include filename and page number in search results
- Perform case-insensitive searches
- Search PDF files recursively
- Limit the number of matches returned
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdfgrep

> Search text in PDF files.
> More information: <https://pdfgrep.org/doc.html>.

- Find lines that match pattern in a PDF:

`pdfgrep {{pattern}} {{file.pdf}}`

- Include file name and page number for each matched line:

`pdfgrep {{[-H|--with-filename]}} {{[-n|--page-number]}} {{pattern}} {{file.pdf}}`

- Do a case-insensitive search for lines that begin with "foo" and return the first 3 matches:

`pdfgrep {{[-m|--max-count]}} {{3}} {{[-i|--ignore-case]}} {{'^foo'}} {{file.pdf}}`

- Find pattern in files with a `.pdf` extension in the current directory recursively:

`pdfgrep {{[-r|--recursive]}} {{pattern}}`

- Find pattern on files that match a specific glob in the current directory recursively:

`pdfgrep {{[-r|--recursive]}} --include {{'*book.pdf'}} {{pattern}}`
