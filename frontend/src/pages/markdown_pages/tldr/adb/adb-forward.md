---
title: "ADB Forward - Connect Android Devices Wirelessly | Online Free DevTools by Hexmos"
name: adb-forward
path: /freedevtools/tldr/adb/adb-forward
canonical: "https://hexmos.com/freedevtools/tldr/adb/adb-forward/"
description: "Connect Android devices wirelessly with ADB Forward. Establish TCP connections and manage port forwardings effortlessly. Free online tool, no registration required."
category: common
keywords:
- adb forward
- android port forwarding
- adb tcp forwarding
- wireless adb connection
- adb device connection
- android debugging
- adb over wifi
- linux adb forward
- macos adb forward
- windows adb forward
features:
- Forward TCP ports to Android devices
- List existing ADB forwarding rules
- Remove specific forwarding rules
- Remove all active forwarding rules
- Establish wireless connections to Android devices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# adb forward

> Connect to an Android device wirelessly.
> More information: <https://developer.android.com/tools/adb>.

- Forward a TCP port:

`adb forward tcp:{{local_port}} tcp:{{remote_port}}`

- List all forwardings:

`adb forward --list`

- Remove a forwarding rule:

`adb forward --remove tcp:{{local_port}}`

- Remove all forwarding rules:

`adb forward --remove-all`
