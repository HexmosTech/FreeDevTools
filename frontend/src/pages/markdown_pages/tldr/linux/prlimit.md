---
title: "Control Process Limits - prlimit | Online Free DevTools by Hexmos"
name: prlimit
path: /freedevtools/tldr/linux/prlimit
canonical: "https://hexmos.com/freedevtools/tldr/linux/prlimit/"
description: "Control process resource limits with prlimit. Modify soft and hard limits for CPU, memory, and open files. Free online tool, no registration required."
category: linux
keywords:
  - process limit control
  - resource limit management
  - prlimit command
  - linux process limits
  - set process limits
  - get process limits
  - modify resource usage
  - process resource control
  - soft and hard limits
  - linux prlimit command
features:
  - Display current resource limits for a process.
  - Modify process resource limits including open files.
  - Set both soft and hard resource limits.
  - Run commands with custom resource limits.
  - Target specific processes by PID.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# prlimit

> Get or set process resource soft and hard limits.
> Given a process ID and one or more resources, prlimit tries to retrieve and/or modify the limits.
> More information: <https://manned.org/prlimit>.

- Display limit values for all current resources for the running parent process:

`prlimit`

- Display limit values for all current resources of a specified process:

`prlimit {{[-p|--pid]}} {{pid_number}}`

- Run a command with a custom number of open files limit:

`prlimit {{[-n|--nofile=]}}{{10}} {{command}}`
