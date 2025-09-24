---
title: "Reboot System - Control System Power | Online Free DevTools by Hexmos"
name: reboot
path: /freedevtools/tldr/linux/reboot
canonical: "https://hexmos.com/freedevtools/tldr/linux/reboot/"
description: "Control system power states with the reboot command.  Shut down, halt, or force reboot your system easily. Free online tool, no registration required."
category: linux
keywords:
  - system reboot command
  - reboot system linux
  - system power control
  - force reboot command
  - shutdown command linux
  - halt command linux
  - reboot options
  - system restart command
  - wtmp reboot entry
  - poweroff command
features:
  - Initiate a system reboot.
  - Power off the system cleanly.
  - Halt the system, terminating all processes.
  - Force a reboot without system manager interaction.
  - Log system shutdown without actually rebooting.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reboot

> Reboot the system.
> More information: <https://manned.org/reboot.8>.

- Reboot the system:

`reboot`

- Power off the system (same as `poweroff`):

`reboot {{[-p|--poweroff]}}`

- Halt (terminates all processes and shuts down the CPU) the system (same as `halt`):

`reboot --halt`

- Reboot immediately without contacting the system manager:

`reboot {{[-f|--force]}}`

- Write the wtmp shutdown entry without rebooting the system:

`reboot {{[-w|--wtmp-only]}}`
