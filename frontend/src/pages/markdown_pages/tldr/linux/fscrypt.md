---
title: "Encrypt Filesystem - Manage Linux Encryption | Online Free DevTools by Hexmos"
name: fscrypt
path: /freedevtools/tldr/linux/fscrypt
canonical: "https://hexmos.com/freedevtools/tldr/linux/fscrypt/"
description: "Encrypt filesystems easily with fscrypt. Secure directories, lock/unlock content, and manage filesystem encryption on Linux. Free online tool, no registration required."
category: linux
keywords:
- filesystem encryption linux
- linux encryption manager
- encrypt directory linux
- fscrypt setup linux
- fscrypt unlock linux
- fscrypt lock linux
- linux file security
- encrypt data at rest linux
- linux volume encryption
- secure filesystem access linux
features:
- Prepare a Linux filesystem for encryption
- Encrypt specific directories
- Unlock encrypted directories with user credentials
- Lock encrypted directories to restrict access
- Manage encryption policies for Linux filesystems
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fscrypt

> Go tool for managing Linux filesystem encryption.
> More information: <https://github.com/google/fscrypt>.

- Prepare the root filesystem for use with `fscrypt`:

`sudo fscrypt setup`

- Prepare a specific mountpoint for use with `fscrypt`:

`fscrypt setup {{path/to/directory}}`

- Enable filesystem encryption for a directory:

`fscrypt encrypt {{path/to/directory}}`

- Unlock an encrypted directory:

`fscrypt unlock {{path/to/encrypted_directory}}`

- Lock an encrypted directory:

`fscrypt lock {{path/to/encrypted_directory}}`
