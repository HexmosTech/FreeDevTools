---
title: "Disable Apache Module - Control Modules on Linux | Online Free DevTools by Hexmos"
name: a2dismod
path: "/freedevtools/tldr/linux/a2dismod/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/a2dismod/"
description: "Disable Apache modules with a2dismod, a Linux command line tool. Easily manage web server configurations by enabling and disabling modules. Free online tool, no registration required."
category: linux
keywords:
- apache module disable
- linux apache module
- a2dismod command
- disable apache module linux
- debian apache module
- apache configuration tool
- web server module manager
- linux server administration
- apache module management
- ubuntu apache module
features:
- Disable a specific Apache module
- Suppress informative messages during module disabling
- Modify Apache web server configurations
- Manage enabled and disabled Apache modules
- Command-line interface for Apache module control
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# a2dismod

> Disable an Apache module on Debian-based OSes.
> More information: <https://manned.org/a2dismod.8>.

- Disable a module:

`sudo a2dismod {{module}}`

- Don't show informative messages:

`sudo a2dismod {{[-q|--quiet]}} {{module}}`
