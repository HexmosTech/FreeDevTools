---
title: "Control CPU Usage - Limit Process Consumption | Online Free DevTools by Hexmos"
name: cpulimit
path: "/freedevtools/tldr/linux/cpulimit/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/cpulimit/"
description: "Control CPU usage precisely with cpulimit. Throttle resource consumption & prevent process hogging with this command line tool. Free online tool, no registration required."
category: linux
keywords:
- linux cpu limit
- process cpu control
- throttle cpu usage
- cpu resource management
- cpulimit command
- linux process limit
- reduce cpu consumption
- limit program cpu
- linux resource control
- cpu usage throttle
features:
- Limit CPU usage of running processes.
- Restrict CPU consumption by executable name.
- Launch processes with CPU usage limits.
- Run CPU-limited processes in the background.
- Automatically kill processes exceeding CPU limits.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cpulimit

> A tool to throttle the CPU usage of other processes.
> More information: <https://manned.org/cpulimit>.

- Limit an existing process with PID 1234 to only use 25% of the CPU:

`cpulimit {{[-p|--pid]}} {{1234}} {{[-l|--limit]}} {{25%}}`

- Limit an existing program by its executable name:

`cpulimit {{[-e|--exe]}} {{program}} {{[-l|--limit]}} {{25}}`

- Launch a given program and limit it to only use 50% of the CPU:

`cpulimit {{[-l|--limit]}} {{50}} -- {{program argument1 argument2 ...}}`

- Launch a program, limit its CPU usage to 50% and run cpulimit in the background:

`cpulimit {{[-l|--limit]}} {{50}} {{[-b|--background]}} -- {{program}}`

- Kill its process if the program's CPU usage goes over 50%:

`cpulimit {{[-l|--limit]}} 50 {{[-k|--kill]}} -- {{program}}`

- Throttle both it and its child processes so that none go about 25% CPU:

`cpulimit {{[-l|--limit]}} {{25}} {{[-m|--monitor-forks]}} -- {{program}}`
