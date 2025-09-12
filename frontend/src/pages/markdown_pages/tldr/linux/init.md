---
title: "Init - Control Linux Run Levels | Free DevTools"
name: init
path: /freedevtools/tldr/unknown/init
canonical: "https://hexmos.com/freedevtools/tldr/unknown/init/"
description: "Control Linux run levels easily with init. Manage system states, shutdown, reboot, and single-user mode effortlessly. Free online tool, no registration required."
category: unknown
keywords:
- linux run level manager
- systemd init command
- init 0 shutdown
- init 6 reboot
- init 5 graphical environment
- init 3 multiuser terminal
- init 1 single user mode
- linux system manager
- system boot sequence
- process manager linux
features:
- Set the system to a specific run level
- Shut down or reboot the system
- Switch to single-user mode
- Transition to a graphical environment
- Start the system in multiuser terminal mode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# init

> Linux run level manager.
> Requires the SYSVINIT compile-time option to be enabled if using systemd.
> More information: <https://manned.org/init.8>.

- Set the system to run a graphical environment:

`sudo init 5`

- Set the system to run multiuser terminal:

`sudo init 3`

- Shut down the system:

`init 0`

- Reboot the system:

`init 6`

- Set the system to run on terminal with only root user allowed and no networking:

`sudo init 1`
