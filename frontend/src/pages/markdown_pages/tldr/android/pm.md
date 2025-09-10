---
title: pm
name: pm
path: /freedevtools/tldr/android/pm
canonical: "https://hexmos.com/freedevtools/tldr/android/pm/"
description: Display information about apps on an Android device.
category: android
keywords:
- android package management
- list installed applications
- identify system applications
- identify third-party applications
- search for specific apps
- retrieve apk file path
- application package information
- android application listing
- android debugging tools
- android development utilities
features:
- list installed app packages
- filter system applications
- filter third-party applications
- search app packages by keyword
- display apk file path for apps
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pm

> Display information about apps on an Android device.
> More information: <https://developer.android.com/tools/adb#pm>.

- List all installed apps:

`pm list packages`

- List all installed [s]ystem apps:

`pm list packages -s`

- List all installed [3]rd-party apps:

`pm list packages -3`

- List apps matching specific keywords:

`pm list packages {{keyword1 keyword2 ...}}`

- Display a path of the APK of a specific app:

`pm path {{app}}`
