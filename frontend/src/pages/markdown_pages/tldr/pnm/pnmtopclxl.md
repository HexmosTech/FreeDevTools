---
title: "Convert PNM to PCLXL - Generate Printer Streams | Online Free DevTools by Hexmos"
name: pnmtopclxl
path: /freedevtools/tldr/pnm/pnmtopclxl
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmtopclxl/"
description: "Convert PNM files to PCLXL printer streams with pnmtopclxl. Create print-ready documents and specify resolution easily. Free online tool, no registration required."
category: common
keywords:
- PNM to PCLXL converter
- PCLXL printer stream generator
- Image to PCLXL conversion
- Netpbm PCLXL
- Raster graphics to PCLXL
- HP LaserJet PCLXL
- Linux print command
- Common command line tools
- Image format conversion
- PNM image processing
features:
- Convert PNM images to PCLXL printer streams
- Specify image resolution and page offsets
- Generate duplex printer streams for various paper sizes
- Support vertical and horizontal duplex printing
- Create print-ready documents from PNM files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmtopclxl

> Convert a PNM file to an HP LaserJet PCL XL printer stream.
> More information: <https://netpbm.sourceforge.net/doc/pnmtopclxl.html>.

- Convert PNM files to an HP LaserJet PCL XL printer stream:

`pnmtopclxl {{path/to/input1.pnm path/to/input2.pnm ...}} > {{path/to/output.pclxl}}`

- Specify the resolution of the image as well as the location of the page from the upper left corner of each image:

`pnmtopclxl -dpi {{resolution}} {{[-x|-xoffs]}} {{x_offset}} {{[-y|-yoffs]}} {{y_offset}} {{path/to/input1.pnm path/to/input2.pnm ...}} > {{path/to/output.pclxl}}`

- Generate a duplex printer stream for the specified paper format:

`pnmtopclxl {{[-du|-duplex]}} {{vertical|horizontal}} {{[-fo|-format]}} {{letter|legal|a3|a4|a5|...}} {{path/to/input1.pnm path/to/input2.pnm ...}} > {{path/to/output.pclxl}}`
