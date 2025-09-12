---
title: "DMI Decode - Display System Hardware Info | Free DevTools"
name: dmidecode
path: /freedevtools/tldr/unknown/dmidecode
canonical: "https://hexmos.com/freedevtools/tldr/unknown/dmidecode/"
description: "Display system hardware information with DMI Decode. Retrieve BIOS version, serial number, and memory details. Free online tool, no registration required."
category: unknown
keywords:
- DMI decode information
- SMBIOS table contents
- hardware information retrieval
- BIOS version retrieval
- system serial number
- memory details display
- system information decoder
- linux system hardware
- dmidecode command line
- hardware specification information
features:
- Display the complete DMI table contents.
- Retrieve specific BIOS information like version.
- Extract the system's serial number.
- Show CPU information including manufacturer and model.
- Display detailed memory module specifications.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dmidecode

> Display the DMI (alternatively known as SMBIOS) table contents in a human-readable format.
> Requires root privileges.
> More information: <https://manned.org/dmidecode>.

- Show all DMI table contents:

`sudo dmidecode`

- Show the BIOS version:

`sudo dmidecode {{[-s|--string]}} bios-version`

- Show the system's serial number:

`sudo dmidecode {{[-s|--string]}} system-serial-number`

- Show BIOS information:

`sudo dmidecode {{[-t|--type]}} bios`

- Show CPU information:

`sudo dmidecode {{[-t|--type]}} processor`

- Show memory information:

`sudo dmidecode {{[-t|--type]}} memory`
