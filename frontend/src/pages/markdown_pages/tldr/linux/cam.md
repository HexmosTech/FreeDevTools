---
title: "Cam - Control Linux Camera Feed | Online Free DevTools by Hexmos"
name: cam
path: /freedevtools/tldr/linux/cam
canonical: "https://hexmos.com/freedevtools/tldr/linux/cam/"
description: "Control Linux camera feed with Cam. Capture frames, list camera controls, and display real-time feeds in a window. Free online tool, no registration required."
category: linux
keywords:
- linux camera control
- libcamera frontend
- camera frame capture
- linux camera list
- camera feed display
- command line camera
- v4l2 camera tool
- linux media device
- camera capture utility
- sdl camera window
features:
- List available camera devices
- Display camera controls and settings
- Capture frames to specified folder
- Display camera feed in SDL window
- Control camera via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cam

> Frontend tool for `libcamera`.
> More information: <https://libcamera.org/docs.html>.

- List available cameras:

`cam {{[-l|--list]}}`

- List controls of a camera:

`cam {{[-c|--camera]}} {{camera_index}} --list-controls`

- Write frames to a folder:

`cam {{[-c|--camera]}} {{camera_index}} {{[-C|--capture=]}}{{frames_to_capture}} {{[-F|--file]}}`

- Display camera feed in a window:

`cam {{[-c|--camera]}} {{camera_index}} {{[-C|--capture]}} {{[-S|--sdl]}}`
