---
title: "Execute Command - Manage Host Processes with Distrobox | Free DevTools"
name: distrobox-host-exec
path: /freedevtools/tldr/unknown/distrobox-host-exec
canonical: "https://hexmos.com/freedevtools/tldr/unknown/distrobox-host-exec/"
description: "Execute commands on the host with Distrobox-host-exec for seamless container interaction. Manage host processes directly from your Distrobox. Free online tool, no registration required."
category: unknown
keywords:
- distrobox host command execution
- linux host process management
- containerized host control
- distrobox host shell access
- execute commands from distrobox
- manage linux host from container
- distrobox command line tools
- linux container host interaction
- distrobox host bridge command
- distrobox container integration
features:
- Execute commands directly on the host system
- Bypass container restrictions for host access
- Integrate host functionality into container workflow
- Run scripts and utilities on the host from a container
- Simplify host management from within a Distrobox
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# distrobox-host-exec

> Execute a command on the host from inside a Distrobox container.
> See also: `distrobox`.
> More information: <https://distrobox.it/usage/distrobox-host-exec>.

- Execute command on the host system from inside the Distrobox container:

`distrobox-host-exec "{{command}}"`

- Execute the `ls` command on the host system from inside the container:

`distrobox-host-exec ls`
