---
title: "Mount Network Share - Access Network Drives | Online Free DevTools by Hexmos"
name: mount
path: /freedevtools/tldr/windows/mount
canonical: "https://hexmos.com/freedevtools/tldr/windows/mount/"
description: "Mount network drives easily with Mount. Access remote files and directories using network shares on Windows. Free online tool, no registration required."
category: windows
keywords:
- windows mount network share
- mount network drive windows
- mount nfs share windows
- windows smb mount
- windows network share access
- mount command windows
- map network drive command line
- windows network file system
- mount network location windows
- windows mount utility
features:
- Mount network shares using a drive letter
- Mount network shares to the next available drive
- Configure read timeouts for network mounts
- Retry failed mount attempts automatically
- Enforce case sensitivity on mounted shares
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mount

> Mount Network File System (NFS) network shares.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/mount>.

- Mount a share to the "Z" drive letter:

`mount \\{{computer_name}}\{{share_name}} {{Z:}}`

- Mount a share to the next available drive letter:

`mount \\{{computer_name}}\{{share_name}} *`

- Mount a share with a read timeout in seconds (defaults to 0.8, can be 0.9 or 1 to 60):

`mount -o timeout={{seconds}} \\{{computer_name}}\{{share_name}} {{Z:}}`

- Mount a share and retry up to 10 times if it fails:

`mount -o retry=10 \\{{computer_name}}\{{share_name}} {{Z:}}`

- Mount a share with forced case sensitivity:

`mount -o casesensitive \\{{computer_name}}\{{share_name}} {{Z:}}`

- Mount a share as an anonymous user:

`mount -o anon \\{{computer_name}}\{{share_name}} {{Z:}}`

- Mount a share using a specific mount type:

`mount -o mtype={{soft|hard}} \\{{computer_name}}\{{share_name}} {{Z:}}`
