---
title: "Capture JPEG Image - Control Raspberry Pi Camera | Online Free DevTools by Hexmos"
name: rpicam-jpeg
path: "/freedevtools/tldr/linux/rpicam-jpeg/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpicam-jpeg/"
description: "Capture JPEG images with rpicam-jpeg on Raspberry Pi. Control camera settings like resolution and exposure. Free online tool, no registration required."
category: linux
keywords:
  - raspberry pi camera jpeg
  - raspberry pi image capture
  - rpicam-jpeg command line
  - linux camera control
  - jpeg image generation
  - raspberry pi photo
  - camera exposure settings
  - image resolution control
  - raspbian camera utility
  - linux image processing
features:
  - Capture JPEG images directly from the Raspberry Pi camera.
  - Control image dimensions (width and height).
  - Adjust exposure time using shutter settings.
  - Modify image gain levels for optimal brightness.
  - Save captured images to a specified file path.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rpicam-jpeg

> Capture and store a JPEG image using a Raspberry Pi camera.
> More information: <https://www.raspberrypi.com/documentation/computers/camera_software.html#rpicam-jpeg>.

- Capture an image and name the file:

`rpicam-jpeg {{[-o|--output]}} {{path/to/file.jpg}}`

- Capture an image with set dimensions:

`rpicam-jpeg {{[-o|--output]}} {{path/to/file.jpg}} --width {{1920}} --height {{1080}}`

- Capture an image with an exposure of 20 seconds and a gain of 150%:

`rpicam-jpeg {{[-o|--output]}} {{path/to/file.jpg}} --shutter 20000 --gain 1.5`
