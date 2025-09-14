---
title: "Format Equations - Typeset Groff Documents | Free DevTools"
name: eqn
path: "/freedevtools/tldr/common/eqn"
canonical: "https://hexmos.com/freedevtools/tldr/common/eqn/"
description: "Format equations for Groff documents with Eqn. Convert equation syntax to troff for typesetting and generate formatted output. Free online tool, no registration required."
category: common
keywords:
- groff equation formatting
- troff document typesetting
- eqn equation preprocessor
- equation to troff converter
- groff equation syntax
- linux equation formatter
- command line equation tool
- document processing eqn
- troff eqn processing
- groff pdf generation
features:
- Process equations for groff typesetting
- Convert equation syntax to troff format
- Generate formatted output for documents
- Support equation preprocessing
- Integrate with groff to create PDF documents
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eqn

> Equation preprocessor for the groff (GNU Troff) document formatting system.
> See also: `troff`, `groff`.
> More information: <https://manned.org/eqn>.

- Process input with equations, saving the output for future typesetting with groff to PostScript:

`eqn {{path/to/input.eqn}} > {{path/to/output.roff}}`

- Typeset an input file with equations to PDF using the [me] macro package:

`eqn -T {{pdf}} {{path/to/input.eqn}} | groff -{{me}} -T {{pdf}} > {{path/to/output.pdf}}`
