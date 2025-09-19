---
title: "Convert PBM to ESC/P2 - Generate Printer Files | Online Free DevTools by Hexmos"
name: pbmtoescp2
path: /freedevtools/tldr/common/pbmtoescp2
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtoescp2/"
description: "Convert PBM image to ESC/P2 printer files with pbmtoescp2. Control output compression and resolution for optimal printing. Free online tool, no registration required."
category: common
keywords:
- PBM to ESC/P2 converter
- image to printer file
- pbmtoescp2 linux
- pbmtoescp2 command
- Netpbm image conversion
- PBM image processing
- ESC/P2 printer command
- bitmap to printer file
- image format conversion
- raster image printing
features:
- Convert PBM images to ESC/P2 printer files
- Specify output compression level
- Define horizontal and vertical resolution in DPI
- Add a formfeed command to the end of the output
- Control printer output from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmtoescp2

> Convert a PBM image to a ESC/P2 printer file.
> See also: `pbmtoepson`, `escp2topbm`.
> More information: <https://netpbm.sourceforge.net/doc/pbmtoescp2.html>.

- Convert a PBM image to a ESC/P2 printer file:

`pbmtoescp2 {{path/to/image.pbm}} > {{path/to/output.escp2}}`

- Specify the compression of the output:

`pbmtoescp2 {{[-c|-compression]}} {{0|1}} {{path/to/image.pbm}} > {{path/to/output.escp2}}`

- Specify the horizontal and vertical resolution of the output in dots per inch:

`pbmtoescp2 {{[-re|-resolution]}} {{180|360|720}} {{path/to/image.pbm}} > {{path/to/output.escp2}}`

- Place a formfeed command at the end of the output:

`pbmtoescp2 {{[-f|-formfeed]}} {{path/to/image.pbm}} > {{path/to/output.escp2}}`
