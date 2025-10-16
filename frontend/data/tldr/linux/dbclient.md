---
title: "DB Client - Secure Shell Access | Online Free DevTools by Hexmos"
name: dbclient
path: "/freedevtools/tldr/linux/dbclient/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/dbclient/"
description: "Secure shell access with dbclient. Connect securely to remote servers and execute commands. Free online tool, no registration required."
category: linux
keywords:
- lightweight ssh client
- secure shell access
- linux ssh client
- command line ssh tool
- dropbear ssh client
- remote server connection
- ssh key authentication
- agent forwarding ssh
- secure terminal access
- dbclient linux
features:
- Establish secure shell connections to remote servers
- Authenticate using password or SSH key
- Execute commands on remote hosts
- Forward agent connections securely
- Specify port for secure connections
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dbclient

> Lightweight Dropbear Secure Shell client.
> More information: <https://manned.org/dbclient>.

- Connect to a remote host:

`dbclient {{user}}@{{host}}`

- Connect to a remote host on [p]ort 2222:

`dbclient {{user}}@{{host}} -p 2222`

- Connect to a remote host using a specific [i]dentity key in dropbear format:

`dbclient -i {{path/to/key_file}} {{user}}@{{host}}`

- Run a command on the remote host with a [t]ty allocation allowing interaction with the remote command:

`dbclient {{user}}@{{host}} -t {{command}} {{argument1 argument2 ...}}`

- Connect and forward [A]gent connections to remote host:

`dbclient -A {{user}}@{{host}}`
