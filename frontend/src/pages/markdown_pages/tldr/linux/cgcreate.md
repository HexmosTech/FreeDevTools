---
title: "Cgroup Create - Control Resource Groups | Free DevTools"
name: cgcreate
path: /freedevtools/tldr/linux/cgcreate
canonical: "https://hexmos.com/freedevtools/tldr/linux/cgcreate/"
description: "Create resource control groups with Cgroup Create. Limit CPU, memory, and network resources for processes on Linux. Free online tool, no registration required."
category: linux
keywords:
- linux cgroup create
- cgroup management linux
- linux resource control
- linux process control
- cgroup memory management
- cgroup cpu management
- cgroup network control
- cgroup limit resources
- linux cgroups
- control groups linux
features:
- Create new cgroups for resource management
- Manage CPU usage for specific processes
- Limit memory consumption of process groups
- Control network access for defined cgroups
- Create subgroups for granular resource allocation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cgcreate

> Create cgroups, used to limit, measure, and control resources used by processes.
> `cgroups` types can be `memory`, `cpu`, `net_cls`, etc.
> More information: <https://manned.org/cgcreate>.

- Create a new [g]roup:

`cgcreate -g {{group_type}}:{{group_name}}`

- Create a new [g]roup with multiple cgroup types:

`cgcreate -g {{group_type1}},{{group_type2}}:{{group_name}}`

- Create a subgroup:

`mkdir /sys/fs/cgroup/{{group_type}}/{{group_name}}/{{subgroup_name}}`
