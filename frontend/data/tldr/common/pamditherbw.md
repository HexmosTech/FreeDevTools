---
title: "Dither Greyscale Image - Convert to Black & White | Online Free DevTools by Hexmos"
name: pamditherbw
path: "/freedevtools/tldr/common/pamditherbw/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pamditherbw/"
description: "Dither greyscale images with pamditherbw, converting them to black and white patterns. Reduce image size and optimize visual representation. Free online tool, no registration required."
category: common
keywords:
- PGM Image Dithering
- Greyscale to Black and White Conversion
- Image Quantization
- Black and White Pattern Generation
- PAM Image Processing
- Netpbm Image Tools
- Command Line Image Manipulation
- Image Dithering Algorithms
- Floyd-Steinberg Dithering
- Atkinson Dithering
features:
- Apply dithering to greyscale images
- Convert images to black and white pixel patterns
- Use various quantization methods like Floyd-Steinberg and Atkinson
- Specify random seed for dithering algorithms
- Adjust thresholding values for quantization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamditherbw

> Apply dithering to a greyscale image, i.e. turn it into a pattern of black and white pixels that look the same as the original greyscale.
> See also: `pbmreduce`.
> More information: <https://netpbm.sourceforge.net/doc/pamditherbw.html>.

- Read a PGM image, apply dithering and save it to a file:

`pamditherbw {{path/to/image.pgm}} > {{path/to/file.pgm}}`

- Use the specified quantization method:

`pamditherbw -{{floyd|fs|atkinson|threshold|hilbert|...}} {{path/to/image.pgm}} > {{path/to/file.pgm}}`

- Use the atkinson quantization method and the specified seed for a pseudo-random number generator:

`pamditherbw {{[-a|-atkinson]}} {{[-r|-randomseed]}} {{1337}} {{path/to/image.pgm}} > {{path/to/file.pgm}}`

- Specify the thresholding value for quantization methods that perform some sort of thresholding:

`pamditherbw -{{fs|atkinson|thresholding}} {{[-va|-value]}} {{0.3}} {{path/to/image.pgm}} > {{path/to/file.pgm}}`
