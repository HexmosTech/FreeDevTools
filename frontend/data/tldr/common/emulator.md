---
title: "Android Emulator - Manage Virtual Devices | Online Free DevTools by Hexmos"
name: emulator
path: "/freedevtools/tldr/common/emulator/"
canonical: "https://hexmos.com/freedevtools/tldr/common/emulator/"
description: "Manage Android virtual devices easily with Android Emulator. Control device settings, network speed, and cameras for app testing. Free online tool, no registration required."
category: common
keywords:
- android emulator control
- android virtual device management
- avd manager
- android development tools
- emulator command line
- adb emulator settings
- android debugging emulator
- linux emulator android
- macos emulator android
- windows emulator android
features:
- Start and configure Android emulator instances
- Control network speed and latency for testing
- Manage virtual device cameras for realistic scenarios
- Customize SD card partition image files
- Display available webcams for emulation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# emulator

> Manage Android emulators.
> More information: <https://developer.android.com/studio/run/emulator-commandline>.

- Start an Android emulator device:

`emulator -avd {{name}}`

- Display the webcams on your development computer that are available for emulation:

`emulator -avd {{name}} -webcam-list`

- Start an emulator overriding the facing back camera setting (use `-camera-front` for front camera):

`emulator -avd {{name}} -camera-back {{none|emulated|webcamN}}`

- Start an emulator, with a maximum network speed:

`emulator -avd {{name}} -netspeed {{gsm|hscsd|gprs|edge|hsdpa|lte|evdo|full}}`

- Start an emulator with network latency:

`emulator -avd {{name}} -netdelay {{gsm|hscsd|gprs|edge|hsdpa|lte|evdo|none}}`

- Start an emulator, making all TCP connections through a specified HTTP/HTTPS proxy (port number is required):

`emulator -avd {{name}} -http-proxy {{http://example.com:80}}`

- Start an emulator with a given SD card partition image file:

`emulator -avd {{name}} -sdcard {{path/to/sdcard.img}}`

- Display help:

`emulator -help`
