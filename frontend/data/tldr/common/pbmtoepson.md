---
title: "Convert PBM Image - PBM to Epson | Online Free DevTools by Hexmos"
name: pbmtoepson
path: "/freedevtools/tldr/common/pbmtoepson/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtoepson/"
description: "Convert PBM image to Epson graphic with pbmtoepson. Generate Epson printer output from PBM format, supporting DPI and protocol adjustments. Free online tool, no registration required."
category: common
keywords:
- PBM to Epson converter
- PBM image converter
- Epson printer graphic generator
- PBM to ESCP conversion
- Netpbm image tools
- Image format conversion
- Command line image conversion
- PBM image processing
- Epson graphic generation
- Raster image conversion
features:
- Convert PBM images to Epson printer graphics
- Specify the printer protocol for the output
- Define the horizontal DPI of the generated output
- Support ESCP and ESCP2 printer protocols
- Process PBM images via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmtoepson

> Convert a PBM image to an Epson printer graphic.
> See also: `pbmtoescp2`.
> More information: <https://netpbm.sourceforge.net/doc/pbmtoepson.html>.

- Convert a PBM image to an Epson printer graphic:

`pbmtoepson {{path/to/image.pbm}} > {{path/to/output.epson}}`

- Specify the printer protocol of the output:

`pbmtoepson {{[-pr|-protocol]}} {{escp9|escp}} {{path/to/image.pbm}} > {{path/to/output.epson}}`

- Specify the horizontal DPI of the output:

`pbmtoepson {{[-d|-dpi]}} {{60|72|80|90|120|144|240}} {{path/to/image.pbm}} > {{path/to/output.epson}}`
