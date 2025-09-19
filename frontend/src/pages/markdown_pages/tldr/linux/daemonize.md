---
title: "Daemonize - Run Commands as Daemons | Online Free DevTools by Hexmos"
name: daemonize
path: /freedevtools/tldr/linux/daemonize
canonical: "https://hexmos.com/freedevtools/tldr/linux/daemonize/"
description: "Run commands as daemons with Daemonize. Control background processes on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- linux daemonize
- daemon process manager
- linux background process
- command daemonization
- pid file management
- linux process control
- unix daemon manager
- background command execution
- linux service manager
- daemon process creation
features:
- Run commands as background processes
- Create and manage daemon processes
- Write PID to a specified file
- Use lock files for single instance control
- Execute commands as a specific user
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# daemonize

> Run a command (that does not daemonize itself) as a Unix daemon.
> More information: <https://software.clapper.org/daemonize/>.

- Run a command as a daemon:

`daemonize {{command}} {{command_arguments}}`

- Write the PID to the specified file:

`daemonize -p {{path/to/pidfile}} {{command}} {{command_arguments}}`

- Use a lock file to ensure that only one instance runs at a time:

`daemonize -l {{path/to/lockfile}} {{command}} {{command_arguments}}`

- Use the specified user account:

`sudo daemonize -u {{user}} {{command}} {{command_arguments}}`
