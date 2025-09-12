---
title: "ADB Uninstall - Remove Android Packages | Free DevTools"
name: adb-uninstall
path: /freedevtools/tldr/common/adb-uninstall
canonical: "https://hexmos.com/freedevtools/tldr/common/adb-uninstall/"
description: "Uninstall Android packages efficiently with ADB Uninstall. Remove applications and their data, or keep user data intact. Free online tool, no registration required."
category: common
keywords:
- android package uninstaller
- adb uninstall package
- android uninstall command line
- uninstall apk android
- remove android app adb
- adb package manager
- android application removal
- linux adb uninstall
- macos adb uninstall
- adb uninstall keep data
features:
- Completely remove Android applications via command line
- Retain user data during package uninstallation
- Uninstall specific Android packages by name
- Execute uninstall commands using adb
- Manage application removal on Android devices
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# adb uninstall

> Uninstall a package.
> More information: <https://manned.org/adb>.

- Uninstall a package:

`adb uninstall {{com.example.app}}`

- Uninstall a package, but keep user data:

`adb uninstall -k {{com.example.app}}`
