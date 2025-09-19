---
title: "CSRUtil - Control System Integrity Protection | Online Free DevTools by Hexmos"
name: csrutil
path: /freedevtools/tldr/osx/csrutil
canonical: "https://hexmos.com/freedevtools/tldr/osx/csrutil/"
description: "Control System Integrity Protection with CSRUtil on macOS. Enable, disable, check status, and manage NetBoot settings. Free online tool, no registration required."
category: osx
keywords:
- system integrity protection macOS
- sip configuration macOS
- csrutil command
- macOS security settings
- disable system integrity protection
- enable system integrity protection
- netboot configuration macOS
- csrutil netboot
- macOS csrutil disable
- macOS csrutil enable
features:
- Check System Integrity Protection status
- Disable System Integrity Protection on macOS
- Enable System Integrity Protection on macOS
- Manage allowed NetBoot sources
- Reset System Integrity Protection configuration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# csrutil

> Manage the System Integrity Protection configuration.
> More information: <https://keith.github.io/xcode-man-pages/csrutil.8.html>.

- Display the System Integrity Protection status:

`csrutil status`

- Disable the System Integrity Protection:

`csrutil disable`

- Enable the System Integrity Protection:

`csrutil enable`

- Display the list of allowed NetBoot sources:

`csrutil netboot list`

- Add an IPv4 address to the list of allowed NetBoot sources:

`csrutil netboot add {{ip}}`

- Reset the System Integrity Protection status and clear the NetBoot list:

`csrutil clear`
