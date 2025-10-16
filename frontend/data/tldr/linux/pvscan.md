---
title: "PVScan - List Physical Volumes | Online Free DevTools by Hexmos"
name: pvscan
path: "/freedevtools/tldr/linux/pvscan/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pvscan/"
description: "List physical volumes with PVScan. Quickly manage Linux storage, identify volume groups, and display detailed volume information. Free online tool, no registration required."
category: linux
keywords:
- physical volume scanner
- LVM physical volumes
- linux volume management
- physical volume identification
- pvscan linux command
- volume group mapping
- physical volume reporting
- LVM logical volumes
- disk partition information
- storage volume details
features:
- List all physical volumes on a Linux system
- Show the volume group for a specific physical volume
- Display logical volumes associated with a physical volume
- Output detailed information in JSON format
- Cache volume information for faster lookups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pvscan

> List all physical volumes and manage their online status.
> More information: <https://manned.org/pvscan>.

- List all physical volumes:

`pvscan`

- Show the volume group that uses a specific physical volume:

`pvscan --cache --listvg {{/dev/sdX}}`

- Show logical volumes that use a specific physical volume:

`pvscan --cache --listlvs {{/dev/sdX}}`

- Display detailed information in JSON format:

`pvscan --reportformat json`
