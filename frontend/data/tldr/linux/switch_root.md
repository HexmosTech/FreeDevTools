---
title: "Switch Root - Change Root Filesystem | Online Free DevTools by Hexmos"
name: switch_root
path: "/freedevtools/tldr/linux/switch_root/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/switch_root/"
description: "Change root filesystem with Switch Root. Switch root directory and initialize a new environment. Free online tool, no registration required."
category: linux
keywords:
  - switch root
  - root filesystem
  - change root
  - mount point
  - init process
  - linux switch_root
  - system initialization
  - filesystem management
  - environment setup
  - switch_root command
features:
  - Change the root filesystem
  - Move /proc, /dev, /sys, and /run directories
  - Initialize a new environment
  - Mount a new root directory
  - Execute an init process on a new root filesystem
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# switch_root

> Use a different filesystem as the root of the mount tree.
> Note: `switch_root` will fail to function if the new root is not the root of a mount. Use bind-mounting as a workaround.
> See also: `chroot`, `mount`.
> More information: <https://manned.org/switch_root.8>.

- Move `/proc`, `/dev`, `/sys` and `/run` to the specified filesystem, use this filesystem as the new root and start the specified init process:

`switch_root {{new_root}} {{/sbin/init}}`

- Display help:

`switch_root {{[-h|--help]}}`
