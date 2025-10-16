---
title: "Compare PDF - Analyze PDF Differences | Online Free DevTools by Hexmos"
name: diff-pdf
path: "/freedevtools/tldr/common/diff-pdf/"
canonical: "https://hexmos.com/freedevtools/tldr/common/diff-pdf/"
description: "Compare PDFs with diff-pdf. Analyze and visually highlight differences between PDF files. Free online tool, no registration required."
category: common
keywords:
- pdf comparison
- pdf diff
- compare pdf files
- pdf difference analyzer
- pdf content comparison
- visually compare pdfs
- command line pdf diff
- pdf analysis linux
- pdf compare macos
- diff-pdf command
features:
- Compare two PDF files and return exit codes based on differences.
- Generate a PDF with highlighted differences between input PDFs.
- View PDF differences in a graphical user interface.
- Identify text and image changes within PDF documents.
- Utilize command-line interface for automated PDF comparison workflows.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# diff-pdf

> Compare two PDFs.
> More information: <https://github.com/vslavik/diff-pdf>.

- Compare PDFs, indicating changes using return codes (`0` = no difference, `1` = PDFs differ):

`diff-pdf {{path/to/a.pdf}} {{path/to/b.pdf}}`

- Compare PDFs, outputting a PDF with visually highlighted differences:

`diff-pdf --output-diff={{path/to/diff.pdf}} {{path/to/a.pdf}} {{path/to/b.pdf}}`

- Compare PDFs, viewing differences in a simple GUI:

`diff-pdf --view {{path/to/a.pdf}} {{path/to/b.pdf}}`
