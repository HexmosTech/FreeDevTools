---
title: "Convert Zeiss to PNM - Format Image Files | Free DevTools"
name: zeisstopnm
path: /freedevtools/tldr/common/zeisstopnm
canonical: "https://hexmos.com/freedevtools/tldr/common/zeisstopnm/"
description: "Convert Zeiss confocal microscope images to PNM (Portable Network Graphics) with Zeisstopnm. Easily format image files using command line. Free online tool, no registration required."
category: common
keywords:
- Zeiss to PNM converter
- confocal image conversion
- PGM file conversion
- PPM file conversion
- image format conversion
- Netpbm conversion
- Zeiss image processing
- command line image converter
- image file converter
- zeisstopnm linux
features:
- Convert Zeiss confocal images to PGM format
- Convert Zeiss confocal images to PPM format
- Specify the output file type (PGM or PPM)
- Process image data from Zeiss confocal files
- Use command line for image format conversion
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zeisstopnm

> Convert a Zeiss confocal file to Netbpm format.
> More information: <https://manned.org/zeisstopnm.1>.

- Convert a Zeiss cofocal file into either `.pgm` or `.ppm` format:

`zeisstopnm {{path/to/file}}`

- Convert a Zeiss cofocal file to Netbpm format while explicitly specifying the target file type:

`zeisstopnm -{{pgm|ppm}} {{path/to/file}}`
