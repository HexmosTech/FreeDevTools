---
title: "Control Systemd Status - Manage System Units | Online Free DevTools by Hexmos"
name: systemctl-status
path: /freedevtools/tldr/linux/systemctl-status
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemctl-status/"
description: "Control Systemd status with systemctl. Manage systemd units and services, check status, and diagnose issues easily. Free online tool, no registration required."
category: linux
keywords:
  - systemd status control
  - systemctl status manager
  - linux service status
  - systemd unit status
  - linux systemd control
  - systemd service manager
  - systemctl service status
  - systemctl unit status
  - linux system administration
  - systemd troubleshooting
features:
  - Display the status of systemd units
  - Show status of failed units
  - List all running systemd services
  - List units by type (service, timer, socket, etc.)
  - Show the status of user units
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemctl status

> Display the status of systemd units.
> More information: <https://www.freedesktop.org/software/systemd/man/latest/systemctl.html#status%20PATTERN%E2%80%A6%7CPID%E2%80%A6%5D>.

- Show the status of a systemd unit:

`systemctl status {{unit}}.{{service|timer|socket|target|...}}`

- Show the status of failed units:

`systemctl status --failed`

- List all running services:

`systemctl status`

- List all units in the system:

`systemctl status --all`

- List all units of a specific type:

`systemctl status --type {{service|timer|socket|target|...}}`

- List all units with a specific state:

`systemctl status --state {{active|inactive|failed}}`

- Show the status of a user unit:

`systemctl status --user {{unit}}`
