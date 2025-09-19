---
title: "Clean PBM Image - Erase Pixels | Online Free DevTools by Hexmos"
name: pbmclean
path: /freedevtools/tldr/common/pbmclean
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmclean/"
description: "Clean PBM images by removing isolated pixels with PBMclean. Enhance image quality and reduce noise. Free online tool, no registration required."
category: common
keywords:
- PBM image cleaner
- Clean PBM pixels
- PBM noise reduction
- Erase isolated pixels
- PBM image processing
- Netpbm tools
- Linux image manipulation
- MacOS image cleaning
- Command line image editor
- PBM optimization
features:
- Erase isolated black pixels in PBM images
- Erase isolated white pixels in PBM images
- Specify minimum neighbor count for pixel removal
- Clean up binary image noise
- Improve PBM image quality
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmclean

> Clean up a PBM image by erasing isolated black and white pixels.
> More information: <https://netpbm.sourceforge.net/doc/pbmclean.html>.

- Clean up a PBM image by erasing isolated black and white pixels:

`pbmclean {{path/to/image.pbm}} > {{path/to/output.pbm}}`

- Clean up only black/white pixels:

`pbmclean -{{black|white}} {{path/to/image.pbm}} > {{path/to/output.pbm}}`

- Specify the minimum number of neighbouring pixels of the same color in order for a pixel not to be considered isolated:

`pbmclean {{[-m|-minneighbours]}} {{3}} {{path/to/image.pbm}} > {{path/to/output.pbm}}`
