---
title: "PAM Slice - Extract Image Data | Online Free DevTools by Hexmos"
name: pamslice
path: "/freedevtools/tldr/common/pamslice/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pamslice/"
description: "Extract image data with PAM Slice. Precisely select rows or columns from PAM images. Free online tool, no registration required."
category: common
keywords:
- PAM image slice
- PAM data extraction
- Image row extraction
- Image column extraction
- Netpbm tools
- Image processing command
- PAM format analysis
- Linux image manipulation
- Command line image tools
- PAM plane selection
features:
- Extract pixel values from a specified row
- Extract pixel values from a specified column
- Select a specific plane from a PAM image
- Format output for visualization with `xmgr`
- Process PAM images from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamslice

> Extract one line of values out of a PAM image.
> More information: <https://netpbm.sourceforge.net/doc/pamslice.html>.

- Print the values of the pixels in the n'th row in a table:

`pamslice {{[-r|-row]}} {{n}} {{path/to/image.pam}}`

- Print the values of the pixels in the n'th column in a table:

`pamslice {{[-c|-column]}} {{n}} {{path/to/image.pam}}`

- Consider the m'th plane of the input image only:

`pamslice {{[-r|-row]}} {{n}} -plane {{m}} {{path/to/image.pam}}`

- Produce output in a format suitable for input to an `xmgr` for visualisation:

`pamslice {{[-r|-row]}} {{n}} {{[-x|-xmgr]}} {{path/to/image.pam}}`
