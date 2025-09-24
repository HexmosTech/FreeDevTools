---
title: "Chattr - Control File Attributes on Linux | Online Free DevTools by Hexmos"
name: chattr
path: /freedevtools/tldr/linux/chattr
canonical: "https://hexmos.com/freedevtools/tldr/linux/chattr/"
description: "Control file attributes with Chattr on Linux. Manage file immutability and append-only modes for enhanced security. Free online tool, no registration required."
category: linux
keywords:
- linux file attributes
- chattr command
- linux file immutability
- linux append only file
- change file attributes linux
- linux file permissions
- linux directory attributes
- chattr recursive
- linux file flags
- linux file system security
features:
- Modify file immutability attribute
- Enable append-only mode for files
- Recursively change attributes of directories
- Control case-insensitive interpretation of directories
- Secure file systems using file attributes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chattr

> Change attributes of files or directories.
> More information: <https://manned.org/chattr>.

- Make a file or directory [i]mmutable to changes and deletion, even by superuser:

`chattr +i {{path/to/file_or_directory}}`

- Make a file or directory mutable:

`chattr -i {{path/to/file_or_directory}}`

- [R]ecursively make an entire directory and contents immutable:

`chattr -R +i {{path/to/directory}}`

- Mark a directory and its files to be interpreted in a case-insensitive manner:

`chattr +F {{path/to/directory}}`

- Set a file to only allow [a]ppending:

`chattr +a {{path/to/file}}`
