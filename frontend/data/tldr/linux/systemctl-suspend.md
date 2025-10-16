---
title: "Systemctl Suspend - Control System Suspend | Online Free DevTools by Hexmos"
name: systemctl-suspend
path: "/freedevtools/tldr/linux/systemctl-suspend/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemctl-suspend/"
description: "Control system suspend with systemctl suspend. Manage system sleep states and schedule suspend operations. Free online tool, no registration required."
category: linux
keywords:
- system suspend command
- linux suspend command
- systemctl suspend linux
- linux systemctl suspend
- system suspend scheduler
- linux sleep command
- linux power management
- systemctl power options
- linux suspend hibernate
- systemd suspend control
features:
- Suspend the Linux system immediately
- Schedule a system suspend with a delay
- Combine suspend with hibernate
- Manage system power states via command line
- Execute suspend after a specified time interval
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemctl suspend

> Suspend the system.
> More information: <https://www.freedesktop.org/software/systemd/man/latest/systemctl.html#suspend>.

- Suspend the system immediately:

`systemctl suspend`

- Schedule a suspend after a 5 minute delay:

`sleep 300 && systemctl suspend`

- Suspend the system and then hibernate after a delay:

`systemctl hybrid-sleep`
