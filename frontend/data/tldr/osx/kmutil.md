---
title: "Kext Control - Manage macOS Kernel Extensions | Online Free DevTools by Hexmos"
name: kmutil
path: "/freedevtools/tldr/osx/kmutil/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/kmutil/"
description: "Control macOS kernel extensions with kmutil. Manage kexts, inspect collections, and debug kernel configurations on macOS. Free online tool, no registration required."
category: osx
keywords:
- kext management macOS
- kernel extension control
- macOS kernel debugging
- kmutil command-line
- kext collection inspection
- macOS kernel modules
- kext loading macOS
- kernelmanagerd state dump
- macOS kext consistency check
- kernel extension troubleshooting
features:
- Find available kexts on macOS
- Display Kernel Management sub-system logs
- Inspect and display kext collection contents
- Check consistency of kext collections
- Load kernel extensions from a specific path
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kmutil

> Utility for managing kernel extensions (kexts) and kext collections on disk.
> More information: <https://keith.github.io/xcode-man-pages/kmutil.8.html>.

- Find kexts available on the operating system:

`kmutil find`

- Display logging information about the Kernel Management sub-system:

`kmutil log`

- Inspect and display a kext collection's contents according to the options provided:

`kmutil inspect {{options}}`

- Check the consistency of kext collections against each other:

`kmutil check`

- Dump kernelmanagerd state for debugging:

`sudo kmutil dumpstate`

- Load one or more extensions based on the bundle specified at this path in the results:

`kmutil load --bundle-path {{path/to/extension.kext}}`
