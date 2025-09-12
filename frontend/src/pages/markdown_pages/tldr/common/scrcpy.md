---
title: "Scrcpy - Control Android Device on Desktop | Free DevTools"
name: scrcpy
path: /freedevtools/tldr/common/scrcpy
canonical: "https://hexmos.com/freedevtools/tldr/common/scrcpy/"
description: "Control your Android device with Scrcpy. Mirror your screen and interact with your phone via desktop, using ADB for seamless connectivity. Free online tool, no registration required."
category: common
keywords:
- android mirroring tool
- desktop android control
- adb screen mirroring
- scrcpy linux
- scrcpy windows
- scrcpy macos
- android remote control
- usb android mirror
- wireless android control
- screen recording android
features:
- Mirror Android device screen on desktop
- Control Android device using keyboard and mouse
- Record Android screen to video file
- Push files to Android device via drag and drop
- Support for wired and wireless connections
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scrcpy

> Display and control your Android device on a desktop.
> More information: <https://github.com/Genymobile/scrcpy>.

- Display a mirror of a connected device:

`scrcpy`

- Turn the device screen off and prevent it from sleeping while mirroring:

`scrcpy {{[-S|--turn-screen-off]}} {{[-w|--stay-awake]}}`

- Display a mirror of a specific device based on its ID or IP address (find it under the `adb devices` command):

`scrcpy {{[-s|--serial]}} {{0123456789abcdef|192.168.0.1:5555}}`

- Start display in fullscreen mode:

`scrcpy {{[-f|--fullscreen]}}`

- Show touches on physical device:

`scrcpy {{[-t|--show-touches]}}`

- Record display screen:

`scrcpy {{[-r|--record]}} {{path/to/file.mp4}}`

- Specify the target directory for pushing files to device by drag and drop (non-APK):

`scrcpy --push-target {{path/to/directory}}`
