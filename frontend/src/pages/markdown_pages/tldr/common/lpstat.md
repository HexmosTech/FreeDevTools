---
title: "LPSTAT Printer Status - Show Printer Info | Online Free DevTools by Hexmos"
name: lpstat
path: /freedevtools/tldr/common/lpstat
canonical: "https://hexmos.com/freedevtools/tldr/common/lpstat/"
description: "Show printer status with LPSTAT. Check printer availability, default printers, and queued print jobs on Linux. Free online tool, no registration required."
category: common
keywords:
- printer status linux
- lpstat printer status
- linux printer management
- print queue status
- check printer availability
- default printer linux
- lpstat command
- printer information command
- linux printing
- system printing status
features:
- Display the status of printers
- Show the default printer configured on the system
- List all print jobs queued for specific users
- Provide detailed status information about the printing system
- Check if printers are enabled for printing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lpstat

> Show status information about printers.
> More information: <https://manned.org/lpstat>.

- List printers present on the machine and whether they are enabled for printing:

`lpstat -p`

- Show the default printer:

`lpstat -d`

- Display all available status information:

`lpstat -t`

- List print jobs queued by a specific user:

`lpstat -u {{user}}`
