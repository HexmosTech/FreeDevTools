---
title: "Convert PAM to GIF - Image Converter | Free DevTools"
name: pamtogif
path: /freedevtools/tldr/common/pamtogif
canonical: "https://hexmos.com/freedevtools/tldr/common/pamtogif/"
description: "Convert PAM images to GIF with Pamtogif. Efficiently transform Netpbm images to GIFs for web use and archival. Free online tool, no registration required."
category: common
keywords:
- pam to gif
- netpbm to gif converter
- image format conversion
- gif encoder
- pam image processing
- command line image converter
- linux image tools
- unix image utilities
- convert netpbm image
- gif creation
features:
- Convert PAM images to GIF format
- Set a specific color as transparent in the output GIF
- Include a comment in the output GIF file
- Encode Netpbm images to GIF
- Process images from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pamtogif

> Convert a Netpbm image into an unanimated GIF image.
> See also: `giftopnm`, `gifsicle`.
> More information: <https://netpbm.sourceforge.net/doc/pamtogif.html>.

- Convert a Netpbm image into an unanimated GIF image:

`pamtogif {{path/to/image.pam}} > {{path/to/output.gif}}`

- Mark the specified color as transparent in the output GIF file:

`pamtogif {{[-t|-transparent]}} {{color}} {{path/to/image.pam}} > {{path/to/output.gif}}`

- Include the specified text as a comment in the output GIF file:

`pamtogif {{[-c|-comment]}} "{{Hello World!}}" {{path/to/image.pam}} > {{path/to/output.gif}}`
