---
title: "Create Image Comparison - Magick Compare | Free DevTools"
name: magick-compare
path: /freedevtools/tldr/common/magick-compare
canonical: "https://hexmos.com/freedevtools/tldr/common/magick-compare/"
description: "Create image comparisons with Magick Compare. Identify visual differences between images and generate difference images. Free online tool, no registration required."
category: common
keywords:
- image comparison
- image difference analysis
- magick compare image
- imageMagick compare
- visual diff tool
- image analysis
- image processing
- png comparison
- jpeg comparison
- command-line image tools
features:
- Compare images using various metrics
- Generate difference images highlighting disparities
- Perform verbose comparisons for detailed analysis
- Compare images with specified metrics like PSNR
- Visually annotate image differences
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# magick compare

> Create a comparison image to visually annotate the difference between two images.
> See also: `magick`.
> More information: <https://imagemagick.org/script/compare.php>.

- Compare two images:

`magick compare {{path/to/image1.png}} {{path/to/image2.png}} {{path/to/diff.png}}`

- Compare two images using the specified metric:

`magick compare -verbose -metric {{PSNR}} {{path/to/image1.png}} {{path/to/image2.png}} {{path/to/diff.png}}`
