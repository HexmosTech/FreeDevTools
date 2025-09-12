---
title: "Control OpenRC Services - Manage Runlevels | Free DevTools"
name: rc-update
path: /freedevtools/tldr/linux/rc-update
canonical: "https://hexmos.com/freedevtools/tldr/linux/rc-update/"
description: "Control OpenRC services and manage runlevels with rc-update. Add, delete, and list services for efficient system administration. Free online tool, no registration required."
category: linux
keywords:
  - openrc service management
  - linux runlevel control
  - rc-update command
  - service configuration linux
  - boot sequence management
  - systemd alternative
  - openrc service add
  - openrc service delete
  - service dependency management
  - init system control
features:
  - Add services to specific runlevels
  - Delete services from runlevels
  - List all enabled services
  - List all available services
  - Manage service dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rc-update

> Add and remove OpenRC services to and from runlevels.
> See also: `openrc`.
> More information: <https://manned.org/rc-update>.

- List enabled services and the runlevels they are added to:

`rc-update`

- List all services:

`rc-update {{[-v|--verbose]}}`

- Add a service to a runlevel:

`sudo rc-update add {{service_name}} {{runlevel}}`

- Delete a service from a runlevel:

`sudo rc-update {{[del|delete]}} {{service_name}} {{runlevel}}`

- Delete a service from all runlevels:

`sudo rc-update {{[-a|--all]}} {{[del|delete]}} {{service_name}}`
