---
title: "Generate Pictures - Format with Pic | Online Free DevTools by Hexmos"
name: pic
path: "/freedevtools/tldr/common/pic"
canonical: "https://hexmos.com/freedevtools/tldr/common/pic/"
description: "Generate diagrams and graphics with Pic, a preprocessor for the groff typesetting system. Create professional-quality illustrations with this free online tool, no registration required."
category: common
keywords:
- groff pic processor
- troff picture preprocessor
- pic diagram generator
- pic graphics creator
- pic troff graphics
- pic groff diagrams
- pic vector graphics
- linux pic command
- unix pic tool
- postscript pic generation
features:
- Process input with pictures for groff typesetting
- Convert pic code to PostScript
- Typeset pic input to PDF using groff
- Create diagrams within groff documents
- Support for the [me] macro package for PDF output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pic

> Picture preprocessor for the groff (GNU Troff) document formatting system.
> See also: `groff`, `troff`.
> More information: <https://manned.org/pic>.

- Process input with pictures, saving the output for future typesetting with groff to PostScript:

`pic {{path/to/input.pic}} > {{path/to/output.roff}}`

- Typeset input with pictures to PDF using the [me] macro package:

`pic -T {{pdf}} {{path/to/input.pic}} | groff -{{me}} -T {{pdf}} > {{path/to/output.pdf}}`
