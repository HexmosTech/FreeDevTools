---
title: "v4l2-ctl - Control Video Devices | Free DevTools"
name: v4l2-ctl
path: /freedevtools/tldr/linux/v4l2-ctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/v4l2-ctl/"
description: "Control video devices with v4l2-ctl.  List formats, resolutions, capture images and raw video streams. Free online tool, no registration required."
category: linux
keywords:
  - video device control
  - v4l2-ctl commands
  - linux video capture
  - video format control
  - video resolution settings
  - mmap streaming
  - jpeg capture v4l2
  - raw video capture
  - video device settings
  - linux video control
features:
  - List all connected video devices.
  - List supported video formats and resolutions.
  - Capture JPEG images from video devices with specified resolution.
  - Capture raw video streams with custom settings.
  - Control individual video device settings.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# v4l2-ctl

> Control video devices.
> More information: <https://manned.org/v4l2-ctl>.

- List all video devices:

`v4l2-ctl {{[-A|--list-devices]}}`

- List supported video formats and resolutions of default video device `/dev/video0`:

`v4l2-ctl --list-formats-ext`

- List supported video formats and resolutions of a specific video device:

`v4l2-ctl --list-formats-ext {{[-d|--device]}} {{path/to/video_device}}`

- Get all details of a video device:

`v4l2-ctl --all {{[-d|--device]}} {{path/to/video_device}}`

- Capture a JPEG photo with a specific resolution from video device:

`v4l2-ctl {{[-d|--device]}} {{path/to/video_device}} --set-fmt-video=width={{width}},height={{height}},pixelformat=MJPG --stream-mmap --stream-to={{path/to/output.jpg}} --stream-count=1`

- Capture a raw video stream from video device:

`v4l2-ctl {{[-d|--device]}} {{path/to/video_device}} --set-fmt-video=width={{width}},height={{height}},pixelformat={{format}} --stream-mmap --stream-to={{path/to/output}} --stream-count={{number_of_frames_to_capture}}`

- List all video device's controls and their values:

`v4l2-ctl {{[-l|--list-ctrls]}} {{[-d|--device]}} {{path/to/video_device}}`

- Set the value of a video device control:

`v4l2-ctl {{[-d|--device]}} {{path/to/video_device}} {{[-c|--set-ctrl]}} {{control_name}}={{value}}`
