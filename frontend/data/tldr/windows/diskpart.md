---
title: "Diskpart - Manage Disks, Volumes, and Partitions | Online Free DevTools by Hexmos"
name: diskpart
path: "/freedevtools/tldr/windows/diskpart/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/diskpart/"
description: "Manage disks and volumes efficiently with Diskpart. Create partitions, assign drive letters, and format volumes using this powerful command-line tool. Free online tool, no registration required."
category: windows
keywords:
- diskpart commands
- windows disk management
- partition manager
- volume management
- disk partitioning windows
- command line disk utility
- diskpart tutorial
- diskpart script
- windows diskpart create partition
- diskpart assign drive letter
features:
- List available disks and volumes
- Select specific volumes for management
- Assign drive letters to selected volumes
- Create primary partitions on disks
- Activate selected volumes for system use
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# diskpart

> Disk, volume and partition manager.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/diskpart>.

- Run diskpart by itself in an administrative command prompt to enter its command-line:

`diskpart`

- List all disks:

`list disk`

- Select a volume:

`select volume {{volume}}`

- Assign a drive letter to the selected volume:

`assign letter {{letter}}`

- Create a new partition:

`create partition primary`

- Activate the selected volume:

`active`

- Exit diskpart:

`exit`
