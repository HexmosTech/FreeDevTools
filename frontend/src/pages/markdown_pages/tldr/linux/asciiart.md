---
title: "ASCII Art Generator - Convert Images to ASCII | Free DevTools"
name: asciiart
path: /freedevtools/tldr/linux/asciiart
canonical: "https://hexmos.com/freedevtools/tldr/linux/asciiart/"
description: "Convert images to ASCII art with this free online tool.  Easily transform JPGs and other image formats into text-based art. Free online tool, no registration required."
category: linux
keywords:
  - image to ascii converter
  - ascii art generator
  - image ascii art
  - convert image to text
  - ascii image converter
  - text art generator
  - jpg to ascii
  - png to ascii
  - ascii image art
  - online ascii art converter
features:
  - Converts images from files to ASCII art.
  - Converts images from URLs to ASCII art.
  - Allows customization of output width.
  - Offers colorized ASCII output.
  - Supports text and HTML output formats.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# asciiart

> Convert images to ASCII.
> More information: <https://github.com/nodanaonlyzuul/asciiart>.

- Read an image from a file and print in ASCII:

`asciiart {{path/to/image.jpg}}`

- Read an image from a URL and print in ASCII:

`asciiart {{www.example.com/image.jpg}}`

- Choose the output width (default is 100):

`asciiart {{[-w|--width]}} {{50}} {{path/to/image.jpg}}`

- Colorize the ASCII output:

`asciiart {{[-c|--color]}} {{path/to/image.jpg}}`

- Choose the output format (default format is text):

`asciiart {{[-f|--format]}} {{text|html}} {{path/to/image.jpg}}`

- Invert the character map:

`asciiart {{[-i|--invert-chars]}} {{path/to/image.jpg}}`
