---
title: "Convert PPM to NTSC/PAL - Color Correct PPM Images | Online Free DevTools by Hexmos"
name: ppmntsc
path: "/freedevtools/tldr/ppm/ppmntsc/"
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmntsc/"
description: "Convert PPM images to NTSC/PAL color spaces with ppmntsc. Adjust RGB values for accurate display. Free online tool, no registration required."
category: common
keywords:
- PPM to NTSC conversion
- PPM to PAL conversion
- Image color correction
- NTSC color encoding
- PAL color encoding
- PPM image processing
- Color space conversion
- Netpbm tools
- RGB color adjustment
- PPM color converter
features:
- Convert PPM images to NTSC color space.
- Convert PPM images to PAL color space.
- Identify illegal color values in PPM images.
- Output only legal, illegal, or corrected pixels.
- Print the number of illegal pixels to stderr.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmntsc

> Make the RGB colors in a PPM image compatible with NTSC or PAL color systems.
> More information: <https://netpbm.sourceforge.net/doc/ppmntsc.html>.

- Make the RGB colors in a PPM image compatible with NTSC color systems:

`ppmntsc {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`

- Make the RGB colors in a PPM image compatible with PAL color systems:

`ppmntsc --pal {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`

- Print the number of illegal pixels in the input image to `stderr`:

`ppmntsc {{[--verb|--verbose]}} {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`

- Output only legal/illegal/corrected pixels, set other pixels to black:

`ppmntsc --{{legalonly|illegalonly|correctedonly}} {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`
