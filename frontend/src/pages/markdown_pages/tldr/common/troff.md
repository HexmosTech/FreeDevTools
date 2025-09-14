---
title: "Troff - Format Documents with Groff | Free DevTools"
name: troff
path: /freedevtools/tldr/common/troff
canonical: "https://hexmos.com/freedevtools/tldr/common/troff/"
description: "Format documents instantly with Troff, the Groff typesetting processor. Convert text files into PostScript, PDF, or ASCII formats. Free online tool, no registration required."
category: common
keywords:
- groff document formatter
- troff typesetting processor
- postscript file generator
- pdf file generator
- ascii text converter
- gnu troff command
- roff file format
- document publishing tool
- linux document formatting
- troff command line
features:
- Format documents for PostScript printers
- Convert roff files to PDF format
- Generate ASCII text output from roff files
- Support me macro package for typesetting
- Use man macro package for formatting man pages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# troff

> Typesetting processor for the groff (GNU Troff) document formatting system.
> See also: `groff`.
> More information: <https://manned.org/troff>.

- Format output for a PostScript printer, saving the output to a file:

`troff {{path/to/input.roff}} | grops > {{path/to/output.ps}}`

- Format output for a PostScript printer using the me macro package, saving the output to a file:

`troff -{{me}} {{path/to/input.roff}} | grops > {{path/to/output.ps}}`

- Format output as ASCII text using the man macro package:

`troff -T {{ascii}} -{{man}} {{path/to/input.roff}} | grotty`

- Format output as a pdf file, saving the output to a file:

`troff -T {{pdf}} {{path/to/input.roff}} | gropdf > {{path/to/output.pdf}}`
