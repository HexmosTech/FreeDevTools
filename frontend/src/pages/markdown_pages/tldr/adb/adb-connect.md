---
title: "ADB Connect - Connect to Android Devices | Online Free DevTools by Hexmos"
name: adb-connect
path: /freedevtools/tldr/adb/adb-connect
canonical: "https://hexmos.com/freedevtools/tldr/adb/adb-connect/"
description: "Connect to Android devices wirelessly with ADB Connect. Easily pair and manage device connections via the command line. Free online tool, no registration required."
category: common
keywords:
- adb connect
- android adb connect
- wireless android connection
- adb device connection
- android debugging bridge
- adb pair
- adb disconnect
- android device management
- linux adb connect
- macos adb connect
features:
- Establish wireless connections to Android devices
- Pair devices using IP address and pairing code
- Disconnect specific Android devices
- Manage multiple Android device connections simultaneously
- Connect to Android devices via the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# adb connect

> Connect to an Android device wirelessly.
> More information: <https://developer.android.com/tools/adb>.

- Pair with an Android device (address and pairing code can be found in developer options):

`adb pair {{ip_address}}:{{port}}`

- Connect to an Android device (port will be different from pairing):

`adb connect {{ip_address}}:{{port}}`

- Disconnect a device:

`adb disconnect {{ip_address}}:{{port}}`
