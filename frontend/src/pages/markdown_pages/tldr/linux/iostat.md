---
title: "iostat Command - Monitor Disk & CPU | Free DevTools"
name: iostat
path: /freedevtools/tldr/linux/iostat
canonical: "https://hexmos.com/freedevtools/tldr/linux/iostat/"
description: "Monitor disk and CPU performance with the iostat command.  View detailed statistics, including I/O operations and CPU usage. Free online tool, no registration required."
category: linux
keywords:
  - iostat command linux
  - iostat disk monitoring
  - iostat cpu usage
  - iostat performance analysis
  - linux iostat tutorial
  - iostat system statistics
  - command line iostat
  - iostat detailed report
  - iostat megabytes conversion
  - iostat incremental reports
features:
  - Displays CPU and disk statistics since system startup.
  - Provides reports with units converted to megabytes.
  - Shows detailed CPU statistics with compact output option.
  - Displays disk statistics, including LVM volumes.
  - Generates incremental reports of CPU and disk statistics at specified intervals.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# iostat

> Report statistics for devices and partitions.
> More information: <https://manned.org/iostat>.

- Display a report of CPU and disk statistics since system startup:

`iostat`

- Display a report of CPU and disk statistics with units converted to megabytes:

`iostat -m`

- Display CPU statistics:

`iostat {{[-c|--compact]}}`

- Display disk statistics with disk names (including LVM):

`iostat -N`

- Display extended disk statistics with disk names for device "sda":

`iostat -xN {{sda}}`

- Display incremental reports of CPU and disk statistics every 2 seconds:

`iostat {{2}}`
