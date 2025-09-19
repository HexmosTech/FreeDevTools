---
title: "PlantUML - Generate UML Diagrams | Online Free DevTools by Hexmos"
name: plantuml
path: /freedevtools/tldr/common/plantuml
canonical: "https://hexmos.com/freedevtools/tldr/common/plantuml/"
description: "Generate UML diagrams quickly with PlantUML. Create various diagram types from text descriptions and export to PNG, SVG, or PDF. Free online tool, no registration required."
category: common
keywords:
- UML diagram generator
- PlantUML diagram
- Text to diagram
- Diagram rendering tool
- PlantUML syntax
- PNG diagram creation
- SVG diagram creation
- PDF diagram creation
- Command line UML
- Diagram export
features:
- Generate diagrams from plain text descriptions
- Render diagrams in various formats (PNG, SVG, PDF, TXT)
- Render diagrams from a directory
- Control output directory for generated diagrams
- Retrieve diagram source code from metadata
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# plantuml

> Create UML diagrams from a plain text language and render them in different formats.
> More information: <https://plantuml.com/en/command-line>.

- Render diagrams to default format (PNG):

`plantuml {{diagram1.puml}} {{diagram2.puml}}`

- Render a diagram in given format (e.g. `png`, `pdf`, `svg`, `txt`):

`plantuml -t {{format}} {{diagram.puml}}`

- Render all diagrams of a directory:

`plantuml {{path/to/diagrams}}`

- Render a diagram to the output directory:

`plantuml -o {{path/to/output}} {{diagram.puml}}`

- Render a diagram without storing the diagram's source code (Note: It's stored by default when the `-nometadata` option isn't specified):

`plantuml -nometadata {{diagram.png}} > {{diagram.puml}}`

- Retrieve source from a `plantuml` diagram's metadata:

`plantuml -metadata {{diagram.png}} > {{diagram.puml}}`

- Render a diagram with the configuration file:

`plantuml -config {{config.cfg}} {{diagram.puml}}`

- Display help:

`plantuml -help`
