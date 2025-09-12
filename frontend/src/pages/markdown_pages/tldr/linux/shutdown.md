---
title: "Shutdown System - Control System Power States | Free DevTools"
name: shutdown
path: /freedevtools/tldr/unknown/shutdown
canonical: "https://hexmos.com/freedevtools/tldr/unknown/shutdown/"
description: "Control system power states with Shutdown. Reboot, halt, or schedule shutdowns easily using command-line. Free online tool, no registration required. Command-line utilities"
category: unknown
keywords:
- System shutdown command
- Command line shutdown
- System reboot command
- Schedule shutdown
- Linux shutdown
- macOS shutdown
- Power management command
- Halt system
- Reboot scheduler
- Cancel shutdown command
features:
- Power off the system immediately
- Reboot the system instantly
- Schedule a system shutdown or reboot
- Cancel a pending shutdown or reboot operation
- Specify a shutdown time
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# shutdown

> Shutdown and reboot the system.
> More information: <https://manned.org/shutdown.8>.

- Power off ([h]alt) immediately:

`shutdown -h now`

- Reboot immediately:

`shutdown {{[-r|--reboot]}} now`

- Reboot in 5 minutes:

`shutdown {{[-r|--reboot]}} +{{5}} &`

- Shutdown at 1:00 pm (Uses 24h clock):

`shutdown -h 13:00`

- Cancel a pending shutdown/reboot operation:

`shutdown -c`
