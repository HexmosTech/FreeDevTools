---
title: "Pamarith - Apply Binary Functions on Images | Online Free DevTools by Hexmos"
name: pamarith
path: /freedevtools/tldr/common/pamarith
canonical: "https://hexmos.com/freedevtools/tldr/common/pamarith/"
description: "Apply binary operations with Pamarith. Process Netpbm images by adding, subtracting, or multiplying pixels. Free online tool, no registration required."
category: common
keywords:
- netpbm arithmetic
- image binary function
- pam image processing
- pbm image arithmetic
- pgm image manipulation
- ppm image processing
- image pixel math
- netpbm image tool
- linux image tools
- command line image editor
features:
- Apply addition between two Netpbm images
- Perform subtraction between two Netpbm images
- Execute multiplication on pixels of two Netpbm images
- Calculate the difference between pixels of two Netpbm images
- Determine the minimum or maximum pixel values between two images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pamarith

> Apply a binary function on two Netpbm images.
> See also: `pamfunc`.
> More information: <https://netpbm.sourceforge.net/doc/pamarith.html>.

- Apply the specified binary function pixel-wise on the two specified images (which must be of the same size):

`pamarith -{{add|subtract|multiply|divide|difference|minimum|maximum|...}} {{path/to/image1.pam|pbm|pgm|ppm}} {{path/to/image2.pam|pbm|pgm|ppm}}`
