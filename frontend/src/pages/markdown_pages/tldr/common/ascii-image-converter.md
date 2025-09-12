---
title: "Create ASCII Images - Convert Images to ASCII Art | Free DevTools"
name: ascii-image-converter
path: /freedevtools/tldr/common/ascii-image-converter
canonical: "https://hexmos.com/freedevtools/tldr/common/ascii-image-converter/"
description: "Create ASCII images with ascii-image-converter. Convert image files or URLs to colorful or braille-based ASCII art. Free online tool, no registration required."
category: common
keywords:
- image to ASCII converter
- ASCII art generator
- command line image converter
- terminal image converter
- image to text art
- braille image converter
- color ASCII art
- ascii-image-converter linux
- ascii-image-converter macos
- ascii-image-converter common
features:
- Convert images to ASCII art from the command line
- Colorize ASCII art output for visual appeal
- Generate braille-based ASCII art for detailed representation
- Dither images for smoother transitions in braille output
- Create ASCII art with negative color schemes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ascii-image-converter

> Convert an image into ASCII.
> More information: <https://github.com/TheZoraiz/ascii-image-converter#cli-usage>.

- Convert an image into ASCII:

`ascii-image-converter {{path/to/image|URL}}`

- Colorize the output:

`ascii-image-converter {{[-C|--color]}} {{path/to/image|URL}}`

- Create a tresholded image using braille (if the image is barely visible, try changing the terminal font):

`ascii-image-converter {{[-b|--braille]}} {{path/to/image|URL}}`

- Create a dithered image using braille (if the image is barely visible, try changing the terminal font):

`ascii-image-converter {{[-b|--braille]}} --dither {{path/to/image|URL}}`

- Display the image with negative colors:

`ascii-image-converter {{[-Cn|--color --negative]}} {{path/to/image|URL}}`

- Use a wider range of characters to display an image (may improve image accuracy):

`ascii-image-converter {{[-c|--complex]}} {{path/to/image|URL}}`
