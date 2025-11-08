---
title: "Antialias PNM Image - Enhance PNM Graphics | Online Free DevTools by Hexmos"
name: pnmalias
path: "/freedevtools/tldr/pnm/pnmalias/"
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmalias/"
description: "Antialias PNM images with pnmalias. Improve graphic quality by smoothing pixelated edges and specify foreground/background colors. Free online tool, no registration required."
category: common
keywords:
- PNM image antialiasing
- PNM graphic enhancement
- Image smoothing tool
- PNM image editor
- Pixelated edge removal
- Command line image processing
- Netpbm utilities
- PNM to PPM conversion
- Image color manipulation
- Linux image tools
features:
- Apply antialiasing to PNM images
- Specify background and foreground colors
- Antialias foreground pixels only
- Antialias surrounding background pixels
- Convert PNM images to PPM format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmalias

> Apply antialiasing onto a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmalias.html>.

- Perform antialiasing on a PNM image, taking black pixels as background and white pixels as foreground:

`pnmalias {{path/to/input.pnm}} > {{path/to/output.ppm}}`

- Explicitly specify the background and foreground color:

`pnmalias -bcolor {{background_color}} -fcolor {{foreground_color}} {{path/to/input.pnm}} > {{path/to/output.ppm}}`

- Apply altialiasing to foreground pixels only:

`pnmalias {{[-fo|-fonly]}} {{path/to/input.pnm}} > {{path/to/output.ppm}}`

- Apply antialiasing to all surrounding pixels of background pixels:

`pnmalias {{[-ba|-balias]}} {{path/to/input.pnm}} > {{path/to/output.ppm}}`
