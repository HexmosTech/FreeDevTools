---
title: "Systemctl Freeze - Control Linux Services | Online Free DevTools by Hexmos"
name: systemctl-freeze
path: /freedevtools/tldr/linux/systemctl-freeze
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemctl-freeze/"
description: "Control Linux systemd units and services with Systemctl Freeze. Quickly freeze and thaw units for debugging and maintenance. Free online tool, no registration required."
category: linux
keywords:
- systemctl freeze command
- linux systemd control
- freeze linux service
- thaw linux service
- systemctl unit management
- linux service debugging
- systemctl suspend service
- systemctl resume service
- linux systemctl command-line
- manage linux services
features:
- Freeze one or more systemd units
- Thaw previously frozen systemd units
- Freeze all running units with a wildcard
- Manage the state of systemd services
- Temporarily suspend service execution
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemctl freeze

> Freeze one or more units.
> Frozen units can be resumed with `systemctl thaw`.
> More information: <https://www.freedesktop.org/software/systemd/man/latest/systemctl.html#freeze%20PATTERN%E2%80%A6>.

- Freeze a specific unit:

`systemctl freeze {{unit}}`

- Freeze multiple units:

`systemctl freeze {{unit1 unit2 ...}}`

- Freeze all running units:

`systemctl freeze '*'`
