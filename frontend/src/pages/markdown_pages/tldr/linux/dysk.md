---
title: "Display Disk Information - Format Disk Usage | Online Free DevTools by Hexmos"
name: dysk
path: /freedevtools/tldr/linux/dysk
canonical: "https://hexmos.com/freedevtools/tldr/linux/dysk/"
description: "Format disk usage information with dysk. Analyze disk space and filesystem details, sort, and filter by disk type. Free online tool, no registration required."
category: linux
keywords:
  - disk information display
  - disk usage analyzer
  - filesystem information
  - disk space analysis
  - hdd disk filter
  - ssd disk filter
  - disk utilization monitor
  - free space checker
  - dysk command line
  - linux disk info
features:
  - Display filesystem information in a table format.
  - Sort disk information by various metrics (e.g., free space).
  - Filter disks based on type (HDD, SSD).
  - Monitor disk utilization percentage.
  - Check available free space on disks.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dysk

> Display filesystem information in a table.
> More information: <https://manned.org/dysk>.

- Get a standard overview of your usual disks:

`dysk`

- Sort by free size:

`dysk {{[-s|--sort]}} free`

- Include only HDD disks:

`dysk {{[-f|--filter]}} 'disk = HDD'`

- Exclude SSD disks:

`dysk {{[-f|--filter]}} 'disk <> SSD'`

- Display disks with high utilization or low free space:

`dysk {{[-f|--filter]}} 'use > 65% | free < 50G'`
