---
title: "Enlarge PAM Image - Scale Pixel Art | Online Free DevTools by Hexmos"
name: pamenlarge
path: "/freedevtools/tldr/common/pamenlarge/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pamenlarge/"
description: "Enlarge PAM images with Pamenlarge, a pixel art scaler for Netpbm. Scale images proportionally or independently. Free online tool, no registration required."
category: common
keywords:
- PAM image enlarger
- Netpbm pixel scaler
- Image scaling tool
- Pixel art upscaler
- PAM resize
- Image pixel replication
- Linux image utilities
- Command-line image tools
- PAM image processing
- Image magnification
features:
- Enlarge PAM images by a specified factor.
- Scale PAM images horizontally and vertically independently.
- Duplicate pixels to increase image size.
- Support proportional image scaling.
- Resize images using command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamenlarge

> Enlarge a PAM image by duplicating pixels.
> See also: `pbmreduce`, `pamditherbw`, `pbmpscale`.
> More information: <https://netpbm.sourceforge.net/doc/pamenlarge.html>.

- Enlarge the specified image by the specified factor:

`pamenlarge {{[-s|-scale]}} {{n}} {{path/to/image.pam}} > {{path/to/output.pam}}`

- Enlarge the specified image by the specified factors horizontally and vertically:

`pamenlarge {{[-x|-xscale]}} {{xn}} {{[-y|-yscale]}} {{yn}} {{path/to/image.pam}} > {{path/to/output.pam}}`
