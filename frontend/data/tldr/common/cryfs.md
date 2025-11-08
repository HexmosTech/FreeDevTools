---
title: "Create Encrypted Filesystem - CryFS | Online Free DevTools by Hexmos"
name: cryfs
path: "/freedevtools/tldr/common/cryfs/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cryfs/"
description: "Create encrypted filesystem with CryFS. Secure cloud storage with enhanced data protection and privacy. Free online tool, no registration required."
category: common
keywords:
- encrypted filesystem
- cryptographic storage
- cloud encryption
- data security
- cryfs encryption
- mount encrypted directory
- unmount encrypted volume
- command line encryption
- secure file storage
- linux encryption
features:
- Mount an encrypted filesystem
- Unmount an encrypted filesystem
- Automatically unmount after inactivity
- List supported encryption ciphers
- Securely store files in the cloud
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cryfs

> A cryptographic filesystem for the cloud.
> More information: <https://manned.org/cryfs>.

- Mount an encrypted filesystem. The initialization wizard will be started on the first execution:

`cryfs {{path/to/cipher_dir}} {{path/to/mount_point}}`

- Unmount an encrypted filesystem:

`cryfs-unmount {{path/to/mount_point}}`

- Automatically unmount after ten minutes of inactivity:

`cryfs --unmount-idle {{10}} {{path/to/cipher_dir}} {{path/to/mount_point}}`

- List supported ciphers:

`cryfs --show-ciphers`
