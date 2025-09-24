---
title: "Control Processes - Supervisord | Online Free DevTools by Hexmos"
name: supervisord
path: /freedevtools/tldr/common/supervisord
canonical: "https://hexmos.com/freedevtools/tldr/common/supervisord/"
description: "Control processes easily with Supervisord, a client/server system for UNIX-like systems. Manage processes via a configuration file. Free online tool, no registration required."
category: common
keywords:
- process management linux
- supervisord process control
- unix process manager
- process monitoring tool
- daemon control system
- configuration file management
- supervisord configuration
- process supervisor linux
- supervisord daemon
- linux process automation
features:
- Start supervisord with a specific configuration file.
- Run supervisord in foreground mode (nodaemon).
- Manage and monitor processes on UNIX-like systems.
- Control processes through a client/server architecture.
- Automate process management via configuration files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# supervisord

> Supervisor is a client/server system for controlling some processes on UNIX-like operating systems.
> Supervisord is the server part of supervisor; it is primarily managed via a configuration file.
> More information: <http://supervisord.org>.

- Start `supervisord` with specified configuration file:

`supervisord {{[-c|--configuration]}} {{path/to/file}}`

- Run supervisord in the foreground:

`supervisord {{[-n|--nodaemon]}}`
