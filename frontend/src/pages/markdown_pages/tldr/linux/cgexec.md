---
title: "Cgexec - Control Linux Resources | Free DevTools"
name: cgexec
path: /freedevtools/tldr/linux/cgexec
canonical: "https://hexmos.com/freedevtools/tldr/linux/cgexec/"
description: "Control Linux process resources with Cgexec. Limit CPU, memory, and other resources to improve system stability and performance. Free online tool, no registration required."
category: linux
keywords:
- linux resource control
- cgroup resource manager
- linux process manager
- linux cgroup execution
- cgexec command line
- limit linux process resources
- measure linux process resources
- linux resource isolation
- linux process control utility
- cgroup manager linux
features:
- Limit CPU usage of processes
- Control memory allocation for processes
- Execute processes within specific cgroups
- Manage resources using cgroup controllers
- Isolate processes for better resource management
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cgexec

> Limit, measure, and control resources used by processes.
> Multiple cgroup types (aka controllers) exist, such as `cpu`, `memory`, etc.
> More information: <https://manned.org/cgexec>.

- Execute a process in a given c[g]roup with given controller:

`cgexec -g {{controller}}:{{cgroup_name}} {{process_name}}`
