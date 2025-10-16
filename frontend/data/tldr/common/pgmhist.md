---
title: "Generate PGM Histogram - Analyze Image Values | Online Free DevTools by Hexmos"
name: pgmhist
path: "/freedevtools/tldr/common/pgmhist/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pgmhist/"
description: "Generate PGM histogram with pgmhist, analyze image grey values. Discover value distribution and forensic data. Free online tool, no registration required."
category: common
keywords:
- PGM image histogram
- PGM analysis
- Grey value distribution
- Image forensic data
- Netpbm tools
- Linux image analysis
- PGM statistics
- Image grey value quartiles
- PGM image processing
- Histogram visualization
features:
- Display histogram for visual analysis
- Calculate median grey value of PGM image
- Determine quartile grey values
- Detect invalid grey values in PGM image
- Output machine-readable histogram data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pgmhist

> Print a histogram of the values present in a PGM image.
> See also: `ppmhist`.
> More information: <https://netpbm.sourceforge.net/doc/pgmhist.html>.

- Display the histogram for human reading:

`pgmhist {{path/to/image.pgm}}`

- Display the median grey value:

`pgmhist {{[-me|-median]}} {{path/to/image.pgm}}`

- Display four quartile grey value:

`pgmhist {{[-qua|-quartile]}} {{path/to/image.pgm}}`

- Report the existence of invalid grey values:

`pgmhist {{[-f|-forensic]}} {{path/to/image.pgm}}`

- Display machine-readable output:

`pgmhist {{[-ma|-machine]}} {{path/to/image.pgm}}`
