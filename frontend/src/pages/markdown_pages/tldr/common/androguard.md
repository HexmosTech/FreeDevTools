---
title: "Android Reverse Engineering - Analyze APKs with Androguard | Online Free DevTools by Hexmos"
name: androguard
path: /freedevtools/tldr/common/androguard
canonical: "https://hexmos.com/freedevtools/tldr/common/androguard/"
description: "Reverse engineer Android applications with Androguard. Analyze APK files, decompile code, and extract metadata effortlessly. Free online tool, no registration required."
category: common
keywords:
- android reverse engineering
- apk analyzer
- androguard apk analysis
- android application analysis
- java decompilation
- mobile security analysis
- android manifest viewer
- dex to jar conversion
- dynamic analysis android
- static analysis android
features:
- Decompile Java code from Android applications
- Display Android app manifest information
- Extract application metadata like version and ID
- Perform static analysis of APK files
- Analyze and understand the structure of Android apps
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# androguard

> Reverse engineer Android applications. Written in Python.
> More information: <https://github.com/androguard/androguard>.

- Display Android app manifest:

`androguard axml {{path/to/app.apk}}`

- Display app metadata (version and app ID):

`androguard apkid {{path/to/app.apk}}`

- Decompile Java code from an app:

`androguard decompile {{path/to/app.apk}} --output {{path/to/directory}}`
