---
title: "Convert HIPS to PGM - Generate PGM Images | Free DevTools"
name: hipstopgm
path: /freedevtools/tldr/common/hipstopgm
canonical: "https://hexmos.com/freedevtools/tldr/common/hipstopgm/"
description: "Convert HIPS to PGM with hipstopgm. Generate PGM image files from HIPS image data. Free online tool, no registration required."
category: common
keywords:
- HIPS to PGM converter
- PGM image generator
- HIPS image processing
- Image format conversion
- Netpbm tools
- Command line image converter
- HIPS image to PGM image
- HIPS file conversion
- PGM image creation
- Raster image conversion
features:
- Convert HIPS images to PGM images
- Concatenate multiple HIPS frames vertically
- Suppress informational messages during conversion
- Display the version of the hipstopgm tool
- Process HIPS image data from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hipstopgm

> Read a HIPS file as input and return a PGM image as output.
> If the HIPS file contains more than one frame in sequence, `hipstopgm` will concatenate all the frames vertically.
> More information: <https://netpbm.sourceforge.net/doc/hipstopgm.html>.

- Convert a HIPS file into a PGM image:

`hipstopgm {{path/to/file.hips}}`

- Suppress all informational messages:

`hipstopgm {{[-q|-quiet]}}`

- Display version:

`hipstopgm {{[-v|-version]}}`
