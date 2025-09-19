---
title: "PAM Overlay - Compose Images with PAMCOMP | Online Free DevTools by Hexmos"
name: pamcomp
path: /freedevtools/tldr/common/pamcomp
canonical: "https://hexmos.com/freedevtools/tldr/common/pamcomp/"
description: "Compose PAM images with PAMCOMP. Overlay, align, and set opacity to create complex image compositions. Free online tool, no registration required."
category: common
keywords:
- PAM image overlay
- PAM image composition
- Netpbm image editor
- PAM image alignment
- PAM image opacity
- Image blending tool
- Image masking tool
- Linux image processing
- Command line image manipulation
- Image overlay utility
features:
- Overlay one PAM image onto another.
- Control horizontal and vertical alignment of the overlay image.
- Adjust the opacity of the overlay to create transparency effects.
- Block parts of underlay with the overlay.
- Create sophisticated image compositions from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pamcomp

> Overlay two PAM images.
> More information: <https://netpbm.sourceforge.net/doc/pamcomp.html>.

- Overlay two images such with the overlay blocking parts of the underlay:

`pamcomp {{path/to/overlay.pam}} {{path/to/underlay.pam}} > {{path/to/output.pam}}`

- Set the horizontal alignment of the overlay:

`pamcomp {{[-ali|-align]}} {{left|center|right|beyondleft|beyondright}} {{[-x|-xoff]}} {{x_offset}} {{path/to/overlay.pam}} {{path/to/underlay.pam}} > {{path/to/output.pam}}`

- Set the vertical alignment of the overlay:

`pamcomp {{[-va|-valign]}} {{top|middle|bottom|above|below}} {{[-y|-yoff]}} {{y_offset}} {{path/to/overlay.pam}} {{path/to/underlay.pam}} > {{path/to/output.pam}}`

- Set the opacity of the overlay:

`pamcomp {{[-o|-opacity]}} {{0.7}} {{path/to/overlay.pam}} {{path/to/underlay.pam}} > {{path/to/output.pam}}`
