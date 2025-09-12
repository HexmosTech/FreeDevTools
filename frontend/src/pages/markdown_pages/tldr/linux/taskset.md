---
title: "Taskset - Control CPU Affinity | Free DevTools"
name: taskset
path: /freedevtools/tldr/unknown/taskset
canonical: "https://hexmos.com/freedevtools/tldr/unknown/taskset/"
description: "Control CPU affinity with Taskset. Easily manage process CPU assignments for optimal performance and resource allocation. Free online tool, no registration required."
category: unknown
keywords:
- taskset cpu affinity
- cpu affinity control
- process cpu assignment
- linux taskset
- process scheduling
- core assignment
- process binding
- cpu core pinning
- cpu performance tuning
- taskset command
features:
- Get the CPU affinity of a running process.
- Set the CPU affinity of a running process.
- Start a new process with a specified CPU affinity.
- Define CPU affinity for multiple non-sequential CPUs.
- Define CPU affinity for a range of CPUs.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# taskset

> Get or set a process' CPU affinity or start a new process with a defined CPU affinity.
> More information: <https://manned.org/taskset>.

- Get a running process' CPU affinity by PID:

`taskset {{[-p|--pid]}} {{[-c|--cpu-list]}} {{pid}}`

- Set a running process' CPU affinity by PID:

`taskset {{[-p|--pid]}} {{[-c|--cpu-list]}} {{cpu_id}} {{pid}}`

- Start a new process with affinity for a single CPU:

`taskset {{[-c|--cpu-list]}} {{cpu_id}} {{command}}`

- Start a new process with affinity for multiple non-sequential CPUs:

`taskset {{[-c|--cpu-list]}} {{cpu_id_1}},{{cpu_id_2}},{{cpu_id_3}}`

- Start a new process with affinity for CPUs 1 through 4:

`taskset {{[-c|--cpu-list]}} {{cpu_id_1}}-{{cpu_id_4}}`
