---
title: "Waydroid - Run Android Apps on Linux | Online Free DevTools by Hexmos"
name: waydroid
path: /freedevtools/tldr/linux/waydroid
canonical: "https://hexmos.com/freedevtools/tldr/linux/waydroid/"
description: "Run Android apps on Linux with Waydroid, a container-based solution for seamless Android integration. Install APKs, manage sessions, and adjust window dimensions. Free online tool, no registration required."
category: linux
keywords:
- android on linux
- waydroid container
- apk installer
- android emulator linux
- linux android runtime
- waydroid session manager
- android shell linux
- waydroid window control
- linux command line android
- android subsystem linux
features:
- Run full Android system in a Linux container
- Install Android applications from APK files
- Launch Android apps by package name via command line
- Manage Waydroid sessions, including start and stop
- Control Waydroid container status (start, stop, restart, freeze, unfreeze)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# waydroid

> A container-based approach to boot a full Android system on a regular Linux system like Ubuntu.
> More information: <https://docs.waydro.id>.

- Start Waydroid:

`waydroid`

- Initialize Waydroid (required on first run or after reinstalling Android):

`sudo waydroid init`

- Install a new Android app from a file:

`waydroid app install {{path/to/file.apk}}`

- Launch an Android app by its package name:

`waydroid app launch {{com.example.app}}`

- Start or stop the Waydroid session:

`waydroid session {{start|stop}}`

- Manage the Waydroid container:

`sudo waydroid container {{start|stop|restart|freeze|unfreeze}}`

- Open Waydroid shell:

`sudo waydroid shell`

- Adjust Waydroid window dimensions:

`waydroid prop set persist.waydroid.{{width|height}} {{number}}`
