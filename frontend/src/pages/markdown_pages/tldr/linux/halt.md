---
title: "Halt System - Control System Shutdown | Online Free DevTools by Hexmos"
name: halt
path: "/freedevtools/tldr/linux/halt"
canonical: "https://hexmos.com/freedevtools/tldr/linux/halt/"
description: "Control system shutdown with Halt System command. Power off, reboot, or halt immediately using flags. Free online tool, no registration required."
category: linux
keywords:
  - system halt command
  - shutdown system linux
  - linux halt command
  - halt system command
  - power off system
  - reboot system
  - force system halt
  - write wtmp shutdown entry
  - linux system administration
  - halt system unknown
features:
  - Halt the system completely
  - Power off the system immediately
  - Reboot the system quickly
  - Force halt without system manager
  - Write shutdown entry to wtmp
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# halt

> Halt the system.
> More information: <https://manned.org/halt.8>.

- Halt the system:

`halt`

- Power off the system (same as `poweroff`):

`halt {{[-p|--poweroff]}}`

- Reboot the system (same as `reboot`):

`halt --reboot`

- Halt immediately without contacting the system manager:

`halt {{[-f|--force]}}`

- Write the wtmp shutdown entry without halting the system:

`halt {{[-w|--wtmp-only]}}`
