---
title: "Magick - Convert Image Formats | Online Free DevTools by Hexmos"
name: magick
path: "/freedevtools/tldr/magick/magick/"
canonical: "https://hexmos.com/freedevtools/tldr/magick/magick/"
description: "Convert image formats with Magick. Resize, create GIFs, and generate patterns with this powerful command-line image manipulation tool. Free online tool, no registration required."
category: common
keywords:
- image converter
- image format converter
- image manipulation
- command line image processing
- png to jpg converter
- jpg to pdf converter
- gif creator
- magick image resize
- image magick linux
- magick command
features:
- Convert between various image formats
- Resize images while preserving quality
- Create GIF animations from image sequences
- Generate patterned images like checkerboards
- Combine multiple images into a single PDF file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# magick

> Create, edit, compose, or convert between image formats.
> This tool replaces `convert` in ImageMagick 7+. See `magick convert` to use the old tool in versions 7+.
> Some subcommands, such as `mogrify` have their own usage documentation.
> More information: <https://imagemagick.org>.

- Convert between image formats:

`magick {{path/to/input_image.png}} {{path/to/output_image.jpg}}`

- Resize an image, making a new copy:

`magick {{path/to/input_image.jpg}} -resize {{100x100}} {{path/to/output_image.jpg}}`

- Create a GIF out of all JPEG images in the current directory:

`magick {{*.jpg}} {{path/to/images.gif}}`

- Create a checkerboard pattern:

`magick -size {{640x480}} pattern:checkerboard {{path/to/checkerboard.png}}`

- Create a PDF file out of all JPEG images in the current directory:

`magick {{*.jpg}} -adjoin {{path/to/file.pdf}}`
