---
title: "ADB Install - Push Android Packages | Online Free DevTools by Hexmos"
name: adb-install
path: /freedevtools/tldr/adb/adb-install
canonical: "https://hexmos.com/freedevtools/tldr/adb/adb-install/"
description: "Install Android APK packages with ADB. Quickly deploy and update applications to Android devices and emulators using the command line. Free online tool, no registration required."
category: common
keywords:
- android install apk
- adb install command
- android package installer
- adb deploy apk
- android debug bridge install
- adb sideload apk
- android emulator install
- android device install
- adb downgrade apk
- android package manager
features:
- Install APK packages on Android devices and emulators.
- Reinstall applications while preserving existing data.
- Downgrade application versions (debuggable packages only).
- Grant all permissions defined in the application manifest.
- Quickly update installed packages with fastdeploy.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# adb install

> Push packages to a connected Android device or emulator.
> More information: <https://developer.android.com/tools/adb>.

- Push an Android application to an emulator/device:

`adb install {{path/to/file.apk}}`

- Push an Android application to a specific emulator/device (overrides `$ANDROID_SERIAL`):

`adb -s {{serial_number}} install {{path/to/file.apk}}`

- [r]einstall an existing app, keeping its data:

`adb install -r {{path/to/file.apk}}`

- Push an Android application allowing version code [d]owngrade (debuggable packages only):

`adb install -d {{path/to/file.apk}}`

- [g]rant all permissions listed in the app manifest:

`adb install -g {{path/to/file.apk}}`

- Quickly update an installed package by only updating the parts of the APK that changed:

`adb install --fastdeploy {{path/to/file.apk}}`
