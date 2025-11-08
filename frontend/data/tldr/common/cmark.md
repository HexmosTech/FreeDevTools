---
title: "Format Markdown - Convert CommonMark to HTML | Online Free DevTools by Hexmos"
name: cmark
path: "/freedevtools/tldr/common/cmark/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cmark/"
description: "Format Markdown documents with cmark. Convert CommonMark to HTML, LaTeX, and more. Validate UTF-8 encoding. Free online tool, no registration required."
category: common
keywords:
- Markdown to HTML converter
- CommonMark formatter
- Markdown validator
- cmark Markdown
- LaTeX converter
- command-line Markdown
- UTF-8 validation tool
- text formatting tool
- Markdown syntax checker
- plain text converter
features:
- Convert Markdown files to HTML
- Transform Markdown to LaTeX format
- Validate UTF-8 characters in Markdown
- Render Markdown documents from stdin
- Convert straight quotes to smart quotes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cmark

> Convert CommonMark Markdown formatted text to other formats.
> More information: <https://github.com/commonmark/cmark>.

- Render a CommonMark Markdown file to HTML:

`cmark --to html {{filename.md}}`

- Convert data from `stdin` to LaTeX:

`cmark --to latex`

- Convert straight quotes to smart quotes:

`cmark --smart --to html {{filename.md}}`

- Validate UTF-8 characters:

`cmark --validate-utf8 {{filename.md}}`
