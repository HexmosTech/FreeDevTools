---
title: "Convert FITS to PNM - Image Conversion | Online Free DevTools by Hexmos"
name: fitstopnm
path: "/freedevtools/tldr/common/fitstopnm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/fitstopnm/"
description: "Convert FITS files to PNM image format with fitstopnm. Flexible Image Transport System (FITS) file conversion made easy. Free online tool, no registration required."
category: common
keywords:
- FITS to PNM converter
- FITS image conversion
- PNM image generator
- Flexible Image Transport System
- Image format conversion
- Linux image tools
- macOS image tools
- FITS image processing
- PNM image manipulation
- Command line image converter
features:
- Convert FITS files to PNM format
- Specify the image position on the third axis
- Process FITS data from command line
- Generate PNM image output
- Support for Flexible Image Transport System files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fitstopnm

> Convert a Flexible Image Transport System (FITS) file to a PNM image.
> See also: `pamtofits`.
> More information: <https://netpbm.sourceforge.net/doc/fitstopnm.html>.

- Convert a FITS file to a PNM image:

`fitstopnm {{path/to/file.fits}} > {{path/to/output.pnm}}`

- Convert the image on the specified position of the third axis in the FITS file:

`fitstopnm {{[-i|-image]}} {{z_position}} {{path/to/file.fits}} > {{path/to/output.pnm}}`
