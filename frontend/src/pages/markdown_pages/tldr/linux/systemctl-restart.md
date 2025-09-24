---
title: "Systemctl Restart - Control Systemd Units | Online Free DevTools by Hexmos"
name: systemctl-restart
path: /freedevtools/tldr/linux/systemctl-restart
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemctl-restart/"
description: "Control Systemd units instantly with Systemctl Restart. Stop, start, and manage system services on Linux with ease. Free online tool, no registration required."
category: linux
keywords:
- systemctl restart command
- linux systemd management
- systemd unit control
- restart linux service
- linux service management
- systemctl user unit
- linux system administration
- systemd command line
- linux system service
- systemctl restart options
features:
- Restart one or more systemd units.
- Restart user-specific systemd units.
- Stop a unit before restarting it.
- Manage systemd services on Linux.
- Use as a replacement for systemctl start on stopped units.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemctl restart

> Stop and then start one or more systemd units.
> Can be used in place of `systemctl start` on a stopped unit, but `start` is safer so that a running unit isn't accidentally restarted.
> More information: <https://www.freedesktop.org/software/systemd/man/latest/systemctl.html#restart%20PATTERN%E2%80%A6>.

- Restart a unit:

`systemctl restart {{unit}}`

- Restart more than one unit:

`systemctl restart {{unit1 unit2 ...}}`

- Restart a user unit:

`systemctl restart --user {{unit}}`
