---
title: "HD-Idle - Control Disk Spin Down | Online Free DevTools by Hexmos"
name: hd-idle
path: "/freedevtools/tldr/linux/hd-idle/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/hd-idle/"
description: "Control hard drive spin down with HD-Idle.  Manage power consumption and improve disk lifespan with this simple command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - disk spin down command
  - linux disk management
  - hd-idle linux
  - power management command
  - systemd service control
  - hard drive idle time
  - energy saving command
  - command line disk utility
  - linux hd-idle
  - manage hard drive power
features:
  - Automatically spins down hard drives after inactivity.
  - Allows manual spin down of specific disks.
  - Configurable idle time settings for individual drives.
  - Integrates with systemd for service management.
  - Prevents unnecessary hard drive wear and power consumption.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hd-idle

> Spin down external disks after a period of idle time.
> More information: <https://manned.org/hd-idle>.

- Start a service to manage hard drive spin down. By default hard disks will spin down after 10 minutes of inactivity:

`systemctl start hd-idle`

- Spin down a disk immediately:

`hd-idle -t {{/dev/sdX}}`

- Set disks to never spin down, then set explicit idle times (in seconds) for disks which have "sda" or "sdb" in their device name:

`hd-idle -i 0 -a /dev/sda -i {{300}} -a /dev/sdb -i {{1200}}`
