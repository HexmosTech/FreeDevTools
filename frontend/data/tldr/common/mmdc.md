---
title: "Generate Diagrams - Mermaid CLI Tool | Online Free DevTools by Hexmos"
name: mmdc
path: "/freedevtools/tldr/common/mmdc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mmdc/"
description: "Generate diagrams with Mermaid CLI tool. Create SVG, PNG, or PDF diagrams from Mermaid definition files. Free online tool, no registration required."
category: common
keywords:
  - mermaid diagram generator
  - mmd to svg converter
  - diagram generation cli
  - mermaid command line tool
  - graphviz alternative
  - mmd to png converter
  - mmd to pdf converter
  - mermaid theme support
  - mermaid background color
  - diagram definition language
features:
  - Convert Mermaid files to SVG, PNG, or PDF format
  - Specify the diagram theme (forest, dark, neutral, default)
  - Customize the background color of generated diagrams
  - Generate diagrams from the command line
  - Support for a Mermaid definition language
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
