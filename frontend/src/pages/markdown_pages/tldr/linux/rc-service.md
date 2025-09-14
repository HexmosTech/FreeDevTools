---
title: "Control OpenRC Services - Manage System Processes with rc-service | Free DevTools"
name: rc-service
path: /freedevtools/tldr/linux/rc-service
canonical: "https://hexmos.com/freedevtools/tldr/linux/rc-service/"
description: "Manage system processes effortlessly with rc-service. Control OpenRC services, start, stop, restart, and run custom commands. Free online tool, no registration required."
category: linux
keywords:
  - OpenRC service management
  - Linux service control
  - rc-service command
  - system process management
  - service status check
  - start OpenRC services
  - stop OpenRC services
  - restart OpenRC services
  - run custom service commands
  - resolve service location
features:
  - Check the status of OpenRC services.
  - Start OpenRC services.
  - Stop OpenRC services.
  - Restart OpenRC services.
  - Execute custom commands for OpenRC services.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rc-service

> Locate and run OpenRC services with arguments.
> See also: `openrc`.
> More information: <https://manned.org/rc-service>.

- Show a service's status:

`rc-service {{service_name}} status`

- Start a service:

`sudo rc-service {{service_name}} start`

- Stop a service:

`sudo rc-service {{service_name}} stop`

- Restart a service:

`sudo rc-service {{service_name}} restart`

- Simulate running a service's custom command:

`sudo rc-service {{[-Z|--dry-run]}} {{service_name}} {{command_name}}`

- Actually run a service's custom command:

`sudo rc-service {{service_name}} {{command_name}}`

- Resolve the location of a service definition on disk:

`sudo rc-service {{[-r|--resolve]}} {{service_name}}`
