---
title: "Generate PPM TV Effect - Simulate American TV Look | Online Free DevTools by Hexmos"
name: ppmtv
path: /freedevtools/tldr/ppm/ppmtv
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtv/"
description: "Generate a realistic American TV effect with Ppmtv. Dim every other row of a PPM image to simulate scanlines. Free online tool, no registration required."
category: common
keywords:
- PPM image TV effect
- PPM scanline generator
- Netpbm PPM editor
- Image distortion tool
- PPM image filter
- Linux image manipulation
- Command-line image processing
- American TV simulator
- PPM image dimming
- Scanline effect generator
features:
- Simulate an American TV look on PPM images
- Dim alternate rows of image data
- Control the dim factor for the TV effect
- Suppress informational messages during processing
- Display the version of the ppmtv tool
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmtv

> Make a PPM Image look like taken from an American TV.
> Dim every other row of image data down by the specified dim factor (a number between 0 and 1).
> More information: <https://netpbm.sourceforge.net/doc/ppmtv.html>.

- Give the PPM image an American TV appearance:

`ppmtv {{dim_factor}} {{path/to/file.ppm}} > {{path/to/output.ppm}}`

- Suppress all informational messages:

`ppmtv {{[-q|-quiet]}}`

- Display version:

`ppmtv {{[-v|-version]}}`
