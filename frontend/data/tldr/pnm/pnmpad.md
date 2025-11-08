---
title: "Pad PNM Image - Add Borders | Online Free DevTools by Hexmos"
name: pnmpad
path: "/freedevtools/tldr/pnm/pnmpad/"
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmpad/"
description: "Add borders to PNM image with pnmpad. Pad images to specified dimensions and control border colors for image editing. Free online tool, no registration required."
category: common
keywords:
- PNM image padding
- Image border tool
- PNM editor command
- Netpbm utilities
- Image manipulation linux
- Command line image tool
- Image resizing tool
- PNM margin editor
- Image format conversion
- Color border adder
features:
- Add borders of specific sizes to PNM images
- Pad PNM images to a defined width and height
- Control the ratio of left and right padding
- Specify border color using names or hex codes
- Resize images while maintaining aspect ratio
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmpad

> Add borders to a PNM image.
> See also: `pnmmargin`, `pamcut`, `pamcomp`.
> More information: <https://netpbm.sourceforge.net/doc/pnmpad.html>.

- Add borders of the specified sizes to the image:

`pnmpad {{[-l|-left]}} {{100}} {{[-ri|-right]}} {{150}} {{[-t|-top]}} {{123}} {{[-bo|-bottom]}} {{456}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Pad the image to the specified size:

`pnmpad {{[-wi|-width]}} {{1000}} {{[-he|-height]}} {{500}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Pad the width of the image to the specified size, controlling the ratio between right and left padding:

`pnmpad {{[-wi|-width]}} {{1000}} {{[-ha|-halign]}} {{0.7}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Pad the width of the image using the specified color:

`pnmpad {{[-wi|-width]}} {{1000}} {{[-c|-color]}} {{red}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`
