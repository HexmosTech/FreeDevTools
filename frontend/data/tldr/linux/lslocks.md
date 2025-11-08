---
title: "List System Locks - Control System Resources with lslocks | Online Free DevTools by Hexmos"
name: lslocks
path: "/freedevtools/tldr/linux/lslocks/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lslocks/"
description: "List and manage system locks with lslocks.  View lock details, filter by PID, and output in various formats (raw, JSON). Free online tool, no registration required."
category: linux
keywords:
  - system lock listing
  - lslocks command
  - system resource control
  - process lock viewer
  - linux system locks
  - unix system locks
  - pid lock identifier
  - command-line lock manager
  - json lock output
  - raw lock data
features:
  - Lists all active system locks.
  - Filters locks by Process ID (PID).
  - Provides output with customizable column headers.
  - Generates raw output without column headers.
  - Exports lock information in JSON format.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lslocks

> List local system locks.
> More information: <https://manned.org/lslocks>.

- List all local system locks:

`lslocks`

- List locks with defined column headers:

`lslocks {{[-o|--output]}} {{PID}},{{COMMAND}},{{PATH}}`

- List locks producing a raw output (no columns), and without column headers:

`lslocks {{[-r|--raw]}} {{[-n|--noheadings]}}`

- List locks by PID input:

`lslocks {{[-p|--pid]}} {{PID}}`

- List locks with JSON output to `stdout`:

`lslocks {{[-J|--json]}}`
