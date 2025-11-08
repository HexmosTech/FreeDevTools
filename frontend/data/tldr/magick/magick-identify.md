---
title: "Image Identify - Format Image Files | Online Free DevTools by Hexmos"
name: magick-identify
path: "/freedevtools/tldr/magick/magick-identify/"
canonical: "https://hexmos.com/freedevtools/tldr/magick/magick-identify/"
description: "Format image files with Image Identify using ImageMagick. Extract image metadata, analyze image characteristics, and automate image processing tasks. Free online tool, no registration required."
category: common
keywords:
- image file format
- identify image characteristics
- ImageMagick identify
- image metadata extraction
- image dimension analysis
- magick command line
- image processing automation
- JPEG dimension collection
- image analysis linux
- image analysis macos
features:
- Describe image format and characteristics
- Extract verbose image metadata
- Collect dimensions of multiple images
- Output image data to a CSV file
- Analyze image properties from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# magick identify

> Describe the format and characteristics of image files.
> See also: `magick`.
> More information: <https://imagemagick.org/script/identify.php>.

- Describe the format and basic characteristics of an image:

`magick identify {{path/to/image}}`

- Describe the format and verbose characteristics of an image:

`magick identify -verbose {{path/to/image}}`

- Collect dimensions of all JPEG files in the current directory and save them into a CSV file:

`magick identify -format "{{%f,%w,%h\n}}" {{*.jpg}} > {{path/to/filelist.csv}}`
