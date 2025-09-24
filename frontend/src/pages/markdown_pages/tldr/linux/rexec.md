---
title: "Rexec Command - Execute Remote Commands | Online Free DevTools by Hexmos"
name: rexec
path: /freedevtools/tldr/linux/rexec
canonical: "https://hexmos.com/freedevtools/tldr/linux/rexec/"
description: "Execute remote commands with Rexec. A command-line utility for remote execution on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- linux remote execution
- rexec command linux
- remote shell command
- remote command execution
- linux command execution
- rexec remote host
- linux rexec example
- rexec with username
- rexec redirect stdin
- rexec specify port
features:
- Execute commands on remote hosts
- Specify username for remote execution
- Redirect stdin for remote commands
- Define a specific port for rexec connection
- Execute remote commands without error output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rexec

> Execute a command on a remote host.
> Note: Use `rexec` with caution, as it transmits data in plain text. Consider secure alternatives like SSH for encrypted communication.
> More information: <https://www.gnu.org/software/inetutils/manual/inetutils.html#rexec-invocation>.

- Execute a command on a remote host:

`rexec {{[-h|--host]}} {{remote_host}} {{ls -l}}`

- Specify the remote username on a remote host:

`rexec {{[-u|--username]}} {{username}} {{[-h|--host]}} {{remote_host}} {{ps aux}}`

- Redirect `stdin` from `/dev/null` on a remote host:

`rexec {{[-n|--noerr]}} {{[-h|--host]}} {{remote_host}} {{ls -l}}`

- Specify the remote port on a remote host:

`rexec {{[-P|--port]}} {{1234}} {{[-h|--host]}} {{remote_host}} {{ls -l}}`
