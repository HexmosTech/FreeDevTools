---
title: "Autossh - Control SSH Connections and Tunnels | Online Free DevTools by Hexmos"
name: autossh
path: "/freedevtools/tldr/common/autossh/"
canonical: "https://hexmos.com/freedevtools/tldr/common/autossh/"
description: "Control SSH connections with Autossh. Auto-reconnects, manages tunnels, and keeps connections alive. Free online tool, no registration required."
category: common
keywords:
- autossh connection manager
- autossh tunnel manager
- autossh port forwarding
- autossh keep alive
- autossh reconnect ssh
- autossh ssh tunnel monitor
- autossh linux
- autossh macos
- autossh network tunnel
- autossh ssh tunnel persistent
features:
- Automatically restarts SSH connections
- Manages and monitors SSH tunnels
- Keeps port forwarding tunnels up
- Accepts all SSH flags and options
- Detects and recovers from SSH failures
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# autossh

> Run, monitor and restart SSH connections.
> Auto-reconnects to keep port forwarding tunnels up. Accepts all SSH flags.
> More information: <https://manned.org/autossh>.

- Start an SSH session, restarting when the [M]onitoring port fails to return data:

`autossh -M {{monitor_port}} "{{ssh_command}}"`

- Forward a [L]ocal port to a remote one, restarting when necessary:

`autossh -M {{monitor_port}} -L {{local_port}}:localhost:{{remote_port}} {{user}}@{{host}}`

- Fork `autossh` into the background before executing SSH and do [N]ot open a remote shell:

`autossh -f -M {{monitor_port}} -N "{{ssh_command}}"`

- Run in the background, with no monitoring port, and instead send SSH keep-alive packets every 10 seconds to detect failure:

`autossh -f -M 0 -N -o "ServerAliveInterval 10" -o "ServerAliveCountMax 3" "{{ssh_command}}"`

- Run in the background, with no monitoring port and no remote shell, exiting if the port forward fails:

`autossh -f -M 0 -N -o "ServerAliveInterval 10" -o "ServerAliveCountMax 3" -o ExitOnForwardFailure=yes -L {{local_port}}:localhost:{{remote_port}} {{user}}@{{host}}`

- Run in the background, logging `autossh` debug output and SSH verbose output to files:

`AUTOSSH_DEBUG=1 AUTOSSH_LOGFILE={{path/to/autossh_log_file.log}} autossh -f -M {{monitor_port}} -v -E {{path/to/ssh_log_file.log}} {{ssh_command}}`
