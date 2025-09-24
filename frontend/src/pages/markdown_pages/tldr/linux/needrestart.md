---
title: "Needrestart - Manage Outdated Processes | Online Free DevTools by Hexmos"
name: needrestart
path: /freedevtools/tldr/linux/needrestart
canonical: "https://hexmos.com/freedevtools/tldr/linux/needrestart/"
description: "Manage outdated processes efficiently with Needrestart.  Identify and restart outdated daemons and kernel components easily. Free online tool, no registration required."
category: linux
keywords:
  - daemon restart management
  - process management linux
  - system service control
  - kernel update check
  - outdated process identifier
  - linux daemon checker
  - system upgrade tool
  - needrestart command
  - batch process restart
  - configuration file process management
features:
  - Identifies outdated daemons and services.
  - Interactively restarts services with sudo privileges.
  - Supports verbose and quiet output modes for flexible usage.
  - Checks for outdated kernel and CPU microcode.
  - Offers batch mode processing for efficient management.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# needrestart

> Check which daemons need to be restarted after library upgrades.
> More information: <https://manned.org/needrestart>.

- List outdated processes:

`needrestart`

- Interactively restart services:

`sudo needrestart`

- List outdated processes in [v]erbose or [q]uiet mode:

`needrestart -{{v|q}}`

- Check if the [k]ernel is outdated:

`needrestart -k`

- Check if the CPU microcode is outdated:

`needrestart -w`

- List outdated processes in [b]atch mode:

`needrestart -b`

- List outdated processed using a specific [c]onfiguration file:

`needrestart -c {{path/to/config}}`

- Display help:

`needrestart --help`
