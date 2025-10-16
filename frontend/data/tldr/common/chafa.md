---
title: "Chafa - Render Images in Terminal | Online Free DevTools by Hexmos"
name: chafa
path: "/freedevtools/tldr/common/chafa/"
canonical: "https://hexmos.com/freedevtools/tldr/common/chafa/"
description: "Render images easily with Chafa, the terminal image printer. Convert images to ASCII art and display them directly in your terminal. Free online tool, no registration required."
category: common
keywords:
- terminal image printer
- command line image renderer
- chafa ascii art
- image to terminal converter
- linux terminal graphics
- macos terminal graphics
- image dithering command
- 24-bit color terminal image
- braille terminal image
- pixelated terminal image
features:
- Render images directly in the terminal
- Support for 24-bit color image rendering
- Apply dithering for improved color palette rendering
- Create pixelated image output
- Render monochrome images with braille characters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chafa

> Image printing in the terminal.
> See also: `catimg`, `pixterm`.
> More information: <https://hpjansson.org/chafa/man>.

- Render an image directly in the terminal:

`chafa {{path/to/file}}`

- Render an image with 24-bit color:

`chafa {{[-c|--colors]}} full {{path/to/file}}`

- Improve image rendering with small color palettes using dithering:

`chafa {{[-c|--colors]}} 16 --dither ordered {{path/to/file}}`

- Render an image, making it appear pixelated:

`chafa --symbols vhalf {{path/to/file}}`

- Render a monochrome image with only braille characters:

`chafa {{[-c|--colors]}} none --symbols braille {{path/to/file}}`
