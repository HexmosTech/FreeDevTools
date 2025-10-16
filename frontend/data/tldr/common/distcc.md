---
title: "Distribute C Compilation - Accelerate Builds with distcc | Online Free DevTools by Hexmos"
name: distcc
path: "/freedevtools/tldr/common/distcc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/distcc/"
description: "Accelerate C/C++ builds with distcc, a distributed compilation client. Share compilation load across multiple machines for faster development. Free online tool, no registration required."
category: common
keywords:
- Distributed C Compilation
- C++ Compiler Distcc
- Remote Code Build
- Fast C Compilation
- Linux Distcc
- MacOS Distcc
- Cluster Compilation
- Parallel C Builds
- Code Optimization
- Distcc Host Management
features:
- Distribute C/C++ compilation across multiple hosts.
- Accelerate build times by leveraging network resources.
- Manage remote hosts for distributed compilation.
- Integrate with make and other build systems.
- Display compilation host information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# distcc

> Distributed C/C++/ObjC compilation client that works with `distccd`.
> More information: <https://manned.org/distcc>.

- Compile a source file using a compiler like `gcc`:

`distcc {{gcc}} -c {{path/to/source.c}} -o {{path/to/output.o}}`

- Set remote hosts to distribute compilation:

`export DISTCC_HOSTS="localhost {{ip1 ip2 ...}}"`

- Compile a project with `make` using `distcc`:

`make {{[-j|--jobs]}} {{parallel_jobs}} CC="distcc {{gcc}}"`

- Show the list of current `distcc` hosts:

`distcc --show-hosts`

- Display help:

`distcc --help`

- Display version:

`distcc --version`
