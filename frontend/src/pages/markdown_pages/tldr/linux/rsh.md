---
title: "Rsh - Execute Remote Commands | Online Free DevTools by Hexmos"
name: rsh
path: /freedevtools/tldr/linux/rsh
canonical: "https://hexmos.com/freedevtools/tldr/linux/rsh/"
description: "Execute remote commands with Rsh on Linux. Securely access remote hosts and manage server administration tasks. Free online tool, no registration required."
category: linux
keywords:
- remote command execution
- linux remote shell
- rsh command line
- remote host access
- secure shell linux
- linux administration tool
- rsh remote login
- linux shell scripting
- rsh command execution
- remote process management
features:
- Execute commands on remote hosts.
- Specify usernames for remote command execution.
- Redirect standard input to /dev/null.
- Access remote servers securely.
- Manage remote systems from the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rsh

> Execute commands on a remote host.
> More information: <https://www.gnu.org/software/inetutils/manual/inetutils.html#rsh-invocation>.

- Execute a command on a remote host:

`rsh {{remote_host}} {{ls -l}}`

- Execute a command on a remote host with a specific username:

`rsh {{remote_host}} {{[-l|--user]}} {{username}} {{ls -l}}`

- Redirect `stdin` to `/dev/null` when executing a command on a remote host:

`rsh {{remote_host}} --no-err {{ls -l}}`
