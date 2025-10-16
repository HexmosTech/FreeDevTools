---
title: "Android AAPT - Package and Compile Resources | Online Free DevTools by Hexmos"
name: aapt
path: "/freedevtools/tldr/common/aapt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/aapt/"
description: "Package Android resources instantly with Android AAPT. Compile, list, and dump app metadata using command-line tools. Free online tool, no registration required."
category: common
keywords:
- android asset packaging
- apk resource compiler
- android package management
- apk metadata viewer
- aapt command line tool
- android build tools
- apk file listing
- android development
- linux android tools
- macos android tools
features:
- List contents of an APK archive
- Dump metadata for an Android app
- Package files into a new APK archive
- Compile android resources
- Manage android app packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aapt

> Android Asset Packaging Tool: compile and package an Android app's resources.
> More information: <https://manned.org/aapt>.

- List files contained in an APK archive:

`aapt list {{path/to/app.apk}}`

- Display an app's metadata (version, permissions, etc.):

`aapt dump badging {{path/to/app.apk}}`

- Create a new APK archive with files from the specified directory:

`aapt package -F {{path/to/app.apk}} {{path/to/directory}}`
