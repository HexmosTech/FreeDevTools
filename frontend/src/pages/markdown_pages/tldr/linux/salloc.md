---
title: "Salloc - Allocate Nodes | Online Free DevTools by Hexmos"
name: salloc
path: /freedevtools/tldr/linux/salloc
canonical: "https://hexmos.com/freedevtools/tldr/linux/salloc/"
description: "Allocate nodes on a Linux cluster with Salloc. Manage resources and execute commands on allocated nodes seamlessly. Free online tool, no registration required."
category: linux
keywords:
- linux salloc
- cluster node allocation
- interactive shell session
- slurm salloc
- node resource management
- command execution linux
- cluster computing linux
- resource scheduling linux
- constraint-based allocation
- distributed computing linux
features:
- Allocate nodes in a Slurm cluster
- Start interactive shell sessions on cluster nodes
- Execute commands on allocated nodes
- Allocate nodes based on specified constraints
- Manage cluster resources efficiently
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# salloc

> Start an interactive shell session or execute a command by allocating one or more nodes in a cluster.
> More information: <https://slurm.schedmd.com/salloc.html>.

- Start an interactive shell session on a node in the cluster:

`salloc`

- Execute the specified command synchronously on a node in the cluster:

`salloc {{ls --all}}`

- Only allocate nodes fulfilling the specified constraints:

`salloc {{[-C|--constraint]}} {{(amd|intel)&gpu}}`
