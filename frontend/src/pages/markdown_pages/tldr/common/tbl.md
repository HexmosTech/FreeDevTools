---
title: "Format Tables - Process Groff Tables | Online Free DevTools by Hexmos"
name: tbl
path: /freedevtools/tldr/common/tbl
canonical: "https://hexmos.com/freedevtools/tldr/common/tbl/"
description: "Format tables with tbl, the Groff table preprocessor. Convert tabular data into troff markup for document typesetting. Free online tool, no registration required."
category: common
keywords:
- groff table formatter
- tbl table processor
- troff table markup
- groff table preprocessor
- linux table formatting
- unix tbl command
- groff document typesetting
- table to roff converter
- tbl command line
- tbl groff processor
features:
- Process tables for groff typesetting
- Convert tabular data to troff format
- Generate roff output from table input
- Prepare tables for PostScript conversion
- Integrate with groff macro packages for typesetting
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tbl

> Table preprocessor for the groff (GNU Troff) document formatting system.
> See also: `groff`, `troff`.
> More information: <https://manned.org/tbl>.

- Process input with tables, saving the output for future typesetting with groff to PostScript:

`tbl {{path/to/input_file}} > {{path/to/output.roff}}`

- Typeset input with tables to PDF using the [me] macro package:

`tbl -T {{pdf}} {{path/to/input.tbl}} | groff -{{me}} -T {{pdf}} > {{path/to/output.pdf}}`
