---
title: "Time Machine - Manage Backups on macOS | Online Free DevTools by Hexmos"
name: tmutil
path: /freedevtools/tldr/osx/tmutil
canonical: "https://hexmos.com/freedevtools/tldr/osx/tmutil/"
description: "Manage Time Machine backups with tmutil, the command line interface for macOS. Automate, enable, disable, start and stop backups easily. Free online tool, no registration required."
category: osx
keywords:
- macos time machine
- time machine backup management
- tmutil command line
- macos backup utility
- backup destination configuration
- hfs+ backup
- apfs backup
- smb share backup
- time machine automation
- macos backup control
features:
- Set HFS+ or APFS drives as backup destinations
- Configure SMB share destinations for backups
- Enable and disable automatic Time Machine backups
- Start and stop Time Machine backups from the command line
- Append new destinations to the list of backup destinations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tmutil

> Utility for managing Time Machine backups. Most verbs require root privileges.
> More information: <https://keith.github.io/xcode-man-pages/tmutil.8.html>.

- Set an HFS+ drive as the backup destination:

`sudo tmutil setdestination {{path/to/disk_mount_point}}`

- Set an APF share or SMB share as the backup destination:

`sudo tmutil setdestination "{{protocol://user[:password]@host/share}}"`

- Append the given destination to the list of destinations:

`sudo tmutil setdestination -a {{destination}}`

- Enable automatic backups:

`sudo tmutil enable`

- Disable automatic backups:

`sudo tmutil disable`

- Start a backup, if one is not running already, and release control of the shell:

`sudo tmutil startbackup`

- Start a backup and block until the backup is finished:

`sudo tmutil startbackup -b`

- Stop a backup:

`sudo tmutil stopbackup`
