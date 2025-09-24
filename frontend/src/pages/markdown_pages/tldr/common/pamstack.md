---
title: "Stack PAM Images - Create Image Stacks | Online Free DevTools by Hexmos"
name: pamstack
path: /freedevtools/tldr/common/pamstack
canonical: "https://hexmos.com/freedevtools/tldr/common/pamstack/"
description: "Create image stacks with pamstack. Stack multiple PAM images into a single image. Optimize image processing workflow with this free online tool, no registration required."
category: common
keywords:
- PAM image stacking
- Image plane stacking
- Netpbm pamstack
- PAM image processing
- Image manipulation tool
- Linux image tools
- Image format conversion
- Multi-image processing
- PAM tuple type
- Image data manipulation
features:
- Stack planes from multiple PAM images
- Define the output PAM file's tuple type
- Combine PAM images in a specified order
- Create a new PAM image from stacked planes
- Manipulate image data using command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamstack

> Stack the planes of multiple PAM images into one PAM image.
> More information: <https://netpbm.sourceforge.net/doc/pamstack.html>.

- Stack the planes of the specified PAM images in the specified order:

`pamstack {{path/to/image1.pam path/to/image2.pam ...}} > {{path/to/output.pam}}`

- Specify the tuple type name of the output PAM file (maximum of 255 characters):

`pamstack {{[-t|-tupletype]}} {{tuple_type}} {{path/to/image1.pam path/to/image2.pam ...}} > {{path/to/output.pam}}`
