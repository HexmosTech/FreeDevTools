---
title: "Systemctl Disable - Control Services | Free DevTools"
name: systemctl-disable
path: /freedevtools/tldr/linux/systemctl-disable
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemctl-disable/"
description: "Control systemd services with systemctl disable. Stop services from running on boot and manage user services. Free online tool, no registration required."
category: linux
keywords:
  - systemd service disable
  - linux service control
  - systemctl disable service
  - systemd boot disable
  - linux systemd management
  - service autostart disable
  - user service disable
  - command line service control
  - systemd unit disable
  - linux system administration
features:
  - Prevent services from starting on boot
  - Immediately stop a service and disable it
  - Disable user-specific services
  - Manage systemd units via the command line
  - Control service execution state and boot behavior
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemctl disable

> Disable systemd services.
> More information: <https://www.freedesktop.org/software/systemd/man/systemctl.html#disable%20UNIT%E2%80%A6>.

- Stop a service from running on boot:

`systemctl disable {{unit}}`

- Stop a service from running on boot and stop its current execution:

`systemctl disable {{unit}} --now`

- Stop a user service from running on login:

`systemctl disable --user {{unit}}`
