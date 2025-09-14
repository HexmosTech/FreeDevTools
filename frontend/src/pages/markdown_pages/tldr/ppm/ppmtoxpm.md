---
title: "Convert PPM to XPM - Create XPM Images | Free DevTools"
name: ppmtoxpm
path: /freedevtools/tldr/ppm/ppmtoxpm
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtoxpm/"
description: "Convert PPM images to XPM format with ppmtoxpm. Generate XPM files from PPM input, specifying prefixes, color encoding, and transparency masks. Free online tool, no registration required."
category: common
keywords:
- PPM to XPM converter
- XPM image creation
- PPM image manipulation
- Netpbm image converter
- Command line image tool
- Image format conversion
- PPM image processing
- Linux image tools
- macOS image tools
- PPM to XPM command
features:
- Convert PPM images to XPM format.
- Specify a prefix string for the XPM image.
- Define colors using hexadecimal codes.
- Use a PGM file as a transparency mask.
- Generate XPM images from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtoxpm

> Convert a PPM image to an X11 version 3 pixmap.
> More information: <https://netpbm.sourceforge.net/doc/ppmtoxpm.html>.

- Convert a PPM image to a XPM image:

`ppmtoxpm {{path/to/input_file.ppm}} > {{path/to/output_file.xpm}}`

- Specify the prefix string in the output XPM image:

`ppmtoxpm {{[-n|-name]}} {{prefix_string}} {{path/to/input_file.ppm}} > {{path/to/output_file.xpm}}`

- In the output XPM file, specify colors by their hexadecimal code instead of their name:

`ppmtoxpm {{[-h|-hexonly]}} {{path/to/input_file.ppm}} > {{path/to/output_file.xpm}}`

- Use the specified PGM file as a transparency mask:

`ppmtoxpm {{[-a|-alphamask]}} {{path/to/alpha_file.pgm}} {{path/to/input_file.ppm}} > {{path/to/output_file.xpm}}`
