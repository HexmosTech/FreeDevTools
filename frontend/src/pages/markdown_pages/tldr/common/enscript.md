---
title: "Enscript - Convert Text to PostScript | Online Free DevTools by Hexmos"
name: enscript
path: /freedevtools/tldr/common/enscript
canonical: "https://hexmos.com/freedevtools/tldr/common/enscript/"
description: "Convert text to various formats with Enscript. Easily generate PostScript, HTML, and RTF from text files using this versatile command. Free online tool, no registration required."
category: common
keywords:
- text to postscript converter
- text to html converter
- text to rtf converter
- text formatting tool
- postscript generator linux
- html generator linux
- rtf generator linux
- ansi conversion
- overstrike conversion
- enscript command line
features:
- Convert text files to PostScript format.
- Generate HTML and RTF documents from text.
- Create ANSI and overstrike outputs.
- Customize output with syntax highlighting.
- Adjust page layout with column and landscape options.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# enscript

> Convert text files to PostScript, HTML, RTF, ANSI, and overstrikes.
> More information: <https://manned.org/enscript>.

- Generate a PostScript file from a text file:

`enscript {{path/to/input_file}} {{[-o|--output]}} {{path/to/output_file}}`

- Generate a file in a different language than PostScript:

`enscript {{path/to/input_file}} {{[-w|--language]}} {{html|rtf|...}} {{[-o|--output]}} {{path/to/output_file}}`

- Generate a PostScript file with a landscape layout, splitting the page into columns (maximum 9):

`enscript {{path/to/input_file}} --columns {{num}} {{[-r|--landscape]}} {{[-o|--output]}} {{path/to/output_file}}`

- Display available syntax highlighting languages and file formats:

`enscript --help-highlight`

- Generate a PostScript file with syntax highlighting and color for a specified language:

`enscript {{path/to/input_file}} --color 1 {{[-E|--highlight]}} {{language}} {{[-o|--output]}} {{path/to/output_file}}`
