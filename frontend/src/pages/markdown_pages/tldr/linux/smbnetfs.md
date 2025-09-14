---
title: "Mount SMB Shares - Interact with SMB Shares | Free DevTools"
name: smbnetfs
path: /freedevtools/tldr/linux/smbnetfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/smbnetfs/"
description: "Mount SMB shares interactively with smbnetfs, enabling easy access to network files and resources. Explore shared directories, copy files, and manage permissions. Free online tool, no registration required."
category: linux
keywords:
  - SMB share mounting
  - network file system
  - SMB client
  - Linux SMB mount
  - macOS SMB mount
  - command line SMB access
  - interactive SMB mount
  - SMB network browsing
  - smbnetfs configuration
  - remote file access
features:
  - Mount SMB shares via the command line.
  - Interact with shares via a mountpoint.
  - Browse SMB network interactively.
  - Access remote files and directories.
  - Integrate SMB resources into the local filesystem.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# smbnetfs

> Mount SMB shares interactively.
> More information: <https://sourceforge.net/projects/smbnetfs/>.

- Make shares available at `mountpoint`:

`smbnetfs {{mountpoint}}`
