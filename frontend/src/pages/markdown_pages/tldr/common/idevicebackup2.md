---
title: "Create iOS Backups - Manage iDevice Data | Free DevTools"
name: idevicebackup2
path: /freedevtools/tldr/common/idevicebackup2
canonical: "https://hexmos.com/freedevtools/tldr/common/idevicebackup2/"
description: "Create iOS backups with idevicebackup2. Secure your iPhone or iPad data, restore devices, and manage backup encryption efficiently. Free online tool, no registration required."
category: common
keywords:
- ios backup creator
- iphone backup tool
- ipad backup manager
- idevicebackup2 command
- ios data backup
- itunes backup alternative
- iphone backup encryption
- ios restore tool
- command line backup ios
- idevice backup linux
features:
- Create full backups of iOS devices via command line
- Restore iOS devices from existing backups
- Encrypt backups with a user-specified password
- List files within a completed backup archive
- Manage backups on devices running iOS 4 or later
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# idevicebackup2

> Create or restore backups for devices running iOS 4 or later.
> More information: <https://manned.org/idevicebackup2>.

- Create a backup of the device in the specified directory:

`idevicebackup2 backup {{path/to/directory}}`

- Restore a backup from the specified directory:

`idevicebackup2 restore {{path/to/directory}}`

- Enable encryption for backups:

`idevicebackup2 encryption on {{password}}`

- List the files in the last completed backup:

`idevicebackup2 list`
