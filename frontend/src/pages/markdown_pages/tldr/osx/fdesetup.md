---
title: "FileVault Control - Manage Disk Encryption | Online Free DevTools by Hexmos"
name: fdesetup
path: /freedevtools/tldr/osx/fdesetup
canonical: "https://hexmos.com/freedevtools/tldr/osx/fdesetup/"
description: "Control disk encryption with FileVault using fdesetup. Manage FileVault users, enable/disable encryption, and check the current status. Free online tool, no registration required."
category: osx
keywords:
- FileVault manager
- macOS disk encryption
- fdesetup command
- FileVault user management
- disk encryption status
- FileVault enable
- FileVault disable
- macOS security
- command line encryption
- osx FileVault control
features:
- List FileVault enabled users
- Check FileVault status
- Add FileVault enabled users
- Enable FileVault encryption
- Disable FileVault encryption
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fdesetup

> Set and retrieve FileVault related information.
> More information: <https://keith.github.io/xcode-man-pages/fdesetup.8.html>.

- List current FileVault enabled users:

`sudo fdesetup list`

- Get current FileVault status:

`fdesetup status`

- Add FileVault enabled user:

`sudo fdesetup add -usertoadd {{user1}}`

- Enable FileVault:

`sudo fdesetup enable`

- Disable FileVault:

`sudo fdesetup disable`
