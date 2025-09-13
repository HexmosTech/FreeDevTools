---
title: "Convert PAM to PNG - Optimize Images | Free DevTools"
name: pamtopng
path: /freedevtools/tldr/common/pamtopng
canonical: "https://hexmos.com/freedevtools/tldr/common/pamtopng/"
description: "Convert PAM to PNG format with pamtopng. Transform your Portable Arbitrary Map images to PNG online, customize transparency, and optimize for web use. Free online tool, no registration required."
category: common
keywords:
- PAM to PNG converter
- PNG image generation
- Netpbm image conversion
- Image format conversion
- Command line image tool
- Linux image utility
- MacOS image conversion
- Transparent PNG creation
- Image interlace tool
- PAM image processing
features:
- Convert PAM images to PNG format
- Define transparent colors in the output PNG
- Embed text data into PNG images
- Interlace PNG images for progressive loading
- Process PAM images using command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pamtopng

> Convert a PAM image to PNG.
> See also: `pnmtopng`, `pngtopam`.
> More information: <https://netpbm.sourceforge.net/doc/pamtopng.html>.

- Convert the specified PAM image to PNG:

`pamtopng {{path/to/image.pam}} > {{path/to/output.png}}`

- Mark the specified color as transparent in the output image:

`pamtopng {{[-t|-transparent]}} {{color}} {{path/to/image.pam}} > {{path/to/output.png}}`

- Include the text in the specified file as tEXt chunks in the output:

`pamtopng {{[-te|-text]}} {{path/to/file.txt}} {{path/to/image.pam}} > {{path/to/output.png}}`

- Cause the output file to be interlaced in Adam7 format:

`pamtopng {{[-in|-interlace]}} {{path/to/image.pam}} > {{path/to/output.png}}`
