---
title: "Capture Webcam Images - Control Camera | Free DevTools"
name: wacaw
path: /freedevtools/tldr/osx/wacaw
canonical: "https://hexmos.com/freedevtools/tldr/osx/wacaw/"
description: "Capture webcam images with Wacaw. Take photos and record videos from your attached camera using command line. Free online tool, no registration required."
category: osx
keywords:
  - webcam image capture
  - command line camera control
  - video recording tool
  - webcam photo tool
  - camera command line interface
  - image capture software
  - camera snapshot utility
  - command line video capture
  - webcam CLI tool
  - camera automation scripts
features:
  - Capture still images from a webcam
  - Record video from an attached camera
  - Customize image resolution
  - Copy captured images to the clipboard
  - List available camera devices
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wacaw

> Capture both still pictures and video from an attached camera.
> More information: <https://webcam-tools.sourceforge.net>.

- Take a picture from webcam:

`wacaw {{filename}}`

- Record a video:

`wacaw --video {{filename}} --duration {{10}}`

- Take a picture with custom resolution:

`wacaw --width {{width}} --height {{100}} {{filename}}`

- Copy image just taken to clipboard:

`wacaw --to-clipboard`

- List the devices available:

`wacaw --list-devices`
