---
title: svcs
name: svcs
path: /freedevtools/tldr/sunos/svcs
canonical: "https://hexmos.com/freedevtools/tldr/sunos/svcs/"
description: List information about running services.
category: sunos
keywords:
- service management in sunos
- list running services
- check service status
- diagnose service issues
- examine service logs
- view service dependencies
- sunos system administration
- service troubleshooting commands
- display service configuration
- manage background processes
features:
- list all services and their states
- identify non-running services
- show detailed information about a service
- display the location of a service's log file
- view the contents of a service's log file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# svcs

> List information about running services.
> More information: <https://www.unix.com/man-page/linux/1/svcs>.

- List all running services:

`svcs`

- List services that are not running:

`svcs -vx`

- List information about a service:

`svcs apache`

- Show location of service log file:

`svcs -L apache`

- Display end of a service log file:

`tail $(svcs -L apache)`
