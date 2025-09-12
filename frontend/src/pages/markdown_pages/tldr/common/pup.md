---
title: "Parse HTML - Format & Filter HTML with pup | Free DevTools"
name: pup
path: /freedevtools/tldr/common/pup
canonical: "https://hexmos.com/freedevtools/tldr/common/pup/"
description: "Format HTML with pup, a command-line HTML parser. Filter elements, extract text, and convert to JSON effortlessly. Free online tool, no registration required."
category: common
keywords:
- HTML parser
- HTML formatting
- HTML filtering
- HTML to JSON
- pup command line
- pup HTML
- HTML element extraction
- command line HTML tools
- HTML text extraction
- Linux HTML parser
features:
- Format HTML with indentation and color
- Filter HTML elements by tag, ID, or attribute
- Extract text content from filtered HTML
- Convert HTML to JSON format
- Process HTML directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pup

> HTML parsing tool.
> More information: <https://github.com/ericchiang/pup>.

- Transform a raw HTML file into a cleaned, indented, and colored format:

`cat {{index.html}} | pup --color`

- Filter HTML by element tag name:

`cat {{index.html}} | pup '{{tag}}'`

- Filter HTML by ID:

`cat {{index.html}} | pup '{{div#id}}'`

- Filter HTML by attribute value:

`cat {{index.html}} | pup '{{input[type="text"]}}'`

- Print all text from the filtered HTML elements and their children:

`cat {{index.html}} | pup '{{div}} text{}'`

- Print HTML as JSON:

`cat {{index.html}} | pup '{{div}} json{}'`
