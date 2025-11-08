---
title: "Nsenter - Control Process Namespaces | Online Free DevTools by Hexmos"
name: nsenter
path: "/freedevtools/tldr/linux/nsenter/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/nsenter/"
description: "Control process namespaces with Nsenter. Execute commands within existing process namespaces for enhanced container management. Free online tool, no registration required."
category: linux
keywords:
- linux nsenter command
- nsenter process namespace
- docker container nsenter
- linux namespace control
- process execution nsenter
- nsenter chroot jail
- linux process management
- container namespace isolation
- linux command line tools
- nsenter debug container
features:
- Execute commands within an existing process's namespaces
- Enter specific namespaces (mount, UTS, IPC, network, PID, user, cgroup)
- Run commands in a process's UTS, time, and IPC namespaces simultaneously
- Reference namespaces using procfs paths
- Target a specific process by its PID
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nsenter

> Run a new command in a running process' namespace.
> Particularly useful for Docker images or chroot jails.
> More information: <https://manned.org/nsenter>.

- Run a specific command using the same namespaces as an existing process:

`nsenter {{[-t|--target]}} {{pid}} {{[-a|--all]}} {{command}} {{command_arguments}}`

- Run a specific command in an existing process's mount|UTS|IPC|network|PID|user|cgroup|time namespace:

`nsenter {{[-t|--target]}} {{pid}} --{{mount|uts|ipc|net|pid|user|cgroup}} {{command}} {{command_arguments}}`

- Run a specific command in an existing process's UTS, time, and IPC namespaces:

`nsenter {{[-t|--target]}} {{pid}} {{[-u|--uts]}} {{[-T|--time]}} {{[-i|--ipc]}} -- {{command}} {{command_arguments}}`

- Run a specific command in an existing process's namespace by referencing procfs:

`nsenter {{[-p|--pid=]}}/proc/{{pid}}/pid/net -- {{command}} {{command_arguments}}`
