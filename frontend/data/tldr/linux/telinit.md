---
title: "Telinit - Control Runlevels on Linux | Online Free DevTools by Hexmos"
name: telinit
path: "/freedevtools/tldr/linux/telinit/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/telinit/"
description: "Control system runlevels with Telinit on Linux. Manage system states, initiate reboots, and power-offs from the command line. Free online tool, no registration required."
category: linux
keywords:
- linux runlevel control
- telinit runlevel change
- systemd runlevel management
- linux system state transition
- telinit system reboot
- telinit system poweroff
- linux rescue mode command
- linux daemon configuration reload
- command line system management
- linux system administration
features:
- Change the current SysV runlevel of the system
- Initiate a system reboot with command line
- Power off the machine using telinit command
- Reload daemon configurations without restarting
- Switch to rescue mode for system recovery
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# telinit

> Change SysV runlevel.
> Since the concept SysV runlevels is obsolete the runlevel requests will be transparently translated into systemd unit activation requests.
> More information: <https://manned.org/telinit>.

- Power off the machine:

`telinit 0`

- Reboot the machine:

`telinit 6`

- Change SysV run level:

`telinit {{2|3|4|5}}`

- Change to rescue mode:

`telinit 1`

- Reload daemon configuration:

`telinit q`

- Do not send a wall message before reboot/power-off (6/0):

`telinit --no-wall {{value}}`
