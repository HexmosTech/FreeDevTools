---
title: "Coredump Control - Manage Core Dumps | Free DevTools"
name: coredumpctl
path: "/freedevtools/tldr/unknown/coredumpctl"
canonical: "https://hexmos.com/freedevtools/tldr/unknown/coredumpctl/"
description: "Control core dumps with Coredumpctl. Inspect process failures and extract core dump data for debugging. Free online tool, no registration required."
category: unknown
keywords:
- core dump analysis
- process failure debugging
- systemd coredumpctl
- linux core dump
- application crash analysis
- program fault investigation
- gdb debugging tool
- coredump extraction
- process memory snapshot
- fault isolation tool
features:
- List all captured core dumps
- Show information about a core dump by PID
- Invoke the debugger on a core dump
- Extract a core dump to a file
- Skip debuginfod and pagination prompts during debugging
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# coredumpctl

> Retrieve and process saved core dumps and metadata.
> More information: <https://www.freedesktop.org/software/systemd/man/coredumpctl.html>.

- List all captured core dumps:

`coredumpctl`

- List captured core dumps for a program:

`coredumpctl list {{program}}`

- Show information about the core dumps matching a program with `PID`:

`coredumpctl info {{PID}}`

- Invoke debugger using the last core dump:

`coredumpctl debug`

- Invoke debugger using the last core dump of a program:

`coredumpctl debug {{program}}`

- Extract the last core dump of a program to a file:

`coredumpctl {{[-o|--output]}} {{path/to/file}} dump {{program}}`

- Skip debuginfod and pagination prompts and then print the backtrace when using `gdb`:

`coredumpctl debug {{[-A|--debugger-arguments]}} "-iex 'set debuginfod enabled on' -iex 'set pagination off' -ex bt"`
