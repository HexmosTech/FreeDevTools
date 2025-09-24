---
title: "Generate Greyscale Map - pgmramp | Online Free DevTools by Hexmos"
name: pgmramp
path: /freedevtools/tldr/common/pgmramp
canonical: "https://hexmos.com/freedevtools/tldr/common/pgmramp/"
description: "Generate a greyscale image map with pgmramp. Create various greyscale gradients and patterns using command-line options. Free online tool, no registration required."
category: common
keywords:
- pgm greyscale image
- greyscale map generation
- pgm ramp generator
- netpbm image tools
- command line image
- greyscale gradient creation
- image manipulation linux
- image conversion tool
- pgm image creation
- greyscale pattern generator
features:
- Generate left-to-right greyscale maps
- Generate top-to-bottom greyscale maps
- Generate rectangular greyscale maps
- Generate elliptical greyscale maps
- Generate diagonal greyscale maps
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pgmramp

> Generate a greyscale map.
> More information: <https://netpbm.sourceforge.net/doc/pgmramp.html>.

- Generate a left-to-right greyscale map:

`pgmramp -lr > {{path/to/output.pgm}}`

- Generate a top-to-bottom greyscale map:

`pgmramp -tb > {{path/to/output.pgm}}`

- Generate a rectangular greyscale map:

`pgmramp -rectangle > {{path/to/output.pgm}}`

- Generate a elliptical greyscale map:

`pgmramp -ellipse {{path/to/image.pgm}} > {{path/to/output.pgm}}`

- Generate a greyscale map from the top-left corner to the bottom-right corner:

`pgmramp -diagonal {{path/to/image.pgm}} > {{path/to/output.pgm}}`
