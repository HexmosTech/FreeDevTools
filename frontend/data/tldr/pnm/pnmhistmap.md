---
title: "Generate PNM Histogram - Visualize Image Data | Online Free DevTools by Hexmos"
name: pnmhistmap
path: "/freedevtools/tldr/pnm/pnmhistmap/"
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmhistmap/"
description: "Generate PNM histogram data with pnmhistmap. Analyze image color distribution and intensity values. Free online tool, no registration required."
category: common
keywords:
- PNM histogram generator
- Image histogram creation
- PNM image analysis
- Color distribution visualization
- Intensity value plotting
- PNM to histogram conversion
- Netpbm tools
- Image processing command line
- Linux image tools
- Histogram data extraction
features:
- Create a histogram representation of a PNM image.
- Output the histogram as either bars or dots.
- Specify the minimum and maximum intensity values to analyze.
- Visualize color distribution in PNM images.
- Analyze image intensity values using a histogram.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmhistmap

> Draw a histogram of a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmhistmap.html>.

- Draw a histogram of a PNM image:

`pnmhistmap {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Draw the histogram as dots instead of bars:

`pnmhistmap {{[-d|-dots]}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Specify the range of intensity values to include:

`pnmhistmap {{[-l|-lval]}} {{minval}} {{[-rv|-rval]}} {{maxval}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`
