---
title: "Vkpurge - Remove Old Kernels | Online Free DevTools by Hexmos"
name: vkpurge
path: /freedevtools/tldr/linux/vkpurge
canonical: "https://hexmos.com/freedevtools/tldr/linux/vkpurge/"
description: "Remove old kernel versions with Vkpurge, reclaiming disk space and ensuring system stability. Manage kernel versions effectively. Free online tool, no registration required."
category: linux
keywords:
  - kernel cleanup
  - remove old kernels
  - vkpurge command
  - linux kernel management
  - xbps kernel versions
  - void linux kernel
  - system update cleanup
  - kernel version removal
  - disk space recovery
  - system maintenance
features:
  - List available kernel versions for removal
  - Remove specified kernel versions using glob patterns
  - Remove all unused kernel versions
  - Reclaim disk space by deleting old kernels
  - Simplify kernel management on Void Linux systems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vkpurge

> List or remove old kernel versions left behind by `xbps`.
> The `version` arguments support shell globs.
> More information: <https://man.voidlinux.org/vkpurge.8>.

- List all removable kernel versions (or those matching `version` if the argument is specified):

`vkpurge list {{version}}`

- Remove all unused kernels:

`vkpurge rm all`

- Remove kernel versions matching `version`:

`vkpurge rm {{version}}`
