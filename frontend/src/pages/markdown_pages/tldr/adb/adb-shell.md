---
title: "ADB Shell - Control Android Devices via Command Line | Online Free DevTools by Hexmos"
name: adb-shell
path: /freedevtools/tldr/adb/adb-shell
canonical: "https://hexmos.com/freedevtools/tldr/adb/adb-shell/"
description: "Control Android devices and emulators easily with ADB Shell. Execute shell commands, manage permissions, and start activities. Free online tool, no registration required."
category: common
keywords:
- adb shell commands
- android shell execution
- adb device control
- android debug bridge
- linux shell commands
- macos shell commands
- emulator command line
- android activity manager
- adb permission manager
- mobile device debugging
features:
- Execute shell commands on Android devices
- Manage application permissions via command line
- Start activities on emulators and devices
- Clear application data remotely
- Trigger key events programmatically
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# adb shell

> Run shell commands on a connected Android device or emulator.
> More information: <https://developer.android.com/tools/adb>.

- Start a remote interactive shell on the emulator or device:

`adb shell`

- Get all the properties from emulator or device:

`adb shell getprop`

- Revert all runtime permissions to their default:

`adb shell pm reset-permissions`

- Revoke a dangerous permission for an application:

`adb shell pm revoke {{package}} {{permission}}`

- Trigger a key event:

`adb shell input keyevent {{keycode}}`

- Clear the data of an application on an emulator or device:

`adb shell pm clear {{package}}`

- Start an activity on emulator or device:

`adb shell am start -n {{package}}/{{activity}}`

- Start the home activity on an emulator or device:

`adb shell am start -W -c android.intent.category.HOME -a android.intent.action.MAIN`
