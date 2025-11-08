---
title: "PDF Merge - Combine PDF Files | Online Free DevTools by Hexmos"
name: pdfjoin
path: "/freedevtools/tldr/common/pdfjoin/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pdfjoin/"
description: "Merge PDFs easily with pdfjoin. Combine multiple PDF documents into a single file or extract specific pages. Free online tool, no registration required."
category: common
keywords:
- pdf merge
- pdf combine
- pdf join
- pdf file merger
- pdf page extractor
- linux pdf merge
- macos pdf merge
- command line pdf merge
- pdf concatenation
- pdf rearrange pages
features:
- Merge multiple PDF files into one document
- Extract specific page ranges from PDFs
- Rearrange the order of pages in a PDF
- Combine page subranges from different PDFs
- Create new PDFs with custom suffixes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdfjoin

> PDF merging utility based on pdfjam.
> More information: <https://github.com/rrthomas/pdfjam-extras>.

- Merge two PDFs into one with the default suffix "joined":

`pdfjoin {{path/to/file1.pdf}} {{path/to/file2.pdf}}`

- Merge the first page of each given file together:

`pdfjoin {{path/to/file1.pdf path/to/file2.pdf ...}} {{1}} --outfile {{output_file}}`

- Save pages 3 to 5 followed by page 1 to a new PDF with custom suffix:

`pdfjoin {{path/to/file.pdf}} {{3-5,1}} --suffix {{rearranged}}`

- Merge page subranges from two PDFs:

`pdfjoin /{{path/to/file1.pdf}} {{2-}} {{file2}} {{last-3}} --outfile {{output_file}}`
