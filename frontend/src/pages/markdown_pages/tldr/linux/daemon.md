---
title: "Control Daemon Processes - Manage Background Tasks | Online Free DevTools by Hexmos"
name: daemon
path: /freedevtools/tldr/linux/daemon
canonical: "https://hexmos.com/freedevtools/tldr/linux/daemon/"
description: "Control daemon processes easily with the Daemon command. Manage background tasks, restart crashed processes and log output effectively. Free online tool, no registration required."
category: linux
keywords:
  - daemon process control
  - background process manager
  - linux daemon command
  - macos daemon process
  - respawn daemon process
  - daemon process logging
  - daemon process restart
  - process management command
  - systemd daemon alternative
  - daemon process killer
features:
  - Run commands as background daemons
  - Automatically restart crashed daemons
  - Log daemon output to specific files
  - Stop running daemons gracefully
  - List all active daemon processes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# daemon

> Turns other processes into daemons.
> More information: <https://manned.org/daemon.1>.

- Run a command as a daemon:

`daemon --name="{{name}}" {{command}}`

- Run a command as a daemon which will restart if the command crashes:

`daemon --name="{{name}}" {{[-r|--respawn]}} {{command}}`

- Run a command as a daemon which will restart if it crashes, with two attempts every 10 seconds:

`daemon --name="{{name}}" {{[-r|--respawn]}} --attempts=2 --delay=10 {{command}}`

- Run a command as a daemon, writing logs to a specific file:

`daemon --name="{{name}}" --errlog={{path/to/file.log}} {{command}}`

- Kill a daemon (SIGTERM):

`daemon --name="{{name}}" --stop`

- List daemons:

`daemon --list`
