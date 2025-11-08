---
title: "Android Debug Bridge - Control Devices with ADB | Online Free DevTools by Hexmos"
name: adb
path: "/freedevtools/tldr/adb/adb/"
canonical: "https://hexmos.com/freedevtools/tldr/adb/adb/"
description: "Control Android devices with ADB Debug Bridge. Execute commands, transfer files, and debug apps. Free online tool, no registration required."
category: common
keywords:
- android debug bridge
- adb command line
- adb shell commands
- android emulator control
- adb file transfer
- adb device management
- android debug tool
- adb linux commands
- adb macos commands
- android application installer
features:
- Start and kill the adb server
- Execute shell commands on connected Android devices
- Push and pull files between device and computer
- List all connected Android devices
- Install Android applications to devices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# adb

> Android Debug Bridge: communicate with an Android emulator instance or connected Android devices.
> Some subcommands such as `shell` have their own usage documentation.
> More information: <https://developer.android.com/tools/adb>.

- Check whether the adb server process is running and start it:

`adb start-server`

- Terminate the adb server process:

`adb kill-server`

- Start a remote shell in the target emulator/device instance:

`adb shell`

- Push an Android application to an emulator/device:

`adb install -r {{path/to/file.apk}}`

- Copy a file/directory from the target device:

`adb pull {{path/to/device_file_or_directory}} {{path/to/local_destination_directory}}`

- Copy a file/directory to the target device:

`adb push {{path/to/local_file_or_directory}} {{path/to/device_destination_directory}}`

- List all connected devices:

`adb devices`

- Specify which device to send commands to if there are multiple devices:

`adb -s {{device_ID}} {{shell}}`
