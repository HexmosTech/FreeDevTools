---
title: "PDF to PPM - Convert PDF Pages to Images | Online Free DevTools by Hexmos"
name: pdftoppm
path: /freedevtools/tldr/linux/pdftoppm
canonical: "https://hexmos.com/freedevtools/tldr/linux/pdftoppm/"
description: "Convert PDF pages to PPM images with pdftoppm. Transform PDF documents into portable pixmap files using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - PDF to PPM converter
  - PDF to image conversion
  - command line PDF tool
  - PPM image generator
  - PDF page extraction
  - PDF to PNG conversion
  - PDF to monochrome PBM
  - PDF to grayscale PGM
  - linux PDF tools
  - macos PDF tools
features:
  - Convert specific PDF page ranges to images
  - Generate monochrome PBM images from PDF
  - Generate grayscale PGM images from PDF
  - Convert PDF pages to PNG image format
  - Extract the first page of a PDF to an image
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdftoppm

> Convert PDF document pages to portable Pixmap (image formats).
> More information: <https://manned.org/pdftoppm>.

- Specify the range of pages to convert (`n` - first page, `m` - last page):

`pdftoppm -f {{n}} -l {{m}} {{path/to/file.pdf}} {{image_name_prefix}}`

- Convert only the first page of a PDF:

`pdftoppm -singlefile {{path/to/file.pdf}} {{image_name_prefix}}`

- Generate a monochrome PBM file (instead of a color PPM file):

`pdftoppm -mono {{path/to/file.pdf}} {{image_name_prefix}}`

- Generate a grayscale PGM file (instead of a color PPM file):

`pdftoppm -gray {{path/to/file.pdf}} {{image_name_prefix}}`

- Generate a PNG file instead a PPM file:

`pdftoppm -png {{path/to/file.pdf}} {{image_name_prefix}}`
