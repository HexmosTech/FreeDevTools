---
title: "Systemctl Enable - Control Systemd Services | Free DevTools"
name: systemctl-enable
path: /freedevtools/tldr/linux/systemctl-enable
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemctl-enable/"
description: "Control systemd services easily with Systemctl Enable. Manage startup, user units, and service dependencies on Linux. Free online tool, no registration required."
category: linux
keywords:
- systemctl enable linux
- systemd service manager
- linux service control
- systemctl boot enable
- enable user service linux
- linux systemd unit
- autostart systemd service
- systemctl service dependencies
- linux service configuration
- systemd enable command
features:
- Enable systemd services to run on boot
- Start services immediately upon enabling
- Enable services for specific users
- Manage service dependencies effectively
- Configure service startup behavior on Linux
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemctl enable

> Enable systemd services.
> More information: <https://www.freedesktop.org/software/systemd/man/systemctl.html#enable%20UNIT%E2%80%A6>.

- Enable a service to run on boot:

`systemctl enable {{unit}}`

- Enable a service to run on boot and start it now:

`systemctl enable {{unit}} --now`

- Enable a user unit to run on login:

`systemctl enable --user {{unit}}`
