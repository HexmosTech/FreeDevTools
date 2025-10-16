---
title: "Poweroff System - Halt Linux Instantly | Online Free DevTools by Hexmos"
name: poweroff
path: "/freedevtools/tldr/linux/poweroff/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/poweroff/"
description: "Poweroff system with Poweroff. Halt, reboot, or force shutdown of Linux machines using command line. Free online tool, no registration required."
category: linux
keywords:
- poweroff system linux
- linux poweroff command
- shutdown linux terminal
- halt linux command
- reboot linux terminal
- linux system shutdown
- linux power management
- force poweroff linux
- linux wtmp shutdown entry
- linux terminal commands
features:
- Power off the system instantly
- Halt the system completely
- Reboot the system directly
- Force shutdown without system manager contact
- Write wtmp shutdown entry
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# poweroff

> Power off the system.
> More information: <https://www.manned.org/poweroff>.

- Power off the system:

`poweroff`

- Halt the system (same as `halt`):

`poweroff --halt`

- Reboot the system (same as `reboot`):

`poweroff --reboot`

- Shut down immediately without contacting the system manager:

`poweroff {{[-f|--force]}}`

- Write the wtmp shutdown entry without shutting down the system:

`poweroff {{[-w|--wtmp-only]}}`
