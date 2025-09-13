---
title: "Ulimit - Control User Resource Limits | Free DevTools"
name: ulimit
path: /freedevtools/tldr/common/ulimit
canonical: "https://hexmos.com/freedevtools/tldr/common/ulimit/"
description: "Control user resource limits with Ulimit. Manage open files, processes, and memory usage. Free online tool, no registration required."
category: common
keywords:
- process resource limits
- user resource management
- file descriptor limits
- ulimit bash command
- linux resource control
- macos resource limits
- shell resource usage
- process memory limits
- user process control
- resource allocation
features:
- Get current resource limits
- Set soft resource limits
- Set hard resource limits
- Control number of open files
- Manage max user processes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ulimit

> Get and set resource limits for user processes.
> It is a shell builtin hence not shell-agnostic.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-ulimit>.

- Get the properties of all the user limits:

`ulimit -a`

- Get hard limit for the number of simultaneously opened files:

`ulimit -H -n`

- Get soft limit for the number of simultaneously opened files:

`ulimit -S -n`

- Set max per-user process limit:

`ulimit -u {{30}}`

- Display help (Bash only):

`help ulimit`
