---
title: "Exif Editor - Change Image Metadata | Online Free DevTools by Hexmos"
name: exif
path: "/freedevtools/tldr/linux/exif/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/exif/"
description: "Edit image metadata with Exif Editor. Change EXIF information in JPEG files quickly and easily. Free online tool, no registration required."
category: linux
keywords:
  - jpeg metadata editor
  - exif data viewer
  - image exif changer
  - exif tag remover
  - exif tag adder
  - image metadata manipulator
  - jpeg exiftool
  - command line exif
  - exiftool alternative
  - exif thumbnail extractor
features:
  - Show all EXIF information in an image
  - List known EXIF tags and their existence
  - Extract image thumbnails to separate files
  - Display raw contents of specific EXIF tags
  - Change the value of EXIF tags and save the changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# exif

> Show and change EXIF information in JPEG files.
> More information: <https://manned.org/exif>.

- Show all recognized EXIF information in an image:

`exif {{path/to/image.jpg}}`

- Show a table listing known EXIF tags and whether each one exists in an image:

`exif {{[-l|--list-tags]}} --no-fixup {{path/to/image.jpg}}`

- Extract the image thumbnail into a separate file:

`exif {{[-e|--extract-thumbnail]}} {{[-o|--output]}} {{path/to/thumbnail.jpg}} {{path/to/image.jpg}}`

- Show the raw contents of the "Model" tag in the given image:

`exif --ifd {{0}} {{[-t|--tag]}} "Model" {{[-m|--machine-readable]}} {{path/to/image.jpg}}`

- Change the value of the "Artist" tag to John Smith and save to `new.jpg`:

`exif {{[-o|--output]}} {{path/to/new.jpg}} --ifd {{0}} {{[-t|--tag]}} "Artist" --set-value "John Smith" --no-fixup {{path/to/image.jpg}}`
