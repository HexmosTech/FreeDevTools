---
title: "PPM Label - Add Text to PPM Images | Online Free DevTools by Hexmos"
name: ppmlabel
path: "/freedevtools/tldr/ppm/ppmlabel/"
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmlabel/"
description: "Add text to PPM images with PPM Label. Customize text position, color, angle, and size. Free online tool, no registration required."
category: common
keywords:
- PPM image label
- PPM text adder
- Add text to PPM
- PPM image editor
- Image labeling command
- Netpbm PPM utility
- Linux image tools
- Command line PPM
- PPM text overlay
- PPM graphics manipulation
features:
- Add custom text to PPM images.
- Specify text position (x, y coordinates).
- Customize text color and background color.
- Adjust text tilt angle.
- Control the size of the added text.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmlabel

> Add text to a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/ppmlabel.html>.

- Add text to a PPM image at the specified location:

`ppmlabel -x {{pos_x}} -y {{pos_y}} {{[-t|-text]}} {{text}} {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`

- Add multiple texts at different locations:

`ppmlabel -x {{pos_x1}} -y {{pos_y1}} {{[-t|-text]}} {{text1}} -x {{pos_x2}} -y {{pos_y2}} {{[-t|-text]}} {{text2}} {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`

- Specify the line color, the background color, the tilt and the size of the added text:

`ppmlabel -x {{pos_x}} -y {{pos_y}} {{[-c|-color]}} {{line_color}} {{[-b|-background]}} {{background_color}} {{[-a|-angle]}} {{tilt}} {{[-s|-size]}} {{size}} {{[-t|-text]}} {{text}} {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`
