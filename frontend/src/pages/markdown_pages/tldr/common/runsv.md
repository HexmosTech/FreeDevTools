---
title: "Control Runit Service - Start & Manage with runsv | Online Free DevTools by Hexmos"
name: runsv
path: /freedevtools/tldr/common/runsv
canonical: "https://hexmos.com/freedevtools/tldr/common/runsv/"
description: "Control Runit services with runsv. Easily start, stop, and manage services using the command line in a runit environment. Free online tool, no registration required."
category: common
keywords:
- runit service manager
- linux service control
- runsv command line
- service supervision
- runit process management
- systemd alternative
- unix service daemon
- linux process monitoring
- lightweight init system
- runit configuration
features:
- Start and manage runit services as a specific user
- Execute runit services with root privileges
- Monitor service status through command line
- Simplify runit service management
- Automate service startup and shutdown
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# runsv

> Start and manage a runit service.
> More information: <https://manned.org/runsv.8>.

- Start a runit service as the current user:

`runsv {{path/to/service}}`

- Start a runit service as root:

`sudo runsv {{path/to/service}}`
