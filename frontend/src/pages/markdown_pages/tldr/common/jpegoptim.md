---
title: "Optimize JPEG Images - Reduce File Size | Online Free DevTools by Hexmos"
name: jpegoptim
path: /freedevtools/tldr/common/jpegoptim
canonical: "https://hexmos.com/freedevtools/tldr/common/jpegoptim/"
description: "Optimize JPEG images with jpegoptim. Reduce file size and improve website performance. Free online tool, no registration required."
category: common
keywords:
- JPEG image optimization
- Image compression tool
- Reduce JPEG size
- Optimize images for web
- Command line JPEG optimizer
- Lossless JPEG compression
- Image file size reduction
- Batch JPEG processing
- JPEG quality optimization
- Progressive JPEG conversion
features:
- Optimize JPEG images to reduce file size
- Strip non-essential data from JPEG images
- Force output images to be progressive
- Set a fixed maximum file size for output images
- Batch process multiple JPEG images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jpegoptim

> Optimise JPEG images.
> More information: <https://manned.org/jpegoptim>.

- Optimise a set of JPEG images, retaining all associated data:

`jpegoptim {{image1.jpeg image2.jpeg image3.jpeg ...}}`

- Optimise JPEG images, stripping all non-essential data:

`jpegoptim {{[-s|--strip-all]}} {{image1.jpeg image2.jpeg image3.jpeg ...}}`

- Force the output images to be progressive:

`jpegoptim --all-progressive {{image1.jpeg image2.jpeg image3.jpeg ...}}`

- Force the output images to have a fixed maximum filesize:

`jpegoptim {{[-S|--size]}} {{250k}} {{image1.jpeg image2.jpeg image3.jpeg ...}}`
