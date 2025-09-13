---
title: "Silicon - Generate Code Images | Free DevTools"
name: silicon
path: /freedevtools/tldr/common/silicon
canonical: "https://hexmos.com/freedevtools/tldr/common/silicon/"
description: "Generate source code images instantly with Silicon. Create visually appealing code snippets for presentations and documentation. Free online tool, no registration required."
category: common
keywords:
- Source Code Image Generator
- Code Snippet Creator
- Syntax Highlighting Tool
- Command Line Image Tool
- Code to Image Converter
- Silicon Image Creation
- Markdown Image Generator
- Terminal Image Generator
- Code Screenshot Tool
- Source Code to PNG
features:
- Generate images from source code files
- Customize syntax highlighting based on language
- Create images from standard input
- Control output image path and filename
- Generate visually appealing code snippets
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# silicon

> Create an image of source code.
> More information: <https://github.com/Aloxaf/silicon>.

- Generate an image from a specific source file:

`silicon {{path/to/source_file}} --output {{path/to/output_image}}`

- Generate an image from a source file with a specific programming language syntax highlighting (e.g. `rust`, `py`, `js`, etc.):

`silicon {{path/to/source_file}} --output {{path/to/output_image}} --language {{language|extension}}`

- Generate an image from `stdin`:

`{{command}} | silicon --output {{path/to/output_image}}`
