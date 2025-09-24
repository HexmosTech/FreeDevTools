---
title: "Getprop - Show Android System Properties | Online Free DevTools by Hexmos"
name: getprop
path: /freedevtools/tldr/android/getprop
canonical: "https://hexmos.com/freedevtools/tldr/android/getprop/"
description: "Show Android system properties with Getprop. Access device configuration, retrieve build information, and debug Android devices effortlessly. Free online tool, no registration required."
category: android
keywords:
  - android system properties
  - android device information
  - android build details
  - adb getprop command
  - retrieve android settings
  - query android internals
  - android hardware properties
  - android platform details
  - android property management
  - get android device model
features:
  - Display all system properties
  - Retrieve the value of a specific property
  - Show the Android SDK API level
  - Show the Android version
  - Show the device model
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# getprop

> Show information about Android system properties.
> More information: <https://manned.org/getprop>.

- Display information about Android system properties:

`getprop`

- Display information about a specific property:

`getprop {{property}}`

- Display the SDK API level:

`getprop {{ro.build.version.sdk}}`

- Display the Android version:

`getprop {{ro.build.version.release}}`

- Display the Android device model:

`getprop {{ro.vendor.product.model}}`

- Display the OEM unlock status:

`getprop {{ro.oem_unlock_supported}}`

- Display the MAC address of the Android's Wi-Fi card:

`getprop {{ro.boot.wifimacaddr}}`
