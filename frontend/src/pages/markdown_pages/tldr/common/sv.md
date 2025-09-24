---
title: "SV - Control runsv Services | Online Free DevTools by Hexmos"
name: sv
path: /freedevtools/tldr/common/sv
canonical: "https://hexmos.com/freedevtools/tldr/common/sv/"
description: "Control services with SV, a command-line tool for managing runsv services. Start, stop, reload, and check the status of your services easily. Free online tool, no registration required."
category: common
keywords:
- runsv service control
- service management linux
- sv command line tool
- linux service manager
- systemd alternative
- process supervision tool
- runit service control
- daemon management tool
- unix service utilities
- service status checker
features:
- Start and stop services efficiently
- Check the status of running services
- Reload service configurations on-the-fly
- Run a service only once and avoid restarts
- Manage services from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sv

> Control a running runsv service.
> More information: <https://manned.org/sv.8>.

- Start a service:

`sudo sv up {{path/to/service}}`

- Stop a service:

`sudo sv down {{path/to/service}}`

- Get service status:

`sudo sv status {{path/to/service}}`

- Reload a service:

`sudo sv reload {{path/to/service}}`

- Start a service, but only if it's not running and don't restart it if it stops:

`sudo sv once {{path/to/service}}`
