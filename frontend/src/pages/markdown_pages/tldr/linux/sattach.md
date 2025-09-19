---
title: "Slurm Attach - Control Job Steps | Online Free DevTools by Hexmos"
name: sattach
path: /freedevtools/tldr/linux/sattach
canonical: "https://hexmos.com/freedevtools/tldr/linux/sattach/"
description: "Control Slurm job steps effortlessly with Slurm Attach. Monitor, debug, and interact with running jobs. Free online tool, no registration required."
category: linux
keywords:
  - Slurm job attach
  - Slurm step control
  - Slurm interactive debugging
  - Slurm session management
  - Linux job monitoring
  - Cluster job attach
  - Slurm remote access
  - Slurm command line
  - Slurm debugging tool
  - Slurm job management
features:
  - Attach to running Slurm job steps
  - Redirect I/O streams to the current terminal
  - Use console input as stdin for specific tasks
  - Filter stdin/stderr of specific tasks
  - Interact with Slurm jobs in real-time
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sattach

> Attach to a Slurm job step.
> More information: <https://slurm.schedmd.com/sattach.html>.

- Redirect the IO streams (`stdout`, `stderr`, and `stdin`) of a Slurm job step to the current terminal:

`sattach {{jobid}}.{{stepid}}`

- Use the current console's input as `stdin` to the specified task:

`sattach --input-filter {{task_number}}`

- Only redirect `stdin`/`stderr` of the specified task:

`sattach --{{output|error}}-filter {{task_number}}`
