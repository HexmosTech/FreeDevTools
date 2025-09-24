---
title: "Convert SLD to PPM - Generate Images | Online Free DevTools by Hexmos"
name: sldtoppm
path: /freedevtools/tldr/common/sldtoppm
canonical: "https://hexmos.com/freedevtools/tldr/common/sldtoppm/"
description: "Convert SLD files to PPM images with sldtoppm. Adjust pixel scaling for optimal image conversion and visualization. Free online tool, no registration required."
category: common
keywords:
- SLD to PPM converter
- AutoCAD slide conversion
- PPM image generator
- Raster image conversion
- SLD file format
- PPM file format
- Image scaling tool
- sldtoppm linux
- sldtoppm command
- command-line image conversion
features:
- Convert AutoCAD SLD files to PPM image format
- Compensate for non-square pixels by adjusting width
- Generate PPM images from command line
- Supports batch conversion of SLD files
- Offers a straightforward image conversion process
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sldtoppm

> Convert an AutoCAD slide file to a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/sldtoppm.html>.

- Convert an SLD file to a PPM image:

`sldtoppm {{path/to/input.sld}} > {{path/to/output.ppm}}`

- Compensate for non-square pixels by scaling the width of the image:

`sldtoppm {{[-a|-adjust]}} {{path/to/input.sld}} > {{path/to/output.ppm}}`
