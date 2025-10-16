---
title: "Convert Images - Magick Convert Image Formats | Online Free DevTools by Hexmos"
name: magick-convert
path: "/freedevtools/tldr/magick/magick-convert/"
canonical: "https://hexmos.com/freedevtools/tldr/magick/magick-convert/"
description: "Convert images with Magick Convert. Scale, join, and create images between various formats quickly and easily. Free online tool, no registration required."
category: common
keywords:
- image format converter
- image scaler
- batch image processing
- image manipulation command line
- convert jpg to png
- resize image
- magick command
- imagemagick convert
- image editor command line
- create animated gif
features:
- Convert between multiple image formats.
- Scale images while preserving aspect ratio.
- Join images vertically or horizontally with transparency.
- Create animated GIFs from image sequences.
- Generate images with solid color backgrounds.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# magick convert

> Convert between image formats, scale, join, and create images, and much more.
> Note: This tool (previously `convert`) has been replaced by `magick` in ImageMagick 7+.
> More information: <https://imagemagick.org/script/convert.php>.

- Convert an image from JPEG to PNG:

`magick convert {{path/to/input_image.jpg}} {{path/to/output_image.png}}`

- Scale an image to 50% of its original size:

`magick convert {{path/to/input_image.png}} -resize 50% {{path/to/output_image.png}}`

- Scale an image keeping the original aspect ratio to a maximum dimension of 640x480:

`magick convert {{path/to/input_image.png}} -resize 640x480 {{path/to/output_image.png}}`

- Scale an image to have a specified file size:

`magick convert {{path/to/input_image.png}} -define jpeg:extent=512kb {{path/to/output_image.jpg}}`

- Vertically/horizontally append images and have the empty space be transparent:

`magick convert -background none {{path/to/image1.png path/to/image2.png ...}} {{-append|+append}} {{path/to/output_image.png}}`

- Create a GIF from a series of images with 100ms delay between them:

`magick convert {{path/to/image1.png path/to/image2.png ...}} -delay {{10}} {{path/to/animation.gif}}`

- Create an image with nothing but a solid red background:

`magick convert -size {{800x600}} "xc:{{#ff0000}}" {{path/to/image.png}}`

- Create a favicon from several images of different sizes:

`magick convert {{path/to/image1.png path/to/image2.png ...}} {{path/to/favicon.ico}}`
