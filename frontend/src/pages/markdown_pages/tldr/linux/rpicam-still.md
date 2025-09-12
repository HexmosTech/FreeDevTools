---
title: "Capture Photos - rpicam-still | Free DevTools"
name: rpicam-still
path: /freedevtools/tldr/linux/rpicam-still
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpicam-still/"
description: "Capture photos with rpicam-still, a command-line tool for Raspberry Pi.  Control image encoding (BMP, PNG, RGB, YUV420), capture raw images, and adjust exposure. Free online tool, no registration required."
category: linux
keywords:
  - Raspberry Pi photo capture
  - rpicam-still command
  - image encoding command
  - raw image capture
  - long exposure photography
  - Linux camera control
  - BMP image capture
  - PNG image capture
  - YUV420 image capture
  - Raspberry Pi camera
features:
  - Capture photos in various encodings (BMP, PNG, RGB, YUV420).
  - Capture raw images (.jpg).
  - Control shutter speed for long exposure photography.
  - Specify output file path and name.
  - Utilize legacy Raspberry Pi camera features.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rpicam-still

> Capture and store a photo using a Raspberry Pi camera with legacy features missing from `rpicam-jpeg`.
> More information: <https://www.raspberrypi.com/documentation/computers/camera_software.html#rpicam-still>.

- Capture a photo with different encoding:

`rpicam-still {{[-e|--encoding]}} {{bmp|png|rgb|yuv420}} {{[-o|--output]}} {{path/to/file.[bmp|png|rgb|yuv420]}}`

- Capture a raw image:

`rpicam-still {{[-r|--raw]}} {{[-o|--output]}} {{path/to/file.jpg}}`

- Capture a 100 second exposure image:

`rpicam-still {{[-o|--output]}} {{path/to/file.jpg}} --shutter 100000`
