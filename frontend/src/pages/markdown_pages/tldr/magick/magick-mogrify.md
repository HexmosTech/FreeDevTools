---
title: "Magick Mogrify - Transform Images | Free DevTools"
name: magick-mogrify
path: /freedevtools/tldr/magick/magick-mogrify
canonical: "https://hexmos.com/freedevtools/tldr/magick/magick-mogrify/"
description: "Transform images with Magick Mogrify. Resize, convert, and apply effects to multiple images simultaneously using the command line. Free online tool, no registration required."
category: common
keywords:
- image transformation
- batch image processing
- image resizing
- image conversion
- command line image tool
- magick mogrify command
- image effect application
- linux image tools
- macos image tools
- image bulk processing
features:
- Resize multiple images at once
- Convert images between different formats
- Apply image effects in batch
- Adjust image brightness and saturation
- Optimize GIF image file sizes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# magick mogrify

> Perform operations on multiple images, such as resizing, cropping, flipping, and adding effects.
> Changes are applied directly to the original file.
> See also: `magick`.
> More information: <https://imagemagick.org/script/mogrify.php>.

- Resize all JPEG images in the directory to 50% of their initial size:

`magick mogrify -resize {{50%}} {{*.jpg}}`

- Resize all images starting with `DSC` to 800x600:

`magick mogrify -resize {{800x600}} {{DSC*}}`

- Convert all PNGs in the directory to JPEG:

`magick mogrify -format {{jpg}} {{*.png}}`

- Halve the saturation of all image files in the current directory:

`magick mogrify -modulate {{100,50}} {{*}}`

- Double the brightness of all image files in the current directory:

`magick mogrify -modulate {{200}} {{*}}`

- Reduce file sizes of all GIF images in the current directory by reducing quality:

`magick mogrify -layers 'optimize' -fuzz {{7%}} {{*.gif}}`

- Display help:

`magick mogrify -help`
