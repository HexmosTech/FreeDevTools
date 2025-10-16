---
title: "Android Package Manager - List Apps | Online Free DevTools by Hexmos"
name: pm
path: "/freedevtools/tldr/android/pm/"
canonical: "https://hexmos.com/freedevtools/tldr/android/pm/"
description: "List Android app packages and extract application details with Package Manager. Identify system and third-party apps on Android devices. Free online tool, no registration required."
category: android
keywords:
  - android package manager
  - adb package management
  - list android applications
  - identify system apps android
  - identify third-party apps android
  - search android apps
  - android apk path
  - android application details
  - android debugging tools
  - android development utilities
features:
  - list installed Android app packages
  - filter for system applications
  - filter for third-party applications
  - search app packages by keyword
  - display APK file path for apps
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
