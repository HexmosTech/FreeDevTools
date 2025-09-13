---
title: "View Uptime Records - Display System History | Free DevTools"
name: uprecords
path: /freedevtools/tldr/linux/uprecords
canonical: "https://hexmos.com/freedevtools/tldr/linux/uprecords/"
description: "Display system uptime records with uprecords.  View historical reboot information and kernel versions quickly and easily. Free online tool, no registration required."
category: linux
keywords:
  - uptime records viewer
  - system uptime history
  - linux uptime command
  - reboot history analyzer
  - kernel version tracker
  - system boot information
  - historical uptime data
  - uptime summary report
  - command-line uptime tool
  - server uptime monitoring
features:
  - Displays top 10 historical uptime records.
  - Shows up to 25 records with custom parameter.
  - Displays downtime between reboots instead of kernel versions.
  - Shows the most recent system reboots.
  - Provides untruncated output for detailed information.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uprecords

> Display a summary of historical uptime records.
> More information: <https://manned.org/uprecords>.

- Display a summary of the top 10 historical uptime records:

`uprecords`

- Display the top 25 records:

`uprecords -m {{25}}`

- Display the downtime between reboots instead of the kernel version:

`uprecords -d`

- Show the most recent reboots:

`uprecords -B`

- Don't truncate information:

`uprecords -w`
