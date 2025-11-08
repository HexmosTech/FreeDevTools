---
title: "mdadm RAID Management - Create and Control RAID Arrays | Online Free DevTools by Hexmos"
name: mdadm
path: "/freedevtools/tldr/linux/mdadm/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/mdadm/"
description: "Manage RAID arrays with mdadm. Create, stop, and modify RAID configurations easily using command-line instructions. Free online tool, no registration required."
category: linux
keywords:
  - raid array management
  - mdadm commands
  - linux raid tool
  - mdadm tutorial
  - create raid array
  - manage raid devices
  - mdadm linux
  - raid configuration
  - mdadm superblock
  - raid array commands
features:
  - Create new RAID arrays with specified parameters.
  - Stop and start existing RAID arrays.
  - Manage failed disks within a RAID array.
  - Add and remove disks from a RAID array.
  - Inspect detailed information about RAID arrays.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mdadm

> RAID management utility.
> More information: <https://manned.org/mdadm>.

- Create array:

`sudo mdadm --create {{/dev/md/MyRAID}} --level {{raid_level}} --raid-devices {{number_of_disks}} {{/dev/sdXN}}`

- Stop array:

`sudo mdadm --stop {{/dev/md0}}`

- Mark disk as failed:

`sudo mdadm --fail {{/dev/md0}} {{/dev/sdXN}}`

- Remove disk:

`sudo mdadm --remove {{/dev/md0}} {{/dev/sdXN}}`

- Add disk to array:

`sudo mdadm --assemble {{/dev/md0}} {{/dev/sdXN}}`

- Show RAID info:

`sudo mdadm --detail {{/dev/md0}}`

- Reset disk by deleting RAID metadata:

`sudo mdadm --zero-superblock {{/dev/sdXN}}`
