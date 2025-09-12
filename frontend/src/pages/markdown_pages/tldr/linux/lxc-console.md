---
title: "Control LXC Container - Attach to Container | Free DevTools"
name: lxc-console
path: /freedevtools/tldr/unknown/lxc-console
canonical: "https://hexmos.com/freedevtools/tldr/unknown/lxc-console/"
description: "Control LXC container sessions with lxc-console. Attach to running containers, manage console access, and debug applications remotely. Free online tool, no registration required."
category: unknown
keywords:
- lxc container console
- linux container management
- attach lxc container
- lxc remote access
- linux console access
- container terminal
- lxc-console command
- container troubleshooting
- linux container debug
- lxc session management
features:
- Attach to running LXC containers
- Access container console remotely
- Manage interactive container sessions
- Debug applications within containers
- Start console sessions using agetty
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lxc-console

> Attach to a container.
> More information: <https://linuxcontainers.org/lxc/manpages//man1/lxc-console.1.html>.

- Start a console in a container:

`agetty {{[-L|--local-line]}} {{38400}} tty1`

- Connect to an lxc console:

`sudo lxc-console {{container_name}}`

- Exit `lxc-console`:

`<Ctrl a><q>`

- Display help:

`lxc-console {{[-?|--help]}}`
