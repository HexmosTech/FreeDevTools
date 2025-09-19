---
title: "ABRoot - Manage Linux Root Partitions | Online Free DevTools by Hexmos"
name: abroot
path: /freedevtools/tldr/linux/abroot
canonical: "https://hexmos.com/freedevtools/tldr/linux/abroot/"
description: "Manage Linux root partitions with ABRoot, ensuring system consistency through OCI image-based updates. Secure rollback and kernel parameter editing. Free online tool, no registration required."
category: linux
keywords:
- linux partition manager
- abroot image updater
- immutable linux system
- atomic root filesystem
- linux oci updates
- abroot rollback utility
- kernel parameter editor
- linux system recovery
- abroot system updates
- dual partition boot
features:
- Transactional updates between root partitions
- Perform system rollback to a previous state
- Manage and modify kernel parameters
- List, add, or remove packages from a local image
- Display system status and configuration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# abroot

> Utility providing full immutability and atomicity by transacting between 2 root partition states (A⟺B).
> Updates are performed using OCI images, to ensure that the system is always in a consistent state.
> More information: <https://github.com/Vanilla-OS/ABRoot>.

- Add packages to the local image (Note: After executing this command, you need to apply these changes.):

`sudo abroot pkg add {{package}}`

- Remove packages from the local image (Note: After executing this command, you need to apply these changes.):

`sudo abroot pkg remove {{package}}`

- List packages in the local image:

`sudo abroot pkg list`

- Apply changes in the local image (Note: You need to reboot your system for these changes to be applied):

`sudo abroot pkg apply`

- Rollback your system to previous state:

`sudo abroot rollback`

- Edit/View kernel parameters:

`sudo abroot kargs {{edit|show}}`

- Display status:

`sudo abroot status`

- Display help:

`abroot {{[-h|--help]}}`
