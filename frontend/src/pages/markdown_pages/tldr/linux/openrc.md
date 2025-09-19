---
title: "Control OpenRC - Manage Services | Online Free DevTools by Hexmos"
name: openrc
path: /freedevtools/tldr/linux/openrc
canonical: "https://hexmos.com/freedevtools/tldr/linux/openrc/"
description: "Control services with OpenRC, the service manager. Manage runlevels and service dependencies on Linux systems with ease. Free online tool, no registration required."
category: linux
keywords:
  - openrc service manager
  - linux service control
  - systemd alternative
  - runlevel management
  - rc service commands
  - openrc configuration
  - service dependency management
  - init system tools
  - gentoo openrc
  - openrc scripting
features:
  - Change the current runlevel
  - Start services during boot
  - Stop services during shutdown
  - Manage service dependencies
  - Control services without stopping existing ones
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openrc

> The OpenRC service manager.
> See also: `rc-status`, `rc-update`, `rc-service`.
> More information: <https://wiki.gentoo.org/wiki/OpenRC>.

- Change to a specific runlevel:

`sudo openrc {{runlevel_name}}`

- Change to a specific runlevel, but don't stop any existing services:

`sudo openrc {{[-n|--no-stop]}} {{runlevel_name}}`
