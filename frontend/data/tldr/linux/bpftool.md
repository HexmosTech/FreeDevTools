---
title: "BPF Program Manager - Control eBPF Programs | Online Free DevTools by Hexmos"
name: bpftool
path: "/freedevtools/tldr/linux/bpftool/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/bpftool/"
description: "Control and inspect eBPF programs with bpftool. Manage maps, attachments, and features easily. Free online tool, no registration required."
category: linux
keywords:
  - eBPF program manager
  - eBPF program control
  - eBPF map management
  - linux eBPF tools
  - bpftool commands
  - eBPF program listing
  - eBPF attachment inspection
  - bpftool network analysis
  - eBPF performance analysis
  - system eBPF monitoring
features:
  - List and manage loaded eBPF programs
  - Inspect and control eBPF program attachments
  - Manage and examine eBPF maps
  - Probe network devices for eBPF features
  - Execute commands in batch mode from a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bpftool

> Inspect and manipulate eBPF programs and maps in a simple way.
> Some subcommands such as `prog` have their own usage documentation.
> More information: <https://manned.org/bpftool>.

- List information about loaded `eBPF` programs:

`bpftool prog list`

- List `eBPF` program attachments in the kernel networking subsystem:

`bpftool net list`

- List all active links:

`bpftool link list`

- List all `raw_tracepoint`, `tracepoint`, `kprobe` attachments in the system:

`bpftool perf list`

- List `BPF Type Format (BTF)` data:

`bpftool btf list`

- List information about loaded maps:

`bpftool map list`

- Probe a network device "eth0" for supported `eBPF` features:

`bpftool feature probe dev {{eth0}}`

- Run commands in batch mode from a file:

`bpftool batch file {{myfile}}`
