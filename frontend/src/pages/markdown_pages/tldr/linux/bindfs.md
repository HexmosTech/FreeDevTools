---
title: "Bindfs - Mount Directory Permissions | Online Free DevTools by Hexmos"
name: bindfs
path: "/freedevtools/tldr/linux/bindfs"
canonical: "https://hexmos.com/freedevtools/tldr/linux/bindfs/"
description: "Mount directories with Bindfs and manage permissions on Linux systems.  Securely share files and control access using different user mappings. Free online tool, no registration required."
category: linux
keywords:
- linux bindfs
- directory mount
- permission management
- file system access
- user mapping linux
- bindfs mount point
- linux file sharing
- change file ownership
- bindfs permissions
- linux file system
features:
- Mount directories with customized permissions
- Map user and group IDs for file access
- Control file ownership on mounted directories
- Dynamically adjust file permissions on the fly
- Securely share files with restricted access
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bindfs

> Mount a directory elsewhere with different permissions.
> More information: <https://bindfs.org/docs/bindfs.1.html>.

- Mount a directory with same permissions:

`sudo bindfs {{path/to/directory}} {{path/to/mount_point}}`

- Map filesystem objects owned by `user1` to be owned by `user2` (also applies in reverse to newly created files):

`sudo bindfs --map={{user1}}/{{user2}} {{path/to/directory}} {{path/to/mount_point}}`

- Unmount a directory:

`sudo umount {{path/to/mount_point}}`
