---
title: "PPM Change - Modify PPM Image Colors | Online Free DevTools by Hexmos"
name: ppmchange
path: "/freedevtools/tldr/ppm/ppmchange/"
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmchange/"
description: "Modify PPM image colors with PPM Change. Replace specific colors or the remainder of an image based on a percentage of similarity. Free online tool, no registration required."
category: common
keywords:
- PPM image color change
- PPM color replacement
- Netpbm image editing
- Image color manipulation
- PPM pixel modification
- Linux image tools
- Command line image processing
- PPM color alteration
- Image color converter
- PPM image editor
features:
- Replace specific colors in PPM images.
- Define color similarity percentage for replacement.
- Replace unspecified pixels with a specified color.
- Process PPM images using command-line arguments.
- Batch modify PPM image colors.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmchange

> Change all pixels of one color in a PPM image to another color.
> More information: <https://netpbm.sourceforge.net/doc/ppmchange.html>.

- Exchange the first color in each `oldcolor` - `newcolor` pair with the second color:

`ppmchange {{oldcolor1 newcolor1 oldcolor2 newcolor2 ...}} {{path/to/input.ppm}} > {{path/to/output.ppm}}`

- Specify how similar colors must be in order to be considered the same:

`ppmchange -closeness {{percentage}} {{oldcolor1 newcolor1 oldcolor2 newcolor2 ...}} {{path/to/input.ppm}} > {{path/to/output.ppm}}`

- Replace all pixels not specified in the arguments by a color:

`ppmchange {{[-r|-remainder]}} {{color}} {{oldcolor1 newcolor1 oldcolor2 newcolor2 ...}} {{path/to/input.ppm}} > {{path/to/output.ppm}}`
