---
title: "Pixterm Image Printer - Render Images in Terminal | Online Free DevTools by Hexmos"
name: pixterm
path: /freedevtools/tldr/common/pixterm
canonical: "https://hexmos.com/freedevtools/tldr/common/pixterm/"
description: "Render images directly in your terminal with Pixterm Image Printer. Convert images to terminal art using advanced dither and aspect ratio controls. Free online tool, no registration required."
category: common
keywords:
- Terminal image printer
- Image to terminal converter
- CLI image viewer
- ASCII art generator
- Terminal graphics rendering
- Command line image tool
- Linux image display
- macOS image display
- Console image rendering
- Terminal image output
features:
- Render images directly in the terminal
- Control image aspect ratio for terminal output
- Specify terminal row and column size for image display
- Filter image output with matte backgrounds
- Apply character dithering to terminal images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pixterm

> Image printing in the terminal.
> See also: `chafa`, `catimg`.
> More information: <https://github.com/eliukblau/pixterm>.

- Render a static image directly in the terminal:

`pixterm {{path/to/file}}`

- Use the image's original aspect ratio:

`pixterm -s 2 {{path/to/file}}`

- Specify a custom aspect ratio using a specific number of [t]erminal [r]ows and [c]olumns:

`pixterm -tr {{24}} -tc {{80}} {{path/to/file}}`

- Filter the output with a [m]atte background color and character [d]ithering:

`pixterm -m {{000000}} -d 2 {{path/to/file}}`
