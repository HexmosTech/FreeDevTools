---
title: "Fastboot Commands - Control Android Bootloader | Online Free DevTools by Hexmos"
name: fastboot
path: /freedevtools/tldr/common/fastboot
canonical: "https://hexmos.com/freedevtools/tldr/common/fastboot/"
description: "Control Android devices in bootloader mode with Fastboot Commands. Unlock, flash, and reboot devices. Free online tool, no registration required."
category: common
keywords:
- android bootloader control
- fastboot unlock bootloader
- flash android image
- fastboot device list
- android fastboot commands
- fastboot oem lock
- linux fastboot tool
- macos fastboot utility
- android debugging fastboot
- fastboot getvar all
features:
- Unlock or relock the Android bootloader
- Flash images to specific partitions
- Reboot device into bootloader mode
- List connected Android devices
- Retrieve device information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fastboot

> Communicate with connected Android devices when in bootloader mode (the one place ADB doesn't work).
> More information: <https://cs.android.com/android/platform/superproject/+/main:system/core/fastboot>.

- Unlock the bootloader:

`fastboot oem unlock`

- Relock the bootloader:

`fastboot oem lock`

- Reboot the device from fastboot mode into fastboot mode again:

`fastboot reboot bootloader`

- Flash a given image:

`fastboot flash {{path/to/file.img}}`

- Flash a custom recovery image:

`fastboot flash recovery {{path/to/file.img}}`

- List connected devices:

`fastboot devices`

- Display all information of a device:

`fastboot getvar all`
