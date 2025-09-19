---
title: "Sips - Control Image Processing on macOS | Online Free DevTools by Hexmos"
name: sips
path: /freedevtools/tldr/osx/sips
canonical: "https://hexmos.com/freedevtools/tldr/osx/sips/"
description: "Control image processing with Sips on macOS. Convert image formats and manipulate ColorSync ICC profiles using the command line. Free online tool, no registration required."
category: osx
keywords:
- image processing macos
- sips image converter
- macos image resizer
- convert cmyk to rgb sips
- remove icc profile sips
- sips command line tool
- osx image manipulation
- image color profile editor
- resample image macos
- batch image processing sips
features:
- Resample images by height and width
- Convert image color spaces (CMYK to RGB)
- Delete ColorSync ICC profiles from images
- Resize images while maintaining aspect ratio
- Batch process images in a directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sips

> Apple Scriptable Image Processing System.
> Raster/Query images and ColorSync ICC Profiles.
> More information: <https://keith.github.io/xcode-man-pages/sips.1.html>.

- Specify an output directory so that originals do not get modified:

`sips --out {{path/to/out_dir}}`

- Resample image at specified size, Image aspect ratio may be altered:

`sips --resampleHeightWidth {{1920}} {{300}} {{image_file.ext}}`

- Resample image so height and width aren't greater than specified size (notice the capital Z):

`sips --resampleHeightWidthMax {{1920}} {{300}} {{image_file.ext}}`

- Resample all images in a directory to fit a width of 960px (honoring aspect ratio):

`sips --resampleWidth {{960}} {{path/to/images}}`

- Convert an image from CMYK to RGB:

`sips --matchTo "/System/Library/ColorSync/Profiles/Generic RGB Profile.icc" {{path/to/image.ext}} {{path/to/out_dir}}`

- Remove ColorSync ICC profile from an image:

`sips --deleteProperty profile --deleteColorManagementProperties {{path/to/image_file.ext}}`
