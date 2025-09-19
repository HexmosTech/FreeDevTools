---
title: "Generate SVG Makefiles - Inkmake | Online Free DevTools by Hexmos"
name: inkmake
path: /freedevtools/tldr/in/inkmake
canonical: "https://hexmos.com/freedevtools/tldr/in/inkmake/"
description: "Generate SVG makefiles with Inkmake. Automate SVG exporting and transformations using Inkscape's backend. Free online tool, no registration required."
category: common
keywords:
- SVG Makefile generator
- Inkscape automation
- Vector graphics export
- Command-line SVG tools
- Makefile-based SVG workflow
- Inkscape batch processing
- SVG conversion tool
- Graphics automation scripts
- Linux SVG utilities
- macOS SVG make
features:
- Export SVG files using Inkfile configurations
- Automate SVG transformations through Makefiles
- Integrate Inkscape into build processes
- Use custom Inkscape binaries as the backend
- Show detailed information during execution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# inkmake

> GNU Makefile-style SVG exporting using Inkscape's backend.
> More information: <https://github.com/wader/inkmake>.

- Export an SVG file executing the specified Inkfile:

`inkmake {{path/to/Inkfile}}`

- Execute an Inkfile and show detailed information:

`inkmake --verbose {{path/to/Inkfile}}`

- Execute an Inkfile, specifying SVG input file(s) and an output file:

`inkmake --svg {{path/to/file.svg}} --out {{path/to/output_image}} {{path/to/Inkfile}}`

- Use a custom Inkscape binary as the backend:

`inkmake --inkscape {{/Applications/Inkscape.app/Contents/Resources/bin/inkscape}} {{path/to/Inkfile}}`

- Display help:

`inkmake --help`
