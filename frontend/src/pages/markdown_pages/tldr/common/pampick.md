---
title: "Pick Images - Extract PAM Images | Free DevTools"
name: pampick
path: /freedevtools/tldr/common/pampick
canonical: "https://hexmos.com/freedevtools/tldr/common/pampick/"
description: "Extract PAM images with pampick. Select specific images from a multi-image Netpbm stream. Free online tool, no registration required."
category: common
keywords:
- Netpbm image extraction
- PAM image picker
- Multi-image processing
- Image sequence selection
- Command-line image tools
- Linux image manipulation
- Image format conversion
- Netpbm utilities
- Image stream processing
- pampick command
features:
- Extract specified images from a PAM stream
- Output selected images to a new PAM file
- Process multi-image Netpbm files
- Filter images based on their index
- Integrate with shell scripts for automated processing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pampick

> Pick images out of a multi-image Netpbm stream.
> See also: `pamfile`, `pamsplit`.
> More information: <https://netpbm.sourceforge.net/doc/pampick.html>.

- Execute a shell command on each image in a Netpbm file:

`pampick {{image_number1 image_number2 ...}} < {{path/to/image.pam}} > {{path/to/output.pam}}`
