---
title: "Stress Test - CPU, Memory & IO Load on Linux | Online Free DevTools by Hexmos"
name: stress
path: /freedevtools/tldr/linux/stress
canonical: "https://hexmos.com/freedevtools/tldr/linux/stress/"
description: "Stress test Linux systems with Stress. Simulate high CPU load, memory pressure, and I/O bottlenecks. Free online tool, no registration required."
category: linux
keywords:
- Linux CPU stress test
- Linux memory stress test
- Linux IO stress test
- stress test Linux
- Linux system load test
- CPU load simulation Linux
- memory pressure test Linux
- disk I/O load Linux
- Linux performance testing
- Linux resource exhaustion
features:
- Simulate high CPU load with multiple workers
- Stress test memory allocation and usage
- Generate intensive disk I/O operations
- Set custom timeouts for stress tests
- Control the number of workers for each stressor
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stress

> Stress test CPU, memory, and IO on a Linux system.
> More information: <https://manned.org/stress>.

- Spawn 4 workers to stress test CPU:

`stress {{[-c|--cpu]}} {{4}}`

- Spawn 2 workers to stress test IO and timeout after 5 seconds:

`stress {{[-i|--io]}} {{2}} {{[-t|--timeout]}} {{5}}`

- Spawn 2 workers to stress test memory (each worker allocates 256M bytes):

`stress {{[-m|--vm]}} {{2}} --vm-bytes {{256M}}`

- Spawn 2 workers spinning on write()/unlink() (each worker writes 1G bytes):

`stress {{[-d|--hdd]}} {{2}} --hdd-bytes {{1GB}}`
