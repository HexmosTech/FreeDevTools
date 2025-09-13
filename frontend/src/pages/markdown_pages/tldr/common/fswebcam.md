---
title: "Capture Webcam Image - Control Camera Feed | Free DevTools"
name: fswebcam
path: /freedevtools/tldr/common/fswebcam
canonical: "https://hexmos.com/freedevtools/tldr/common/fswebcam/"
description: "Capture webcam image with fswebcam. Control camera settings, adjust resolution, and add timestamps to your captures. Free online tool, no registration required."
category: common
keywords:
- webcam capture linux
- webcam image capture
- linux webcam tool
- command line webcam
- fswebcam image
- webcam photo capture
- linux camera capture
- unix webcam snapshot
- webcam control command
- capture video image
features:
- Capture images from a specified webcam device
- Set custom image resolution for webcam captures
- Add formatted timestamps to captured images
- Control webcam feed from the command line
- Save captured images to a specified filename
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fswebcam

> Small and simple webcam for *nix.
> More information: <https://www.sanslogic.co.uk/fswebcam>.

- Take a picture:

`fswebcam {{filename}}`

- Take a picture with custom resolution:

`fswebcam {{[-r|--resolution]}} {{width}}x{{height}} {{filename}}`

- Take a picture from selected device(Default is `/dev/video0`):

`fswebcam {{[-d|--device]}} {{device}} {{filename}}`

- Take a picture with timestamp(timestamp string is formatted by strftime):

`fswebcam --timestamp {{timestamp}} {{filename}}`
