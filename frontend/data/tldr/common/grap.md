---
title: "Generate Groff Charts - Format Diagrams with Grap | Online Free DevTools by Hexmos"
name: grap
path: "/freedevtools/tldr/common/grap/"
canonical: "https://hexmos.com/freedevtools/tldr/common/grap/"
description: "Generate Groff charts effortlessly with Grap, a charting preprocessor for creating diagrams in the Groff document formatting system. Free online tool, no registration required."
category: common
keywords:
- groff chart generator
- grap diagram formatter
- troff charting preprocessor
- groff graphics tool
- pic groff integration
- grap to pic converter
- document formatting charts
- linux diagram generator
- command line charting
- grap troff processing
features:
- Preprocess grap files for chart creation
- Convert grap diagrams into pic format
- Integrate with groff for document typesetting
- Generate PDF output from grap diagrams
- Support the me macro package for typesetting
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# grap

> A charting preprocessor for the groff (GNU Troff) document formatting system.
> See also: `pic`, `groff`.
> More information: <https://manned.org/grap>.

- Process a `grap` file and save the output file for future processing with `pic` and `groff`:

`grap {{path/to/input.grap}} > {{path/to/output.pic}}`

- Typeset a `grap` file to PDF using the [me] macro package, saving the output to a file:

`grap {{path/to/input.grap}} | pic -T {{pdf}} | groff -{{me}} -T {{pdf}} > {{path/to/output.pdf}}`
