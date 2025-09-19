---
title: "PVRemove - Remove LVM Labels | Online Free DevTools by Hexmos"
name: pvremove
path: /freedevtools/tldr/linux/pvremove
canonical: "https://hexmos.com/freedevtools/tldr/linux/pvremove/"
description: "Remove LVM labels with PVRemove on Linux. Efficiently manage physical volumes and reclaim disk space. Free online tool, no registration required."
category: linux
keywords:
- LVM label remover
- Linux volume management
- Physical volume removal
- pvremove command linux
- LVM disk utility
- Linux disk management tool
- Volume group management
- Storage volume removal
- LVM configuration
- Linux pvremove tool
features:
- Remove LVM labels from physical volumes.
- Display detailed output during removal operations.
- Forcefully remove labels to bypass confirmation prompts.
- Output results in JSON format for easy parsing.
- Suppress prompts for non-interactive use cases.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pvremove

> Remove LVM labels from physical volume(s).
> More information: <https://manned.org/pvremove>.

- Remove a LVM label from a physical volume:

`sudo pvremove {{/dev/sdXY}}`

- Display detailed output during the operation:

`sudo pvremove {{[-v|--verbose]}} {{/dev/sdXY}}`

- Remove a LVM label without asking for confirmation:

`sudo pvremove {{[-y|--yes]}} {{/dev/sdXY}}`

- Forcefully remove a LVM label:

`sudo pvremove {{[-f|--force]}} {{/dev/sdXY}}`

- Display output in JSON format:

`sudo pvremove --reportformat json {{/dev/sdXY}}`
