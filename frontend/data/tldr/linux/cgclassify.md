---
title: "CGClassify - Control Linux Cgroups | Online Free DevTools by Hexmos"
name: cgclassify
path: "/freedevtools/tldr/linux/cgclassify/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/cgclassify/"
description: "Control Linux cgroups effectively with CGClassify. Isolate resources and manage processes with ease. Free online tool, no registration required."
category: linux
keywords:
- linux cgroups manager
- cgroup process controller
- linux resource isolation
- process management linux
- cgclassify command line
- cgroup configuration
- linux process cgroup
- systemd cgroup control
- cgroup resource limiter
- linux containerization
features:
- Move running tasks to specific cgroups
- Classify processes based on configuration
- Apply CPU hierarchy rules to processes
- Manage process resources effectively
- Isolate and control process execution
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cgclassify

> Move running tasks to `cgroups`.
> More information: <https://manned.org/cgclassify>.

- Move the process with a specific PID to the control [g]roup student in the CPU hierarchy:

`cgclassify -g {{cpu:student}} {{1234}}`

- Move the process with a specific PID to control groups based on the `/etc/cgrules.conf` configuration file:

`cgclassify {{1234}}`

- Move the process with a specific PID to the control [g]roup student in the CPU hierarchy. Note: The daemon of the service `cgred` does not change `cgroups` of the specific PID and its children (based on `/etc/cgrules.conf`):

`cgclassify --sticky -g {{cpu:/student}} {{1234}}`
