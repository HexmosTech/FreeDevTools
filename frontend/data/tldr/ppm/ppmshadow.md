---
title: "PPM Shadow - Generate Image Shadows | Online Free DevTools by Hexmos"
name: ppmshadow
path: "/freedevtools/tldr/ppm/ppmshadow/"
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmshadow/"
description: "Generate image shadows with PPM Shadow. Create realistic shadow effects for your images using command-line options. Free online tool, no registration required."
category: common
keywords:
- PPM image shadow
- Image shadow generator
- Netpbm PPM shadow
- Linux image manipulation
- Command line image shadow
- PPM image effects
- Image shadow effect
- PPM shadow tool
- Linux image processing
- PPM image editor
features:
- Add simulated shadows to PPM images
- Blur image shadows for a softer effect
- Adjust the light source displacement
- Control shadow direction with offsets
- Generate shadow effects via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmshadow

> Add simulated shadows to a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/ppmshadow.html>.

- Add simulated shadows to a PPM image:

`ppmshadow {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`

- [b]lur the image by the specified number of pixels:

`ppmshadow -b {{n}} {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`

- Specify the displacement of the simulated light source to the left and the top of the image:

`ppmshadow -x {{left_offset}} -y {{top_offset}} {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`
