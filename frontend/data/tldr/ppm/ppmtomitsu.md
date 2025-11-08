---
title: "Convert PPM to MITSU - Image Converter | Online Free DevTools by Hexmos"
name: ppmtomitsu
path: "/freedevtools/tldr/ppm/ppmtomitsu/"
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtomitsu/"
description: "Convert PPM images to MITSU files with ppmtomitsu, a powerful image converter. Resize images, adjust sharpness, and specify media types. Free online tool, no registration required."
category: common
keywords:
- PPM to MITSU converter
- Image format conversion
- PPM image processing
- MITSU file creation
- Netpbm image tools
- Command line image conversion
- Linux image converter
- macOS image converter
- PPM to S340-10
- Image resizing tool
features:
- Convert PPM images to MITSU format
- Enlarge images by a specified factor
- Adjust image sharpness for optimal output
- Specify the media type for printing
- Create multiple copies of the converted image
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmtomitsu

> Convert a PPM image to a Mitsubishi S340-10 file.
> More information: <https://netpbm.sourceforge.net/doc/ppmtomitsu.html>.

- Convert a PPM image to a MITSU file:

`ppmtomitsu {{path/to/file.ppm}} > {{path/to/file.mitsu}}`

- Enlarge the image by the specified factor, use the specified sharpness and produce `n` copies:

`ppmtomitsu {{[-e|-enlarge]}} {{1|2|3}} {{[-s|-sharpness]}} {{1|2|3|4}} {{[-c|-copy]}} {{n}} {{path/to/file.ppm}} > {{path/to/file.mitsu}}`

- Use the given medium for the printing process:

`ppmtomitsu {{[-m|-media]}} {{A|A4|AS|A4S}} {{path/to/file.ppm}} > {{path/to/file.mitsu}}`
