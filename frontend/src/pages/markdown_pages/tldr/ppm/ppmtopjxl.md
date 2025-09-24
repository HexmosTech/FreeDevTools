---
title: "Convert PPM to PJXL - Image Conversion | Online Free DevTools by Hexmos"
name: ppmtopjxl
path: /freedevtools/tldr/ppm/ppmtopjxl
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtopjxl/"
description: "Convert PPM to PJXL format with ppmtopjxl. Resize and shift images easily. Free online tool, no registration required. Optimize images quickly."
category: common
keywords:
- PPM to PJXL conversion
- PJXL image generation
- Image format converter
- PPM image processing
- Linux image tools
- Netpbm image utilities
- Image resizing tool
- Command line image converter
- HP PaintJet XL PCL
- Image shift conversion
features:
- Convert PPM images to PJXL format
- Resize input images with specified dimensions
- Shift input images with defined offsets
- Disable TIFF 4.0 compression during conversion
- Generate PJXL files from PPM images
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmtopjxl

> Convert a PPM image into an HP PaintJet XL PCL file.
> More information: <https://netpbm.sourceforge.net/doc/ppmtopjxl.html>.

- Convert a PPM image into an PJXL file:

`ppmtopjxl {{path/to/image.ppm}} > {{path/to/output.pjxl}}`

- Resize the input image:

`ppmtopjxl {{[-xsi|-xsize]}} {{10cm}} {{[-ysi|-ysize]}} {{5cm}} {{path/to/image.ppm}} > {{path/to/output.pjxl}}`

- Shift the input image:

`ppmtopjxl {{[-xsh|-xshift]}} {{10pt}} {{[-ysh|-yshift]}} {{5pt}} {{path/to/image.ppm}} > {{path/to/output.pjxl}}`

- Do not use the normal TIFF 4.0 compression method:

`ppmtopjxl {{[-n|-nopack]}} {{path/to/image.ppm}} > {{path/to/output.pjxl}}`
