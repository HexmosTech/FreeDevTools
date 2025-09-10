---
title: getprop
name: getprop
path: /freedevtools/tldr/android/getprop
canonical: "https://hexmos.com/freedevtools/tldr/android/getprop/"
description: Show information about Android system properties.
category: android
keywords:
- android system information
- retrieve system properties
- android device configuration
- android build information
- query android settings
- access android internals
- android hardware information
- debug android devices
- android platform details
- android property management
features:
- display system properties
- retrieve specific property values
- show sdk api level
- show android version
- show device model
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
