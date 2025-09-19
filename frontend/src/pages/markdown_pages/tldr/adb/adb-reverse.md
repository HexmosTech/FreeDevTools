---
title: "ADB Reverse - Forward Ports from Android Device | Online Free DevTools by Hexmos"
name: adb-reverse
path: /freedevtools/tldr/adb/adb-reverse
canonical: "https://hexmos.com/freedevtools/tldr/adb/adb-reverse/"
description: "Forward ports with ADB Reverse to debug Android applications remotely. Easily create reverse connections and manage sockets on your device. Free online tool, no registration required."
category: common
keywords:
- adb reverse port forwarding
- android reverse socket connection
- adb reverse tcp port
- reverse connection android
- android debug bridge reverse
- adb port forwarding linux
- adb reverse macos
- emulator reverse connection
- adb reverse remote debugging
- android emulator port forwarding
features:
- Create reverse connections from Android device to localhost
- List existing reverse socket connections
- Remove specific reverse connections
- Remove all reverse socket connections
- Forward TCP ports for remote debugging
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# adb reverse

> Reverse socket connections from a connected Android device or emulator.
> More information: <https://developer.android.com/tools/adb>.

- List all reverse socket connections from emulators and devices:

`adb reverse --list`

- Reverse a TCP port from an emulator or device to localhost:

`adb reverse tcp:{{remote_port}} tcp:{{local_port}}`

- Remove a reverse socket connections from an emulator or device:

`adb reverse --remove tcp:{{remote_port}}`

- Remove all reverse socket connections from all emulators and devices:

`adb reverse --remove-all`
