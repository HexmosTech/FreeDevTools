---
title: "List Drivers - Display Device Driver Info | Online Free DevTools by Hexmos"
name: driverquery
path: /freedevtools/tldr/windows/driverquery
canonical: "https://hexmos.com/freedevtools/tldr/windows/driverquery/"
description: "Display driver information with Driverquery on Windows. Examine device driver properties and system configurations. Free online tool, no registration required."
category: windows
keywords:
- Windows driver list
- Driver information display
- Device driver query
- Driver status Windows
- Windows driver management
- Driver details Windows
- Windows driver configuration
- Driver version Windows
- List signed drivers
- Driverquery command
features:
- Display all installed device drivers
- Output driver information in table, list, or CSV format
- Show whether drivers are digitally signed
- Display driver information for remote computers
- Provide verbose driver details
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# driverquery

> Display information about installed device drivers.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/driverquery>.

- Display a list of all installed device drivers:

`driverquery`

- Display a list of drivers in the specified format:

`driverquery /fo {{table|list|csv}}`

- Display a list of drivers with a column to indicate if they are signed:

`driverquery /si`

- Exclude the header in the output list:

`driverquery /nh`

- Display a list of drivers for a remote machine:

`driverquery /s {{hostname}} /u {{username}} /p {{password}}`

- Display a list of drivers with verbose information:

`driverquery /v`

- Display help:

`driverquery /?`
