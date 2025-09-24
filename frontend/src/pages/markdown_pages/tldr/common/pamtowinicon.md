---
title: "Convert PAM to ICO - Create Windows Icons | Online Free DevTools by Hexmos"
name: pamtowinicon
path: /freedevtools/tldr/common/pamtowinicon
canonical: "https://hexmos.com/freedevtools/tldr/common/pamtowinicon/"
description: "Convert PAM images to ICO format with pamtowinicon. Create Windows icons from PAM files with custom PNG threshold and transparency. Free online tool, no registration required."
category: common
keywords:
- PAM to ICO converter
- ICO file generator
- Windows icon creator
- PAM image conversion
- Netpbm conversion tools
- Image format conversion
- Linux image utilities
- Command line icon tool
- Bitmap to ICO
- PNG to ICO
features:
- Converts PAM images to Windows ICO files
- Supports custom PNG threshold for encoding
- Enables true transparency for icon creation
- Creates icons with specified background color
- Encodes images smaller than threshold in BMP format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamtowinicon

> Convert a PAM image to a Windows ICO file.
> More information: <https://netpbm.sourceforge.net/doc/pamtowinicon.html>.

- Convert a PAM image file to an ICO file:

`pamtowinicon {{path/to/input_file.pam}} > {{path/to/output.ico}}`

- Encode images with resolutions smaller than t in the BMP format and all other images in the PNG format:

`pamtowinicon {{[-pn|-pngthreshold]}} {{t}} {{path/to/input_file.pam}} > {{path/to/output.ico}}`

- Make all pixels outside the non-opaque area black:

`pamtowinicon {{[-t|-truetransparent]}} {{path/to/input_file.pam}} > {{path/to/output.ico}}`
