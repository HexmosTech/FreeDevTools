---
title: "SSHFS Mount - Access Remote Files Securely | Online Free DevTools by Hexmos"
name: sshfs
path: "/freedevtools/tldr/ssh/sshfs/"
canonical: "https://hexmos.com/freedevtools/tldr/ssh/sshfs/"
description: "Mount remote files securely with SSHFS. Access remote directories, transfer files, and manage remote systems efficiently. Free online tool, no registration required."
category: common
keywords:
- SSHFS mount
- SSH file system
- remote file access
- secure file transfer
- linux sshfs
- macos sshfs
- sshfs command line
- remote directory mount
- sshfs compression
- fuse filesystem
features:
- Mount remote directories over SSH
- Unmount SSHFS filesystems
- Specify custom SSH port for connection
- Enable compression for faster transfers
- Follow symbolic links on the remote system
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sshfs

> Filesystem client based on SSH.
> More information: <https://github.com/libfuse/sshfs>.

- Mount remote directory:

`sshfs {{username}}@{{remote_host}}:{{remote_directory}} {{mountpoint}}`

- Unmount remote directory:

`umount {{mountpoint}}`

- Mount remote directory from server with specific port:

`sshfs {{username}}@{{remote_host}}:{{remote_directory}} -p {{2222}}`

- Use compression:

`sshfs {{username}}@{{remote_host}}:{{remote_directory}} -C`

- Follow symbolic links:

`sshfs -o follow_symlinks {{username}}@{{remote_host}}:{{remote_directory}} {{mountpoint}}`
