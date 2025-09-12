---
title: "Control Raspberry Pi Camera Stream - rpicam-hello | Free DevTools"
name: rpicam-hello
path: /freedevtools/tldr/unknown/rpicam-hello
canonical: "https://hexmos.com/freedevtools/tldr/unknown/rpicam-hello/"
description: "Control Raspberry Pi camera stream with rpicam-hello. View live feeds and configure camera settings. Free online tool, no registration required."
category: unknown
keywords:
- Raspberry Pi camera control
- Camera stream viewer
- rpicam-hello command
- Raspberry Pi camera configuration
- Live camera feed
- rpicam-hello tuning file
- Linux camera tools
- Raspberry Pi video
- Camera preview stream
- libcamera configuration
features:
- Display a live camera preview stream
- Configure camera settings using tuning files
- Adjust stream timeout duration
- Control camera sensor configuration
- View Raspberry Pi camera feed
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rpicam-hello

> View a live camera stream using a Raspberry Pi camera.
> More information: <https://www.raspberrypi.com/documentation/computers/camera_software.html#rpicam-hello>.

- Display a camera preview stream for a specific amount of time (in milliseconds):

`rpicam-hello {{[-t|--timeout]}} {{time}}`

- Tune the configuration for a particular camera sensor:

`rpicam-hello --tuning-file {{/usr/share/libcamera/ipa/rpi/path/to/config.json}}`
