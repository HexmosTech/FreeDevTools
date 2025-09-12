---
title: "Generate PPM Color Wheel - Image Creation | Free DevTools"
name: ppmwheel
path: /freedevtools/tldr/common/ppmwheel
canonical: "https://hexmos.com/freedevtools/tldr/common/ppmwheel/"
description: "Generate color wheel images with ppmwheel. Create various PPM image formats, including Ppmcirc, Hue-value, and Hue-saturation. Free online tool, no registration required."
category: common
keywords:
- PPM image generator
- Color wheel creator
- Image format conversion
- Netpbm color tool
- PPM image creation
- Linux image tools
- MacOS image generation
- Command line image tool
- Image rendering tool
- Color palette generator
features:
- Generate PPM images of color wheels
- Create Ppmcirc color wheel images
- Generate Hue-value color wheels
- Generate Hue-saturation color wheels
- Specify the diameter of the color wheel
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmwheel

> Generate a PPM image of a color wheel.
> More information: <https://netpbm.sourceforge.net/doc/ppmwheel.html>.

- Generate a color wheel of type `Ppmcirc`:

`ppmwheel {{diameter}} > {{path/to/output.ppm}}`

- Generate a color wheel of type `Hue-value`:

`ppmwheel {{[-huev|-huevalue]}} {{diameter}} > {{path/to/output.ppm}}`

- Generate a color wheel of type `Hue-saturation`:

`ppmwheel {{[-hues|-huesaturation]}} {{diameter}} > {{path/to/output.ppm}}`
