---
title: "Control NUMA Policy - Processes and Memory | Online Free DevTools by Hexmos"
name: numactl
path: /freedevtools/tldr/linux/numactl
canonical: "https://hexmos.com/freedevtools/tldr/linux/numactl/"
description: "Control NUMA policy for processes with numactl. Optimize memory allocation and CPU affinity for improved performance on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- numa control
- numa policy
- linux numa
- memory affinity
- cpu affinity
- process control
- numa node bind
- memory interleaving
- numa optimization
- numa command line
features:
- Bind processes to specific NUMA nodes
- Control memory allocation on specified NUMA nodes
- Interleave memory allocation across multiple NUMA nodes
- Bind processes to specific physical CPUs
- Optimize application performance on NUMA systems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# numactl

> Control NUMA policy for processes or shared memory.
> More information: <https://manned.org/numactl>.

- Run a command on node 0 with memory allocated on node 0 and 1:

`numactl --cpunodebind={{0}} --membind={{0,1}} -- {{command}} {{command_arguments}}`

- Run a command on CPUs (cores) 0-4 and 8-12 of the current cpuset:

`numactl --physcpubind={{+0-4,8-12}} -- {{command}} {{command_arguments}}`

- Run a command with its memory interleaved on all CPUs:

`numactl --interleave={{all}} -- {{command}} {{command_arguments}}`
