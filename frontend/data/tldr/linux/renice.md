---
title: "Renice Command - Control Process Priority | Online Free DevTools by Hexmos"
name: renice
path: "/freedevtools/tldr/linux/renice/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/renice/"
description: "Control process priority with the renice command.  Adjust niceness values to manage system resource allocation. Free online tool, no registration required."
category: linux
keywords:
  - process priority control
  - renice command linux
  - linux process management
  - unix process niceness
  - renice scheduling priority
  - command line process control
  - system resource management
  - process niceness adjustment
  - modify process priority
  - manage process scheduling
features:
  - Adjust the priority of running processes.
  - Increase or decrease process priority using relative values.
  - Set absolute priority for specific processes by PID.
  - Manage priority of processes owned by a specific user.
  - Control priority of processes within a process group.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# renice

> Alter the scheduling priority/niceness of running processes.
> Niceness values range from -20 (most favorable to the process) to 19 (least favorable to the process).
> See also: `nice`.
> More information: <https://manned.org/renice>.

- Set the absolute priority of a running process:

`renice --priority {{3}} {{[-p|--pid]}} {{pid}}`

- Increase the priority of a running process:

`sudo renice --relative {{-4}} {{[-p|--pid]}} {{pid}}`

- Decrease the priority of all processes owned by a user:

`renice --relative {{4}} {{[-u|--user]}} {{uid|user}}`

- Set the priority of all processes that belong to a process group:

`sudo renice {{-5}} {{[-g|--pgrp]}} {{process_group}}`
