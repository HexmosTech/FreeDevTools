---
title: "Update RC.d - Manage Init Scripts on Linux | Online Free DevTools by Hexmos"
name: update-rc.d
path: /freedevtools/tldr/linux/update-rc.d
canonical: "https://hexmos.com/freedevtools/tldr/linux/update-rc.d/"
description: "Manage Linux init scripts with Update RC.d. Install, enable, disable, and remove services for system startup and shutdown processes. Free online tool, no registration required."
category: linux
keywords:
- linux init scripts
- system v init scripts
- update-rc.d command
- linux service management
- systemd alternative
- startup script control
- rc.d manager
- linux boot process
- service installer linux
- service remover linux
features:
- Install system V init script links
- Enable system services for startup
- Disable system services to prevent startup
- Forcefully remove system services
- Manage service dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# update-rc.d

> Install and remove services which are System-V style init script links.
> Init scripts are in the `/etc/init.d/`.
> More information: <https://manned.org/update-rc.d>.

- Install a service:

`update-rc.d {{mysql}} defaults`

- Enable a service:

`update-rc.d {{mysql}} enable`

- Disable a service:

`update-rc.d {{mysql}} disable`

- Forcibly remove a service:

`update-rc.d -f {{mysql}} remove`
