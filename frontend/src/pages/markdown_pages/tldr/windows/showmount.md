---
title: "Showmount - Control NFS Mounts | Online Free DevTools by Hexmos"
name: showmount
path: "/freedevtools/tldr/windows/showmount"
canonical: "https://hexmos.com/freedevtools/tldr/windows/showmount/"
description: "Control NFS mounts with Showmount. Display shared resources and manage network file systems on Windows. Free online tool, no registration required."
category: windows
keywords:
- NFS mounts
- Showmount command
- Windows NFS
- Network file system
- Windows Server NFS
- Shared resources
- Remote filesystem
- NFS client
- NFS exported filesystems
- Showmount Windows
features:
- Display all exported NFS filesystems
- List NFS clients and their mounted directories
- Show NFS mounted directories
- Display shared resources for a remote server
- Manage network file system information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# showmount

> Display information about NFS filesystems on Windows Server.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/showmount>.

- Display all exported filesystems:

`showmount -e`

- Display all NFS clients and their mounted directories:

`showmount -a`

- Display all NFS mounted directories:

`showmount -d`

- Display all exported filesystems for a remote server:

`showmount -e {{server_address}}`
