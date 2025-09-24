---
title: "a2dissite - Disable Apache Sites | Online Free DevTools by Hexmos"
name: a2dissite
path: /freedevtools/tldr/linux/a2dissite
canonical: "https://hexmos.com/freedevtools/tldr/linux/a2dissite/"
description: "Disable Apache virtual hosts quickly with a2dissite. Manage website configurations on Debian-based systems efficiently. Free online tool, no registration required."
category: linux
keywords:
  - apache disable command
  - a2dissite linux
  - debian apache control
  - virtual host manager
  - website disable command
  - linux server management
  - apache configuration
  - a2dissite tutorial
  - disable apache site
  - webserver administration
features:
  - Disables specified Apache virtual host.
  - Supports quiet mode to suppress output messages.
  - Integrates seamlessly with Debian-based systems.
  - Enables efficient management of multiple websites.
  - Simplifies Apache server configuration.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# a2dissite

> Disable an Apache virtual host on Debian-based OSes.
> More information: <https://manned.org/a2dissite.8>.

- Disable a virtual host:

`sudo a2dissite {{virtual_host}}`

- Don't show informative messages:

`sudo a2dissite {{[-q|--quiet]}} {{virtual_host}}`
