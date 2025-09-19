---
title: "Runlevel Status Checker - Control System Runlevels | Online Free DevTools by Hexmos"
name: rc-status
path: /freedevtools/tldr/linux/rc-status
canonical: "https://hexmos.com/freedevtools/tldr/linux/rc-status/"
description: "Check and control system runlevels with rc-status.  View service status, identify crashed services, and manage runlevels efficiently. Free online tool, no registration required."
category: linux
keywords:
  - runlevel status checker
  - runlevel manager linux
  - rc-status command linux
  - systemd runlevel status
  - init system runlevel
  - service status checker linux
  - linux service monitoring
  - openrc status
  - runlevel control commands
  - crashed service detection
features:
  - Display a summary of all services and their status.
  - Identify services that have crashed.
  - List manually started services.
  - Show all services across all runlevels.
  - Display the current runlevel and list all available runlevels.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rc-status

> Show status info about runlevels.
> See also: `openrc`.
> More information: <https://manned.org/rc-status>.

- Show a summary of services and their status:

`rc-status`

- Include services in all runlevels in the summary:

`rc-status {{[-a|--all]}}`

- List services that have crashed:

`rc-status {{[-c|--crashed]}}`

- List manually started services:

`rc-status {{[-m|--manual]}}`

- List supervised services:

`rc-status {{[-S|--supervised]}}`

- Display the current runlevel:

`rc-status {{[-r|--runlevel]}}`

- List all runlevels:

`rc-status {{[-l|--list]}}`
