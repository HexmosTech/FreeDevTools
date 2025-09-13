---
title: "Download APK - Fetch Apps from Stores | Free DevTools"
name: apkeep
path: /freedevtools/tldr/common/apkeep
canonical: "https://hexmos.com/freedevtools/tldr/common/apkeep/"
description: "Download APK files easily with apkeep. Fetch Android applications from various online sources directly to your machine. Free online tool, no registration required."
category: common
keywords:
- apk download
- android package download
- download android apps
- apk fetcher
- google play downloader
- f-droid downloader
- huawei app gallery downloader
- android apk downloader
- command line apk download
- apk downloader linux
features:
- Download APK files from specified sources
- List available versions of an application
- Specify download source (Google Play, F-Droid, etc.)
- Save APK files to a specified directory
- Download specific versions of Android applications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apkeep

> Download APK files from various sources.
> More information: <https://github.com/EFForg/apkeep>.

- Download an APK file to the specified directory:

`apkeep --app {{com.example.application}} {{path/to/directory}}`

- List all available versions for download:

`apkeep --app {{com.example.application}} --list-versions {{path/to/directory}}`

- Specify a store to download from:

`apkeep --app {{com.example.application}} --download-source {{apk-pure|google-play|f-droid|huawei-app-gallery}} {{path/to/directory}}`
