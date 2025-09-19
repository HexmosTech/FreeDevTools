---
title: "PNG Check - Validate PNG Images | Online Free DevTools by Hexmos"
name: pngcheck
path: /freedevtools/tldr/common/pngcheck
canonical: "https://hexmos.com/freedevtools/tldr/common/pngcheck/"
description: "Validate PNG images quickly with PNGCheck. Verify integrity, extract embedded data, and diagnose issues in PNG, JNG, and MNG files. Free online tool, no registration required."
category: common
keywords:
- png integrity check
- png file validator
- png image verification
- png image analyzer
- png extraction
- png data recovery
- png forensics tool
- png corruption detection
- linux pngcheck
- macos pngcheck
features:
- Verify the integrity of PNG image files
- Extract embedded images from PNGs
- Diagnose PNG file corruption issues
- Display detailed information about PNG files
- Search for and extract PNG images from any file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pngcheck

> Forensics tool for validating the integrity of PNG based (PNG, JNG, MNG) image files.
> Can also extract embedded images and text from a file.
> More information: <https://manned.org/pngcheck>.

- Verify the integrity of an image file (width, height, and color depth):

`pngcheck {{path/to/image.png}}`

- Print information for an image with [c]olorized output:

`pngcheck -c {{path/to/image.png}}`

- Print [v]erbose information for an image:

`pngcheck -cvt {{path/to/image.png}}`

- Receive an image from `stdin` and display detailed information:

`cat {{path/to/image.png}} | pngcheck -cvt`

- [s]earch for PNGs within a specific file and display information about them:

`pngcheck -s {{path/to/image.png}}`

- Search for PNGs within another file and e[x]tract them:

`pngcheck -x {{path/to/image.png}}`
