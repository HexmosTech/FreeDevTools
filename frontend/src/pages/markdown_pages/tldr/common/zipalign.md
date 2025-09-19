---
title: "Zipalign - Optimize Zip Archives for Android | Online Free DevTools by Hexmos"
name: zipalign
path: /freedevtools/tldr/common/zipalign
canonical: "https://hexmos.com/freedevtools/tldr/common/zipalign/"
description: "Optimize Zip archives with Zipalign for enhanced Android app performance. Align APK files, reduce memory usage, and improve app startup speed. Free online tool, no registration required."
category: common
keywords:
- android zip alignment
- apk optimization
- zipalign android sdk
- zip archive alignment
- android package alignment
- align zip files android
- android app optimization
- zipalign command line
- android build tools
- zipalign tool
features:
- Align zip archive data on 4-byte boundaries
- Optimize APK files for Android
- Check zip file alignment with verbose output
- Improve Android app startup speed
- Reduce memory usage for Android applications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zipalign

> Zip archive alignment tool.
> Part of the Android SDK build tools.
> More information: <https://developer.android.com/tools/zipalign>.

- Align the data of a Zip file on 4-byte boundaries:

`zipalign {{4}} {{path/to/input.zip}} {{path/to/output.zip}}`

- Check that a Zip file is correctly aligned on 4-byte boundaries and display the results in a verbose manner:

`zipalign -v -c {{4}} {{path/to/input.zip}}`
