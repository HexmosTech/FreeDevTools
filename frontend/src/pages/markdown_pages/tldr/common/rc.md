---
title: "Reverse Shell - Control Remote Access with rc | Online Free DevTools by Hexmos"
name: rc
path: /freedevtools/tldr/common/rc
canonical: "https://hexmos.com/freedevtools/tldr/common/rc/"
description: "Control remote access instantly with rc Reverse Shell. Establish secure connections, execute commands, and manage systems remotely with this versatile networking tool. Free online tool, no registration required."
category: common
keywords:
- reverse shell command
- remote access shell
- network listener tool
- port scanner utility
- command line shell
- netcat alternative
- rustcat tool
- remote server control
- network troubleshooting
- linux reverse shell
features:
- Listen on specified ports for incoming connections
- Establish reverse shell connections to remote hosts
- Execute commands remotely on target systems
- Facilitate secure remote system administration
- Provide a minimalist alternative to netcat
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rc

> A modern simplistic port listener & reverse shell.
> Similar to `nc`.
> More information: <https://github.com/robiot/rustcat/wiki/Basic-Usage>.

- Start listening on a specific port:

`rc -lp {{port}}`

- Start a reverse shell:

`rc {{host}} {{port}} -r {{shell}}`
