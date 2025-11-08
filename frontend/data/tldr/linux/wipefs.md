---
title: "Wipe Filesystem - Remove Signatures | Online Free DevTools by Hexmos"
name: wipefs
path: "/freedevtools/tldr/linux/wipefs/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/wipefs/"
description: "Remove filesystem signatures with Wipefs, ensuring data privacy and security. Safely erase disk signatures, partitions, and RAID metadata. Free online tool, no registration required."
category: linux
keywords:
- filesystem wipe
- signature removal
- linux wipefs
- device signature wipe
- partition table wipe
- raid signature wipe
- disk signature eraser
- secure data deletion
- block device cleaner
- metadata removal tool
features:
- Erase filesystem signatures from devices
- Recursively wipe signatures from partitions
- Perform dry runs before wiping
- Force wipe mounted filesystems
- Wipe all available signature types
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wipefs

> Wipe filesystem, raid, or partition-table signatures from a device.
> More information: <https://manned.org/wipefs>.

- Display signatures for specified device:

`sudo wipefs {{/dev/sdX}}`

- Wipe all available signature types for a specific device with no recursion into partitions:

`sudo wipefs {{[-a|--all]}} {{/dev/sdX}}`

- Wipe all available signature types for the device and partitions using a glob pattern:

`sudo wipefs {{[-a|--all]}} {{/dev/sdX}}*`

- Perform dry run:

`sudo wipefs {{[-a|--all]}} {{[-n|--no-act]}} {{/dev/sdX}}`

- Force wipe, even if the filesystem is mounted:

`sudo wipefs {{[-a|--all]}} {{[-f|--force]}} {{/dev/sdX}}`
