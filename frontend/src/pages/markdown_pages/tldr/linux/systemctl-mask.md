---
title: "Systemctl Mask - Disable Units on Linux | Free DevTools"
name: systemctl-mask
path: /freedevtools/tldr/linux/systemctl-mask
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemctl-mask/"
description: "Disable units with systemctl mask on Linux. Prevent services from starting and ensure system stability with this powerful command-line tool. Free online tool, no registration required."
category: linux
keywords:
- systemctl mask linux
- linux systemd mask unit
- systemd disable service
- linux service management
- systemctl prevent start
- linux systemd service control
- systemd mask user service
- systemctl mask command
- linux systemd troubleshooting
- systemctl unit management
features:
- Prevent systemd units from starting
- Link units to /dev/null
- Mask services, sockets, and other unit types
- Disable user services using --user flag
- Ensure service shutdown during masking with --now option
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemctl mask

> Link units to `/dev/null` so that they can be even started.
> More information: <https://www.freedesktop.org/software/systemd/man/latest/systemctl.html#mask%20UNIT%E2%80%A6>.

- Mask a service:

`systemctl mask {{service_name}}`

- Ensure that the service is shut down while masking:

`systemctl mask {{service_name}} --now`

- Mask a user service:

`sysemctl mask --user {{service_name}}`
