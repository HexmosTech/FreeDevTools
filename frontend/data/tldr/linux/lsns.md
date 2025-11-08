---
title: "Lsns - List Linux Namespaces | Online Free DevTools by Hexmos"
name: lsns
path: "/freedevtools/tldr/linux/lsns/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lsns/"
description: "List Linux namespaces with Lsns. Quickly identify process IDs and namespace types. Free online tool, no registration required. Improve system monitoring."
category: linux
keywords:
- Linux namespace listing
- Lsns command usage
- Process namespace identification
- Network namespace information
- IPC namespace details
- User namespace listing
- PID namespace inspection
- Cgroup namespace information
- Linux system monitoring
- Namespace type identification
features:
- List all available namespaces
- Output namespace information in JSON format
- Identify namespaces associated with a specific process ID
- Filter namespaces by type (mnt, net, ipc, user, pid, uts, cgroup, time)
- Customize output to show namespace ID, type, PID, and command
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lsns

> List information about all namespaces or about the specified namespace.
> More information: <https://manned.org/lsns>.

- List all namespaces:

`lsns`

- List namespaces in JSON format:

`lsns {{[-J|--json]}}`

- List namespaces associated with the specified process:

`lsns {{[-p|--task]}} {{pid}}`

- List the specified type of namespaces only:

`lsns {{[-t|--type]}} {{mnt|net|ipc|user|pid|uts|cgroup|time}}`

- List namespaces, only showing the namespace ID, type, PID, and command:

`lsns {{[-o|--output]}} {{NS,TYPE,PID,COMMAND}}`
