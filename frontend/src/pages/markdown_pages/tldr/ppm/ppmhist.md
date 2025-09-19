---
title: "Generate PPM Histogram - Analyze Image Colors | Online Free DevTools by Hexmos"
name: ppmhist
path: /freedevtools/tldr/ppm/ppmhist
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmhist/"
description: "Analyze image colors with PPM Histogram. Create PPM color maps and generate color distribution reports from PPM images. Free online tool, no registration required."
category: common
keywords:
- PPM color histogram
- PPM image analysis
- image color distribution
- Netpbm ppmhist
- image histogram generator
- PPM colormap generator
- linux image tools
- command line histogram
- image color analyzer
- PPM color statistics
features:
- Generates a human-readable color histogram from PPM images
- Creates a PPM file representing the image's color map
- Outputs color distribution as comments in a PPM file
- Supports generating histograms with or without colormaps
- Displays the version of the ppmhist tool
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmhist

> Print a histogram of the colors present in a PPM image.
> See also: `pgmhist`.
> More information: <https://netpbm.sourceforge.net/doc/ppmhist.html>.

- Generate the histogram for human reading:

`ppmhist {{[-nom|-nomap]}} {{path/to/image.ppm}}`

- Generate a PPM file of the colormap for the image, with the color histogram as comments:

`ppmhist {{[-m|-map]}} {{path/to/image.ppm}}`

- Display version:

`ppmhist {{[-v|-version]}}`
