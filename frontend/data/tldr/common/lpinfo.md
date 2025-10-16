---
title: "List Printers - Manage CUPS Printers | Online Free DevTools by Hexmos"
name: lpinfo
path: "/freedevtools/tldr/common/lpinfo/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lpinfo/"
description: "Manage CUPS printers with lpinfo. Discover connected printers and available drivers. Find printer information quickly. Free online tool, no registration required."
category: common
keywords:
- CUPS printer list
- CUPS driver management
- printer discovery
- lpinfo command linux
- CUPS printers linux
- installed printer drivers
- printer model search
- CUPS configuration
- printer status check
- linux print server
features:
- List all connected printers.
- List all installed printer drivers.
- Search drivers by make and model.
- Display printer information.
- Manage CUPS print server from command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lpinfo

> List connected printers and installed drivers for the CUPS print server.
> More information: <https://openprinting.github.io/cups/doc/man-lpinfo.html>.

- List all the currently connected printers:

`lpinfo -v`

- List all the currently installed printer drivers:

`lpinfo -m`

- Search installed printer drivers by make and model:

`lpinfo --make-and-model "{{printer_model}}" -m`
