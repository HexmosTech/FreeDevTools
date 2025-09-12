---
title: "Ebook Converter - Format Ebooks Quickly | Free DevTools"
name: ebook-convert
path: /freedevtools/tldr/common/ebook-convert
canonical: "https://hexmos.com/freedevtools/tldr/common/ebook-convert/"
description: "Format ebook files with Ebook Converter. Convert between various formats like EPUB, MOBI, and PDF. Free online tool, no registration required."
category: common
keywords:
- ebook converter
- ebook format converter
- PDF to EPUB converter
- EPUB to MOBI converter
- MOBI to PDF converter
- command line ebook converter
- calibre ebook converter
- markdown to ebook
- HTML to ebook
- ebook metadata editor
features:
- Convert ebooks between various formats
- Convert Markdown and HTML to ebooks
- Customize table of contents for ebooks
- Set title and author metadata during conversion
- Batch convert multiple ebook files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ebook-convert

> Can be used to convert e-books between common formats, e.g. PDF, EPUB and MOBI.
> Part of the Calibre e-book library tool.
> More information: <https://manual.calibre-ebook.com/generated/en/ebook-convert.html>.

- Convert an e-book into another format:

`ebook-convert {{path/to/input_file}} {{output_file}}`

- Convert Markdown or HTML to e-book with TOC, title and author:

`ebook-convert {{path/to/input_file}} {{output_file}} --level1-toc="//h:h1" --level2-toc="//h:h2" --level3-toc="//h:h3" --title={{title}} --authors={{author}}`
