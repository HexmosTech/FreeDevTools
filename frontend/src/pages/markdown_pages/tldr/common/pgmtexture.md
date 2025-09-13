---
title: "Generate PGM Texture - Extract Image Features | Free DevTools"
name: pgmtexture
path: /freedevtools/tldr/common/pgmtexture
canonical: "https://hexmos.com/freedevtools/tldr/common/pgmtexture/"
description: "Generate PGM texture features with pgmtexture. Extract image textural information using distance parameters for advanced analysis. Free online tool, no registration required."
category: common
keywords:
- PGM image texture extraction
- PGM texture feature generator
- Image texture analysis
- Grayscale image processing
- Texture feature extraction algorithm
- Netpbm image manipulation
- Linux image tools
- Command line image processing
- Image feature extraction PGM
- pgmtexture command example
features:
- Extract textural features from PGM images
- Specify distance parameter for feature extraction
- Generate output PGM image with extracted features
- Process grayscale images for texture analysis
- Utilize command-line interface for image manipulation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pgmtexture

> Extract textural features from a PGM image.
> More information: <https://netpbm.sourceforge.net/doc/pgmtexture.html>.

- Extract textural features from a PGM image:

`pgmtexture {{path/to/image.pgm}} > {{path/to/output.pgm}}`

- Specify the distance parameter for the feature extraction algorithm:

`pgmtexture -d {{distance}} {{path/to/image.pgm}} > {{path/to/output.pgm}}`
