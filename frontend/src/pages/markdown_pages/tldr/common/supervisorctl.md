---
title: "Supervisorctl - Control Processes | Free DevTools"
name: supervisorctl
path: /freedevtools/tldr/common/supervisorctl
canonical: "https://hexmos.com/freedevtools/tldr/common/supervisorctl/"
description: "Control system processes with Supervisorctl. Manage, monitor and update processes on UNIX-like systems. Free online tool, no registration required."
category: common
keywords:
- process manager control
- supervisorctl process control
- linux process management
- unix process management
- process monitoring tool
- supervisor process manager
- system process control
- application process control
- supervisorctl commands
- daemon process management
features:
- Manage and monitor system processes
- Start, stop, and restart individual processes
- Control all processes within a defined group
- View real-time process output (stdout/stderr)
- Update process configurations dynamically
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# supervisorctl

> Supervisor, a client/server system that allows its users to control a number of processes on UNIX-like operating systems.
> Supervisorctl is the command-line client piece of the supervisor which provides a shell-like interface.
> More information: <http://supervisord.org>.

- Show the status of a process (or all processes if `process_name` is not specified):

`supervisorctl status {{process_name}}`

- Start/stop/restart a process:

`supervisorctl {{start|stop|restart}} {{process_name}}`

- Start/stop/restart all processes in a group:

`supervisorctl {{start|stop|restart}} {{group_name}}:*`

- Show last 100 bytes of process `stderr`:

`supervisorctl tail -100 {{process_name}} stderr`

- Keep displaying `stdout` of a process:

`supervisorctl tail -f {{process_name}} stdout`

- Reload process configuration file to add/remove processes as necessary:

`supervisorctl update`
