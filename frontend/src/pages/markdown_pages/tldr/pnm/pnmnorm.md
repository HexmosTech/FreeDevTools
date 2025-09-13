---
title: "Normalize PNM Image - Adjust Contrast | Free DevTools"
name: pnmnorm
path: /freedevtools/tldr/pnm/pnmnorm
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmnorm/"
description: "Adjust PNM image contrast with pnmnorm. Normalize images and enhance their visual appeal using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- PNM image normalization
- PNM contrast enhancement
- image brightness adjustment
- PNM image editor
- Netpbm pnmnorm command
- command-line image processing
- pixel value normalization
- contrast mapping tool
- Linux image utilities
- image color modification
features:
- Normalize contrast in PNM images
- Force brightest pixels to white and darkest to black
- Linearly spread intermediate pixel values
- Adjust brightness based on luminosity, color value, or saturation
- Preserve pixel hues during normalization
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmnorm

> Normalize the contrast in a PNM image.
> See also: `pnmhisteq`.
> More information: <https://netpbm.sourceforge.net/doc/pnmnorm.html>.

- Force the brightest pixels to be white, the darkest pixels to be black and spread out the ones in between linearly:

`pnmnorm {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Force the brightest pixels to be white, the darkest pixels to be black and spread out the ones in between quadratically such that pixels with a brightness of `n` become 50 % bright:

`pnmnorm {{[-midv|-midvalue]}} {{n}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Keep the pixels' hue, only modify the brightness:

`pnmnorm {{[-k|-keephues]}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Specify a method to calculate a pixel's brightness:

`pnmnorm -{{luminosity|colorvalue|saturation}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`
