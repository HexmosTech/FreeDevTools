---
title: "Stretch PAM Image - Scale Images with Pamstretch | Online Free DevTools by Hexmos"
name: pamstretch
path: "/freedevtools/tldr/common/pamstretch/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pamstretch/"
description: "Scale PAM images with Pamstretch, a versatile image manipulation tool. Resize and enlarge images using pixel interpolation. Free online tool, no registration required."
category: common
keywords:
- PAM image scaling
- Image stretching tool
- PAM image resizing
- Pixel interpolation
- Netpbm image tools
- Image scaling command line
- PAM manipulation
- Image enlargement
- Pamstretch Linux
- Image processing command
features:
- Scale PAM images by integer factors
- Enlarge PAM images with interpolation
- Resize images with specific horizontal and vertical scaling factors
- Process PAM images directly from the command line
- Perform pixel-based image stretching
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamstretch

> Scale up a PAM image by interpolating between pixels.
> See also: `pamstretch-gen`, `pamenlarge`, `pamscale`.
> More information: <https://netpbm.sourceforge.net/doc/pamstretch.html>.

- Scale up a PAM image by an integer factor:

`pamstretch {{n}} {{path/to/image.pam}} > {{path/to/output.pam}}`

- Scale up a PAM image by the specified factors in the horizontal and vertical directions:

`pamstretch {{[-x|-xscale]}} {{xn}} {{[-y|-yscale]}} {{yn}} {{path/to/image.pam}} > {{path/to/output.pam}}`
