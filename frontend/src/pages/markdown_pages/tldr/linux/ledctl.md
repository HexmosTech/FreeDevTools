---
title: "LED Control - Manage Enclosure LEDs | Online Free DevTools by Hexmos"
name: ledctl
path: /freedevtools/tldr/linux/ledctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/ledctl/"
description: "Control enclosure LEDs with ledctl. Manage device status, locate devices, and turn LEDs on or off on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- linux led control
- enclosure led manager
- ledctl command
- server led control
- linux device led
- storage led management
- disk led control
- linux hardware control
- led status command
- system led controller
features:
- Control the "Locate" LED for specified devices
- Turn off the "Locate" LED for specified devices
- Disable both "Status" and "Failure" LEDs
- Reset LEDs to the "normal" (all off) state
- Manage enclosure LEDs via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ledctl

> Intel(R) Enclosure LED Control Application.
> More information: <https://manned.org/ledctl>.

- Turn on the "Locate" LED for specified device(s):

`sudo ledctl locate={{/dev/sda,/dev/sdb,...}}`

- Turn off the "Locate" LED for specified device(s):

`sudo ledctl locate_off={{/dev/sda,/dev/sdb,...}}`

- Turn off the "Status" LED and "Failure" LED for specified device(s):

`sudo ledctl off={{/dev/sda,/dev/sdb,...}}`

- Turn off the "Status" LED, "Failure" LED and "Locate" LED for specified device(s):

`sudo ledctl normal={{/dev/sda,/dev/sdb,...}}`
