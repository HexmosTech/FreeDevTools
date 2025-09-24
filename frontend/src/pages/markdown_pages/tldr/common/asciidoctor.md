---
title: "Convert AsciiDoc - Generate Documents | Online Free DevTools by Hexmos"
name: asciidoctor
path: "/freedevtools/tldr/common/asciidoctor"
canonical: "https://hexmos.com/freedevtools/tldr/common/asciidoctor/"
description: "Convert AsciiDoc documents effortlessly with Asciidoctor. Generate HTML and PDF files from AsciiDoc source. Free online tool, no registration required."
category: common
keywords:
- asciidoc converter
- adoc to html
- adoc to pdf
- asciidoctor command line
- document generation
- markdown alternative
- lightweight markup
- documentation tool
- commonmark converter
- publishing workflow
features:
- Convert AsciiDoc files to HTML format
- Generate PDF documents from AsciiDoc source
- Link custom CSS stylesheets for HTML output
- Create embeddable HTML fragments
- Utilize the asciidoctor-pdf library
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# asciidoctor

> Convert AsciiDoc files to a publishable format.
> More information: <https://docs.asciidoctor.org>.

- Convert a specific `.adoc` file to HTML (the default output format):

`asciidoctor {{path/to/file.adoc}}`

- Convert a specific `.adoc` file to HTML and link a CSS stylesheet:

`asciidoctor {{[-a|--attribute]}} stylesheet {{path/to/stylesheet.css}} {{path/to/file.adoc}}`

- Convert a specific `.adoc` file to embeddable HTML, removing everything except the body:

`asciidoctor {{[-e|--embedded]}} {{path/to/file.adoc}}`

- Convert a specific `.adoc` file to a PDF using the `asciidoctor-pdf` library:

`asciidoctor {{[-b|--backend]}} {{pdf}} {{[-r|--require ]}}{{asciidoctor-pdf}} {{path/to/file.adoc}}`
