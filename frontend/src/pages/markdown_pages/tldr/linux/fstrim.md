---
title: "fstrim - Trim Unused SSD Blocks | Free DevTools"
name: fstrim
path: /freedevtools/tldr/linux/fstrim
canonical: "https://hexmos.com/freedevtools/tldr/linux/fstrim/"
description: "Optimize SSD performance with fstrim, discarding unused blocks on your storage device. Improve speed and efficiency with this command-line tool. Free online resource, no registration required."
category: linux
keywords:
  - ssd trim command
  - fstrim linux
  - disk cleanup command
  - ssd optimization command
  - flash storage maintenance
  - linux ssd maintenance
  - fstrim usage
  - command line ssd tool
  - unused block removal
  - filesystem optimization
features:
  - Reclaims unused storage space on SSDs.
  - Improves SSD performance and write speeds.
  - Prevents data fragmentation and wear.
  - Supports trimming on multiple partitions.
  - Provides verbose output for monitoring progress.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fstrim

> Discard unused blocks on a mounted filesystem.
> Only supported by flash memory devices such as SSDs and microSD cards.
> More information: <https://manned.org/fstrim>.

- Trim unused blocks on all mounted partitions that support it:

`sudo fstrim {{[-a|--all]}}`

- Trim unused blocks on a specified partition:

`sudo fstrim {{/}}`

- Display statistics after trimming:

`sudo fstrim {{[-v|--verbose]}} {{/}}`
