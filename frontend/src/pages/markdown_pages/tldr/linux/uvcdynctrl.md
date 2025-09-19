---
title: "UVC Control - Manage UVC Cameras on Linux | Online Free DevTools by Hexmos"
name: uvcdynctrl
path: /freedevtools/tldr/linux/uvcdynctrl
canonical: "https://hexmos.com/freedevtools/tldr/linux/uvcdynctrl/"
description: "Control UVC cameras on Linux with uvcdynctrl. Adjust camera settings, save configurations, and load profiles. Free online tool, no registration required."
category: linux
keywords:
- uvc control linux
- linux uvc control
- uvc camera control
- uvcdynctrl linux
- v4l2 uvc control
- linux camera settings
- uvc settings manager
- video4linux control
- camera control cli
- linux video controls
features:
- List available UVC cameras
- Adjust UVC camera settings
- Save and load camera configurations
- Get current control values
- Set new control values
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uvcdynctrl

> Manage dynamic controls in uvcvideo.
> More information: <https://manned.org/uvcdynctrl>.

- List all available cameras:

`uvcdynctrl {{[-l|--list]}}`

- Use a specific device (defaults to `video0`):

`uvcdynctrl {{[-d|--device]}} {{device_name}}`

- List available controls:

`uvcdynctrl {{[-c|--clist]}}`

- Set a new control value (for negative values, use `-- -value`):

`uvcdynctrl {{[-s|--set]}} {{control_name}} {{value}}`

- Get the current control value:

`uvcdynctrl {{[-g|--get]}} {{control_name}}`

- Save the state of the current controls to a file:

`uvcdynctrl {{[-W|--save]}} {{filename}}`

- Load the state of the controls from a file:

`uvcdynctrl {{[-L|--load]}} {{filename}}`
