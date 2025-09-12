---
title: "Capture Raw Video - Using rpicam-raw | Free DevTools"
name: rpicam-raw
path: /freedevtools/tldr/linux/rpicam-raw
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpicam-raw/"
description: "Capture raw video with rpicam-raw, control camera settings, and save to file. Record videos with custom dimensions and framerate. Free online tool, no registration required."
category: linux
keywords:
  - raw video capture
  - raspberry pi camera
  - rpicam-raw video recording
  - raw video file format
  - raspberry pi camera settings
  - linux video capture
  - command line video recording
  - rpicam control
  - video dimension control
  - framerate configuration
features:
  - Capture raw video on Raspberry Pi.
  - Control video duration with timeout.
  - Specify output file path for raw video.
  - Adjust video dimensions (width and height).
  - Configure video framerate.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rpicam-raw

> Capture a raw video on a Raspberry Pi camera.
> More information: <https://www.raspberrypi.com/documentation/computers/camera_software.html#rpicam-raw>.

- Capture a video for a specific amount of seconds:

`rpicam-raw {{[-t|--timeout]}} {{2000}} {{[-o|--output]}} {{path/to/file.raw}}`

- Change video dimensions and framerate:

`rpicam-raw {{[-t|--timeout]}} {{5000}} --width {{4056}} --height {{3040}} {{[-o|--output]}} {{path/to/file.raw}} --framerate {{8}}`
