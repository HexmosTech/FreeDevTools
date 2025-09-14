---
title: "Convert PBM to ASCII - Image Conversion | Free DevTools"
name: pbmtoascii
path: /freedevtools/tldr/common/pbmtoascii
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtoascii/"
description: "Convert PBM to ASCII with pbmtoascii. Transform binary images to readable ASCII art. Free online tool, no registration required."
category: common
keywords:
- pbm to ascii
- pbm to text
- image to ascii converter
- ascii art generator
- netpbm tools
- linux image tools
- command line image converter
- bitmap to ascii
- portable bitmap to ascii
- image manipulation
features:
- Convert PBM image files to ASCII graphics.
- Customize the pixel mapping for different output resolutions.
- Save the ASCII output to a specified file.
- Display the version of the pbmtoascii utility.
- Process PBM images directly from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmtoascii

> Convert a PBM image to ASCII graphics.
> See also: `ppmtoascii`, `asciitopgm`, `ppmtoterm`.
> More information: <https://netpbm.sourceforge.net/doc/pbmtoascii.html>.

- Read a PBM file as input and produce an ASCII output:

`pbmtoascii {{path/to/input_file.pbm}}`

- Read a PBM file as input and save an ASCII output into a file:

`pbmtoascii {{path/to/input_file.pbm}} > {{path/to/output_file}}`

- Read a PBM file as input while setting the pixel mapping (defaults to 1x2):

`pbmtoascii -{{1x2|2x4}} {{path/to/input_file.pbm}}`

- Display version:

`pbmtoascii {{[-v|-version]}}`
