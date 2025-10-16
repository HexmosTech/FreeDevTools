---
title: "Extract HTML Content - Control with htmlq | Online Free DevTools by Hexmos"
name: htmlq
path: "/freedevtools/tldr/common/htmlq/"
canonical: "https://hexmos.com/freedevtools/tldr/common/htmlq/"
description: "Extract HTML content with htmlq, a CSS selector tool. Query HTML files efficiently from the command line with this free online tool, no registration required."
category: common
keywords:
- HTML content extraction
- CSS selector query
- HTML parsing command line
- HTML data retrieval
- HTML scraping tool
- Command line HTML parser
- HTML query utility
- HTML filtering tool
- HTML node removal
- HTML pretty print
features:
- Extract content using CSS selectors
- Get text content from specific elements
- Find links based on attribute values
- Remove unwanted nodes from HTML
- Pretty print HTML output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# htmlq

> Use CSS selectors to extract content from HTML files.
> More information: <https://github.com/mgdm/htmlq>.

- Return all elements of class `card`:

`cat {{path/to/file.html}} | htmlq '.card'`

- Get the text content of the first paragraph:

`cat {{path/to/file.html}} | htmlq --text 'p:first-of-type'`

- Find all the links in a page:

`cat {{path/to/file.html}} | htmlq --attribute href 'a'`

- Remove all images and SVGs from a page:

`cat {{path/to/file.html}} | htmlq --remove-nodes 'img' --remove-nodes 'svg'`

- Pretty print and write the output to a file:

`htmlq --pretty --filename {{path/to/input.html}} --output {{path/to/output.html}}`
