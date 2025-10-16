---
title: "bpftrace Tracing - Control Linux eBPF with bpftrace | Online Free DevTools by Hexmos"
name: bpftrace
path: "/freedevtools/tldr/linux/bpftrace/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/bpftrace/"
description: "Control Linux system tracing with bpftrace, a high-level eBPF tracing language.  Analyze system calls, kernel events, and more. Free online tool, no registration required."
category: linux
keywords:
  - eBPF tracing
  - Linux tracing
  - bpftrace commands
  - system call tracing
  - kernel event tracing
  - bpftrace tutorial
  - eBPF performance analysis
  - Linux performance monitoring
  - bpftrace examples
  - eBPF probe
features:
  - List all available kernel probes and tracepoints.
  - Execute one-liner eBPF programs for quick analysis.
  - Run complex tracing programs from files for in-depth investigation.
  - Trace specific processes by PID for focused monitoring.
  - Perform dry runs to preview eBPF code before execution.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bpftrace

> High-level tracing language for Linux eBPF.
> More information: <https://github.com/bpftrace/bpftrace/blob/master/man/adoc/bpftrace.adoc>.

- List all available probes:

`sudo bpftrace -l`

- Run a one-liner program (e.g. syscall count by program):

`sudo bpftrace -e '{{tracepoint:raw_syscalls:sys_enter { @[comm] = count(); }}}'`

- Run a program from a file:

`sudo bpftrace {{path/to/file}}`

- Trace a program by PID:

`sudo bpftrace -e '{{tracepoint:raw_syscalls:sys_enter /pid == 123/ { @[comm] = count(); }}}'`

- Do a dry run and display the output in eBPF format:

`sudo bpftrace -d -e '{{one_line_program}}'`

- Display version:

`bpftrace {{[-V|--version]}}`
