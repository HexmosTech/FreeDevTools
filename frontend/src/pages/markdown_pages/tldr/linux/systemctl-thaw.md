---
title: "Systemctl Thaw - Control Frozen Units | Free DevTools"
name: systemctl-thaw
path: /freedevtools/tldr/linux/systemctl-thaw
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemctl-thaw/"
description: "Control frozen systemd units with systemctl thaw. Resume processes and manage system services efficiently. Free online tool, no registration required."
category: linux
keywords:
  - systemctl thaw command
  - systemd unit control
  - linux service management
  - systemctl thaw usage
  - resume frozen services
  - thaw systemd units
  - linux system administration
  - systemctl commands
  - manage systemd services
  - systemd unit thaw
features:
  - Resume single or multiple frozen systemd units.
  - Thaw all currently frozen units with a single command.
  - Effectively manage system processes after freezing.
  - Restore system services to their operational state.
  - Simple command-line interface for easy usage.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemctl thaw

> Thaw (resume) one or more frozen units.
> Units can be frozen with `systemctl freeze`.
> More information: <https://www.freedesktop.org/software/systemd/man/latest/systemctl.html#thaw%20PATTERN%E2%80%A6>.

- Thaw a specific unit:

`systemctl thaw {{unit}}`

- Thaw multiple units:

`systemctl thaw {{unit1 unit2 ...}}`

- Thaw all currently frozen units:

`systemctl thaw '*'`
