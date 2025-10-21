---
title: 'Unshare Command - Execute in New Namespaces | Online Free DevTools by Hexmos'
name: unshare
path: '/freedevtools/tldr/linux/unshare/'
canonical: 'https://hexmos.com/freedevtools/tldr/linux/unshare/'
description: 'Execute commands with Unshare Command in isolated namespaces. Create separate network, mount, and PID spaces to isolate processes. Free online tool, no registration required.'
category: linux
keywords:
  - Linux unshare command
  - Unshare network namespace
  - Unshare mount namespace
  - Unshare PID namespace
  - Isolate processes Linux
  - Linux command namespace
  - Unshare command example
  - Execute command isolated
  - Linux process management
  - Command line unshare
features:
  - Execute commands in new network namespaces
  - Create isolated mount namespaces
  - Run processes in separate PID namespaces
  - Fork processes into unshared namespaces
  - Isolate commands from the host environment
ogImage: 'https://hexmos.com/freedevtools/site-banner.png'
twitterImage: 'https://hexmos.com/freedevtools/site-banner.png'
---

# unshare

> Execute a command in new user-defined namespaces.
> More information: <https://manned.org/unshare>.

- Execute a command without sharing access to connected networks:

`unshare {{[-n|--net]}} {{command}} {{command_arguments}}`

- Execute a command as a child process without sharing mounts, processes, or networks:

`unshare {{[-m|--mount]}} {{[-i|--pid]}} {{[-n|--net]}} {{[-f|--fork]}} {{command}} {{command_arguments}}`
