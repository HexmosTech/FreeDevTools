---
title: "Control SSH Daemon - Secure Remote Access | Online Free DevTools by Hexmos"
name: sshd
path: "/freedevtools/tldr/ssh/sshd/"
canonical: "https://hexmos.com/freedevtools/tldr/ssh/sshd/"
description: "Control SSH Daemon for secure remote access with SSHD. Manage secure shell connections and execute remote commands. Free online tool, no registration required."
category: common
keywords:
- ssh daemon control
- ssh secure shell
- remote access linux
- sshd configuration
- secure shell daemon
- ssh client management
- sshd command line
- linux ssh server
- macos ssh access
- unix ssh connection
features:
- Start SSH daemon in background
- Run SSHD in foreground mode
- Debug SSHD with verbose output
- Specify a custom port for SSHD
- Securely access remote machines
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sshd

> Secure Shell Daemon - allows remote machines to securely log in to the current machine.
> Remote machines can execute commands as it is executed at this machine.
> More information: <https://man.openbsd.org/sshd>.

- Start daemon in the background:

`sshd`

- Run sshd in the foreground:

`sshd -D`

- Run with verbose output (for debugging):

`sshd -D -d`

- Run on a specific port:

`sshd -p {{port}}`
