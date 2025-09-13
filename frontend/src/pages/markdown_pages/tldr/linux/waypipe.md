---
title: "Waypipe - Run Remote GUI Apps on Linux | Free DevTools"
name: waypipe
path: /freedevtools/tldr/linux/waypipe
canonical: "https://hexmos.com/freedevtools/tldr/linux/waypipe/"
description: "Run remote graphical applications with Waypipe on Linux. Streamline remote GUI access and improve performance. Free online tool, no registration required."
category: linux
keywords:
- Wayland remote access
- Linux remote GUI
- Waypipe SSH tunnel
- Remote application streaming
- Wayland display forwarding
- Linux graphical applications remote
- Secure remote desktop
- X11 alternative
- Remote rendering
- Network application display
features:
- Run graphical applications remotely over SSH.
- Create secure tunnels for remote application access.
- Bypass Vulkan support testing for compatibility.
- Display remote applications on a local Wayland compositor.
- Forward graphical displays securely and efficiently.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# waypipe

> Remotely run graphical applications under a Wayland compositor.
> More information: <https://gitlab.freedesktop.org/mstoeckl/waypipe>.

- Run a graphical program remotely and display it locally:

`waypipe ssh {{user}}@{{server}} {{program}}`

- Open an SSH tunnel to run any program remotely and display it locally:

`waypipe ssh {{user}}@{{server}}`

- Skip testing for Vulkan support:

`waypipe --test-skip-vulkan ssh {{user}}@{{server}} {{program}}`

- Display help:

`waypipe {{[-h|--help]}}`
