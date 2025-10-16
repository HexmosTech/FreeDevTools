---
title: "Service Control - Manage Init Scripts | Online Free DevTools by Hexmos"
name: service
path: "/freedevtools/tldr/linux/service/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/service/"
description: "Manage init scripts with Service Control. Start, stop, restart, and reload system services using command line. Free online tool, no registration required."
category: linux
keywords:
  - init script manager
  - system service control
  - linux service management
  - service start stop restart
  - init.d script runner
  - service status check
  - command line service tool
  - systemctl alternative
  - linux service control
  - service management tool
features:
  - List the status of all services
  - Start, stop, restart, or reload services
  - Perform a full restart of a service
  - Display the current status of a service
  - Manage services by executing init scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# service

> Manage services by running init scripts.
> The full script path should be omitted (`/etc/init.d/` is assumed).
> More information: <https://manned.org/service>.

- List the name and status of all services:

`service --status-all`

- Start/Stop/Restart/Reload service (start/stop should always be available):

`service {{service_name}} {{start|stop|restart|reload}}`

- Do a full restart (runs script twice with start and stop):

`service {{service_name}} --full-restart`

- Show the current status of a service:

`service {{service_name}} status`
