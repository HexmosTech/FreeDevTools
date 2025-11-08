---
title: "JPEGtran - Transform JPEG Images Losslessly | Online Free DevTools by Hexmos"
name: jpegtran
path: "/freedevtools/tldr/linux/jpegtran/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/jpegtran/"
description: "Transform JPEG images losslessly with jpegtran.  Perform operations like mirroring, rotating, transposing, and cropping. Free online tool, no registration required."
category: linux
keywords:
  - jpeg image transformation
  - lossless jpeg manipulation
  - jpegtran command line
  - jpeg mirroring
  - jpeg rotation
  - jpeg cropping
  - jpeg transposition
  - jpeg grayscale conversion
  - image processing command
  - command line image editor
features:
  - Mirror images horizontally or vertically.
  - Rotate images by 90, 180, or 270 degrees.
  - Transpose and transverse images.
  - Convert images to grayscale.
  - Crop images to specified rectangular regions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jpegtran

> Perform lossless transformation of JPEG files.
> More information: <https://manned.org/jpegtran>.

- Mirror an image horizontally or vertically:

`jpegtran {{[-f|-flip]}} {{horizontal|vertical}} {{path/to/image.jpg}} > {{path/to/output.jpg}}`

- Rotate an image 90, 180 or 270 degrees clockwise:

`jpegtran {{[-ro|-rotate]}} {{90|180|270}} {{path/to/image.jpg}} > {{path/to/output.jpg}}`

- Transpose the image across the upper-left to lower right axis:

`jpegtran -transpose {{path/to/image.jpg}} > {{path/to/output.jpg}}`

- Transverse the image across the upper right to lower left axis:

`jpegtran -transverse {{path/to/image.jpg}} > {{path/to/output.jpg}}`

- Convert the image to grayscale:

`jpegtran {{[-g|-grayscale]}} {{path/to/image.jpg}} > {{path/to/output.jpg}}`

- Crop the image to a rectangular region of width `W` and height `H` from the upper-left corner, saving the output to a specific file:

`jpegtran -crop {{W}}x{{H}} -outfile {{path/to/output.jpg}} {{path/to/image.jpg}}`

- Crop the image to a rectangular region of width `W` and height `H`, starting at point `X` and `Y` from the upper-left corner:

`jpegtran -crop {{W}}x{{H}}+{{X}}+{{Y}} {{path/to/image.jpg}} > {{path/to/output.jpg}}`
