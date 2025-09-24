---
title: "Generate Mermaid Diagrams - mmdc CLI Tool | Online Free DevTools by Hexmos"
name: mmdc
path: /freedevtools/tldr/common/mmdc
canonical: "https://hexmos.com/freedevtools/tldr/common/mmdc/"
description: "Generate diagrams from Mermaid code with the mmdc CLI tool.  Convert .mmd files to SVG, PNG, or PDF. Free online tool, no registration required."
category: common
keywords:
  - mermaid diagram generator
  - mmd to svg converter
  - mmd to png converter
  - mmd to pdf converter
  - mermaid cli tool
  - command line diagram generator
  - mermaid diagram command
  - svg diagram generator
  - png diagram generator
  - pdf diagram generator
features:
  - Convert Mermaid (.mmd) files to SVG, PNG, and PDF formats.
  - Support various Mermaid themes (forest, dark, neutral, default).
  - Customize the background color of the generated diagrams.
  - Generate diagrams directly from the command line interface.
  - Handle different output formats automatically based on file extensions.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mmdc

> CLI for mermaid, a diagram generation tool with a domain-specific language.
> A mermaid definition file is taken as input and a SVG, PNG, or PDF file is generated as output.
> More information: <https://mermaid-js.github.io/mermaid/>.

- Convert a file to the specified format (automatically determined from the file extension):

`mmdc {{[-i|--input]}} {{input.mmd}} {{[-o|--output]}} {{output.svg}}`

- Specify the theme of the chart:

`mmdc {{[-i|--input]}} {{input.mmd}} {{[-o|--output]}} {{output.svg}} {{[-t|--theme]}} {{forest|dark|neutral|default}}`

- Specify the background color of the chart (e.g. `lime`, `"#D8064F"`, or `transparent`):

`mmdc {{[-i|--input]}} {{input.mmd}} {{[-o|--output]}} {{output.svg}} {{[-b|--backgroundColor]}} {{color}}`
